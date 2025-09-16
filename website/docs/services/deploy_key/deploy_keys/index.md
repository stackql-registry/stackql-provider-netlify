--- 
title: deploy_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - deploy_keys
  - deploy_key
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

Creates, updates, deletes, gets or lists a <code>deploy_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deploy_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.deploy_key.deploy_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getDeployKey"
    values={[
        { label: 'getDeployKey', value: 'getDeployKey' },
        { label: 'listDeployKeys', value: 'listDeployKeys' }
    ]}
>
<TabItem value="getDeployKey">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="listDeployKeys">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
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
    <td><a href="#getDeployKey"><CopyableCode code="getDeployKey" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listDeployKeys"><CopyableCode code="listDeployKeys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createDeployKey"><CopyableCode code="createDeployKey" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteDeployKey"><CopyableCode code="deleteDeployKey" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-key_id"><code>key_id</code></a></td>
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
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="getDeployKey"
    values={[
        { label: 'getDeployKey', value: 'getDeployKey' },
        { label: 'listDeployKeys', value: 'listDeployKeys' }
    ]}
>
<TabItem value="getDeployKey">

OK

```sql
SELECT
id,
created_at,
public_key
FROM netlify.deploy_key.deploy_keys
WHERE key_id = '{{ key_id }}' -- required
;
```
</TabItem>
<TabItem value="listDeployKeys">

OK

```sql
SELECT
id,
created_at,
public_key
FROM netlify.deploy_key.deploy_keys
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createDeployKey"
    values={[
        { label: 'createDeployKey', value: 'createDeployKey' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createDeployKey">

No description available.

```sql
INSERT INTO netlify.deploy_key.deploy_keys (

)
SELECT 

RETURNING
id,
created_at,
public_key
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: deploy_keys
  props:
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteDeployKey"
    values={[
        { label: 'deleteDeployKey', value: 'deleteDeployKey' }
    ]}
>
<TabItem value="deleteDeployKey">

No description available.

```sql
DELETE FROM netlify.deploy_key.deploy_keys
WHERE key_id = '{{ key_id }}' --required
;
```
</TabItem>
</Tabs>
