--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - database
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.database.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>The unique identifier of the snapshot</td>
</tr>
<tr>
    <td><CopyableCode code="source_branch_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the branch that was snapshotted</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td>When the snapshot was created</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td>When the snapshot expires</td>
</tr>
<tr>
    <td><CopyableCode code="manual" /></td>
    <td><code>boolean</code></td>
    <td>Whether this snapshot was manually created</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with a snapshot</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (dateTime)</code></td>
    <td>The point-in-time timestamp of the snapshot</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Returns all snapshots for the site's database.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Creates a point-in-time snapshot of a database branch. Defaults to the production branch if no branch name is specified.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Deletes a database snapshot.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Restores a snapshot to a database branch. Defaults to the production branch if no branch_name is specified.</td>
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
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The snapshot ID to restore</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns all snapshots for the site's database.

```sql
SELECT
id,
source_branch_id,
created_at,
expires_at,
manual,
metadata,
timestamp
FROM netlify.database.snapshots
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

Creates a point-in-time snapshot of a database branch. Defaults to the production branch if no branch name is specified.

```sql
INSERT INTO netlify.database.snapshots (
branch_id,
name,
metadata,
site_id
)
SELECT 
'{{ branch_id }}',
'{{ name }}',
'{{ metadata }}',
'{{ site_id }}'
RETURNING
id,
source_branch_id,
created_at,
expires_at,
manual,
metadata,
timestamp
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the snapshots resource.
    - name: branch_id
      value: "{{ branch_id }}"
      description: |
        The ID of the branch to snapshot. Defaults to "production" if not specified.
    - name: name
      value: "{{ name }}"
      description: |
        A name for the snapshot
    - name: metadata
      description: |
        Metadata associated with a snapshot
      value:
        deploy: "{{ deploy }}"
        source: "{{ source }}"
`}</CodeBlock>

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

Deletes a database snapshot.

```sql
DELETE FROM netlify.database.snapshots
WHERE site_id = '{{ site_id }}' --required
AND snapshot_id = '{{ snapshot_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="restore">

Restores a snapshot to a database branch. Defaults to the production branch if no branch_name is specified.

```sql
EXEC netlify.database.snapshots.restore 
@site_id='{{ site_id }}' --required, 
@snapshot_id='{{ snapshot_id }}' --required 
@@json=
'{
"branch_id": "{{ branch_id }}"
}'
;
```
</TabItem>
</Tabs>
