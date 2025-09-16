--- 
title: sites_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_assets
  - asset
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

Creates, updates, deletes, gets or lists a <code>sites_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_assets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.asset.sites_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getSiteAssetInfo"
    values={[
        { label: 'getSiteAssetInfo', value: 'getSiteAssetInfo' },
        { label: 'listSiteAssets', value: 'listSiteAssets' }
    ]}
>
<TabItem value="getSiteAssetInfo">

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
    <td><CopyableCode code="creator_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
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
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="listSiteAssets">

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
    <td><CopyableCode code="creator_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
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
<tr>
    <td><CopyableCode code="visibility" /></td>
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
    <td><a href="#getSiteAssetInfo"><CopyableCode code="getSiteAssetInfo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listSiteAssets"><CopyableCode code="listSiteAssets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createSiteAsset"><CopyableCode code="createSiteAsset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteSiteAsset"><CopyableCode code="deleteSiteAsset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateSiteAsset"><CopyableCode code="updateSiteAsset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a></td>
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
<tr id="parameter-asset_id">
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="getSiteAssetInfo"
    values={[
        { label: 'getSiteAssetInfo', value: 'getSiteAssetInfo' },
        { label: 'listSiteAssets', value: 'listSiteAssets' }
    ]}
>
<TabItem value="getSiteAssetInfo">

OK

```sql
SELECT
id,
name,
creator_id,
site_id,
content_type,
created_at,
key,
size,
state,
updated_at,
url,
visibility
FROM netlify.asset.sites_assets
WHERE site_id = '{{ site_id }}' -- required
AND asset_id = '{{ asset_id }}' -- required
;
```
</TabItem>
<TabItem value="listSiteAssets">

OK

```sql
SELECT
id,
name,
creator_id,
site_id,
content_type,
created_at,
key,
size,
state,
updated_at,
url,
visibility
FROM netlify.asset.sites_assets
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createSiteAsset"
    values={[
        { label: 'createSiteAsset', value: 'createSiteAsset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createSiteAsset">

No description available.

```sql
INSERT INTO netlify.asset.sites_assets (
site_id
)
SELECT 
'{{ site_id }}'
RETURNING
asset,
form
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sites_assets
  props:
    - name: site_id
      value: string
      description: Required parameter for the sites_assets resource.
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteSiteAsset"
    values={[
        { label: 'deleteSiteAsset', value: 'deleteSiteAsset' }
    ]}
>
<TabItem value="deleteSiteAsset">

No description available.

```sql
DELETE FROM netlify.asset.sites_assets
WHERE site_id = '{{ site_id }}' --required
AND asset_id = '{{ asset_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="updateSiteAsset"
    values={[
        { label: 'updateSiteAsset', value: 'updateSiteAsset' }
    ]}
>
<TabItem value="updateSiteAsset">

Updated

```sql
EXEC netlify.asset.sites_assets.updateSiteAsset 
@site_id='{{ site_id }}' --required, 
@asset_id='{{ asset_id }}' --required
;
```
</TabItem>
</Tabs>
