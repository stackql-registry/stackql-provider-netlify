#!/usr/bin/env node
// post_process.mjs
//
// Applies the handful of adjustments the generator cannot express to the
// generated provider under provider-dev/openapi/src/netlify/<version>/.
// Every rule is data in the tables below; the script is idempotent (re-runs
// on an already-processed tree are no-ops) and fails loudly if a rule
// targets a method that no longer exists.
//
// Why these exist (see NOTES.md for the evidence):
//
//   1. Request bodies that are not a flat object. The generator wires every
//      POST/PUT/PATCH with `requestBodyTranslate.algorithm: naive`, which
//      maps SQL columns 1:1 onto the top-level properties of the request body
//      schema. A bare-array body (createEnvVars), an opaque object body
//      (site metadata, add-on instance config) or a binary body (deploy file
//      / function uploads) has no top-level properties, so no column can be
//      routed to the body. Each such method gets a synthetic request schema
//      with a single column and a request `transform` that emits that column
//      as the wire body. The naive translator builds its matchers from the
//      OPERATION's request body schema (not from `request.schema_override` -
//      verified on the wire: with only the override in place the column is
//      never routed and stackql sends `null`), so the operation's requestBody
//      is rewritten to the synthetic schema as well.
//
//   2. Opaque object responses. normalize lowers `type: object` schemas with
//      no properties to `type: string` so nested opaque objects become JSON
//      columns, but a top-level opaque response then has no columns at all
//      and `DESCRIBE` / `SELECT` fail. Each such method gets a response
//      `schema_override` with a single JSON column and a response
//      `transform` that wraps the payload under that column.
//
//   3. Reserved-word field names. The env var object carries its context
//      values in a field named `values`, which the stackql SQL parser rejects
//      even when quoted, so the column could neither be selected by name nor
//      set in a REPLACE. The env_vars read methods rename `values` to
//      `env_values` in the response (transform + renamed response schema) and
//      the REPLACE method accepts `env_values` and emits `values` on the wire.
//
//   4. String body values that must stay strings. any-sdk parses every string
//      body value as JSON when it can (type-blind), so a raw file body or an
//      env var value that happens to look like JSON would be sent as an
//      object. `x-stackQL-stringOnly: true` on the property opts out.
//
// Usage: node provider-dev/scripts/post_process.mjs [--provider-dir provider-dev/openapi/src/netlify/v00.00.00000] [--verbose]

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import yaml from 'js-yaml';

function getArg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  if (i === -1) return fallback;
  return process.argv[i + 1] ?? fallback;
}
const providerDir = resolve(getArg('--provider-dir', 'provider-dev/openapi/src/netlify/v00.00.00000'));
const verbose = process.argv.includes('--verbose');

// v0.3.0 templates have toJson / kindOf; v0.1.0 does not (raw value only).
const JSON_TEMPLATE = 'golang_template_json_v0.3.0';
const JSON_TEMPLATE_RAW = 'golang_template_json_v0.1.0';

const ENV_VAR_VALUE_ITEMS = {
  type: 'object',
  properties: {
    value: { type: 'string', description: "The environment variable's unencrypted value", 'x-stackQL-stringOnly': true },
    context: { type: 'string', enum: ['all', 'dev', 'dev-server', 'branch-deploy', 'deploy-preview', 'production', 'branch'], description: 'The deploy context in which this value will be used' },
    context_parameter: { type: 'string', description: 'An additional parameter for custom branches (the branch name when context=branch)' },
  },
};
const ENV_VAR_SCOPES = { type: 'array', items: { type: 'string', enum: ['builds', 'functions', 'runtime', 'post-processing'] }, description: 'The scopes that this environment variable is set to (Pro plans and above)' };

// --------------------------------------------------------------------------
// 1. request body rewrites: service -> resource -> method -> rule
//
//   column        the single SQL column / EXEC parameter that carries the body
//                 (null = the rule's `schema` IS the whole body schema)
//   schema        the JSON schema of that column (or of the whole body)
//   body          Go template producing the wire body from the parsed body map
//   mediaType     wire Content-Type (defaults to application/json)
//   templateType  transform type (defaults to JSON_TEMPLATE)
// --------------------------------------------------------------------------
const REQUEST_RULES = {
  env: {
    env_vars: {
      create: {
        column: 'env_vars',
        schema: {
          type: 'array',
          description: 'Array of environment variables to create, each with `key`, optional `scopes` (Pro plans and above), optional `is_secret` and `values` (array of `{value, context, context_parameter}`). The whole array is sent as the request body.',
          items: { $ref: '#/components/schemas/stackqlEnvVarInput' },
        },
        body: '{{ toJson .env_vars }}',
      },
      // REPLACE (PUT): the SQL surface takes `env_values`, the wire gets `values`
      update: {
        column: null,
        schema: {
          type: 'object',
          required: ['env_key', 'env_values'],
          properties: {
            env_key: { type: 'string', description: 'The environment variable key (must equal the `key` in the WHERE clause; the API requires it in both the path and the body, and a column named `key` is routed to the path).' },
            scopes: ENV_VAR_SCOPES,
            is_secret: { type: 'boolean', description: 'Secret values are only readable by code running on Netlify and never displayed in the UI' },
            env_values: {
              type: 'array',
              description: "The variable's values per deploy context (sent as the API's `values` field): array of `{value, context, context_parameter}`.",
              items: ENV_VAR_VALUE_ITEMS,
            },
          },
        },
        // `key` is also the path parameter, and a SET column that matches a
        // parameter name is routed to the parameter rather than the body, while
        // Netlify requires the key in the body too (400 "Invalid request
        // structure" without it) - so the body key is a distinct `env_key`.
        body: '{{"{"}}"key": {{ toJson .env_key }}, {{ if .scopes }}"scopes": {{ toJson .scopes }}, {{ end }}{{ if .is_secret }}"is_secret": {{ toJson .is_secret }}, {{ end }}"values": {{ toJson .env_values }}}',
      },
    },
  },
  sites: {
    site_metadata: {
      update: {
        column: 'metadata',
        schema: { type: 'object', additionalProperties: true, description: 'Arbitrary JSON object stored as the site metadata; sent verbatim as the request body.' },
        body: '{{ toJson .metadata }}',
      },
    },
  },
  services: {
    service_instances: {
      create: {
        column: 'config',
        schema: { type: 'object', additionalProperties: true, description: 'Add-on specific configuration object; sent verbatim as the request body.' },
        body: '{{ toJson .config }}',
      },
      update: {
        column: 'config',
        schema: { type: 'object', additionalProperties: true, description: 'Add-on specific configuration object; sent verbatim as the request body.' },
        body: '{{ toJson .config }}',
      },
    },
  },
  deploys: {
    deploys: {
      upload_file: {
        column: 'file_body',
        mediaType: 'application/octet-stream',
        schema: { type: 'string', 'x-stackQL-stringOnly': true, description: 'Raw file contents sent as the application/octet-stream request body.' },
        body: '{{ .file_body }}',
        templateType: JSON_TEMPLATE_RAW,
      },
      upload_function: {
        column: 'file_body',
        mediaType: 'application/octet-stream',
        schema: { type: 'string', 'x-stackQL-stringOnly': true, description: 'Raw zipped function bundle sent as the application/octet-stream request body.' },
        body: '{{ .file_body }}',
        templateType: JSON_TEMPLATE_RAW,
      },
      upload_edge_function: {
        column: 'file_body',
        mediaType: 'application/octet-stream',
        schema: { type: 'string', 'x-stackQL-stringOnly': true, description: 'Raw edge function bundle sent as the application/octet-stream request body.' },
        body: '{{ .file_body }}',
        templateType: JSON_TEMPLATE_RAW,
      },
    },
  },
};

// Shared schemas referenced from the request rules, added to
// components.schemas of the named service.
const EXTRA_SCHEMAS = {
  env: {
    stackqlEnvVarInput: {
      type: 'object',
      required: ['key', 'values'],
      properties: {
        key: { type: 'string', description: 'The environment variable key, like ALGOLIA_ID (case-sensitive)' },
        scopes: ENV_VAR_SCOPES,
        is_secret: { type: 'boolean', description: 'Secret values are only readable by code running on Netlify and never displayed in the UI' },
        values: { type: 'array', items: ENV_VAR_VALUE_ITEMS },
      },
    },
  },
};

// --------------------------------------------------------------------------
// 2. opaque response rewrites: service -> resource -> method -> column
// --------------------------------------------------------------------------
const RESPONSE_RULES = {
  sites: { site_metadata: { get: { column: 'metadata', description: 'The site metadata object (opaque JSON).' } } },
  services: { service_manifests: { get: { column: 'manifest', description: 'The add-on service manifest (opaque JSON).' } } },
};

// --------------------------------------------------------------------------
// 3. reserved-word field renames on responses: service -> resource -> method
//    -> { from, to }. Works for single-object and bare-array responses.
// --------------------------------------------------------------------------
const RESPONSE_RENAME_RULES = {
  env: {
    env_vars: {
      list: { from: 'values', to: 'env_values' },
      list_for_site: { from: 'values', to: 'env_values' },
      get: { from: 'values', to: 'env_values' },
    },
  },
};

// --------------------------------------------------------------------------
// 4. string-only request body properties (opt out of JSON coercion)
//    service -> resource -> method -> [property, ...]
// --------------------------------------------------------------------------
const STRING_ONLY_RULES = {
  env: { env_vars: { set_value: ['value'] } },
};

// --------------------------------------------------------------------------

function schemaName(resource, method, kind) {
  const pascal = (s) => s.split('_').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  return `stackql${pascal(resource)}${pascal(method)}${kind}`;
}

function renameTemplate(from, to) {
  const obj = `{${JSON.stringify(to)}: {{ toJson (index $e ${JSON.stringify(from)}) }}{{ range $k, $v := $e }}{{ if ne $k ${JSON.stringify(from)} }}, {{ toJson $k }}: {{ toJson $v }}{{ end }}{{ end }}}`;
  return `{{ if eq (kindOf .) "slice" }}[{{ range $i, $e := . }}{{ if $i }},{{ end }}${obj}{{ end }}]{{ else }}{{ $e := . }}${obj}{{ end }}`;
}

function renameSchemaProperty(schema, from, to) {
  if (!schema || typeof schema !== 'object') return schema;
  const target = schema.type === 'array' && schema.items ? schema.items : schema;
  if (target.properties && target.properties[from] !== undefined) {
    const props = {};
    for (const [k, v] of Object.entries(target.properties)) props[k === from ? to : k] = v;
    target.properties = props;
    if (Array.isArray(target.required)) target.required = target.required.map((r) => (r === from ? to : r));
  }
  return schema;
}

// Resolve a method's `operation.$ref` (a JSON pointer into `paths`, with
// `/` escaped as `~1`) to the operation object.
function resolveOperation(doc, m) {
  const ref = m?.operation?.$ref;
  if (!ref || !ref.startsWith('#/paths/')) return null;
  const parts = ref.slice('#/paths/'.length).split('/').map((p) => p.replace(/~1/g, '/').replace(/~0/g, '~'));
  const verb = parts.pop();
  const pathKey = parts.join('/');
  return doc.paths?.[pathKey]?.[verb] ?? null;
}

// Resolve an operation's requestBody (following a components.requestBodies
// $ref) to its JSON schema object, following a schema $ref too.
function resolveRequestBodySchema(doc, op) {
  let rb = op?.requestBody;
  if (rb?.$ref) rb = doc.components?.requestBodies?.[rb.$ref.split('/').pop()];
  let schema = rb?.content?.['application/json']?.schema;
  if (schema?.$ref) schema = doc.components?.schemas?.[schema.$ref.split('/').pop()];
  return schema ?? null;
}

let changedFiles = 0;
let requestRewrites = 0;
let responseRewrites = 0;
let stringOnlyMarks = 0;
const problems = [];

function loadService(service) {
  const file = join(providerDir, 'services', `${service}.yaml`);
  if (!existsSync(file)) {
    problems.push(`service file not found: ${file}`);
    return null;
  }
  return { file, doc: yaml.load(readFileSync(file, 'utf8')) };
}

function getMethod(doc, service, resource, method) {
  const res = doc?.components?.['x-stackQL-resources']?.[resource];
  if (!res) { problems.push(`${service}: resource ${resource} not found`); return null; }
  const m = res.methods?.[method];
  if (!m) { problems.push(`${service}: method ${resource}.${method} not found`); return null; }
  return m;
}

const services = new Set([
  ...Object.keys(REQUEST_RULES), ...Object.keys(RESPONSE_RULES), ...Object.keys(RESPONSE_RENAME_RULES),
  ...Object.keys(STRING_ONLY_RULES), ...Object.keys(EXTRA_SCHEMAS),
]);

for (const service of services) {
  const loaded = loadService(service);
  if (!loaded) continue;
  const { file, doc } = loaded;
  let changed = false;
  doc.components = doc.components || {};
  doc.components.schemas = doc.components.schemas || {};

  for (const [name, schema] of Object.entries(EXTRA_SCHEMAS[service] || {})) {
    if (JSON.stringify(doc.components.schemas[name]) !== JSON.stringify(schema)) {
      doc.components.schemas[name] = schema;
      changed = true;
    }
  }

  // 1. request rewrites
  for (const [resource, methods] of Object.entries(REQUEST_RULES[service] || {})) {
    for (const [method, rule] of Object.entries(methods)) {
      const m = getMethod(doc, service, resource, method);
      if (!m) continue;
      const op = resolveOperation(doc, m);
      if (!op) { problems.push(`${service}: cannot resolve operation for ${resource}.${method}`); continue; }
      const sname = schemaName(resource, method, 'Body');
      const schema = rule.column
        ? { type: 'object', required: [rule.column], properties: { [rule.column]: rule.schema } }
        : rule.schema;
      const mediaType = rule.mediaType || 'application/json';
      const request = {
        mediaType,
        required: rule.column ? [rule.column] : (rule.schema.required || []),
        schema_override: { $ref: `#/components/schemas/${sname}` },
        transform: { type: rule.templateType || JSON_TEMPLATE, body: rule.body },
      };
      const requestBody = { content: { [mediaType]: { schema: { $ref: `#/components/schemas/${sname}` } } }, required: true };
      const before = JSON.stringify([doc.components.schemas[sname], m.request, op.requestBody]);
      doc.components.schemas[sname] = schema;
      m.request = request;
      op.requestBody = requestBody;
      if (JSON.stringify([doc.components.schemas[sname], m.request, op.requestBody]) !== before) {
        changed = true;
        requestRewrites++;
        if (verbose) console.log(`request rewrite ${service}.${resource}.${method} -> ${rule.column ? 'column ' + rule.column : 'whole body'}`);
      }
    }
  }

  // 2. opaque response wraps
  for (const [resource, methods] of Object.entries(RESPONSE_RULES[service] || {})) {
    for (const [method, rule] of Object.entries(methods)) {
      const m = getMethod(doc, service, resource, method);
      if (!m) continue;
      const sname = schemaName(resource, method, 'Response');
      const schema = { type: 'object', properties: { [rule.column]: { type: 'object', additionalProperties: true, description: rule.description } } };
      const response = {
        ...(m.response || {}),
        mediaType: 'application/json',
        overrideMediaType: 'application/json',
        schema_override: { $ref: `#/components/schemas/${sname}` },
        transform: { type: JSON_TEMPLATE, body: `{"${rule.column}": {{ toJson . }}}` },
      };
      const before = JSON.stringify([doc.components.schemas[sname], m.response]);
      doc.components.schemas[sname] = schema;
      m.response = response;
      if (JSON.stringify([doc.components.schemas[sname], m.response]) !== before) {
        changed = true;
        responseRewrites++;
        if (verbose) console.log(`response wrap ${service}.${resource}.${method} -> column ${rule.column}`);
      }
    }
  }

  // 3. response field renames
  for (const [resource, methods] of Object.entries(RESPONSE_RENAME_RULES[service] || {})) {
    for (const [method, rule] of Object.entries(methods)) {
      const m = getMethod(doc, service, resource, method);
      if (!m) continue;
      const op = resolveOperation(doc, m);
      const code = m.response?.openAPIDocKey || '200';
      const content = op?.responses?.[code]?.content?.['application/json'];
      if (!content?.schema) { problems.push(`${service}: no ${code} JSON response schema for ${resource}.${method}`); continue; }
      const sname = schemaName(resource, method, 'Response');
      const renamed = renameSchemaProperty(JSON.parse(JSON.stringify(content.schema)), rule.from, rule.to);
      const response = {
        ...(m.response || {}),
        mediaType: 'application/json',
        overrideMediaType: 'application/json',
        schema_override: { $ref: `#/components/schemas/${sname}` },
        transform: { type: JSON_TEMPLATE, body: renameTemplate(rule.from, rule.to) },
      };
      const before = JSON.stringify([doc.components.schemas[sname], m.response, content.schema]);
      doc.components.schemas[sname] = renamed;
      m.response = response;
      // keep the operation's own response schema in step so DESCRIBE and the
      // docs show the renamed column whichever schema is consulted
      content.schema = renamed;
      if (JSON.stringify([doc.components.schemas[sname], m.response, content.schema]) !== before) {
        changed = true;
        responseRewrites++;
        if (verbose) console.log(`response rename ${service}.${resource}.${method}: ${rule.from} -> ${rule.to}`);
      }
    }
  }

  // 4. string-only body properties
  for (const [resource, methods] of Object.entries(STRING_ONLY_RULES[service] || {})) {
    for (const [method, props] of Object.entries(methods)) {
      const m = getMethod(doc, service, resource, method);
      if (!m) continue;
      const schema = resolveRequestBodySchema(doc, resolveOperation(doc, m));
      if (!schema?.properties) { problems.push(`${service}: no request body properties for ${resource}.${method}`); continue; }
      for (const prop of props) {
        if (!schema.properties[prop]) { problems.push(`${service}: ${resource}.${method} has no request property ${prop}`); continue; }
        if (schema.properties[prop]['x-stackQL-stringOnly'] !== true) {
          schema.properties[prop]['x-stackQL-stringOnly'] = true;
          changed = true;
          stringOnlyMarks++;
          if (verbose) console.log(`string-only ${service}.${resource}.${method}.${prop}`);
        }
      }
    }
  }

  if (changed) {
    writeFileSync(file, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
    changedFiles++;
  }
}

console.log(JSON.stringify({ providerDir, changedFiles, requestRewrites, responseRewrites, stringOnlyMarks, problems }, null, 2));
if (problems.length) process.exit(1);
