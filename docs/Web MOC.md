---
title: "Web"
date: 2023-05-20 17:27
last_modified_at: 2023-05-20 17:43
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

![URL breakdown](1_4nvKxSrAh6_m1v1ZJpXwfA.png)

For example, the URL `[https://google.com@bing.com](https://google.com@bing.com%2C/)`[,](https://google.com@bing.com%2C/) will actually take the user to `bing.com`.

However, if we start to add slashes to the URL that comes before the `@` operator, such as `[https://google.com/search@bing.com](https://google.com@bing.com%2C/)`, our browser will start to parse everything after the forward slash as the path, and now the `bing.com` portion of the url will be ignored, and we will be taken to `google.com`.

According to this Chromium bug report from 2016, unicode characters U+2044 (⁄) and U+2215 (∕) are allowed in hostnames, but do not get treated as forward slashes by the browser. Both of these unicode characters resemble the legitimate forward slash character U+002F (/).

If we craft a url like https://google.com∕gmail∕inbox@bing.com, it will direct the user to `bing.com`, as the U+2215 slashes are treated as part of the UserInfo portion of the url, instead of as the start of a path.

If a user wants to download a copy of the open source software Kubernetes, they would visit the Github releases section and download the url from: [https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip](https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip).

Let’s take the URL above, and replace all the forward slashes after `https://` with U+2215 (∕) slashes, and add the `@` operator before the v.1.27.1.zip [https://github.com∕kubernetes∕kubernetes∕archive∕refs∕tags∕@v1.27.1.zip](https://github.com%E2%88%95kubernetes%E2%88%95kubernetes%E2%88%95archive%E2%88%95refs%E2%88%95tags%E2%88%95@v1.27.1.zip/).

Visiting the URL above will take us to the hostname portion of the URL, `v1.27.1.zip`. Unfortunately, the `1.zip` domain has already been claimed, but we can go ahead and claim a similar URL, `v1271.zip` for $15.

We can spin up an EC2 with a simple Python Flask app and point the `v1271.zip` DNS record to our EC2. The Flask app will respond to any web request with an attachment `evil.exe`

```python
from flask import Flask, send_file from flask import Flask, Response

app = Flask(__name__)

@app. route('/')
def download_t×t():
	return Response
		'hello world',
		mimetype='text/plain',
		headers={'Content-disposition': 'attachment; filename-evil. exe"}
	)

if __name__ == '__main__':
	app.run(
		host='0.0.0.0",
		ssl_context=(
			'/etc/letsencrypt/live/v1271.zip/cert.pem',
			'/etc/letsencrypt/live/v1271.zip/privkey.pem',
		),
		port=443,
	)
```

Our malicious URL below, appears nearly indistinguishable from the legitimate URL:

> Evil:  
> [https://github.com∕kubernetes∕kubernetes∕archive∕refs∕tags∕@v1271.zip](https://github.com%E2%88%95kubernetes%E2%88%95kubernetes%E2%88%95archive%E2%88%95refs%E2%88%95tags%E2%88%95@v1271.zip/)
> 
> Legitimate: [https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip](https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip)

In an email client, we could make it even more convincing, and change the size of the `@` operator to a size 1 font, that makes it visually non-existent for the user, but still present as part of the URL

#### Detections

-   Look for domains containing U+2044 (⁄) and U+2215 (∕)
-   Look for domains containing @ operators followed by .zip files
-   Always be careful about downloading files from URLs sent by unknown recipients, and hover over URLs before clicking to see the expanded URL path

## Miscellaneous

## Links

