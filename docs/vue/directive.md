# 需求

为了优化用户体验:

- 当页面加载数据时, 显示 `loading...` 的信息让用户知道正在加载

- 当获取不到数据的时候, 通过显示**未获取到数据**的提示信息告知用户

## 实现方案

### 方案一

开发两个全局组件

**使用方式**: 手动引入组件 写 `dom`

### 方案二

自定义指令

实现原理：把组件生成的 dom 动态插入到指令作用的 dom 里面

#### 相较于方案一的优点

1. 更加优雅, 不需要另外写 `dom`
2. 抽离冗余逻辑, 方便对类似需求逻辑统一管理

#### 实现思路

**`mounted` 和 `updated` 与 Vue2 对应的是 `inserted` 和 `componentUpdated`**

- 以 `loading` 为例，在数据还未加载完之前显示正在加载的字样和 gif 图
- 考虑到可能要实现多个相似的指令，例如加载，无结果都可以用一样的实现方式，所以就要把具体逻辑抽离出来，需要组件作为参数（Comp）
- 在 `mounted`中
  1. 创建 Comp 实例，并存到变量 `app`
  2. 将实例挂载到新创建的 dom 上，并存到变量 `instance`
  3. 将 `instance` 赋给 `el`，这个 `el` 就是 `mounted`中的第一个参数，表示指令当前所在对象
  4. 判断指令接收的值，如果为 true，那么表示正在加载，然后将 `loading.vue` 通过 `appendChild` 添加到 `el`；如果为 false 则不进行操作
- 在 `updated` 中
  1. `loading.vue` 有自定义文本的功能，通过 props 定义`title` 并给默认值，这个功能是可选的，所以需要判断指令是否有参数，如果有参数就设置就调用 el 中设置文本的方法，如果没有参数就使用默认文本
  2. 判断新旧值是否相等，如果不相等则继续判断值为 true 还是 false
     - true：添加 `loading.vue`
     - false: 移除 `loading.vue`

##### 问题

- 当从一个指令转为另一个指令的时候，会报错，原因是当多个指令用在同一个 dom 上,就会覆盖 instance,这样就会导致后续操作出现问题
- 比如当 loading 结束,需要展示 no-result 的时候, remove 方法移除的是 no-result 组件,此时 no-result 还未创建,那么这时候就会报错
- 为了区分指令，需要保存实例到二维数组空间，从而不让上一个实例被覆盖掉，可以通过组件实例的 name 属性来作为区分的指令的 key

#### 代码:

1. 把创造 `directive` 的逻辑抽象出来

:::details create-loading-like-directive.js
<<< @/all-code/create-loading-like-directive.js
:::

2. 因为是 `dom` 操作, 为了把相同的功能都放在一起, 所以抽象出来放在 `dom.js` 里面

:::details dom.js
<<< @/all-code/dom.js
:::

3. 使用 `createLoadingLikeDirective`

:::details directive.js
<<< @/all-code/directive.js
:::

4. 在 `main.js` 注册指令

```js
import { createApp } from 'vue'
import App from './App.vue'
import loadingDirective from './components/base/loading/directive'
import noResultDirective from './components/base/no-result/directive'

createApp(App).directive('loading', loadingDirective).directive('no-result', noResultDirective)
```

5. 使用指令

```vue
<template>
	<div class="recommend" v-loading="loading">
		<!-- ... -->
	</div>
</template>

<script>
import { getRecommend } from '@/service/recommend'
import Scroll from '@/components/base/scroll/scroll'

export default {
	name: 'recommend',
	data() {
		return {
			albums: []
		}
	},
	async created() {
		const result = await getRecommend()
		this.albums = result.albums
	},
	computed: {
		loading() {
			return !this.sliders.length && !this.albums.length
		}
	},
	components: { Scroll }
}
</script>
```
