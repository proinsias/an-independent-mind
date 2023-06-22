# How to Survive Your Project's First 100,000 Lines

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[verdagon.dev]]
- Full Title: How to Survive Your Project's First 100,000 Lines
- Category: #articles
- URL: https://verdagon.dev/blog/first-100k-lines?ref=refind

## Highlights
- In perfect replayability, the compiler will instrument [7](https://verdagon.dev/blog/first-100k-lines?ref=refind#note7) the code to:
  • Record any sources of non-determinism into a file. For example:
  • Record all responses you get from the network.
  • Record the seed number you used to initialize your random number generator.
  • Record all inputs from the user.
  • Have a "replay mode" where you read from that file instead. For example:
  • Instead of requesting to the network, read from that file.
  • Instead of initializing your random number generator with the current timestamp, initialize it with the number you previously wrote to the file.
  • Instead of reading input from the user, read what you previously wrote to the file. ([View Highlight](https://read.readwise.io/read/01h3d2x68gcqf684e7fk2bymw8))
