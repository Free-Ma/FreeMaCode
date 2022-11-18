# Symbol

1. 用来解决属性名冲突的问题，构造唯一的属性名或变量
2. 私有属性

```js
function obj() {
	const symbol = Symbol('test')

	const obj = {}

	obj[symbol] = 'test'

	return obj
}
```

## Coding

1. 让一个对象可遍历
   ::: details Code
   <<< @/all-code/js/symbol.js
   :::

2. JSON.stringify 会忽略 symbol? 除了这个，还会忽略什么呢？

undefined function

3. 如果对象又循环引用，可以用 `JSON.stringify` 来处理吗？

会报错

4. 确定是 `stringify` 会报错，而不是 `parse` 会报错吗？

确定

5. 实现一个深拷贝
   ::: details Code
   <<< @/all-code/js/deep-clone.js
   :::

6. 请手写一个 instanceof
   ::: details Code
   <<< @/all-code/js/instanceof.js
   :::
