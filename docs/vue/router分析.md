## 安装

```js
Vue.use(VueRouter);
```

vue 里面的插件必须提供 install 方法来安装。VueRouter 也不例外。

Vue-Router 安装最重要的一步就是利用 Vue.mixin 去把 beforeCreate 和 destroyed 钩子函数注入到每一个组件中，beforeCreate 做一些私有属性定义和路由初始化工作。

## hash 模式

hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。另外每次 hash 值的变化，还会触发 hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听 hashchange 来实现更新页面部分内容的操作。总而言之:Hash 模式就是通过改变#后面的值,实现浏览器渲染指定的组件.

## history 模式

14 年后，因为 HTML5 标准发布。多了两个 API，pushState 和 replaceState，通过这两个 API 可以添加和替换 url 地址且不会发送请求还会在浏览器历史记录里面。同时还有 popstate 事件。然后我们便可以监听 popstate 来实现更新页面部分内容的操作

通过这些就能用另一种方式来实现前端路由了，但原理都是跟 hash 实现相同的。用了 HTML5 的实现，单页路由的 url 就不会多出一个#，变得更加美观。但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。

nginx 部署的话需要额外配置该配置项

```
location / {
  try_files $uri $uri/ /index.html;
}
```

## 常见问题

### `$route`和 `$router`的区别是什么？

1. router 为 VueRouter 的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。
2. route 是路由信息对象||跳转的路由对象，每一个路由都会有一个 route 对象，是一个局部对象，包含 path,params,hash,query,fullPath,matched,name 等路由信息参数。

### vue-router 响应路由参数的变化

```js
// 监听当前路由发生变化的时候执行
watch: {
  $route(to, from){
    console.log(to.path)
    // 对路由变化做出响应
  }
}

// 组件内导航钩子函数
beforeRouteUpdate(to, from, next){
  // to do somethings
}
```
