--- 
title: accounts_types
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts_types
  - account_type
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

Creates, updates, deletes, gets or lists an <code>accounts_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>accounts_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.account_type.accounts_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="listAccountTypesForUser"
    values={[
        { label: 'listAccountTypesForUser', value: 'listAccountTypesForUser' }
    ]}
>
<TabItem value="listAccountTypesForUser">

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
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="monthly_dollar_price" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="monthly_seats_addon_dollar_price" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="yearly_dollar_price" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="yearly_seats_addon_dollar_price" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#listAccountTypesForUser"><CopyableCode code="listAccountTypesForUser" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="listAccountTypesForUser"
    values={[
        { label: 'listAccountTypesForUser', value: 'listAccountTypesForUser' }
    ]}
>
<TabItem value="listAccountTypesForUser">

OK

```sql
SELECT
id,
name,
capabilities,
description,
monthly_dollar_price,
monthly_seats_addon_dollar_price,
yearly_dollar_price,
yearly_seats_addon_dollar_price
FROM netlify.account_type.accounts_types
;
```
</TabItem>
</Tabs>
