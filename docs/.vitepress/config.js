import jsModule from './module-js'
import vueModule from './module-vue'
import nodeModule from './module-node'
import webpackModule from './module-webpack'

export default {
  title: 'VitePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'javascript', link: '/js/operator', activeMatch: '/js/' },
      { text: 'vue', link: '/vue/base', activeMatch: '/vue/' },
      { text: 'node', link: '/node/node-tools', activeMatch: '/node/' },
      { text: 'webpack', link: '/webpack/base-use', activeMatch: '/webpack/' },
    ],
    sidebar: {
      '/js/': [
        ...jsModule,
      ],
      '/vue/': [
        ...vueModule
      ],
      '/node/': [
        ...nodeModule
      ],
      '/webpack': [
        ...webpackModule
      ]
    }
  }
}