---
title: "macOS"
date: 2023-05-04 09:04
last_modified_at: 2023-05-10 10:50
tags:
  - command-line-tool
  - operating-system
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Operating systems MOC](Operating%20systems%20MOC.md)

# macOS

```dataview
list from [[]] and !outgoing([[]])
```

## Command line

```shell
# Copy from the command line.
echo "abc" | pbcopy

# Paste text to the command line.
pbpaste

# Take many different kinds of screenshots.
screencapture

# Use Cocoa's text engine to manipulate documents and convert them between various formats, including .doc, .txt, .html and .rtf.
textutil

# Securely Remove File.
srm /path/to/file

# Preview via QuickLook.
qlmanage -p /path/to/file

# Rings the terminal bell (if enabled) and puts a badge on it.
tput bel

# Install all available software updates.
sudo softwareupdate -ia
# Show available software updates.
sudo softwareupdate -l

# Force purging of memory.
sudo purge

# Use the FileMerge diff tool.
opendiff a.txt b.txt

# List disk identifiers.
diskutil list
# Secure erase a disk.
diskutil secureErase 0 disk3
# If you are doing this on a FileVault disk, you must first unlock the disk in Disk Utility, then erase the disk via Terminal.

# Set ComputerName, the "user-friendly" name visible under the Sharing preference panel.
scutil --set ComputerName "MacBook Pro"
# Set HostName, the name visible from the command line and over SSH and Remote Login.
scutil --set HostName "centauri"
# Set LocalHostName, the identifier used by Bonjour and AirDrop.
scutil --set LocalHostName "MacBookPro"

# Remove protected flag.
sudo chflags -R nouchg /path/to/file/or/folder

# Convert audio file to iPhone ringtone.
afconvert input.mp3 ringtone.m4r -f m4af

# Play audio file.
afplay -q 1 filename.mp3

# Renew DHCP lease.
sudo ipconfig set en0 DHCP

# Clear DNS cache.
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder

# Show application using a certain port.
sudo lsof -i :80

# Join a Wi-Fi Network.
networksetup -setairportnetwork en0 WIFI_SSID WIFI_PASSWORD

# Turn on Wi-Fi Adapter.
networksetup -setairportpower en0 on

# Add Gatekeeper exception.
spctl --add /path/to/Application.app

# Launch Screen Saver.
open /System/Library/Frameworks/ScreenSaver.framework/Versions/A/Resources/ScreenSaverEngine.app

# Lock screen.
/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend

# Compare two folders.
diff -qr /path/to/folder1 /path/to/folder2

# Shutdown.
sudo poweroff

# Show build number of OS.
sw_vers

# Convert clipboard to plain text.
pbpaste | textutil -convert txt -stdin -stdout -encoding 30 | pbcopy

# Convert tabs to spaces for clipboard content.
pbpaste | expand | pbcopy

# Preview via QuickLook.
qlmanage -p /path/to/file

# Enable root user.
dsenableroot
# Disable root user.
dsenableroot -d


```

## Links

- [sudo-touchid](https://github.com/artginzburg/sudo-touchid): Permanent TouchID support for `sudo`.
- [You can just right-click on a 2-factor authentication code to set it up with iCloud Keychain](https://twitter.com/rafahari/status/1456013646144933893).
