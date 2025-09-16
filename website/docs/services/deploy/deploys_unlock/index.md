--- 
title: deploys_unlock
hide_title: false
hide_table_of_contents: false
keywords:
  - deploys_unlock
  - deploy
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

Creates, updates, deletes, gets or lists a <code>deploys_unlock</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>deploys_unlock</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.deploy.deploys_unlock" /></td></tr>
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
    <td><a href="#unlockDeploy"><CopyableCode code="unlockDeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
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
<tr id="parameter-deploy_id">
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="unlockDeploy"
    values={[
        { label: 'unlockDeploy', value: 'unlockDeploy' }
    ]}
>
<TabItem value="unlockDeploy">

OK

```sql
EXEC netlify.deploy.deploys_unlock.unlockDeploy 
@deploy_id='{{ deploy_id }}' --required
;
```
</TabItem>
</Tabs>
