--- 
title: agent_runners
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runners
  - agent_runners
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

Creates, updates, deletes, gets or lists an <code>agent_runners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.agent_runners.agent_runners" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="base_deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="latest_session_deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="parent_agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="active_session_created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="attached_file_keys" /></td>
    <td><code>array</code></td>
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
    <td><CopyableCode code="current_task" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="done_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="latest_session_deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_is_being_created" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_is_being_created" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_number" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_diff" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="base_deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="latest_session_deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="parent_agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="active_session_created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="attached_file_keys" /></td>
    <td><code>array</code></td>
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
    <td><CopyableCode code="current_task" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="done_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="latest_session_deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_is_being_created" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_is_being_created" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_number" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pr_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_diff" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
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
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-result_branch"><code>result_branch</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-prompt"><code>prompt</code></a>, <a href="#parameter-agent"><code>agent</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-parent_agent_runner_id"><code>parent_agent_runner_id</code></a>, <a href="#parameter-dev_server_image"><code>dev_server_image</code></a>, <a href="#parameter-file_keys"><code>file_keys</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_upload_url"><CopyableCode code="create_upload_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-filename"><code>filename</code></a>, <a href="#parameter-content_type"><code>content_type</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#archive"><CopyableCode code="archive" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_pull_request"><CopyableCode code="create_pull_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#commit_to_branch"><CopyableCode code="commit_to_branch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-target_branch"><code>target_branch</code></a>, <a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-agent_runner_id">
    <td><CopyableCode code="agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-content_type">
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filename">
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-target_branch">
    <td><CopyableCode code="target_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-agent">
    <td><CopyableCode code="agent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploy_id">
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-dev_server_image">
    <td><CopyableCode code="dev_server_image" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-file_keys">
    <td><CopyableCode code="file_keys" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-model">
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-parent_agent_runner_id">
    <td><CopyableCode code="parent_agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-prompt">
    <td><CopyableCode code="prompt" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-result_branch">
    <td><CopyableCode code="result_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-title">
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>integer</code></td>
    <td></td>
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
id,
base_deploy_id,
latest_session_deploy_id,
parent_agent_runner_id,
site_id,
active_session_created_at,
attached_file_keys,
branch,
created_at,
current_task,
done_at,
latest_session_deploy_url,
merge_commit_error,
merge_commit_is_being_created,
merge_commit_sha,
pr_branch,
pr_error,
pr_is_being_created,
pr_number,
pr_state,
pr_url,
result_branch,
result_diff,
sha,
state,
title,
updated_at,
user
FROM netlify.agent_runners.agent_runners
WHERE agent_runner_id = '{{ agent_runner_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

OK

```sql
SELECT
id,
base_deploy_id,
latest_session_deploy_id,
parent_agent_runner_id,
site_id,
active_session_created_at,
attached_file_keys,
branch,
created_at,
current_task,
done_at,
latest_session_deploy_url,
merge_commit_error,
merge_commit_is_being_created,
merge_commit_sha,
pr_branch,
pr_error,
pr_is_being_created,
pr_number,
pr_state,
pr_url,
result_branch,
result_diff,
sha,
state,
title,
updated_at,
user
FROM netlify.agent_runners.agent_runners
WHERE account_id = '{{ account_id }}' -- required
AND site_id = '{{ site_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND state = '{{ state }}'
AND title = '{{ title }}'
AND branch = '{{ branch }}'
AND result_branch = '{{ result_branch }}'
AND from = '{{ from }}'
AND to = '{{ to }}'
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

No description available.

```sql
INSERT INTO netlify.agent_runners.agent_runners (
site_id,
deploy_id,
branch,
prompt,
agent,
model,
parent_agent_runner_id,
dev_server_image,
file_keys
)
SELECT 
'{{ site_id }}',
'{{ deploy_id }}',
'{{ branch }}',
'{{ prompt }}',
'{{ agent }}',
'{{ model }}',
'{{ parent_agent_runner_id }}',
'{{ dev_server_image }}',
'{{ file_keys }}'
RETURNING
id,
base_deploy_id,
latest_session_deploy_id,
parent_agent_runner_id,
site_id,
active_session_created_at,
attached_file_keys,
branch,
created_at,
current_task,
done_at,
latest_session_deploy_url,
merge_commit_error,
merge_commit_is_being_created,
merge_commit_sha,
pr_branch,
pr_error,
pr_is_being_created,
pr_number,
pr_state,
pr_url,
result_branch,
result_diff,
sha,
state,
title,
updated_at,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_runners
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the agent_runners resource.
    - name: deploy_id
      value: "{{ deploy_id }}"
    - name: branch
      value: "{{ branch }}"
    - name: prompt
      value: "{{ prompt }}"
    - name: agent
      value: "{{ agent }}"
    - name: model
      value: "{{ model }}"
    - name: parent_agent_runner_id
      value: "{{ parent_agent_runner_id }}"
    - name: dev_server_image
      value: "{{ dev_server_image }}"
    - name: file_keys
      value: "{{ file_keys }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

No description available.

```sql
UPDATE netlify.agent_runners.agent_runners
SET 
-- No updatable properties
WHERE 
agent_runner_id = '{{ agent_runner_id }}' --required
RETURNING
id,
base_deploy_id,
latest_session_deploy_id,
parent_agent_runner_id,
site_id,
active_session_created_at,
attached_file_keys,
branch,
created_at,
current_task,
done_at,
latest_session_deploy_url,
merge_commit_error,
merge_commit_is_being_created,
merge_commit_sha,
pr_branch,
pr_error,
pr_is_being_created,
pr_number,
pr_state,
pr_url,
result_branch,
result_diff,
sha,
state,
title,
updated_at,
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

No description available.

```sql
DELETE FROM netlify.agent_runners.agent_runners
WHERE agent_runner_id = '{{ agent_runner_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_upload_url"
    values={[
        { label: 'create_upload_url', value: 'create_upload_url' },
        { label: 'archive', value: 'archive' },
        { label: 'create_pull_request', value: 'create_pull_request' },
        { label: 'commit_to_branch', value: 'commit_to_branch' }
    ]}
>
<TabItem value="create_upload_url">

OK

```sql
EXEC netlify.agent_runners.agent_runners.create_upload_url 
@account_id='{{ account_id }}' --required, 
@filename='{{ filename }}' --required, 
@content_type='{{ content_type }}' --required
;
```
</TabItem>
<TabItem value="archive">

Accepted

```sql
EXEC netlify.agent_runners.agent_runners.archive 
@agent_runner_id='{{ agent_runner_id }}' --required
;
```
</TabItem>
<TabItem value="create_pull_request">

OK

```sql
EXEC netlify.agent_runners.agent_runners.create_pull_request 
@agent_runner_id='{{ agent_runner_id }}' --required
;
```
</TabItem>
<TabItem value="commit_to_branch">

OK

```sql
EXEC netlify.agent_runners.agent_runners.commit_to_branch 
@target_branch='{{ target_branch }}' --required, 
@agent_runner_id='{{ agent_runner_id }}' --required
;
```
</TabItem>
</Tabs>
