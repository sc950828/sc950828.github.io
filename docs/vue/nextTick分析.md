## nextTick 原理

Vue.js 实现了一个 nextTick 函数，传入一个 cb ，这个 cb 会被存储到一个队列中，在下一个 tick 时触发队列中的所有 cb 事件。

因为目前浏览器平台并没有实现 nextTick 方法，所以 Vue.js 源码中分别用 Promise、setTimeout、setImmediate 等方式在 microtask（或是 task）中创建一个事件，目的是在当前调用栈执行完毕以后（不一定立即）才会去执行这个事件。

由于 nextTick 会将回调添加到任务队列中延迟执行，所以在回调执行之前，如果反复使用 nextTick，Vue 并不会将回调添加到任务队列中，只会添加一个任务。Vue 内部有一个列表来存储 nextTick 参数中提供的回调，当任务触发时，以此执行列表里的所有回调并清空列表。

```js
let callbacks = [];
let pending = false;

function nextTick(cb) {
  callbacks.push(cb);

  if (!pending) {
    pending = true;
    // 这里可能是使用promise setImmediate setTimeout实现
    setTimeout(flushCallbacks, 0);
  }
}

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}
```

### 什么是异步渲染？

当数据在同步变化的时候，页面不会立即重新渲染。而是在所有的数据变化操作做完之后，页面才会得到响应，完成页面渲染。就像在熟悉的 setTimeout 里的回调函数的执行一样，这就是的异步渲染。

### 为什么 Vue 使用异步更新队列？

简单来说，就是提升性能，提升效率。这就是异步更新策略的效果，相同的 Watcher(通过 id 区分) 对象会在这个过程中被剔除，在下一个 tick 的时候去更新视图，从而达到性能优化。

### 如何解决一次事件循环组件多次状态改变只需要一次渲染更新？

其实很简单，就是将收到的 watcher 实例加入队列里缓存起来，并且再添加队列之前检查这个队列是否已存在相同 watcher。不存在时，才将 watcher 实例添加到队列中。然后再下一次事件循环中，Vue 会让这个队列中的 watcher 触发渲染并清空队列。这样就保证一次事件循环组件多次状态改变只需要一次渲染更新。

### Vue 中如何实现异步渲染？

在 Vue 中异步渲染实际在数据每次变化时，将其所要引起页面变化的部分都放到一个异步 API 的回调函数里，直到同步代码执行完之后，异步回调开始执行，最终将同步代码里所有的需要渲染变化的部分合并起来，最终执行一次渲染操作。

这里触发渲染的异步 API 优先考虑 Promise，其次 MutationObserver，如果没有 MutationObserver 的话，会考虑 setImmediate，没有 setImmediate 的话最后考虑是 setTimeout。

### Vue 能不能同步渲染？

在我们的开发代码里，只需要加入下一句即可让你的页面渲染同步进行。

```js
import Vue from "Vue";

Vue.config.async = false;
```
