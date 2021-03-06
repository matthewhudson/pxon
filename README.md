# PXON

> A JavaScript module for importing, creating, manipulating, and exporting PXON data.

> [Full API Documentation &rarr;](https://thematthewhudson.com/pxon/)

[![Build Status](https://travis-ci.org/matthewhudson/pxon.svg?branch=master)](https://travis-ci.org/matthewhudson/pxon)
[![Coverage Status](https://coveralls.io/repos/github/matthewhudson/pxon/badge.svg?branch=master)](https://coveralls.io/github/matthewhudson/pxon?branch=master)
[![NPM version](https://badge.fury.io/js/pxon.svg)](http://badge.fury.io/js/pxon)

## Installation

```sh
npm install pxon
```

And then import it:

```js
// using es modules
import PXON from "pxon";

// common.js
const PXON = require("pxon").default;

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/pxon/umd/pxon.min.js"></script>
```

And then grab it off the global like so:

```js
const PXON = PXON.default;
```

## Example Usage

```js
const PXON = require("pxon").default;
const pxon = new PXON();

// Import PXON-formatted JSON.
pxon.import({ ... });

// Set some EXIF data.
pxon.artist = "Matthew Hudson";
pxon.software = "https://make8bitart.com/";

// Set a single pixel's value.
pxon.setPixel(x, y, color, size);

// Iterate over an ES6 HashMap of all pixels.
for (let [key, pixel] of pxon.pixels) {
  console.log(`${key}, ${pixel}`);
  // <- 0:0, { x: 0, y: 0, size: 1, color: 'rgba(0, 0, 0, 1)' }
}

// Returns a PXON-formatted object.
console.log(pxon.export());
```

### [Full API Documentation &rarr;](https://thematthewhudson.com/pxon/)

## Additional Resources

* [PXON Specification](http://jennmoney.biz/pxon/) - specs for the "pixel art object notation" format
* [make8bitart.com](https://make8bitart.com/) - pixel art painting app
* [pxonloop](http://pxonloop.glitch.me/) - a pxon playground
* [image-to-pxon](http://image-to-pxon.glitch.me/) - app that converts image to pxon

## Notes

* The non-canonical `dataURL` field is not currently supported.
* The non-canonical `size` field defaults to `1`.
