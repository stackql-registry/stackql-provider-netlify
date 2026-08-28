# Engineering Notes

Findings from the 2026-08 refresh of the `netlify` provider (the previous build dated from April 2023 and predated every current convention: `@stackql/provider-utils` 0.4.x, tag-per-service split, no pagination config, no `replace` verb, 18 non-selectable resources, `NETLIFY_AUTH_TOKEN` auth). Sources: the upstream Swagger document (`info.version` 2.57.0, fetched 2026-08-28), the any-sdk and stackql source trees (`any-sdk` HEAD `f5d5ba6`, `stackql` HEAD `ee0dd87` pinning `any-sdk v0.5.4-alpha01`, verified identical for every behaviour below), live calls against `api.netlify.com`, and the github / clickhouse sibling builds.

## 1. Spec source and preprocessing

Netlify publishes a Swagger 2.0 document, not OpenAPI 3. `@stackql/provider-utils` `split` does not convert (it copies `openapi: apiDoc.openapi || "3.0.0"` and expects `components`), so `provider-dev/scripts/preprocess.mjs` runs `swagger2openapi` first. Two upstream defects are corrected there:

- `GET /api/v1/sites/{site_id}/env` repeats the base path (`basePath` is already `/api/v1`); the key is rewritten to `/sites/{site_id}/env`.
- Three operations are tagged `x-internal` (`updatePlugin`, `getLatestPluginRuns`, `createPluginRun` - build plugin runs, used by Netlify's own build system). They are dropped rather than exposed.

Result: 113 paths, 177 operations, 103 schemas. Both `swagger.json` and the preprocessed `openapi.json` are committed so a refresh is a reviewed diff.

## 2. Service split

The 35 upstream tags are too fine (`assetPublicSignature`, `buildLogMsg`, `hookType` each carry one operation) so the split uses a function discriminator keyed by operationId (`provider-dev/scripts/svc-discriminator.mjs`) producing 17 services. An operationId the map does not know fails the split - a spec refresh that adds endpoints is a deliberate decision.

## 3. Pagination (Link header)

Netlify paginates with `page` / `per_page` query parameters and an RFC 5988 `Link` header (`rel="next"`, `rel="last"`), 100 items per page by default. Verified against the any-sdk source:

- `internal/anysdk/pagination.go:137-147` - the header transformer returns the **full next-page URL** from the `Link` header.
- `internal/anysdk/http_armoury_params.go:114-153` - only `requestToken.location: request` replaces the request URL; `location: query` would stuff the URL into a query parameter.

So `provider-dev/config/service_config.json` declares, at the root of every service document (the only place `x-stackQL-config` is read - `internal/anysdk/service.go:203-206`):

```yaml
x-stackQL-config:
  pagination:
    requestToken: {key: '', location: request}
    responseToken: {key: Link, location: header}
```

The docs example in `any-sdk/docs/provider_spec.md:685-696` (`requestToken: {key: page, location: query}` + `algorithm: link_header_next`) is wrong on both counts; `link_header_next` is not a registered algorithm. Provider-level `config.pagination.requestToken/responseToken` never resolve (copy-paste bug at `internal/anysdk/operation_store.go:622-626` and `652-656`), which is why the config is injected per service. Live proof: `SELECT count(*) FROM netlify.sites.sites WHERE per_page = 1` returns the same count as the unpaged listing (the smoke case `pagination_follows_link_header`).

`LIMIT` is not pushed to `per_page` (no `queryParamPushdown.top`): the page loop does not stop early once a LIMIT is satisfied, so a smaller page size only multiplies requests (same decision as the github build). Pass `per_page` in the `WHERE` clause to control page size.

## 4. Bare-array list responses

41 list endpoints return a top-level JSON array. `normalize` (provider-utils 0.7.x) wraps those in `{<key>: [...]}` plus a Go-template transform; `post_normalize.mjs` (copied from the github build) reverts that because stackql iterates bare arrays natively and the transform is runtime cost for no gain. Verified live on every list resource.

## 5. Request bodies the naive translator cannot route

`--naive-req-body-translate` puts `requestBodyTranslate.algorithm: naive` on every POST/PUT/PATCH, so body fields are plain columns (no `data__` prefix). The translator builds its matchers only from the **top-level properties of the operation's request body schema** (`internal/anysdk/operation_store.go:1092-1116`); with none, nothing reaches the body. Five operations are affected and handled in `post_process.mjs`:

| Operation | Body shape | Surface |
|---|---|---|
| `createEnvVars` | bare array of env vars | column `env_vars` (JSON array), transform `{{ toJson .env_vars }}` |
| `updateSiteMetadata` | opaque object | column `metadata`, transform `{{ toJson .metadata }}` |
| `createServiceInstance` / `updateServiceInstance` | opaque object | column `config` |
| `uploadDeployFile` / `uploadDeployFunction` / `uploadDeployEdgeFunction` | `application/octet-stream` | column `file_body`, transform `{{ .file_body }}` (`golang_template_json_v0.1.0`), `x-stackQL-stringOnly` |

Wire-verified finding: setting only `request.schema_override` is **not** enough - the matchers come from the operation's own `requestBody`, so with the override alone the column was routed as a server parameter and stackql sent `null` (`http request body = 'null'`). `post_process.mjs` therefore rewrites the operation's `requestBody` to the synthetic schema as well; after that the wire body was the JSON array and the create succeeded.

Template facts (`pkg/stream_transform/template_stream_transform.go`): for `golang_template_json_*` types `.` is the parsed body map; `toJson` / `kindOf` exist only from `v0.2.0` upward (`v0.1.0` has neither). A declared request transform always runs, even on an empty body, and it also fires for `EXEC ... @@json` where `.` is the parsed `@@json` literal (`internal/anysdk/request.go:182-188`).

## 6. Opaque object responses

`normalize` lowers propertyless `type: object` schemas to `type: string`, which is right for nested fields but leaves `getSiteMetadata` and `showServiceManifest` with no columns (`DESCRIBE` fails with `schema unsuitable for select query`). `post_process.mjs` wraps each under a single JSON column (`metadata`, `manifest`) with a response transform and `schema_override`; `SELECT metadata FROM netlify.sites.site_metadata WHERE site_id = ...` returns the object.

## 7. `values` is a SQL keyword

The env var object's context values live in a field named `values`. The stackql parser rejects it in a select list and in `REPLACE ... SET`, with or without quoting (`"values"`, backticks and `[values]` all fail). The read methods therefore rename it to `env_values` in the response (transform + renamed schema, so `DESCRIBE` agrees) and the PUT method accepts `env_values` and emits `values` on the wire. `SELECT *` on the resource shows `env_values`.

The PUT has a second wrinkle: Netlify requires `key` in the body as well as in the path (`400 Invalid request structure` without it, verified with curl), but stackql merges SET and WHERE columns into one parameter map, so a `SET key = ...` is consumed by the `{key}` path parameter and never reaches the body (wire-verified: `"key": null`). The body key is therefore a distinct `env_key` column: `REPLACE netlify.env.env_vars SET env_key = 'X', env_values = '[...]' WHERE account_id = ... AND key = 'X'`. These are the two places the SQL surface differs from the API field names.

## 8. Type-blind JSON coercion of string body values

`internal/anysdk/shims.go:160-209`: every string body value is tried as JSON first (object, then array) regardless of the property's declared type; only `x-stackQL-stringOnly: true` opts out. A raw file body or an env var value that happens to be valid JSON would be sent as an object. `post_process.mjs` marks `file_body` on the three uploads and `value` on `setEnvVarValue` (and the nested `values[].value` in the synthetic env var schemas) as string-only.

## 9. Lifecycle operations are `exec` methods, not resources

Method dispatch for `EXEC` is by method key (`stackql/internal/stackql/taxonomy/hierarchy.go:334-341`); the `exec` verb only affects `SHOW METHODS`. A method listed under `methods:` but not referenced from any `sqlVerbs` array is EXEC-able, and the generator writes exactly that for `stackql_verb = exec`. So `sites.enable/disable/unlink_repo/purge_cache`, `deploys.cancel/restore/rollback/lock/unlock/upload_*`, `builds.notify_start/update_log`, `hooks.enable`, `split_tests.publish/unpublish`, `dns_zones.transfer`, `tickets.exchange`, `branches.reset`, `migrations.run`, `snapshots.restore`, the agent runner actions and the dev server actions all sit on their parent resource. Zero resources are non-selectable (the 2023 build had 18). An explicit `exec:` key in `sqlVerbs` would fail `anysdk aot` schema validation, so none is written.

## 10. Verb mapping

PATCH -> `update`, PUT -> `replace`, POST -> `insert`, DELETE -> `delete`. Netlify uses PUT for most edits (build hooks, hooks, snippets, deploys, members, accounts), so those are `REPLACE` statements; `updateSite` (PATCH) is `UPDATE`. Within a resource, methods on one verb have distinct required-parameter signatures (`deploys.get` = site_id + deploy_id, `deploys.get_by_id` = deploy_id; `env_vars.delete` = account_id + key, `env_vars.delete_value` = + id). The generator orders each verb's methods most-specific first.

## 11. No env var default for the team path parameters

Terraform's `default_team_slug` / `default_team_id` have no StackQL equivalent: `x-stackQL-envVar` is consumed only for OpenAPI server variables (`internal/anysdk/server.go:29-59`), and Netlify's API is served from a single fixed host, so `account_slug` / `account_id` cannot be defaulted from the environment. Terraform's `NETLIFY_API_ENDPOINT` override was also not modelled as a server variable: it exists for Netlify's internal testing, and a templated host would surface as a parameter on every method in the generated docs.

## 12. Casing

The API is already snake_case in every response field and query parameter (the two exceptions, `scannedFilesCount` / `secretsScanMatches`, are inside the deploy validations report). The single camelCase path parameter, `addonName`, is renamed to `addon_name` by `--update-path-param-names`. `config.snake_case_aliases` is deliberately not enabled - a runtime column-renaming pass for two nested fields is not worth the surface change. Query parameters keep their wire names (`deploy-previews`, `latest-published`).

## 13. Auth

`type: bearer` on `NETLIFY_API_TOKEN` (Terraform parity; the 2023 build used `NETLIFY_AUTH_TOKEN`, the Netlify CLI's name). Verified in `pkg/auth_util/auth_util.go:370-387` that `bearer` hardcodes the `Authorization: Bearer <token>` header. The env var rename is a breaking change for existing users of the old provider; `--auth='{"netlify":{"type":"bearer","credentialsenvvar":"NETLIFY_AUTH_TOKEN"}}'` restores the old name.

## 14. Breaking changes from the 2023 provider

Resource and service names changed wholesale (the old build had one service per upstream tag with resources such as `site.sites_unlink_repo`, `dns_zone.dns_zones_dns_records`, `deploy.sites_deploys`). Method names are now `list`/`get`/`create`/`update`/`delete` style instead of raw operationIds. New surfaces since 2023: environment variables, cache purge, dev servers and dev server hooks, agent runners, the AI gateway, Netlify DB. `all_services.csv` is now committed as the durable record of the wiring; future refreshes must not move an operation to a different resource or rename a resource without a note here.

## 15. Live verification (2026-08-28)

Against the `jeffreyaven` team (Personal plan) and the `sqlpedia` site, through both `stackql exec` and the pgwire server:

- reads across sites, deploys (list, get, get_by_id, `state` pushdown), builds, build hooks, SSL certificates, site metadata (transform), env vars (`env_values` rename), DNS zones and records, accounts, members, hook types, add-on services, current user
- pagination via `per_page = 1`
- env var lifecycle: `INSERT` (array body via transform) -> `SELECT` -> `UPDATE` (PATCH) -> `REPLACE` (PUT, `env_values`) -> `json_each` -> `DELETE` -> gone
- `EXEC netlify.sites.sites.purge_cache`

Netlify returns `403 Upgrade your Netlify account to set specific scopes` when `scopes` is supplied on a Personal plan, so the smoke suite omits it. `service_manifests.get` for some add-ons returns an upstream 500 (`no address for ...execute-api...`), unrelated to the provider.

## Open

- `builds.create` (`POST /sites/{site_id}/builds`) declares `multipart/form-data` with an optional `zip` file. It is mapped as `insert` but has not been exercised live (it would trigger a real build); confirm the no-body form (`INSERT ... (site_id, clear_cache)`) once a throwaway site with a linked repo is available.
- `deploys.create` with a `files` digest map and the three `upload_*` methods form the manual deploy flow; the octet-stream upload path is wired the same way as the cloudflare KV write but has not been round-tripped live.
