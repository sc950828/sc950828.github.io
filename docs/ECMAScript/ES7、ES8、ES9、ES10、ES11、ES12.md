---
theme: channing-cyan
highlight: a11y-dark
---

## 简介

`JavaScript`是世界上发展最快的编程语言之一，不仅可以用于编写运行在浏览器的客户端程序，随着`Node.js`的发展，`JavaScript`也被广泛应用于编写服务端程序。而随着`JavaScript`这门语言的不断发展和完善，在`2015`年正式发布的`ECMAScript6`已经成为了`JavaScript`这门语言的下一代标准，使得`JavaScript`用来编写复杂的大型应用程序更加的得心应手。近几年几乎所有使用`JavaScript`这门语言开发的项目，都在使用`ES`的新特性来开发。

随着`ES2015`的发布，标准委员会决定在每年都会发布一个`ES`的新版本。但很多开发者并没有真正的理解`ES2015+`每个版本都具有哪些新特性，以及这些新特性与`ES5`语法的差别，更不清楚这些新特性在实际项目中的应用场景是怎么样的。

由于篇幅原因笔者将`ES6~ES12`分成了**ES 进阶之路一**和**ES 进阶之路二**两篇文章，如果对`ES6`还不是很清楚了可以先看[ES 进阶之路一(ES6)](https://juejin.cn/post/7089736885224308743)

我相信只要你们认真看完了笔者的`ES`系列文章，你一定会成为`ES`大神。

接下来我们来看看`ES7-ES12`吧。篇幅有点长，建议收藏后再看，后期也可以当做字典查阅。

![IMG_0387.jpeg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e62611e1b1334e7ea60ec0d2b85c36c6~tplv-k3u1fbpfcp-watermark.image?)

## ECMAScript2016(ES7)

### Array 扩展

#### Array.prototype.includes()

在 `ES7` 之前想判断数组中是否包含一个元素，基本可以这样写：

```js
console.log(
  array1.find(function(item) {
    return item === 2;
  })
);
```

或者

```js
console.log(
  array1.findIndex(function(item) {
    return item === 2;
  })
);
```

或者

```js
console.log(array1.indexOf(2) > -1);
```

或者

```js
console.log(
  array1.filter(function(item) {
    return item === 2;
  }).length > 0
);
```

`ES7`引入的`Array.prototype.includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回`false`。

```js
const arr = ["es6", "es7", "es8"];
console.log(arr.includes("es6")); // true
console.log(arr.includes("es9")); // false
```

`includes`方法接收俩个参数，要搜索的值和搜索的开始索引。第二个参数可选。从该索引处开始查找 `searchElement`。如果为负值，则从末尾第几个开始查找。

```js
const arr = ["es6", "es7", "es8"];
console.log(arr.includes("es7", 1)); // true
console.log(arr.includes("es7", 2)); // false
console.log(arr.includes("es7", -1)); // false
console.log(arr.includes("es7", -2)); // true
```

与`indexOf()`比较

1. `indexOf`返回的不是`boolean`值，而是下标或-1。

```js
["a", "b", "c"]
  .includes("a") //true
  [("a", "b", "c")].indexOf("a") > -1; //true

console.log(arr.indexOf("es7")); // 1
console.log(arr.indexOf("es7") > -1); // true
```

2. `includes`方法只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些是无法判断的.

```js
const arr = [1, [2, 3], 4];
arr.includes([2, 3]); //false
arr.indexOf([2, 3]); //-1
```

3. 两者都是采用`===`的操作符来作比较的，不同之处在于：对于`NaN`的处理结果不同。我们知道`js`中 `NaN === NaN` 的结果是`false`, `indexOf()`也是这样处理的，但是`includes()`不是这样的。

```js
const demo = [1, NaN, 2, 3];
demo.indexOf(NaN); //-1
demo.includes(NaN); //true
```

总结

如果只想知道某个值是否在数组中存在，而并不关心它的索引位置，建议使用`includes()`。如果想获取一个值在数组中的位置，那么只能使用`indexOf`方法。

### 幂运算符\*\*

如果不使用任何函数，如何实现一个数的求幂运算？

```js
function pow(x, y) {
  let res = 1;
  for (let i = 0; i < y; i++) {
    res *= x;
  }
  return res;
}

pow(2, 10); // 1024
```

除了自己封装函数来实现，也可是使用  `Math.pow()`  来完成。

> Math.pow() 函数返回基数（base）的指数（exponent）次幂。

```js
console.log(Math.pow(2, 10)); // 1024
```

在 `ES7` 可以这样写了：

```js
console.log(2 ** 10); // 1024
```

注意，幂运算符的两个\*号之间不能出现空格，否则语法会报错。

## ECMAScript2017(ES8)

### Async/Await

在`ES2017（ES8）`中引入了  `async`  函数，使得异步操作变得更加方便。`Async/Await`  的出现，被很多人认为是`js`异步操作的最终且最优雅的解决方案。我们可以简单理解`Async/Await = Generator + Promise`。

#### 语法

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

#### 错误处理

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

#### Async/Await 和 Promise 对比

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

#### Async/Await 和 Generator 对比

1. `Async/Await`内置执行器。 `Generator` 函数的执行必须靠执行器（如`co` 函数库），而 `Async/Await` 函数自带执行器。也就是说，**Async/Await 函数的执行，与普通函数一模一样**。

2. `Async/Await`更好的语义。 `async` 和 `await`，比起星号和 `yield`，语义更清楚了。`async` 表示函数里有异步操作，`await` 表示紧跟在后面的表达式需要等待结果。

### Object 扩展

之前的语法如何获取对象的每一个属性值

```js
const obj = {
  name: "randy",
  age: 24,
};
console.log(Object.keys(obj)); // ['name', 'age']
const res = Object.keys(obj).map((key) => obj[key]);
console.log(res); // ["randy", 24]
```

`ES8`中对象扩展补充了两个静态方法，用于遍历对象：`Object.values()，Object.entries()`

#### Object.values()

`Object.values()` 返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同(`for...in`，但是`for...in`还会遍历原型上的属性值)。

```js
const obj = {
  name: "randy",
  age: 24,
};
console.log(Object.values(obj)); // ["randy", 24]
```

#### Object.entries()

`Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in` 循环遍历该对象时返回的顺序一致。（区别在于 `for-in` 循环也枚举原型链中的属性）

```js
const obj = {
  name: "randy",
  age: 24,
};

for (let [key, value] of obj) {
  console.log(key, value); // Uncaught TypeError: obj is not iterable
}
```

我们知道 `Object` 是不可直接遍历的，上述代码足以说明直接遍历触发了错误。如果使用 `Object.entries()` 则可以完成遍历任务。

```js
const obj = {
  name: "randy",
  age: 24,
};

for (let [k, v] of Object.entries(obj)) {
  console.log(k, v);
  // name randy
  // age 24
}
```

#### Object.getOwnPropertyDescriptors()

`Object.getOwnPropertyDescriptors`用来获取对象所有属性的描述符。

想理解 `Object.getOwnPropertyDescriptors` 这个方法之前，首先要弄懂什么是描述符`descriptor`？

```js
const data = {
  Portland: "78/50",
  Dublin: "88/52",
  Lima: "58/40",
};
```

还是上述那个对象，这里有 `key` 和 `value`，上边的代码把所有的 `key、value` 遍历出来，如果我们不想让 `Lima` 这个属性和值被枚举怎么办？

```js
Object.defineProperty(data, "Lima", {
  enumerable: false,
});

Object.entries(data).map(([city, temp]) => {
  console.log(`City: ${city.padEnd(16)} Weather: ${temp}`);
  // City: Portland         Weather: 78/50
  // City: Dublin           Weather: 88/52
});
```

很成功，`Lima` 没有被遍历出来，那么 `defineProperty` 的第三个参数就是描述符`descriptor`。这个描述符包括几个属性：

- value [属性的值]
- writable [属性的值是否可被改变]
- enumerable [属性的值是否可被枚举]
- configurable [描述符本身是否可被修改，属性是否可被删除]

在`ES6`中笔者就已经讲过了，关于`Object`更多`API`可以看看笔者前面写的[JS Object API 详解](https://juejin.cn/post/7066648818623709221)

```js
console.log(Object.getOwnPropertyDescriptor(data, "Lima"));
// {value: "58/40", writable: true, enumerable: false, configurable: true}
```

这个是获取对象指定属性的描述符，如果想获取对象的所有属性的描述符：

```js
console.log(Object.getOwnPropertyDescriptors(data));
```

### String 扩展

在 `ES8` 中 `String` 新增了两个实例函数 `String.prototype.padStart` 和 `String.prototype.padEnd`，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。

#### String.prototype.padStart()

把指定字符串填充到字符串头部，返回新字符串。

`str.padStart(targetLength [, padString])`

| 参数         | 含义                                           | 必选 |
| ------------ | ---------------------------------------------- | ---- |
| targetLength | 目标字符要保持的长度值                         | Y    |
| padString    | 如果目标字符的长度不够需要的补白字符，默认为空 | N    |

```js
const str = "randy";
console.log(str.padStart(8, "x")); // xxxrandy
console.log(str.padEnd(8, "y")); // randyyyy
console.log(str.padStart(8)); //    randy
```

场景 1：日期格式化,希望把当前日期格式化城：yyyy-mm-dd 的格式：

```js
const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now
  .getDate()
  .toString()
  .padStart(2, "0");
console.log(year, month, day);
console.log(`${year}-${month}-${day}`);
```

场景 2：数字替换

```js
// 数字替换，比如手机号，身份证号
const tel = "13012345678";
const newTel = tel.slice(-4).padStart(tel.length, "*");
console.log(newTel); // *******5678
```

#### String.prototype.padEnd()

方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

`str.padEnd(targetLength [, padString])`

| 参数         | 含义                                           | 必选 |
| ------------ | ---------------------------------------------- | ---- |
| targetLength | 目标字符要保持的长度值                         | Y    |
| padString    | 如果目标字符的长度不够需要的补白字符，默认为空 | N    |

```js
const str1 = "I am learning es";
console.log(str1.padEnd(20, "o"));
// I am learning esoooo

const str2 = "randy";
console.log(str2.padEnd(10));
// "randy     "
```

场景：时间戳统一长度

在 JS 前端我们处理时间戳的时候单位都是 ms 毫秒，但是，后端同学返回的时间戳则不一样是毫秒，可能只有 10 位，以 s 秒为单位。所以，我们在前端处理这个时间戳的时候，保险起见，要先做一个 13 位的补全，保证单位是毫秒。

```js
// 伪代码
console.log(new Date().getTime()); // 时间戳 13位的
timestamp = +String(timestamp).padEnd(13, "0");
```

### 尾逗号 Trailing commas

`ES8` 允许函数的最后一个参数有尾逗号（`Trailing comma`）。

此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。

```js
function clownsEverywhere(param1, param2) {
  /* ... */
}

clownsEverywhere("foo", "bar");
```

上面代码中，如果在`param2`或`bar`后面加一个逗号，就会报错。

如果像上面这样，将参数写成多行（即每个参数占据一行），以后修改代码的时候，想为函数 clownsEverywhere 添加第三个参数，或者调整参数的次序，就势必要在原来最后一个参数后面添加一个逗号。这对于版本管理系统来说，就会显示添加逗号的那一行也发生了变动。这看上去有点冗余，因此新的语法允许定义和调用时，尾部直接有一个逗号。

```js
function clownsEverywhere(param1, param2) {
  /* ... */
}

clownsEverywhere("foo", "bar");
```

这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。

## ECMAScript2018(ES9)

### for await of

异步迭代器(`for-await-of`)：循环等待每个`Promise`对象变为`resolved`状态才进入下一步。

我们知道 `for...of` 是同步运行的，有时候一些任务集合是异步的，那这种遍历怎么办呢？

```js
function Gen(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for (let item of arr) {
    console.log(Date.now(), item.then(console.log));
  }
}

test();
// 1560090138232 Promise {<pending>}
// 1560090138234 Promise {<pending>}
// 1560090138235 Promise {<pending>}
// 100
// 2000
// 3000
```

这里写了几个小任务，分别是 2000ms 、100ms、3000ms 后任务结束。在上述遍历的过程中可以看到三个任务是同步启动的，然后输出上也不是按任务的执行顺序输出的，这显然不太符合我们的要求。

聪明的同学一定能想起来 `await` 的作用，它可以中断程序的执行直到这个 `Promise` 对象的状态发生改变，我们修改上面的代码：

```js
function Gen(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for (let item of arr) {
    console.log(Date.now(), await item.then(console.log));
  }
}

test();
// 2000
// 1560091834772 undefined
// 100
// 1560091836774 undefined
// 3000
// 1560091836775 undefined
```

从返回值看确实是按照任务的先后顺序进行的，其中原理也有说明是利用了 `await` 中断程序的功能。

在 `ES9` 中也可以用 `for...await...of` 的语法来操作：

```js
function Gen(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for await (let item of arr) {
    console.log(Date.now(), item);
  }
}

test();
// 1560092345730 2000
// 1560092345730 100
// 1560092346336 3000
```

从这个结果来看和第二种写法效果差不多，但是工作原理确完全不同，重点观察下输出的时间（Chrome Console）, 第二种写法是代码块中有 await 导致等待 Promise 的状态而不再继续执行；第三种写法是整个代码块都不执行，等待 arr 当前的值（Promise 状态）发生变化之后，才执行代码块的内容。

回想我们之前给数据结构自定义遍历器是同步的，如果想定义适合 `for...await...of` 的异步遍历器该怎么做呢？答案是 `Symbol.asyncIterator`。

```js
let obj = {
  count: 0,
  Gen(time) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ done: false, value: time });
      }, time);
    });
  },
  [Symbol.asyncIterator]() {
    let self = this;
    return {
      next() {
        self.count++;
        if (self.count < 4) {
          return self.Gen(Math.random() * 1000);
        } else {
          return Promise.resolve({
            done: true,
            value: "",
          });
        }
      },
    };
  },
};

async function test() {
  for await (let item of obj) {
    console.log(Date.now(), item);
  }
}
// 1560093560200 649.3946561938179
// 1560093560828 624.6310222512955
// 1560093561733 901.9497480464518
```

### Object Rest & Spread

前面在讲 `function` 的 `Rest & Spread` 方法，忘记的同学可以去复习下。

在 `ES9` 新增 `Object` 的 `Rest & Spread` 方法，直接看下示例：

```js
const input = {
  a: 1,
  b: 2,
};

const output = {
  ...input,
  c: 3,
};

console.log(output); // {a: 1, b: 2, c: 3}
```

这块代码展示了 `spread` 语法，可以把 `input` 对象的数据都拓展到 `output` 对象，这个功能很实用。

我们再来看下 `Object rest` 的示例：

```js
const input = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, ...rest } = input;

console.log(a, rest); // 1 {b: 2, c: 3}
```

当对象 `key-value` 不确定的时候，把必选的 `key` 赋值给变量，用一个变量收敛其他可选的 `key` 数据，这在之前是做不到的。

### Promise 扩展

#### Promise.prototype.finally()

指定不管最后状态如何都会执行的回调函数。

`Promise.prototype.finally()` 方法返回一个`Promise`，在`promise`执行结束时，无论结果是`fulfilled`或者是`rejected`，在执行`then()`和`catch()`后，都会执行`finally`指定的回调函数。这为指定执行完`promise`后，无论结果是`fulfilled`还是`rejected`都需要执行的代码提供了一种方式，避免同样的语句需要在`then()`和`catch()`中各写一次的情况。

**基本语法**

> p.finally(onFinally)

**示例**

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    // reject('fail')
  }, 1000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
```

比如我们常用的场景：loading 关闭

需要每次发送请求，都会有`loading`提示，请求发送完毕，就需要关闭`loading`提示框，不然界面就无法被点击。不管请求成功或是失败，这个`loading`都需要关闭掉，这时把关闭`loading`的代码写在`finally`里再合适不过了。

## ECMAScript2019(ES10)

### Object 扩展

#### Object.fromEntries()

方法 `Object.fromEntries()` 把键值对列表转换为一个对象，这个方法是和 `Object.entries()` 相对的。

```js
Object.fromEntries([
  ["foo", 1],
  ["bar", 2],
]);
// {foo: 1, bar: 2}
```

案例 1：`Object` 转换操作

```js
const obj = {
  name: "randy",
  course: "es",
};
const entries = Object.entries(obj);
console.log(entries);
// [Array(2), Array(2)]

// ES10
const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);
// {name: "randy", course: "es"}
```

案例 2：`Map` 转 `Object`

```js
const map = new Map();
map.set("name", "randy");
map.set("course", "es");
console.log(map);

const obj = Object.fromEntries(map);
console.log(obj);
// {name: "randy", course: "es"}
```

案例 3：过滤

`course`表示所有课程，想请求课程分数大于 80 的课程组成的对象：

```js
const course = {
    math: 80,
    english: 85,
    chinese: 90
}
const res = Object.entries(course).filter(([key, val]) => val > 80)
console.log(res)
console.log(Object.fromEntries(res)
```

### String 扩展

#### String.prototype.trimStart()

`trimStart()` 方法从字符串的开头删除空格，`trimLeft()`是此方法的别名。

**语法**

> str.trimStart() 或 str.trimLeft()

注意，虽然 `trimLeft` 是 `trimStart` 的别名，但是你会发现 `String.prototype.trimLeft.name === 'trimStart'`，一定要记住

**示例**

```js
let str = "   foo  ";
console.log(str.length); // 8
str = str.trimStart();
console.log(str.length); // 5
```

#### String.prototype.trimEnd()

`trimEnd()` 方法从一个字符串的右端移除空白字符，`trimRight` 是 `trimEnd` 的别名。

**语法**

> str.trimEnd() 或 str.trimRight()

注意，虽然 `trimRight` 是 `trimEnd` 的别名，但是你会发现 `String.prototype.trimRight.name === 'trimEnd'`，一定要记住

**示例**

```js
let str = "   foo  ";
console.log(str.length); // 8
str = str.trimEnd();
console.log(str.length); // 6
```

### Array 扩展

#### Array.prototype.flat()

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

> const newArray = arr.flat(depth)

**解释**

| 参数  | 含义                                     | 必选 |
| ----- | ---------------------------------------- | ---- |
| depth | 指定要提取嵌套数组的结构深度，默认值为 1 | N    |

**示例**

```js
const numbers = [1, 2, [3, 4, [5, 6]]];
console.log(numbers.flat());
// [1, 2, 3, 4, [5, 6]]
```

此时 `flat` 的参数没有设置，取默认值 1，也就是说只扁平化向下一级，遇到 `[3, 4, [5, 6]]` 这个数组会扁平会处理，不会再继续遍历内部的元素是否还有数组

```js
const numbers = [1, 2, [3, 4, [5, 6]]];
console.log(numbers.flat(2));
// [1, 2, 3, 4, 5, 6]
```

当 `flat` 的参数大于等于 2，返回值就是 `[1, 2, 3, 4, 5, 6]` 了。

#### Array.prototype.flatMap()

`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。从方法的名字上也可以看出来它包含两部分功能一个是 `map`，一个是 `flat`（深度为 1）。

**语法**

> const new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {// 返回新数组的元素 }[, thisArg])

**解释**

| 参数     | 含义                                                                           | 必选 |
| -------- | ------------------------------------------------------------------------------ | ---- |
| callback | 可以生成一个新数组中的元素的函数，可以传入三个参数：currentValue、index、array | Y    |
| thisArg  | 遍历函数 this 的指向                                                           | N    |

**示例**

```js
const numbers = [1, 2, 3];
numbers.map((x) => [x * 2]); // [[2], [4], [6]]
numbers.flatMap((x) => [x * 2]); // [2, 4, 6]
```

这个示例可以简单对比下 map 和 flatMap 的区别。当然还可以看下下面的示例：

```js
let arr = ["今天天气不错", "", "早上好"];
arr.map((s) => s.split(""));
// [["今", "天", "天", "气", "不", "错"],[""],["早", "上", "好"]]
arr.flatMap((s) => s.split(""));
// ["今", "天", "天", "气", "不", "错", "", "早", "上", "好"]
```

### Function 扩展

#### Function.prototype.toString()

函数是对象，并且每个对象都有一个 `.toString()` 方法，因为它最初存在于`Object.prototype.toString()` 上。所有对象（包括函数）都是通过基于原型的类继承从它继承的。这意味着我们以前已经有 `funcion.toString()` 方法了。

`Function.prototype.toString()` 方法返回一个表示当前函数源代码的字符串。

这意味着还将返回注释、空格和语法详细信息。

```js
function foo() {
  // es10新特性
  console.log("randy");
}
console.log(foo.toString());

// 直接在方法名toString()
console.log(Number.parseInt.toString());
```

### 可选的 Catch Binding

在 `ES10` 之前我们都是这样捕获异常的：

```js
try {
  // tryCode
} catch (err) {
  // catchCode
}
```

在这里 `err` 是必须的参数，在 `ES10` 可以省略这个参数

```js
try {
  console.log("Foobar");
} catch {
  console.error("Bar");
}
```

案例：验证参数是否为 json 格式

这个需求我们只需要返回`true`或`false`，并不关心`catch`的错误。

```js
const validJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
};

const json = '{"name":"randy", "course": "es"}';
console.log(validJSON(json));
```

### JSON 扩展

#### JSON.stringify() 增强能力

`JSON.stringify` 在 `ES10` 修复了对于一些超出范围的 `Unicode` 展示错误的问题。因为 `JSON` 都是被编码成 `UTF-8`，所以遇到 `0xD800–0xDFFF` 之内的字符会因为无法编码成 `UTF-8` 进而导致显示错误。在 `ES10` 它会用转义字符的方式来处理这部分字符而非编码的方式，这样就会正常显示了。

```js
// \uD83D\uDE0E  emoji 多字节的一个字符
console.log(JSON.stringify("\uD83D\uDE0E")); // 笑脸

// 如果我们只去其中的一部分  \uD83D 这其实是个无效的字符串
// 之前的版本 ，这些字符将替换为特殊字符，而现在将未配对的代理代码点表示为JSON转义序列
console.log(JSON.stringify("\uD83D")); // "\ud83d"
```

### Symbol 扩展

#### Symbol.prototype.description

我们知道，`Symbol` 的描述只被存储在内部的  `Description` ，没有直接对外暴露，我们只有调用 `Symbol` 的 `toString()` 时才可以读取这个属性：

```js
const name = Symbol("es");
console.log(name.toString()); // Symbol(es)
console.log(name); // Symbol(es)
console.log(name === "Symbol(es)"); // false
console.log(name.toString() === "Symbol(es)"); // true
```

现在可以通过 `description` 方法获取 `Symbol` 的描述:

```js
const name = Symbol("es");
console.log(name.description); // es
console.log(name.description === "es"); // true
```

## ECMAScript2020(ES11)

### String 扩展

#### String.prototype.matchAll()

`matchAll()` 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器

**语法**

> str.matchAll(regexp)

**解释**

| 参数   | 含义           | 必选 |
| ------ | -------------- | ---- |
| regexp | 正则表达式对象 | Y    |

注意

1.  如果所传参数不是一个正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 `RegExp`
2.  返回值一个迭代器，但是不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器

**示例**

```js
const str = `
  <html>
    <body>
      <div>第一个div</div>
      <p>这是一个p</p>
      <span>span</span>
      <div>第二个div</div>
    <body>
  </html>
`;
```

请找出所有的 div 元素。

```js
function selectDiv(regExp, str) {
  let matches = [];
  for (let match of str.matchAll(regExp)) {
    console.log(match);
    matches.push(match[1]);
  }
  return matches;
}
const res = selectDiv(/<div>(.*)<\/div>/g, str);
console.log(res); // ['第一个div', '第二个div']
```

### Dynamic Import

按需 `import` 提案几年前就已提出，如今终于能进入`ES`正式规范。这里个人理解成“按需”更为贴切。现代前端打包资源越来越大，打包成几 M 的 JS 资源已成常态，而往往前端应用初始化时根本不需要全量加载逻辑资源，为了首屏渲染速度更快，很多时候都是按需加载，比如懒加载图片等。而这些按需执行逻辑资源都体现在某一个事件回调中去加载。

页面上有一个按钮，点击按钮才去加载`ajax`模块。

```js
const oBtn = document.querySelector("#btn");
oBtn.addEventListener("click", () => {
  import("./ajax").then((mod) => {
    // console.log(mod)
    mod.default("static/a.json", (res) => {
      console.log(res);
    });
  });
});
```

当然，`webpack`目前已很好的支持了该特性。

### BigInt

在 `ES10` 增加了新的原始数据类型：`BigInt`，表示一个任意精度的整数，可以表示超长数据，可以超出 2 的 53 次方。

Js 中 Number 类型只能安全的表示-(2^53-1)至 2^53-1 范的值

```js
console.log(2 ** 53); // es7 幂运算符
console.log(Number.MAX_SAFE_INTEGER); // 最大值-1
```

使用 BigInt 有两种方式：

方式一：数字后面增加 n

```js
const bigInt = 9007199254740993n;
console.log(bigInt);
console.log(typeof bigInt); // bigint

console.log(1n == 1); // true
console.log(1n === 1); // false
```

方式二：使用 BigInt 函数

```js
const bigIntNum = BigInt(9007199254740993);
console.log(bigIntNum);
```

### Promise 扩展

#### Promise.allSettled()

学习了`ES`新特性，我们都知道 `Promise.all()` 具有并发执行异步任务的能力。但它的最大问题就是如果其中某个任务出现异常`reject`，所有任务都会挂掉，`Promise`直接进入 `reject` 状态。

`Promise.allSettled()`方法就是不管是否成功失败，都会返回结果并进入`then`方法。

场景：现在页面上有三个请求，分别请求不同的数据，如果一个接口服务异常，整个都是失败的，都无法渲染出数据

```js
Promise.all([
  Promise.reject({
    code: 500,
    msg: "服务异常",
  }),
  Promise.resolve({
    code: 200,
    data: ["1", "2", "3"],
  }),
  Promise.resolve({
    code: 200,
    data: ["4", "5", "6"],
  }),
])
  .then((res) => {
    console.log(res);
    console.log("成功");
  })
  .catch((err) => {
    console.log(err);
    console.log("失败");
  });
```

我们需要一种机制，如果并发任务中，无论一个任务正常或者异常，都会返回对应的的状态

```js
Promise.allSettled([
  Promise.reject({
    code: 500,
    msg: "服务异常",
  }),
  Promise.resolve({
    code: 200,
    data: ["1", "2", "3"],
  }),
  Promise.resolve({
    code: 200,
    data: ["4", "5", "6"],
  }),
])
  .then((res) => {
    console.log(res); // [{…}, {…}, {…}]
    const data = res.filter((item) => item.status === "fulfilled");
    console.log(data); // [{…}, {…}]
  })
  .catch((err) => {
    console.log(err);
    console.log("失败");
  });
```

### globalThis

`Javascript` 在不同的环境获取全局对象有不通的方式：

- node 中通过 global
- web 中通过 window, self 等.

> self：打开任何一个网页，浏览器会首先创建一个窗口，这个窗口就是一个 window 对象，也是 js 运行所依附的全局环境对象和全局作用域对象。self 指窗口本身，它返回的对象跟 window 对象是一模一样的。也正因为如此，window 对象的常用方法和函数都可以用 self 代替 window。

```js
self.setTimeout(() => {
  console.log(123);
}, 1000);
```

以前想要获取全局对象，可通过一个全局函数

```js
const getGlobal = () => {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("无法找到全局对象");
};

const globals = getGlobal();
console.log(globals);
```

`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身）。不像 `window` 或者 `self` 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 `globalThis`，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 `this` 就是 `globalThis`。

```js
console.log(globalThis);
```

### 可选链 Optional chaining

可让我们在查询具有多层级的对象时，不再需要进行冗余的各种前置校验。

```js
const user = {
  address: {
    street: "xx街道",
    getNum() {
      return "80号";
    },
  },
};
```

在之前的语法中，想获取到深层属性或方法，不得不做的前置校验，否则很容易命中  `Uncaught TypeError: Cannot read property...`  这种错误，这极有可能让你整个应用挂掉。

```js
const street = user && user.address && user.address.street;
const num =
  user && user.address && user.address.getNum && user.address.getNum();
console.log(street, num);
```

用了 `Optional Chaining` ，上面代码会变成

```js
const street2 = user?.address?.street;
const num2 = user?.address?.getNum?.();
console.log(street2, num2);
```

可选链中的 ? 表示如果问号左边表达式有值, 就会继续查询问号后面的字段。根据上面可以看出，用可选链可以大量简化类似繁琐的前置校验操作，而且更安全。

### 空值合并运算符（Nullish coalescing Operator）

空值合并运算符 `??` 是一个逻辑运算符。当左侧操作数为 `null` 或 `undefined` 时，其返回右侧的操作数。否则返回左侧的操作数。

当我们查询某个属性时，经常会遇到，如果没有该属性就会设置一个默认的值。

```js
const b = 0;
const a = b || 5;
console.log(a); // 5
```

上面的例子并不符合我们的需求，因为它把 0 也当做无效值了。

空值合并运算符 `??` 我们仅在第一项为 `null` 或 `undefined` 时设置默认值

```js
const b = 0;
const a = b || 5;
console.log(a); // 0
```

## ECMAScript2021(ES12)

### String 扩展

#### String.prototype.replaceAll()

`replace()`  方法仅**替换一个**字符串中某模式 `pattern` 的首个实例，
`replaceAll()`  会返回一个新字符串，该字符串中用一个替换项替换了原字符串中**所有匹配**了某模式的部分。模式可以是一个字符串或一个正则表达式，而替换项可以是一个字符串或一个应用于每个匹配项的函数。`replaceAll()` 相当于增强了 `replace()` 的特性，全量替换。

我们来看下面的例子

```js
const str1 = "hello word";

console.log(str1.replace("o", "哦")); // hell哦 word
console.log(str1.replace(/o/g, "哦")); // hell哦 w哦rd
console.log(str1.replaceAll("o", "哦")); // hell哦 w哦rd
console.log(str1.replaceAll(/o/g, "哦")); // hell哦 w哦rd
```

### Promise 扩展

#### Promise.any()

`Promise.any()`和`Promise.race()`类似都是返回第一个结果，但是`Promise.any()`只返回第一个成功的，尽管某个 `promise` 的 `reject` 早于另一个 `promise` 的 `resolve`，仍将**返回那个首先 resolve 的 promise。**

如果都被`reject`则会抛出`All promises were rejected`错误。

```js
Promise.any([Promise.reject("1"), Promise.resolve("2"), Promise.resolve("3")])
  .then((res) => console.log(res)) // 2
  .catch((err) => console.error(err));

Promise.any([Promise.resolve("1"), Promise.resolve("2"), Promise.resolve("3")])
  .then((res) => console.log(res)) // 1
  .catch((err) => console.error(err));

Promise.any([
  Promise.reject("错误 1"),
  Promise.reject("错误 2"),
  Promise.reject("错误 3"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
// AggregateError: All promises were rejected
```

### 逻辑操作符和赋值表达

#### &&=

`&&=`可以理解为**有值再赋值**的意思

```js
let num1 = 1;
let num2 = 2;
num1 &&= num2;
console.log(num1); // 2

let num1 = 0;
let num2 = 2;
num1 &&= num2;
console.log(num1); // 0
```

等价于

```js
num1 && (num1 = num2);
```

或者

```js
if (num1) {
  num1 = num2;
}
```

#### ||=

`&&=`可以理解为**没值再赋值**的意思

```js
let num3 = 3;
let num4 = 4;
num3 ||= num4;
console.log(num1); // 3

let num3 = 0;
let num4 = 4;
num3 ||= num4;
console.log(num3); // 4
```

等价于

```js
num3 || (num3 = num4);
```

或

```js
if (!num3) {
  num3 = num4;
}
```

#### ??=

`??=`跟我们前面说的空值合并运算符 `??`类似，只有在左边的值严格等于  `null`  或  `undefined`  时起作用进行赋值。

```js
let num5 = 0;
let num6 = null;
let num7 = undefined;

num5 ??= 10;
console.log(num5); // 0
num6 ??= 10;
console.log(num6); // 10
num7 ??= 10;
console.log(num7); // 10
```

等价于

```js
num ?? (num = 10);
```

或

```js
if (num === null || num === undefined) {
  num = 10;
}
```

### 数值分隔符

我们定义`number`类型数据的时候，可以使用`_`当做分隔符，让数据更美观易懂，并不会影响该数据的值。

```js
const num1 = 1000000000;
const num2 = 1000_000_000;

console.log(num1); // 1000000000
console.log(num2); // 1000000000
```

### WeakRef

`WeakRef`允许创建对象的弱引用。弱引用笔者在前面讲`weakSet、weakMap`的时候说过了，就是在进行垃圾回收的时候不会考虑该对象是否还在`WeakRef`中使用。

我们必须用  `new`关键字创建新的  `WeakRef`，然后使用`deref()`  读取引用的对象。

```js
let weakref = new WeakRef({ name: "randy", age: 27 });

weakref.deref(); // {name: 'randy', age: 27}
weakref.deref().year; // 27
```

## 总结

笔者用一张图来总结`ES7-ES12`所有知识点。

![ES6+.26bcf225.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b791c13c8faa46a9a542275f7b287f76~tplv-k3u1fbpfcp-watermark.image?)

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
