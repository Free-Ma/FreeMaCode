## webpack5 之前
### file-loader
要处理jpg、png 等格式的图片，需要有对应的 `loader`: `file-loader`
- `file-loader` 的作用就是帮助我们处理 `import/require()`
  方式引入的一个文件资源，并且会将它放到我们输出的文件夹中
- 可以修改它的名字和所在的文件夹

**安装 file-loader**

`npm i file-loader -D`

**配置处理图片的 Rule**
```js
{
  test: /\.(png|jpe?g|git|svg)$/i,
  use: {
    loader: 'file-loader'
  }
}
```

- 如果是给 `src` 赋值，那么图片必须要导入进来，这样 `webpack` 才会把它当成一个模块
```js
import aImg from '../img/1.jpg'

const imgEl = document.createElement('img')
imgEl.src = aImg

document.body.appendChild(imgEl)
```

#### 文件命名规则
处理后的文件名称按照一定的规则进行显示
- 比如保留原来的文件名、扩展名，同时为了防止重复，包含一个 `hash` 值等

这个时候可以使用 `PlaceHolders` 来完成，`webpack` 给我们提供了大量的 `PlaceHolders` 来显示不同的内容
- 可以在文档中查阅自己需要的 [placeholder](https://webpack.js.org/loaders/file-loader/#placeholders)

几个最常用的 placeholder:
- `[ext]`: 处理文件的扩展名
- `[name]`: 处理文件的名称
- `[hash]`: 文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）
- `[contentHash]`: 在 `file-loader` 中和[hash]结果是一致的（在 `webpack` 的一些其他地方不一样）
- `[hash:<length>]`: 截图hash的长度，默认32个字符太长了
- `[path]`: 文件相对于 `webpack` 配置文件的路径

### url-loader
url-loader 和 file-loader 的工作方式是相似的，但是可以将较小的文件，转成 `base64` 的 URI

## webpack5

资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：

- `asset/resource` 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
- `asset/inline` 导出一个资源的 data URI。之前通过使用 url-loader 实现。
- `asset/source` 导出资源的源代码。之前通过使用 raw-loader 实现。
- `asset` 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

当在 webpack 5 中使用旧的 assets loader（如 file-loader/url-loader/raw-loader 等）和 asset 模块时，你可能想停止当前 asset 模块的处理，并再次启动处理，这可能会导致 asset 重复，你可以通过将 asset 模块的类型设置为 'javascript/auto' 来解决。

```js
{
  test: /\.(jpe?g|png|gif|svg)$/,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024 // 4kb
    }
  },
  generator: {
    filename: 'img/[name]_[hash:6][ext]'
  }
}
```
