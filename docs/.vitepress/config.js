import htmlCssModule from './module-html-css'
import jsModule from './module-js'
import vueModule from './module-vue'
import nodeModule from './module-node'
import vimModule from './module-vim'

export default {
  base: '/FreeMaCode',
  title: 'VitePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'html&css', link: '/html-css/css', activeMatch: '/html-css/' },
      { text: 'javascript', link: '/js/closure', activeMatch: '/js/' },
      { text: 'vue', link: '/vue/base', activeMatch: '/vue/' },
      { text: 'node', link: '/node/node-tools', activeMatch: '/node/' },
      { text: 'vim', link: '/vim/base', activeMatch: '/vim/' }
    ],
    sidebar: {
      '/html-css': [
        ...htmlCssModule
      ],
      '/js/': [
        ...jsModule,
      ],
      '/vue/': [
        ...vueModule
      ],
      '/node/': [
        ...nodeModule
      ],
      '/vim': [
        ...vimModule
      ]
    }
  }
}