---
title: 'psql'
date: 2023-05-04 09:20
last_modified_at: 2023-06-20 14:49
tags:
    - command-line-tool
    - database
    - psql
    - sql
    - reviewed
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Databases MOC](Databases%20MOC.md)
[sql](sql.md)

# psql

## Show create table

```postgresql
# Get columns.
SELECT *
FROM information_schema.columns
WHERE table_schema = 'YOURSCHEMA' AND table_name = 'YOURTABLE'
ORDER BY ordinal_position;

# Get most common indexes.
SELECT c.oid, c.relname, a.attname, a.attnum, i.indisprimary, i.indisunique
FROM pg_index AS i, pg_class AS c, pg_attribute AS a
WHERE i.indexrelid = c.oid AND i.indexrelid = a.attrelid AND i.indrelid = 'YOURSCHEMA.YOURTABLE'::regclass
ORDER BY" => "c.oid, a.attnum
```

## Miscellaneous CLI

```shell
\? # list commands
\l # list databases
\dt # list all tables in the current database
\dt *. # will list all tables in all schemas, without having to modify your search path.
\c database_name # switch databases
\i # execute commands from file
\o # send all query results to file
```
