---
theme: channing-cyan
highlight: a11y-dark
---

## 简介

`JS Object`在我们平时的工作中用得并不多，但是也是我们前端必须掌握的一个知识点。今天请跟随笔者的步伐再来温习一遍。

> 文章里的每个案例都是我亲自编写并验证的，建议阅读文章时，可以在浏览器执行案例，会更有利于理解。

## Object.create(proto，[propertiesObject])

**`Object.create()`** 方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`，返回一个新对象，带着指定的原型对象和属性。

注意如果`proto`参数不是`null`或非原始包装对象，则抛出一个`TypeError`异常。

## Object.getOwnPropertyDescriptor(obj, property)

`Object.getOwnPropertyDescriptor(obj, property)` 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）。

## Object.getOwnPropertyDescriptors(obj)

`Object.getOwnPropertyDescriptors(obj)`  方法用来获取一个对象的所有自身属性的描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）。

## Object.defineProperty(obj, property, propertiesObject)

`Object.defineProperty(obj, property, propertiesObject)`  方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

## Object.defineProperties(obj, propertiesObject)

`Object.defineProperties(obj, propertiesObject)` 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

## Object.entries(obj)

`Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与用  `for...in`循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

## Object.keys(obj)

`Object.keys(obj)`  方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

## Object.values(obj)

`Object.values()`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用`for...in`循环的顺序相同 (区别在于 for-in 循环枚举原型链中的属性)。

## Object.getOwnPropertyNames(obj)

`Object.getOwnPropertyNames(obj)` 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性，但不包括 Symbol 值作为名称的属性）组成的数组。

## Object.getOwnPropertySymbols(obj)

`Object.getOwnPropertySymbols(obj)`  方法返回一个给定对象自身的所有`Symbol`属性的数组。并且不管该`Symbol`属性是否是可枚举，都能遍历出来。

## obj.hasOwnProperty(prop)

`obj.hasOwnProperty(prop)`  方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

这个方法可以用来检测一个对象是否含有特定的自身属性；和  `in`  运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

## obj.propertyIsEnumerable(prop)

`obj.propertyIsEnumerable(prop)`  方法返回一个布尔值，表示指定的属性是否可枚举。

## Object.getPrototypeOf(obj)

`Object.getPrototypeOf()`  方法返回指定对象的原型（内部`[[Prototype]]`属性的值）。

## obj1.isPrototypeOf(obj2)

`isPrototypeOf()`  方法用于测试一个对象是否是另一个对象的原型。

`isPrototypeOf()`  与  `instanceof`运算符不同。`isPrototypeOf()`是直接判断，而`instanceof`会通过原型链层层递归判断。

## Object.setPrototypeOf(obj, prototype)

`Object.setPrototypeOf(obj, prototype)`方法设置一个指定的对象的原型 ( 即内部[[Prototype]]属性）`。

## 实例 1

```js
const proto = { msg: "原型" };

const obj = Object.create(proto, {
  // value的默认值是undefined，writable、enumerable、configurable、默认值都是false
  name: {
    // value: "randy", // 属性值
    // writable: true, // 是否能修改
    // enumerable: true, // 是否枚举 就是能否遍历出来
    // configurable: true, // 该属性描述符是否可以被改变并且该属性是否可以被删除
  },
  [Symbol("a")]: {
    // value: "symboltest",
    // writable: true,
    // enumerable: true,
    // configurable: true,
  },
});

// 这种赋值方式 writable、enumerable、configurable、默认值都是true
obj.age = 24;

console.log(obj); // {age: 24, name: undefined, Symbol(a): undefined}
// Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。
console.log(Object.getOwnPropertyDescriptor(obj, "name")); // {configurable: false,enumerable: false,value: undefined,writable: false}
// Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
// age: {value: 24, writable: true, enumerable: true, configurable: true}
// name: {value: undefined, writable: false, enumerable: false, configurable: false}
// Symbol(a): {value: undefined, writable: false, enumerable: false, configurable: false}
console.log(Object.getOwnPropertyDescriptors(obj));

// writable为false的情况下 修改无效
obj.name = "demi";
// configurable 为false的情况下 删除无效
// delete obj.name;

// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
// configurable 为false的情况下 会报错
// Object.defineProperty(obj, "name", {
//   writable: true,
// });

// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
// configurable 为false的情况下 会报错
// Object.defineProperties(obj, {
//   name: {
//     writable: true,
//   }
// });

// enumerable为true的情况下 才能进行遍历
Object.keys(obj).forEach((key) => {
  console.log("key:", key); // age
});
Object.values(obj).forEach((value) => {
  console.log("value:", value); // 24
});
Object.entries(obj).forEach((entry) => {
  console.log("entry:", entry); // [age, 24];
});
// 该方法例外 能遍历不可枚举属性 但是不包括Symbol 属性
Object.getOwnPropertyNames(obj).forEach((name) => {
  console.log("name:", name); // name age
});
// 并且不管该`Symbol`属性是否是可枚举，都能遍历出来。
Object.getOwnPropertySymbols(obj).forEach((symbolKey) => {
  console.log("symbol:", symbolKey); // Symbol(a)
});

// 是否拥有某属性
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("msg")); // false

// 是否可枚举
console.log(obj.propertyIsEnumerable("name")); // false

// 获取原型
console.log(Object.getPrototypeOf(obj)); // {msg: '原型'}

// 某对象是否是某对象的原型
console.log(proto.isPrototypeOf(obj)); // true

// 设置更新原型
Object.setPrototypeOf(obj, null);
console.log(Object.getPrototypeOf(obj)); // null

console.log(obj); // {age: 24, name: undefined, Symbol(a): undefined}
```

## Object.seal(obj)

`Object.seal(obj)`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。

也就是将`configurable`置为了`false`。只能修改已有属性和遍历。

## Object.isSealed(obj)

`Object.isSealed(obj)`方法判断一个对象是否被密封。

## Object.isExtensible(obj)

`Object.isExtensible()`  方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

## 实例 2

```js
const obj6 = { name: "demi" };
// {name: {value: 'demi', writable: true, enumerable: true, configurable: true}}
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj6)
);
console.log("isSealed: ", Object.isSealed(obj6)); // false
// 对对象进行密封
Object.seal(obj6);
console.log("isSealed: ", Object.isSealed(obj6)); // true
// {name: {value: 'demi', writable: true, enumerable: true, configurable: false}}
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj6)
);
// configurable置为了false 所以不能修改该对象已有属性的可枚举性、可配置性、可写性，也不能删除已有属性
// Object.defineProperty(obj6, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
delete obj6.name; // 不能删除值
obj6.phone = "17673485272"; // 不能添加新属性
obj6.name = "randy"; // 能修改以前是可写的值

console.log("seal: ", obj6); // {name: 'randy'}

// false
console.log("isExtensible: ", Object.isExtensible(obj6), "密封的对象不能扩展");
```

## Object.freeze(obj)

`Object.freeze()`  方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。

也就是将`configurable`和`writable`置为了`false`。只能遍历。

## Object.isFrozen(obj)

`Object.isFrozen(obj)`方法判断一个对象是否被冻结。

## 实例 3

```js
const obj5 = { name: "demi" };
// {name: {value: 'demi', writable: true, enumerable: true, configurable: true}}
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj5)
);
console.log("isFrozen: ", Object.isFrozen(obj5)); // false
// 冻结
Object.freeze(obj5);
console.log("isFrozen: ", Object.isFrozen(obj5)); // true
// {name: {value: 'demi', writable: false, enumerable: true, configurable: false}}
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj5)
);
obj5.age = 25; // 不能添加属性
obj5.name = "randy"; // 不能修改属性
delete obj5.name; // 不能删除属性
// configurable置为了false 不能修改该对象已有属性的可枚举性、可配置性、可写性，也不能删除已有属性
// Object.defineProperty(obj5, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
console.log("freeze: ", obj5); // {name: 'demi'}

// false
console.log("isExtensible: ", Object.isExtensible(obj5), "冻结的对象不能扩展");
```

## Object.assign(target, ...sources)

这个方法在笔者前面的文章[赋值拷贝、浅拷贝、深拷贝](https://juejin.cn/post/7065563314989826078)已经介绍过了，该方法是一个浅拷贝方法，并且会改变原对象。

`Object.assign(target, ...sources)`  方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

## 实例 4

```js
const obj2 = { name: "demi", phone: "17673485272" };
const obj3 = { name: "tom", address: "上海" };
const obj4 = { name: "jack", age: 24 };
console.log(Object.assign(obj2, obj3, obj4)); // {name: 'jack', phone: '17673485272', address: '上海', age: 24}
console.log(obj2); // {name: 'jack', phone: '17673485272', address: '上海', age: 24}
```

## Object.preventExtensions(obj)

`Object.preventExtensions()`方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

该方法只是控制对象不能再添加新属性，并不会像密封、冻结一样修改属性描述符。

## 实例 5

```js
const obj7 = { name: "amy" };
// {name: {value: 'amy', writable: true, enumerable: true, configurable: true}}
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj7)
);
Object.preventExtensions(obj7);
// {name: {value: 'amy', writable: true, enumerable: true, configurable: true}}
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj7)
);

obj7.age = 24; // 不能新增
obj7.name = "amy2"; //能修改
// delete obj7.name; //能删除

console.log("preventExtensions: ", obj7); // {name: 'amy2'}
```

## Object.fromEntries(entries)

`Object.fromEntries(entries)`  方法把键值对列表转换为一个对象。

```js
const entries = new Map([
  ["name", "randy"],
  ["age", 24],
]);

const obj8 = Object.fromEntries(entries);

console.log(obj8); // { name: "randy", age: 24 }
```

## 系列文章

[都 2022 年了你不会还没搞懂 JS 数据类型吧](https://juejin.cn/post/7063670330539114503)

[都 2022 年了你不会还没搞懂 JS 原型和继承吧](https://juejin.cn/post/7065219964549988388)

[都 2022 年了你不会还没搞懂 JS 赋值拷贝、浅拷贝、深拷贝吧](https://juejin.cn/post/7065563314989826078)

[都 2022 年了你不会还没搞懂对象数组的遍历吧](https://juejin.cn/post/7065851124590313502)

[都 2022 年了你不会还没搞懂 this 吧](https://juejin.cn/post/7066275985289084965)

## 参考文章

[MDN Object 章节](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
