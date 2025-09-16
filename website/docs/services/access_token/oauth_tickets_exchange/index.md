--- 
title: oauth_tickets_exchange
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_tickets_exchange
  - access_token
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

Creates, updates, deletes, gets or lists an <code>oauth_tickets_exchange</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oauth_tickets_exchange</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.access_token.oauth_tickets_exchange" /></td></tr>
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
    <td><a href="#exchangeTicket"><CopyableCode code="exchangeTicket" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ticket_id"><code>ticket_id</code></a></td>
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
<tr id="parameter-ticket_id">
    <td><CopyableCode code="ticket_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="exchangeTicket"
    values={[
        { label: 'exchangeTicket', value: 'exchangeTicket' }
    ]}
>
<TabItem value="exchangeTicket">

ok

```sql
EXEC netlify.access_token.oauth_tickets_exchange.exchangeTicket 
@ticket_id='{{ ticket_id }}' --required
;
```
</TabItem>
</Tabs>
