## 搭建vue环境

```bash
npm install vue
npm install @vue/compiler-sfc vue-loader -D
```

```js
// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  module: {
    rules: [
      {
        test: /.\vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

// main.js
import { createApp } from 'vue'

import app from 'App.vue'

createApp(app).mount('#app')
```
