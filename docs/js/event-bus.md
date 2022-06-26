# EventBus

1. eventemitter3

这种模式，事件的触发和回调之间是同步还是异步的

```js
const event = new Event()

event.on('test', () => console.log(111))
console.log(222)
event.emit('test')
console.log(333)
// 222
// 111
// 333
```

由此可见，是同步

手写一个 `event-bus`
:::details Code
<<< @/all-code/event-bus.js
:::
