---
title: 'ssh'
date: 2023-05-04 09:05
last_modified_at: 2023-05-16 22:25
tags:
    - command-line-tool
    - ssh
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)

# ssh

## Miscellaneous

```shell
# ssh with compression and port forwarding for VNC and Jupyter.
ssh -C -L 9000:127.0.0.1:8888 -L 5901:127.0.0.1:5901 -l user 1.2.3.4
```

#jupyter #vnc
