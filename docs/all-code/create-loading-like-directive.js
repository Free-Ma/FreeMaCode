import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
	return {
		mounted(el, binding) {
			// 为Comp组件创建vue实例
			const app = createApp(Comp)
			// 将实例挂载到新创建的 dom
			const instance = app.mount(document.createElement('div'))
			// 获取组件实例的 name 属性
			// 当多个指令用在同一个 dom 上,就会覆盖 instance,这样就会导致后续操作出现问题
			// 比如当 loading 结束,需要展示 no-result 的时候, remove 方法移除的是 no-result 组件,此时 no-result还未创建,那么这时候就会报错
			const name = Comp.name
			// 初始化组件实例为对象
			if (!el[name]) {
				el[name] = {}
			}
			// 为了区分指令,保存实例到二维数组空间,从而不让上一个实例被覆盖掉
			el[name].instance = instance

			if (binding.value) {
				append(el)
			}
		},
		updated(el, binding) {
			const name = Comp.name
			const title = binding.title
			if (typeof title !== 'undefined') {
				el[name].instance.setTitle(title)
			}
			if (binding.value !== binding.oldValue) {
				binding.value ? append(el) : remove(el)
			}
		}
	}

	function append(el) {
		const name = Comp.name
		const style = getComputedStyle(el)
		// 因为组件是absolute定位，所以el需要除了static之外的定位以保证loading在中间
		if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
			addClass(el, relativeCls)
		}
		el.appendChild(el[name].instance.$el)
	}

	function remove(el) {
		const name = Comp.name
		removeClass(el, relativeCls)
		el.removeChild(el[name].instance.$el)
	}
}
