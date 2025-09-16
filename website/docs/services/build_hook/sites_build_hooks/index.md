--- 
title: sites_build_hooks
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_build_hooks
  - build_hook
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

Creates, updates, deletes, gets or lists a <code>sites_build_hooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_build_hooks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.build_hook.sites_build_hooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="getSiteBuildHook"
    values={[
        { label: 'getSiteBuildHook', value: 'getSiteBuildHook' },
        { label: 'listSiteBuildHooks', value: 'listSiteBuildHooks' }
    ]}
>
<TabItem value="getSiteBuildHook">

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="listSiteBuildHooks">

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
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
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
    <td><a href="#getSiteBuildHook"><CopyableCode code="getSiteBuildHook" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#listSiteBuildHooks"><CopyableCode code="listSiteBuildHooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#createSiteBuildHook"><CopyableCode code="createSiteBuildHook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteSiteBuildHook"><CopyableCode code="deleteSiteBuildHook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateSiteBuildHook"><CopyableCode code="updateSiteBuildHook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
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
    defaultValue="getSiteBuildHook"
    values={[
        { label: 'getSiteBuildHook', value: 'getSiteBuildHook' },
        { label: 'listSiteBuildHooks', value: 'listSiteBuildHooks' }
    ]}
>
<TabItem value="getSiteBuildHook">

OK

```sql
SELECT
id,
site_id,
branch,
created_at,
title,
url
FROM netlify.build_hook.sites_build_hooks
WHERE site_id = '{{ site_id }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="listSiteBuildHooks">

OK

```sql
SELECT
id,
site_id,
branch,
created_at,
title,
url
FROM netlify.build_hook.sites_build_hooks
WHERE site_id = '{{ site_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="createSiteBuildHook"
    values={[
        { label: 'createSiteBuildHook', value: 'createSiteBuildHook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createSiteBuildHook">

No description available.

```sql
INSERT INTO netlify.build_hook.sites_build_hooks (
data__branch,
data__title,
site_id
)
SELECT 
'{{ branch }}',
'{{ title }}',
'{{ site_id }}'
RETURNING
id,
site_id,
branch,
created_at,
title,
url
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sites_build_hooks
  props:
    - name: site_id
      value: string
      description: Required parameter for the sites_build_hooks resource.
    - name: branch
      value: string
    - name: title
      value: string
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteSiteBuildHook"
    values={[
        { label: 'deleteSiteBuildHook', value: 'deleteSiteBuildHook' }
    ]}
>
<TabItem value="deleteSiteBuildHook">

No description available.

```sql
DELETE FROM netlify.build_hook.sites_build_hooks
WHERE site_id = '{{ site_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="updateSiteBuildHook"
    values={[
        { label: 'updateSiteBuildHook', value: 'updateSiteBuildHook' }
    ]}
>
<TabItem value="updateSiteBuildHook">

No content

```sql
EXEC netlify.build_hook.sites_build_hooks.updateSiteBuildHook 
@site_id='{{ site_id }}' --required, 
@id='{{ id }}' --required 
@@json=
'{
"branch": "{{ branch }}", 
"title": "{{ title }}"
}'
;
```
</TabItem>
</Tabs>
