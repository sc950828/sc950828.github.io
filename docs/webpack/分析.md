## Loader 和 Plugin 的区别？

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。

Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

## 自定义 loader

loader 是一个函数

```js
// loader本质上就是一个函数 参数是文件的内容
module.exports = function(source) {
  // source 是文件内容
  // options传递来的参数通过this.query获取 或者通过官方的loader-utils包处理获取options
  // loaderUtils.getOptions(this)能拿到options
  // return source.replace('name', this.query.name)

  // 异步
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace("name", this.query.name);
    callback(null, result);
  }, 5000);
};
```

## 自定义 plugin

插件是一个类

```js
class CopyrightWebpackPlugin {
  constructor(options) {
    // 参数在options里面
    console.log(options);
    console.log("我的自定义插件被使用了");
  }

  apply(compiler) {}
}

module.exports = CopyrightWebpackPlugin;
```
