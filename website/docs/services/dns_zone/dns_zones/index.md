--- 
title: dns_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_zones
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

Creates, updates, deletes, gets or lists a <code>dns_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_zones</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.dns_zone.dns_zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getDnsZone"
    values={[
        { label: 'getDnsZone', value: 'getDnsZone' },
        { label: 'getDnsZones', value: 'getDnsZones' }
    ]}
>
<TabItem value="getDnsZone">

get a single DNS zone

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dedicated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dns_servers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ipv6_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="records" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="supported_record_types" /></td>
    <td><code>array</code></td>
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
<TabItem value="getDnsZones">

get all DNS zones the user has access to

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dedicated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dns_servers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ipv6_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="records" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="supported_record_types" /></td>
    <td><code>array</code></td>
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
    <td><a href="#getDnsZone"><CopyableCode code="getDnsZone" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#getDnsZones"><CopyableCode code="getDnsZones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-account_slug"><code>account_slug</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createDnsZone"><CopyableCode code="createDnsZone" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteDnsZone"><CopyableCode code="deleteDnsZone" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a></td>
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
<tr id="parameter-zone_id">
    <td><CopyableCode code="zone_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-account_slug">
    <td><CopyableCode code="account_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="getDnsZone"
    values={[
        { label: 'getDnsZone', value: 'getDnsZone' },
        { label: 'getDnsZones', value: 'getDnsZones' }
    ]}
>
<TabItem value="getDnsZone">

get a single DNS zone

```sql
SELECT
id,
name,
account_id,
site_id,
user_id,
account_name,
account_slug,
created_at,
dedicated,
dns_servers,
domain,
errors,
ipv6_enabled,
records,
supported_record_types,
updated_at
FROM netlify.dns_zone.dns_zones
WHERE zone_id = '{{ zone_id }}' -- required
;
```
</TabItem>
<TabItem value="getDnsZones">

get all DNS zones the user has access to

```sql
SELECT
id,
name,
account_id,
site_id,
user_id,
account_name,
account_slug,
created_at,
dedicated,
dns_servers,
domain,
errors,
ipv6_enabled,
records,
supported_record_types,
updated_at
FROM netlify.dns_zone.dns_zones
WHERE account_slug = '{{ account_slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createDnsZone"
    values={[
        { label: 'createDnsZone', value: 'createDnsZone' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createDnsZone">

No description available.

```sql
INSERT INTO netlify.dns_zone.dns_zones (
data__account_slug,
data__name,
data__site_id
)
SELECT 
'{{ account_slug }}',
'{{ name }}',
'{{ site_id }}'
RETURNING
id,
name,
account_id,
site_id,
user_id,
account_name,
account_slug,
created_at,
dedicated,
dns_servers,
domain,
errors,
ipv6_enabled,
records,
supported_record_types,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dns_zones
  props:
    - name: account_slug
      value: string
    - name: name
      value: string
    - name: site_id
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteDnsZone"
    values={[
        { label: 'deleteDnsZone', value: 'deleteDnsZone' }
    ]}
>
<TabItem value="deleteDnsZone">

No description available.

```sql
DELETE FROM netlify.dns_zone.dns_zones
WHERE zone_id = '{{ zone_id }}' --required
;
```
</TabItem>
</Tabs>
