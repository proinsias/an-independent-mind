---
title: 'ssh'
date: 2023-05-04 09:05
last_modified_at: 2023-05-26 09:14
tags:
    - command-line-tool
    - ssh
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)

# ssh

## Key generation

ed25519 is a cryptography solution implementing Edwards-curve Digital Signature Algorithm (EdDSA) with a number of cool improvements:

-   It’s faster: to generate and to verify.
-   It’s more secure
-  It’s more resilient against hash-function collision attacks, types of attacks where large numbers of keys are generated with the hope of getting two different keys have matching hashes.
-  Its keys are smaller – this, for instance, means that it’s easier to transfer and to copy/paste them.

```shell
# 
ssh-keygen \
	`# Adds a comment to the generated key.` \
	-C "gleb@reys.net" \
	`# Generates a ed25519 key. ` \
	-t ed25519
```

## Miscellaneous

```shell
# ssh with compression and port forwarding for VNC and Jupyter.
ssh -C -L 9000:127.0.0.1:8888 -L 5901:127.0.0.1:5901 -l user 1.2.3.4
```

#jupyter #vnc
