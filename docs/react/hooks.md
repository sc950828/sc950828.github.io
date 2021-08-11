## 什么是 Hooks

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

- React 一直都提倡使用函数组件，但是有时候需要使用 state 或者其他一些功能时，只能使用类组件，因为函数组件没有实例，没有生命周期函数，只有类组件才有
- Hooks 是 React 16.8 新增的特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
- 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以直接在现有的函数组件中使用 Hooks
- 凡是 use 开头的 React API 都是 Hooks

## 类组件的不足

1. 状态逻辑难复用： 在组件之间复用状态逻辑很难，可能要用到 render props （渲染属性）或者 HOC（高阶组件），但无论是渲染属性，还是高阶组件，都会在原先的组件外包裹一层父容器（一般都是 div 元素），导致层级冗余
2. 趋向复杂难以维护，在生命周期函数中混杂不相干的逻辑（如：在 componentDidMount 中注册事件以及其他的逻辑，在 componentWillUnmount 中卸载事件，这样分散不集中的写法，很容易写出 bug ）。类组件中到处都是对状态的访问和处理，导致组件难以拆分成更小的组件。
3. this 指向问题：父组件给子组件传递函数时，必须绑定 this

## Hooks 优势

1. 能优化类组件的三大问题
2. 能在无需修改组件结构的情况下复用状态逻辑（自定义 Hooks ）
3. 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
4. 副作用的关注点分离：副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生 dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。以往这些副作用都是写在类组件生命周期函数中的。而 useEffect 在全部渲染完毕后才会执行，useLayoutEffect 会在浏览器 layout 之后，painting 之前执行。

## 使用规则

只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

## Hook API

基础 Hook

- useState
- useEffect
- useContext

额外的 Hook

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

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
    console.log("useEffect");
    // 相当于componentWillUnmount
    return () => {
      console.log("effect unmount");
    };
  }, [count]);

  // 第二个参数的意思是当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑，
  // 这也就实现了componentWillUnmount的生命周期函数。

  // useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的，
  // 而componentDidMonut和componentDidUpdate中的代码都是同步执行的

  // useEffect的执行时机是：React 保证了每次运行 effect 的同时，DOM 都已经更新完毕，默认情况下,useEffect 会在每次渲染后都执行
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

useRef() 相当于 class 组件的 React.createRef()

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
```

## useCallback

在 hooks 出来之后，我们能够使用 function 的形式来创建包含内部 state 的组件。但是，使用 function 的形式，失去了 shouldComponentUpdate，我们无法通过判断前后状态来决定是否更新。而且，在函数组件中，react 不再区分 mount 和 update 两个状态，这意味着函数组件的每一次调用都会执行其内部的所有逻辑，那么会带来较大的性能损耗。因此 useMemo 和 useCallback 就是用来优化性能问题

该回调函数 fn 仅在某个依赖项改变时才会更新，如果没有任何依赖项，则 deps 为空

```js
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## useMemo

```js
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

## 自定义 hook

借助于 react 提供的基础 hook,我们通常也可以自定义 hook，react 规定我们自定义 hook 时，必须以 use 开头。

```js
// 定义
import { useState } from "react";

type returnd = [boolean, (visible?: boolean) => void];

const useVisible = (initVisible = false): returnd => {
  const [visible, setVisible] = useState(initVisible);
  function onVisible(value?: boolean) {
    const newValue = value === undefined ? !visible : value;
    setVisible(newValue);
  }
  return [visible, onVisible];
};

export default useVisible;

// 使用
import { Button, Modal } from "antd";
import useVisible from "../hooks/useVisible";

const Home: React.FC = () => {
  const [visible, setVisible] = useVisible(false);

  const modalShow = (value: boolean) => {
    setVisible(value);
  };

  return (
    <div
      style={{ marginTop: "5px", marginLeft: "400px", marginRight: "400px" }}
    >
      <Button type="primary" onClick={() => modalShow(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => modalShow(false)}
        onCancel={() => modalShow(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Home;
```
