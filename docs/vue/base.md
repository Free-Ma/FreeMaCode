# Vue 的双向绑定原理

所谓的双向绑定是建立在 `MVVM` 的模型基础上的：

- 数据层 `Model`: 应用的数据以及业务逻辑
- 视图层 `View`: 应用的展示效果，各类的 UI 组件等
- 业务逻辑层 `ViewModel`: 负责将数据和视图关联起来

1. 数据变化后更新视图
2. 视图变化后更新数据

包含两个主要的组成部分

- 监听器 `Observer`: 对所有的数据属性进行监听
- 解析器 `Compiler`: 对每个元素节点的节令进行扫描和解析，根据指令替换数据，绑定对应的更新函数

## 具体的实现原理

1. `new Vue()` 执行初始化, 对 `data` 通过 `Object.defineProperty` 进行响应化处理, 这个过程发生在 `Observer` 中, 每个 `key` 都会有一个 `dep`
   实例来存储 `watcher` 实例数组.
2. 对模板进行编译时, `v-` 开头的关键词作为指令解析, 找到动态绑定的数据. 从 `data` 中获取数据并初始化视图, 这个过程发生在 `Compiler` 里. 如果遇到了 `v-model`, 就监听 `input` 事件,
   更新 `data` 对应的数值
3. 在解析指令的过程中, 会定义一个更新函数和 `Watcher`, 之后都应的数据变化时 `Watcher` 会调用更新函数. `new Watcher` 的过程中会去读取 `data` 的 `key`, 触发 `getter`
   的依赖收集, 将对应的 `watcher` 添加到 `dep` 里。
4. 将来 `data` 中数据一旦发生变化，会首先找到对应的 `dep`，通知所有的 `watcher` 执行更新函数。

## Coding

1. 简单实现一个响应式函数，对一个对象内的所有 `key` 添加响应式的特性。
   ::: details code
   <<< @/all-code/vue/defineProperty.js
   :::
2. 那 `Vue` 中对于数组类型是怎么处理的，简单模拟一下对于数组方法的监听
   ::: details code
   <<< @/all-code/vue/array.js
   :::
3. 能否监听对象属性的删除操作，基于 `proxy` 实现一下响应式.
   ::: details code
   <<< @/all-code/vue/proxy.js
   :::

## 虚拟 DOM，优缺点

对于真实 `DOM` 的抽象，用嵌套对象表示，用属性来描述节点，最终通过一系列的操作映射到真实 `DOM` 上。

### 优点

1. 保证性能的下限

在不进行手动优化的前提下，也能提供过得去的性能。

2. 无需手动操作 `dom`
3. 跨平台

虚拟 `dom` 本质上其实就是一个 js 对象，它可以很方便的跨平台，比如服务端渲染 比如 `uniapp`

### 缺点

- 首次渲染大量 `dom` 的时候，由于多了一层虚拟 `DOM` 的计算，会比 `innerHTML` 的插入速度慢
- 做一些针对性的优化的时候，真实 `dom` 的操作还是更快一点.

### Coding

1. 给一段数据结构，将其转换为真实的 `dom`
   ::: details code
   <<< @/all-code/vue/virsual-dom.js
   :::
