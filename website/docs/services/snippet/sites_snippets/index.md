--- 
title: sites_snippets
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_snippets
  - snippet
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

Creates, updates, deletes, gets or lists a <code>sites_snippets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_snippets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.snippet.sites_snippets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getSiteSnippet"
    values={[
        { label: 'getSiteSnippet', value: 'getSiteSnippet' },
        { label: 'listSiteSnippets', value: 'listSiteSnippets' }
    ]}
>
<TabItem value="getSiteSnippet">

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
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="general" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="general_position" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="goal_position" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="listSiteSnippets">

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
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="general" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="general_position" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="goal" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="goal_position" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
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
    <td><a href="#getSiteSnippet"><CopyableCode code="getSiteSnippet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-snippet_id"><code>snippet_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listSiteSnippets"><CopyableCode code="listSiteSnippets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createSiteSnippet"><CopyableCode code="createSiteSnippet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteSiteSnippet"><CopyableCode code="deleteSiteSnippet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-snippet_id"><code>snippet_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateSiteSnippet"><CopyableCode code="updateSiteSnippet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-snippet_id"><code>snippet_id</code></a></td>
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
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-snippet_id">
    <td><CopyableCode code="snippet_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="getSiteSnippet"
    values={[
        { label: 'getSiteSnippet', value: 'getSiteSnippet' },
        { label: 'listSiteSnippets', value: 'listSiteSnippets' }
    ]}
>
<TabItem value="getSiteSnippet">

OK

```sql
SELECT
id,
site_id,
general,
general_position,
goal,
goal_position,
title
FROM netlify.snippet.sites_snippets
WHERE site_id = '{{ site_id }}' -- required
AND snippet_id = '{{ snippet_id }}' -- required
;
```
</TabItem>
<TabItem value="listSiteSnippets">

OK

```sql
SELECT
id,
site_id,
general,
general_position,
goal,
goal_position,
title
FROM netlify.snippet.sites_snippets
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createSiteSnippet"
    values={[
        { label: 'createSiteSnippet', value: 'createSiteSnippet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createSiteSnippet">

No description available.

```sql
INSERT INTO netlify.snippet.sites_snippets (
data__general,
data__general_position,
data__goal,
data__goal_position,
data__id,
data__site_id,
data__title,
site_id
)
SELECT 
'{{ general }}',
'{{ general_position }}',
'{{ goal }}',
'{{ goal_position }}',
{{ id }},
'{{ site_id }}',
'{{ title }}',
'{{ site_id }}'
RETURNING
id,
site_id,
general,
general_position,
goal,
goal_position,
title
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sites_snippets
  props:
    - name: site_id
      value: string
      description: Required parameter for the sites_snippets resource.
    - name: general
      value: string
    - name: general_position
      value: string
    - name: goal
      value: string
    - name: goal_position
      value: string
    - name: id
      value: integer
    - name: site_id
      value: string
    - name: title
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteSiteSnippet"
    values={[
        { label: 'deleteSiteSnippet', value: 'deleteSiteSnippet' }
    ]}
>
<TabItem value="deleteSiteSnippet">

No description available.

```sql
DELETE FROM netlify.snippet.sites_snippets
WHERE site_id = '{{ site_id }}' --required
AND snippet_id = '{{ snippet_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="updateSiteSnippet"
    values={[
        { label: 'updateSiteSnippet', value: 'updateSiteSnippet' }
    ]}
>
<TabItem value="updateSiteSnippet">

No content

```sql
EXEC netlify.snippet.sites_snippets.updateSiteSnippet 
@site_id='{{ site_id }}' --required, 
@snippet_id='{{ snippet_id }}' --required 
@@json=
'{
"general": "{{ general }}", 
"general_position": "{{ general_position }}", 
"goal": "{{ goal }}", 
"goal_position": "{{ goal_position }}", 
"id": {{ id }}, 
"site_id": "{{ site_id }}", 
"title": "{{ title }}"
}'
;
```
</TabItem>
</Tabs>
