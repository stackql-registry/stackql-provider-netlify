I'll create a README for a Netlify provider for StackQL, following the same structure as the previous examples.

# `netlify` provider for [`stackql`](https://github.com/stackql/stackql)

This repository is used to generate and document the `netlify` provider for StackQL, allowing you to query and manipulate Netlify resources using SQL-like syntax. The provider is built using the `@stackql/provider-utils` package, which provides tools for converting OpenAPI specifications into StackQL-compatible provider schemas.

## Prerequisites

To use the Netlify provider with StackQL, you'll need:

1. A Netlify account with appropriate API credentials
2. Netlify personal access token with sufficient permissions for the resources you want to access
3. StackQL CLI installed on your system (see [StackQL](https://github.com/stackql/stackql))

## 1. Download the Open API Specification

First, download the Netlify API OpenAPI specification:

```bash
rm -rf provider-dev/downloaded/*
curl -L https://open-api.netlify.com/swagger.json \
-o provider-dev/downloaded/openapi.json
```

## 2. Split into Service Specs

Next, split the monolithic OpenAPI specification into service-specific files:

```bash
rm -rf provider-dev/source/*
npm run split -- \
  --provider-name netlify \
  --api-doc provider-dev/downloaded/openapi.json \
  --svc-discriminator path \
  --output-dir provider-dev/source \
  --overwrite \
  --svc-name-overrides "$(cat <<EOF
{
  "sites": "sites",
  "deploys": "deploys",
  "builds": "builds",
  "functions": "functions",
  "dns": "dns",
  "forms": "forms",
  "hooks": "hooks",
  "submissions": "forms",
  "files": "files",
  "accounts": "accounts",
  "users": "users",
  "teams": "teams",
  "members": "teams",
  "plugins": "plugins",
  "services": "services",
  "service_instances": "services",
  "split_tests": "split_tests",
  "snippets": "snippets",
  "ssl": "ssl",
  "assets": "assets",
  "domains": "domains"
}
EOF
)"
```

## 3. Generate Mappings

Generate the mapping configuration that connects OpenAPI operations to StackQL resources:

```bash
npm run generate-mappings -- \
  --provider-name netlify \
  --input-dir provider-dev/source \
  --output-dir provider-dev/config
```

Update the resultant `provider-dev/config/all_services.csv` to add the `stackql_resource_name`, `stackql_method_name`, `stackql_verb` values for each operation.

## 4. Generate Provider

This step transforms the split OpenAPI service specs into a fully-functional StackQL provider by applying the resource and method mappings defined in your CSV file.

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name netlify \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/netlify \
  --config-path provider-dev/config/all_services.csv \
  --servers '[{"url": "https://api.netlify.com/api/v1"}]' \
  --provider-config '{"auth": { "type": "bearer", "credentialsenvvar": "NETLIFY_ACCESS_TOKEN" }}' \
  --overwrite
```
```bash
sh provider-dev/scripts/fix_broken_links.sh
```

## 5. Test Provider

### Starting the StackQL Server

Before running tests, start a StackQL server with your provider:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
npm run start-server -- --provider netlify --registry $PROVIDER_REGISTRY_ROOT_DIR
```

### Test Meta Routes

Test all metadata routes (services, resources, methods) in the provider:

```bash
npm run test-meta-routes -- netlify --verbose
```

When you're done testing, stop the StackQL server:

```bash
npm run stop-server
```

Use this command to view the server status:

```bash
npm run server-status
```

### Run test queries

Run some test queries against the provider using the `stackql shell`:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

Example queries to try:

```sql
-- List all sites
SELECT 
id,
name,
url,
ssl_url,
admin_url,
screenshot_url,
created_at,
updated_at
FROM netlify.sites.list;

-- View recent deploys
SELECT
id,
site_id,
name,
url,
state,
branch,
commit_ref,
created_at,
published_at
FROM netlify.deploys.list
WHERE site_id = 'your-site-id';

-- Check DNS records
SELECT
hostname,
type,
ttl,
value
FROM netlify.dns.list
WHERE zone_id = 'your-zone-id';

-- List functions
SELECT
name,
function_name,
runtime,
url
FROM netlify.functions.list
WHERE site_id = 'your-site-id';

-- View form submissions
SELECT
id,
form_id,
site_id,
created_at,
data
FROM netlify.forms.submissions
WHERE form_id = 'your-form-id';
```

## 6. Publish the provider

To publish the provider push the `netlify` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry). Follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).  

Launch the StackQL shell:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
./stackql --registry="${DEV_REG}" shell
```

Pull the latest dev `netlify` provider:

```sql
registry pull netlify;
```

Run some test queries to verify the provider works as expected.

## 7. Generate web docs

Provider doc microsites are built using Docusaurus and published using GitHub Pages.  

a. Update `headerContent1.txt` and `headerContent2.txt` accordingly in `provider-dev/docgen/provider-data/`  

b. Update the following in `website/docusaurus.config.js`:  

```js
// Provider configuration - change these for different providers
const providerName = "netlify";
const providerTitle = "Netlify Provider";
```

c. Then generate docs using...

```bash
npm run generate-docs -- \
  --provider-name netlify \
  --provider-dir ./provider-dev/openapi/src/netlify/v00.00.00000 \
  --output-dir ./website \
  --provider-data-dir ./provider-dev/docgen/provider-data
```  

## 8. Test web docs locally

```bash
cd website
# test build
yarn build

# run local dev server
yarn start
```

## 9. Publish web docs to GitHub Pages

Under __Pages__ in the repository, in the __Build and deployment__ section select __GitHub Actions__ as the __Source__. In Netlify DNS create the following records:

| Source Domain | Record Type  | Target |
|---------------|--------------|--------|
| netlify-provider.stackql.io | CNAME | stackql.github.io. |

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.