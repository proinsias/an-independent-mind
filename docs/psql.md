---
title: "psql"
date: 2023-05-04 09:20
last_modified_at: 2023-05-11 10:11
tags:
  - command-line-tool
  - database
  - psql
  - sql
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Databases MOC](Databases%20MOC.md)
[sql](sql.md)

# psql

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
