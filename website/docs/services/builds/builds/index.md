--- 
title: builds
hide_title: false
hide_table_of_contents: false
keywords:
  - builds
  - builds
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

Creates, updates, deletes, gets or lists a <code>builds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="builds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.builds.builds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="done" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="done" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-build_id"><code>build_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-clear_cache"><code>clear_cache</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td>Runs a build for a site. The build will be scheduled to run at the first opportunity, but it might not start immediately if insufficient account build capacity is available.&lt;br /&gt;&lt;br /&gt;Files for build can be uploaded as a zipped site using one of these methods:&lt;br /&gt;1. Set Content-Type to 'application/zip' and send the zip file as the raw request body&lt;br /&gt;2. Set Content-Type to 'multipart/form-data' and include the zip file in the 'zip' field&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update_log"><CopyableCode code="update_log" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-build_id"><code>build_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#notify_start"><CopyableCode code="notify_start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-build_id"><code>build_id</code></a></td>
    <td><a href="#parameter-buildbot_version"><code>buildbot_version</code></a>, <a href="#parameter-build_version"><code>build_version</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
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
<tr id="parameter-build_id">
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>If no branch is specified, it is treated as a production deploy If a branch IS specified and matches the main branch, it is also production If a branch is specified and doesn't match the main branch, it is a branch deploy</td>
</tr>
<tr id="parameter-build_version">
    <td><CopyableCode code="build_version" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-buildbot_version">
    <td><CopyableCode code="buildbot_version" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clear_cache">
    <td><CopyableCode code="clear_cache" /></td>
    <td><code>boolean</code></td>
    <td>Whether to clear the build cache before building</td>
</tr>
<tr id="parameter-image">
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>The build image tag to use for the build</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The build template to use for the build</td>
</tr>
<tr id="parameter-title">
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the build</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="list">

OK

```sql
SELECT
id,
deploy_id,
created_at,
done,
error,
sha
FROM netlify.builds.builds
WHERE site_id = '{{ site_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="get">

OK

```sql
SELECT
id,
deploy_id,
created_at,
done,
error,
sha
FROM netlify.builds.builds
WHERE build_id = '{{ build_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Runs a build for a site. The build will be scheduled to run at the first opportunity, but it might not start immediately if insufficient account build capacity is available.&lt;br /&gt;&lt;br /&gt;Files for build can be uploaded as a zipped site using one of these methods:&lt;br /&gt;1. Set Content-Type to 'application/zip' and send the zip file as the raw request body&lt;br /&gt;2. Set Content-Type to 'multipart/form-data' and include the zip file in the 'zip' field&lt;br /&gt;

```sql
INSERT INTO netlify.builds.builds (
zip,
site_id,
branch,
clear_cache,
image,
template_id,
title
)
SELECT 
'{{ zip }}',
'{{ site_id }}',
'{{ branch }}',
'{{ clear_cache }}',
'{{ image }}',
'{{ template_id }}',
'{{ title }}'
RETURNING
id,
deploy_id,
created_at,
done,
error,
sha
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: builds
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the builds resource.
    - name: zip
      value: "{{ zip }}"
      description: |
        A zip file containing the site files to build.
        Only used with Content-Type 'multipart/form-data'.
        Alternatively, set Content-Type to 'application/zip' and send the zip as the raw request body (no 'zip' parameter needed).
    - name: branch
      value: "{{ branch }}"
      description: If no branch is specified, it is treated as a production deploy If a branch IS specified and matches the main branch, it is also production If a branch is specified and doesn't match the main branch, it is a branch deploy
      description: If no branch is specified, it is treated as a production deploy If a branch IS specified and matches the main branch, it is also production If a branch is specified and doesn't match the main branch, it is a branch deploy
    - name: clear_cache
      value: {{ clear_cache }}
      description: Whether to clear the build cache before building
      description: Whether to clear the build cache before building
    - name: image
      value: "{{ image }}"
      description: The build image tag to use for the build
      description: The build image tag to use for the build
    - name: template_id
      value: "{{ template_id }}"
      description: The build template to use for the build
      description: The build template to use for the build
    - name: title
      value: "{{ title }}"
      description: The title of the build
      description: The title of the build
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_log"
    values={[
        { label: 'update_log', value: 'update_log' },
        { label: 'notify_start', value: 'notify_start' }
    ]}
>
<TabItem value="update_log">

No content

```sql
EXEC netlify.builds.builds.update_log 
@build_id='{{ build_id }}' --required
;
```
</TabItem>
<TabItem value="notify_start">

No content

```sql
EXEC netlify.builds.builds.notify_start 
@build_id='{{ build_id }}' --required, 
@buildbot_version='{{ buildbot_version }}', 
@build_version='{{ build_version }}', 
@task_id='{{ task_id }}'
;
```
</TabItem>
</Tabs>
