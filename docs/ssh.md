---
title: 'ssh'
date: 2023-05-04 09:05
last_modified_at: 2023-05-26 09:27
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
ssh-keygen \
	`# Adds a comment to the generated key.` \
	-C "gleb@reys.net" \
	`# Generates a ed25519 key. ` \
	-t ed25519

# Remove all keys belonging to the specifed hostname from a `known_hosts` file.
ssh-keygen -R hostname
```

## Timeouts

### Prevent SSH timeout on the client side

If you’re on Mac or Linux, you can edit your local SSH config file in `~/.ssh/config` and add the following line:

```ssh-config
ServerAliveInterval 120
```

This will send a “null packet” every 120 seconds on your SSH connections to keep them alive.

### Prevent SSH timeout on the server side

If you’re a server admin, you can add the following to your SSH daemon config in `/etc/ssh/sshd_config` on your servers to prevent the clients to time out – so they don’t have to modify their local SSH config:

```ssh-config
ClientAliveInterval 120
ClientAliveCountMax 720
```

This will make the server send the clients a “null packet” every 120 seconds and not disconnect them until the client have been inactive for 720 intervals (120 seconds * 720 = 86400 seconds = 24 hours).

## Miscellaneous

```shell
# ssh with compression and port forwarding for VNC and Jupyter.
ssh -C -L 9000:127.0.0.1:8888 -L 5901:127.0.0.1:5901 -l user 1.2.3.4
```

#jupyter #vnc

## Links

* [SSH timeout prevention – keep SSH sessions alive](https://www.bjornjohansen.com/ssh-timeout).