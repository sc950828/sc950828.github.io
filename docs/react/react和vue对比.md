## React 和 Vue 的区别总结

React 是由 Facebook 创建的 JavaScript UI 框架，并且创造了新的语法 - JSX，JSX 允许在 JavaScript 中写 html 代码。Vue 是由尤大大开发的一个 MVVM 框架，它采用的是模板系统而不是 JSX。

react 整体上是函数式的思想，组件使用 jsx 语法，all in js，将 html 与 css 全都融入 javaScript，vue 的整体思想仍然是拥抱经典的 html(结构)+css(表现)+js(行为)的形式，vue 鼓励开发者使用 template 模板

vue 中有 v-model 这种双向绑定的语法糖而 react 里面没有。

React 默认是通过比较引用的方式进行，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树。如果想避免不必要的子组件重新渲染，可以通过 shouldComponentUpdate 或者 PureComponent 可以避免不必要的重新渲染

vue2.0 通过 Object.defineProperty 对数据做到了更细致的监听，精准实现组件级别的更新。你可以认定它是默认的优化。他只需要渲染差异部分。

对于父子组件数据交互，vue 中使用 prop+自定义事件实现，react 通过 props+回调实现(传递方法)。

vue 和 react 都支持跨组件传递数据，vue 中主要通过 provide / inject 实现，react 中主要通过 Context 实现。

vue 对 class 与 style 特意做了增强，可以传字符串、对象、数组。react 不能直接指定 class 需要使用 className 或者第三方库 classnames

生命周期函数不同 vue 中是 beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed。react16.0 以前是 constructor render componentWillUpdate componentWillMount
shouldComponentUpdate componentDidMount componetDidUpdate componentWillReceiveProps react16.0 以后断了 static getDerivedStateFromProps(nextProps, prevState) 和 getSnapshotBeforeUpdate(prevProps, prevState)

vue 中事件使用@或者 v-on 绑定，并且支持事件修饰符而 react 里面使用小驼峰没有事件修饰符而且需要注意 this

vue 中有 v-if v-else 等指令而 react 只能使用三目运算符和原生 if else 判断。

vue 中使用 v-show 切换显示不显示而 react 里面只能使用 style 控制 display 属性来显示不显示

vue 中有 computed，react hooks 使用 useMemo 表示 memoized 的值，使用 useCallback 表示 memoized 的回调函数，实现与 vue 中 computed 类似的功能。

vue 中有 watch 监听数据变化，react 使用 getDerivedStateFromProps + componentDidUpdate 或者 useEffect 来监听

vue 中 ref 使用方便，react 中不像 vue 中直接给 ref 传字符串类型值，class 组件通过 React.createRef 绑定 ref 属性（React v16.0 版本之后），函数组件通过 useRef 绑定 ref 属性

vue 中有插槽 react 中通过 this.props.children 和 Render props 实现类似 vue 中的插槽功能。
