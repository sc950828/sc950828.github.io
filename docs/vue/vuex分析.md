## 安装

```js
Vue.use(Vuex);
```

vue 里面的插件必须提供 install 方法来安装。vuex 也不例外。

vuex 使用 Vue.mixin 全局方法将 vuexInit 方法混淆进每个 vue 实例 beforeCreate 钩子中，并用 Vue 保存 Vue 对象。

```js
let Vue;

export default install (_Vue) {
  Vue = _Vue;
  Vue.mixin({ beforeCreate: vuexInit });
}
```

因为之前已经用 Vue.mixin 方法将 vuexInit 方法混淆进 beforeCreate 钩子中。

如果是根节点（`$options` 中存在 store 说明是根节点），则直接将 options.store 赋值给 `this.$store`。否则则说明不是根节点，从父节点的 `$store` 中获取。

通过这步的操作，我们已经可以在任意一个 vm 中通过 `this.$store` 来访问 Store 的实例啦～

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

## 数据的响应式

Store 的构造函数中利用 Vue 对 state 进行「响应式化」。利用 computed 对 getter 进行「响应式化」。

```js
constructor () {
   this._vm = new Vue({
       data: {
           ?state: this.state
       }
   })
}
```

## 常见问题

### 使用模块后有什么变化

使用 module 后，state 需要通过模块名获取，getters mutations actions 这些调用的方式不变。

`this.$store.state.a.xx` -> moduleA 的状态

如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。通过`模块名/xxx`访问。

### 在模块中，getter 和 mutation 和 action 中怎么访问全局的 state 和 getter？

在 getter 中可以通过第三个参数 rootState 访问到全局的 state,可以通过第四个参数 rootGetters 访问到全局的 getter。当不开启命名空间的时候 getters 和 rootGetters 是相同的，当开启了命名空间，getter 只能访问当前模块的 getters，rootGetters 是全局的 getters。

在 mutation 中不可以访问全局的 satat 和 getter，只能访问到局部的 state。只有两个参数 局部 state 和 payload 参数。

在 action 中第一个参数 context 中的 context.rootState 访问到全局的 state，context.rootGetters 访问到全局的 getter。

### 用过 Vuex 模块的命名空间吗？为什么使用，怎么使用。

默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间，如果多个模块中 action、mutation 的命名是一样的，那么提交 mutation、action 时，将会触发所有模块中命名相同的 mutation、action。
这样有太多的耦合，如果要使你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。

### 怎么在带命名空间的模块内提交全局的 mutation 和 action？

默认可以提交其它模块的 mutations actions，但是如果开启的命名空间，就只能提交本模块的 mutations actions。除非将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。

```js
this.$store.dispatch("actionA", null, { root: true });
this.$store.commit("mutationA", null, { root: true });
```

### 怎么在带命名空间的模块内注册全局的 action？

这样提交 action 就不需要传递第三个参数{ root: true }了。

```js
actions: {
  actionA: {
    root: true,
    handler (context, data) { ... }
  }
}
```

### Vuex 中 action 通常是异步的，那么如何知道 action 什么时候结束呢？

在 action 函数中返回 Promise，然后再提交时候用 then 处理

```js
actions:{
    SET_NUMBER_A({commit},data){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                commit('SET_NUMBER',10);
                resolve();
            },2000)
        })
    }
}
this.$store.dispatch('SET_NUMBER_A').then(() => {
  // ...
})
```

### 在 Vuex 插件中怎么监听组件中提交 mutation 和 action？

1. 用 Vuex.Store 的实例方法 subscribe 监听组件中提交 mutation
2. 用 Vuex.Store 的实例方法 subscribeAction 监听组件中提交 action 在 store/plugin.js 文件中写入

```js
export default function createPlugin(param) {
  return (store) => {
    store.subscribe((mutation, state) => {
      console.log(mutation.type); //是那个mutation
      console.log(mutation.payload);
      console.log(state);
    });
    // store.subscribeAction((action, state) => {
    //     console.log(action.type)//是那个action
    //     console.log(action.payload)//提交action的参数
    // })
    store.subscribeAction({
      before: (action, state) => {
        //提交action之前
        console.log(`before action ${action.type}`);
      },
      after: (action, state) => {
        //提交action之后
        console.log(`after action ${action.type}`);
      },
    });
  };
}
```

使用

```js
import createPlugin from "./plugin.js";
const myPlugin = createPlugin();
const store = new Vuex.Store({
  // ...
  plugins: [myPlugin],
});
```

### Vuex 的严格模式是什么,有什么作用,怎么开启？

在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。该功能性能消耗大，只在开发环境下开启。

```js
const store = new Vuex.Store({
  strict: env.process.NODE_ENV === "development",
});
```

### vuex 数据的持久化

可以借助 localStorage sessionStorage 自己手动实现，也可以借助`vuex-persistedstate`插件自动完成
