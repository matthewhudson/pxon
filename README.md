# PXON

> A TypeScript library for importing, creating, manipulating, and exporting PXON data.

[![npm version](https://badge.fury.io/js/pxon.svg)](https://badge.fury.io/js/pxon)
[![npm downloads](https://img.shields.io/npm/dm/pxon.svg)](https://www.npmjs.com/package/pxon)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/pxon)](https://bundlephobia.com/package/pxon)
[![CI](https://github.com/matthewhudson/pxon/actions/workflows/main.yml/badge.svg)](https://github.com/matthewhudson/pxon/actions/workflows/main.yml)
[![Coverage Status](https://codecov.io/github/matthewhudson/pxon/branch/main/graph/badge.svg?token=aOmuqvyy4J)](https://codecov.io/github/matthewhudson/pxon)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js: v22](https://img.shields.io/badge/node-v22-green.svg)](https://nodejs.org/en/)

## Features

- 🌲 **Tree-shakable**: Import only what you need
- 🔄 **Multiple formats**: ESM, CommonJS, and UMD bundles
- 📊 **Type-safe**: Full TypeScript support with type definitions
- 📱 **Universal**: Works in Node.js and browsers

## Installation

```sh
npm install pxon
```

## Usage

PXON supports multiple import styles to fit your needs:

### ES Modules (Recommended)

```ts
import { PXON } from 'pxon';

const pxon = new PXON();
```

### CommonJS

```js
const { PXON } = require('pxon');

const pxon = new PXON();
```

### Browser via CDN

```html
<!-- Production (minified) -->
<script src="https://unpkg.com/pxon/dist/browser/pxon.min.js"></script>

<!-- Development (with helpful errors) -->
<script src="https://unpkg.com/pxon/dist/browser/pxon.js"></script>

<script>
  // The library is available as a global variable
  const pxon = new PXON();
</script>
```

## Example Usage

```ts
import { PXON } from 'pxon';

const pxon = new PXON();

// Import PXON-formatted JSON.
pxon.import({ 
  exif: {
    artist: 'Matthew Hudson',
    software: 'https://make8bitart.com/'
  },
  pxif: {
    pixels: []
  }
});

// Set some EXIF data.
pxon.artist = 'Matthew Hudson';
pxon.software = 'https://make8bitart.com/';

// Set a single pixel's value.
pxon.setPixel({ x: 0, y: 0, color: 'rgba(0, 0, 0, 1)', size: 1 });

// Get all pixels as an array
const allPixels = pxon.getAllPixels();

// Get a specific pixel
const pixel = pxon.getPixel(0, 0);

// Returns a PXON-formatted object.
console.log(pxon.export());
```

### [Full API Documentation &rarr;](https://matthewhudson.github.io/pxon/)

## Additional Resources

- [PXON Specification](http://jennmoney.biz/pxon/) - specs for the "pixel art object notation" format
- [make8bitart.com](https://make8bitart.com/) - pixel art painting app
- [pxonloop](http://pxonloop.glitch.me/) - a pxon playground
- [image-to-pxon](http://image-to-pxon.glitch.me/) - app that converts image to pxon

## Notes

- The non-canonical `dataURL` field is not currently supported.
- The non-canonical `size` field defaults to `1`.

## Development

```sh
# Install dependencies
npm install

# Run development build with watch mode
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Generate API documentation
npm run docs

# Serve API documentation locally
npm run docs:serve
```

## Browser Compatibility

PXON is compatible with all modern browsers (Chrome, Firefox, Safari, Edge) and Node.js v22+. The library uses ES2020 features, so for older browser support, consider using a bundler with appropriate polyfills.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/) format
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
