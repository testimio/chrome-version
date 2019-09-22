# chrome-version

Finds the version of Chrome that is installed on your machine.

## Use
```js
const { getChromeVersion } = require('chrome-version');
const version = await getChromeVersion();
console.log(version);
```

* If no version of chrome is installed on your machine `getChromeVersion` will return null.
