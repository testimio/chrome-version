# chrome-version

Finds the version of Chrome (or Chromium) that is installed on your machine.

## Installation
```sh
npm install @testim/chrome-version
```

## Use
```js
(async () => {
    const { getChromeVersion } = require('chrome-version');
    const includeChromium = false;  // NOTE: set to true to also search for Chromium
    const version = await getChromeVersion(includeChromium);
    console.log(version);
})();
```

## Testing
```sh
npm test
```

* If no version of chrome is installed on your machine `getChromeVersion` will return null.
