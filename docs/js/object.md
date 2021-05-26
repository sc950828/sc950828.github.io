## Object.create

创建一个指定原型的对象

```js
// 创建一个指定原型的对象
console.log("--- Object.create ---");
const test = Object.create(
  {
    address: "xxx",
  },
  {
    name: {
      value: "test",
      configurable: true,
      writable: true,
      enumerable: true,
    },
  }
);
console.log("Object.create()", test);
```

## Object.setPrototypeOf

设置指定对象的原型

```js
const s1 = Symbol("s1");

function User() {
  this.name = "randy";
  this[s1] = "s";
}

User.prototype = {
  address: "xxx",
};
const user = new User();

// 设置原型
Object.setPrototypeOf(user, {
  address: "miluo",
});
```

## Object.getPrototypeOf

获取指定对象的原型

```js
const s1 = Symbol("s1");

function User() {
  this.name = "randy";
  this[s1] = "s";
}

User.prototype = {
  address: "xxx",
};
const user = new User();

// 设置原型
Object.setPrototypeOf(user, {
  address: "miluo",
});

console.log(Object.getPrototypeOf(user)); // {address: "miluo"}
```

## Object.defineProperty

定义对象的属性

```js
const s1 = Symbol("s1");

function User() {
  this.name = "randy";
  this[s1] = "s";
}

User.prototype = {
  address: "xxx",
};
const user = new User();
// 新定义的属性 描述默认都是false 值默认是undefined
Object.defineProperty(user, "age", {
  value: 24, // 设置初始值
  // enumerable: true, // 用来控制是否能循环出来
  // writable: true, // 用来控制是否可修改
  // configurable: true, // 用来控制是否能删除 以及除 value 和 writable 特性外的其他特性是否可以被修改。
});
```

## Object.defineProperties

一次性定义对象多个属性

```js
const s1 = Symbol("s1");

function User() {
  this.name = "randy";
  this[s1] = "s";
}

User.prototype = {
  address: "xxx",
};
const user = new User();

// 一次定义多个属性
Object.defineProperties(user, {
  test: {
    // value: "test",
    configurable: true,
    // writable: true,
    enumerable: true,
    // 有了 get set方法后不能定义 value和writable
    get() {
      return "111";
    },
    set(val) {
      console.log(val);
    },
  },
  // ...
});
```

## Object.getOwnPropertyDescriptor

获取对象某属性的描述

```js
console.log(Object.getOwnPropertyDescriptor(user, "age"));
// {value: 24, writable: false, enumerable: false, configurable: false}
```

## Object.getOwnPropertyDescriptors

获取对象的所有属性描述

```js
// 输出对象所有属性的描述
console.log("---Object.getOwnPropertyDescriptors---");
console.log(Object.getOwnPropertyDescriptors(user));
```

## Object getOwnPropertyNames

获取对象的属性 能获取自身不可枚举的属性 不能获取 Symbol 类型的键

```js
for (const key of Object.getOwnPropertyNames(user)) {
  console.log(key);
}
```

## Object getOwnPropertySymbols

只能获取自身 Symbol 类型的键

```js
for (const key of Object.getOwnPropertySymbols(user)) {
  console.log(key);
}
```

## delete

delete 用来删除某属性

```js
delete user.age;
console.log(user.age);
```

## Object.is

```js
// Object.is() 和 === 基本相同 除了 +0 -0 NaN的判断
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(+0 === -0); // true
```

## Object.freeze

冻结一个对象。一个被冻结的对象再也不能被修改

```js
// 冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
// 此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

// 也就是只能遍历 啥都不能干
Object.freeze(user);
// 是否冻结
console.log("Object.isFrozen()", Object.isFrozen());
user.name = "demi";
delete user.name;
user.sex = "男";
console.log(user);
```

## Object.isFrozen

判断一个对象是否冻结

```js
console.log("Object.isFrozen()", Object.isFrozen());
```

## Object.seal

封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。

```js
// 当前属性的值只要原来是可写的就可以改变。

// 也就是能遍历 以前能修改还能修改 但是不能删除和新增属性
Object.seal(user);
console.log("Object.isSealed()", Object.isSealed());
user.name = "demi";
delete user.name;
user.sex = "男";
console.log(user);

// const obj = { name: "randy", age: 27 };
// const entries = Object.entries(obj);
// console.log(entries);
// 这个方法暂时还不支持
// const newObj = Object.fromEntried(entries);
// console.log(newObj);
```

## Object.isSealed

判断一个对象是否密封

```js
console.log("Object.isSealed()", Object.isSealed());
```

## preventExtensions

主动禁止对象可扩展 也就是永远不能再添加新的属性。

```js
// 主动禁止对象可扩展 也就是永远不能再添加新的属性。
Object.preventExtensions(user);
```

## Object.isExtensible

判断对象是否可以扩展

```js
// 对象是否能扩展 被冻结或者密封之后是false 或者主动调用 Object.preventExtensions()
console.log("Object.isExtensible()", Object.isExtensible(user));
```

## 对象的遍历

```js
// 获取对象的属性 能获取自身不可枚举的属性 不能获取Symbol类型的键
console.log("--- Object getOwnPropertyNames ---");
for (const key of Object.getOwnPropertyNames(user)) {
  console.log(key);
}

// 只能获取自身Symbol类型的键
console.log("--- Object getOwnPropertySymbols ---");
for (const key of Object.getOwnPropertySymbols(user)) {
  console.log(key);
}

// 能获取原型链上的属性 只能获取自身可枚举的属性 不能获取Symbol类型的键
console.log("--- for in ---");
for (const key in user) {
  console.log(key);
}

// 只能获取自身可枚举的属性 不能获取Symbol类型的键
console.log("--- Object keys ---");
for (const key of Object.keys(user)) {
  console.log(key);
}

// 只能获取自身可枚举的属性 不能获取Symbol类型的键
console.log("--- Object values ---");
for (const value of Object.values(user)) {
  console.log(value);
}

// 只能获取自身可枚举的属性 不能获取Symbol类型的键
console.log("--- Object entries ---");
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// 不但能获取自身不可枚举属性 还能获取Symbol类型的键 不能获取原型链上的属性
console.log("--- Reflect ownKeys ---");
for (const key of Reflect.ownKeys(user)) {
  console.log(key);
}
```
