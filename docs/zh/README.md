## 介绍

> a vuepress plugin to better supporting image lazy loading

基于 [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy)、 [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)、 [lozad](https://github.com/ApoorvSaxena/lozad.js)

---

## 安装

``` sh
yarn add vuepress-plugin-img-lazy
# or
npm i vuepress-plugin-img-lazy
```

## 使用

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
![img](img.jpg =500x300) <!-- 最佳 -->
<!-- or -->
<img loading="lazy" data-src="img.jpg" class="lazy">
```

## 配置

### useLoading
- Type: `Boolben`
- Default: `true`

是否使用基于 [原生 web](https://caniuse.com/#feat=loading-lazy-attr) 的懒加载

### selector
- Type: `string`
- Default: `lazy`

默认的懒加载类名
