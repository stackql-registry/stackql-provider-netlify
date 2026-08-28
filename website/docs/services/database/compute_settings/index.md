--- 
title: compute_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_settings
  - database
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

Creates, updates, deletes, gets or lists a <code>compute_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.database.compute_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="max_cu" /></td>
    <td><code>number (double)</code></td>
    <td>Maximum compute units</td>
</tr>
<tr>
    <td><CopyableCode code="min_cu" /></td>
    <td><code>number (double)</code></td>
    <td>Minimum compute units</td>
</tr>
<tr>
    <td><CopyableCode code="sleep_timeout_seconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>Seconds of inactivity before suspension</td>
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
    <td>Returns the project-level compute settings for the database. Returns effective settings (custom or tier defaults). Requires a Pro or higher plan.</td>
</tr>
<tr>
    <td><a href="#set_for_branch"><CopyableCode code="set_for_branch" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-branch_id"><code>branch_id</code></a></td>
    <td></td>
    <td>Sets compute settings for a specific database branch, overriding project-level settings. Requires a Pro or higher plan.</td>
</tr>
<tr>
    <td><a href="#set"><CopyableCode code="set" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Sets project-level compute settings for the database. Applied to new branches. Can be overridden per-branch. Requires a Pro or higher plan.</td>
</tr>
<tr>
    <td><a href="#clear"><CopyableCode code="clear" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>Resets project-level compute settings to tier defaults. Requires a Pro or higher plan.</td>
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
<tr id="parameter-branch_id">
    <td><CopyableCode code="branch_id" /></td>
    <td><code>string</code></td>
    <td>The branch ID</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns the project-level compute settings for the database. Returns effective settings (custom or tier defaults). Requires a Pro or higher plan.

```sql
SELECT
max_cu,
min_cu,
sleep_timeout_seconds
FROM netlify.database.compute_settings
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_for_branch"
    values={[
        { label: 'set_for_branch', value: 'set_for_branch' },
        { label: 'set', value: 'set' }
    ]}
>
<TabItem value="set_for_branch">

Sets compute settings for a specific database branch, overriding project-level settings. Requires a Pro or higher plan.

```sql
REPLACE netlify.database.compute_settings
SET 
min_cu = {{ min_cu }},
max_cu = {{ max_cu }},
sleep_timeout_seconds = {{ sleep_timeout_seconds }}
WHERE 
site_id = '{{ site_id }}' --required
AND branch_id = '{{ branch_id }}' --required
RETURNING
max_cu,
min_cu,
sleep_timeout_seconds;
```
</TabItem>
<TabItem value="set">

Sets project-level compute settings for the database. Applied to new branches. Can be overridden per-branch. Requires a Pro or higher plan.

```sql
REPLACE netlify.database.compute_settings
SET 
min_cu = {{ min_cu }},
max_cu = {{ max_cu }},
sleep_timeout_seconds = {{ sleep_timeout_seconds }}
WHERE 
site_id = '{{ site_id }}' --required
RETURNING
max_cu,
min_cu,
sleep_timeout_seconds;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="clear"
    values={[
        { label: 'clear', value: 'clear' }
    ]}
>
<TabItem value="clear">

Resets project-level compute settings to tier defaults. Requires a Pro or higher plan.

```sql
DELETE FROM netlify.database.compute_settings
WHERE site_id = '{{ site_id }}' --required
;
```
</TabItem>
</Tabs>
