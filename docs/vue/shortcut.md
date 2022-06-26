# 需求

- 刚才实现了模块列表，那么还需要一个侧边导航栏来对应模块，导航栏使用 `fixed` 定位在右侧，从 a 到 z 一次往下排列
- 当滚动列表时，导航栏要高亮显示对应的字母，比如说标题为 g，那么导航栏中的 g 就要高亮
- 点击导航栏中的字母，需要将列表定位到对应的模块
- 在导航栏中滑动的时候，也需要滑动列表到对应的模块，并且高亮效果一直跟随滑动位置

## 思路

1. 实现固定标题的时候，保存了当前模块的下标，那么就可以使用这个下标来高亮对应的导航
2. 点击导航的时候移动到对应的模块，那么就需要知道点击的是哪个字母，这里使用一个小技巧，使用自定义属性 `data-index` 作为 `li` 标签的属性，值为 `v-for` 循环的 `index`，然后通过 `e.target.dataset.index` 获取到对应的 `index`，接下来就可以使用 `better-scroll` 的事件 `scrollToElement` 来将列表移动到对应的模块
3. 接下来是滑动的效果，通过 `touchstart` 和 `touchmove` 事件可以拿到手指按下时的坐标(y1)和手指移动时的坐标(y2)，`touchmove` 的纵坐标减去 `touchstart` 的纵坐标求得一个差，那么这个差除以每个锚点的高度，这样就可以知道偏移了几个身位，然后根据之前的索引加上这个差，就可以求得 `touchmove` 时的索引，然后还是调用 `scrollToElement` 事件将列表移动到对应的模块
4. `touchmove` 的时候鼠标移动到外面的话，就会导致 index 不在导航区间内了，所以需要限制 index 的值等于锚点区间内，通过`Math.max(0, Math.min(shortcutList.value.length-1, index))`这个技巧可以限制 index
5. `touchmove` 的时候鼠标在导航盒子内，锚点区域之外滚动的话，index 将是一个 NaN，这是因为 index 一开始是从 li 标签中 `data-index` 获取的，所以当在 li 标签之外的盒子进行拖动和点击的时候，就没有这个`data-index`，所以需要判断，如果 index 为 NaN 那就什么都不做

### 具体代码

:::details Vue
<<< @/all-code/index-list.vue
:::

:::details use-shortcut.js
<<< @/all-code/use-shortcut.js
:::
