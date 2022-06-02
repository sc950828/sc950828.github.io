---
theme: channing-cyan
highlight: a11y-dark
---

## 简介

前面文章[js 执行上下文和执行机制一文说透](https://juejin.cn/post/7078990426568392740)笔者有说到，在`js`中分为同步任务和异步任务。在异步任务中都有哪些异步解决方案呢？笔者今天就来说说`js`中的常见的五种异步解决方案。

## 异步解决方案

在`js`中常用的异步解决方案有以下五种

1. 回调函数(callback)
2. 事件监听
3. Promise
4. Generator
5. Async/Await

## 回调函数(callback)

回调函数简单理解就是一个函数被作为参数传递给另一个函数。回调函数是异步最简单的一种解决方案。

比如下面这个例子，我们想在请求后异步输出我们从后端获取的结果，就可以使用到回调函数。

```js
function fn1(callback) {
  // 模拟ajax请求获取后端数据，耗时一秒
  setTimeout(() => {
    const data = "我是后端返回的结果";
    callback && callback(data);
  }, 1000);
}

fn1((data) => {
  console.log(data);
});
```

在上面的例子中`(data)=>{console.log(data)}`就是回调函数，该函数会被当做参数传递给另外一个函数，当异步任务有了结果就会执行该回调函数，并不会阻碍主程序的执行，所以回调函数是`js`中最开始使用的异步解决方案。

使用回调函数的缺点也很明显，把函数当做参数传递，不利于代码的阅读和维护，各个部分之间高度耦合。而且如果有多个回调函数嵌套使用的话容易造成**回调地狱**。

比如

```js
fun1(() => {
  fun2(() => {
    fun3();
  });
});
```

## 事件监听

事件监听在笔者前面的文章[js 中的事件](https://juejin.cn/post/7082702882104934407)中有介绍，不了解的同学可以再看看。我们可以利用自定义事件并监听来实现异步。

前面我们已经介绍了创建自定义事件有两种方法，所以在不同情况下我们可以使用不同的方法。

使用`new Event()`创建自定义事件，这种方式不能传递参数，适用于简单的场景。

```js
const myEvent = new Event("test");

// 监听事件
document.addEventListener("test", function(e) {
  // 类似回调函数，可以在这里进行相应的处理
  console.log("自定义事件触发了");
});

// 触发自定义事件
setTimeout(function() {
  if (document.dispatchEvent) {
    document.dispatchEvent(myEvent);
  } else {
    // 兼容低版本浏览器
    document.fireEvent(myEvent);
  }
}, 2000);
```

使用`new CustomEvent()`创建自定义事件，这种方式可以传递参数，适用于需要传递参数的场景。

```js
// 创建自定义事件 能传递参数，必须使用detail作为key不然获取不到
const myEvent2 = new CustomEvent("test2", { detail: { name: "randy" } });

// 监听事件
document.addEventListener("test2", function(e) {
  // 类似回调函数，可以在这里进行相应的处理
  console.log("自定义事件触发了参数是", e.detail);
});

// 触发自定义事件
setTimeout(function() {
  if (document.dispatchEvent) {
    document.dispatchEvent(myEvent2);
  } else {
    // 兼容低版本浏览器
    document.fireEvent(myEvent2);
  }
}, 3000);
```

使用事件监听是异步的一个解决方案，但是整个程序变成了事件驱动，并且每次使用还得注册事件再监听再进行触发使得我们使用的时候比较麻烦（代码量多），并且阅读代码的时候，各部分比较分散，很难看出主流程。

## Promise

`在ES2015 (ES6)`中引入了`Promise`对象，它是异步编程中一种比较好的解决方案。

### Promise 特点

`Promise`对象代表一个异步操作，它有三种状态

- 进行中 (Pending)
- 已完成 (Resolved/Fulfilled)
- 已失败 (Rejected)

只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

`Promise`对象状态一旦改变，就不会再变，`Promise`对象的状态改变，只有两种可能

- 从 Pending 变为 Resolved
- 从 Pending 变为 Rejected

只要这两种情况发生，状态就凝固，不会再变了，会一直保持这个结果。

### Promise 相关 API

#### new Promise()

`Promise`是一个构造函数，我们可以通过`new`关键字来创建一个`Promise`实例，也可以直接使用`Promise`的一些静态方法。

```js
new Promise((resolve, reject) => {...});
```

处理器函数接收两个参数分别是`resolve`和`reject`，这两个参数也是两个回调函数

`resolve` 函数在异步操作成功时调用，并将异步操作的结果，作为参数传递出去

`reject` 函数在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

简单理解就是一个是成功回调，一个是失败回调。

比如下面的例子，当随机数小于 5 我们就返回成功，否则就返回失败。

```js
function fun1() {
  return new Promise((resolve, reject) => {
    const num = Math.ceil(Math.random() * 10);
    if (num < 5) {
      resolve(num);
    } else {
      reject("数字太大");
    }
  });
}
```

我们还可以使用`Promise`的一些静态方法来创建`Promise`对象，上面的例子我们可以改写为

```js
function fun2() {
  const num = Math.ceil(Math.random() * 10);
  if (num < 5) {
    return Promise.resolve(num);
  } else {
    return Promise.reject("数字太大");
  }
}
```

#### Promise.prototype.then()

`Promise`实例生成以后，可以用`then`方法指定`resolved`状态和`reject`状态的回调函数。

```js
Promise.prototype.then(onFulfilled[, onRejected])
```

第一个参数是`resolved`状态的回调函数，第二个参数是`reject`状态的回调函数（一般我们不使用而是使用`catch`方法）。

```js
fun1().then(
  (res) => {
    // res是fun1方法resolve的参数，即小于5的随机数
    console.log(res);
  },
  (err) => {
    // res是fun1方法reject的参数，即数字太大
    console.log(err);
  }
);
```

前面说到我们一般不使用而是使用`then`方法的第二个参数，而是使用`catch`方法，所以上面的例子我们还可以改写为

```js
fun1()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

说到这，很多小伙伴会好奇，为什么不使用`then`方法的第二个参数而是使用`catch`方法来处理错误呢？我们知道`Promise`是链式调用的，实际使用过程中可能会有很多的`then`方法一直调用下去，所以如果我们把错误处理都写在`then`方法中的话就需要在每个`then`中对错误进行处理了。而使用`catch`方法的话我们只需要在链式调用的最末尾加上一个`catch`方法就可以啦，就可以捕捉到第一个错误啦。这样会大大简化我们的代码。

**`then`  方法必须返回一个  `promise`  对象**

1. 如果`then`方法中返回的是一个普通值(如 Number、String 等)就使用此值包装成一个新的`Promise`对象返回。

```js
function fun3() {
  return Promise.resolve(1);
}

fun3()
  .then((res) => {
    console.log(res); // 1
    return "success"; // 返回的是一个普通值(如Number、String等)
  })
  .then((res) => {
    console.log(res); // success
  });
```

2. 如果`then`方法中返回了一个`Promise`对象，那就以这个对象为准，返回它的结果。

```js
function fun4() {
  return Promise.resolve(1);
}

fun4()
  .then((res) => {
    console.log(res); // 1
    return Promise.resolve("success2");
  })
  .then((res) => {
    console.log(res); // success2
  });
```

3. 如果`then`方法中没有`return`语句，就返回一个用`undefined`包装的`Promise`对象。

```js
function fun5() {
  return Promise.resolve(1);
}

fun5()
  .then((res) => {
    console.log(res); // 1
  })
  .then((res) => {
    console.log(res); // undefined
  });
```

4. 如果`then`方法中出现异常，则会流转到下一个`then`的`onRejected`或者最末尾的`catch`方法中。

```js
function fun6() {
  return Promise.resolve("fun6");
}

fun6()
  .then(
    (res) => {
      console.log("then1 resolve方法" + res);
      return Promise.reject("error1");
    },
    (err) => {
      console.log("then1 reject方法" + err);
    }
  )
  .then(
    (res) => {
      console.log("then2 resolve方法" + res);
    },
    (err) => {
      console.log("then2 reject方法" + err);
    }
  );
```

上面的例子会输出 `then1 resolve方法 fun6、then2 reject方法 error1`

```js
function fun6() {
  return Promise.resolve("fun6");
}

fun6()
  .then((res) => {
    console.log("then1 resolve方法" + res);
    return Promise.reject("error1");
  })
  .then((res) => {
    console.log("then2 resolve方法" + res);
    return Promise.reject("error2");
  })
  .catch((err) => {
    console.log("catch方法" + err);
  });
```

上面的例子会输出 `then1 resolve方法 fun6、catch方法 error1`

5. 如果`then`方法没有传入任何回调，则继续向下传递(即所谓的值穿透)

```js
function fun7() {
  return Promise.resolve("fun7");
}

fun7()
  .then()
  .then()
  .then((res) => {
    console.log(res); // fun7
  });
```

#### Promise.prototype.catch()

`catch`方法前面也有介绍到，主要是用来捕获错误的。此方法也会返回一个新`Promise`对象。

如果`catch`方法里再有错误则通过  `catch`  返回的`Promise`是一个`rejected`实例，否则它就是一个成功的`resolved`实例。

```js
function fun8() {
  return Promise.reject("fun8");
}

fun8()
  .catch((err) => {
    console.log(err); // fun8
    // 如果不抛错则会进入下一个then方法的resolve回调方法，否则会进入reject回调方法
    // throw new Error("11");
  })
  .then(
    (res) => {
      console.log("resolve" + res);
    },
    (err) => {
      console.log("reject" + err);
    }
  );
```

相较于使用`then`的第二个参数，笔者还是推荐使用`catch`方法来获取错误。

#### Promise.prototype.finally()

`finally`，英文是`最后`的意思，此方法是`ES2018`新增的。

`finally`，在`Promise`结束时，不管成功还是失败都将执行并且该回调方法无参数。

```js
function fun9() {
  return Promise.reject("fun9");
}

fun9()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("不管resolve还是reject我都会执行");
  });
```

该方法适用于同时需要在`then()`和`catch()`中各写一次的情况，比如我们不管请求成功与否都需要关闭按钮`loading`状态，我们就可以在 finally 回调方法中设置`loading=false`来关闭`loading`状态。

#### Promise.resolve()

这个方法是一个静态方法，前面在介绍`new Promise()`构造函数的时候我们也简单介绍了下，该方法接收一个参数并转换为`Promise`对象。

```js
Promise.resolve(value);

// 类似于
new Promise((resolve, reject) => {
  resolve(value);
});
```

#### Promise.reject()

这个方法是一个静态方法，前面在介绍`new Promise()`构造函数的时候我们也简单介绍了下，该方法接收一个参数并转换为`Promise`对象。

```js
Promise.reject(value);

// 类似于
new Promise((resolve, reject) => {
  reject(value);
});
```

#### Promise.all()

`Promise.all(iterable)` 参数为一组 `Promise` 实例组成的数组，用于将多个`Promise`实例包装成一个新的 `Promise`实例。

当数组中的`Promise`实例都为都 `Resolved` 的时候，`Promise.all()` 的状态才会 `Resolved`，否则为`Rejected`。并且`Rejected`是第一个被`Rejected` 的 `Promise` 的返回值。

```js
function fun10() {
  return Promise.resolve("fun10");
}
function fun11() {
  return Promise.resolve("fun11");
}
function fun12() {
  return Promise.resolve("fun12");
}
Promise.all([fun10(), fun11(), fun12()])
  .then((res) => {
    console.log(res); // ['fun10', 'fun11', 'fun12']
  })
  .catch((err) => {
    console.log(err);
  });
```

```js
function fun10() {
  return Promise.resolve("fun10");
}
function fun11() {
  return Promise.reject("fun11");
}
function fun12() {
  return Promise.reject("fun12");
}
Promise.all([fun10(), fun11(), fun12()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // 输出fun11，第一个被`Rejected` 的 `Promise` 的返回值
  });
```

#### Promise.race()

`race`方法与`all`方法不同，`race`方法中只要对象中有一个状态改变了，它的状态就跟着改变，并将那个改变状态实例的返回值传递给回调函数。

也就是不管失败与成功第一个`Promise`的返回值就是`race`方法的返回值。`resolve`就会进入 then 方法，否则进入`catch`方法

```js
function fun13() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return resolve("fun13");
    }, 2000);
  });
}
function fun14() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return resolve("fun14");
    }, 1000);
  });
}

Promise.race([fun13(), fun14()])
  .then((res) => {
    console.log("race resolve" + res); // race resolvefun14
  })
  .catch((err) => {
    console.log("race error" + err);
  });
```

### 异步回调中抛错 catch 捕捉不到

首先我们看在`Promise`对象的处理器函数中直接抛出错误，这种情况是能捕捉到错误的。

```js
function fun15() {
  return new Promise(function(resolve, reject) {
    throw new Error("这是一个错误");
  });
}

fun15()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // Error: 这是一个错误
  });
```

在下面代码，在`Promise`对象的处理器函数中模拟一个异步抛错，这种情况就捕获不到错误了，就会报`Uncaught Error`。原因是什么呢？这里就涉及到微任务和宏任务了，不清楚的可以看看笔者[js 执行上下文和执行机制一文说透](https://juejin.cn/post/7078990426568392740)这篇文章。

```js
function fun16() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("这是一个错误");
    }, 1000);
  });
}

fun16()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // Uncaught Error: 这是一个错误
  });
```

那要怎么解决呢？这就需要我们再使用`try catch`进行处理啦，`catch`到错误后再手动`reject`。

```js
function fun17() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      try {
        throw new Error("这是一个错误");
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
}

fun17()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // Error: 这是一个错误
  });
```

`Promise`用同步的方式写异步的代码，避免了层层嵌套的回调函数，并且提供了很多`api`使我们用起来也更加方便。但是`Promise`的链式调用一直拼接代码也不太优雅。

## Generator

`Generator`也是在`在ES2015 (ES6)`中引入的，它也是异步编程的一种解决方案，最大的特点就是可以交出函数的执行权。

`Generator`函数需要和`yield`关键字配合使用。

### 语法

`*`用来表示函数为 `Generator` 函数，并且只能使用在`function`函数，不能用在箭头函数中。

函数内部有`yield`字段，`yield`用来定义函数内部的状态，并让出执行权，这个关键字只能出现在生成器函数体内，但是生成器中也可以没有 `yield` 关键字，函数遇到 `yield` 的时候会暂停，并把 `yield` 后面的表达式结果抛出去。

调用 `Generator` 函数和调用普通函数一样，在函数名后面加上`()`即可，但是`Generator` 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针，类似迭代器对象 `Iterator` 的  `next`  方法，我们需要手动调用`next`方法来进行下一步操作，指针就会从函数头部或者上一次停下来的地方开始执行。

这里可能会涉及到`迭代器(Iterator)`，不了解的可以先看看笔者前面写的[对象数组遍历 Iterator 章节](https://juejin.cn/post/7065851124590313502#heading-16)

```js
// 写法很多，function* fn()、function*fn()和function *fn()都可以
function* generatorFn() {
  console.log("a");
  yield "1";
  console.log("b");
  yield "2";
  console.log("c");
  return "3";
}

const generatorIt = generatorFn();
console.log(generatorIt.next()); // {value: '1', done: false}
console.log(generatorIt.next()); // {value: '2', done: false}
console.log(generatorIt.next()); // {value: '3', done: true}
```

### 分析 Generator 函数的执行过程

上面的代码会依次输出`a、{value: '1', done: false}、 b、 {value: '2', done: false}、 c、 {value: '3', done: true}`下面我们来分析下`Generator` 函数的执行过程

1. 首先`Generator` 函数执行，返回了一个指向内部状态对象的指针`generatorIt`，此时没有任何输出。

2. 第一次调用`next`方法，从 `Generator` 函数的头部开始执行，先是打印了 `a` ，执行到`yield`就停下来，并执行紧跟着`yield`后边的表达式，将表达式的值 `'1'`作为返回对象的 `value` 属性值，此时函数还没有执行完，返回对象的 `done` 属性值是 `false`。

3. 第二次调用`next`方法，从第一个`yield` 下面开始运行，先是打印了 `b` ，执行到第二个`yield`就停下来，并执行紧跟着`yield`后边的表达式，将表达式的值 `'2'`作为返回对象的 `value` 属性值，此时函数还没有执行完，返回对象的 `done` 属性值是 `false`。

4. 第三次调用`next`方法，从第二个`yield` 下面开始运行，先是打印了 `c` ，然后执行了函数的返回操作，并将 `return` 后面的表达式的值，作为返回对象的 `value` 属性值，此时函数已经结束，所以 `done` 属性值为`true`。在这一步如果函数没有返回值这里就会返回`{value: undefined, done: true}`。

说到这里关于`Generator`函数是不是有了初步的理解呢？简单的理解就是`Generator`函数`yield`放到哪里它就停到哪里（注意 紧跟在`yield`后面的语句是会执行的，并且其返回值是作为迭代对象的`value`），调用时使用`next`方法一步一步往后走。

### 再次分析 Generator 函数的执行过程

关于`yield`后面的语句是在当次执行还是`next`后执行呢？很多小伙伴分不清楚，所以笔者再举个例子来分析下。

```js
function* generatorFn2() {
  console.log("a");
  yield console.log("a2");
  console.log("b");
  yield console.log("b2");
  console.log("c");
}

const generatorIt2 = generatorFn2();
console.log(generatorIt2.next()); // {value: undefined, done: false}
console.log(generatorIt2.next()); // {value: undefined, done: false}
console.log(generatorIt2.next()); // {value: undefined, done: true}
```

上面的代码会依次输出`a、a2、{value: undefined, done: false}、 b、b2、 {value: undefined, done: false}、 c、 {value: undefined, done: true}`，所以通过这里例子我们可以看出，紧跟在`yield`后面的语句是在当次执行的。

### for..of 遍历 Generator

在[对象数组遍历 Iterator 章节](https://juejin.cn/post/7065851124590313502#heading-16)里面笔者已经说过了，只要实现了迭代器方法就能使用`for of`遍历，所以我们可以使用`for of`来运行我们的`Generator`函数，所以不再需要我们手动调用`next`方法啦，一旦`next`方法的返回对象的`done`属性为`true`，`for...of`循环就会中止，且不包含该返回对象。怎么理解这里的**且不包含该返回对象**呢？ 就是当`done`为`true`时就会终止循环所以最后一项是不会输出出来的。

```js
function* generatorFn() {
  console.log("a");
  yield "1";
  console.log("b");
  yield "2";
  console.log("c");
  return "3";
}

for (const iterator of generatorFn()) {
  console.log(iterator); // a、1、b、2、c
}
```

上面的例子会依次输出`a、1、b、2、c`，并没有输出 3，所以就印证了当`done`为`true`时就会终止循环所以最后一项是不会输出出来的。

所以`Generator`函数可以通过`for of`自动执行，不再需要手动调用`next`方法，但是最后一项是不会输出来的，这里需要注意下。

### Generator 函数传参

有小伙伴说既然`yield`有返回值，是不是我们在代码中通过`const res = yield "1";`输出`res`就能得到`{value: '1', done: false}`呢？下面我们再来分析下

```js
function* generatorFn3() {
  console.log("a");
  const res = yield "1";
  console.log(res); // undefined
}

const generatorIt3 = generatorFn3();
generatorIt3.next();
generatorIt3.next();
```

上面的代码会依次输出`a、undefined`，并没有跟我们想象的一样输出`a、{value: '1', done: false}`而是输出了`a、undefined`。那我们需要怎样传参呢？这就需要用到`next`方法啦。我们把上面的例子再改下。

```js
function* generatorFn3() {
  console.log("a");
  const res = yield "1";
  console.log(res); // randy
}

const generatorIt3 = generatorFn3();
generatorIt3.next();
generatorIt3.next("randy"); // 通过next方法传参
```

上面的代码会依次输出`a、randy`。所以参数可以通过下一次的`next`来传递，也就是说当 `next` 传入参数的时候，该参数会作为**上一步**`yield`的返回值。

### yield\* 表达式

在`yield`命令后面加上星号，表明它返回的是一个遍历器，这被称为`yield*`表达式。

```js
function* foo() {
  yield "foo1";
  yield "foo2";
}
function* bar() {
  yield "bar1";
  yield* foo();
  yield "bar2";
}
for (let val of bar()) {
  console.log(val);
}

// bar1 foo1 foo2 bar2
```

`yield`命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器

```js
function* gen1() {
  yield ["a", "b", "c"];
}
for (let val of gen1()) {
  console.log(a);
}
// ["a", "b", "c"]

function* gen2() {
  yield* ["a", "b", "c"];
}
for (let val of gen2()) {
  console.log(a);
}
// a b c
```

### Generator 中的 return

`return` 方法返回给定值，并结束遍历 `Generator` 函数，当 `return` 无没有传值时，就返回 `undefined`。

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

var f = foo();
console.log(f.next());
// 输出{value: 1, done: false}

console.log(f.return("hahaha"));
// 由于调用了return方法，所以遍历已结束，done变为true 输出{value: "hahaha", done: true}

console.log(f.next());
// 再次调用也只能输出{value: undefined, done: true}
```

`Generator`函数优雅的流程控制方式，可以让函数在指定位置可中断执行，但是实际开发过程中我们很少单独`Generator`函数，因为手动一次次运行`next`方法十分麻烦，一般我们都会搭配执行器（如 co 库）来运行`Generator`函数，所以对于单纯解决异步问题还是不太好用。

### Generator 中的 throw

可以通过 `throw` 方法在 `Generator` 外部控制内部执行的“终断”。也就是我们常说的抛出异常。

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log(e.message);
    }
  }
}

let g = gen();
console.log(g.next()); // { value: 42, done: false }
console.log(g.next()); // { value: 42, done: false }
console.log(g.next()); // { value: 42, done: false }
// 中断操作
g.throw(new Error("break"));

console.log(g.next()); // {value: undefined, done: true}
```

## Async/Await

在`ES2017（ES8）`中引入了  `async`  函数，使得异步操作变得更加方便。`Async/Await`  的出现，被很多人认为是`js`异步操作的最终且最优雅的解决方案。我们可以简单理解`Async/Await = Generator + Promise`。

### 语法

`async`  用于声明一个  `function`  是异步的，`await`  用于等待一个异步方法执行完成，只有当异步完成后才会继续往后执行。`await`不是必须的并且`await`  只能出现在  `async`  函数中。

```js
async function() {
  const result = await getData()
  console.log(result)
}
```

**一个函数如果加上 async ，那么该函数就会返回一个 Promise**

```js
async function async1() {
  return "1";
}
console.log(async1()); // -> Promise {<resolved>: "1"}
```

这种用书写同步代码的方式处理异步是不是很舒服呢。

### 错误处理

`Async/Await`没有`Promise`那么多的`api`，错误需要自己使用`try catch`处理。

```js
async function() {
  try{
    const result = await getData()
    console.log(result)
  } catch(e) {
    console.log(e)
  }
}
```

### Async/Await 和 Promise 对比

1. `Async/Await`相较于`Promise`的链式调用完全用书写同步代码的方式处理异步使代码分厂优雅易懂。

2. `Async/Await`这种用书写同步代码的方式使得`await`  会阻塞后面代码正常运行，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。

下面笔者使用`Async/Await`和`Promise`作为对比举个例子说明。

```js
function getData() {
  return Promise.resolve("模拟获取后端数据");
}

async function fun1() {
  console.log("主程序开始执行");
  const result = await getData();
  console.log(result);
  console.log("让异步代码自己去执行，不阻塞我们主程序");
}

fun1(); // 主程序开始执行、模拟获取后端数据、让异步代码自己去执行，不阻塞我们主程序

async function fun2() {
  console.log("主程序开始执行");
  getData().then((result) => {
    console.log(result);
  });
  console.log("让异步代码自己去执行，不阻塞我们主程序");
}

fun2(); // 主程序开始执行、让异步代码自己去执行，不阻塞我们主程序、模拟获取后端数据
```

从上面的例子我们可以看出使用`Async/Await`的弊端，就是不管后面依不依赖异步结果，`Async/Await`都一定会阻塞后面代码的执行。

### Async/Await 和 Generator 对比

1. `Async/Await`内置执行器。 `Generator` 函数的执行必须靠执行器（如`co` 函数库），而 `Async/Await` 函数自带执行器。也就是说，**Async/Await 函数的执行，与普通函数一模一样**。

2. `Async/Await`更好的语义。 `async` 和 `await`，比起星号和 `yield`，语义更清楚了。`async` 表示函数里有异步操作，`await` 表示紧跟在后面的表达式需要等待结果。

## 总结

本文笔者一共介绍了五种`js`异步解决方案，每种方案都有各自的特点，在不同情况下我们可以选择最合适的方案来使用。总体来说笔者觉得`Async/Await`和`Promise`这两种方案目前是最好的异步解决方案。

## 扩展

### async defer

`async defer`关键字都是用来修饰`<script>`标签的，但是这三者都有什么区别呢？下面笔者来分析下。

```
<script src='xxx'></script>
<script src='xxx' async></script>
<script src='xxx' defer></script>
```

浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 `script` 标签，就会暂停解析，先发送网络请求获取该 `js` 脚本的代码内容，然后让 `js` 引擎执行该代码，当代码执行完毕后恢复解析。整个过程如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/caf2f618530046658ab8e3b4a8699589~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

当浏览器遇到带有 `async` 属性的 `script` 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 `HTML`，一旦网络请求回来之后，如果此时 `HTML` 还没有解析完，浏览器会暂停解析，先让 `js` 引擎执行代码，执行完毕后再进行解析，图示如下：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/021b5dbeddb64db0a7099dc0a4dd076d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

当浏览器遇到带有 `defer` 属性的 `script` 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 `HTML`，一旦网络请求回来之后，如果此时 `HTML` 还没有解析完，浏览器不会暂停解析并执行 `js` 代码，而是等待 `HTML` 解析完毕再执行 `js` 代码，图示如下：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8313e4787f04c79838fec9961bda0fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

根据上面的分析，不同类型 `script` 的执行顺序及其是否阻塞解析 `HTML` 总结如下：

| script 标签      | JS 执行顺序      | 是否阻塞解析 HTML      |
| ---------------- | ---------------- | ---------------------- |
| `<script>`       | 在 HTML 中的顺序 | 阻塞                   |
| `<script async>` | 网络请求返回顺序 | 可能阻塞，也可能不阻塞 |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞                 |

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
