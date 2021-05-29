## 什么是 webpack?

webpack 是一个现代 JavaScript 应用程序的静态模块打包器，当 webpack 处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle。

## 安装

我们既可以全局安装也可以局部安装，推荐局部安装

```shell
# 局部安装
npm install webpack webpack-cli -D
```

我们可以在 package.json 文件里面的 scripts 里面配置打包命令，"webpack": "webpack"。或者在命令行直接运行./node_modules/bin/webpack。或者使用在命令行直接运行 npx webpack。

webpack 有默认的配置，如默认的入口文件是 ./src，默认打包到 dist/main.js。默认的配置文件是 webpack.config.js。更多的默认配置可以查看: node_modules/webpack/lib/WebpackOptionsDefaulter.js。

指定用某配置文件使用命令 webpack --config=./config/webpack.config.js

## 核心

1. 入口

2. 出口

3. 模式

4. loader

5. plugins

6. devtool

7. 开发中 dev-server

## 入口

```js
// 入口文件 总共有字符串 数组 对象三种写法

// 字符串
entry: './src/index.js',

// 数组 数组里面的文件会结合起来打包成一个chunk
entry: ['./src/index.js', './src/index2.js'],

// 下面对象的写法就是字符串写法的简写 默认名字是main
entry: {
  main: './src/index.js'
},

// 对象的写法 多个入口文件 当有多个入口文件的时候 出口需要使用占位符来命名
entry: {
  bundle1: './src/index.js',
  bundle2: './src/index2.js'
},
```

## 出口

```js
output: {
  // 文件名
  // filename: 'bundle.js',

  // 当有多个入口文件的时候 需要使用占位符来命名出口文件名 下面是一些常见占位符分类
  // [name] 文件的chunk名字
  // [id] chunk的唯一标识 从0开始
  // [hash] chunk的唯一hash值
  // [chunkhash] chunk内容的hash值
  // [contenthash] 文件内容的hash
  filename: '[name].js',

  // 文件夹路径 注意出口文件夹路径必须是绝对路径
  path: path.resolve(__dirname, "bundle")
}
```

## 模式

```js
// 模式 总共有两种模式 默认是 production 还有development可以设置
// 我们也可以在命令行--mode=production 来指定 mode 的值。
// 当设置为 development 会将 process.env.NODE_ENV 的值设为 development，production 同理。
mode: "production";
```

| 选项        | 描述                                                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| development | 会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。                                                                                                                            |
| production  | 会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin. |

```js
// webpack.development.config.js
module.exports = {
+ mode: 'development'
- plugins: [
-   new webpack.NamedModulesPlugin(),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}
```

```js
// webpack.production.config.js
module.exports = {
+  mode: 'production',
-  plugins: [
-    new UglifyJsPlugin(/* ... */),
-    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-    new webpack.optimize.ModuleConcatenationPlugin(),
-    new webpack.NoEmitOnErrorsPlugin()
-  ]
}
```

## loader

webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。

loader 是从后往前执行的，但是也可以通过配置参数调节优先级。

```js
// 配置loader
module: {
  rules: [
    // 除了使用file-loader处理文件 还可以使用url-loader处理文件
    // 使用url-loader比file-loader更强的一点是可以将限制范围内的文件直接打包在js里 减少http请求次数
    {
      test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
      // 只命中 src 目录下的 js 文件，加快 webpack 的打包速度
      include: path.resolve(__dirname, "imgs"),
      // 排除 node_modules 下面的文件，加快 webpack 的打包速度
      exclude: path.resolve(__dirname, "node_modules"),
      use: {
        loader: "file-loader",
      },
    },
    {
      test: /\.css$/,
      // 只命中 src 目录下的 js 文件，加快 webpack 的打包速度
      include: path.resolve(__dirname, "styles"),
      // 排除 node_modules 下面的文件，加快 webpack 的打包速度
      exclude: path.resolve(__dirname, "node_modules"),
      use: [
        // style-loader 主要是将css动态添加到html文件的头部
        {
          loader: "style-loader",
        },
        // css-loader主要是用来处理css之间的关系 比如使用@import这种语法
        {
          loader: "css-loader",
        },
      ],
    },
    // 解析scss 需要安装sass-loader node-sass两个包
    {
      test: /\.scss$/,
      // 只命中 src 目录下的 js 文件，加快 webpack 的打包速度
      include: path.resolve(__dirname, "styles"),
      // 排除 node_modules 下面的文件，加快 webpack 的打包速度
      exclude: path.resolve(__dirname, "node_modules"),
      // loader的执行顺序是从下到上 从右到左
      use: [
        // style-loader 主要是将css动态添加到html文件的头部
        {
          loader: "style-loader",
        },
        // css-loader主要是用来处理css之间的关系 比如使用@import这种语法
        {
          loader: "css-loader",
        },
        // 翻译sass代码
        {
          loader: "sass-loader",
        },
      ],
    },
    // 解析less 需要安装less-loader less 两个包
    {
      test: /\.less$/,
      // 只命中 src 目录下的 js 文件，加快 webpack 的打包速度
      include: path.resolve(__dirname, "styles"),
      // 排除 node_modules 下面的文件，加快 webpack 的打包速度
      exclude: path.resolve(__dirname, "node_modules"),
      // loader的执行顺序是从下到上 从右到左
      use: [
        // style-loader 主要是将css动态添加到html文件的头部
        {
          loader: "style-loader",
        },
        // css-loader主要是用来处理css之间的关系 比如使用@import这种语法
        {
          loader: "css-loader",
        },
        // 配置postcss 需要安装postcss-loader
        // 并下载需要的插件 然后配置在postcss.config.js中
        {
          loader: "postcss-loader",
        },
        // 翻译less代码
        {
          loader: "less-loader",
        },
      ],
    },

    // 一、解析es6 es+语法 需要使用到babel

    // 首先安装依赖， npm install babel-loader @babel/core @babel/preset-env -D
    // @babel/core 是 babel 的核心模块，
    // babel-loader 是 webpack 能使用 babel，
    // @babel/preset-env 是 babel 真正帮我们转化 es6 代码的预设

    // 配置 babel配置文件 babel.config.json 在里面配置插件 预设

    // 但是一些新特性没被转化 如果需要兼容很老的版本的浏览器则需要深度转换 需要使用 @babel/polyfill
    // npm install @babel/polyfill -D
    // 在我们的js入口文件引入 import "@babel/polyfill";
    // 但是@babel/polyfill 把所有的兼容低版本浏览器的方法都打包到了 bundle.js 中去，所以体积一下子就大了很多
    // 所以我们需要按需加载 就是我们使用了哪些新特性就添加哪些新特性的polyfill
    // 在babel.config.json里面配置 "useBuiltIns": "usage"
    // 配置好useBuiltIns我们就不需要在入口文件引入全部的@babel/polyfill了，它会自动解析代码 加载所需的polyfill
    // 这样大大减小了我们打包出来的bundle.js的大小
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    // babel.config.json示例
    // {
    //   presets: [
    //     [
    //       "@babel/preset-env",
    //       {
    //         useBuiltIns: "usage",
    //       },
    //     ],
    //   ],
    // },

    // 二、当我们实现自己的类库的时候，并想让类库能在低端版本浏览器中运行，
    // 如果使用了 @babel/polyfill，因为他要注入一些低端浏览器所需要的方法，他会采取一种全局注入的方式，所以有可能会影响全局环境。
    // 所以在这里我们就要换一种打包的方式，我们可以通过 @babel/plugin-transform-runtime 来实现。

    // 安装依赖
    // npm install @babel/plugin-transform-runtime @babel/runtime -D
    // npm install @babel/runtime-corejs2 -S

    // 配置babel-config.json文件
    // {
    //   "plugins": [["@babel/plugin-transform-runtime", {
    //     "corejs": 2,
    //     "helpers": true,
    //     "regenerator": true,
    //     "useESModules": false
    //   }]]
    // }

    // 三、解析react
    // 首先安装依赖 npm install --save-dev react react-dom @babel/preset-react

    // 配置babel-loader
    // {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: "babel-loader"
    //   }
    // }

    // 配置babel-config.json文件 添加对react代码的解析预设 @babel/preset-react
    // {
    //   presets: [
    //     [
    //       "@babel/preset-env",
    //       {
    //         useBuiltIns: "usage",
    //       },
    //     ],
    //     "@babel/preset-react",
    //   ],
    // },

    // 四、解析 typescript
    // 安装依赖 npm i typescript ts-loader -D
    // 配置loader
    // {
    //   test: /\.tsx?$/,
    //   include: path.resolve(__dirname, "src14"),
    //   use: {
    //     loader: "ts-loader",
    //   },
    // },
    // 使用npx ts --init 初始化tsconfig.json文件 并自定义一些配置
    // 然后就能进行ts的打包了
  ];
}
```

### 常用的 loader

1. file-loader
2. url-loader
3. style-loader
4. css-loader
5. less-loader
6. sass-loader
7. postcss-loader
8. babel-loader
9. ts-loader
10. raw-loader
11. thread-loader
12. eslint-loader
13. vue-loader

更多 loader 可以查阅 [官方 loaders](https://www.webpackjs.com/loaders/)

## plugin

webpack 中的 plugin 大多都提供额外的能力，增强 webpack 。其用于 bundle 文件的优化，资源管理与环境变量的注入等。

```js
const path = require("path");
// 自动生成index.html文件并且自动引入js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 这个插件能帮我们在打包之前先删除掉打包出来的文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src4/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "bundle4"),
  },
  mode: "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      inject: "body",
    }),
    new CleanWebpackPlugin(),
  ],
};
```

### 常用的 plugin

1. html-webpack-plugin 自动生成 index.html 文件并且自动引入 js
2. clean-webpack-plugin 这个插件能帮我们在打包之前先删除掉打包出来的文件夹
3. mini-css-extract-plugin：Webpack4.0 中将 css 从 bundle 文件中提取成一个独立的 css 文件；在 3.0 版本使用 extract-text-webpack-plugin。
4. optimize-css-assets-webpack-plugin：压缩 css 代码的插件
5. terser-webpack-plugin：压缩 js 的插件，支持压缩 es6 代码，webpack4.0 默认使用的一个压缩插件，在 3.0 版本使用 uglifyjs-webpack-plugin 来压缩 js 代码。
6. copy-webpack-plugin：将文件或者文件夹拷贝到构建的输出目录
7. zip-webpack-plugin：将打包出的资源生成一个 zip 包
8. webpack.DefinePlugin：创建一个在 编译 时可以配置的全局常量，比如设置 process.env.NODE_ENV，可以在 js 业务代码中使用。
9. webpack.DllPlugin：抽取第三方 js，使用 dll 打包，笔者会在之后 Webpack 性能优化将到。

更多 plugin 可以查阅 [官方 plugins](https://www.webpackjs.com/plugins/)

## devtool

devtool 主要是用来给我们配置 SourceMap，SourceMap 是一个映射关系。能够帮我们更好的定位源码的错误。

配置 source-map 会同步生成.map 文件，性能差。

有 inine 有这个的配置，直接会将 .map 文件直接打包到对应的 js 中去，从而加快相应的速度

有 cheap 有这个的配置，意思是 map 文件只会帮你定为到具体的 某一行，并不会把代码定位到 具体的 某一行 某一列，从而加快速度；cheap 还有一个作用，就是这个选项只使针对业务代码，也就是说只能定位到业务代码里面的错误，并不能定位到我们引用的第三方文件（比如说 loader，第三方模块）的错误。

有 module 有这个的配置，意思是 它不仅会帮我们定位 自己的业务代码中的错误，还会同时帮我们定位第三方模块的错误。

有 eval 有这个的配置，使用 eval 包裹模块代码，并且存在 //@sourceURL，这个是打包速度最快，性能最好的的一种方式，但是有的时候，对于代码比较复杂的情况，它提示出来的错误可能不够全面。

![](https://xiaosu72.oss-cn-shanghai.aliyuncs.com/blog/images/upload_0c23489214690dcf65c47081556283a8.png)

### 最佳实践

开发环境下：development

提示出来的错误比较全，打包速度比较快。

```
devtool: 'cheap-module-eval-source-map'
```

生产环境下：production

即在线上环境，一般会关掉 source-map（因为没什么必要），但是有的时候，如果线上代码出了问题，我们也希望通过 source-map 快速定位问题，我们可以使用如下配置。

```
devtool: 'cheap-module-source-map'
```

## 开发中 dev-server

每次要编译代码时，手动运行 npm run build 就会变得很麻烦。

webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：

1. webpack's Watch Mode
2. webpack-dev-server
3. webpack-dev-middleware

### webpack's Watch Mode

使用 webpack --watch 就能自动监听文件然后自动打包了，但是还是需要手动打开文件手动刷新浏览器，不够自动化

### webpack-dev-server

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载。目前最流行的做法，vue react 脚手架都是使用了这种方案。

需要安装

```
npm install --save-dev webpack-dev-server
```

### webpack-dev-middleware

webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。webpack-dev-middleware 需要配合一些服务器框架使用

```
npm install --save-dev express webpack-dev-middleware
```

### 模块热替换

一般如果我们使用了 webpack-dev-server，当我们修改了项目中的文件的时候，一般会重新刷新一下页面，这会导致我们刚刚在页面中操作的东西都被还原。

模块热替换（Hot Module Replacement 或 HMR）是 webpack 提供的最有用的功能之一, 它允许在运行时更新各种模块，而无需进行完全刷新。

配置

```js
// 引入webpack
const webpack = require('webpack')

devServer: {
  contentBase: './bundle6',
  open: true,
  // devServer里面添加 hot hotOnly配置
  hot: true,
  hotOnly: true // hotOnly为true的意思是 hot不生效的时候不做任何处理，为false的时候hot不生效的时候自动刷新浏览器
}

plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html'),
    inject: 'body'
  }),
  new CleanWebpackPlugin(),
  // 引入HotModuleReplacementPlugin插件
  new webpack.HotModuleReplacementPlugin()
],
```

但是热更新只支持 css 方面的改动（因为在 css-loader 里面已经给你实现了监听热更新处理），js 方面的改动我们还需要额外写代码（js 没实现 需要自己手动监听处理），手动监听热处理文件做自定义处理。在 vue 和 react 的脚手架里也实现了监听热更新处理。

```js
// 如果开启了热更新
if (module.hot) {
  // 监听number.js
  module.hot.accept("./number", () => {
    document.body.removeChild(document.getElementById("number"));
    number();
  });
}
```
