---
title: 'regex'
date: 2023-05-04 09:05
last_modified_at: 2023-05-06 00:35
tags:
    - programming-language
    - regex
---
[Programming languages MOC](Programming%20languages%20MOC.md)
# Regex

## 8 regular expressions you should know

-   Username: `/^[a-z0-9_-]{3,16}$/`

-   Password: `/^[a-z0-9_-]{6,18}$/`

-   Hex Value: `/^#?([a-f0-9]{6}|[a-f0-9]{3})$/`

-   Email: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

-   URL: `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`

-   IP address: `/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/`

-   HTML tag: `/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/`

Via [tutsplus.com](http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149).

## Testing/explaining regex.

Use [regex101.com](https://regex101.com/) to test and explain regex.

## Examples

-   `[ ]?+`: matches any space (`+`), but the space doesn't have to be present (`?`) - note order.
