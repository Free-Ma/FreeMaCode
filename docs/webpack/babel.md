## babel
`babel` 是一个工具链，主要用于就浏览器或者环境中将 `ECMAScript 2015+` 代码转换为向后兼容版本的 `Javascript`

包括：语法转换、源代码转换等
```js
[1, 2, 3].map(n => n + 1);

[1, 2, 3].map(function(n) {
  return n + 1;
});
```
- `babel` 本身可以作为一个独立的工具（和 postcss 一样）
- 如果希望在命令行尝试使用 `babel`, 需要安装如下库：
  - `@babel/core`: `babel` 的核心代码, 必须安装
  - `@babel/cli`: 可以让我们在命令行使用 `babel`
```bash
npm i @babel/cli @babel/core -D
```
- 使用 `babel` 来处理源代码:
  - src: 是源文件的目录
  - `--out-dir`: 指定要输出的文件夹 `dist`
```bash
npx babel src --out-dir dist
```

- 比如需要抓换肩头函数, 那么就可以使用肩头函数转换相关的插件:
```bash
npm i @babel/plugin-transform-arrow-functions -D
npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions
```
- 将 `const` 转换为 `var`
```bash
npm install @babel/plugin-transform-block-scoping -D
npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions
```

### babel 的预设 preset
如果要转换的内容过多，一个个设置是比较麻烦的, 可以使用 `preset`
```bash
npm i @babel/preset-env -D
```
- `babel` 可以看作是一个编译器, 作用是将我们的源代码，抓换成浏览器可以直接识别的另外一段源代码

**babel 也拥有编译器的工作流程**
- 解析阶段
- 转换阶段
- 生成阶段

[一个使用js实现的编译器](https://github.com/jamiebuilds/the-super-tiny-compiler)


### babel-loader
```bash
npm i babel-loader -D
```
在 `webpack.config.js` 中配置
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // plugins: [
            //   '@babel/plugin-transform-arrow-functions',
            //   '@babel/plugin-transform-block-scoping',
            // ]
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
}
```
- 在 `babel.config.js` 中配置:
```js
// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env'
  ]
}

// webpack.config.js
{
  test: /\.js$/,
  loader: 'babel-loader'
}
```

