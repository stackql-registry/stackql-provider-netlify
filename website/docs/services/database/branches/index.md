--- 
title: branches
hide_title: false
hide_table_of_contents: false
keywords:
  - branches
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

Creates, updates, deletes, gets or lists a <code>branches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="branches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.database.branches" /></td></tr>
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
    <td><CopyableCode code="connection_string" /></td>
    <td><code>string</code></td>
    <td>The connection string for the database branch</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with the branch</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The branch name</td>
</tr>
<tr>
    <td><CopyableCode code="branch_id" /></td>
    <td><code>string</code></td>
    <td>The branch identifier</td>
</tr>
<tr>
    <td><CopyableCode code="compute" /></td>
    <td><code>object</code></td>
    <td>Compute endpoint status for a branch</td>
</tr>
<tr>
    <td><CopyableCode code="connection_string" /></td>
    <td><code>string</code></td>
    <td>The connection string for the branch</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td>When the branch was created</td>
</tr>
<tr>
    <td><CopyableCode code="last_active_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td>When the branch was last active</td>
</tr>
<tr>
    <td><CopyableCode code="logical_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The logical size of the branch in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with the branch</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the branch (init, creating, resetting, ready, archived)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td>When the branch was last updated</td>
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
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-branch_id"><code>branch_id</code></a></td>
    <td><a href="#parameter-role"><code>role</code></a></td>
    <td>Returns the database branch connection string for a specific branch.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Returns all branches for the site's database with compute status and metadata.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-branch_id"><code>branch_id</code></a></td>
    <td></td>
    <td>Creates a new database branch. If a branch already exists for the specified branch ID, returns the existing connection string.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-branch_id"><code>branch_id</code></a></td>
    <td></td>
    <td>Deletes a database branch.</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-branch_id"><code>branch_id</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td>Resets a non-production database branch by re-forking it from a source branch (defaults to the production branch). If the target branch is already in sync with the source, returns the existing connection string without performing a reset, unless `force=true` is passed. The production branch cannot be reset.</td>
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
<tr id="parameter-branch_id">
    <td><CopyableCode code="branch_id" /></td>
    <td><code>string</code></td>
    <td>The branch ID to reset</td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>If true, resets the branch even when it is already in sync with the source.</td>
</tr>
<tr id="parameter-role">
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The database role to use for the returned connection string. Defaults to netlifydb_owner if not specified.</td>
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

Returns the database branch connection string for a specific branch.

```sql
SELECT
connection_string,
metadata
FROM netlify.database.branches
WHERE site_id = '{{ site_id }}' -- required
AND branch_id = '{{ branch_id }}' -- required
AND role = '{{ role }}'
;
```
</TabItem>
<TabItem value="list">

Returns all branches for the site's database with compute status and metadata.

```sql
SELECT
name,
branch_id,
compute,
connection_string,
created_at,
last_active_at,
logical_size_bytes,
metadata,
state,
updated_at
FROM netlify.database.branches
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

Creates a new database branch. If a branch already exists for the specified branch ID, returns the existing connection string.

```sql
INSERT INTO netlify.database.branches (
parent_branch_id,
branch_id,
metadata,
site_id
)
SELECT 
'{{ parent_branch_id }}',
'{{ branch_id }}' /* required */,
'{{ metadata }}',
'{{ site_id }}'
RETURNING
connection_string,
metadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: branches
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the branches resource.
    - name: parent_branch_id
      value: "{{ parent_branch_id }}"
      description: |
        The ID of the parent branch to create the new branch from. Defaults to the production branch if not specified.
    - name: branch_id
      value: "{{ branch_id }}"
      description: |
        The branch identifier
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Arbitrary metadata to associate with the branch
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

Deletes a database branch.

```sql
DELETE FROM netlify.database.branches
WHERE site_id = '{{ site_id }}' --required
AND branch_id = '{{ branch_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset"
    values={[
        { label: 'reset', value: 'reset' }
    ]}
>
<TabItem value="reset">

Resets a non-production database branch by re-forking it from a source branch (defaults to the production branch). If the target branch is already in sync with the source, returns the existing connection string without performing a reset, unless `force=true` is passed. The production branch cannot be reset.

```sql
EXEC netlify.database.branches.reset 
@site_id='{{ site_id }}' --required, 
@branch_id='{{ branch_id }}' --required, 
@force={{ force }}, 
@role='{{ role }}' 
@@json=
'{
"source_branch_id": "{{ source_branch_id }}"
}'
;
```
</TabItem>
</Tabs>
