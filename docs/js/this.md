## 普通函数中的 this

普通函数中的 this 的值是在执行的时候才能确认，定义的时候不能确认！ 为什么呢 因为 this 是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候。

## 默认绑定

### 全局环境

```js
// 全局环境下，this始终指向全局对象（window），无论是否严格模式；
// 在浏览器中，全局对象为 window 对象：
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37

// 对于延时函数内部的回调函数的this指向全局对象window
setTimeout(function() {
  console.log("setTimeout this=", this);
}, 1000);
```

### 函数

```js
// 普通函数
// 普通函数内部的this分两种情况，严格模式和非严格模式。
// 非严格模式下，this 默认指向全局对象window。
// 严格模式下，this指向undefined。
function f1() {
  console.log("普通函数非严格模式下，this 默认指向全局对象window", this);
  return this;
}
console.log(f1() === window); // true
function f2() {
  "use strict"; // 这里是严格模式
  console.log("普通函数严格模式下，this 默认指向undefined", this);
  return this;
}
console.log(f2() === undefined); // true
```

## 隐式绑定

函数的调用是在某个对象上触发的

```js
// 函数作为对象的方法
// 当函数作为对象里的方法被调用时，它们的 this 是调用该函数的对象。
// 多层嵌套的对象，内部方法的this指向离被调用函数最近的对象

//方式1
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  },
};
//当 o.f()被调用时，函数内的this将绑定到o对象。
console.log(o.f()); // logs 37

//方式2
var o = { prop: 37 };
function independent() {
  return this.prop;
}
//函数f作为o的成员方法调用
o.f = independent;
console.log(o.f()); // logs 37

//方式3
//this 的绑定只受最靠近的成员引用的影响
o = { prop: 37, b: { g: independent, prop: 42 } };
console.log(o.b.g()); // 42
```

## 显式绑定

显式绑定比较好理解，就是通过 call,apply,bind 的方式，显式的指定 this 所指向的对象。

```js
// 显示绑定 显示的改变this
// 通过这三个方法来改变this apply(this, [args]) call(this, args) bind(this, args)()
// 区别是apply传参数是一个数组，bind需要再次调用
// 如果 call,apply 或者 bind 传入的第一个参数值是 undefined 或者 null，
// 严格模式下 this 的值为传入的值 null /undefined。
// 非严格模式下，实际应用的默认绑定规则，this 指向全局对象(node环境为global，浏览器环境为window)
```

### 绑定例外

如果我们将 null 或者是 undefined 作为 this 的绑定对象传入 call、apply 或者是 bind,这些值在调用时会被忽略，实际应用的是默认绑定规则。

```js
var foo = {
  name: "Selina",
};
var name = "Chirs";
function bar() {
  console.log(this.name);
}
bar.call(null); //Chirs
```

## new 绑定

```js
// 构造函数中的this
// 当一个函数用作构造函数时（使用new关键字），它的this被绑定到正在构造的新对象。
// 构造器返回的默认值是this所指的那个对象，也可以手动返回其他的对象。
// 如果构造函数返回了一个新对象 则this指向新对象 否则指向我们创建的对象
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
  this.a = 37;
  return { a: 38 }; //手动设置返回{a:38}对象
}

o = new C2();
console.log(o.a); // logs 38
```

## 绑定的优先级

new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定

## 事件中的 this

在 DOM 事件中 this 总是与 currentTarget 相等

```js
// 在DOM事件中 this总是与currentTarget相等
document
  .getElementsByClassName("father")[0]
  .addEventListener("click", function(e) {
    // currentTarget是绑定事件的元素
    // target是触发事件的元素
    console.log(e.target === this);
    console.log(e.currentTarget === this); // 总是 true
  });
```

## 箭头函数

- 箭头函数的 this 是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this 就继承了定义函数的对象。
- 箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this，否则 this 的值则被设置为全局对象。
- 箭头函数不能通过 apply call bind 改变 this。
- 箭头函数不能使用 arguments。
- 箭头函数不能用于构造函数。
- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

### 函数

```js
// 作为普通函数
// 在普通函数中，箭头函数被设置为全局对象：无论是否严格模式
var globalObject = window;
var foo = () => this;
var foo2 = () => {
  "use strict";
  return this;
};
console.log(foo() === globalObject); // true
console.log(foo2() === globalObject); // true
```

### 对象中

```js
//箭头函数没有自己的this，而是使用箭头函数所在的作用域的this
// 箭头函数作为对象的方法使用
// 箭头函数作为对象的方法使用，指向全局window对象；而普通函数作为对象的方法使用，则指向调用的对象。
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  },
};
obj.b(); // undefined window{...}
obj.c(); // 10 Object {...}
```

### 在 setTimeout setInterval 中

在 setTimeout setInterval 中始终指向 window

```js
// setTimeout setInterval
setTimeout(() => {
  // 始终指向window
  console.log("箭头函数在setTimeout中的this", this);
}, 100);

// 事件对象
document.getElementsByClassName("father")[0].addEventListener("click", (e) => {
  // 始终指向window
  console.log(this);
});
```

### 在事件对象中

在在事件对象中始终指向 window

```js
// 事件对象
document.getElementsByClassName("father")[0].addEventListener("click", (e) => {
  // 始终指向window
  console.log(this);
});
```

## 如何准确判断 this 指向的是什么？

1. 函数是否在 new 中调用(new 绑定)，如果是，那么 this 绑定的是新创建的对象。
2. 函数是否通过 call,apply 调用，或者使用了 bind(即硬绑定)，如果是，那么 this 绑定的就是指定的对象。
3. 函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this 绑定的是那个上下文对象。一般是 obj.foo()
4. 如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到 undefined，否则绑定到全局对象。
5. 如果把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值在调用时会被忽略，实际应用的是默认绑定规则。
6. 如果是箭头函数，箭头函数的 this 继承的是外层代码块的 this。
