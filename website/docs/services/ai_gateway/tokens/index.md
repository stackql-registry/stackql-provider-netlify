--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
  - ai_gateway
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.ai_gateway.tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_for_site"
    values={[
        { label: 'get_for_site', value: 'get_for_site' },
        { label: 'get_for_account', value: 'get_for_account' }
    ]}
>
<TabItem value="get_for_site">

AI Gateway token for the site

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
    <td><CopyableCode code="expires_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unix timestamp when the token expires</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The AI Gateway authentication token</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>AI gateway base url</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_for_account">

AI Gateway token for the account

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
    <td><CopyableCode code="expires_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unix timestamp when the token expires</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The AI Gateway authentication token</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>AI gateway base url</td>
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
    <td><a href="#get_for_site"><CopyableCode code="get_for_site" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Returns an AI Gateway token for a specific site</td>
</tr>
<tr>
    <td><a href="#get_for_account"><CopyableCode code="get_for_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Returns an AI Gateway token scoped to an account</td>
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
    <td>The account ID</td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The site ID</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_for_site"
    values={[
        { label: 'get_for_site', value: 'get_for_site' },
        { label: 'get_for_account', value: 'get_for_account' }
    ]}
>
<TabItem value="get_for_site">

Returns an AI Gateway token for a specific site

```sql
SELECT
expires_at,
token,
url
FROM netlify.ai_gateway.tokens
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
<TabItem value="get_for_account">

Returns an AI Gateway token scoped to an account

```sql
SELECT
expires_at,
token,
url
FROM netlify.ai_gateway.tokens
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
</Tabs>
