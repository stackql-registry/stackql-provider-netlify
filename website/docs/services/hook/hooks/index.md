--- 
title: hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - hooks
  - hook
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

Creates, updates, deletes, gets or lists a <code>hooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>hooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.hook.hooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getHook"
    values={[
        { label: 'getHook', value: 'getHook' },
        { label: 'listHooksBySiteId', value: 'listHooksBySiteId' }
    ]}
>
<TabItem value="getHook">

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
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
<TabItem value="listHooksBySiteId">

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
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
    <td><a href="#getHook"><CopyableCode code="getHook" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listHooksBySiteId"><CopyableCode code="listHooksBySiteId" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createHookBySiteId"><CopyableCode code="createHookBySiteId" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteHook"><CopyableCode code="deleteHook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateHook"><CopyableCode code="updateHook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hook_id"><code>hook_id</code></a></td>
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
<tr id="parameter-hook_id">
    <td><CopyableCode code="hook_id" /></td>
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
    defaultValue="getHook"
    values={[
        { label: 'getHook', value: 'getHook' },
        { label: 'listHooksBySiteId', value: 'listHooksBySiteId' }
    ]}
>
<TabItem value="getHook">

OK

```sql
SELECT
id,
site_id,
created_at,
data,
disabled,
event,
type,
updated_at
FROM netlify.hook.hooks
WHERE hook_id = '{{ hook_id }}' -- required
;
```
</TabItem>
<TabItem value="listHooksBySiteId">

OK

```sql
SELECT
id,
site_id,
created_at,
data,
disabled,
event,
type,
updated_at
FROM netlify.hook.hooks
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createHookBySiteId"
    values={[
        { label: 'createHookBySiteId', value: 'createHookBySiteId' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createHookBySiteId">

No description available.

```sql
INSERT INTO netlify.hook.hooks (
data__created_at,
data__data,
data__disabled,
data__event,
data__id,
data__site_id,
data__type,
data__updated_at,
site_id
)
SELECT 
'{{ created_at }}',
'{{ data }}',
{{ disabled }},
'{{ event }}',
'{{ id }}',
'{{ site_id }}',
'{{ type }}',
'{{ updated_at }}',
'{{ site_id }}'
RETURNING
id,
site_id,
created_at,
data,
disabled,
event,
type,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: hooks
  props:
    - name: site_id
      value: string
      description: Required parameter for the hooks resource.
    - name: created_at
      value: string
    - name: data
      value: object
    - name: disabled
      value: boolean
    - name: event
      value: string
    - name: id
      value: string
    - name: site_id
      value: string
    - name: type
      value: string
    - name: updated_at
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteHook"
    values={[
        { label: 'deleteHook', value: 'deleteHook' }
    ]}
>
<TabItem value="deleteHook">

No description available.

```sql
DELETE FROM netlify.hook.hooks
WHERE hook_id = '{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="updateHook"
    values={[
        { label: 'updateHook', value: 'updateHook' }
    ]}
>
<TabItem value="updateHook">

OK

```sql
EXEC netlify.hook.hooks.updateHook 
@hook_id='{{ hook_id }}' --required 
@@json=
'{
"created_at": "{{ created_at }}", 
"data": "{{ data }}", 
"disabled": {{ disabled }}, 
"event": "{{ event }}", 
"id": "{{ id }}", 
"site_id": "{{ site_id }}", 
"type": "{{ type }}", 
"updated_at": "{{ updated_at }}"
}'
;
```
</TabItem>
</Tabs>
