--- 
title: sites
hide_title: false
hide_table_of_contents: false
keywords:
  - sites
  - sites
  - netlify
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage netlify resources using SQL
custom_edit_url: null
image: /img/stackql-netlify-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>sites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.sites.sites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_account', value: 'list_for_account' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="admin_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch_deploy_custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_image" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="default_hooks_data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_hook" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_preview_custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain_aliases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="force_ssl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions_region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_provider" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="id_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="managed_dns" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="notification_email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prerender" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prevent_non_git_prod_deploys" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="processing_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_deploy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="screenshot_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_account">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="admin_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch_deploy_custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_image" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="default_hooks_data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_hook" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_preview_custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain_aliases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="force_ssl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions_region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_provider" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="id_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="managed_dns" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="notification_email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prerender" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prevent_non_git_prod_deploys" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="processing_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_deploy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="screenshot_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="admin_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch_deploy_custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_image" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="default_hooks_data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_hook" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_preview_custom_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain_aliases" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="force_ssl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions_region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_provider" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="id_domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="managed_dns" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="notification_email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prerender" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prevent_non_git_prod_deploys" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="processing_settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_deploy" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="screenshot_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-feature_flags"><code>feature_flags</code></a></td>
    <td>**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use &#91;getEnvVars&#93;(https:​//open-api.netlify.com/#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.</td>
</tr>
<tr>
    <td><a href="#list_for_account"><CopyableCode code="list_for_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use &#91;getEnvVars&#93;(https:​//open-api.netlify.com/#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use &#91;getEnvVars&#93;(https:​//open-api.netlify.com/#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.</td>
</tr>
<tr>
    <td><a href="#create_in_team"><CopyableCode code="create_in_team" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
    <td><a href="#parameter-configure_dns"><code>configure_dns</code></a></td>
    <td>**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use &#91;createEnvVars&#93;(https:​//open-api.netlify.com/#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-configure_dns"><code>configure_dns</code></a></td>
    <td>**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use &#91;createEnvVars&#93;(https:​//open-api.netlify.com/#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use &#91;updateEnvVar&#93;(https:​//open-api.netlify.com/#tag/environmentVariables/operation/updateEnvVar) to update a site's environment variables.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#purge_cache"><CopyableCode code="purge_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Purges cached content from Netlify's CDN. Supports purging by Cache-Tag.</td>
</tr>
<tr>
    <td><a href="#unlink_repo"><CopyableCode code="unlink_repo" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>&#91;Beta&#93; Unlinks the repo from the site.&lt;br /&gt;&lt;br /&gt;This action will also:&lt;br /&gt;- Delete associated deploy keys&lt;br /&gt;- Delete outgoing webhooks for the repo&lt;br /&gt;- Delete the site's build hooks</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Re-enables a site that was previously disabled by the user. Sites that were disabled for usage exceeded or marked as spam cannot be re-enabled via this endpoint.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reason"><code>reason</code></a>, <a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Disables a site, preventing it from serving content. The site can be re-enabled later using the enable endpoint.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-account_slug">
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reason">
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Reason for disabling the site</td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-configure_dns">
    <td><CopyableCode code="configure_dns" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-feature_flags">
    <td><CopyableCode code="feature_flags" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_account', value: 'list_for_account' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](https://open-api.netlify.com/#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.

```sql
SELECT
id,
name,
account_id,
session_id,
user_id,
account_name,
account_slug,
admin_url,
branch_deploy_custom_domain,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_preview_custom_domain,
deploy_url,
domain_aliases,
force_ssl,
functions_region,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
prevent_non_git_prod_deploys,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
FROM netlify.sites.sites
WHERE site_id = '{{ site_id }}' -- required
AND feature_flags = '{{ feature_flags }}'
;
```
</TabItem>
<TabItem value="list_for_account">

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](https://open-api.netlify.com/#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.

```sql
SELECT
id,
name,
account_id,
session_id,
user_id,
account_name,
account_slug,
admin_url,
branch_deploy_custom_domain,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_preview_custom_domain,
deploy_url,
domain_aliases,
force_ssl,
functions_region,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
prevent_non_git_prod_deploys,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
FROM netlify.sites.sites
WHERE account_slug = '{{ account_slug }}' -- required
AND name = '{{ name }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list">

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](https://open-api.netlify.com/#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.

```sql
SELECT
id,
name,
account_id,
session_id,
user_id,
account_name,
account_slug,
admin_url,
branch_deploy_custom_domain,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_preview_custom_domain,
deploy_url,
domain_aliases,
force_ssl,
functions_region,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
prevent_non_git_prod_deploys,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
FROM netlify.sites.sites
WHERE name = '{{ name }}'
AND filter = '{{ filter }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_in_team"
    values={[
        { label: 'create_in_team', value: 'create_in_team' },
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_in_team">

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [createEnvVars](https://open-api.netlify.com/#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.

```sql
INSERT INTO netlify.sites.sites (
id,
state,
plan,
name,
custom_domain,
domain_aliases,
branch_deploy_custom_domain,
deploy_preview_custom_domain,
password,
notification_email,
url,
ssl_url,
admin_url,
screenshot_url,
created_at,
updated_at,
user_id,
session_id,
ssl,
force_ssl,
managed_dns,
deploy_url,
published_deploy,
account_id,
account_name,
account_slug,
git_provider,
deploy_hook,
capabilities,
processing_settings,
build_settings,
id_domain,
default_hooks_data,
build_image,
prerender,
functions_region,
prevent_non_git_prod_deploys,
repo,
account_slug,
configure_dns
)
SELECT 
'{{ id }}',
'{{ state }}',
'{{ plan }}',
'{{ name }}',
'{{ custom_domain }}',
'{{ domain_aliases }}',
'{{ branch_deploy_custom_domain }}',
'{{ deploy_preview_custom_domain }}',
'{{ password }}',
'{{ notification_email }}',
'{{ url }}',
'{{ ssl_url }}',
'{{ admin_url }}',
'{{ screenshot_url }}',
'{{ created_at }}',
'{{ updated_at }}',
'{{ user_id }}',
'{{ session_id }}',
{{ ssl }},
{{ force_ssl }},
{{ managed_dns }},
'{{ deploy_url }}',
'{{ published_deploy }}',
'{{ account_id }}',
'{{ account_name }}',
'{{ account_slug }}',
'{{ git_provider }}',
'{{ deploy_hook }}',
'{{ capabilities }}',
'{{ processing_settings }}',
'{{ build_settings }}',
'{{ id_domain }}',
'{{ default_hooks_data }}',
'{{ build_image }}',
'{{ prerender }}',
'{{ functions_region }}',
{{ prevent_non_git_prod_deploys }},
'{{ repo }}',
'{{ account_slug }}',
'{{ configure_dns }}'
RETURNING
id,
name,
account_id,
session_id,
user_id,
account_name,
account_slug,
admin_url,
branch_deploy_custom_domain,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_preview_custom_domain,
deploy_url,
domain_aliases,
force_ssl,
functions_region,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
prevent_non_git_prod_deploys,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
;
```
</TabItem>
<TabItem value="create">

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [createEnvVars](https://open-api.netlify.com/#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.

```sql
INSERT INTO netlify.sites.sites (
id,
state,
plan,
name,
custom_domain,
domain_aliases,
branch_deploy_custom_domain,
deploy_preview_custom_domain,
password,
notification_email,
url,
ssl_url,
admin_url,
screenshot_url,
created_at,
updated_at,
user_id,
session_id,
ssl,
force_ssl,
managed_dns,
deploy_url,
published_deploy,
account_id,
account_name,
account_slug,
git_provider,
deploy_hook,
capabilities,
processing_settings,
build_settings,
id_domain,
default_hooks_data,
build_image,
prerender,
functions_region,
prevent_non_git_prod_deploys,
repo,
configure_dns
)
SELECT 
'{{ id }}',
'{{ state }}',
'{{ plan }}',
'{{ name }}',
'{{ custom_domain }}',
'{{ domain_aliases }}',
'{{ branch_deploy_custom_domain }}',
'{{ deploy_preview_custom_domain }}',
'{{ password }}',
'{{ notification_email }}',
'{{ url }}',
'{{ ssl_url }}',
'{{ admin_url }}',
'{{ screenshot_url }}',
'{{ created_at }}',
'{{ updated_at }}',
'{{ user_id }}',
'{{ session_id }}',
{{ ssl }},
{{ force_ssl }},
{{ managed_dns }},
'{{ deploy_url }}',
'{{ published_deploy }}',
'{{ account_id }}',
'{{ account_name }}',
'{{ account_slug }}',
'{{ git_provider }}',
'{{ deploy_hook }}',
'{{ capabilities }}',
'{{ processing_settings }}',
'{{ build_settings }}',
'{{ id_domain }}',
'{{ default_hooks_data }}',
'{{ build_image }}',
'{{ prerender }}',
'{{ functions_region }}',
{{ prevent_non_git_prod_deploys }},
'{{ repo }}',
'{{ configure_dns }}'
RETURNING
id,
name,
account_id,
session_id,
user_id,
account_name,
account_slug,
admin_url,
branch_deploy_custom_domain,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_preview_custom_domain,
deploy_url,
domain_aliases,
force_ssl,
functions_region,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
prevent_non_git_prod_deploys,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sites
  props:
    - name: account_slug
      value: "{{ account_slug }}"
      description: Required parameter for the sites resource.
    - name: id
      value: "{{ id }}"
    - name: state
      value: "{{ state }}"
    - name: plan
      value: "{{ plan }}"
    - name: name
      value: "{{ name }}"
    - name: custom_domain
      value: "{{ custom_domain }}"
    - name: domain_aliases
      value:
        - "{{ domain_aliases }}"
    - name: branch_deploy_custom_domain
      value: "{{ branch_deploy_custom_domain }}"
    - name: deploy_preview_custom_domain
      value: "{{ deploy_preview_custom_domain }}"
    - name: password
      value: "{{ password }}"
    - name: notification_email
      value: "{{ notification_email }}"
    - name: url
      value: "{{ url }}"
    - name: ssl_url
      value: "{{ ssl_url }}"
    - name: admin_url
      value: "{{ admin_url }}"
    - name: screenshot_url
      value: "{{ screenshot_url }}"
    - name: created_at
      value: "{{ created_at }}"
    - name: updated_at
      value: "{{ updated_at }}"
    - name: user_id
      value: "{{ user_id }}"
    - name: session_id
      value: "{{ session_id }}"
    - name: ssl
      value: {{ ssl }}
    - name: force_ssl
      value: {{ force_ssl }}
    - name: managed_dns
      value: {{ managed_dns }}
    - name: deploy_url
      value: "{{ deploy_url }}"
    - name: published_deploy
      value:
        id: "{{ id }}"
        site_id: "{{ site_id }}"
        user_id: "{{ user_id }}"
        build_id: "{{ build_id }}"
        state: "{{ state }}"
        name: "{{ name }}"
        url: "{{ url }}"
        ssl_url: "{{ ssl_url }}"
        admin_url: "{{ admin_url }}"
        deploy_url: "{{ deploy_url }}"
        deploy_ssl_url: "{{ deploy_ssl_url }}"
        screenshot_url: "{{ screenshot_url }}"
        review_id: {{ review_id }}
        draft: {{ draft }}
        required:
          - "{{ required }}"
        required_functions:
          - "{{ required_functions }}"
        required_edge_functions:
          - "{{ required_edge_functions }}"
        error_message: "{{ error_message }}"
        branch: "{{ branch }}"
        commit_ref: "{{ commit_ref }}"
        commit_url: "{{ commit_url }}"
        skipped: {{ skipped }}
        created_at: "{{ created_at }}"
        updated_at: "{{ updated_at }}"
        published_at: "{{ published_at }}"
        title: "{{ title }}"
        context: "{{ context }}"
        locked: {{ locked }}
        review_url: "{{ review_url }}"
        framework: "{{ framework }}"
        skew_protection_token: "{{ skew_protection_token }}"
        function_schedules:
          - name: "{{ name }}"
            cron: "{{ cron }}"
        functions_region: "{{ functions_region }}"
        functions_region_overrides:
          - name: "{{ name }}"
            region: "{{ region }}"
    - name: account_id
      value: "{{ account_id }}"
    - name: account_name
      value: "{{ account_name }}"
    - name: account_slug
      value: "{{ account_slug }}"
    - name: git_provider
      value: "{{ git_provider }}"
    - name: deploy_hook
      value: "{{ deploy_hook }}"
    - name: capabilities
      value: "{{ capabilities }}"
    - name: processing_settings
      value:
        html:
          pretty_urls: {{ pretty_urls }}
    - name: build_settings
      value:
        id: {{ id }}
        provider: "{{ provider }}"
        deploy_key_id: "{{ deploy_key_id }}"
        repo_path: "{{ repo_path }}"
        repo_branch: "{{ repo_branch }}"
        dir: "{{ dir }}"
        functions_dir: "{{ functions_dir }}"
        cmd: "{{ cmd }}"
        allowed_branches:
          - "{{ allowed_branches }}"
        public_repo: {{ public_repo }}
        private_logs: {{ private_logs }}
        repo_url: "{{ repo_url }}"
        env: "{{ env }}"
        installation_id: {{ installation_id }}
        stop_builds: {{ stop_builds }}
    - name: id_domain
      value: "{{ id_domain }}"
    - name: default_hooks_data
      value:
        access_token: "{{ access_token }}"
    - name: build_image
      value: "{{ build_image }}"
    - name: prerender
      value: "{{ prerender }}"
    - name: functions_region
      value: "{{ functions_region }}"
    - name: prevent_non_git_prod_deploys
      value: {{ prevent_non_git_prod_deploys }}
      default: false
    - name: repo
      value:
        id: {{ id }}
        provider: "{{ provider }}"
        deploy_key_id: "{{ deploy_key_id }}"
        repo_path: "{{ repo_path }}"
        repo_branch: "{{ repo_branch }}"
        dir: "{{ dir }}"
        functions_dir: "{{ functions_dir }}"
        cmd: "{{ cmd }}"
        allowed_branches:
          - "{{ allowed_branches }}"
        public_repo: {{ public_repo }}
        private_logs: {{ private_logs }}
        repo_url: "{{ repo_url }}"
        env: "{{ env }}"
        installation_id: {{ installation_id }}
        stop_builds: {{ stop_builds }}
    - name: configure_dns
      value: {{ configure_dns }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [updateEnvVar](https://open-api.netlify.com/#tag/environmentVariables/operation/updateEnvVar) to update a site's environment variables.

```sql
UPDATE netlify.sites.sites
SET 
id = '{{ id }}',
state = '{{ state }}',
plan = '{{ plan }}',
name = '{{ name }}',
custom_domain = '{{ custom_domain }}',
domain_aliases = '{{ domain_aliases }}',
branch_deploy_custom_domain = '{{ branch_deploy_custom_domain }}',
deploy_preview_custom_domain = '{{ deploy_preview_custom_domain }}',
password = '{{ password }}',
notification_email = '{{ notification_email }}',
url = '{{ url }}',
ssl_url = '{{ ssl_url }}',
admin_url = '{{ admin_url }}',
screenshot_url = '{{ screenshot_url }}',
created_at = '{{ created_at }}',
updated_at = '{{ updated_at }}',
user_id = '{{ user_id }}',
session_id = '{{ session_id }}',
ssl = {{ ssl }},
force_ssl = {{ force_ssl }},
managed_dns = {{ managed_dns }},
deploy_url = '{{ deploy_url }}',
published_deploy = '{{ published_deploy }}',
account_id = '{{ account_id }}',
account_name = '{{ account_name }}',
account_slug = '{{ account_slug }}',
git_provider = '{{ git_provider }}',
deploy_hook = '{{ deploy_hook }}',
capabilities = '{{ capabilities }}',
processing_settings = '{{ processing_settings }}',
build_settings = '{{ build_settings }}',
id_domain = '{{ id_domain }}',
default_hooks_data = '{{ default_hooks_data }}',
build_image = '{{ build_image }}',
prerender = '{{ prerender }}',
functions_region = '{{ functions_region }}',
prevent_non_git_prod_deploys = {{ prevent_non_git_prod_deploys }},
repo = '{{ repo }}'
WHERE 
site_id = '{{ site_id }}' --required
RETURNING
id,
name,
account_id,
session_id,
user_id,
account_name,
account_slug,
admin_url,
branch_deploy_custom_domain,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_preview_custom_domain,
deploy_url,
domain_aliases,
force_ssl,
functions_region,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
prevent_non_git_prod_deploys,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

No description available.

```sql
DELETE FROM netlify.sites.sites
WHERE site_id = '{{ site_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purge_cache"
    values={[
        { label: 'purge_cache', value: 'purge_cache' },
        { label: 'unlink_repo', value: 'unlink_repo' },
        { label: 'enable', value: 'enable' },
        { label: 'disable', value: 'disable' }
    ]}
>
<TabItem value="purge_cache">

Purges cached content from Netlify's CDN. Supports purging by Cache-Tag.

```sql
EXEC netlify.sites.sites.purge_cache 
@@json=
'{
"site_id": "{{ site_id }}", 
"site_slug": "{{ site_slug }}", 
"cache_tags": "{{ cache_tags }}"
}'
;
```
</TabItem>
<TabItem value="unlink_repo">

&#91;Beta&#93; Unlinks the repo from the site.&lt;br /&gt;&lt;br /&gt;This action will also:&lt;br /&gt;- Delete associated deploy keys&lt;br /&gt;- Delete outgoing webhooks for the repo&lt;br /&gt;- Delete the site's build hooks

```sql
EXEC netlify.sites.sites.unlink_repo 
@site_id='{{ site_id }}' --required
;
```
</TabItem>
<TabItem value="enable">

Re-enables a site that was previously disabled by the user. Sites that were disabled for usage exceeded or marked as spam cannot be re-enabled via this endpoint.

```sql
EXEC netlify.sites.sites.enable 
@site_id='{{ site_id }}' --required
;
```
</TabItem>
<TabItem value="disable">

Disables a site, preventing it from serving content. The site can be re-enabled later using the enable endpoint.

```sql
EXEC netlify.sites.sites.disable 
@reason='{{ reason }}' --required, 
@site_id='{{ site_id }}' --required
;
```
</TabItem>
</Tabs>
