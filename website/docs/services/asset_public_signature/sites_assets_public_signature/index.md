--- 
title: sites_assets_public_signature
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_assets_public_signature
  - asset_public_signature
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

Creates, updates, deletes, gets or lists a <code>sites_assets_public_signature</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_assets_public_signature</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.asset_public_signature.sites_assets_public_signature" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getSiteAssetPublicSignature"
    values={[
        { label: 'getSiteAssetPublicSignature', value: 'getSiteAssetPublicSignature' }
    ]}
>
<TabItem value="getSiteAssetPublicSignature">

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
    <td><a href="#getSiteAssetPublicSignature"><CopyableCode code="getSiteAssetPublicSignature" /></a></td>
    <td><CopyableCode code="select" /></td>
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
    defaultValue="getSiteAssetPublicSignature"
    values={[
        { label: 'getSiteAssetPublicSignature', value: 'getSiteAssetPublicSignature' }
    ]}
>
<TabItem value="getSiteAssetPublicSignature">

OK

```sql
SELECT
url
FROM netlify.asset_public_signature.sites_assets_public_signature
WHERE site_id = '{{ site_id }}' -- required
AND asset_id = '{{ asset_id }}' -- required
;
```
</TabItem>
</Tabs>
