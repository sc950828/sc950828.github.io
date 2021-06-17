### 时间测量

```js
console.time();
for (i = 0; i < 100000; i++) {
  // 代码部分
}
console.timeEnd();
```

### 获取自定义属性 data-xxx

```js
// <div id="div1" data-user="randy" data-user-age="24"></div>;

// 第一种方法
const div1 = document.getElementById("div1");
console.log(div1.dataset.user);
console.log(div1.dataset.userAge); // 会变成驼峰式

// 第二种方法
console.log(div1.getAttribute("data-user"));
console.log(div1.getAttribute("data-user-age"));
```

### JS 如何获取盒模型对应的宽和高？

```js
//只能获取、设置内联样式设置的宽高
dom.style;

//获取渲染后所有的css信息。但只支持 IE
dom.currentStyle;

//获取渲染后所有的css信息
window.getComputedStyle(dom);

//只能获取到位置大小信息。
// bottom: 440
// height: 316
// left: 1223.5
// right: 1551.5
// top: 124
// width: 328
// x: 1223.5
// y: 124
dom.getBoundingClientRect();
```
