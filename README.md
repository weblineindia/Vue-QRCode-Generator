# Vue QRCode Generator

A Vue.js component for QR code generation. Designed to create QR Code image for any text supplied to the library. Free for everyone, even use it for commercial purposes and on unlimited applications.

## Table of contents

- [Vue QRCode Generator](#vue-qrcode-generator)
  - [Table of contents](#table-of-contents)
  - [Browser Support](#browser-support)
  - [Demo](#demo)
  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Available Props](#available-props)
  - [Want to Contribute?](#want-to-contribute)
  - [Need Help?](#need-help)
  - [Collection of Components](#collection-of-components)
  - [Changelog](#changelog)
  - [Credits](#credits)
  - [License](#license)
  - [Keywords](#keywords)

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |  ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- |
83.0 ✔ | 77.0 ✔ | 13.1.1 ✔ | 83.0 ✔ | 11.9 ✔ |

## Demo
[![](qrcode.gif)](https://github.com/weblineindia/Vue-QRCode/qrcode.gif)

## Getting started

Install the npm package:

``` bash
npm install vue-weblineindia-qrcode
#OR
yarn add vue-weblineindia-qrcode
```

## Usage

Use the `<vue-weblineindia-qrcode`> component:

```vue
<template>
  <Vue-qr-code value="https://www.weblineindia.com/" />
</template>

<script>
// import vue-weblineindia-qrcode
import VueQrCode from 'vue-weblineindia-qrcode'

export default {
  components: {
    VueQrCode,
  },
}
</script>
```

## Available Props

| prop                   | type (range)                                                       | default value                               |
| ---------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| `version`              | `number` (1-40)                                                    | N/A                                         |
| `errorCorrectionLevel` | `String` ('low', 'medium', 'quartile', 'high', 'L', 'M', 'Q', 'H') | `'M'`                                       |
| `maskPattern`          | `number` (0-7)                                                     | N/A                                         |
| `toSJISFunc`           | `Function`                                                         | N/A                                         |
| `margin`               | `number`                                                           | `4`                                         |
| `scale`                | `number`                                                           | `4`                                         |
| `width`                | `number`                                                           | N/A                                         |
| `color`                | `{ dark: string; light:string }`                                   | `{ dark: '#000000ff', light: '#ffffffff' }` |
| `type`                 | `string` ('image/png', 'image/jpeg', 'image/webp')                 | `'image/png'`                               |
| `quality`              | `number`(0-1)                                                      | `0.92`                                      |
| `value`                | `string | Array<{ data: string; mode?: string }>`                  | N/A                                         |


-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this VueJS QRCode generator in their software project. In case you want to customize this QRCode generator to suit your development needs, then feel free to contact our [VueJS developers](https://www.weblineindia.com/hire-vuejs-developer.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/communities.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

vue-weblineindia-qrcode is inspired by the [vue-qrcode](https://www.npmjs.com/package/vue-qrcode).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/Vue-QRCode/blob/master/LICENSE

## Keywords

 vue-weblineindia-qrcode, vue-qrcode, qrcode, qrcodegen, vue
