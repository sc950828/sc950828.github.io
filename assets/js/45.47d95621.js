(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{401:function(t,e,a){"use strict";a.r(e);var s=a(44),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"初始化及挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化及挂载"}},[t._v("#")]),t._v(" 初始化及挂载")]),t._v(" "),a("p",[t._v("在 new Vue() 之后。 Vue 会调用 "),a("code",[t._v("_init")]),t._v(" 函数进行初始化，也就是这里的 init 过程，它会初始化生命周期、事件、渲染、 props、 methods、 data、 computed 与 watch 等，然后触发 beforeCreate 和 created 生命周期方法。其中最重要的是通过 Object.defineProperty 设置 setter 与 getter 函数，用来实现「响应式」以及「依赖收集」。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("initLifecycle(vm)\ninitEvents(vm)\ninitRender(vm)\ncallHook(vm, 'beforeCreate')\ninitInjections(vm) // resolve injections before data/props\ninitState(vm) // props、 methods、 data、 computed 与 watch 等初始化\ninitProvide(vm) // resolve provide after data/props\ncallHook(vm, 'created')\n")])])]),a("p",[t._v("初始化之后调用 "),a("code",[t._v("$mount")]),t._v(" 会挂载组件，如果是运行时编译，即不存在 render function 但是存在 template 的情况，需要进行「编译」步骤。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),a("p",[t._v("compile 编译可以分成 parse、optimize 与 generate 三个阶段，最终需要得到 render function。")]),t._v(" "),a("h3",{attrs:{id:"parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parse"}},[t._v("#")]),t._v(" parse")]),t._v(" "),a("p",[t._v("parse 会用正则等方式解析 template 模板中的指令、class、style 等数据，形成 AST。")]),t._v(" "),a("h3",{attrs:{id:"optimize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimize"}},[t._v("#")]),t._v(" optimize")]),t._v(" "),a("p",[t._v("optimize 的主要作用是标记 static 静态节点，这是 Vue 在编译过程中的一处优化，后面当 update 更新界面时，会有一个 patch 的过程， diff 算法会直接跳过静态节点，从而减少了比较的过程，优化了 patch 的性能。")]),t._v(" "),a("h3",{attrs:{id:"generate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[t._v("#")]),t._v(" generate")]),t._v(" "),a("p",[t._v("generate 是将 AST 转化成 render function 字符串的过程，得到结果是 render 的字符串以及 staticRenderFns 字符串。")]),t._v(" "),a("p",[t._v("在经历过 parse、optimize 与 generate 这三个阶段以后，组件中就会存在渲染 VNode 所需的 render function 了。")]),t._v(" "),a("h2",{attrs:{id:"挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),a("p",[a("code",[t._v("$mount")]),t._v(" 方法实际上会去调用 mountComponent 方法，mountComponent 核心就是先实例化一个渲染 Watcher，在它的回调函数中会调用 updateComponent 方法，在此方法中调用 "),a("code",[t._v("vm._render")]),t._v(" 方法通过 render function 先生成虚拟 Node，最终调用 "),a("code",[t._v("vm._update")]),t._v(" 把虚拟 DOM 更新成 HTML DOM。")]),t._v(" "),a("h3",{attrs:{id:"render-把渲染函数变为虚拟-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-把渲染函数变为虚拟-dom"}},[t._v("#")]),t._v(" render 把渲染函数变为虚拟 DOM")]),t._v(" "),a("p",[a("code",[t._v("vm._render")]),t._v(" 最终是通过执行 createElement 方法并返回的是 vnode，它是一个虚拟 Node。Vue 2.0 相比 Vue 1.0 最大的升级就是利用了 Virtual DOM。因此在分析 createElement 的实现前，我们先了解一下 Virtual DOM 的概念。")]),t._v(" "),a("h4",{attrs:{id:"虚拟-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom"}},[t._v("#")]),t._v(" 虚拟 DOM")]),t._v(" "),a("p",[t._v("Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多。在 Vue.js 中，Virtual DOM 是用 VNode 这么一个 Class 去描述。由于 Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。")]),t._v(" "),a("h3",{attrs:{id:"update-把虚拟-dom-变为-html-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-把虚拟-dom-变为-html-dom"}},[t._v("#")]),t._v(" update 把虚拟 DOM 变为 HTML DOM")]),t._v(" "),a("p",[t._v("Vue 的 "),a("code",[t._v("_update")]),t._v(" 是实例的一个私有方法，它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候。"),a("code",[t._v("_update")]),t._v(" 方法的作用是把 VNode 渲染成真实的 DOM。")]),t._v(" "),a("p",[t._v("映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。")]),t._v(" "),a("h2",{attrs:{id:"响应式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统"}},[t._v("#")]),t._v(" 响应式系统")])])}),[],!1,null,null,null);e.default=r.exports}}]);