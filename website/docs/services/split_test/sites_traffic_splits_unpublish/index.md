--- 
title: sites_traffic_splits_unpublish
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_traffic_splits_unpublish
  - split_test
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

Creates, updates, deletes, gets or lists a <code>sites_traffic_splits_unpublish</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_traffic_splits_unpublish</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.split_test.sites_traffic_splits_unpublish" /></td></tr>
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
    <td><a href="#disableSplitTest"><CopyableCode code="disableSplitTest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-split_test_id"><code>split_test_id</code></a></td>
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
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-split_test_id">
    <td><CopyableCode code="split_test_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disableSplitTest"
    values={[
        { label: 'disableSplitTest', value: 'disableSplitTest' }
    ]}
>
<TabItem value="disableSplitTest">

disabled

```sql
EXEC netlify.split_test.sites_traffic_splits_unpublish.disableSplitTest 
@site_id='{{ site_id }}' --required, 
@split_test_id='{{ split_test_id }}' --required
;
```
</TabItem>
</Tabs>
