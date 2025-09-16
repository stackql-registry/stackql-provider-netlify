--- 
title: sites_services_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_services_instances
  - service_instance
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

Creates, updates, deletes, gets or lists a <code>sites_services_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_services_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.service_instance.sites_services_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#createServiceInstance"><CopyableCode code="createServiceInstance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-addon"><code>addon</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#deleteServiceInstance"><CopyableCode code="deleteServiceInstance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-addon"><code>addon</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#showServiceInstance"><CopyableCode code="showServiceInstance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-addon"><code>addon</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#updateServiceInstance"><CopyableCode code="updateServiceInstance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-addon"><code>addon</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a></td>
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
<tr id="parameter-addon">
    <td><CopyableCode code="addon" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
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

## `INSERT` examples

<Tabs
    defaultValue="createServiceInstance"
    values={[
        { label: 'createServiceInstance', value: 'createServiceInstance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="createServiceInstance">

No description available.

```sql
INSERT INTO netlify.service_instance.sites_services_instances (
site_id,
addon
)
SELECT 
'{{ site_id }}',
'{{ addon }}'
RETURNING
id,
service_name,
auth_url,
config,
created_at,
env,
external_attributes,
service_path,
service_slug,
snippets,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: sites_services_instances
  props:
    - name: site_id
      value: string
      description: Required parameter for the sites_services_instances resource.
    - name: addon
      value: string
      description: Required parameter for the sites_services_instances resource.
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deleteServiceInstance"
    values={[
        { label: 'deleteServiceInstance', value: 'deleteServiceInstance' }
    ]}
>
<TabItem value="deleteServiceInstance">

No description available.

```sql
DELETE FROM netlify.service_instance.sites_services_instances
WHERE site_id = '{{ site_id }}' --required
AND addon = '{{ addon }}' --required
AND instance_id = '{{ instance_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="showServiceInstance"
    values={[
        { label: 'showServiceInstance', value: 'showServiceInstance' },
        { label: 'updateServiceInstance', value: 'updateServiceInstance' }
    ]}
>
<TabItem value="showServiceInstance">

OK

```sql
EXEC netlify.service_instance.sites_services_instances.showServiceInstance 
@site_id='{{ site_id }}' --required, 
@addon='{{ addon }}' --required, 
@instance_id='{{ instance_id }}' --required
;
```
</TabItem>
<TabItem value="updateServiceInstance">

No Content

```sql
EXEC netlify.service_instance.sites_services_instances.updateServiceInstance 
@site_id='{{ site_id }}' --required, 
@addon='{{ addon }}' --required, 
@instance_id='{{ instance_id }}' --required
;
```
</TabItem>
</Tabs>
