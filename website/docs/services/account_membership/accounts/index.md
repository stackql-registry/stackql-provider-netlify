--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - account_membership
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.account_membership.accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getAccount"
    values={[
        { label: 'getAccount', value: 'getAccount' },
        { label: 'listAccountsForUser', value: 'listAccountsForUser' }
    ]}
>
<TabItem value="getAccount">

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
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_details" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_period" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner_ids" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="roles_allowed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
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
<TabItem value="listAccountsForUser">

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
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_details" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="billing_period" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner_ids" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="roles_allowed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
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
    <td><a href="#getAccount"><CopyableCode code="getAccount" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listAccountsForUser"><CopyableCode code="listAccountsForUser" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createAccount"><CopyableCode code="createAccount" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data__name"><code>data__name</code></a>, <a href="#parameter-data__type_id"><code>data__type_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#cancelAccount"><CopyableCode code="cancelAccount" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateAccount"><CopyableCode code="updateAccount" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="getAccount"
    values={[
        { label: 'getAccount', value: 'getAccount' },
        { label: 'listAccountsForUser', value: 'listAccountsForUser' }
    ]}
>
<TabItem value="getAccount">

OK

```sql
SELECT
id,
name,
payment_method_id,
type_id,
billing_name,
type_name,
billing_details,
billing_email,
billing_period,
capabilities,
created_at,
owner_ids,
roles_allowed,
slug,
type,
updated_at
FROM netlify.account_membership.accounts
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="listAccountsForUser">

OK

```sql
SELECT
id,
name,
payment_method_id,
type_id,
billing_name,
type_name,
billing_details,
billing_email,
billing_period,
capabilities,
created_at,
owner_ids,
roles_allowed,
slug,
type,
updated_at
FROM netlify.account_membership.accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createAccount"
    values={[
        { label: 'createAccount', value: 'createAccount' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createAccount">

No description available.

```sql
INSERT INTO netlify.account_membership.accounts (
data__extra_seats_block,
data__name,
data__payment_method_id,
data__period,
data__type_id
)
SELECT 
{{ extra_seats_block }},
'{{ name }}' /* required */,
'{{ payment_method_id }}',
'{{ period }}',
'{{ type_id }}' /* required */
RETURNING
id,
name,
payment_method_id,
type_id,
billing_name,
type_name,
billing_details,
billing_email,
billing_period,
capabilities,
created_at,
owner_ids,
roles_allowed,
slug,
type,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: accounts
  props:
    - name: extra_seats_block
      value: integer
    - name: name
      value: string
    - name: payment_method_id
      value: string
    - name: period
      value: string
      valid_values: ['monthly', 'yearly']
    - name: type_id
      value: string
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancelAccount"
    values={[
        { label: 'cancelAccount', value: 'cancelAccount' },
        { label: 'updateAccount', value: 'updateAccount' }
    ]}
>
<TabItem value="cancelAccount">

Not Content

```sql
EXEC netlify.account_membership.accounts.cancelAccount 
@account_id='{{ account_id }}' --required
;
```
</TabItem>
<TabItem value="updateAccount">

OK

```sql
EXEC netlify.account_membership.accounts.updateAccount 
@account_id='{{ account_id }}' --required 
@@json=
'{
"billing_details": "{{ billing_details }}", 
"billing_email": "{{ billing_email }}", 
"billing_name": "{{ billing_name }}", 
"extra_seats_block": {{ extra_seats_block }}, 
"name": "{{ name }}", 
"slug": "{{ slug }}", 
"type_id": "{{ type_id }}"
}'
;
```
</TabItem>
</Tabs>
