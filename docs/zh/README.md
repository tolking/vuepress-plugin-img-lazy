## 介绍

> 一个为了更好的支持图片懒加载的 vuepress 插件

**该插件将优先使用 [原生](https://caniuse.com/#feat=loading-lazy-attr) 的图片懒加载，如果浏览器不支持将通过 [IntersectionObserver](https://caniuse.com/#feat=intersectionobserver) 实现**

基于 [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy)、 [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize)

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

**如果你采用全局注册，你可以直接在 `markdown` 文件里使用**

``` md
<img-lazy src="/img.jpg" />
```

## 配置

### useNative
- Type: `Boolben`
- Default: `true`
- Required: `false`

是否使用基于原生的懒加载

### selector
- Type: `string`
- Default: `lazy`
- Required: `false`

默认的懒加载类名

### rootMargin
- Type: `String`
- Default: `200px`
- Required: `false`

设置 IntersectionObserver 的 rootMargin 属性

### prefix
- Type: `string` `Function`
- Default: `src => src && src.charAt(0) === '/' && !src.startsWith(ctx.base) ? ctx.base + src.slice(1) : src`
- Required: `false`

为图片的 src 配置前缀

## 其它说明

1. 已经默认包含 [基础路径](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84)，但不包括 markdown 文件里面的 `<img/>` 标签 <Badge text="^1.0.2"/>

如果需要同时使用 `基础路径` 与 `<img/>` 标签，请参考

``` md
<img width="500" height="300" :data-src="$withBase('/img.png')" loading="lazy" class="lazy">
```

2. 为了更好的实现懒加载，最好能够指定图片的大小（部分主题可能需要单独设置 `display` 为 `inline-block` 或者 `block`），以确保图片能够占据它本应该占据的位置
