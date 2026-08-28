// Service discriminator for the Netlify provider, used by `npm run split`
// (`--svc-discriminator function`).
//
// Signature: (path, operationId, tags, { providerName, pathItem, operation }) => serviceName
//
// Operations are grouped into StackQL services by API area rather than by the
// upstream tag (the spec has 35 tags, several with a single operation), so that
// closely related resources live together (deploys with deploy keys, sites with
// their SSL certificates, snippets, assets and so on). Every operation must be
// listed here - an unmapped operationId fails the split so a spec refresh that
// adds endpoints is a deliberate decision, not a silent default.

const byOperationId = {
  // sites
  listSites: 'sites', createSite: 'sites', getSite: 'sites', updateSite: 'sites', deleteSite: 'sites',
  createSiteInTeam: 'sites', listSitesForAccount: 'sites', unlinkSiteRepo: 'sites', enableSite: 'sites', disableSite: 'sites',
  provisionSiteTLSCertificate: 'sites', showSiteTLSCertificate: 'sites', getAllCertificates: 'sites',
  getSiteMetadata: 'sites', updateSiteMetadata: 'sites',
  listSiteFiles: 'sites', getSiteFileByPathName: 'sites',
  listSiteAssets: 'sites', createSiteAsset: 'sites', getSiteAssetInfo: 'sites', updateSiteAsset: 'sites', deleteSiteAsset: 'sites',
  getSiteAssetPublicSignature: 'sites',
  listSiteSnippets: 'sites', createSiteSnippet: 'sites', getSiteSnippet: 'sites', updateSiteSnippet: 'sites', deleteSiteSnippet: 'sites',
  listSiteDeployedBranches: 'sites',
  getDNSForSite: 'sites', configureDNSForSite: 'sites',
  purgeCache: 'sites',
  // deploys
  listSiteDeploys: 'deploys', createSiteDeploy: 'deploys', getSiteDeploy: 'deploys', updateSiteDeploy: 'deploys', deleteSiteDeploy: 'deploys',
  cancelSiteDeploy: 'deploys', restoreSiteDeploy: 'deploys', rollbackSiteDeploy: 'deploys', getDeploy: 'deploys', deleteDeploy: 'deploys',
  updateDeployValidations: 'deploys', lockDeploy: 'deploys', unlockDeploy: 'deploys',
  uploadDeployFile: 'deploys', uploadDeployFunction: 'deploys', uploadDeployEdgeFunction: 'deploys',
  listDeployKeys: 'deploys', createDeployKey: 'deploys', getDeployKey: 'deploys', deleteDeployKey: 'deploys',
  // builds
  listSiteBuilds: 'builds', createSiteBuild: 'builds', getSiteBuild: 'builds', updateSiteBuildLog: 'builds', notifyBuildStart: 'builds',
  getAccountBuildStatus: 'builds',
  listSiteBuildHooks: 'builds', createSiteBuildHook: 'builds', getSiteBuildHook: 'builds', updateSiteBuildHook: 'builds', deleteSiteBuildHook: 'builds',
  // env
  getEnvVars: 'env', createEnvVars: 'env', getSiteEnvVars: 'env', getEnvVar: 'env', updateEnvVar: 'env', setEnvVarValue: 'env',
  deleteEnvVar: 'env', deleteEnvVarValue: 'env',
  // dns
  createDnsZone: 'dns', getDnsZones: 'dns', getDnsZone: 'dns', deleteDnsZone: 'dns', transferDnsZone: 'dns',
  getDnsRecords: 'dns', createDnsRecord: 'dns', getIndividualDnsRecord: 'dns', deleteDnsRecord: 'dns',
  // functions
  searchSiteFunctions: 'functions',
  // forms
  listSiteForms: 'forms', deleteSiteForm: 'forms', listSiteSubmissions: 'forms', listFormSubmissions: 'forms',
  listFormSubmission: 'forms', deleteSubmission: 'forms',
  // hooks
  listHooksBySiteId: 'hooks', createHookBySiteId: 'hooks', getHook: 'hooks', updateHook: 'hooks', deleteHook: 'hooks', enableHook: 'hooks',
  listHookTypes: 'hooks',
  // accounts
  listAccountsForUser: 'accounts', createAccount: 'accounts', getAccount: 'accounts', updateAccount: 'accounts', cancelAccount: 'accounts',
  listMembersForAccount: 'accounts', addMemberToAccount: 'accounts', getAccountMember: 'accounts', updateAccountMember: 'accounts', removeAccountMember: 'accounts',
  listAccountTypesForUser: 'accounts', listPaymentMethodsForUser: 'accounts', listAccountAuditEvents: 'accounts',
  // users
  getCurrentUser: 'users',
  // oauth
  createTicket: 'oauth', showTicket: 'oauth', exchangeTicket: 'oauth',
  // services (add-ons)
  getServices: 'services', showService: 'services', showServiceManifest: 'services',
  listServiceInstancesForSite: 'services', createServiceInstance: 'services', showServiceInstance: 'services',
  updateServiceInstance: 'services', deleteServiceInstance: 'services',
  // split tests
  createSplitTest: 'split_tests', getSplitTests: 'split_tests', updateSplitTest: 'split_tests', getSplitTest: 'split_tests',
  enableSplitTest: 'split_tests', disableSplitTest: 'split_tests',
  // dev servers
  listSiteDevServers: 'dev_servers', createSiteDevServer: 'dev_servers', deleteSiteDevServers: 'dev_servers', getSiteDevServer: 'dev_servers',
  markDevServerActivity: 'dev_servers', updateDevServerState: 'dev_servers',
  listSiteDevServerHooks: 'dev_servers', createSiteDevServerHook: 'dev_servers', getSiteDevServerHook: 'dev_servers',
  updateSiteDevServerHook: 'dev_servers', deleteSiteDevServerHook: 'dev_servers',
  // agent runners
  listAgentRunners: 'agent_runners', createAgentRunner: 'agent_runners', createAgentRunnerUploadUrl: 'agent_runners', getAgentRunner: 'agent_runners',
  updateAgentRunner: 'agent_runners', deleteAgentRunner: 'agent_runners', archiveAgentRunner: 'agent_runners',
  agentRunnerPullRequest: 'agent_runners', agentRunnerCommitToBranch: 'agent_runners',
  listAgentRunnerSessions: 'agent_runners', createAgentRunnerSession: 'agent_runners', getAgentRunnerSession: 'agent_runners',
  updateAgentRunnerSession: 'agent_runners', deleteAgentRunnerSession: 'agent_runners',
  listSiteAgentRunnerHooks: 'agent_runners', createSiteAgentRunnerHook: 'agent_runners', getSiteAgentRunnerHook: 'agent_runners',
  updateSiteAgentRunnerHook: 'agent_runners', deleteSiteAgentRunnerHook: 'agent_runners',
  // ai gateway
  getAIGatewayProviders: 'ai_gateway', getAIGatewayToken: 'ai_gateway', getAccountAIGatewayToken: 'ai_gateway',
  // database (Netlify DB)
  createSiteDatabase: 'database', getSiteDatabase: 'database', deleteSiteDatabase: 'database',
  createSiteDatabaseBranch: 'database', listSiteDatabaseBranches: 'database', getSiteDatabaseBranch: 'database', deleteSiteDatabaseBranch: 'database',
  resetSiteDatabaseBranch: 'database', setSiteDatabaseBranchComputeSettings: 'database', setSiteDatabaseComputeSettings: 'database',
  getSiteDatabaseComputeSettings: 'database', clearSiteDatabaseComputeSettings: 'database',
  listSiteDatabaseMigrations: 'database', getSiteDatabaseMigration: 'database', runSiteDatabaseMigrations: 'database',
  createSiteDatabaseSnapshot: 'database', listSiteDatabaseSnapshots: 'database', deleteSiteDatabaseSnapshot: 'database', restoreSiteDatabaseSnapshot: 'database',
};

export default function discriminator(path, operationId, tags) {
  const svc = byOperationId[operationId];
  if (!svc) {
    throw new Error(
      'svc-discriminator: unmapped operation ' + operationId + ' (' + path + ') tags=' + tags.join(',') +
      ' - add it to provider-dev/scripts/svc-discriminator.mjs'
    );
  }
  return svc;
}
