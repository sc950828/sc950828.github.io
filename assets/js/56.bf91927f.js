(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{412:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器渲染流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染流程"}},[t._v("#")]),t._v(" 浏览器渲染流程")]),t._v(" "),s("ol",[s("li",[t._v("下载解析 HTML 文件，构建 DOM 树。下载解析 CSS 生成 CSSDOM 树。这两个是并行的。")]),t._v(" "),s("li",[t._v("CSSDOM 树构建完成与 DOM 树组合形成 RenderObject 树。")]),t._v(" "),s("li",[t._v("根据 render 树布局（Layout），负责各元素尺寸、位置的计算。(涉及到回流)")]),t._v(" "),s("li",[t._v("根据 render 树绘制（paint），绘制页面像素信息。(涉及到重绘)")]),t._v(" "),s("li",[t._v("浏览器会将各层的信息发送给 GUI，GUI 将各层合成（composite），显示在屏幕上。")])]),t._v(" "),s("h3",{attrs:{id:"回流-reflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[t._v("#")]),t._v(" 回流(reflow)")]),t._v(" "),s("p",[t._v("又叫重排（layout）。当元素的尺寸、结构、内容变化、浏览器窗口尺寸改变或者触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。")]),t._v(" "),s("h3",{attrs:{id:"重绘-repaint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[t._v("#")]),t._v(" 重绘(repaint)")]),t._v(" "),s("p",[t._v("当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此损耗较少。(改变元素颜色 背景色 visibility)")]),t._v(" "),s("h2",{attrs:{id:"导致回流的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导致回流的操作"}},[t._v("#")]),t._v(" 导致回流的操作")]),t._v(" "),s("ol",[s("li",[t._v("添加、删除元素")]),t._v(" "),s("li",[t._v("display: none")]),t._v(" "),s("li",[t._v("移动元素位置")]),t._v(" "),s("li",[t._v("修改浏览器大小、字体大小")]),t._v(" "),s("li",[t._v("使用如下 api")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("clientWidth、\nclientHeight、\nclientTop、\nclientLeft、\noffsetWidth、\noffsetHeight、\noffsetTop、\noffsetLeft、\nscrollWidth、\nscrollHeight、\nscrollTo、\nscrollBy、\nscrollTop、\nscrollLeft、\ngetComputedStyle、\n")])])]),s("h2",{attrs:{id:"减少回流的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少回流的方法"}},[t._v("#")]),t._v(" 减少回流的方法")]),t._v(" "),s("ol",[s("li",[t._v("对于元素的操作尽量只使用 transform 的 translate、scale、rotate 因为 这些 api 不会触发回流和重绘只会触发合成（composite）。")]),t._v(" "),s("li",[t._v("opacity 透明度不会触发回流和重绘只会触发合成（composite）。")]),t._v(" "),s("li",[t._v("大规模的新增子 dom 可以先使用 document.createDocumentFragment() 创建，然后一次性插入。")]),t._v(" "),s("li",[t._v("不要频繁读写，批处理 DOM 读/写操作")]),t._v(" "),s("li",[t._v("读写分离")])]),t._v(" "),s("h2",{attrs:{id:"防止布局抖动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防止布局抖动"}},[t._v("#")]),t._v(" 防止布局抖动")]),t._v(" "),s("p",[t._v("我们可以使用"),s("a",{attrs:{href:"https://github.com/wilsonpage/fastdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("fastdom"),s("OutboundLink")],1),t._v("来防止布局抖动。")]),t._v(" "),s("p",[t._v("原理主要是 通过批处理 DOM 读/写操作消除布局抖动。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读写分离")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" read "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fastdom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" write "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fastdom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mutate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfastdom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfastdom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"合成-composite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成-composite"}},[t._v("#")]),t._v(" 合成(composite)")]),t._v(" "),s("p",[t._v("将页面拆分图层进行绘制再进行复合")])])}),[],!1,null,null,null);a.default=e.exports}}]);