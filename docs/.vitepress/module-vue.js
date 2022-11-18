export default [
  {
    text: '基础vue',
    collapsible: true,
    items: [
      { text: 'vue2响应式原理', link: '/vue/base' }
    ]
  },
  {
    text: '工具',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Pinia', link: '/vue/pinia' }
    ]
  },
  {
    text: 'vue实际应用',
    collapsible: true,
    collapsed: true,
    items: [
      { text: '自定义指令', link: '/vue/directive' },
      { text: '滚动', link: '/vue/scroll' },
      { text: '固定标题', link: '/vue/fixed-title' },
      { text: '侧边导航栏', link: '/vue/shortcut' },
      { text: '路由刷新', link: '/vue/router-update' },
    ]
  }
]