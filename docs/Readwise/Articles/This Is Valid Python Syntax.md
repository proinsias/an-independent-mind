# This Is Valid Python Syntax

![rw-book-cover](https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffe596e59-4010-422a-b4f7-df7531fd4eca_948x948.png)

## Metadata
- Author: [[Nobody has time for Python]]
- Full Title: This Is Valid Python Syntax
- Category: #articles
- URL: https://www.bitecode.dev/p/this-is-valid-python-syntax

## Highlights
- Summary
  • `f"{0xBE_AF:.2f}"` *is what happens if you use "_" in hex, and interpolate it with a 2 decimal precision.*
  • `[*(_ for [[][:], *_] in [((1, 2), "woops")])]` *combines a generator, unpacking in a list, unpacking in a loop, and unpacking in a slice, for this delicious cryptic effect.*
  • `(lambda *数字: __import__('math').prod(数字))(*([2]*6)) == 2**6` *leverages the splat operator* `*` *for variadic parameters (as they work in a lambda) and unpacking arguments. Because* `prod()` *is not a built-in, we use the* `__import__` *function to access the module that holds it. 数字 is variable name.* ([View Highlight](https://read.readwise.io/read/01h315c7kpxqtm77d9846rd6j7))
- It's easy to get mixed up between `def func(*values)` (declare func with infinite params) and `func(*values)` (call func while unpacking arguments). ([View Highlight](https://read.readwise.io/read/01h315jjbg14csn5t8d0bxw08b))
- Now for the final touch, we must understand `import` is a statement in Python, meaning it must exist on its own line. But there is a function `__import__` that can also import modules, and calling it is an expression, so we can use it inside another expression: ([View Highlight](https://read.readwise.io/read/01h315jyw3k57bsaxgvbzhp684))
- >>> import sys >>> print("dev mode:", sys.flags.dev_mode) # if you don't know dev_mode, check it out! dev mode: False >>> print("dev mode:", import sys) Cell In[126], line 1 print("dev mode:", import sys) ^ SyntaxError: invalid syntax >>> print("dev mode:", __import__('sys').flags.dev_mode) dev mode: False ([View Highlight](https://read.readwise.io/read/01h315k6ser5fhb0mhvwv5422c))
