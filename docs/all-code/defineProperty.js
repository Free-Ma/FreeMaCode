// 简单实现一个响应式函数，对一个对象内的所有 `key` 添加响应式的特性。

const render = (key, val) => {
	console.log(`SET key=${key} val=${val}`)
}

const defineReactive = (obj, key, val) => {
	// 递归
	reactive(val)

	Object.defineProperty(obj, key, {
		get() {
			return val
		},
		set(newVal) {
			if (val === newVal) {
				return
			}
			val = newVal

			render(key, val)
		}
	})
}

const reactive = obj => {
	// 可以作为一个递归的终止条件
	if (typeof obj === 'object') {
		for (const key in obj) {
			defineReactive(obj, key, obj[key])
		}
	}
}

const data = {
	a: 1,
	b: 2,
	c: {
		c1: {
			af: 999
		},
		c2: 4
	}
}

reactive(data)

data.a = 5 // SET key=a val=5
data.b = 7 // SET key=b val=7
data.c.c2 = 5 //
data.c.c1.af = 121 // SET key=a val=121
