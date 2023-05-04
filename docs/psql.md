---
title: 'psql'
date: 2023-05-04 09:20
last_modified_at: 2023-05-04 09:20
tags:
    - command-line-tool
    - database
    - mysql
    - sql
---

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
