(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{411:function(t,a,s){"use strict";s.r(a);var n=s(44),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"v8-优化机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8-优化机制"}},[t._v("#")]),t._v(" v8 优化机制")]),t._v(" "),s("h3",{attrs:{id:"脚本流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本流"}},[t._v("#")]),t._v(" 脚本流")]),t._v(" "),s("p",[t._v("就是对于超过 30kb 的 js 文件会边下载边解析")]),t._v(" "),s("h3",{attrs:{id:"字节码缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节码缓存"}},[t._v("#")]),t._v(" 字节码缓存")]),t._v(" "),s("p",[t._v("重复使用的字节码片段会缓存")]),t._v(" "),s("h3",{attrs:{id:"懒解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒解析"}},[t._v("#")]),t._v(" 懒解析")]),t._v(" "),s("p",[t._v("对于函数会懒解析，在使用的时候才会真正的解析代码")]),t._v(" "),s("h2",{attrs:{id:"函数优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数优化"}},[t._v("#")]),t._v(" 函数优化")]),t._v(" "),s("p",[t._v("因为函数默认是懒解析，如果我们很快要用到函数，又会导致函数再进行一次饥饿解析，从而浪费时间。")]),t._v(" "),s("p",[t._v("如果我们知道定义的函数很快就要被使用，我们可以在定义函数的时候直接申明为饥饿解析，也就是使用括号把函数包裹起来。"),s("code",[t._v("const add = ((a, b) => a + b);")])]),t._v(" "),s("p",[t._v("但是我们使用打包工具的时候，会把我们加的括号去掉，所以我们需要借助第三方库"),s("a",{attrs:{href:"https://github.com/nolanlawson/optimize-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("optimize.js"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"对象优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象优化"}},[t._v("#")]),t._v(" 对象优化")]),t._v(" "),s("ol",[s("li",[t._v("以相同的顺序初始化成员对象，避免隐藏类的调整")]),t._v(" "),s("li",[t._v("实例化后避免添加新的属性")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"randy"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尽量在初始化的时候定义全属性")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("尽量使用 Array 代替 array-like 对象")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种使用不如直接先变为数组再操作搞笑")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更高效")]),t._v("\nArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("domList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("数组读取避免越界，因为没找到会沿着原型链查找，造成浪费。")]),t._v(" "),s("li",[t._v("尽量避免元素类型的转换")])]),t._v(" "),s("h2",{attrs:{id:"html-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-优化"}},[t._v("#")]),t._v(" html 优化")]),t._v(" "),s("ol",[s("li",[t._v("减少 iframe 的使用，因为 iframe 没加载完父文档的 onload 事件就不会触发")]),t._v(" "),s("li",[t._v("压缩空白符，现在的构建工具否支持。")]),t._v(" "),s("li",[t._v("避免节点深层级的嵌套")]),t._v(" "),s("li",[t._v("避免使用 table 布局")]),t._v(" "),s("li",[t._v("删除注释")]),t._v(" "),s("li",[t._v("css js 尽量外链，js 放 body 底部")]),t._v(" "),s("li",[t._v("多使用 html5 的语义化标签")])]),t._v(" "),s("h2",{attrs:{id:"css-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-优化"}},[t._v("#")]),t._v(" css 优化")]),t._v(" "),s("ol",[s("li",[t._v("避免样式节点深层级的嵌套")]),t._v(" "),s("li",[t._v("降低 css 对渲染的阻塞")]),t._v(" "),s("li",[t._v("利用 GPU 进行完成动画")]),t._v(" "),s("li",[t._v("多使用 contain: layout，告诉浏览器我当前是一个盒子，里面的变化不会影响到外面")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("contain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("使用 font-display 属性，让文字更早的显示在页面，也能解决文字闪动问题。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);