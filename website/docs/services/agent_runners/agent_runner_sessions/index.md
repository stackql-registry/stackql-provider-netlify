--- 
title: agent_runner_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runner_sessions
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

Creates, updates, deletes, gets or lists an <code>agent_runner_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runner_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.agent_runners.agent_runner_sessions" /></td></tr>
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
    <td><CopyableCode code="agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dev_server_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_zip_file_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="agent_config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="attached_file_keys" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="done_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_published" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prompt" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_diff" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
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
    <td><CopyableCode code="agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dev_server_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_zip_file_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="agent_config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="attached_file_keys" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="done_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_published" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prompt" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="result_diff" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
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
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a>, <a href="#parameter-agent_runner_session_id"><code>agent_runner_session_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-order_by"><code>order_by</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a></td>
    <td><a href="#parameter-prompt"><code>prompt</code></a>, <a href="#parameter-agent"><code>agent</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-file_keys"><code>file_keys</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a>, <a href="#parameter-agent_runner_session_id"><code>agent_runner_session_id</code></a></td>
    <td><a href="#parameter-is_published"><code>is_published</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_runner_id"><code>agent_runner_id</code></a>, <a href="#parameter-agent_runner_session_id"><code>agent_runner_session_id</code></a></td>
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
<tr id="parameter-agent_runner_id">
    <td><CopyableCode code="agent_runner_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-agent_runner_session_id">
    <td><CopyableCode code="agent_runner_session_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-agent">
    <td><CopyableCode code="agent" /></td>
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
<tr id="parameter-is_published">
    <td><CopyableCode code="is_published" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-model">
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-order_by">
    <td><CopyableCode code="order_by" /></td>
    <td><code>string</code></td>
    <td></td>
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
<tr id="parameter-prompt">
    <td><CopyableCode code="prompt" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
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
agent_runner_id,
deploy_id,
dev_server_id,
result_zip_file_name,
agent_config,
attached_file_keys,
commit_sha,
created_at,
deploy_url,
done_at,
duration,
is_published,
prompt,
result,
result_diff,
state,
steps,
title,
updated_at,
user
FROM netlify.agent_runners.agent_runner_sessions
WHERE agent_runner_id = '{{ agent_runner_id }}' -- required
AND agent_runner_session_id = '{{ agent_runner_session_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

OK

```sql
SELECT
id,
agent_runner_id,
deploy_id,
dev_server_id,
result_zip_file_name,
agent_config,
attached_file_keys,
commit_sha,
created_at,
deploy_url,
done_at,
duration,
is_published,
prompt,
result,
result_diff,
state,
steps,
title,
updated_at,
user
FROM netlify.agent_runners.agent_runner_sessions
WHERE agent_runner_id = '{{ agent_runner_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND state = '{{ state }}'
AND from = '{{ from }}'
AND to = '{{ to }}'
AND order_by = '{{ order_by }}'
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
INSERT INTO netlify.agent_runners.agent_runner_sessions (
agent_runner_id,
prompt,
agent,
model,
file_keys
)
SELECT 
'{{ agent_runner_id }}',
'{{ prompt }}',
'{{ agent }}',
'{{ model }}',
'{{ file_keys }}'
RETURNING
id,
agent_runner_id,
deploy_id,
dev_server_id,
result_zip_file_name,
agent_config,
attached_file_keys,
commit_sha,
created_at,
deploy_url,
done_at,
duration,
is_published,
prompt,
result,
result_diff,
state,
steps,
title,
updated_at,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_runner_sessions
  props:
    - name: agent_runner_id
      value: "{{ agent_runner_id }}"
      description: Required parameter for the agent_runner_sessions resource.
    - name: prompt
      value: "{{ prompt }}"
    - name: agent
      value: "{{ agent }}"
    - name: model
      value: "{{ model }}"
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
UPDATE netlify.agent_runners.agent_runner_sessions
SET 
-- No updatable properties
WHERE 
agent_runner_id = '{{ agent_runner_id }}' --required
AND agent_runner_session_id = '{{ agent_runner_session_id }}' --required
AND is_published = {{ is_published}}
RETURNING
id,
agent_runner_id,
deploy_id,
dev_server_id,
result_zip_file_name,
agent_config,
attached_file_keys,
commit_sha,
created_at,
deploy_url,
done_at,
duration,
is_published,
prompt,
result,
result_diff,
state,
steps,
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
DELETE FROM netlify.agent_runners.agent_runner_sessions
WHERE agent_runner_id = '{{ agent_runner_id }}' --required
AND agent_runner_session_id = '{{ agent_runner_session_id }}' --required
;
```
</TabItem>
</Tabs>
