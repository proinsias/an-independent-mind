---
title: 'mysql'
date: 2023-05-04 09:01
last_modified_at: 2023-05-22 20:05
tags:
    - command-line-tool
    - database
    - mysql
    - sql
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Databases MOC](Databases%20MOC.md)
[sql](sql.md)

# mysql

## Miscellaneous CLI

```shell
# Execute sql in mysql via command line.
mysql --host 127.0.0.1 --user root --password="${MYSQL_ROOT_PASSWORD}" --execute "show databases;"
```

## CLI host setting

Remember that `localhost` and `127.0.0.1` are not the same thing when it comes to the `--host` flag of the `mysql` tool.

If host is set to `localhost`, then a socket or pipe is used. If host is set to `127.0.0.1`, then the client is forced to use TCP/IP.

Via [Stack Overflow](http://stackoverflow.com/a/16402615/1257318).
