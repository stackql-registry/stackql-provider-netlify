# Tier 1 / smoke tests

Smoke tests that exercise the provider against the live Netlify API.
Designed for WSL / Linux. The same suite runs in two transport modes and
against two provider sources:

- `exec`   - one-shot `stackql exec --output json` per query
- `pgwire` - long-lived `stackql srv`, queried over Postgres wire (psycopg)
- default  - the locally generated provider (`provider-dev/openapi`)
- `--live` - the published provider from the public StackQL registry
             (`REGISTRY PULL netlify` is issued once per session)

## One-time setup

```bash
# from repo root
bash provider-dev/test/bootstrap.sh          # downloads latest stackql into provider-dev/test/.bin/ (or: make smoke-test)
python -m venv provider-dev/test/.venv
source provider-dev/test/.venv/bin/activate
pip install -r provider-dev/test/requirements.txt
```

## Run

The Makefile wraps all of this (`make smoke-test`, `make smoke-test MODE=both`,
`make smoke-test LIVE=1`); the manual form is:

```bash
set -a; source .env; set +a                 # repo-root .env sets NETLIFY_API_TOKEN

# exec mode (default), local provider
pytest provider-dev/test/ -v

# pgwire mode
pytest provider-dev/test/ -v --mode=pgwire

# both modes - same suite runs twice
pytest provider-dev/test/ -v --mode=both

# the published provider instead of the local build
pytest provider-dev/test/ -v --live
```

## What the suite does

Reads across sites, deploys, builds, build hooks, SSL certificates, site
metadata, environment variables, DNS zones and records, teams, members, hook
types and add-on services; a pagination check (`per_page = 1` must return the
same count as the unpaged listing); an environment variable lifecycle
(`INSERT` -> `SELECT` -> `UPDATE` -> `REPLACE` -> `DELETE`) on the test site
using the key `TEST_ENV_KEY`; and one `EXEC` (cache purge). Cost is zero:
Netlify's API is free to call and nothing billable is created. Cases run in
file order so the delete always follows the insert.

## What to edit when

- **Add / change a query**: edit `tier1.yaml`. No Python changes needed.
- **Add a new assertion primitive**: edit `test_tier1.py`.
- **Point at another account / site**: set `TEST_ACCOUNT_SLUG` and
  `TEST_SITE_NAME` in the environment (defaults in `provider.yaml`). The ids
  the cases need (`TEST_SITE_ID`, `TEST_ACCOUNT_ID`, `TEST_DNS_ZONE_ID`,
  `TEST_DEPLOY_ID`) are resolved by the `derived_env` queries in
  `provider.yaml` at session start, or taken from the environment if set.
- **Reuse for another provider**: copy this directory, edit `provider.yaml`
  (provider name, registry path, required auth env vars, defaults, derived
  queries) and `tier1.yaml`. Nothing else should need to change.

## tier1.yaml shape

```yaml
- name: short_test_id
  sql: |
    SELECT ... WHERE site_id = '${TEST_SITE_ID}'
  assertions:
    min_rows: 1                              # default 1; set 0 to allow empty
    required_columns: [col_a, col_b]         # must be present on every row
    row_predicates:                          # python exprs, `rows` and `r` in scope
      - "r['col_a'] == 'expected'"
```

`${VAR}` substitution looks up `test_env_defaults` and `derived_env` in
`provider.yaml` first, then the process environment. Use it for anything
per-environment - do not hard-code ids in `tier1.yaml`.
