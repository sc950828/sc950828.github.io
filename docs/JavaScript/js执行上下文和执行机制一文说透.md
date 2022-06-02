---
theme: channing-cyan
highlight: a11y-dark
---

## 简介

关于`js`中的执行上下文、执行栈、执行机制（同步任务、异步任务、微任务、宏任务、事件循环）在面试中是一个高频考点，有些小伙伴被问到时可能会一脸茫然不知所措，所以笔者今天就来总结下，希望可以对屏幕前的你有所帮助。

## 线程和进程

在说`js`中的执行上下文和`js`执行机制之前我们来说说线程和进程

### 什么是线程

用官方的话术来说 **`线程`是`CPU`调度的最小单位。**

### 什么是进程

用官方的话术来说 **`进程`是`CPU`资源分配的最小单位。**

### 线程和进程的关系

`线程`是建立在`进程`的基础上的一次程序运行单位，通俗点解释`线程`就是程序中的一个执行流，一个`进程`可以有一个或多个`线程`。

一个`进程`中只有一个执行流称作`单线程`，即程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。

一个`进程`中有多个执行流称作`多线程`，即在一个程序中可以同时运行多个不同的`线程`来执行不同的任务， 也就是说允许单个程序创建多个并行执行的`线程`来完成各自的任务。

下面笔者举一个简单的例子，比如我们打开`qq音乐`听歌，`qq音乐`就可以理解为一个进程，在`qq音乐`中我们可以边听歌边下载这里就是多线程，听歌是一个线程，下载是一个线程。如果我们再打开`vscode`来写代码这就是另外一个进程了。

进程之间相互独立，但同一进程下的各个线程间有些资源是共享的。

### 线程的生命周期

线程的生命周期会经历五个阶段。

1. 新建状态: 使用 `new` 关键字和 `Thread` 类或其子类建立一个线程对象后，该线程对象就处于新建状态。它保持这个状态直到程序 `start()` 这个线程。

2. 就绪状态: 当线程对象调用了 `start()` 方法之后，该线程就进入就绪状态。就绪状态的线程处于就绪队列中，只要获得 `CPU` 的使用权就可以立即运行。

3. 运行状态: 如果就绪状态的线程获取 `CPU` 资源，就可以执行 `run()`，此时线程便处于运行状态。处于运行状态的线程最为复杂，它可以变为阻塞状态、就绪状态和死亡状态。

4. 阻塞状态: 如果一个线程执行了 `sleep（睡眠）`、`suspend（挂起）`、`wait(等待)`等方法，失去所占用资源之后，该线程就从运行状态进入阻塞状态。在睡眠时间已到或获得设备资源后可以重新进入就绪状态。可以分为三种：

- 等待阻塞：运行状态中的线程执行 `wait()` 方法，使线程进入到等待阻塞状态。
- 同步阻塞：线程在获取 `synchronized` 同步锁失败(因为同步锁被其他线程占用)。
- 其他阻塞：通过调用线程的 `sleep()` 或 `join()` 发出了 `I/O` 请求时，线程就会进入到阻塞状态。当 `sleep()` 状态超时，`join()` 等待线程终止或超时，或者 `I/O` 处理完毕，线程重新转入就绪状态。

5. 死亡状态: 一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。

![1414322-20180726095444653-1269967116.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/200ea999b1384b5189d54bd1e42a5ae7~tplv-k3u1fbpfcp-watermark.image?)

### js 是单线程还是多线程呢

`JS`是单线程。`JS` 作为浏览器脚本语言其主要用途是与用户互动，以及操作`DOM`。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定`JavaScript`同时有两个线程，一个线程在某个`DOM`节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

## 执行上下文和执行栈

### 什么是执行上下文

执行上下文（`Execution context stack`  简称  `ECS`）就是一个评估和执行`JavaScript`代码的环境的抽象概念。通俗地说，就是每当  `Javascript`  代码在运行的时候，它都是在执行上下文中运行。

### 执行上下文分类

`javascript` 中有三种执行上下文类型，分别是：

1. **全局执行上下文** 这是默认或者说是最基础的执行上下文，一个程序中只会存在一个全局上下文，它在整个 `javascript` 脚本的生命周期内都会存在于执行堆栈的最底部不会被栈弹出销毁。全局上下文会生成一个全局对象（以浏览器环境为例，这个全局对象是 `window`），并且将 `this` 值绑定到这个全局对象上。

2. **函数执行上下文** 每当一个函数被调用时，都会创建一个新的函数执行上下文（不管这个函数是不是被重复调用的）。

3. **Eval 函数执行上下文** 执行在 `eval` 函数内部的代码也会有它属于自己的执行上下文，但由于并不经常使用 `eval`，所以在这里不做分析。

### 什么是执行栈？

前面我们说到`js`在运行的时候会创建执行上下文，但是执行上下文是需要存储的，那用什么来存储呢？就需要用到栈数据结构了。

栈是一种先进后出的数据结构。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dcd53f0b27d4bf09f122711f41582bf~tplv-k3u1fbpfcp-zoom-1.image)

所以总结来说**用来存储代码运行时创建的执行上下文就是执行栈**。

### js 执行流程

在执行一段代码时，`JS` 引擎会首先创建一个执行栈，用来存放执行上下文。

然后 `JS` 引擎会创建一个全局执行上下文，并 `push` 到执行栈中, 这个过程 `JS` 引擎会为这段代码中所有变量分配内存并赋一个初始值（undefined），在创建完成后，`JS` 引擎会进入执行阶段，这个过程 `JS` 引擎会逐行的执行代码，即为之前分配好内存的变量逐个赋值(真实值)。

如果这段代码中存在 `function` 的调用，那么 `JS` 引擎会创建一个函数执行上下文，并 `push` 到执行栈中，其创建和执行过程跟全局执行上下文一样。

当一个执行栈执行完毕后该执行上下文就会从栈中弹出，接下来会进入下一个执行上下文。

下面笔者来举个例子，假如在我们的程序中有如下代码

```js
console.log("Global Execution Context start");

function first() {
  console.log("first function");
  second();
  console.log("Again first function");
}

function second() {
  console.log("second function");
}

first();
console.log("Global Execution Context end");
```

上面的例子我们简单来分析下

1. 首先会创建一个执行栈
2. 然后会创建一个全局上下文，并将该执行上下文`push`到执行栈中
3. 开始执行，输出`Global Execution Context start`
4. 遇到`first`方法，执行该方法，创建一个函数执行上下文并`push`到执行栈
5. 执行`first`执行上下文，输出`first function`
6. 遇到`second`方法，执行该方法，创建一个函数执行上下文并`push`到执行栈
7. 执行`second`执行上下文，输出`second function`
8. `second`执行上下文执行完毕，从栈中弹出，进入到下一个执行上下文`first`执行上下文
9. `first`执行上下文继续执行，输出`Again first function`
10. `first`执行上下文执行完毕，从栈中弹出，进入到下一个执行上下文全局执行上下文
11. 全局执行上下文继续执行，输出`Global Execution Context end`

我们用一张图来总结

![执行上下文.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b2b09b67fce4ba68fdb719c88ebc6d3~tplv-k3u1fbpfcp-watermark.image?)

好了。说完执行上下文和执行栈我们再来说说`js`的执行机制

## 执行机制

说到`js`的执行机制，我们就需要了解`js`中同步任务和异步任务、宏任务和微任务了。

### 同步任务和异步任务

在`js`中，任务分为同步任务和异步任务，那什么是同步任务什么是异步任务呢？

**同步任务**指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。

**异步任务**指的是，不进入主线程、而进入"任务队列"的任务(任务队列中的任务与主线程并列执行)，只有当主线程空闲了并且"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。**由于是队列存储所以满足先进先出规则**。常见的异步任务有我们的`setInterval`、`setTimeout`、`promise.then`等。

### 事件循环

前面介绍了同步任务和异步任务，下面我们来说说事件循环。

1. 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，只有前一个任务执行完毕，才能执行后一个任务。异步任务不进入主线程而是进入 `Event Table` 并注册函数。

2. 当指定的事情完成时，`Event Table` 会将这个函数移入 `Event Queue`。`Event Queue`是队列数据结构，所以满足先进先出规则。

3. 主线程内的任务执行完毕为空，会去 `Event Queue` 读取对应的函数，进入主线程执行。

上述过程会不断重复，也就是常说的 **Event Loop(事件循环)**。

我们用一张图来总结下

![事件循环.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c366ba110838476cbc980c941077852e~tplv-k3u1fbpfcp-watermark.image?)

下面笔者简单来介绍个例子

```js
function test1() {
  console.log("log1");

  setTimeout(() => {
    console.log("setTimeout 1000");
  }, 1000);

  setTimeout(() => {
    console.log("setTimeout 100");
  }, 100);

  console.log("log2");
}

test1(); // log1、log2、setTimeout 100、setTimeout 1000
```

1. 我们知道在 js 中会优先执行同步任务再执行异步任务，所以上面的例子会先输出`log1、log2`
2. 同步任务执行完后会执行异步任务，所以延迟`100`毫秒的回调函数会优先执行输出`setTimeout 100`
3. 延迟`1000`毫秒的回调函数会后执行输出`setTimeout 1000`

上面的例子比较简单，相信只要你看懂了上面笔者说的同步异步任务做出来是没什么问题的。那下面笔者再举一个例子小伙伴们看看会输出啥呢？

```js
function test2() {
  console.log("log1");

  setTimeout(() => {
    console.log("setTimeout 1000");
  }, 1000);

  setTimeout(() => {
    console.log("setTimeout 100");
  }, 100);

  new Promise((resolve, reject) => {
    console.log("new promise");
    resolve();
  }).then(() => {
    console.log("promise.then");
  });

  console.log("log2");
}

test2();
```

要解决上面的问题光知道同步和异步任务是不够的，我们还得知道在异步任务中有宏任务和微任务之分。

### 宏任务和微任务

在`js`中，异步任务被分为两种，一种叫宏任务`MacroTask`，一种叫微任务`MicroTask`。

常见的宏任务`MacroTask`有

1. 主代码块
2. setTimeout()
3. setInterval()
4. setImmediate() - Node
5. requestAnimationFrame() - 浏览器

常见的微任务`MicroTask`有

1. Promise.then()
2. process.nextTick() - Node

所以在上面的例子中就涉及到宏任务和微任务了，那宏任务微任务的执行顺序是怎么样的呢？

1. 首先，整体的 `script`(作为第一个宏任务)开始执行的时候，会把所有代码分为同步任务、异步任务两部分，同步任务会直接进入主线程依次执行，异步任务会进入异步队列然后再分为宏任务和微任务。

2. 宏任务进入到 `Event Table` 中，并在里面注册回调函数，每当指定的事件完成时，`Event Table` 会将这个函数移到 `Event Queue` 中。

3. 微任务也会进入到另一个 `Event Table` 中，并在里面注册回调函数，每当指定的事件完成时，`Event Table` 会将这个函数移到 `Event Queue` 中。

4. 当主线程内的任务执行完毕，主线程为空时，会检查微任务的 `Event Queue`，如果有任务，就全部执行，如果没有就执行下一个宏任务。

我们用一张图来总结下

![完整事件循环.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c772a69442594c36b62405fee715fc14~tplv-k3u1fbpfcp-watermark.image?)

读懂了异步里面的宏任务和微任务上面的例子我们就可以轻易的得到答案了。

1. 我们知道在 js 中会优先执行同步任务再执行异步任务，所以上面的例子会先输出`log1、new promise、log2`。这里需要注意**new promise 里面是同步的**
2. 主代码块作为宏任务执行完后会执行此宏任务所产生的所有微任务，所以会输出`promise.then`
3. 所有微任务执行完毕后会再执行一个宏任务，延迟`100`毫秒的回调函数会优先执行输出`setTimeout 100`
4. 此宏任务没有产生微任务，所以没有微任务需要执行
5. 继续执行下一个宏任务，延迟`1000`毫秒的回调函数会优执行输出`setTimeout 1000`

所以 test2 方法执行后会依次输出`log1、new promise、log2、promise.then、setTimeout 100、setTimeout 1000`

> 关于`js`执行到底是先宏任务再微任务还是先微任务再宏任务网上的文章各有说辞。笔者的理解是如果把整个`js`代码块当做宏任务的时候我们的`js`执行顺序是先宏任务后微任务的。

正所谓百看不如一练，下面笔者举两个例子如果你都能做对那你算是掌握了`js`执行机制这一块的知识了。

例子 1

```js
function test3() {
  console.log(1);

  setTimeout(function() {
    console.log(2);
    new Promise(function(resolve) {
      console.log(3);
      resolve();
    }).then(function() {
      console.log(4);
    });
    console.log(5);
  }, 1000);

  new Promise(function(resolve) {
    console.log(6);
    resolve();
  }).then(function() {
    console.log(7);
    setTimeout(function() {
      console.log(8);
    });
  });

  setTimeout(function() {
    console.log(9);
    new Promise(function(resolve) {
      console.log(10);
      resolve();
    }).then(function() {
      console.log(11);
    });
  }, 100);

  console.log(12);
}

test3();
```

我们来具体分析下

1. 首先`js`整体代码块作为一个宏任务最开始执行，依次输出`1、6、12`。
2. 整体代码块宏任务执行完毕后产生了一个微任务和两个宏任务，所以宏任务队列有两个宏任务，微任务队列有一个微任务。
3. 宏任务执行完毕后会执行此宏任务所产生的的所有微任务。因为只有一个微任务，所以会输出`7`。此微任务又产生了一个宏任务，所以宏任务队列目前有三个宏任务。
4. 三个宏任务里面没有设置延迟的最先执行，所以输出`8`，此宏任务没有产生微任务，所以没有微任务要执行，继续执行下一个宏任务。
5. 延迟`100`毫秒的宏任务执行，输出`9、10`，并产生了一个微任务，所以微任务队列目前有一个微任务
6. 宏任务执行完毕后会执行该宏任务所产生的所有微任务，所以会执行微任务队列的所有微任务，输出`11`
7. 延迟`1000`毫秒的宏任务执行输出`2、3、5`，并产生了一个微任务，所以微任务队列目前有一个微任务
8. 宏任务执行完毕后会执行该宏任务所产生的所有微任务，所以会执行微任务队列的所有微任务，输出`4`

所以上面代码例子会依次输出`1、6、12、7、8、9、10、11、2、3、5、4`，小伙伴们是否做对了呢？

例子 2

我们把上面的例子 1 稍作修改，引入`async`和`await`

```js
async function test4() {
  console.log(1);

  setTimeout(function() {
    console.log(2);
    new Promise(function(resolve) {
      console.log(3);
      resolve();
    }).then(function() {
      console.log(4);
    });
    console.log(5);
  }, 1000);

  new Promise(function(resolve) {
    console.log(6);
    resolve();
  }).then(function() {
    console.log(7);
    setTimeout(function() {
      console.log(8);
    });
  });

  const result = await async1();
  console.log(result);

  setTimeout(function() {
    console.log(9);
    new Promise(function(resolve) {
      console.log(10);
      resolve();
    }).then(function() {
      console.log(11);
    });
  }, 100);

  console.log(12);
}

async function async1() {
  console.log(13);
  return Promise.resolve("Promise.resolve");
}

test4();
```

上面这里例子会输出什么呢？这里我们弄懂`async`和`await`题目就迎刃而解了。

我们知道`async`和`await`其实是`Promise`的语法糖，这里我们只需要知道`await`后面就相当于`Promise.then`。所以上面的例子我们可以理解成如下代码

```js
function test4() {
  console.log(1);

  setTimeout(function() {
    console.log(2);
    new Promise(function(resolve) {
      console.log(3);
      resolve();
    }).then(function() {
      console.log(4);
    });
    console.log(5);
  }, 1000);

  new Promise(function(resolve) {
    console.log(6);
    resolve();
  }).then(function() {
    console.log(7);
    setTimeout(function() {
      console.log(8);
    });
  });

  new Promise(function(resolve) {
    console.log(13);
    return resolve("Promise.resolve");
  }).then((result) => {
    console.log(result);

    setTimeout(function() {
      console.log(9);
      new Promise(function(resolve) {
        console.log(10);
        resolve();
      }).then(function() {
        console.log(11);
      });
    }, 100);

    console.log(12);
  });
}

test4();
```

看到上面的代码是不是就能轻易得出结果呢？

1. 首先`js`整体代码块作为一个宏任务最开始执行，依次输出`1、6、13`。
2. 整体代码块宏任务执行完毕后产生了两个微任务和一个宏任务，所以宏任务队列有一个宏任务，微任务队列有两个微任务。
3. 宏任务执行完毕后会执行此宏任务所产生的的所有微任务。所以会输出`7、Promise.resolve、12`。此微任务又产生了两个宏任务，所以宏任务队列目前有三个宏任务。
4. 三个宏任务里面没有设置延迟的最先执行，所以输出`8`，此宏任务没有产生微任务，所以没有微任务要执行，继续执行下一个宏任务。
5. 延迟`100`毫秒的宏任务执行，输出`9、10`，并产生了一个微任务，所以微任务队列目前有一个微任务
6. 宏任务执行完毕后会执行该宏任务所产生的所有微任务，所以会执行微任务队列的所有微任务，输出`11`
7. 延迟`1000`毫秒的宏任务执行输出`2、3、5`，并产生了一个微任务，所以微任务队列目前有一个微任务
8. 宏任务执行完毕后会执行该宏任务所产生的所有微任务，所以会执行微任务队列的所有微任务，输出`4`

所以上面代码例子会依次输出`1、6、13、7、Promise.resolve、12、8、9、10、11、2、3、5、4`，小伙伴们是否做对了呢？

## 扩展

### setTimeout(fn, 0)

关于`setTimeout(fn)`可能很多小伙伴还是不太理解，这不明明没设置延迟时间吗，不应该立即就执行吗？

`setTimeout(fn)`我们可以理解成`setTimeout(fn,0)`，其实是同一个意思。

我们知道 js 分同步任务和异步任务，`setTimeout(fn)`就是属于异步任务，所以这里就算你没设置延迟时间，他也会进入异步队列，需要等到主线程空闲的时候才会执行。

笔者这里再提一嘴，你觉得我们在`setTimeout`后面设置的延迟时间，`js`就一定会按我们的延迟时间执行吗，我觉得并不见得。我们设置的时间只是该回调函数可以被执行了，但是主线程有没有空还是另外一回事，我们可以举个简单的例子。

```js
function test5() {
  setTimeout(function() {
    console.log("setTimeout");
  }, 100);

  let i = 0;
  while (true) {
    i++;
  }
}

test5();
```

上面的例子一定会在`100`毫秒后输出`setTimeout`吗，并不会，因为我们的主线程进入了死循环，并没有空去执行异步队列的任务。

### GUI 渲染

`GUI渲染`在这里说有些小伙伴可能不太理解，后面笔者会出关于浏览器的文章会再详细介绍，这里只是简单了解下即可。

由于`JS引擎线程`和`GUI渲染线程`是互斥的关系，浏览器为了能够使`宏任务`和`DOM任务`有序的进行，会在一个`宏任务`执行结果后，在下一个`宏任务`执行前，`GUI渲染线程`开始工作，对页面进行渲染。

所以宏任务、微任务、GUI 渲染之间的关系如下

```
宏任务 -> 微任务 -> GUI渲染 -> 宏任务 -> ...
```

## 参考文章

[一次搞懂 JS 运行机制](https://juejin.cn/post/6844904050543034376)

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)

## 后记

本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力。
