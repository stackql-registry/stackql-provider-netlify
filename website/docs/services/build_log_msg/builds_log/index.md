--- 
title: builds_log
hide_title: false
hide_table_of_contents: false
keywords:
  - builds_log
  - build_log_msg
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

Creates, updates, deletes, gets or lists a <code>builds_log</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>builds_log</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.build_log_msg.builds_log" /></td></tr>
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
    <td><a href="#updateSiteBuildLog"><CopyableCode code="updateSiteBuildLog" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-build_id"><code>build_id</code></a></td>
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
<tr id="parameter-build_id">
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="updateSiteBuildLog"
    values={[
        { label: 'updateSiteBuildLog', value: 'updateSiteBuildLog' }
    ]}
>
<TabItem value="updateSiteBuildLog">

No content

```sql
EXEC netlify.build_log_msg.builds_log.updateSiteBuildLog 
@build_id='{{ build_id }}' --required
;
```
</TabItem>
</Tabs>
