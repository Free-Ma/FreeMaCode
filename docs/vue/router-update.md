# 场景

- `singer.vue` ：歌手列表（歌手详情父组件）

```js
selectSinger(singer) {
  // 传递给字组件的数据
  this.selectedSinger = singer
  // 跳转路由
  this.$router.push({
    path: `/singer/${singer.mid}`
  })
}
```

- `singer-detail.vue` ：歌手详情，通过点击歌手列表的任意歌手进入到此组件，通过 `singer.vue` 传递过来的 `singer` 获取歌手所有数据
- `url` 会显示歌手 `id`：`localhost:8080/#/singer/0025NhlN2yWrP4`

## 问题

点击 `singer.vue` 的任何一个歌手，跳转到歌手详情页，由于 `singer-detail.vue` 的数据获取**依赖** `singer.vue` 传递过来的 `props`，所以当在 `singer-detail.vue` 刷新的时候，并不会接收来自 `singer.vue ` 的 `props`，这样 `singer-detail.vue` 就无法获取数据

## 预期

不通过路由跳转，仅在歌手详情页刷新的时候，也可以获取到歌手的数据

## 解决思路

点击歌手的时候把需要传递给 `singer-detail.vue` 的数据保存到 `sessionStorage`

使用 [good-storage](https://github.com/ustbhuangyi/storage#readme) 插件, 这个插件可以直接存取对象
::: details code

```js
selectSinger(singer) {
  // 传递给字组件的数据
  this.selectedSinger = singer
  // 缓存数据
  this.cacheSinger(singer)
  // 跳转路由
  this.$router.push({
    path: `/singer/${singer.mid}`
  })
},
cacheSinger(singer) {
  // 使用 good-storage库来保存数据
  storage.session.set(SINGER_KEY, singer)
}
```

:::

在 `singer-detail.vue` 通过计算属性获取歌手信息（`computedSinger`）：

- 如果传递了 props，那么直接使用 props 作为 `computedSinger` 的返回值

- 如果没有传递 props，那么从 `sessionStorage` 获取；判断本地存储获取到的数据和`url` 的 `id` 是否一致（`this.$route.params.id`）

```js
// computed
computedSinger() {
  let ret = null
  const singer = this.singer
  // 1
  if (singer) {
    ret = singer
  } else {
    // 2
    const cacheSinger = storage.session.get(SINGER_KEY)
    if (cacheSinger && cacheSinger.mid === this.$route.params.id) {
      ret = cacheSinger
    }
  }
  return ret
}
```

- 如果 `sessionStorage` 中的数据的 `id` 和 `this.$route.params.id` 不一致，那么返回一级路由
- 把 `computedSinger` 作为获取歌手数据接口的参数:

```js
created(){
  if (!this.computedSinger) {
    const path = this.$route.matched[0].path
    this.$router.push({
      path
    })
    return
  }
  const result = await getSingerDetail(this.computedSinger)
}
```
