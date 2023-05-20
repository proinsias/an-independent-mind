---
title: "Web"
date: 2023-05-20 17:27
last_modified_at: 2023-05-20 17:29
tags:
  - web
---

# Web

```dataview
list
from [[]] and !outgoing([[]])
where file.name != "README"
```

## URLS

### The Dangers of Google’s .zip TLD

Via [@bobbyrsec](https://medium.com/@bobbyrsec/the-dangers-of-googles-zip-tld-5e1e675e59a5).

Can you quickly tell which of the URLs below is legitimate and which one is a malicious phish that drops `evil.exe`?

* [_https://github.com∕kubernetes∕kubernetes∕archive∕refs∕tags∕@v1271.zip_](https://github.com%E2%88%95kubernetes%E2%88%95kubernetes%E2%88%95archive%E2%88%95refs%E2%88%95tags%E2%88%95@v1271.zip/)
* [_https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip_](https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip)

An attacker can leverage this TLD, in combination with the @ operator and unicode character ∕ (U+2215) to create an extremely convincing phish.

As you can see in the breakdown of a URL below, everything between the scheme `https://` and the `@` operator is treated as user info, and everything after the `@` operator is immediately treated as a hostname. However modern browsers such as Chrome, Safari, and Edge don’t want users authenticating to websites accidentally with a single click, so they will ignore all the data in the user info section, and simply direct the user to the hostname portion of the URL.

![URL breakdown](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4nvKxSrAh6_m1v1ZJpXwfA.png)

For example, the URL `[https://google.com@bing.com](https://google.com@bing.com%2C/)`[,](https://google.com@bing.com%2C/) will actually take the user to `bing.com`.



## Miscellaneous

## Links

