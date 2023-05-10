---
tags:
  - todo
date: 2023-05-10 08:10
last_modified_at: 2023-05-10 10:50
---

Description: Terminal record with bare bash shell

Command: ttyrec -e "/bin/bash --noprofile --norc"

Tag: terminal ttyrec

Description: Terminal record session to animated gif

Command: ttygif ttyrecord

Tag: terminal ttyrec

Description: Terminal record animated gif to mp4

Command: ffmpeg -i tty.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" tty.mp4

Tag: terminal ttyrec
