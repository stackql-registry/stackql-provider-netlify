# CLAUDE.md

## Project

This repository builds and documents the `netlify` provider for [StackQL](https://github.com/stackql/stackql), enabling SQL-based query and provisioning operations against the Netlify API - sites, deploys and deploy keys, builds and build hooks, environment variables, DNS zones and records, functions, forms and submissions, outgoing hooks, accounts (teams) and members, OAuth tickets, add-on services, split tests, dev servers, agent runners, the AI gateway and Netlify DB.

The provider is a DIRECT build from Netlify's published Swagger 2.0 document (`https://open-api.netlify.com/swagger.json`, converted to OpenAPI 3.0 in a preprocessing step) using the `@stackql/provider-utils` pipeline. Netlify has no public GraphQL API, so there is no GraphQL merge step. The repository follows the same conventions as the sibling `stackql-provider-github` and `stackql-provider-clickhouse` projects (branch `feature/provider-dev`): Makefile-driven pipeline, deterministic mapping scripts, checked-in `all_services.csv`, meta-route gate, pytest smoke suite in exec and pgwire modes, Docusaurus 3.10 microsite on the shared config.

## Spec source

Netlify serves one unversioned Swagger 2.0 document (`info.version` 2.57.0 at the time of the refresh, 180 operations). `make spec` downloads it to `provider-dev/downloaded/swagger.json`; `make preprocess` (`provider-dev/scripts/preprocess.mjs`) converts it to OpenAPI 3.0 with `swagger2openapi`, fixes upstream path bugs (`/api/v1/sites/{site_id}/env` repeats the base path) and drops the three operations tagged `x-internal` (build plugin runs), writing `provider-dev/downloaded/openapi.json`. Both files are committed so a refresh is a reviewed diff; the scheduled `spec-drift` CI job opens an issue when the served document moves.

## Design principles

- **Terraform env var parity** - auth is `type: bearer` on `NETLIFY_API_TOKEN`, the same variable the official Terraform provider reads. No convenience env var exists for the team (`account_slug` / `account_id`) path parameters: any-sdk only resolves `x-stackQL-envVar` on OpenAPI server variables, and Netlify's API has a fixed host, so Terraform's `default_team_slug` / `default_team_id` have no StackQL equivalent (recorded in NOTES.md).
- **Services by API area, not by upstream tag** - the spec has 35 tags, several with one operation. `provider-dev/scripts/svc-discriminator.mjs` maps every operationId to one of 17 services (`sites`, `deploys`, `builds`, `env`, `dns`, `functions`, `forms`, `hooks`, `accounts`, `users`, `oauth`, `services`, `split_tests`, `dev_servers`, `agent_runners`, `ai_gateway`, `database`) and fails on an operation it does not know.
- **Every resource is selectable** - lifecycle operations (enable/disable/unlink a site, cancel/lock/unlock/restore/rollback a deploy, purge the cache, publish a split test, transfer a DNS zone, upload deploy files, ...) are `exec` methods on the resource they act on, never resources of their own. The meta-route gate reports zero non-selectable resources.
- **Bare arrays stay bare** - normalize wraps array-returning list responses in an envelope plus a Go-template transform; `post_normalize.mjs` reverts that for all 41 Netlify list endpoints because stackql iterates bare arrays natively (the github project made the same call).
- **Pagination is declared, not special-cased** - every service carries `x-stackQL-config.pagination` with the `Link` header `rel="next"` URL as the response token and `location: request` for the request token (the token is a full URL, so it replaces the request URL). `LIMIT` is not pushed down to `per_page`; pass `per_page` in the `WHERE` clause to control page size.
- **Predicate pushdown through declared parameters** - `WHERE` columns that match a path or query parameter (`site_id`, `account_id`, `state`, `branch`, `context_name`, `scope`, `name`, `filter`, `page`, `per_page`, ...) are sent to the API; anything else is filtered locally.
- **snake_case surface** - the API is already snake_case; the one camelCase path parameter (`addonName`) is renamed with `--update-path-param-names`. `config.snake_case_aliases` is not enabled (only two response fields would change).
- **Naive request body translation** - every POST/PUT/PATCH gets `requestBodyTranslate.algorithm: naive`, so request body fields are plain columns (no `data__` prefix). The bodies that are not flat objects (the env var create array, the opaque site metadata and add-on config objects, the three octet-stream deploy uploads) get a synthetic one-column request schema and a request transform in `post_process.mjs`. The two opaque object responses (`site_metadata`, `service_manifests`) get a one-column response schema and transform the same way.
- **PUT is `replace`, PATCH is `update`** - `updateSite` (PATCH) is `UPDATE`; `updateEnvVar` (PUT, full replacement) is `REPLACE` while `setEnvVarValue` (PATCH, one context value) is `UPDATE`. Method names reflect that (`update` vs `set_value`).
- **Two renamed env var fields** - the API's `values` is exposed as `env_values` (`values` is a SQL keyword the parser rejects even when quoted) and the `REPLACE` body key is `env_key` (Netlify requires the key in the body as well as the path, and a `SET key` is consumed by the path parameter). Everything else keeps its API name; see NOTES.md 7.

## Toolchain rules

- Use the **latest** `@stackql/provider-utils` (see [npm](https://www.npmjs.com/package/@stackql/provider-utils)); check for a newer version before starting work.
- Node.js >= 20, `type: module`. The two CLI entry points (`provider-dev-utils.mjs`, `docgen-utils.mjs`) are wrapped as npm scripts invoked through `node`, flags passed after npm's `--`.
- A local `stackql` binary is required for testing (`$STACKQL_BIN`, `./stackql`, or on `PATH`; `bin/start-server.sh` downloads one otherwise). Under WSL point `STACKQL_BIN` at the Linux binary.
- Run the pipeline from Linux, macOS or WSL - the server scripts need `pgrep`/`ps` and the smoke harness downloads a Linux binary.

## Repository layout

```
Makefile                   build / test / docs targets (make help)
bin/                       start-server.sh (registry-mode local|prod|dev), stop-server.sh, server-status.sh, test-meta-routes.cjs
provider-dev/
  downloaded/              swagger.json (upstream) + openapi.json (preprocessed), both committed
  source/                  split + normalized per-service specs (generated, committed)
  config/                  all_services.csv (durable operation -> resource map), servers.json, provider_config.json, service_config.json
  scripts/                 preprocess.mjs, svc-discriminator.mjs, post_normalize.mjs, map_operations.mjs, post_process.mjs
  openapi/src/netlify/     generated provider (publish this)
  docgen/provider-data/    headerContent1.txt / headerContent2.txt for the docs index page
  test/                    pytest smoke suite (conftest.py, test_tier1.py, tier1.yaml, provider.yaml)
website/                   Docusaurus 3.10 microsite on the shared stackql/docusaurus-config
CLAUDE.md, NOTES.md, README.md
```

## Build pipeline

Every step is deterministic and re-runnable. Manual decisions are rules in scripts, never hand edits to generated files. `make all` runs steps 0-7; `make help` lists the targets.

0. `make spec` / `make preprocess` - download and convert the spec (see Spec source).
1. `make split` - `npm run split` with `--svc-discriminator function --svc-discriminator-fn provider-dev/scripts/svc-discriminator.mjs`.
2. `make normalize` - `npm run normalize` then `post_normalize.mjs` (bare-array revert).
3. `make mappings` - `npm run generate-mappings` (analyze keeps existing CSV rows) then `map_operations.mjs`: fills new operations from its table, prunes retired ones, resyncs moved paths, reports rows that disagree with the table, fails on unmapped operations. The CSV is the durable record of the wiring - do not rename resources or move operations between resources without a documented reason (that is a breaking change for users).
4. `make provider` - `npm run generate-provider` with `--naive-req-body-translate --update-path-param-names` and the three config JSON files, then `post_process.mjs`.
5. `make meta-test` - starts a local server, walks every `SHOW` / `DESCRIBE EXTENDED` route, stops the server; a failure stops `make all`.
6. `make docs` - docgen into `website/docs/` then `website/scripts/sanitize-docs.mjs` (MDX escaping).
7. `make docs-build` - `yarn build` in `website/` (vendors the shared config on `prebuild`).

## Testing

- **Meta-route gate** (no credentials): `make meta-test`.
- **Smoke tests** (live, `.env` with `NETLIFY_API_TOKEN`): `make smoke-test` runs `provider-dev/test/tier1.yaml` through `stackql exec` (`MODE=pgwire` or `MODE=both` for the Postgres-wire transport). `LIVE=1` runs the same suite against the published provider from the public registry (post-publish verification). The suite is reads plus one disposable environment variable lifecycle on the test site; Netlify's API is free to call and nothing billable is created. Target site and team are overridable with `TEST_SITE_NAME` / `TEST_ACCOUNT_SLUG` (defaults in `provider-dev/test/provider.yaml`).
- Never point the smoke suite at a production site you are not prepared to see a `STACKQL_SMOKE_*` environment variable appear on briefly.

## Publishing

Push `provider-dev/openapi/src/netlify` to `providers/src` in a feature branch of [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the registry release flow. Verify with `REGISTRY PULL netlify` against the dev registry, then `make smoke-test LIVE=1` once it reaches the public registry.

## Writing conventions

- README and docs copy: measured, precise, no hyperbole. No em dashes; use `-`. No characters not on a QWERTY keyboard; use `->` for arrows. No stacked headings.
- Sample queries are realistic and runnable against the test site; nested JSON fields use `json_extract`.
- Column names that are SQL keywords (`values` on env vars) are double-quoted in examples.

## Non-negotiables

1. Latest `@stackql/provider-utils`, always.
2. Deterministic scripts, never hand edits to `provider-dev/source`, `provider-dev/openapi` or `all_services.csv`.
3. `all_services.csv` is checked in; an operation moving to a different resource or a resource being renamed is a breaking change and needs a documented reason in NOTES.md.
4. Every regeneration is followed by `make meta-test` before commit; a live `make smoke-test` before publishing.
5. Smoke tests clean up everything they create.
