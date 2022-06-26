## 安装
```bash
npm install webpack webpack-cli -g # 全局安装
# or
npm install webpack webpack-cli -D # 安装到开发依赖
```

## 生成package.json
```bash
npm init # 在命令行配置信息
npm init -y # 使用默认配置
```

## 使用webpack
```bash
webpack # 使用全局webpack
./node_modules/.bin/webpack # 使用局部webpack
```

一般会用局部`webpack`, 那么这样就会很麻烦

### 解决方式
```bash
npx webpack
```
这种方式也很奇怪，一般不用

- 在`package.json`中有个 `scripts` 脚本，在里面可以配置命令

```json
"scripts": {
  "build": "webpack"
}
```

## 指定入口
在进行打包的时候，默认会找到 `src` 目录下的 `index.js` 文件，如果没有就会报错;如果需要指定其他文件作为入口文件（以 `main.js` 为例）可以敲入以下命令
```bash
npx webpack --entry ./src/main.js # entry 指定入口
npx webpack --entry ./src/main.js --output-path ./build # output-path 指定出口

```
在真实项目中，不会直接用以上命令来指定出入口，而是新建一个文件: `webpack.config.js`,这个文件的名字一般是固定的，如果想要其他名字例如:`what.config.js`，那么就需要在package.json中修改脚本：
```json
"scripts": {
  "build": "webpack --config what.config.js"
}
```
**这里只能用ES5语法，如果要用ES6还需要额外的配置**
- `output` 的 `path` 接收一个绝对路径，例如: `C:/User/name/Desktop/project_name/build`，但是写绝对路径很麻烦，所以采用拼接的方式来设置路径，这里引用 `node` 中 `path` 的 `resolve` 方法; `filename` 指定打包后的文件名

```js
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  }
}
```
