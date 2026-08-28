--- 
title: deploys
hide_title: false
hide_table_of_contents: false
keywords:
  - deploys
  - deploys
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

Creates, updates, deletes, gets or lists a <code>deploys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deploys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.deploys.deploys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'get_by_id', value: 'get_by_id' }
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_id" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="admin_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_ref" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_ssl_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="function_schedules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions_region" /></td>
    <td><code>string</code></td>
    <td>The functions region for this deploy as an airport code. </td>
</tr>
<tr>
    <td><CopyableCode code="functions_region_overrides" /></td>
    <td><code>array</code></td>
    <td>Functions in the deploy that explicitly specify their own region (airport code). </td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_edge_functions" /></td>
    <td><code>array</code></td>
    <td>An array of code_shas for the edge-function bundles that need to be uploaded to complete the deploy. </td>
</tr>
<tr>
    <td><CopyableCode code="required_functions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="screenshot_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection_token" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skipped" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl_url" /></td>
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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_id" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="admin_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_ref" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_ssl_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="function_schedules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions_region" /></td>
    <td><code>string</code></td>
    <td>The functions region for this deploy as an airport code. </td>
</tr>
<tr>
    <td><CopyableCode code="functions_region_overrides" /></td>
    <td><code>array</code></td>
    <td>Functions in the deploy that explicitly specify their own region (airport code). </td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_edge_functions" /></td>
    <td><code>array</code></td>
    <td>An array of code_shas for the edge-function bundles that need to be uploaded to complete the deploy. </td>
</tr>
<tr>
    <td><CopyableCode code="required_functions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="screenshot_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection_token" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skipped" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl_url" /></td>
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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_id">

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
    <td><CopyableCode code="build_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_id" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="admin_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_ref" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_ssl_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deploy_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="function_schedules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions_region" /></td>
    <td><code>string</code></td>
    <td>The functions region for this deploy as an airport code. </td>
</tr>
<tr>
    <td><CopyableCode code="functions_region_overrides" /></td>
    <td><code>array</code></td>
    <td>Functions in the deploy that explicitly specify their own region (airport code). </td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (dateTime)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_edge_functions" /></td>
    <td><code>array</code></td>
    <td>An array of code_shas for the edge-function bundles that need to be uploaded to complete the deploy. </td>
</tr>
<tr>
    <td><CopyableCode code="required_functions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="screenshot_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection_token" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skipped" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ssl_url" /></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-deploy-previews"><code>deploy-previews</code></a>, <a href="#parameter-production"><code>production</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-latest-published"><code>latest-published</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#get_by_id"><CopyableCode code="get_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td><a href="#parameter-title"><code>title</code></a>, <a href="#parameter-deploy-previews"><code>deploy-previews</code></a>, <a href="#parameter-production"><code>production</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-latest-published"><code>latest-published</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td><a href="#parameter-commit_ref"><code>commit_ref</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a>, <a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_by_id"><CopyableCode code="delete_by_id" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_validations_report"><CopyableCode code="update_validations_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td>Updates the deploy validations report for a deploy.</td>
</tr>
<tr>
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#upload_file"><CopyableCode code="upload_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-file_body"><code>file_body</code></a></td>
    <td><a href="#parameter-size"><code>size</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#upload_function"><CopyableCode code="upload_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-file_body"><code>file_body</code></a></td>
    <td><a href="#parameter-runtime"><code>runtime</code></a>, <a href="#parameter-invocation_mode"><code>invocation_mode</code></a>, <a href="#parameter-timeout"><code>timeout</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-X-Nf-Retry-Count"><code>X-Nf-Retry-Count</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#upload_edge_function"><CopyableCode code="upload_edge_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deploy_id"><code>deploy_id</code></a>, <a href="#parameter-code_sha"><code>code_sha</code></a>, <a href="#parameter-file_body"><code>file_body</code></a></td>
    <td><a href="#parameter-X-Nf-Retry-Count"><code>X-Nf-Retry-Count</code></a></td>
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
<tr id="parameter-code_sha">
    <td><CopyableCode code="code_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploy_id">
    <td><CopyableCode code="deploy_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-X-Nf-Retry-Count">
    <td><CopyableCode code="X-Nf-Retry-Count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-commit_ref">
    <td><CopyableCode code="commit_ref" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploy-previews">
    <td><CopyableCode code="deploy-previews" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-invocation_mode">
    <td><CopyableCode code="invocation_mode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-latest-published">
    <td><CopyableCode code="latest-published" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-production">
    <td><CopyableCode code="production" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-runtime">
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-timeout">
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-title">
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'get_by_id', value: 'get_by_id' }
    ]}
>
<TabItem value="get">

OK

```sql
SELECT
id,
name,
build_id,
review_id,
site_id,
user_id,
admin_url,
branch,
commit_ref,
commit_url,
context,
created_at,
deploy_ssl_url,
deploy_url,
draft,
error_message,
framework,
function_schedules,
functions_region,
functions_region_overrides,
locked,
published_at,
required,
required_edge_functions,
required_functions,
review_url,
screenshot_url,
skew_protection_token,
skipped,
ssl_url,
state,
title,
updated_at,
url
FROM netlify.deploys.deploys
WHERE site_id = '{{ site_id }}' -- required
AND deploy_id = '{{ deploy_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

OK

```sql
SELECT
id,
name,
build_id,
review_id,
site_id,
user_id,
admin_url,
branch,
commit_ref,
commit_url,
context,
created_at,
deploy_ssl_url,
deploy_url,
draft,
error_message,
framework,
function_schedules,
functions_region,
functions_region_overrides,
locked,
published_at,
required,
required_edge_functions,
required_functions,
review_url,
screenshot_url,
skew_protection_token,
skipped,
ssl_url,
state,
title,
updated_at,
url
FROM netlify.deploys.deploys
WHERE site_id = '{{ site_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND deploy-previews = '{{ deploy-previews }}'
AND production = '{{ production }}'
AND state = '{{ state }}'
AND branch = '{{ branch }}'
AND latest-published = '{{ latest-published }}'
;
```
</TabItem>
<TabItem value="get_by_id">

OK

```sql
SELECT
id,
name,
build_id,
review_id,
site_id,
user_id,
admin_url,
branch,
commit_ref,
commit_url,
context,
created_at,
deploy_ssl_url,
deploy_url,
draft,
error_message,
framework,
function_schedules,
functions_region,
functions_region_overrides,
locked,
published_at,
required,
required_edge_functions,
required_functions,
review_url,
screenshot_url,
skew_protection_token,
skipped,
ssl_url,
state,
title,
updated_at,
url
FROM netlify.deploys.deploys
WHERE deploy_id = '{{ deploy_id }}' -- required
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
INSERT INTO netlify.deploys.deploys (
files,
zip,
draft,
async,
functions,
edge_functions,
function_schedules,
functions_config,
branch,
framework,
framework_version,
environment,
site_id,
title,
deploy-previews,
production,
state,
branch,
latest-published
)
SELECT 
'{{ files }}',
'{{ zip }}',
{{ draft }},
{{ async }},
'{{ functions }}',
'{{ edge_functions }}',
'{{ function_schedules }}',
'{{ functions_config }}',
'{{ branch }}',
'{{ framework }}',
'{{ framework_version }}',
'{{ environment }}',
'{{ site_id }}',
'{{ title }}',
'{{ deploy-previews }}',
'{{ production }}',
'{{ state }}',
'{{ branch }}',
'{{ latest-published }}'
RETURNING
id,
name,
build_id,
review_id,
site_id,
user_id,
admin_url,
branch,
commit_ref,
commit_url,
context,
created_at,
deploy_ssl_url,
deploy_url,
draft,
error_message,
framework,
function_schedules,
functions_region,
functions_region_overrides,
locked,
published_at,
required,
required_edge_functions,
required_functions,
review_url,
screenshot_url,
skew_protection_token,
skipped,
ssl_url,
state,
title,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deploys
  props:
    - name: site_id
      value: "{{ site_id }}"
      description: Required parameter for the deploys resource.
    - name: files
      value: "{{ files }}"
      description: |
        A hash mapping file paths to SHA1 digests of the file contents. (opaque JSON object)
    - name: zip
      value: "{{ zip }}"
      description: |
        A zip file containing the site files to deploy. Alternative to 'files'.
        To use this field, set Content-Type to 'application/json' and include the zip content here.
        Alternatively, you can set Content-Type to 'application/zip' and send the zip as the raw request body (not as JSON).
    - name: draft
      value: {{ draft }}
    - name: async
      value: {{ async }}
    - name: functions
      value: "{{ functions }}"
      description: |
        (opaque JSON object)
    - name: edge_functions
      value: "{{ edge_functions }}"
      description: |
        A hash mapping edge-function bundle formats to the code_sha of each bundle. The
        response's required_edge_functions lists which of these still need to be uploaded.
        (opaque JSON object)
    - name: function_schedules
      value:
        - name: "{{ name }}"
          cron: "{{ cron }}"
    - name: functions_config
      value: "{{ functions_config }}"
    - name: branch
      value: "{{ branch }}"
    - name: framework
      value: "{{ framework }}"
    - name: framework_version
      value: "{{ framework_version }}"
    - name: environment
      description: |
        A list of deploy-specific environment variable data. Data specified this way applies only
        to this specific deploy and is merged into any existing environment variables set on the
        account and site.
        Deploy-specific environment variable data takes precedence over account and site
        environment variable data: For example, a deploy-specific variable with the key \`NODE_ENV\`
        will take priority over any existing site- and account-level environment variable data
        with the key \`NODE_ENV\`.
        Environment variable data may be provided at one of two times:
        - When creating a new Deploy with deploy files (most common)
        - When finalizing an existing Deploy with deploy files
        Once set, environment variables for a specific deploy cannot be modified. Subsequent
        attempts to modify environment variable data for a deploy will be ignored.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
          is_secret: {{ is_secret }}
          scopes: "{{ scopes }}"
    - name: title
      value: "{{ title }}"
    - name: deploy-previews
      value: {{ deploy-previews }}
    - name: production
      value: {{ production }}
    - name: state
      value: "{{ state }}"
    - name: branch
      value: "{{ branch }}"
    - name: latest-published
      value: {{ latest-published }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

No description available.

```sql
REPLACE netlify.deploys.deploys
SET 
files = '{{ files }}',
zip = '{{ zip }}',
draft = {{ draft }},
async = {{ async }},
functions = '{{ functions }}',
edge_functions = '{{ edge_functions }}',
function_schedules = '{{ function_schedules }}',
functions_config = '{{ functions_config }}',
branch = '{{ branch }}',
framework = '{{ framework }}',
framework_version = '{{ framework_version }}',
environment = '{{ environment }}'
WHERE 
site_id = '{{ site_id }}' --required
AND deploy_id = '{{ deploy_id }}' --required
AND commit_ref = '{{ commit_ref}}'
RETURNING
id,
name,
build_id,
review_id,
site_id,
user_id,
admin_url,
branch,
commit_ref,
commit_url,
context,
created_at,
deploy_ssl_url,
deploy_url,
draft,
error_message,
framework,
function_schedules,
functions_region,
functions_region_overrides,
locked,
published_at,
required,
required_edge_functions,
required_functions,
review_url,
screenshot_url,
skew_protection_token,
skipped,
ssl_url,
state,
title,
updated_at,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'delete_by_id', value: 'delete_by_id' }
    ]}
>
<TabItem value="delete">

No description available.

```sql
DELETE FROM netlify.deploys.deploys
WHERE deploy_id = '{{ deploy_id }}' --required
AND site_id = '{{ site_id }}' --required
;
```
</TabItem>
<TabItem value="delete_by_id">

No description available.

```sql
DELETE FROM netlify.deploys.deploys
WHERE deploy_id = '{{ deploy_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' },
        { label: 'restore', value: 'restore' },
        { label: 'rollback', value: 'rollback' },
        { label: 'update_validations_report', value: 'update_validations_report' },
        { label: 'lock', value: 'lock' },
        { label: 'unlock', value: 'unlock' },
        { label: 'upload_file', value: 'upload_file' },
        { label: 'upload_function', value: 'upload_function' },
        { label: 'upload_edge_function', value: 'upload_edge_function' }
    ]}
>
<TabItem value="cancel">

Cancelled

```sql
EXEC netlify.deploys.deploys.cancel 
@deploy_id='{{ deploy_id }}' --required
;
```
</TabItem>
<TabItem value="restore">

Created

```sql
EXEC netlify.deploys.deploys.restore 
@site_id='{{ site_id }}' --required, 
@deploy_id='{{ deploy_id }}' --required
;
```
</TabItem>
<TabItem value="rollback">

No content

```sql
EXEC netlify.deploys.deploys.rollback 
@site_id='{{ site_id }}' --required
;
```
</TabItem>
<TabItem value="update_validations_report">

Updates the deploy validations report for a deploy.

```sql
EXEC netlify.deploys.deploys.update_validations_report 
@deploy_id='{{ deploy_id }}' --required 
@@json=
'{
"secrets_scan": "{{ secrets_scan }}"
}'
;
```
</TabItem>
<TabItem value="lock">

OK

```sql
EXEC netlify.deploys.deploys.lock 
@deploy_id='{{ deploy_id }}' --required
;
```
</TabItem>
<TabItem value="unlock">

OK

```sql
EXEC netlify.deploys.deploys.unlock 
@deploy_id='{{ deploy_id }}' --required
;
```
</TabItem>
<TabItem value="upload_file">

OK

```sql
EXEC netlify.deploys.deploys.upload_file 
@deploy_id='{{ deploy_id }}' --required, 
@path='{{ path }}' --required, 
@size='{{ size }}' 
@@json=
'{
"file_body": "{{ file_body }}"
}'
;
```
</TabItem>
<TabItem value="upload_function">

OK

```sql
EXEC netlify.deploys.deploys.upload_function 
@deploy_id='{{ deploy_id }}' --required, 
@name='{{ name }}' --required, 
@runtime='{{ runtime }}', 
@invocation_mode='{{ invocation_mode }}', 
@timeout='{{ timeout }}', 
@size='{{ size }}', 
@X-Nf-Retry-Count='{{ X-Nf-Retry-Count }}' 
@@json=
'{
"file_body": "{{ file_body }}"
}'
;
```
</TabItem>
<TabItem value="upload_edge_function">

OK

```sql
EXEC netlify.deploys.deploys.upload_edge_function 
@deploy_id='{{ deploy_id }}' --required, 
@code_sha='{{ code_sha }}' --required, 
@X-Nf-Retry-Count='{{ X-Nf-Retry-Count }}' 
@@json=
'{
"file_body": "{{ file_body }}"
}'
;
```
</TabItem>
</Tabs>
