--- 
title: dns_zones_transfer
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_zones_transfer
  - dns_zone
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

Creates, updates, deletes, gets or lists a <code>dns_zones_transfer</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_zones_transfer</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.dns_zone.dns_zones_transfer" /></td></tr>
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
    <td><a href="#transferDnsZone"><CopyableCode code="transferDnsZone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-transfer_account_id"><code>transfer_account_id</code></a>, <a href="#parameter-transfer_user_id"><code>transfer_user_id</code></a></td>
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
    <td>the account of the dns zone</td>
</tr>
<tr id="parameter-transfer_account_id">
    <td><CopyableCode code="transfer_account_id" /></td>
    <td><code>string</code></td>
    <td>the account you want to transfer the dns zone to</td>
</tr>
<tr id="parameter-transfer_user_id">
    <td><CopyableCode code="transfer_user_id" /></td>
    <td><code>string</code></td>
    <td>the user you want to transfer the dns zone to</td>
</tr>
<tr id="parameter-zone_id">
    <td><CopyableCode code="zone_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="transferDnsZone"
    values={[
        { label: 'transferDnsZone', value: 'transferDnsZone' }
    ]}
>
<TabItem value="transferDnsZone">

transfer a DNS zone to another account

```sql
EXEC netlify.dns_zone.dns_zones_transfer.transferDnsZone 
@zone_id='{{ zone_id }}' --required, 
@account_id='{{ account_id }}' --required, 
@transfer_account_id='{{ transfer_account_id }}' --required, 
@transfer_user_id='{{ transfer_user_id }}' --required
;
```
</TabItem>
</Tabs>
