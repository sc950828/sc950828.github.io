---
theme: channing-cyan
highlight: an-old-hope
---

## 简介

最近在面试时候，发现很多小伙伴对 js 事件还不太熟悉，比如绑定事件的方式、事件监听、事件委托、事件传播、事件捕获、事件冒泡等等。今天笔者总结下，希望可以帮助到你们。

## 给 dom 元素绑定事件的方式有哪些

给 `dom` 绑定事件的方式主要有三种：

1. 在 `dom` 元素上直接绑定
2. 在 `js` 中获取 `dom` 元素再进行绑定
3. 利用事件监听。利用事件监听的优点是可以给同一 `dom` 对象绑定多个相同事件。

下面笔者举三个例子来描述下绑定事件的三种方式

### 在 dom 元素上直接绑定

在`dom`元素上直接绑定平常使用的较多，直接在`html`标签里面写对应的事件和处理方法。

```html
<div id="div1" onclick="click1(event)">
  <span>点我吧1</span>
</div>
```

```js
// 在dom元素上直接绑定事件
function click1(e) {
  console.log(this); // window
  console.log("currentTarget", e.currentTarget); // <div id="div1"><span>点我吧1</span></div>
  console.log("target", e.target); // <span>点我吧1</span>
}
// const click1 = (e) => {
//   console.log(this); // window
//   console.log("currentTarget", e.currentTarget); // <div id="div1"><span>点我吧1</span></div>
//   console.log("target", e.target); // <span>点我吧1</span>
// };
```

### 在 js 中获取 dom 元素再进行绑定

```html
<div id="div2">
  <span>点我吧2</span>
</div>
```

```js
// 在js中获取dom元素再进行事件绑定
const div2 = document.getElementById("div2");
div2.onclick = function(e) {
  console.log(this); // <div id="div2"><span>点我吧2</span></div>
  console.log("currentTarget", e.currentTarget); // <div id="div2"><span>点我吧2</span></div>
  console.log("target", e.target); // <span>点我吧2</span>
};
// div2.onclick = (e) => {
//   console.log(this); // window
//   console.log("currentTarget", e.currentTarget); // <div id="div2"><span>点我吧2</span></div>
//   console.log("target", e.target); // <span>点我吧2</span>
// };
```

### 使用事件监听

事件监听有标准事件监听和非标准事件监听两种版本，一般我们书写代码的时候需要做兼容处理，这个笔者后面会总结。

```js
// 标准的事件监听 ie9及以上才支持
// 添加事件 element.addEventListener(event, function, EventListenerOptions)
// 移除事件 element.removeEventListener(event, function)

event:（必需）事件名，支持所有 DOM事件。使用监听的时候需要去掉事件前缀on。
function:（必需）指定要事件触发时执行的函数。
EventListenerOptions { // 一般我们只设置一个布尔值 也就是capture的值，定义时冒泡还是捕获。
  capture?: boolean //（可选）指定事件是否在捕获或冒泡阶段执行。true，捕获。false，冒泡。默认false。
  once?: boolean // 表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除.
  passive?: boolean // 设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
}

// 非标准 ie8及以下使用这种
// 添加事件 element.attachEvent("on" + event, function)
// 移除事件 element.detachEvent("on" + event, function)
event：（必需）事件类型。需加“on“，例如：onclick。
function：（必需）指定要事件触发时执行的函数。
```

下面笔者的例子是按标准版本事件监听写的。

```html
<div id="div3">
  <span>点我吧3</span>
</div>
```

```js
// 利用事件监听给dom元素添加事件，并且可以添加多个相同事件
const div3 = document.getElementById("div3");
div3.addEventListener("click", function(e) {
  console.log(this); // <div id="div3"><span>点我吧3</span></div>
  console.log("currentTarget", e.currentTarget); // <div id="div3"><span>点我吧3</span></div>
  console.log("target", e.target); // <span>点我吧1</span>
});
div3.addEventListener("click", (e) => {
  console.log(this); // window
  console.log("currentTarget", e.currentTarget); // <div id="div3"><span>点我吧3</span></div>
  console.log("target", e.target); // <span>点我吧3</span>
});
```

## 事件对象中 target 和 currentTarget 有什么区别

从上面的例子我们可以看出`target` 是触发事件的元素，`currentTarget` 是绑定事件的元素。

## 什么是事件传播，事件传播的三个阶段是什么？

当事件发生在某 `DOM` 元素上时，该事件并不完全只发生在那个元素上。而是会进行事件的传递，这个传递过程就是事件传播。

事件传播分为捕获阶段、目标阶段、冒泡阶段三个阶段

- 捕获阶段 事件从 window 开始，然后向下到每个元素，直到到达目标元素。
- 目标阶段 事件已达到目标元素。
- 冒泡阶段 事件从目标元素冒泡，然后上升到每个元素，直到到达 window。

事件传播路径如图所示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0edbd5872d1450c97057034e12b230a~tplv-k3u1fbpfcp-zoom-1.image)

## 事件冒泡和事件捕获

**事件冒泡（dubbed bubbling）**： 当鼠标点击或者触发 dom 事件时（被触发 dom 事件的这个元素被叫作事件源），浏览器会从事件源 => 根节点（由内到外）进行事件传播。

**事件捕获（event capturing）**： 当鼠标点击或者触发 dom 事件时（被触发 dom 事件的这个元素被叫作事件源），浏览器会从根节点 =>事件源（由外到内）进行事件传播。

`dom` 标准事件流的触发的先后顺序为：先捕获再冒泡。即当触发 `dom` 事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡。但是默认是冒泡事件，所以冒泡的时候才会进行事件的触发，也就是由内到外。

### 改变事件触发时间

从上面我们了解到，**事件都会经历捕获到冒泡阶段**，只是事件默认触发时间是在冒泡阶段才会触发。所以我们有没有什么办法来改变事件触发时间呢？比如想在捕获阶段就触发事件。

这个是可以的，我们可以利用事件监听，设置`addEventListener`方法第三个参数为`true`就把事件变为捕获阶段执行。在 vue 里面我们使用`@click.capture`把事件变为捕获阶段执行。

### 阻止事件冒泡

我们使用`e.stopPropagation()`或`e.cancelBubble = true;（老IE浏览器）`阻止事件冒泡。

在 vue 里面我们使用`@click.stop`阻止事件冒泡。

### 阻止事件默认行为

我们使用`e.preventDefault()`或`e.returnValue = true;（老IE浏览器）`阻止事件默认行为。

在 vue 里面我们使用`@click.prevent`阻止事件默认行为。

## 事件委托

事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。合理利用事件委托能大大提高程序性能。

比如我们有点击每个`li`标签的时候弹出对应`li`标签的内容的需求，就可以使用事件委托啦。把事件统一绑定在父元素`ul`上，就不需要给每个`li`元素再绑定事件啦。

```html
<ul onclick="click4(event)">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const click4 = (e) => {
  const event = e || window.event;
  const target = event.target || event.srcElement;
  alert(target.innerText);
};
```

事件委托可以显著的提高事件的处理速度，减少内存的占用使用事件委托我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

## 通用的事件侦听器函数

通过前面的介绍我们了解到，事件有标准和非标准之分，所以在书写上也会有少许差异。比如事件监听方法、阻止事件冒泡方法、阻止默认事件方法、获取事件对象方法等等。所以需要一个通用的兼容方案，来保证方法的可用性。

```js
const EventUtils = {
  // 添加事件
  addEvent: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  // 移除事件
  removeEvent: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },

  // 获取事件目标
  getTarget: function(event) {
    return event.target || event.srcElement;
  },

  // 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
  getEvent: function(event) {
    return event || window.event;
  },

  // 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  // 取消事件的默认行为
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
};
```

## 自定义事件

除了使用系统内置事件外，`js`还支持我们创建自定义事件。

我们可以使用`new Event()`或`new CustomEvent()`来创建事件，使用`document.addEventListener`来监听事件，使用`document.dispatchEvent`或`document.fireEvent`来触发事件。

```js
// 创建自定义事件 不能传递参数
const myEvent = new Event("test");

// 监听自定义事件
document.addEventListener("test", function(e) {
  console.log("自定义事件触发了", e);
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

使用`new CustomEvent()`创建自定义事件的时候我们可以传递参数(参数是一个对象，`key`必须是`detail`值就是我们需要传递的参数)，参数可在事件对象的`detail`里面获取。

```js
// 创建自定义事件 能传递参数，必须使用detail作为key不然获取不到
const myEvent2 = new CustomEvent("test2", { detail: { name: "randy" } });

// 监听自定义事件
document.addEventListener("test2", function(e) {
  console.log("自定义事件触发了参数是", e.detail); // {name: 'randy'}
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

## 扩展

### stopImmediatePropagation()

`stopImmediatePropagation()`方法会阻止剩下的事件处理程序被执行。如果一个元素上绑定了三个事件，在其中一个事件上调用了这个方法，那其他的两个事件将不会被执行。

### load 事件和 DOMContentLoaded 事件

当 `onload` 事件触发时，页面上所有的 `DOM`，样式表，脚本，图片，`flash` 都已经加载完成了。

当 `DOMContentLoaded` 事件触发时，仅当 `DOM` 加载完成，不包括样式表，图片，`flash`。如果页面中同时存在 `css` 和 `js`，并且存在 `js` 在 `css` 后面，则 `DOMContentLoaded` 事件会在 `css` 加载完后才执行。其他情况下，`DOMContentLoaded` 都不会等待 `css` 加载，并且 `DOMContentLoaded` 事件也不会等待图片、视频等其他资源加载。

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
