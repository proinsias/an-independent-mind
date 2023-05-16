---
title: 'sql'
date: 2023-05-04 09:01
last_modified_at: 2023-05-16 12:13
tags:
    - database
    - sql
---

[Databases MOC](Databases%20MOC.md)

# sql

```dataview
list from [[]] and !outgoing([[]])
```

## Miscellaneous SQL

```sql
show databases;

show tables in database_name;

use database_name;

show tables;

describe table_name;

select count(*) from table_name; # this is a comment

# Use of backticks.
select *
from `AlertLog_Output_employee`
where `is_active` = 1
limit 10
;

# Multiple outputs, multiple rows.
SELECT COUNT(*)
FROM `AlertLog_Output_employee`
WHERE `is_active` = 1
UNION
SELECT COUNT(*)
FROM `AlertLog_Output_employee`
;

SELECT (
        SELECT DISTINCT 'AlertLog_Output_employee'
        FROM `AlertLog_Output_employee`
    ) AS 'table_name'
    , (
        SELECT COUNT(*)
        FROM `AlertLog_Output_employee`
        WHERE `is_active` = 1
    ) AS `active`
    , (
        SELECT COUNT(*)
        FROM `AlertLog_Output_employee`
    ) AS `total`
;

# Query schema of table.

select
    column_name
    ,data_type
    ,character_maximum_length
from INFORMATION_SCHEMA.COLUMNS
where table_name = 'table'
;

```

## Random Sample

```sql
SELECT patient_id_int
FROM C_RECORDS
GROUP BY patient_id_int
ORDER BY random()
LIMIT 100000
;
```

Doing the full aggregation on all the data and then doing the sorting is actually faster than trying to speed up the aggregation by working on a subset of the data.

The reproducible version is:

```sql
select BrowserId,
from PageViews pv
group by BrowserId
order by md5('seed' || BrowserId)
limit 100000
;
```

Via [statsblogs.com](https://web.archive.org/web/20171215121627/http://www.statsblogs.com/2014/02/26/taking-a-random-sample-on-amazon-redshift).

## Primary Key

A primary key (PK) is a single column or combination of columns (called a compound key) that uniquely identifies each row in a table. A primary key constraint contains unique, non-null values.

Via [vertica.com](https://www.vertica.com/docs/8.1.x/HTML/index.htm#Authoring/AdministratorsGuide/Constraints/PrimaryKeyConstraints.htm).
