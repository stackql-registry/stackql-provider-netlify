--- 
title: sites_traffic_splits
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_traffic_splits
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

Creates, updates, deletes, gets or lists a <code>sites_traffic_splits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_traffic_splits</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.split_test.sites_traffic_splits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getSplitTest"
    values={[
        { label: 'getSplitTest', value: 'getSplitTest' },
        { label: 'getSplitTests', value: 'getSplitTests' }
    ]}
>
<TabItem value="getSplitTest">

split_test

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branches" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="unpublished_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="getSplitTests">

split_tests

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branches" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="unpublished_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
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
    <td><a href="#getSplitTest"><CopyableCode code="getSplitTest" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-split_test_id"><code>split_test_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#getSplitTests"><CopyableCode code="getSplitTests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createSplitTest"><CopyableCode code="createSplitTest" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateSplitTest"><CopyableCode code="updateSplitTest" /></a></td>
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

## `SELECT` examples

<Tabs
    defaultValue="getSplitTest"
    values={[
        { label: 'getSplitTest', value: 'getSplitTest' },
        { label: 'getSplitTests', value: 'getSplitTests' }
    ]}
>
<TabItem value="getSplitTest">

split_test

```sql
SELECT
id,
name,
site_id,
active,
branches,
created_at,
path,
unpublished_at,
updated_at
FROM netlify.split_test.sites_traffic_splits
WHERE site_id = '{{ site_id }}' -- required
AND split_test_id = '{{ split_test_id }}' -- required
;
```
</TabItem>
<TabItem value="getSplitTests">

split_tests

```sql
SELECT
id,
name,
site_id,
active,
branches,
created_at,
path,
unpublished_at,
updated_at
FROM netlify.split_test.sites_traffic_splits
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createSplitTest"
    values={[
        { label: 'createSplitTest', value: 'createSplitTest' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createSplitTest">

No description available.

```sql
INSERT INTO netlify.split_test.sites_traffic_splits (
data__branch_tests,
site_id
)
SELECT 
'{{ branch_tests }}',
'{{ site_id }}'
RETURNING
id,
name,
site_id,
active,
branches,
created_at,
path,
unpublished_at,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sites_traffic_splits
  props:
    - name: site_id
      value: string
      description: Required parameter for the sites_traffic_splits resource.
    - name: branch_tests
      value: object
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="updateSplitTest"
    values={[
        { label: 'updateSplitTest', value: 'updateSplitTest' }
    ]}
>
<TabItem value="updateSplitTest">

Created

```sql
EXEC netlify.split_test.sites_traffic_splits.updateSplitTest 
@site_id='{{ site_id }}' --required, 
@split_test_id='{{ split_test_id }}' --required 
@@json=
'{
"branch_tests": "{{ branch_tests }}"
}'
;
```
</TabItem>
</Tabs>
