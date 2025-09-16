--- 
title: dns_zones_dns_records
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_zones_dns_records
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

Creates, updates, deletes, gets or lists a <code>dns_zones_dns_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>dns_zones_dns_records</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.dns_zone.dns_zones_dns_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getIndividualDnsRecord"
    values={[
        { label: 'getIndividualDnsRecord', value: 'getIndividualDnsRecord' },
        { label: 'getDnsRecords', value: 'getDnsRecords' }
    ]}
>
<TabItem value="getIndividualDnsRecord">

get a single DNS record

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
    <td><CopyableCode code="dns_zone_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="flag" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="getDnsRecords">

get all DNS records for a single DNS zone

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
    <td><CopyableCode code="dns_zone_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="flag" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
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
    <td><a href="#getIndividualDnsRecord"><CopyableCode code="getIndividualDnsRecord" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a>, <a href="#parameter-dns_record_id"><code>dns_record_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#getDnsRecords"><CopyableCode code="getDnsRecords" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createDnsRecord"><CopyableCode code="createDnsRecord" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteDnsRecord"><CopyableCode code="deleteDnsRecord" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-zone_id"><code>zone_id</code></a>, <a href="#parameter-dns_record_id"><code>dns_record_id</code></a></td>
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
<tr id="parameter-dns_record_id">
    <td><CopyableCode code="dns_record_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone_id">
    <td><CopyableCode code="zone_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="getIndividualDnsRecord"
    values={[
        { label: 'getIndividualDnsRecord', value: 'getIndividualDnsRecord' },
        { label: 'getDnsRecords', value: 'getDnsRecords' }
    ]}
>
<TabItem value="getIndividualDnsRecord">

get a single DNS record

```sql
SELECT
id,
dns_zone_id,
site_id,
flag,
hostname,
managed,
priority,
tag,
ttl,
type,
value
FROM netlify.dns_zone.dns_zones_dns_records
WHERE zone_id = '{{ zone_id }}' -- required
AND dns_record_id = '{{ dns_record_id }}' -- required
;
```
</TabItem>
<TabItem value="getDnsRecords">

get all DNS records for a single DNS zone

```sql
SELECT
id,
dns_zone_id,
site_id,
flag,
hostname,
managed,
priority,
tag,
ttl,
type,
value
FROM netlify.dns_zone.dns_zones_dns_records
WHERE zone_id = '{{ zone_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createDnsRecord"
    values={[
        { label: 'createDnsRecord', value: 'createDnsRecord' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createDnsRecord">

No description available.

```sql
INSERT INTO netlify.dns_zone.dns_zones_dns_records (
data__flag,
data__hostname,
data__port,
data__priority,
data__tag,
data__ttl,
data__type,
data__value,
data__weight,
zone_id
)
SELECT 
{{ flag }},
'{{ hostname }}',
{{ port }},
{{ priority }},
'{{ tag }}',
{{ ttl }},
'{{ type }}',
'{{ value }}',
{{ weight }},
'{{ zone_id }}'
RETURNING
id,
dns_zone_id,
site_id,
flag,
hostname,
managed,
priority,
tag,
ttl,
type,
value
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: dns_zones_dns_records
  props:
    - name: zone_id
      value: string
      description: Required parameter for the dns_zones_dns_records resource.
    - name: flag
      value: integer
    - name: hostname
      value: string
    - name: port
      value: integer
    - name: priority
      value: integer
    - name: tag
      value: string
    - name: ttl
      value: integer
    - name: type
      value: string
    - name: value
      value: string
    - name: weight
      value: integer
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteDnsRecord"
    values={[
        { label: 'deleteDnsRecord', value: 'deleteDnsRecord' }
    ]}
>
<TabItem value="deleteDnsRecord">

No description available.

```sql
DELETE FROM netlify.dns_zone.dns_zones_dns_records
WHERE zone_id = '{{ zone_id }}' --required
AND dns_record_id = '{{ dns_record_id }}' --required
;
```
</TabItem>
</Tabs>
