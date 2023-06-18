# A Simple Guide to Command Line Arguments With ArgParse

![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/0*cEmk0ipm-DAVSaq0)

## Metadata
- Author: [[Sam Starkman]]
- Full Title: A Simple Guide to Command Line Arguments With ArgParse
- Category: #articles
- URL: https://towardsdatascience.com/a-simple-guide-to-command-line-arguments-with-argparse-6824c30ab1c3

## Highlights
- Using the `nargs` parameter in `add_argument()`, you can specify the number (or arbitrary number) of inputs the argument should expect. ([View Highlight](https://read.readwise.io/read/01h33f9bc0ktpmrh5b3wnghg2m))
- What if you don’t want just 3 values, but any number of inputs? You can set `nargs='+'`, which will allow the argument to take in any number of values. ([View Highlight](https://read.readwise.io/read/01h33f9na5q9m60s9p7arnha2p))
- The method `add_mutually_exclusive_group()` let’s us do exactly that — add a group of arguments that are mutually exclusive. ([View Highlight](https://read.readwise.io/read/01h33f9x4c7t22cb1ry04wrrdx))
- Subparsers are powerful in that they allow for different arguments to be permitted based on the command being run. For example, when using the `git` command, some options are `git checkout`, `git commit`, and `git add`. Each one of these commands requires a unique set of arguments, and subparsers allow you to distinguish between them. ([View Highlight](https://read.readwise.io/read/01h33fb0eqe2ta4dxsnsav5f7z))
