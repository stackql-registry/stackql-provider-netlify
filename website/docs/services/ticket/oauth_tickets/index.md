--- 
title: oauth_tickets
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_tickets
  - ticket
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

Creates, updates, deletes, gets or lists an <code>oauth_tickets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>oauth_tickets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.ticket.oauth_tickets" /></td></tr>
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
    <td><a href="#createTicket"><CopyableCode code="createTicket" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#showTicket"><CopyableCode code="showTicket" /></a></td>
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
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ticket_id">
    <td><CopyableCode code="ticket_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="createTicket"
    values={[
        { label: 'createTicket', value: 'createTicket' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createTicket">

No description available.

```sql
INSERT INTO netlify.ticket.oauth_tickets (
client_id
)
SELECT 
'{{ client_id }}'
RETURNING
id,
client_id,
authorized,
created_at
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: oauth_tickets
  props:
    - name: client_id
      value: string
      description: Required parameter for the oauth_tickets resource.
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="showTicket"
    values={[
        { label: 'showTicket', value: 'showTicket' }
    ]}
>
<TabItem value="showTicket">

ok

```sql
EXEC netlify.ticket.oauth_tickets.showTicket 
@ticket_id='{{ ticket_id }}' --required
;
```
</TabItem>
</Tabs>
