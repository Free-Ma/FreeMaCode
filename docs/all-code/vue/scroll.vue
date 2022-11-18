<template>
	<div ref="rootRef">
		<slot></slot>
	</div>
</template>

<script>
// Vue3 hook
import useScroll from './use-scroll'
import { ref } from 'vue'

export default {
	name: 'scroll',
	props: {
		click: {
			type: Boolean,
			default: true
		},
		probeType: {
			type: Number,
			default: 0
		}
	},
	// Vue3 推荐emits以这种方式进行管理
	emits: ['scroll'],
	setup(props, { emit }) {
		const rootRef = ref(null)
		const scroll = useScroll(rootRef, props, emit)

		return { rootRef, scroll }
	}
}
</script>

<style lang="scss" scoped></style>
