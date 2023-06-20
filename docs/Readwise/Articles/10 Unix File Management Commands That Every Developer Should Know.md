# 10 Unix File Management Commands That Every Developer Should Know

![rw-book-cover](https://archive.ph/mP4f6/65674f8a96f9860db26b1d5213c4ed460cf91957/scr.png)

## Metadata
- Author: [[archive.ph]]
- Full Title: 10 Unix File Management Commands That Every Developer Should Know
- Category: #articles
- URL: https://tracking.tldrnewsletter.com/CL0/https:%2F%2Farchive.ph%2FmP4f6/1/01000188af53358f-4ac5b691-4538-4aac-a1b8-c0b9ab0e9edd-000000/LWFHlkiaRpc864CcQyafIZuknZWrtka8w63aMvTWFSY=304

## Highlights
- you can use the following command to get the [MIME type](https://archive.ph/o/mP4f6/https://en.wikipedia.org/wiki/Media_type) of a particular file:
  file -b --mime-type log.txt # text/plain ([View Highlight](https://read.readwise.io/read/01h383yjsma7atp645yg7a91q8))
- you can use this command to find the file encoding type:
  file -b --mime-encoding unicode_test.txt # utf-8 ([View Highlight](https://read.readwise.io/read/01h383z22d8k5xnwj0ynjaazzy))
- You can use the `stat` command to get more file details, such as inode value, size, last modified dates, etc. ([View Highlight](https://read.readwise.io/read/01h383z9668xda4n6af1qpvwff))
- you can use the `--format` flag (or `-f`) to output only preferred fields ([View Highlight](https://read.readwise.io/read/01h383zx09es77h3cdg6h5ejb8))
- If you need to merge two files based on a common column field, you can use the `join` command that works the same as the relational database joining concept. ([View Highlight](https://read.readwise.io/read/01h384252vpp08nkq97qsafgtx))
- The `diff` command is your inbuilt friend.
  By default, this command will output minimal content by showing only modified lines in monochrome colors, but you can modernize the content as follows:
  diff --side-by-side --color devices.csv devices_new.csv ([View Highlight](https://read.readwise.io/read/01h3843k07c7am4z98070zvwc4))
- Want a quick tip to create your project structure in one `mkdir` hit? Try this:
  mkdir -p api/{filesystem,os,computer}/{include,utils}
  The above command creates multiple directories at once by using the [Bash brace expansion](https://archive.ph/o/mP4f6/https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html) feature and `mkdir`‘s recursive option (`-r`). ([View Highlight](https://read.readwise.io/read/01h3845jfas7qjn83yg3ptmp4x))
