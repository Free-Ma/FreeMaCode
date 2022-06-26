## plugin
`loader` 是用于特定的模块类型进行转换

`plugin` 可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量注入等

### CleanWebpackPlugin
每次修改一些配置，重新打包时，都需要手动删除打包(dist)文件夹
- 可以借助于一个插件来帮助我们完成，这个插件就是 `CleanWebpackPlugin`
```bash
npm i clean-webpack-plugin -D
```
安装完之后在 `webpack.config.js` 里面配置:
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}
```

### HtmlWebpackPlugin
- 我们的HTML文件是编写在根目录下的，而最终打包的文件夹中是没有 `index.html` 文件的
- 在进行项目部署时，必然也是需要有对应的入口文件 `index.html`
- 所以也需要对 `index.html` 进行打包处理

安装插件:
```bash
npm i html-webpack-plugin -D
```
配置和 `CleanWebpackPlugin` 一样

#### 实际项目中，我们希望按照指定的 `index.html` 模板进行打包
- 在根目录下创建一个 `public` 文件夹，创建 `index.html`
- 在 `webpack.config.js` 中配置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    })
  ]
}
```
**需要注意的是，`public/index.html` 使用了 `ejs` 模板，主要为了识别其中的 `BASE_URL`, 所以需要配置
`DefinePlugin`, `DefinePlugin` 是 `webpack` 内置的工具**

### CopyWebpackPlugin
public 文件夹中有些文件打包时需要直接复制，这时候就需要用到这个插件：
```bash
npm i copy-webpack-plugin -D
```
使用：
```js
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [ // 匹配
        {
          from: 'public', // 目标目录
          to: './', // 打包目录，以 output.path 作为当前目录
          globOptions: {
            ignore: [
              '**/index.html' // 忽略 public 文件夹下所有名为 index.html的文件，因为可能有多个层级的index.html, 所以要匹配所有，** 代表匹配所有
            ]
          }
        }
      ]
    })
  ]
}
```

## 调试代码
在实际项目中经常会看到报错信息，但是打包之后，仅仅显示打包的js文件中的错误，基本上无法阅读

所以需要配置模式和映射文件，配置好之后，报错信息会显示出具体的文件中的具体位置的报错
```js
module.exports = {
  mode: 'development',
  devtool: 'source-map'
}
```
