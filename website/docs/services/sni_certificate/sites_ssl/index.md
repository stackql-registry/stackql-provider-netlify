--- 
title: sites_ssl
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_ssl
  - sni_certificate
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

Creates, updates, deletes, gets or lists a <code>sites_ssl</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_ssl</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.sni_certificate.sites_ssl" /></td></tr>
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
    <td><a href="#showSiteTLSCertificate"><CopyableCode code="showSiteTLSCertificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#provisionSiteTLSCertificate"><CopyableCode code="provisionSiteTLSCertificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-certificate"><code>certificate</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-ca_certificates"><code>ca_certificates</code></a></td>
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
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ca_certificates">
    <td><CopyableCode code="ca_certificates" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-certificate">
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="showSiteTLSCertificate"
    values={[
        { label: 'showSiteTLSCertificate', value: 'showSiteTLSCertificate' },
        { label: 'provisionSiteTLSCertificate', value: 'provisionSiteTLSCertificate' }
    ]}
>
<TabItem value="showSiteTLSCertificate">

OK

```sql
EXEC netlify.sni_certificate.sites_ssl.showSiteTLSCertificate 
@site_id='{{ site_id }}' --required
;
```
</TabItem>
<TabItem value="provisionSiteTLSCertificate">

OK

```sql
EXEC netlify.sni_certificate.sites_ssl.provisionSiteTLSCertificate 
@site_id='{{ site_id }}' --required, 
@certificate='{{ certificate }}', 
@key='{{ key }}', 
@ca_certificates='{{ ca_certificates }}'
;
```
</TabItem>
</Tabs>
