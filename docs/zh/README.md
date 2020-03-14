## 介绍

> 一个为了更好的支持图片懒加载的 vuepress 插件

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

``` md
![img](/img.jpg)
<!-- or -->
![img](/img.jpg =500x300) <!-- 最佳 -->
```

## 在主题中使用 <Badge text="^1.0.1"/>

- 全局注册

``` js
// enhanceAppFile.js
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

export default ({ Vue }) => {
  Vue.component(ImgLazy.name, ImgLazy)
}
```

- 或者直接引用

``` js
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

export default {
  components: { ImgLazy }
}
```

- 使用

``` vue
<template>
  <img-lazy src="/img.jpg" />
</template>
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

## 其它说明

1. 已经默认包含 [基础路径](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84)，但不包括 markdown 文件里面的 `<img/>` 标签 <Badge text="^1.0.2"/>

如果需要同时使用 `基础路径` 与 `<img/>` 标签，请参考

``` md
<img :data-src="$withBase('/img.png')" loading="lazy" class="lazy">
```
