--- 
title: sites
hide_title: false
hide_table_of_contents: false
keywords:
  - sites
  - site
  - netlify
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage netlify resources using SQL
custom_edit_url: null
image: /img/stackql-netlify-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>sites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.site.sites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getSite"
    values={[
        { label: 'getSite', value: 'getSite' },
        { label: 'listSitesForAccount', value: 'listSitesForAccount' },
        { label: 'listSites', value: 'listSites' }
    ]}
>
<TabItem value="getSite">

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
<TabItem value="listSitesForAccount">

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
<TabItem value="listSites">

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
    <td><a href="#getSite"><CopyableCode code="getSite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listSitesForAccount"><CopyableCode code="listSitesForAccount" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listSites"><CopyableCode code="listSites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createSiteInTeam"><CopyableCode code="createSiteInTeam" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
    <td><a href="#parameter-configure_dns"><code>configure_dns</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createSite"><CopyableCode code="createSite" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-configure_dns"><code>configure_dns</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteSite"><CopyableCode code="deleteSite" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateSite"><CopyableCode code="updateSite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
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
    defaultValue="getSite"
    values={[
        { label: 'getSite', value: 'getSite' },
        { label: 'listSitesForAccount', value: 'listSitesForAccount' },
        { label: 'listSites', value: 'listSites' }
    ]}
>
<TabItem value="getSite">

OK

```sql
SELECT
id,
name,
session_id,
user_id,
account_name,
account_slug,
admin_url,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_url,
domain_aliases,
force_ssl,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
FROM netlify.site.sites
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
<TabItem value="listSitesForAccount">

OK

```sql
SELECT
id,
name,
session_id,
user_id,
account_name,
account_slug,
admin_url,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_url,
domain_aliases,
force_ssl,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
FROM netlify.site.sites
WHERE account_slug = '{{ account_slug }}' -- required
AND name = '{{ name }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="listSites">

OK

```sql
SELECT
id,
name,
session_id,
user_id,
account_name,
account_slug,
admin_url,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_url,
domain_aliases,
force_ssl,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
processing_settings,
published_deploy,
screenshot_url,
ssl,
ssl_url,
state,
updated_at,
url
FROM netlify.site.sites
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
    defaultValue="createSiteInTeam"
    values={[
        { label: 'createSiteInTeam', value: 'createSiteInTeam' },
        { label: 'createSite', value: 'createSite' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createSiteInTeam">

No description available.

```sql
INSERT INTO netlify.site.sites (
data__account_name,
data__account_slug,
data__admin_url,
data__build_image,
data__build_settings,
data__capabilities,
data__created_at,
data__custom_domain,
data__default_hooks_data,
data__deploy_hook,
data__deploy_url,
data__domain_aliases,
data__force_ssl,
data__git_provider,
data__id,
data__id_domain,
data__managed_dns,
data__name,
data__notification_email,
data__password,
data__plan,
data__prerender,
data__processing_settings,
data__published_deploy,
data__screenshot_url,
data__session_id,
data__ssl,
data__ssl_url,
data__state,
data__updated_at,
data__url,
data__user_id,
data__repo,
account_slug,
configure_dns
)
SELECT 
'{{ account_name }}',
'{{ account_slug }}',
'{{ admin_url }}',
'{{ build_image }}',
'{{ build_settings }}',
'{{ capabilities }}',
'{{ created_at }}',
'{{ custom_domain }}',
'{{ default_hooks_data }}',
'{{ deploy_hook }}',
'{{ deploy_url }}',
'{{ domain_aliases }}',
{{ force_ssl }},
'{{ git_provider }}',
'{{ id }}',
'{{ id_domain }}',
{{ managed_dns }},
'{{ name }}',
'{{ notification_email }}',
'{{ password }}',
'{{ plan }}',
'{{ prerender }}',
'{{ processing_settings }}',
'{{ published_deploy }}',
'{{ screenshot_url }}',
'{{ session_id }}',
{{ ssl }},
'{{ ssl_url }}',
'{{ state }}',
'{{ updated_at }}',
'{{ url }}',
'{{ user_id }}',
'{{ repo }}',
'{{ account_slug }}',
'{{ configure_dns }}'
RETURNING
id,
name,
session_id,
user_id,
account_name,
account_slug,
admin_url,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_url,
domain_aliases,
force_ssl,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
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
<TabItem value="createSite">

No description available.

```sql
INSERT INTO netlify.site.sites (
data__account_name,
data__account_slug,
data__admin_url,
data__build_image,
data__build_settings,
data__capabilities,
data__created_at,
data__custom_domain,
data__default_hooks_data,
data__deploy_hook,
data__deploy_url,
data__domain_aliases,
data__force_ssl,
data__git_provider,
data__id,
data__id_domain,
data__managed_dns,
data__name,
data__notification_email,
data__password,
data__plan,
data__prerender,
data__processing_settings,
data__published_deploy,
data__screenshot_url,
data__session_id,
data__ssl,
data__ssl_url,
data__state,
data__updated_at,
data__url,
data__user_id,
data__repo,
configure_dns
)
SELECT 
'{{ account_name }}',
'{{ account_slug }}',
'{{ admin_url }}',
'{{ build_image }}',
'{{ build_settings }}',
'{{ capabilities }}',
'{{ created_at }}',
'{{ custom_domain }}',
'{{ default_hooks_data }}',
'{{ deploy_hook }}',
'{{ deploy_url }}',
'{{ domain_aliases }}',
{{ force_ssl }},
'{{ git_provider }}',
'{{ id }}',
'{{ id_domain }}',
{{ managed_dns }},
'{{ name }}',
'{{ notification_email }}',
'{{ password }}',
'{{ plan }}',
'{{ prerender }}',
'{{ processing_settings }}',
'{{ published_deploy }}',
'{{ screenshot_url }}',
'{{ session_id }}',
{{ ssl }},
'{{ ssl_url }}',
'{{ state }}',
'{{ updated_at }}',
'{{ url }}',
'{{ user_id }}',
'{{ repo }}',
'{{ configure_dns }}'
RETURNING
id,
name,
session_id,
user_id,
account_name,
account_slug,
admin_url,
build_image,
build_settings,
capabilities,
created_at,
custom_domain,
default_hooks_data,
deploy_hook,
deploy_url,
domain_aliases,
force_ssl,
git_provider,
id_domain,
managed_dns,
notification_email,
password,
plan,
prerender,
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

```yaml
# Description fields are for documentation purposes
- name: sites
  props:
    - name: account_slug
      value: string
      description: Required parameter for the sites resource.
    - name: account_name
      value: string
    - name: account_slug
      value: string
    - name: admin_url
      value: string
    - name: build_image
      value: string
    - name: build_settings
      value: object
    - name: capabilities
      value: object
    - name: created_at
      value: string
    - name: custom_domain
      value: string
    - name: default_hooks_data
      value: object
    - name: deploy_hook
      value: string
    - name: deploy_url
      value: string
    - name: domain_aliases
      value: array
    - name: force_ssl
      value: boolean
    - name: git_provider
      value: string
    - name: id
      value: string
    - name: id_domain
      value: string
    - name: managed_dns
      value: boolean
    - name: name
      value: string
    - name: notification_email
      value: string
    - name: password
      value: string
    - name: plan
      value: string
    - name: prerender
      value: string
    - name: processing_settings
      value: object
    - name: published_deploy
      value: object
    - name: screenshot_url
      value: string
    - name: session_id
      value: string
    - name: ssl
      value: boolean
    - name: ssl_url
      value: string
    - name: state
      value: string
    - name: updated_at
      value: string
    - name: url
      value: string
    - name: user_id
      value: string
    - name: repo
      value: object
    - name: configure_dns
      value: boolean
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteSite"
    values={[
        { label: 'deleteSite', value: 'deleteSite' }
    ]}
>
<TabItem value="deleteSite">

No description available.

```sql
DELETE FROM netlify.site.sites
WHERE site_id = '{{ site_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="updateSite"
    values={[
        { label: 'updateSite', value: 'updateSite' }
    ]}
>
<TabItem value="updateSite">

OK

```sql
EXEC netlify.site.sites.updateSite 
@site_id='{{ site_id }}' --required 
@@json=
'{
"account_name": "{{ account_name }}", 
"account_slug": "{{ account_slug }}", 
"admin_url": "{{ admin_url }}", 
"build_image": "{{ build_image }}", 
"build_settings": "{{ build_settings }}", 
"capabilities": "{{ capabilities }}", 
"created_at": "{{ created_at }}", 
"custom_domain": "{{ custom_domain }}", 
"default_hooks_data": "{{ default_hooks_data }}", 
"deploy_hook": "{{ deploy_hook }}", 
"deploy_url": "{{ deploy_url }}", 
"domain_aliases": "{{ domain_aliases }}", 
"force_ssl": {{ force_ssl }}, 
"git_provider": "{{ git_provider }}", 
"id": "{{ id }}", 
"id_domain": "{{ id_domain }}", 
"managed_dns": {{ managed_dns }}, 
"name": "{{ name }}", 
"notification_email": "{{ notification_email }}", 
"password": "{{ password }}", 
"plan": "{{ plan }}", 
"prerender": "{{ prerender }}", 
"processing_settings": "{{ processing_settings }}", 
"published_deploy": "{{ published_deploy }}", 
"screenshot_url": "{{ screenshot_url }}", 
"session_id": "{{ session_id }}", 
"ssl": {{ ssl }}, 
"ssl_url": "{{ ssl_url }}", 
"state": "{{ state }}", 
"updated_at": "{{ updated_at }}", 
"url": "{{ url }}", 
"user_id": "{{ user_id }}", 
"repo": "{{ repo }}"
}'
;
```
</TabItem>
</Tabs>
