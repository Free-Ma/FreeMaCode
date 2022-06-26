// JSON.parse(JSON.stringify(obj))
const obj = {
	a: 1,
	b: 2,
	c: {
		c1: 3,
		c2: {
			c11: 4,
			c12: 5
		},
		c3: 6
	},
	d: 7
}

const newObj = deepClone(obj)
newObj.c.c2.c11 = 9
console.log(newObj)
console.log(obj)

function deepClone(obj, hash = new WeakMap()) {
	if (obj === null) {
		return null
	}

	if (obj instanceof Date) {
		return new Date(obj)
	}

	if (obj instanceof RegExp) {
		return new RegExp(obj)
	}

	if (typeof obj !== 'object') {
		return obj
	}

	if (hash.has(obj)) {
		return obj
	}

	const resObj = Array.isArray(obj) ? [] : {}

	hash.set(obj, resObj)

	Reflect.ownKeys(obj).forEach(key => {
		resObj[key] = deepClone(obj[key], hash)
	})

	return resObj
}
