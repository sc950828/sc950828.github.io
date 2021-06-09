(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{417:function(t,e,a){"use strict";a.r(e);var s=a(44),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"gzip-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip-压缩"}},[t._v("#")]),t._v(" Gzip 压缩")]),t._v(" "),a("p",[t._v("使用 Gzip 压缩的话，我们有两种方案，第一种在构建的时候就打包成 Gzip 文件，这样我们部署访问的时候就不需要额外进行 Gzip 压缩开销了。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 webpack 构建的时候，使用 compression-webpack-plugin 插件，把项目打包成 Gzip 文件，加速请求获取时间，提升响应速度。")])]),t._v(" "),a("li",[a("p",[t._v("在使用 nginx 部署项目的时候，还可以使用 nginx 的 Gzip 功能，压缩代码。")])])]),t._v(" "),a("h2",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" keep alive")]),t._v(" "),a("p",[t._v("http1.1 默认开启 kepp alive。")]),t._v(" "),a("p",[t._v("减少频繁 http 连接关闭开销")]),t._v(" "),a("p",[t._v("响应头")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Connection: keep-alive\n")])])]),a("p",[t._v("nginx 默认开启 keep alive")]),t._v(" "),a("p",[t._v("nginx 配置 keep alive")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 不启用，65秒之内共用一个tcp连接")]),t._v("\nkeepalive_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大利用该连接发送多少个请求")]),t._v("\nkeepalive_requests "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"http-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" http 缓存")]),t._v(" "),a("p",[t._v("主要是强缓存和协商缓存")]),t._v(" "),a("p",[t._v("Cache-Control/Expires/Pragma")]),t._v(" "),a("p",[t._v("Last-Modified + if-Modified-Since")]),t._v(" "),a("p",[t._v("Etag + if-None-Match")]),t._v(" "),a("h3",{attrs:{id:"service-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-workers"}},[t._v("#")]),t._v(" service workers")]),t._v(" "),a("p",[t._v("加速重复访问")]),t._v(" "),a("p",[t._v("离线支持")]),t._v(" "),a("h2",{attrs:{id:"http2-的提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2-的提升"}},[t._v("#")]),t._v(" http2 的提升")]),t._v(" "),a("p",[t._v("只能开启 https 才能使用 http2")]),t._v(" "),a("ol",[a("li",[t._v("二进制传输")]),t._v(" "),a("li",[t._v("多路复用")]),t._v(" "),a("li",[t._v("服务器推送")])]),t._v(" "),a("h2",{attrs:{id:"服务端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),a("p",[t._v("使用服务端渲染给前端减负")]),t._v(" "),a("ol",[a("li",[t._v("加速首屏渲染时间")]),t._v(" "),a("li",[t._v("更好的 SEO")])])])}),[],!1,null,null,null);e.default=v.exports}}]);