## Introduction

> a vuepress plugin to better supporting image lazy loading

base on [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy) and [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize) and [lozad](https://github.com/ApoorvSaxena/lozad.js)

---

## Installation

``` sh
yarn add vuepress-plugin-img-lazy
# or
npm i vuepress-plugin-img-lazy
```

## Usage

``` js
module.exports = {
  plugins: [
    'img-lazy'
  ]
}
```

``` md
![img](img.jpg)
<!-- or -->
![img](img.jpg =500x300) <!-- better -->
<!-- or -->
<img loading="lazy" data-src="img.jpg" class="lazy">
```

## Options

### useLoading
- Type: `Boolben`
- Default: `true`

Use the native image [lazy-loading](https://caniuse.com/#feat=loading-lazy-attr) for the web

### selector
- Type: `string`
- Default: `lazy`

Default class name for image
