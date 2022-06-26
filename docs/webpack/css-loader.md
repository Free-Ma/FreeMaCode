## 打包css
`loader` 对模块的源代码进行转换，可以将 `css` 文件也看成是一个模块，通过 `import` 来加载这个模块，加载这个模块时，`webpack` 其实并不知道如何对其进行加载，所以必须制定对应的 `loader`
来完成这个功能
### 配置使用 css-loader
内联方式：`import 'css-loader![path]'` **基本不用**

cli方式：实际项目中也用得少，因为不方便管理，所以也基本不用

配置方式：在 `webpack.config.js` 文件中写明配置信息
  - `module.rules` 中允许配置多个 `loader` (因为也会继续使用其他的
    `loader`, 来完成其他文件的加载
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 1. loader写法（语法糖）
        // loader: 'css-loader'
        // 2. 完整写法
        use: [
          // {loader: 'css-loader'}
          'css-loader'
        ]
      }
    ]
  }
}
```
### style-loader
`css-loader` 只是负责将 `.css` 文件进行解析，并不会将解析之后的css插入到页面中

如果希望完成插入 `style` 的操作， 那么还需要另一个 `loader`, 就是 `style-loader`

```js
use: [
  'style-loader',
  'css-loader'
]
```
`use` 的执行顺序是从下往上，所以应该把 `css-loader` 放在最后一位
### less
实际项目中一般不会用 `css` 文件，而是使用预处理器，以 `less` 为例：
```bash
npm i less less-loader -D # 安装less以及less-loader
```
```js
use: [
  'style-loader',
  'css-loader',
  'less-loader'
]
```
### postcss
`postcss` 是一个通过 `javascript` 来转换样式的工具

这个工具可以进行一些 css 的转换和适配，比如自动添加浏览器前缀、css样式重置

但是实现这些功能，需要借助于 `postcss` 对应的插件

#### 使用 postcss
- 查找 `postcss` 在构建工具中的扩展，比如 `webpack` 中的 `postcss-loader`
- 选择可以添加你需要的 `postcss` 相关的插件

**安装 postcss**

`npm i postcss postcss-cli postcss-loader -D`

**自动给浏览器加前缀的插件**

`npm i autoprefixer -D`

**直接使用 `postcss` 工具**

`npx postcss --use autoprefixer -o end.css ./src/css/style.css`

**配置 `postcss`**
```js
// webpack.config.js
use: [
  'style-loader',
  "css-loader",
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          require('autoprefixer')
        ]
      }
    }
  }
]
```
**新建 postcss.config.js 文件**
```js
//postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

//webpack.config.js

use: [
  'style-loader',
  "css-loader",
  'postcss-loader'
]
```

### postcss-preset-env
事实上，在配置 `postcss-loader` 时，配置插件并不需要使用 `autoprefixer`

可以使用另外一个插件：`postcss-preset-env`
- `postcss-preset-env` 也是一个 `postcss` 的插件
- 它可以帮助我们将一些现代的 CSS
  特性，转成大多数浏览器认识的css，并且会根据目标浏览器或者运行时环境添加所需的 `polyfill`
- 也包括会自动帮助我们添加 `autoprefixer` (所以相当于已经内置了autoprefixer)
```bash
npm i postcss-preset-env
```
```js

//postcss.config.js
module.exports = {
  plugins: [
    require('postcss-preset-env')
  ]
}
```
