# 闭包的理解，平常用闭包的场景

## 闭包的定义

闭包是指那些能够访问自由变量的函数。

自由变量是指在函数中使用的，但既不是函数参数也不是函数局部变量的变量

- 从理论角度：所有的函数都有可能是闭包。函数中去访问全局变量就相当于是在访问自由变量

- 从实践角度
  1. 即使创建它的上下文已经被销毁了，它仍然存在。（内部函数从父函数中返回）
  2. 代码中引用了自由变量

## 应用场景

1. 柯里化函数

避免频繁调用具有相同参数的函数，同时能轻松的复用。

其实就是封装一个高阶函数。

```js
function getArea(width, height) {
	return width * height
}

const area1 = getArea(10, 20)
const area2 = getArea(10, 30)
const area3 = getArea(10, 40)
const area4 = getArea(10, 50)

function getArea(width) {
	return height => {
		return width * height
	}
}

const getTenWidthArea = getArea(10)

const area1 = getTenWidthArea(20)
const area2 = getTenWidthArea(30)
const area3 = getTenWidthArea(40)
const area4 = getTenWidthArea(50)
```

2. 使用闭包实现私有方法/变量

模块。

现代化打包方式 最终就是每个模块的代码都是相互独立的

```js
function funOne(i) {
	function funTwo() {
		console.log('数字' + i)
	}

	return funTwo
}

const fa = funOne(110)
const fb = funOne(111)
const fc = funOne(112)
```

3. 匿名自执行函数

```js
const funOne = (function () {
	let num = 0
	return function () {
		num++
		return num
	}
})()

console.log(funOne()) // 1
console.log(funOne()) // 2
console.log(funOne()) // 3
```

4. 缓存一些结果

外部函数中创建一个数组，闭包函数可以获取或者修改这个数组的值，延长了变量的生命周期。

```js
function funParent() {
	let memo = []

	function funTwo(i) {
		memo.push(i)
		console.log(memo.join(','))
	}

	return funTwo
}

const fn = funParent()
fn(1)
fn(2)
```

## 总结

- 创建私有变量
- 延长变量的生命周期

## 面试题

1. 实现一个 `compose`
   :::details Code
   <<< @/all-code/js/compose.js
   :::

2. 柯里化函数
   :::details Code
   <<< @/all-code/js/currying.js
   :::

3. koa-compose
   :::details Code
   <<<@/all-code/js/koa-compose.js
   :::
