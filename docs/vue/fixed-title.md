# 需求

- 根据字段名对列表进行从 `a-z` 分块，每个块都会展示对应的字母标题，并且在下一个标题碰到当前标题的时候，需要有一个往上顶的效果

## 思路

1. 创建一个数组 `listHeights`，搜集每个模块的高度，数组第一个值为 0，表示列表的顶部，第一个模块的 `clientHeight` 表示第二个模块的顶部，然后累加所有的 `clientHeight` 并添加到 `listHeights` 里面
2. 因为列表的数据是从 `props` 接收过来的，所以就监听从 `props` 接收过来的列表数据并使用 `nextTick` 等待列表渲染完成后再获取到正确的列表高度
3. 然后监听纵向滚动，这里使用 `better-scroll` 监听滚动事件，声明一个 `ref` 来初始化 `scrollY` 为 0，然后监听 `scrollY`，这样 `watch` 接收的 `newVal` 就可以对比 `scrollY` 值就可以与列表高度进行对比，从而使用 `for` 循环判断模块落在哪个区间内，并且还需要保存 `for` 循环的下标来作为展示标题所需要的下标，此处用 `currentIndex` 来表示
4. 因为标题额外写了个 `fixed` 布局的盒子展示，所以还需要计算出显示哪个模块的标题，使用 `currentIndex` 作为 `props.data` 的下标得出当前是哪个模块 `currentGroup`，如果 `currentGroup` 为空，那就返回空字符串，否则就返回 `currentGroup.title`，然后在 `fixed` 布局所在的盒子使用标题计算属性 `fixedTitle`
5. 然后在下一个标题碰到 `fixed` 盒子的时候，希望把他顶上去，这里使用计算属性和 `transform` 来计算偏移量， 上面监听 `scrollY` 接收的 `newVal` 就是滚动的距离(也就是视口顶部距离列表顶部的距离)，那么就可以使用下一个盒子的顶部减去 `newVal` 就是下一个标题距离视口顶部的距离（distance），这时候就可以判断当 `distance` 大于 0 并且小于 `fixed` 盒子的高度的时候，就使用 `distance` 减去 `fixed` 盒子的高度从而得到了 `fixed` 盒子的偏移量，如果不在这个区间内，就为 0，也就是列表在中间的时候固定在顶部

### 具体代码

:::details Vue
<<< @/all-code/vue/index-list.vue
:::

:::details use-fixed.js
<<< @/all-code/vue/use-fixed.js
