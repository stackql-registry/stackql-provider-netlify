--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - member
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.member.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="listMembersForAccount"
    values={[
        { label: 'listMembersForAccount', value: 'listMembersForAccount' }
    ]}
>
<TabItem value="listMembersForAccount">

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="avatar" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
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
    <td><a href="#listMembersForAccount"><CopyableCode code="listMembersForAccount" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#addMemberToAccount"><CopyableCode code="addMemberToAccount" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
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
<tr id="parameter-account_slug">
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="listMembersForAccount"
    values={[
        { label: 'listMembersForAccount', value: 'listMembersForAccount' }
    ]}
>
<TabItem value="listMembersForAccount">

OK

```sql
SELECT
id,
full_name,
avatar,
email,
role
FROM netlify.member.members
WHERE account_slug = '{{ account_slug }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="addMemberToAccount"
    values={[
        { label: 'addMemberToAccount', value: 'addMemberToAccount' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="addMemberToAccount">

No description available.

```sql
INSERT INTO netlify.member.members (
account_slug
)
SELECT 
'{{ account_slug }}'
RETURNING
id,
full_name,
avatar,
email,
role
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: members
  props:
    - name: account_slug
      value: string
      description: Required parameter for the members resource.
```
</TabItem>
</Tabs>
