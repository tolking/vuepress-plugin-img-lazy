## 介绍

> 一个为了更好的支持图片懒加载的 vuepress 插件

**该插件不仅仅作用于 Markdown 文件，如果你的主题图片按照要求格式像是 `<img data-src="img.jpg" loading="lazy" class="lazy">`，它还适用于你的主题**

**该插件将优先使用 [原生](https://caniuse.com/#feat=loading-lazy-attr) 的图片懒加载，如果浏览器不支持将通过 lozad 实现**

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

```
![img](img.jpg)
<!-- or -->
![img](img.jpg =500x300) <!-- 最佳 -->
<!-- or -->
<img data-src="img.jpg" loading="lazy" class="lazy">
```

## 配置

### useLoading
- Type: `Boolben`
- Default: `true`

是否使用基于原生的懒加载

### selector
- Type: `string`
- Default: `lazy`

默认的懒加载类名
