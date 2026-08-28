# `netlify` provider for [`stackql`](https://github.com/stackql/stackql)

This repository generates and documents the `netlify` provider for StackQL, which lets you query and manage Netlify sites, deploys, builds, environment variables, DNS, forms, functions, teams and more with SQL. The provider is built from Netlify's published API description using [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils).

- Provider docs: [netlify-provider.stackql.io](https://netlify-provider.stackql.io)
- Upstream spec: [open-api.netlify.com/swagger.json](https://open-api.netlify.com/swagger.json) (Swagger 2.0, converted to OpenAPI 3.0 during the build)

## Prerequisites

- Node.js 20 or later, npm, and yarn (for the docs site)
- GNU make and a POSIX shell (Linux, macOS or WSL - the server lifecycle scripts use `pgrep`/`ps`)
- Python 3.10 or later (live smoke tests)
- A Netlify personal access token for live queries and smoke tests

## Quick start

```bash
npm install
make all          # spec -> preprocess -> split -> normalize -> mappings -> provider -> meta-test -> docs -> docs-build
make smoke-test   # live queries against api.netlify.com (needs .env, see below)
```

`make help` lists every target. The stages are described below and can be run individually.

## Build pipeline

| Target | What it does |
|--------|--------------|
| `make spec` | Downloads the latest Swagger document to `provider-dev/downloaded/swagger.json`. Set `SPEC_REFRESH=0` to build from the committed copy. |
| `make preprocess` | `provider-dev/scripts/preprocess.mjs` converts Swagger 2.0 to OpenAPI 3.0 (`swagger2openapi`), fixes the upstream path that repeats the `/api/v1` base path and drops the three `x-internal` build-plugin operations, writing `provider-dev/downloaded/openapi.json`. |
| `make split` | Splits the spec into 17 per-service yamls under `provider-dev/source/` using the operationId -> service map in `provider-dev/scripts/svc-discriminator.mjs` (fails on an unknown operation). |
| `make normalize` | Runs the provider-utils normalizer (allOf flattening, path-item parameter lifting, opaque object lowering) and then `post_normalize.mjs`, which reverts the bare-array envelope the normalizer wraps around Netlify's 41 array-returning list endpoints - stackql iterates bare arrays natively. |
| `make mappings` | Regenerates `provider-dev/config/all_services.csv`. `analyze` preserves existing rows; `provider-dev/scripts/map_operations.mjs` fills in operations added upstream from its mapping table, prunes retired operations, resyncs moved paths and reports rows that disagree with the table. The target fails if any operation is unmapped. |
| `make provider` | Generates the provider under `provider-dev/openapi/src/netlify/v00.00.00000/` from the CSV with `servers.json`, `provider_config.json` (bearer auth) and `service_config.json` (Link-header pagination), then runs `post_process.mjs` for the request/response transforms the generator cannot express (see below). |
| `make build` | `preprocess` + `split` + `normalize` + `mappings` + `provider`. |
| `make meta-test` | Starts a local `stackql srv` against the generated provider, walks every `SHOW SERVICES` / `SHOW RESOURCES` / `SHOW METHODS` / `DESCRIBE EXTENDED` route and stops the server. No credentials needed; a non-zero exit stops `make all`. |
| `make docs` | Generates the Docusaurus markdown into `website/docs/` from the provider plus `provider-dev/docgen/provider-data/headerContent{1,2}.txt`, then runs `website/scripts/sanitize-docs.mjs` (MDX escaping). |
| `make docs-build` / `make docs-serve` | `yarn build` / `yarn start` in `website/` (the shared `stackql/docusaurus-config` is vendored on `prebuild`). |
| `make smoke-test` | Live smoke suite (see [Testing](#testing)). `MODE=exec` (default), `pgwire` or `both`; `LIVE=1` targets the published provider. |
| `make clean` | Removes the generated provider, split source, website build and the downloaded test binary. |

Manual decisions live in scripts, not in hand edits of generated files, so a refresh is a reviewed diff: rerun `make build`, review the changes to `all_services.csv` and `provider-dev/openapi/`, and add mappings for anything `make split` or `make mappings` reports as unmapped. `all_services.csv` is checked in as the durable record of which operation backs which resource and method; renaming a resource or moving an operation between resources is a breaking change for users and needs a note in `NOTES.md`.

## Authentication

The provider uses a bearer token read from `NETLIFY_API_TOKEN`, the same variable the official Netlify Terraform provider uses:

```bash
export NETLIFY_API_TOKEN=<your-personal-access-token>
```

Create a token under **User settings > Applications > Personal access tokens** in the Netlify app. To use a different variable name (for example the Netlify CLI's `NETLIFY_AUTH_TOKEN`):

```bash
stackql shell --auth='{"netlify":{"type":"bearer","credentialsenvvar":"NETLIFY_AUTH_TOKEN"}}'
```

## Pagination and pushdown

- **Pagination** is declared on every service via `x-stackQL-config.pagination` (from `provider-dev/config/service_config.json`): the response token is the `Link` header's `rel="next"` URL and the request token replaces the whole request URL, so multi-page listings are traversed automatically up to stackql's `--http.response.pageLimit` (default 20 pages).
- **Predicate pushdown** works through operation parameters: any `WHERE` column that matches a declared path or query parameter (`site_id`, `account_id`, `state`, `branch`, `name`, `filter`, `context_name`, `scope`, `page`, `per_page`, ...) is sent to the API rather than filtered locally. Other columns are filtered by the SQL engine after the rows are fetched.
- `LIMIT` is not pushed to `per_page`; use `per_page` in the `WHERE` clause to control page size.

## Design notes

- **Services by API area.** Netlify's 35 tags are regrouped into `sites`, `deploys`, `builds`, `env`, `dns`, `functions`, `forms`, `hooks`, `accounts`, `users`, `oauth`, `services`, `split_tests`, `dev_servers`, `agent_runners`, `ai_gateway` and `database`.
- **Every resource is selectable.** Lifecycle operations are `EXEC` methods on the resource they act on (`sites.enable`, `deploys.lock`, `deploys.rollback`, `sites.purge_cache`, `split_tests.publish`, `dns_zones.transfer`, ...). `SHOW METHODS IN netlify.deploys.deploys` lists them with their parameters.
- **Verbs.** PATCH is `UPDATE`, PUT is `REPLACE`, POST is `INSERT`. Request body fields are plain columns (no `data__` prefix).
- **Transforms** (`provider-dev/scripts/post_process.mjs`): the env var create endpoint takes a JSON array (column `env_vars`); site metadata and add-on instance config take opaque objects (`metadata`, `config`); the three deploy upload methods take a raw body (`file_body`); the opaque `site_metadata` and `service_manifests` responses are wrapped under one JSON column; and the env var `values` field is exposed as `env_values` because `values` is a SQL keyword the parser rejects even when quoted.
- **No team default from the environment.** Terraform's `default_team_slug` has no equivalent - any-sdk resolves `x-stackQL-envVar` only on server variables and Netlify's host is fixed - so `account_slug` / `account_id` are supplied per query.

`NOTES.md` records the evidence behind each of these.

## Testing

### Meta-route gate (no credentials)

```bash
make meta-test
```

### Live smoke tests

`provider-dev/test/` holds a pytest suite driven by `tier1.yaml`: reads across the main resources, a pagination check, an environment variable lifecycle (`INSERT` -> `SELECT` -> `UPDATE` -> `REPLACE` -> `DELETE`) on the test site and one `EXEC` (cache purge). Nothing billable is created; Netlify's API is free to call. The same suite runs through `stackql exec` and through a `stackql srv` Postgres-wire session.

```bash
cat > .env <<'EOF'
NETLIFY_API_TOKEN=<your-personal-access-token>
EOF

make smoke-test             # local build, exec mode
make smoke-test MODE=both   # exec + pgwire
make smoke-test LIVE=1      # the published provider from the public registry
```

The target downloads a Linux `stackql` into `provider-dev/test/.bin/` and creates a venv on first run. The test team and site are overridable with `TEST_ACCOUNT_SLUG` and `TEST_SITE_NAME` (defaults in `provider-dev/test/provider.yaml`); ids are resolved by query at session start. See `provider-dev/test/README.md` for the YAML shape and how to add cases.

### Ad hoc queries

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
stackql shell --registry="${REG_STR}"
```

```sql
SELECT id, name, url, account_slug, state
FROM netlify.sites.sites;

SELECT id, state, branch, context, published_at
FROM netlify.deploys.deploys
WHERE site_id = '<site-id>' AND state = 'ready';

SELECT key, scopes, env_values
FROM netlify.env.env_vars
WHERE account_id = '<team-id>' AND site_id = '<site-id>';
```

More examples, including DNS across every zone, deploy success rates and the mutation grammar, are in the [provider docs](https://netlify-provider.stackql.io) (source: `provider-dev/docgen/provider-data/headerContent2.txt`).

## Publishing the provider

Push the `provider-dev/openapi/src/netlify` directory to `providers/src` in a feature branch of [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). To verify the dev registry build:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
stackql --registry="${DEV_REG}" shell
```

```sql
registry pull netlify;
```

Once the provider reaches the public registry, `make smoke-test LIVE=1` runs the same smoke suite against it.

## Publishing the docs

`make docs` regenerates `website/docs/`; commit the regenerated tree. Doc pages show a "Last updated" date taken from git history (`showLastUpdateTime` in `website/docusaurus.config.js`), so pages carry the date of the commit that last regenerated them. Pushes to `main` that touch `website/**` deploy to GitHub Pages via `.github/workflows/prod-web-deploy.yml`; the custom domain is `netlify-provider.stackql.io` (CNAME to `stackql.github.io`).

## Repository layout

```
Makefile                         build / test / docs targets
bin/                             server lifecycle scripts, meta-route test
provider-dev/
  downloaded/                    swagger.json (upstream) + openapi.json (preprocessed)
  source/                        split + normalized per-service specs (generated)
  config/                        all_services.csv mappings, servers / auth / pagination json
  scripts/                       preprocess, svc-discriminator, post_normalize, map_operations, post_process
  openapi/src/netlify/           generated provider (publish this)
  docgen/provider-data/          headerContent1.txt / headerContent2.txt for the docs index page
  test/                          pytest smoke tests
website/                         Docusaurus microsite
CLAUDE.md                        working conventions for the build
NOTES.md                         engineering notes and evidence
```

## License

MIT

## Contributing

Contributions are welcome. Please open a pull request.
