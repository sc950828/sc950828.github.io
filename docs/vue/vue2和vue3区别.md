## 代码检查

vue2 采用 flow 进行静态类型检查工具，而 vue3 使用 typescript 作为代码检查工具。

## 语言

vue2 使用 js 编写，vue3 使用 ts 编写

## 响应式

vue2 使用 Object.defineProperty 方法，vue3 使用 proxy 方法。

### vue2

1. Object.defineProperty()这个 api 无法原生的对数组进行响应式监听
2. 实现过程中对于深度嵌套的数据，递归消耗大量性能
3. 我们注意到，Object.defineProperty()这种实现，以及数组的实现，都存在一个问题，那就是没办法监听到后续的手动新增删除属性元素，比如数组，直接通过索引去设置和改变值是不会触发视图更新的，当然 vue 为我们提供了 vue.set 和 vue.delete 这样的 api，但终究是不方便的

### vue3

1. Proxy 支持监听原生数组
2. Proxy 的获取数据，只会递归到需要获取的层级，不会继续递归
3. Proxy 可以监听数据的手动新增和删除

## composition API

vue3 的 composition API 可以使相同模块写在一起，不像 vue2 一样分开的很散。将零散分布的逻辑组合在一起来维护，并且还可以将单独的功能逻辑拆分成单独的文件。

## 全局 API

在 Vue3 中，全局和内部 API 都经过了重构，并考虑到了 tree-shaking 的支持。因此，全局 API 现在只能作为 ES 模块构建的命名导出进行访问。

vue2

```js
this.$nextTick(() => {});
```

vue3

```js
import { nextTick } from "vue";
nextTick(() => {
  // 一些和DOM有关的东西
});
```

## 生命周期不同

vue3 中生命周期需要自己引入，而且新增了两个生命周期方法 onRenderTriggered 和 onRenderTricked
