#!/usr/bin/env node
// Pre-processing for the raw Netlify Swagger 2.0 document:
//   1. convert Swagger 2.0 -> OpenAPI 3.0 (provider-utils split expects OAS3)
//   2. fix upstream path bugs (paths that repeat the /api/v1 base path)
//   3. drop operations tagged x-internal (not part of the public API surface)
// Usage: node provider-dev/scripts/preprocess.mjs <input swagger.json> <output openapi.json>
import fs from 'fs';
import converter from 'swagger2openapi';

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('usage: preprocess.mjs <input swagger.json> <output openapi.json>');
  process.exit(1);
}

const swagger = JSON.parse(fs.readFileSync(input, 'utf8'));
const basePath = swagger.basePath || '';

// 2. fix paths that duplicate the base path (e.g. /api/v1/sites/{site_id}/env)
for (const key of Object.keys(swagger.paths)) {
  if (basePath && key.startsWith(basePath + '/')) {
    const fixed = key.slice(basePath.length);
    if (swagger.paths[fixed]) {
      throw new Error(`cannot fix ${key}: ${fixed} already exists`);
    }
    swagger.paths[fixed] = swagger.paths[key];
    delete swagger.paths[key];
    console.log(`fixed path ${key} -> ${fixed}`);
  }
}

// 3. drop x-internal operations
let dropped = 0;
for (const [key, item] of Object.entries(swagger.paths)) {
  for (const verb of ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']) {
    const op = item[verb];
    if (op && Array.isArray(op.tags) && op.tags.includes('x-internal')) {
      console.log(`dropping x-internal ${verb.toUpperCase()} ${key} (${op.operationId})`);
      delete item[verb];
      dropped++;
    }
  }
  if (!Object.keys(item).some((k) => ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'].includes(k))) {
    delete swagger.paths[key];
  }
}

// 1. convert to OpenAPI 3
const { openapi } = await converter.convertObj(swagger, { patch: true, warnOnly: true, resolve: false });
fs.writeFileSync(output, JSON.stringify(openapi, null, 2));
const opCount = Object.values(openapi.paths).reduce((n, item) => n + Object.keys(item).filter((k) => ['get', 'post', 'put', 'patch', 'delete'].includes(k)).length, 0);
console.log(`wrote ${output}: openapi ${openapi.openapi}, ${Object.keys(openapi.paths).length} paths, ${opCount} operations, dropped ${dropped} internal operations`);
