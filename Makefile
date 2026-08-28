# StackQL netlify provider - build, test and docs pipeline.
#
# `make all` runs the full chain (no live credentials needed):
#
#   install     npm install (@stackql/provider-utils, pgwire-lite, swagger2openapi)
#   spec        download the latest Netlify Swagger 2.0 document into
#               provider-dev/downloaded/swagger.json (skipped if SPEC_REFRESH=0)
#   preprocess  Step 0: provider-dev/scripts/preprocess.mjs converts the
#               Swagger 2.0 document to OpenAPI 3.0 (provider-utils expects
#               OAS3), fixes upstream path bugs and drops x-internal
#               operations -> provider-dev/downloaded/openapi.json
#   split       Step 1: split the spec into per-service yamls under
#               provider-dev/source/ using the service map in
#               provider-dev/scripts/svc-discriminator.mjs (FAILS on an
#               operation the map does not know about)
#   normalize   Step 2: provider-utils normalize (allOf flatten, path-item
#               parameter lift, opaque object lowering) followed by
#               post_normalize.mjs, which reverts the bare-array envelope the
#               normalizer wraps around Netlify's 41 array-returning list
#               endpoints (stackql iterates bare arrays natively)
#   mappings    Step 3: refresh provider-dev/config/all_services.csv
#               (analyze keeps existing rows) then map_operations.mjs fills in
#               new operations from its mapping table, prunes retired
#               operations and resyncs moved paths. FAILS if an operation has
#               no mapping - add it to the script and re-run.
#   provider    Step 4: generate the provider tree (servers, bearer auth and
#               the Link-header pagination service config from
#               provider-dev/config/*.json) then post_process.mjs applies the
#               request/response transforms the generator cannot express
#   meta-test   Step 5 gate: start a local server, walk every SHOW/DESCRIBE
#               meta route, stop the server. Non-zero exit stops the build.
#   docs        Step 6: generate the Docusaurus markdown and sanitize it for
#               MDX
#   docs-build  Step 7: yarn build of website/ (catches broken MDX)
#
# Live smoke tests hit api.netlify.com and need credentials, so they are NOT
# part of `all`. Populate .env (NETLIFY_API_TOKEN) then:
#
#   make smoke-test                # local provider, exec mode
#   make smoke-test MODE=both      # exec + pgwire
#   make smoke-test LIVE=1         # the published provider from the public registry
#
# The smoke suite is read-mostly plus one disposable write lifecycle (an
# environment variable on the test site); it costs nothing - Netlify's API is
# free to call and nothing billable is created.
#
# Run from Linux, macOS or WSL (the server lifecycle scripts need a POSIX
# shell with pgrep/ps; the smoke-test harness downloads a Linux stackql).

SHELL := /bin/bash

PROVIDER      := netlify
VERSION       := v00.00.00000
SPEC_URL      := https://open-api.netlify.com/swagger.json
SPEC_FILE     := provider-dev/downloaded/swagger.json
OAS_FILE      := provider-dev/downloaded/openapi.json
SOURCE_DIR    := provider-dev/source
CONFIG_DIR    := provider-dev/config
OPENAPI_DIR   := provider-dev/openapi
PROVIDER_DIR  := $(OPENAPI_DIR)/src/$(PROVIDER)/$(VERSION)
WEBSITE_DIR   := website
PORT          ?= 5444
MODE          ?= exec
LIVE          ?= 0
VENV          ?= provider-dev/test/.venv
SPEC_REFRESH  ?= 1
PYTHON        ?= $(shell command -v python3 >/dev/null 2>&1 && echo python3 || echo python)

.PHONY: all help install spec preprocess split normalize mappings provider build \
        meta-test smoke-test smoke-test-bootstrap docs docs-build docs-serve \
        start-server stop-server server-status clean

all: install spec build meta-test docs docs-build
	@echo ""
	@echo "make all complete: provider + docs generated, meta-route gate passed."
	@echo "Live smoke tests are run separately - see 'make help'."

help:
	@echo "Targets:"
	@echo "  all            install + spec + build + meta-test + docs + docs-build"
	@echo "  install        npm install"
	@echo "  spec           download the latest Netlify Swagger document (SPEC_REFRESH=0 to skip)"
	@echo "  preprocess     Swagger 2.0 -> OpenAPI 3.0, path fixes, drop x-internal ops"
	@echo "  split          split the spec into per-service yamls (provider-dev/source)"
	@echo "  normalize      provider-utils normalize + post_normalize.mjs"
	@echo "  mappings       refresh all_services.csv + map_operations.mjs (fails on unmapped ops)"
	@echo "  provider       generate the provider + post_process.mjs"
	@echo "  build          preprocess + split + normalize + mappings + provider"
	@echo "  meta-test      SHOW/DESCRIBE gate over every resource (no credentials needed)"
	@echo "  smoke-test     live smoke queries via pytest (needs .env; MODE=exec|pgwire|both; LIVE=1 for the published provider)"
	@echo "  docs           generate website/docs + sanitize for MDX"
	@echo "  docs-build     yarn build in website/"
	@echo "  docs-serve     yarn start in website/"
	@echo "  start-server / stop-server / server-status   local stackql server on PORT=$(PORT)"
	@echo "  clean          remove generated provider, split source and website build"

install:
	npm install

spec:
ifeq ($(SPEC_REFRESH),1)
	@mkdir -p $(dir $(SPEC_FILE))
	curl -sSL "$(SPEC_URL)" -o $(SPEC_FILE)
	@node -e "const s=require('./$(SPEC_FILE)');console.log('spec version',s.info.version,'paths',Object.keys(s.paths).length)"
else
	@echo "SPEC_REFRESH=0 - using cached $(SPEC_FILE)"
endif

preprocess:
	node provider-dev/scripts/preprocess.mjs $(SPEC_FILE) $(OAS_FILE)

split:
	rm -rf $(SOURCE_DIR)/*
	npm run split -- \
	  --provider-name $(PROVIDER) \
	  --api-doc $(OAS_FILE) \
	  --svc-discriminator function \
	  --svc-discriminator-fn provider-dev/scripts/svc-discriminator.mjs \
	  --output-dir $(SOURCE_DIR) \
	  --overwrite

normalize:
	npm run normalize -- --api-dir $(SOURCE_DIR)
	node provider-dev/scripts/post_normalize.mjs --api-dir $(SOURCE_DIR)

mappings:
	npm run generate-mappings -- --input-dir $(SOURCE_DIR) --output-dir $(CONFIG_DIR)
	node provider-dev/scripts/map_operations.mjs --csv $(CONFIG_DIR)/all_services.csv --source-dir $(SOURCE_DIR)

provider:
	rm -rf $(OPENAPI_DIR)/*
	npm run generate-provider -- \
	  --provider-name $(PROVIDER) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(OPENAPI_DIR)/src/$(PROVIDER) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers $(CONFIG_DIR)/servers.json \
	  --provider-config $(CONFIG_DIR)/provider_config.json \
	  --service-config $(CONFIG_DIR)/service_config.json \
	  --naive-req-body-translate \
	  --update-path-param-names \
	  --overwrite
	node provider-dev/scripts/post_process.mjs --provider-dir $(PROVIDER_DIR)

build: preprocess split normalize mappings provider

# Go/no-go gate: the server is always torn down and the meta-test's exit
# status is preserved so a failure stops `make all`.
meta-test:
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)
	node bin/test-meta-routes.cjs $(PROVIDER) --port $(PORT); status=$$?; bash bin/stop-server.sh --port $(PORT); exit $$status

# The venv is recreated when it is missing or unusable (for example after the
# repo directory moved - venv shebangs embed the absolute path).
smoke-test-bootstrap:
	bash provider-dev/test/bootstrap.sh
	@if ! "$(VENV)/bin/pytest" --version >/dev/null 2>&1 || ! "$(VENV)/bin/python" -c "import yaml, psycopg" >/dev/null 2>&1; then \
	  echo "creating venv at $(VENV)"; rm -rf "$(VENV)"; $(PYTHON) -m venv "$(VENV)"; \
	  "$(VENV)/bin/pip" install -q -r provider-dev/test/requirements.txt; \
	fi

# .env is sourced with CRLF stripped so a Windows-edited file works under WSL.
smoke-test: smoke-test-bootstrap
	@test -f .env || (echo ".env not found - it must export NETLIFY_API_TOKEN"; exit 1)
	set -a; source <(tr -d '\r' < .env); set +a; "$(VENV)/bin/pytest" provider-dev/test/ -v --mode=$(MODE) $(if $(filter 1,$(LIVE)),--live,)

docs:
	rm -rf $(WEBSITE_DIR)/docs/*
	npm run generate-docs -- \
	  --provider-name $(PROVIDER) \
	  --provider-dir ./$(PROVIDER_DIR) \
	  --output-dir ./$(WEBSITE_DIR) \
	  --provider-data-dir ./provider-dev/docgen/provider-data
	node $(WEBSITE_DIR)/scripts/sanitize-docs.mjs

docs-build:
	cd $(WEBSITE_DIR) && yarn install --silent && yarn build

docs-serve:
	cd $(WEBSITE_DIR) && yarn start

start-server:
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)

stop-server:
	bash bin/stop-server.sh --port $(PORT)

server-status:
	bash bin/server-status.sh --port $(PORT)

clean:
	rm -rf $(OPENAPI_DIR)/* $(SOURCE_DIR)/* $(WEBSITE_DIR)/build provider-dev/test/.bin
