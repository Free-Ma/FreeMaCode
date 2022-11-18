# 封装移动端滚动组件

## 为什么要封装

1. 如果用 `overflow: scroll` 也可以实现滚动，但是滚动效果不顺滑，其次是滚动不支持回弹
2. 一些 css 也可以实现（例如 `scroll-behavior: smooth`），但兼容性不是很好

## 使用 better-scroll 滚动库

[BetterScroll](https://better-scroll.github.io/docs/zh-CN/) 是一款重点解决各种滚动场景需求的插件

## 实现思路

- `scroll.vue` 支持插槽的方式，也就是滚动的内容部分放在插槽里面，外层盒子就可以跟 `better-scroll` 做一些联动，这样内容部分就可以实现滚动了
- 使用 composition API 来实现滚动逻辑，创建一个 `use-scroll.js` 文件，引入 `better-scroll`
- `better-scroll` 默认 `click=false`，考虑需要让组件支持点击事件，所以可以通过 `props` 管理配置项，让 `click` 默认为 `true`
- 如果还是无法滚动，很有可能是容器的高度和内容的高度是一样高，这时候就无法滚动，所以要给 `scroll` 设置高，为了确保不影响 scroll 之外的结构，还需要设置 `overflow:hidden`
- 如果内容是一个列表，列表的数据是异步获取的，那很有可能在初始化 `better-scroll` 的时候还没有获取到数据，列表自然也就没有渲染
- 使用 `@better-scroll/observe-dom` 插件，当这些 DOM 元素发生变化时，将会触发 scroll 的 refresh 方法，之后滚动就没问题了
- 如果需要监听滚动事件来完成一系列的操作，那么还需要传入配置 `probeType`，默认为 0，通过 `props` 管理配置项，让 `probeType` 默认为 `0`

## 具体代码

:::details scroll.vue
<<< @/all-code/vue/scroll.vue
:::

:::details use-scroll.js
<<< @/all-code/vue/use-scroll.js
:::
