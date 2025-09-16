---
title: netlify
hide_title: false
hide_table_of_contents: false
keywords:
  - netlify
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Netlify resources using SQL
custom_edit_url: null
image: /img/providers/netlify/stackql-netlify-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Web development and content distribution platform.

:::info[Provider Summary] 

total services: __30__  
total resources: __81__  

:::

See also:   
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * * 

## Installation

To pull the latest version of the `netlify` provider, run the following command:  

```bash
REGISTRY PULL netlify;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).  

## Authentication

The following system environment variables are used for authentication by default:  

- <CopyableCode code="NETLIFY_AUTH_TOKEN" /> - Netlify API token (see <a href="https://docs.netlify.com/api/get-started/#authentication">How to Create a Netlify API Token</a>)
  
These variables are sourced at runtime (from the local machine or as CI variables/secrets).  

<details>

<summary>Using different environment variables</summary>

To use different environment variables (instead of the defaults), use the `--auth` flag of the `stackql` program.  For example:  

```bash

AUTH='{ "netlify": { "type": "bearer",  "credentialsenvvar": "YOUR_NETLIFY_AUTH_TOKEN_VAR" }}'
stackql shell --auth="${AUTH}"

```
or using PowerShell:  

```powershell

$Auth = "{ 'netlify': { 'type': 'bearer',  'credentialsenvvar': 'YOUR_NETLIFY_AUTH_TOKEN_VAR' }}"
stackql.exe shell --auth=$Auth

```
</details>

## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/access_token/">access_token</a><br />
<a href="/services/account_membership/">account_membership</a><br />
<a href="/services/account_type/">account_type</a><br />
<a href="/services/asset/">asset</a><br />
<a href="/services/asset_public_signature/">asset_public_signature</a><br />
<a href="/services/audit_log/">audit_log</a><br />
<a href="/services/build/">build</a><br />
<a href="/services/build_hook/">build_hook</a><br />
<a href="/services/build_log_msg/">build_log_msg</a><br />
<a href="/services/deploy/">deploy</a><br />
<a href="/services/deploy_key/">deploy_key</a><br />
<a href="/services/deployed_branch/">deployed_branch</a><br />
<a href="/services/dns_zone/">dns_zone</a><br />
<a href="/services/file/">file</a><br />
<a href="/services/form/">form</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/function/">function</a><br />
<a href="/services/hook/">hook</a><br />
<a href="/services/hook_type/">hook_type</a><br />
<a href="/services/member/">member</a><br />
<a href="/services/metadata/">metadata</a><br />
<a href="/services/payment_method/">payment_method</a><br />
<a href="/services/service/">service</a><br />
<a href="/services/service_instance/">service_instance</a><br />
<a href="/services/site/">site</a><br />
<a href="/services/sni_certificate/">sni_certificate</a><br />
<a href="/services/snippet/">snippet</a><br />
<a href="/services/split_test/">split_test</a><br />
<a href="/services/submission/">submission</a><br />
<a href="/services/ticket/">ticket</a><br />
<a href="/services/user/">user</a><br />
</div>
</div>
