--- 
title: sites_unlink_repo
hide_title: false
hide_table_of_contents: false
keywords:
  - sites_unlink_repo
  - site
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

Creates, updates, deletes, gets or lists a <code>sites_unlink_repo</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>sites_unlink_repo</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="netlify.site.sites_unlink_repo" /></td></tr>
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
    <td><a href="#unlinkSiteRepo"><CopyableCode code="unlinkSiteRepo" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a></td>
    <td></td>
    <td>[Beta] Unlinks the repo from the site.<br /><br />This action will also:<br />- Delete associated deploy keys<br />- Delete outgoing webhooks for the repo<br />- Delete the site's build hooks</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="unlinkSiteRepo"
    values={[
        { label: 'unlinkSiteRepo', value: 'unlinkSiteRepo' }
    ]}
>
<TabItem value="unlinkSiteRepo">

[Beta] Unlinks the repo from the site.<br /><br />This action will also:<br />- Delete associated deploy keys<br />- Delete outgoing webhooks for the repo<br />- Delete the site's build hooks

```sql
EXEC netlify.site.sites_unlink_repo.unlinkSiteRepo 
@site_id='{{ site_id }}' --required
;
```
</TabItem>
</Tabs>
