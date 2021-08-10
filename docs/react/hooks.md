## 什么是 Hooks

- React 一直都提倡使用函数组件，但是有时候需要使用 state 或者其他一些功能时，只能使用类组件，因为函数组件没有实例，没有生命周期函数，只有类组件才有
- Hooks 是 React 16.8 新增的特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
- 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以直接在现有的函数组件中使用 Hooks
- 凡是 use 开头的 React API 都是 Hooks

## 使用规则

只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

## useState useEffect

```js
import React, { useState, useEffect } from "react";

function Example() {
  // 声明一个叫 “count” 的 state 变量。初始值为0，变量名为count 修改count的方法是setCount
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );

  // useEffect让你可以在函数组件里面使用 class的生命周期函数 相当于 componentDidMount 和 componentDidUpdate和componentWillUnmount
  // React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。
  // 副作用函数还可以通过返回一个函数来指定如何“清除”副作用。
  // 副作用就是 修改一个变量 修改一个对象的字段值 抛出异常 在控制台显示信息、从控制台接收输入 在屏幕上显示 GUI 读写文件、网络、数据库。
  // useEffect(fn, []) // 接收两个参数 一个是回调函数 另外一个是数组类型的参数（表示依赖）
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  // 模拟Vue的$watch方法 useEffect(fn,[user]) // 对user做监控

  // 进入该组件会输出useEffect 相当于componentDidMount
  // 修改count会输出useEffect、effect unmount 相当于componentDidUpdate
  // 修改其他state的不会输出 相当于只监听了count
  // 离开该组件的时候输出effect unmount 相当于componentWillUnmount
  useEffect(() => {
    console.log("useEffect执行了");
    // 相当于componentWillUnmount
    return () => {
      console.log("effect unmount");
    };
  }, [count]);

  // 第二个参数的意思是当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑，
  // 这也就实现了componentWillUnmount的生命周期函数。

  // useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，
  // 而componentDidMonut和componentDidUpdate中的代码都是同步执行的
}
```

## createContext 和 useContext

解决函数组件使用 Context 传值问题

```js
import React, { useState, createContext, useContext } from "react";

const CountContext = createContext(0);

function Top() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>context count是{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <CountContext.Provider value={count}>
        <Middle></Middle>
      </CountContext.Provider>
    </div>
  );
}

function Middle() {
  return <Bottom></Bottom>;
}

function Bottom(props) {
  // 这里的CountContext是由createContext创建的 如果不在同一个文件需要手动引入
  const count = useContext(CountContext);
  return <div>我的count是{count}</div>;
}

export default Top;
```

## useReducer

主要是模拟纯函数 reducer

```js
import React, { useReducer } from "react";

function ReducerTest() {
  const [score, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <div>分数是{score}</div>
      <button onClick={() => dispatch("inc")}>increment</button>
      <button onClick={() => dispatch("dec")}>decrement</button>
    </div>
  );
}

export default ReducerTest;
```

## useRef

```js
import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  console.log(inputRef); // 没有访问到 此时dom还未挂载
  useEffect(() => {
    console.log(inputRef); // dom挂载完毕
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

// 还有useCallback useMemo
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
// 只有当依赖发生变化的时候才会执行回调函数
// useMemo 模拟computed
//double依赖于count，当count改变时，才会执行回调方法double才会发生改变
// useMemo主要是模拟shouldComponentUpdate 用于性能优化
let double = useMemo(
  () => () => {
    return count * 2;
  },
  [count]
);
```
