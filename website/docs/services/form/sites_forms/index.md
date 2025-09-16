--- 
title: sites_forms
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_forms
  - form
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

Creates, updates, deletes, gets or lists a <code>sites_forms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_forms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.form.sites_forms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="listSiteForms"
    values={[
        { label: 'listSiteForms', value: 'listSiteForms' }
    ]}
>
<TabItem value="listSiteForms">

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="paths" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="submission_count" /></td>
    <td><code>integer (int32)</code></td>
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
    <td><a href="#listSiteForms"><CopyableCode code="listSiteForms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteSiteForm"><CopyableCode code="deleteSiteForm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-form_id"><code>form_id</code></a></td>
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
<tr id="parameter-form_id">
    <td><CopyableCode code="form_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="listSiteForms"
    values={[
        { label: 'listSiteForms', value: 'listSiteForms' }
    ]}
>
<TabItem value="listSiteForms">

OK

```sql
SELECT
id,
name,
site_id,
created_at,
fields,
paths,
submission_count
FROM netlify.form.sites_forms
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteSiteForm"
    values={[
        { label: 'deleteSiteForm', value: 'deleteSiteForm' }
    ]}
>
<TabItem value="deleteSiteForm">

No description available.

```sql
DELETE FROM netlify.form.sites_forms
WHERE site_id = '{{ site_id }}' --required
AND form_id = '{{ form_id }}' --required
;
```
</TabItem>
</Tabs>
