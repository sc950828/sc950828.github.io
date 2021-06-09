## Tree Shaking

Tree Shaking 就是能检测我们 import 的代码中没有使用的部分，然后在打包的时候自动删除掉。

注意：

在 mode 是 production 的时候 webpack 自动启用了该功能

但是只能是静态声明和引用的 ES 模块，不能是动态引入和声明的。所以通过条件 import 或者 require 引入的不会被 tree-shaking 处理。

只能处理 JS 相关冗余代码，不能处理 CSS 冗余代码。

只能处理模块级别，不能处理函数级别的冗余。

开发模式下配置

```js
// 使用 开发环境配置 mode: "development"
// 开发环境虽然这样设置了但是并不会去除只会加上一个注释 /*! exports used: add */
// mode设置为production会自动开启tree-shaking 会真正的删除没用到的代码
// 1.webpack.config.js
optimization: {
  usedExports: true;
}
// 2.package.json
"sideEffects": false; // 所有的都会经过tree-shaking 但是我们有些css或者import "@babel/polyfill"这种没有导出模块的引入会受到影响 设置数组排除就行。
//`"sideEffects": ["*.css", "@babel/polyfill"]`。这样排除这里的检查。这样我们的 css 和 polyfill 引入就不受影响。
```

```js
// common.js
export const add = (a, b) => {
  console.log("add", a, b);
  return a + b;
};

export const minus = (a, b) => {
  console.log("minus", a, b);
  return a - b;
};

// index.js
import { add } from "./common";

// 使用了 tree shaking之后就不会把minus打包进来了
add(1, 2);
```

## 代码分割 code split

就是把打包的文件分成多个文件，类似定义了多个入口文件。在 webpack 中我们通过配置 optimization 选项就能利用 webpack 自动实现代码分割，提升我们的性能。

代码分割优点

1. 由一个 js 分成多个 js，页面首次加载的时候，并发加载多个 js，响应速度更快。
2. 第三方模块单独形成一个 js 包，由于版本固定，所以不需要重复打包，既加快了我们打包的速度，用户使用的时候利用缓存可以避免重复加载。

代码分割情况

1. 我们配置了 optimization 的 splitChunks 能实现代码分割。
2. 我们使用 import('xxx').then()动态异步引入的模块就算不配置 optimization webpack 也能帮我们自动代码分割。

手动配置配置

```js
optimization: {
  splitChunks: {
    // all: 不管文件是动态还是非动态载入，统一将文件做代码分割。
    // async： 将异步加载的文件做代码分割。用到的时候再加载。默认值
    // initial：将同步加载的文件做代码分割。
    chunks: "all";
  }
}
```

```js
// 同步加载 需要配置 optimization
import _ from "lodash";

console.log(_.join(["randy", "hi"], "-"));

// 异步加载的模块 就算不配置 optimization 也能代码分割
// function getComponent() {
//   // 配置chunkName
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
//     const div = document.createElement('div')
//     div.innerHTML = _.join(['randy', 'hi'], '-')
//     return div
//   })
// }

// getComponent().then(div => {
//   const root = document.getElementById('root')
//   root.append(div)
// })
```

## css 中的代码分割

使用 mini-css-extract-plugin 插件将 css 代码从 js 中抽离出来，使用 link 标签加载到 html 的 head 里面

使用 optimize-css-assets-webpack-plugin 进行 css 代码的压缩

## 代码分析 analysis

代码分析主要有两种方法

1. 在打包命令后加上 --profile --json > stats.json 生成我们打包的描述文件 stats.json， 然后把该文件上传到一些分析网站就能进行分析了。

2. 我们可以借助 webpack-bundle-analyzer 插件来分析我们打包的依赖关系和大小等。

```js
// webpack-bundle-analyzered使用 我们打包后会自动打开一个分析页面

// 安装
npm install --save-dev webpack-bundle-analyzer
// 引入
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// 使用
plugins: [new BundleAnalyzerPlugin()];
```

## prefetch preload

preload 提前加载

preload 顾名思义就是一种预加载的方式，它通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗。

prefetch 预判加载

prefetch 跟 preload 不同，它的作用是告诉浏览器未来可能会使用到的某个资源，浏览器就会在闲时去加载对应的资源，若能预测到用户的行为，比如懒加载，点击到其它页面等则相当于提前预加载了需要的资源。

区别

1. prefetch 用法跟 preload 是一样的，在兼容性方面 prefetch 比 preload 的兼容性更好，覆盖面可以达到将近 80%。
2. 对于 preload 来说，一旦页面关闭了，它就会立即停止 preload 获取资源，而对于 prefetch 资源，即使页面关闭，prefetch 发起的请求仍会进行不会中断。
3. preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源，而 prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源。所以建议：对于当前页面很有必要的资源使用 preload，对于可能在将来的页面中使用的资源使用 prefetch。

检测 preload 的支持情况

```js
const preloadSupported = () => {
  const link = document.createElement("link");
  const relList = link.relList;
  if (!relList || !relList.supports) return false;
  return relList.supports("preload");
};
```

在 webpack 中配置 prefetch preload

```js
// 我们只需要在异步动态加载的前面添加注释 webpackPrefetch或webpackPreload 即可
import(/* webpackPrefetch: true */ "ChartingLibrary");
import(/* webpackPreload: true */ "ChartingLibrary");
```

## webpack.DefinePlugin 和 webpack.ProvidePlugin

使用 webpack.DefinePlugin 和 webpack.ProvidePlugin 注意事项

1. 如果 value 是一个字符串，会被当做 code 片段
2. 如果 value 不是一个字符串，会被 stringify
3. 如果 value 是一个对象，正常对象定义即可
4. 如果 key 中有 typeof，它只针对 typeof 调用定义

使用 webpack.DefinePlugin 和 webpack.ProvidePlugin 区别

1. `webpack.ProvidePlugin`主要用来处理自动引入的变量，减少 import 或者 require。
2. `webpack.DefinePlugin` 主要是用来自定义一些全局变量。

```js
// 定义全局变量
new webpack.DefinePlugin({
  DEV: JSON.stringify("我通过DefinePlugin定义"),
});
// 这样 我们代码中就可以不用引入jquery就能使用$了 减少import或者是require
new webpack.ProvidePlugin({
  $: "jquery",
});
```

## externals

防止将某些 import 的包打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖

比如我打包了一个库文件，库文件依赖 lodash，但是我不希望我的库在打包的时候把 lodash 打包进去，我就可以把 lodash 排除出去。

```js
externals: ["lodash"];
```

这样打出来的包里面就没有包含 lodash，但是别人在使用我的库的时候就需要自己手动安装 lodash 并引入使用。

```js
import lodash from "lodash";
import mylibrary from "library";
```

## resolve

resolve 配置模块如何解析，下面主要讲解 alias、extensions、modules

### alias

alias 是给路径取别名，需要注意的是 路径需要是绝对路径

```js
alias: {
  Utilities: path.resolve(__dirname, 'src/utilities/'),
  Templates: path.resolve(__dirname, 'src/templates/')
}

// 现在，替换「在导入时使用相对路径」这种方式，就像这样：
import Utility from '../../utilities/utility';

// 你可以这样使用别名：
import Utility from 'Utilities/utility';
```

### extensions

extensions 是给我们引入的文件添加后缀。默认值为： extensions: [".js", ".json"]

```js
extensions: [".js", ".json"];

// 能够使用户在引入模块时不带扩展：
import File from "../path/to/file";
```

### modules

modules 用来告诉 webpack 解析模块时应该搜索的目录。默认值是 `modules: ["node_modules"]`

使用相对路径将类似于 Node 查找 'node_modules' 的方式进行查找，一层一层往上查找。

使用绝对路径，将只在给定目录中搜索。

### mainFiles

mainFiles 主要是用来配置默认查找的文件。

比如我们引入了一个文件夹，但是没有具体指明引入那个文件，这时候 mainFiles 就派上用场了。

```js
mainFiles: ["index", "main"];

// 这样我们引入file目录的时候 先查找是否有index文件 然后是否有main文件
import File from "../path/to/file/";
```

## resolveLoaders

resolveLoaders 用来设置查找 loader 的目录，有点类似 resolve 下的 modules

```js
resolveLoaders: {
  modules: ["node_modules", "./loaders"];
}
```

## 构建目标 target

webpack 能够为多种环境或 target 构建编译

```js
target: "web", // 编译为类浏览器环境里可用（默认）
target: "webworker", // 编译成一个 webworker
target: "node", // 编译为类 Node.js 环境可用（使用 Node.js require 加载 chunk）
target: "async-node", // 编译为类 Node.js 环境可用（使用 fs 和 vm 异步加载分块）
target: "node-webkit", // 编译为 Webkit 可用，并且使用 jsonp 去加载分块。支持 Node.js 内置模块和 nw.gui 导入（实验性质）
target: "electron-main", // 编译为 Electron 主进程。
target: "electron-renderer", // 编译为 Electron 渲染进程
```

## 多页面应用打包

有时，我们的应用不一定是一个单页应用，而是一个多页应用，那么如何使用 webpack 进行打包呢。

```js
//webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    login: "./src/login.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:6].js",
  },
  //...
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html", //打包后的文件名
    }),
    new HtmlWebpackPlugin({
      template: "./public/login.html",
      filename: "login.html", //打包后的文件名
    }),
  ],
};
```

如果需要配置多个 HtmlWebpackPlugin，那么 filename 字段不可缺省，否则默认生成的都是 index.html，如果你希望 html 的文件名中也带有 hash，那么直接修改 fliename 字段即可，例如: filename: 'login.[hash:6].html'。

看起来，似乎是 OK 了，不过呢，查看 index.html 和 login.html 会发现，都同时引入了 index.f7d21a.js 和 login.f7d21a.js，通常这不是我们想要的，我们希望，index.html 中只引入 index.f7d21a.js，login.html 只引入 login.f7d21a.js。

HtmlWebpackPlugin 提供了一个 chunks 的参数，可以接受一个数组，配置此参数仅会将数组中指定的 js 引入到 html 文件中，此外，如果你需要引入多个 JS 文件，仅有少数不想引入，还可以指定 excludeChunks 参数，它接受一个数组。

```js
//webpack.config.js
module.exports = {
  //...
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html", //打包后的文件名
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/login.html",
      filename: "login.html", //打包后的文件名
      chunks: ["login"],
    }),
  ],
};
```

执行 npm run build，可以看到 index.html 中仅引入了 index 的 JS 文件，而 login.html 中也仅引入了 login 的 JS 文件，符合我们的预期。

## 前端模拟数据

使用 devServer 的 before 钩子配合[mocker-api](https://www.npmjs.com/package/mocker-api)进行数据的模拟

mocker-api 为 REST API 创建模拟 API。在没有实际 REST API 服务器的情况下测试应用程序时，它会很有用。

```
npm install mocker-api -D
```

在项目中新建 src19 文件夹，新建 mock.js 文件，模拟两个接口。

```js
module.exports = {
  "GET /user": { name: "randy" },
  "POST /login/account": (req, res) => {
    const { password, username } = req.body;
    if (password === "888888" && username === "admin") {
      return res.send({
        status: "ok",
        code: 0,
        token: "token",
        data: { id: 1, name: "randy" },
      });
    } else {
      return res.send({ status: "error", code: 401 });
    }
  },
};
```

在 webpack.config.js 中引入

```js
const apiMocker = require('mocker-api');

devServer : {
  contentBase: './bundle19',
  open: true,
  // 加载mock接口
  before(app){
    apiMocker(app, path.resolve('./src19/mock.js'))
  }
},
```

新建 index.js，在里面请求接口，这样就能看到模拟的接口数据了

```js
fetch("user")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch("/login/account", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "admin",
    password: "888888",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```
