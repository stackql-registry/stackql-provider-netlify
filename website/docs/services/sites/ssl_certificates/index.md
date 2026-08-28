--- 
title: ssl_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_certificates
  - sites
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

Creates, updates, deletes, gets or lists a <code>ssl_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssl_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.sites.ssl_certificates" /></td></tr>
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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
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
<TabItem value="list">

Array of SNI Certificates

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#provision"><CopyableCode code="provision" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-certificate"><code>certificate</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-ca_certificates"><code>ca_certificates</code></a></td>
    <td>Provisions or updates a TLS certificate for the site.&lt;br /&gt;&lt;br /&gt;**Creating a certificate (site has no certificate):**&lt;br /&gt;- Omit certificate params to initiate Let's Encrypt provisioning&lt;br /&gt;- Provide certificate, key, and ca_certificates to upload a custom certificate&lt;br /&gt;&lt;br /&gt;**Updating a certificate (site already has a certificate):**&lt;br /&gt;- REQUIRES certificate, key, and ca_certificates to replace with a new custom certificate&lt;br /&gt;- Use POST /api/v1/sites/&#123;site_id&#125;/ssl/renew to renew an existing Let's Encrypt certificate</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ca_certificates">
    <td><CopyableCode code="ca_certificates" /></td>
    <td><code>string</code></td>
    <td>PEM-encoded CA certificate chain. Required when updating an existing certificate.</td>
</tr>
<tr id="parameter-certificate">
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>PEM-encoded certificate. Required when updating an existing certificate.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>PEM-encoded private key. Required when updating an existing certificate.</td>
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

OK

```sql
SELECT
created_at,
domains,
expires_at,
state,
updated_at
FROM netlify.sites.ssl_certificates
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Array of SNI Certificates

```sql
SELECT
created_at,
domains,
expires_at,
state,
updated_at
FROM netlify.sites.ssl_certificates
WHERE site_id = '{{ site_id }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="provision"
    values={[
        { label: 'provision', value: 'provision' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="provision">

Provisions or updates a TLS certificate for the site.&lt;br /&gt;&lt;br /&gt;**Creating a certificate (site has no certificate):**&lt;br /&gt;- Omit certificate params to initiate Let's Encrypt provisioning&lt;br /&gt;- Provide certificate, key, and ca_certificates to upload a custom certificate&lt;br /&gt;&lt;br /&gt;**Updating a certificate (site already has a certificate):**&lt;br /&gt;- REQUIRES certificate, key, and ca_certificates to replace with a new custom certificate&lt;br /&gt;- Use POST /api/v1/sites/&#123;site_id&#125;/ssl/renew to renew an existing Let's Encrypt certificate

```sql
INSERT INTO netlify.sites.ssl_certificates (
site_id,
certificate,
key,
ca_certificates
)
SELECT 
'{{ site_id }}',
'{{ certificate }}',
'{{ key }}',
'{{ ca_certificates }}'
RETURNING
created_at,
domains,
expires_at,
state,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ssl_certificates
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the ssl_certificates resource.
    - name: certificate
      value: "{{ certificate }}"
      description: PEM-encoded certificate. Required when updating an existing certificate.
      description: PEM-encoded certificate. Required when updating an existing certificate.
    - name: key
      value: "{{ key }}"
      description: PEM-encoded private key. Required when updating an existing certificate.
      description: PEM-encoded private key. Required when updating an existing certificate.
    - name: ca_certificates
      value: "{{ ca_certificates }}"
      description: PEM-encoded CA certificate chain. Required when updating an existing certificate.
      description: PEM-encoded CA certificate chain. Required when updating an existing certificate.
`}</CodeBlock>

</TabItem>
</Tabs>
