#!/usr/bin/env node
// map_operations.mjs
//
// Fills in stackql_resource_name / stackql_method_name / stackql_verb /
// stackql_object_key for operations in provider-dev/config/all_services.csv
// that `generate-mappings` (analyze) left unmapped after a spec refresh.
// Mappings are recorded here as data so a refresh is a reviewed diff rather
// than a hand edit of the CSV. Rows that are already mapped are left alone
// (the checked-in CSV is the durable record of the operation -> resource
// wiring; changing an existing row is a deliberate, reviewed edit).
//
// The script also prunes rows for operations Netlify has retired, resyncs
// rows whose path moved upstream, and reports mapped rows that disagree with
// this table so drift between the two is visible. It FAILS if any live
// operation is still unmapped - add it to the table below and re-run.
//
// Usage: node provider-dev/scripts/map_operations.mjs [--csv provider-dev/config/all_services.csv] [--source-dir provider-dev/source]

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, join, extname } from 'path';
import yaml from 'js-yaml';

const csvArgIdx = process.argv.indexOf('--csv');
const csvPath = resolve(csvArgIdx === -1 ? 'provider-dev/config/all_services.csv' : process.argv[csvArgIdx + 1]);
const srcArgIdx = process.argv.indexOf('--source-dir');
const sourceDir = resolve(srcArgIdx === -1 ? 'provider-dev/source' : process.argv[srcArgIdx + 1]);

// Collect every operationId present in the split specs. `analyze` carries
// previously mapped rows forward even when the operation has been removed
// upstream, so rows not in this set are pruned (and reported).
const liveOps = new Map();
for (const f of readdirSync(sourceDir)) {
  if (!['.yaml', '.yml'].includes(extname(f).toLowerCase())) continue;
  const doc = yaml.load(readFileSync(join(sourceDir, f), 'utf8'));
  for (const [p, pathItem] of Object.entries(doc?.paths ?? {})) {
    for (const [verb, op] of Object.entries(pathItem ?? {})) {
      if (op && typeof op === 'object' && typeof op.operationId === 'string') {
        liveOps.set(op.operationId, { filename: f, path: p, verb });
      }
    }
  }
}

// operationId -> [resource, method, verb, objectKey]
//
// Conventions:
//   - resources are plural snake_case nouns; lifecycle operations (enable,
//     cancel, lock, restore, purge, ...) are `exec` methods on the resource
//     they act on rather than resources of their own, so almost every
//     resource is selectable
//   - GET collection -> select `list`, GET single -> select `get`, POST ->
//     insert `create`, PATCH -> update, PUT -> replace, DELETE -> delete
//   - within a resource, methods mapped to the same SQL verb must have
//     distinct required-parameter signatures (site-scoped vs id-scoped
//     variants are named `*_for_site` / `*_by_id`)
//   - objectKey is only set where the API wraps the collection in an
//     envelope (the database service); every other list endpoint returns a
//     bare array which stackql iterates natively
const M = {
  // ---------------------------------------------------------------- sites
  listSites: ['sites', 'list', 'select', ''],
  listSitesForAccount: ['sites', 'list_for_account', 'select', ''],
  getSite: ['sites', 'get', 'select', ''],
  createSite: ['sites', 'create', 'insert', ''],
  createSiteInTeam: ['sites', 'create_in_team', 'insert', ''],
  updateSite: ['sites', 'update', 'update', ''],
  deleteSite: ['sites', 'delete', 'delete', ''],
  unlinkSiteRepo: ['sites', 'unlink_repo', 'exec', ''],
  enableSite: ['sites', 'enable', 'exec', ''],
  disableSite: ['sites', 'disable', 'exec', ''],
  purgeCache: ['sites', 'purge_cache', 'exec', ''],
  showSiteTLSCertificate: ['ssl_certificates', 'get', 'select', ''],
  getAllCertificates: ['ssl_certificates', 'list', 'select', ''],
  provisionSiteTLSCertificate: ['ssl_certificates', 'provision', 'insert', ''],
  getSiteMetadata: ['site_metadata', 'get', 'select', ''],
  updateSiteMetadata: ['site_metadata', 'update', 'replace', ''],
  listSiteFiles: ['site_files', 'list', 'select', ''],
  getSiteFileByPathName: ['site_files', 'get', 'select', ''],
  listSiteAssets: ['site_assets', 'list', 'select', ''],
  getSiteAssetInfo: ['site_assets', 'get', 'select', ''],
  createSiteAsset: ['site_assets', 'create', 'insert', ''],
  updateSiteAsset: ['site_assets', 'update', 'replace', ''],
  deleteSiteAsset: ['site_assets', 'delete', 'delete', ''],
  getSiteAssetPublicSignature: ['site_asset_public_signatures', 'get', 'select', ''],
  listSiteSnippets: ['snippets', 'list', 'select', ''],
  getSiteSnippet: ['snippets', 'get', 'select', ''],
  createSiteSnippet: ['snippets', 'create', 'insert', ''],
  updateSiteSnippet: ['snippets', 'update', 'replace', ''],
  deleteSiteSnippet: ['snippets', 'delete', 'delete', ''],
  listSiteDeployedBranches: ['deployed_branches', 'list', 'select', ''],
  getDNSForSite: ['site_dns', 'get', 'select', ''],
  configureDNSForSite: ['site_dns', 'configure', 'exec', ''],

  // -------------------------------------------------------------- deploys
  listSiteDeploys: ['deploys', 'list', 'select', ''],
  getSiteDeploy: ['deploys', 'get', 'select', ''],
  getDeploy: ['deploys', 'get_by_id', 'select', ''],
  createSiteDeploy: ['deploys', 'create', 'insert', ''],
  updateSiteDeploy: ['deploys', 'update', 'replace', ''],
  deleteSiteDeploy: ['deploys', 'delete', 'delete', ''],
  deleteDeploy: ['deploys', 'delete_by_id', 'delete', ''],
  cancelSiteDeploy: ['deploys', 'cancel', 'exec', ''],
  restoreSiteDeploy: ['deploys', 'restore', 'exec', ''],
  rollbackSiteDeploy: ['deploys', 'rollback', 'exec', ''],
  lockDeploy: ['deploys', 'lock', 'exec', ''],
  unlockDeploy: ['deploys', 'unlock', 'exec', ''],
  updateDeployValidations: ['deploys', 'update_validations_report', 'exec', ''],
  uploadDeployFile: ['deploys', 'upload_file', 'exec', ''],
  uploadDeployFunction: ['deploys', 'upload_function', 'exec', ''],
  uploadDeployEdgeFunction: ['deploys', 'upload_edge_function', 'exec', ''],
  listDeployKeys: ['deploy_keys', 'list', 'select', ''],
  getDeployKey: ['deploy_keys', 'get', 'select', ''],
  createDeployKey: ['deploy_keys', 'create', 'insert', ''],
  deleteDeployKey: ['deploy_keys', 'delete', 'delete', ''],

  // --------------------------------------------------------------- builds
  listSiteBuilds: ['builds', 'list', 'select', ''],
  getSiteBuild: ['builds', 'get', 'select', ''],
  createSiteBuild: ['builds', 'create', 'insert', ''],
  notifyBuildStart: ['builds', 'notify_start', 'exec', ''],
  updateSiteBuildLog: ['builds', 'update_log', 'exec', ''],
  getAccountBuildStatus: ['build_status', 'get', 'select', ''],
  listSiteBuildHooks: ['build_hooks', 'list', 'select', ''],
  getSiteBuildHook: ['build_hooks', 'get', 'select', ''],
  createSiteBuildHook: ['build_hooks', 'create', 'insert', ''],
  updateSiteBuildHook: ['build_hooks', 'update', 'replace', ''],
  deleteSiteBuildHook: ['build_hooks', 'delete', 'delete', ''],

  // ------------------------------------------------------------------ env
  getEnvVars: ['env_vars', 'list', 'select', ''],
  getSiteEnvVars: ['env_vars', 'list_for_site', 'select', ''],
  getEnvVar: ['env_vars', 'get', 'select', ''],
  createEnvVars: ['env_vars', 'create', 'insert', ''],
  updateEnvVar: ['env_vars', 'update', 'replace', ''],
  setEnvVarValue: ['env_vars', 'set_value', 'update', ''],
  deleteEnvVar: ['env_vars', 'delete', 'delete', ''],
  deleteEnvVarValue: ['env_vars', 'delete_value', 'delete', ''],

  // ------------------------------------------------------------------ dns
  getDnsZones: ['dns_zones', 'list', 'select', ''],
  getDnsZone: ['dns_zones', 'get', 'select', ''],
  createDnsZone: ['dns_zones', 'create', 'insert', ''],
  deleteDnsZone: ['dns_zones', 'delete', 'delete', ''],
  transferDnsZone: ['dns_zones', 'transfer', 'exec', ''],
  getDnsRecords: ['dns_records', 'list', 'select', ''],
  getIndividualDnsRecord: ['dns_records', 'get', 'select', ''],
  createDnsRecord: ['dns_records', 'create', 'insert', ''],
  deleteDnsRecord: ['dns_records', 'delete', 'delete', ''],

  // ------------------------------------------------------------ functions
  searchSiteFunctions: ['functions', 'list', 'select', ''],

  // ---------------------------------------------------------------- forms
  listSiteForms: ['forms', 'list', 'select', ''],
  deleteSiteForm: ['forms', 'delete', 'delete', ''],
  listFormSubmissions: ['submissions', 'list', 'select', ''],
  listSiteSubmissions: ['submissions', 'list_for_site', 'select', ''],
  listFormSubmission: ['submissions', 'get', 'select', ''],
  deleteSubmission: ['submissions', 'delete', 'delete', ''],

  // ---------------------------------------------------------------- hooks
  listHooksBySiteId: ['hooks', 'list', 'select', ''],
  getHook: ['hooks', 'get', 'select', ''],
  createHookBySiteId: ['hooks', 'create', 'insert', ''],
  updateHook: ['hooks', 'update', 'replace', ''],
  deleteHook: ['hooks', 'delete', 'delete', ''],
  enableHook: ['hooks', 'enable', 'exec', ''],
  listHookTypes: ['hook_types', 'list', 'select', ''],

  // ------------------------------------------------------------- accounts
  listAccountsForUser: ['accounts', 'list', 'select', ''],
  getAccount: ['accounts', 'get', 'select', ''],
  createAccount: ['accounts', 'create', 'insert', ''],
  updateAccount: ['accounts', 'update', 'replace', ''],
  cancelAccount: ['accounts', 'cancel', 'delete', ''],
  listMembersForAccount: ['members', 'list', 'select', ''],
  getAccountMember: ['members', 'get', 'select', ''],
  addMemberToAccount: ['members', 'add', 'insert', ''],
  updateAccountMember: ['members', 'update', 'replace', ''],
  removeAccountMember: ['members', 'remove', 'delete', ''],
  listAccountTypesForUser: ['account_types', 'list', 'select', ''],
  listPaymentMethodsForUser: ['payment_methods', 'list', 'select', ''],
  listAccountAuditEvents: ['audit_events', 'list', 'select', ''],

  // ---------------------------------------------------------------- users
  getCurrentUser: ['users', 'get_current', 'select', ''],

  // ---------------------------------------------------------------- oauth
  createTicket: ['tickets', 'create', 'insert', ''],
  showTicket: ['tickets', 'get', 'select', ''],
  exchangeTicket: ['tickets', 'exchange', 'exec', ''],

  // ------------------------------------------------------------- services
  getServices: ['services', 'list', 'select', ''],
  showService: ['services', 'get', 'select', ''],
  showServiceManifest: ['service_manifests', 'get', 'select', ''],
  listServiceInstancesForSite: ['service_instances', 'list', 'select', ''],
  showServiceInstance: ['service_instances', 'get', 'select', ''],
  createServiceInstance: ['service_instances', 'create', 'insert', ''],
  updateServiceInstance: ['service_instances', 'update', 'replace', ''],
  deleteServiceInstance: ['service_instances', 'delete', 'delete', ''],

  // ---------------------------------------------------------- split_tests
  getSplitTests: ['split_tests', 'list', 'select', ''],
  getSplitTest: ['split_tests', 'get', 'select', ''],
  createSplitTest: ['split_tests', 'create', 'insert', ''],
  updateSplitTest: ['split_tests', 'update', 'replace', ''],
  enableSplitTest: ['split_tests', 'publish', 'exec', ''],
  disableSplitTest: ['split_tests', 'unpublish', 'exec', ''],

  // ---------------------------------------------------------- dev_servers
  listSiteDevServers: ['dev_servers', 'list', 'select', ''],
  getSiteDevServer: ['dev_servers', 'get', 'select', ''],
  createSiteDevServer: ['dev_servers', 'create', 'insert', ''],
  deleteSiteDevServers: ['dev_servers', 'delete', 'delete', ''],
  markDevServerActivity: ['dev_servers', 'mark_activity', 'exec', ''],
  updateDevServerState: ['dev_servers', 'update_state', 'exec', ''],
  listSiteDevServerHooks: ['dev_server_hooks', 'list', 'select', ''],
  getSiteDevServerHook: ['dev_server_hooks', 'get', 'select', ''],
  createSiteDevServerHook: ['dev_server_hooks', 'create', 'insert', ''],
  updateSiteDevServerHook: ['dev_server_hooks', 'update', 'replace', ''],
  deleteSiteDevServerHook: ['dev_server_hooks', 'delete', 'delete', ''],

  // -------------------------------------------------------- agent_runners
  listAgentRunners: ['agent_runners', 'list', 'select', ''],
  getAgentRunner: ['agent_runners', 'get', 'select', ''],
  createAgentRunner: ['agent_runners', 'create', 'insert', ''],
  updateAgentRunner: ['agent_runners', 'update', 'update', ''],
  deleteAgentRunner: ['agent_runners', 'delete', 'delete', ''],
  archiveAgentRunner: ['agent_runners', 'archive', 'exec', ''],
  agentRunnerPullRequest: ['agent_runners', 'create_pull_request', 'exec', ''],
  agentRunnerCommitToBranch: ['agent_runners', 'commit_to_branch', 'exec', ''],
  createAgentRunnerUploadUrl: ['agent_runners', 'create_upload_url', 'exec', ''],
  listAgentRunnerSessions: ['agent_runner_sessions', 'list', 'select', ''],
  getAgentRunnerSession: ['agent_runner_sessions', 'get', 'select', ''],
  createAgentRunnerSession: ['agent_runner_sessions', 'create', 'insert', ''],
  updateAgentRunnerSession: ['agent_runner_sessions', 'update', 'update', ''],
  deleteAgentRunnerSession: ['agent_runner_sessions', 'delete', 'delete', ''],
  listSiteAgentRunnerHooks: ['agent_runner_hooks', 'list', 'select', ''],
  getSiteAgentRunnerHook: ['agent_runner_hooks', 'get', 'select', ''],
  createSiteAgentRunnerHook: ['agent_runner_hooks', 'create', 'insert', ''],
  updateSiteAgentRunnerHook: ['agent_runner_hooks', 'update', 'replace', ''],
  deleteSiteAgentRunnerHook: ['agent_runner_hooks', 'delete', 'delete', ''],

  // ----------------------------------------------------------- ai_gateway
  getAIGatewayProviders: ['providers', 'get', 'select', ''],
  getAIGatewayToken: ['tokens', 'get_for_site', 'select', ''],
  getAccountAIGatewayToken: ['tokens', 'get_for_account', 'select', ''],

  // ------------------------------------------------------------- database
  getSiteDatabase: ['databases', 'get', 'select', ''],
  createSiteDatabase: ['databases', 'create', 'insert', ''],
  deleteSiteDatabase: ['databases', 'delete', 'delete', ''],
  listSiteDatabaseBranches: ['branches', 'list', 'select', '$.branches'],
  getSiteDatabaseBranch: ['branches', 'get', 'select', ''],
  createSiteDatabaseBranch: ['branches', 'create', 'insert', ''],
  deleteSiteDatabaseBranch: ['branches', 'delete', 'delete', ''],
  resetSiteDatabaseBranch: ['branches', 'reset', 'exec', ''],
  getSiteDatabaseComputeSettings: ['compute_settings', 'get', 'select', ''],
  setSiteDatabaseComputeSettings: ['compute_settings', 'set', 'replace', ''],
  setSiteDatabaseBranchComputeSettings: ['compute_settings', 'set_for_branch', 'replace', ''],
  clearSiteDatabaseComputeSettings: ['compute_settings', 'clear', 'delete', ''],
  listSiteDatabaseMigrations: ['migrations', 'list', 'select', '$.migrations'],
  getSiteDatabaseMigration: ['migrations', 'get', 'select', ''],
  runSiteDatabaseMigrations: ['migrations', 'run', 'exec', ''],
  listSiteDatabaseSnapshots: ['snapshots', 'list', 'select', '$.snapshots'],
  createSiteDatabaseSnapshot: ['snapshots', 'create', 'insert', ''],
  deleteSiteDatabaseSnapshot: ['snapshots', 'delete', 'delete', ''],
  restoreSiteDatabaseSnapshot: ['snapshots', 'restore', 'exec', ''],
};

// Minimal CSV record parser that respects double-quoted fields. Netlify's
// op_description values contain commas AND embedded newlines, so records are
// parsed from the whole text rather than line by line.
function parseRecords(text) {
  const records = [];
  let row = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') q = false;
      else cur += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cur); cur = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cur); cur = '';
      if (row.length > 1 || row[0] !== '') records.push(row);
      row = [];
    } else cur += ch;
  }
  if (cur !== '' || row.length) { row.push(cur); records.push(row); }
  return records;
}
function fmt(v) {
  return /[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

const text = readFileSync(csvPath, 'utf8');
const records = parseRecords(text);
const header = records[0].map(fmt).join(',');
const out = [header];
let applied = 0;
const stillUnmapped = [];
const pruned = [];
const resynced = [];
const driftFromTable = [];
for (const c of records.slice(1)) {
  const opId = c[2];
  const live = liveOps.get(opId);
  if (!live) {
    pruned.push(opId);
    continue;
  }
  if (c[0] !== live.filename || c[1] !== live.path || c[4] !== live.verb) {
    resynced.push(`${opId}: ${c[0]} ${c[4].toUpperCase()} ${c[1]} -> ${live.filename} ${live.verb.toUpperCase()} ${live.path}`);
    c[0] = live.filename; c[1] = live.path; c[4] = live.verb;
  }
  const m = M[opId];
  // analyze prefills stackql_method_name with the formatted operationId and
  // stackql_verb from the HTTP verb, so "unmapped" is an empty resource name.
  if (c[8] !== 'skip_this_resource' && (!c[8] || !c[9] || !c[10])) {
    if (m) {
      [c[8], c[9], c[10], c[11]] = m;
      applied++;
    } else {
      stillUnmapped.push(opId);
    }
  } else if (m && (c[8] !== m[0] || c[9] !== m[1] || c[10] !== m[2] || (c[11] || '') !== m[3])) {
    driftFromTable.push(`${opId}: csv=${c[8]}.${c[9]}/${c[10]}/${c[11] || '-'} table=${m[0]}.${m[1]}/${m[2]}/${m[3] || '-'}`);
  }
  out.push(c.map(fmt).join(','));
}
writeFileSync(csvPath, out.join('\n') + '\n');
const unused = Object.keys(M).filter(k => !liveOps.has(k));
console.log(JSON.stringify({ applied, pruned, resynced, driftFromTable, stillUnmapped, unusedMappings: unused }, null, 2));
if (stillUnmapped.length) process.exit(1);
