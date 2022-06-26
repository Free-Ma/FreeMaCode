# 运算符

## 指数运算

[具体用法](https://es6.ruanyifeng.com/#docs/operator#%E6%8C%87%E6%95%B0%E8%BF%90%E7%AE%97%E7%AC%A6)

```js
2 ** 2; // 4
2 ** 3; // 8

// 相当于 2 ** (3 ** 2)
2 ** (3 ** 2);
// 512

let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;
```

## 链判断运算符

[具体用法](https://es6.ruanyifeng.com/#docs/operator#%E9%93%BE%E5%88%A4%E6%96%AD%E8%BF%90%E7%AE%97%E7%AC%A6)

```js
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value

// 判断对象方法是否存在，如果存在就立即执行的例子。
iterator.return?.()

// 以下写法是禁止的，会报错
// 构造函数
new a?.()
new a?.b()

// 链判断运算符的右侧有模板字符串
a?.`{b}`
a?.b`{c}`

// 链判断运算符的左侧是 super
super?.()
super?.foo

// 链运算符用于赋值运算符左侧
a?.b = c
```

## Null 判断运算符

[具体用法](https://es6.ruanyifeng.com/#docs/operator#Null-%E5%88%A4%E6%96%AD%E8%BF%90%E7%AE%97%E7%AC%A6)

```js
// ES2020 引入了一个新的 Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为null或undefined时，才会返回右侧的值。
const headerText = response.settings.headerText ?? 'Hello, world!';
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```

## 逻辑赋值运算符

[具体用法](https://es6.ruanyifeng.com/#docs/operator#%E9%80%BB%E8%BE%91%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6)

```js
// 或赋值运算符
x ||= y;
// 等同于
x || (x = y);

// 与赋值运算符
x &&= y;
// 等同于
x && (x = y);

// Null 赋值运算符
x ??= y;
// 等同于
x ?? (x = y);

// ------------------------------------

// 老的写法
user.id = user.id || 1;

// 新的写法
user.id ||= 1;

// ------------------------------------

// 参数对象opts如果不存在属性foo和属性baz，则为这两个属性设置默认值
function example(opts) {
	opts.foo = opts.foo ?? 'bar';
	opts.baz ?? (opts.baz = 'qux');
}

function example(opts) {
	opts.foo ??= 'bar';
	opts.baz ??= 'qux';
}
```
