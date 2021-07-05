## 安装

```js
Vue.use(Vuex);
```

所以我们的插件需要提供一个 install 方法来安装。

```js
let Vue;

export default install (_Vue) {
  Vue.mixin({ beforeCreate: vuexInit });
  Vue = _Vue;
}
```

我们采用 Vue.mixin 方法将 vuexInit 方法混淆进 beforeCreate 钩子中，并用 Vue 保存 Vue 对象。

```js
function vuexInit() {
  const options = this.$options;
  if (options.store) {
    this.$store = options.store;
  } else {
    this.$store = options.parent.$store;
  }
}
```

因为之前已经用 Vue.mixin 方法将 vuexInit 方法混淆进 beforeCreate 钩子中，所以每一个 vm 实例都会调用 vuexInit 方法。

如果是根节点（`$options` 中存在 store 说明是根节点），则直接将 options.store 赋值给 `this.$store`。否则则说明不是根节点，从父节点的 `$store` 中获取。

通过这步的操作，我们已经可以在任意一个 vm 中通过 `this.$store` 来访问 Store 的实例啦～

## 数据的响应式

Store 的构造函数中利用 Vue 对 state 进行「响应式化」。

```js
constructor () {
   this._vm = new Vue({
       data: {
           ?state: this.state
       }
   })
}
```
