--- 
title: deploys_files
hide_title: false
hide_table_of_contents: false
keywords:
  - deploys_files
  - file
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

Creates, updates, deletes, gets or lists a <code>deploys_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deploys_files</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.file.deploys_files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#uploadDeployFile"><CopyableCode code="uploadDeployFile" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-size"><code>size</code></a></td>
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
<tr id="parameter-deploy_id">
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="uploadDeployFile"
    values={[
        { label: 'uploadDeployFile', value: 'uploadDeployFile' }
    ]}
>
<TabItem value="uploadDeployFile">

OK

```sql
EXEC netlify.file.deploys_files.uploadDeployFile 
@deploy_id='{{ deploy_id }}' --required, 
@path='{{ path }}' --required, 
@size='{{ size }}'
;
```
</TabItem>
</Tabs>
