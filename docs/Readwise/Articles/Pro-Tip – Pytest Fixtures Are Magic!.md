# Pro-Tip – Pytest Fixtures Are Magic!

![rw-book-cover](https://www.revsys.com/static/icons/apple-touch-icon.10b562419492.png)

## Metadata
- Author: [[Frank]]
- Full Title: Pro-Tip – Pytest Fixtures Are Magic!
- Category: #articles
- URL: https://pycoders.com/link/10989/tdbzpkeuqt

## Highlights
- Callables to make other things
  You can have fixtures that return functions or other callables to make it easier to inject them into your tests: ([View Highlight](https://read.readwise.io/read/01h3dgq4f8paysd75jfmde5grf))
- You can define a fixture to automatically be included for all of your tests without specifying it as an argument to each test individually.
  @pytest.fixture(autouse=True)
  def global_thing():
  return 'globals-are-usually-bad-ok' ([View Highlight](https://read.readwise.io/read/01h3dgre31gxgmcpdz3zktyhex))
- pytest comes with a bunch of built-in fixtures as well. I admit I didn't even know about some of these for a long time and they can come in very handy.
  Some examples include:
  • `tmpdir` returns a temporary directory path object that is unique to each test
  • `capsys` fixture for capturing stdout and stderr
  • `caplog` fixture that captures logging output
  • `monkeypatch` quickly and easily monkeypatch objects, dicts, etc.
  • `cache` a cache object that can persist state between testing sessions ([View Highlight](https://read.readwise.io/read/01h3dgsd37qmjskx01t81jv929))
