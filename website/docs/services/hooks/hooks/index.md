--- 
title: hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - hooks
  - hooks
  - netlify
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage netlify resources using SQL
custom_edit_url: null
image: /img/stackql-netlify-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>hooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.hooks.hooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
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
<TabItem value="list">

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
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
FROM netlify.hooks.hooks
WHERE hook_id = '{{ hook_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

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
FROM netlify.hooks.hooks
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

No description available.

```sql
INSERT INTO netlify.hooks.hooks (
id,
site_id,
type,
event,
data,
created_at,
updated_at,
disabled,
site_id
)
SELECT 
'{{ id }}',
'{{ site_id }}',
'{{ type }}',
'{{ event }}',
'{{ data }}',
'{{ created_at }}',
'{{ updated_at }}',
{{ disabled }},
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

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hooks
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the hooks resource.
    - name: id
      value: "{{ id }}"
    - name: site_id
      value: "{{ site_id }}"
    - name: type
      value: "{{ type }}"
    - name: event
      value: "{{ event }}"
    - name: data
      value: "{{ data }}"
      description: |
        (opaque JSON object)
    - name: created_at
      value: "{{ created_at }}"
    - name: updated_at
      value: "{{ updated_at }}"
    - name: disabled
      value: {{ disabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

No description available.

```sql
REPLACE netlify.hooks.hooks
SET 
id = '{{ id }}',
site_id = '{{ site_id }}',
type = '{{ type }}',
event = '{{ event }}',
data = '{{ data }}',
created_at = '{{ created_at }}',
updated_at = '{{ updated_at }}',
disabled = {{ disabled }}
WHERE 
hook_id = '{{ hook_id }}' --required
RETURNING
id,
site_id,
created_at,
data,
disabled,
event,
type,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

No description available.

```sql
DELETE FROM netlify.hooks.hooks
WHERE hook_id = '{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable"
    values={[
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="enable">

OK

```sql
EXEC netlify.hooks.hooks.enable 
@hook_id='{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>
