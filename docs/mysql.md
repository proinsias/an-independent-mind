---
title: 'mysql'
date: 2023-05-04 09:01
last_modified_at: 2023-06-20 14:48
tags:
    - command-line-tool
    - database
    - mysql
    - sql
    - reviewed
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Databases MOC](Databases%20MOC.md)
[sql](sql.md)

# mysql

## having

Use the `HAVING` clause with the `GROUP BY` clause to specify a filter condition for groups of rows or aggregates. If you omit the `GROUP BY` clause, the `HAVING` clause behaves like the `WHERE` clause.

```mysql
SELECT
    ordernumber,
    SUM(quantityOrdered) AS itemsCount,
    SUM(priceeach*quantityOrdered) AS total
FROM orderdetails
GROUP BY ordernumber
HAVING total > 1000
;
```

## Miscellaneous CLI

```shell
# Execute sql in mysql via command line.
mysql --host 127.0.0.1 --user root --password="${MYSQL_ROOT_PASSWORD}" --execute "show databases;"
```

## CLI host setting

Remember that `localhost` and `127.0.0.1` are not the same thing when it comes to the `--host` flag of the `mysql` tool.

If host is set to `localhost`, then a socket or pipe is used. If host is set to `127.0.0.1`, then the client is forced to use TCP/IP.

Via [Stack Overflow](http://stackoverflow.com/a/16402615/1257318).
