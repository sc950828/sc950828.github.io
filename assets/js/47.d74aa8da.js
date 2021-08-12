(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{403:function(e,t,v){"use strict";v.r(t);var a=v(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"react-和-vue-对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react-和-vue-对比"}},[e._v("#")]),e._v(" React 和 Vue 对比")]),e._v(" "),v("p",[e._v("个人感觉就是 vue 比 react 封装的更好，更容易上手开发。比如路由钩子，watch，computed，指令，双向绑定等等。")]),e._v(" "),v("h3",{attrs:{id:"相同点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[e._v("#")]),e._v(" 相同点")]),e._v(" "),v("ul",[v("li",[e._v("都使用虚拟 DOM 来实现，大大提升性能")]),e._v(" "),v("li",[e._v("都支持服务端渲染，vue 有 nuxt 框架， react 有 next 框架。")]),e._v(" "),v("li",[e._v("只有框架的骨架,其他的功能如路由，状态管理等是框架分离的组件")]),e._v(" "),v("li",[e._v("都是数据驱动视图，不需要手动操作 dom。")]),e._v(" "),v("li",[e._v("都有支持的 native 方案,React 有 native Vue 有 weex")]),e._v(" "),v("li",[e._v("都有管理状态,React 有 redux Vue 有 vuex")])]),e._v(" "),v("h3",{attrs:{id:"不同点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[e._v("#")]),e._v(" 不同点")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Vue 推荐 html、css、js 分离，而 React 推荐的做法是 JSX + inline style,也就是把 HTML 和 CSS 全都写进 JavaScript 了,即'all in js'。")])]),e._v(" "),v("li",[v("p",[e._v("vue 实现了数据的双向绑定，react 数据流动是单向的。")])]),e._v(" "),v("li",[v("p",[e._v("vue2.0 通过 Object.defineProperty 对数据做到了更细致的监听，精准实现组件级别的更新。你可以认定它是默认的优化。他只需要渲染差异部分。React 默认是通过比较引用的方式进行，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树。如果想避免不必要的子组件重新渲染，可以通过 shouldComponentUpdate 或者 PureComponent 可以避免不必要的重新渲染。")])]),e._v(" "),v("li",[v("p",[e._v("对于父子组件数据交互，vue 中使用 prop+自定义事件实现，react 通过 props+回调实现(传递方法)。")])]),e._v(" "),v("li",[v("p",[e._v("vue 和 react 都支持跨组件传递数据，vue 中主要通过 provide / inject 实现，react 中主要通过 Context 实现。")])]),e._v(" "),v("li",[v("p",[e._v("vue 对 class 与 style 特意做了增强，可以传字符串、对象、数组。react 不能直接指定 class 需要使用 className 或者第三方库 classnames。")])]),e._v(" "),v("li",[v("p",[e._v("vue 中事件使用@或者 v-on 绑定，并且支持事件修饰符而 react 里面使用小驼峰没有事件修饰符而且需要注意 this")])]),e._v(" "),v("li",[v("p",[e._v("vue 中有 v-if v-else 等指令而 react 只能使用三目运算符和原生 if else 判断。")])]),e._v(" "),v("li",[v("p",[e._v("vue 中使用 v-show 切换显示不显示而 react 里面只能使用 style 控制 display 属性来显示不显示")])]),e._v(" "),v("li",[v("p",[e._v("vue 中有 computed，react hooks 使用 useMemo 表示 memoized 的值，使用 useCallback 表示 memoized 的回调函数，实现与 vue 中 computed 类似的功能。")])]),e._v(" "),v("li",[v("p",[e._v("vue 中有 watch 监听数据变化，react 使用 getDerivedStateFromProps + componentDidUpdate 或者 useEffect 来监听")])]),e._v(" "),v("li",[v("p",[e._v("vue 中 ref 使用方便，react 中不像 vue 中直接给 ref 传字符串类型值，class 组件通过 React.createRef 绑定 ref 属性（React v16.0 版本之后），函数组件通过 useRef 绑定 ref 属性")])]),e._v(" "),v("li",[v("p",[e._v("vue 中有插槽 react 中通过 this.props.children 和 Render props 实现类似 vue 中的插槽功能。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);