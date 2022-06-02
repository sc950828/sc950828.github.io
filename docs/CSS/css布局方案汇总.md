---
theme: condensed-night-purple
highlight: a11y-dark
---

## 简介

布局在我们前端日常开发来说是非常重要的，一个好的布局能简化代码的同时还能提高网页的性能。常见的布局方法有`浮动(float)布局`、`绝对定位(position)布局`、`表格布局(table)`、`弹性(flex)布局`、`网格(grid)布局`。关于布局方法本文不做详细讲解，笔者推荐看[阮一峰老师 flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
和[阮一峰老师 grid 布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)。

本文主要讲解`水平垂直居中`、`等高布局`、`单栏布局`、`双栏布局`、`三栏布局`一些项目中常用的布局方案。

> 本文代码全部使用`codepen`在线代码工具进行演示。

## 居中

居中在我们日常工作中还是会经常碰到。

### 水平居中

对于水平居中一般可以使用如下四种方式

1. 对于行内元素我们可以在父元素上设置`text-align:center;`来实现。
2. 对于定长块级元素我们可以使用`margin: 0 auto;`来实现。
3. 我们可以在父元素上使用`flex`布局来实现。
4. 我们可以在父元素上使用`grid`布局来实现。

```html
<div class="div1">
  <span>行内元素水平居中</span>
</div>

<div class="div2">
  <span>行内元素水平居中</span>
  <div>块级元素水平居中</div>
</div>

<div class="div3">
  <span>行内元素水平居中</span>
  <div>块级元素水平居中</div>
</div>

<div class="div4">块级元素水平居中</div>
```

```css
.div1 {
  text-align: center;
}

.div2 {
  display: flex;
  justify-content: center;
}

.div3 {
  display: grid;
  justify-content: center;
}

.div4 {
  width: 130px;
  margin: 0 auto;
}
```

效果如下

![FireShot Capture 014 - 行内元素块级元素水平居中 - codepen.io.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f1e09caeeb44a2897cf043e8ac6f7b1~tplv-k3u1fbpfcp-watermark.image?)

[点击查看代码运行实例](https://codepen.io/sc950828/pen/RwjXgyy)

### 垂直居中

对于垂直居中一般可以使用如下三种方式

1. 我们可以在父元素上设置`line-height`等于`height`来实现。
2. 我们可以在父元素上使用`flex`布局来实现。
3. 我们可以在父元素上使用`grid`布局来实现。
4. 我们可以在父元素上使用`table`布局来实现。

```html
<div class="div1">
  <span>行内元素垂直居中</span>
  <!-- <div>块级元素垂直居中</div> -->
</div>

<div class="div2">
  <span>行内元素垂直居中</span>
  <div>块级元素垂直居中</div>
</div>

<div class="div3">
  <span>行内元素垂直居中</span>
  <div>块级元素垂直居中</div>
</div>

<div class="div4">
  <span>行内元素垂直居中</span>
  <div>块级元素垂直居中</div>
</div>
```

```css
.div1 {
  height: 100px;
  background: lightgreen;
  line-height: 100px;
}

.div2 {
  height: 100px;
  background: lightblue;
  display: flex;
  align-items: center;
}

.div3 {
  height: 100px;
  background: lightgreen;
  display: grid;
  align-content: center;
}

.div4 {
  height: 100px;
  background: lightblue;
  display: table-cell;
  vertical-align: middle;
}
```

效果如下

![FireShot Capture 015 - 行内元素块级元素垂直居中 - codepen.io.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77806cd712194058b0cb660d2aa3976d~tplv-k3u1fbpfcp-watermark.image?)

[点击查看代码运行实例](https://codepen.io/sc950828/pen/abVewaJ)

### 水平垂直同时居中

比如我们想实现如下水平垂直同时居中的效果

![FireShot Capture 013 - 纯绝对定位实现水平垂直同时居中 - codepen.io.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/085dd122958144f38b324593ec1be067~tplv-k3u1fbpfcp-watermark.image?)

实现水平垂直同时居中我们可以使用`绝对定位`、`table布局`、`flex布局` 或 `grid布局`来实现。

首先我们创建一个需要居中的盒子。

```html
<div class="box"></div>
```

#### 纯绝对定位

```css
.box {
  position: absolute;
  width: 200px;
  height: 100px;
  background: red;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/dyZEMRv)

#### 绝对定位加负外边距

这种方式需要知道居中元素的具体宽高，不然负的`margin`没法设置。

```css
.box {
  position: absolute;
  width: 200px;
  height: 100px;
  background: red;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -50px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/RwjmarV)

#### 绝对定位加平移

这种平移的方式就不需要考虑居中盒子的具体宽高了。

```css
.box {
  position: absolute;
  width: 200px;
  height: 100px;
  background: red;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/zYPQqwx)

#### 使用 flex 实现

```css
html,
body {
  height: 100%;
}

body {
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 200px;
  height: 100px;
  background: red;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/bGYypox)

#### 使用 grid 实现

```css
html,
body {
  height: 100%;
}

body {
  background: gray;
  display: grid;
  /*   align-content: center;
  justify-content: center; */

  /* align-content和justify-content的简写 */
  place-content: center;
}

.box {
  width: 200px;
  height: 100px;
  background: red;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/RwjmaJx)

#### 使用 table 加外边距实现

使用`table`布局需要注意如下

1. `display: table`时`padding`会失效
2. `display: table-row`时`margin、padding`同时失效
3. `display: table-cell`时`margin`会失效

```html
<div class="box">
  <div class="child"></div>
</div>
```

```css
.box {
  background: red;
  height: 300px;
  width: 600px;
  display: table-cell;
  vertical-align: middle;
}

.child {
  width: 200px;
  height: 200px;
  background: lightgreen;
  margin: 0 auto;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/Exoxxoa)

## 等高布局

等高布局一般把网页垂直分成几部分，每一部分的高度是取这几个模块中最高的那个。效果如下

![WX20220317-144325.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f653c30d2d3345059fe9ea8797a800d0~tplv-k3u1fbpfcp-watermark.image?)

最常见的场景就是我们看视频的时候，左边是视频播放窗口，右边是视频目录，两边的高度是一样的。

### flex 布局实现

```html
<div class="wrap">
  <div class="left">left</div>
  <div class="content">content</div>
  <div class="right">right</div>
</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  display: flex;
  min-height: 100%;
}

.left {
  background: lightblue;
  flex-basis: 200px;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  /* height: 100px; */
  /* height: 1000px; */
  flex-grow: 1;
}

.right {
  flex-basis: 200px;
  background: lightgreen;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/OJzyedX)

### grid 布局实现

```html
<div class="wrap">
  <div class="left">left</div>
  <div class="content">content</div>
  <div class="right">right</div>
</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  display: grid;
  min-height: 100%;
  grid-template-columns: 200px auto 200px;
}

.left {
  background: lightblue;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  /* height: 100px; */
  /* height: 1000px; */
}

.right {
  background: lightgreen;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/xxpwovB)

## 单栏布局

单栏布局我们常用在网页框架上，一般我们把网页分为 `header`、`content`、`footer`三部分。

![WX20220308-165744.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/587991cbddd249fc9c764e6e7da6cb92~tplv-k3u1fbpfcp-watermark.image?)

在不同的项目我们可能对这三部分的样式需求有所差别，比如需要顶部固定、需要底部固定等等。

### 顶底部都不固定

比如想实现如下效果，`footer`在内容不足的时候吸附在窗口底部，当内容多的时候又可以被抵到窗口下面。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32df7c106d354605b5c920f66da18933~tplv-k3u1fbpfcp-zoom-1.image)

#### 使用 padding 加负 margin 实现

```html
<div class="wrap">
  <div class="header">header</div>
  <div class="content">content</div>
</div>
<div class="footer">footer</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  min-height: 100%;
  padding-bottom: 50px;
  overflow: auto;
  box-sizing: border-box;
}

.header {
  height: 50px;
  background: lightblue;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  height: 100px;
  /*  height: 1000px; */
}

.footer {
  height: 50px;
  background: lightgreen;
  margin-top: -50px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/yLPWOry)

#### 使用 flex 实现

```html
<div class="wrap">
  <div class="header">header</div>
  <div class="content">content</div>
  <div class="footer">footer</div>
</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header {
  height: 50px;
  background: lightblue;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  height: 100px;
  /* height: 1000px; */
  flex-grow: 1;
}

.footer {
  height: 50px;
  background: lightgreen;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/KKyLMMp)

### 顶部固定

#### 使用 padding 加负 margin 加 fixed 实现顶部固定布局

```html
<div class="header">header</div>
<div class="wrap">
  <div class="content">content</div>
</div>
<div class="footer">footer</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.header {
  height: 50px;
  background: lightblue;
  position: fixed;
  width: 100%;
}

.wrap {
  min-height: 100%;
  padding-bottom: 50px;
  overflow: auto;
  box-sizing: border-box;
}

.content {
  margin-top: 50px;
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  height: 100px;
  /* height: 1000px; */
}

.footer {
  height: 50px;
  background: lightgreen;
  margin-top: -50px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/YzEoPWb)

#### 使用 flex 加 fixed 定位实现

```html
<div class="wrap">
  <div class="header">header</div>
  <div class="content">content</div>
  <div class="footer">footer</div>
</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.header {
  height: 50px;
  background: lightblue;
  position: fixed;
  width: 100%;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  /* height: 100px; */
  height: 1000px;
  margin-top: 50px;
  flex-grow: 1;
}

.footer {
  height: 50px;
  background: lightgreen;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/podmbEg)

### 底部固定

#### 使用 padding 加负 margin 实现底部固定布局

```html
<div class="wrap">
  <div class="header">header</div>
  <div class="content">content</div>
</div>
<div class="footer">footer</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  height: 100%;
  padding-bottom: 50px;
  overflow: auto;
  box-sizing: border-box;
}

.header {
  height: 50px;
  background: lightblue;
}

.content {
  background: lightpink;
  height: 100px;
  height: 1000px;
}

.footer {
  height: 50px;
  background: lightgreen;
  margin-top: -50px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/GROajKR)

#### 使用 flex 加 fixed 定位实现

```html
<div class="wrap">
  <div class="header">header</div>
  <div class="content">content</div>
  <div class="footer">footer</div>
</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.header {
  height: 50px;
  background: lightblue;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  /* height: 100px; */
  height: 1000px;
  flex-grow: 1;
  margin-bottom: 50px;
}

.footer {
  height: 50px;
  background: lightgreen;
  position: fixed;
  width: 100%;
  bottom: 0;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/zYPQBjP)

### 顶底部都固定

#### 使用 fixed 实现顶底部固定布局

```html
<div class="header">header</div>
<div class="content">content</div>
<div class="footer">footer</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.header {
  height: 50px;
  background: lightblue;
  position: fixed;
  width: 100%;
}

.content {
  background: lightpink;
  padding-top: 50px;
  padding-bottom: 50px;
  /* height: 100px; */
  height: 1000px;
}

.footer {
  height: 50px;
  background: lightgreen;
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/YzEbGZz)

#### 使用 flex 加 fixed 定位实现

```html
<div class="wrap">
  <div class="header">header</div>
  <div class="content">content</div>
  <div class="footer">footer</div>
</div>
```

```css
html,
body {
  height: 100%;
  margin: 0;
}

.wrap {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.header {
  height: 50px;
  background: lightblue;
  position: fixed;
  width: 100%;
}

.content {
  background: lightpink;
  /* 这里的高度只是为了模拟内容多少 */
  /* height: 100px; */
  height: 1000px;
  flex-grow: 1;
  margin-bottom: 50px;
  margin-top: 50px;
}

.footer {
  height: 50px;
  background: lightgreen;
  position: fixed;
  width: 100%;
  bottom: 0;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/GROaqGa)

## 两栏布局

两栏布局就是一边固定，另外一边自适应，效果如下

![WX20220310-160617.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f24dbce39b3043cd8701e0b233bf2f60~tplv-k3u1fbpfcp-watermark.image?)

实现两栏布局的方法也有很多，笔者接下来介绍用的比较多的几种方式。

### 左 float，然后右 margin-left（右边自适应）

```html
<div class="aside"></div>
<div class="main"></div>
```

```css
div {
  height: 500px;
}

.aside {
  width: 300px;
  float: left;
  background: yellow;
}

.main {
  background: aqua;
  margin-left: 300px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/OJOKbMb)

### 右 float，然后右 margin-right（左边自适应）

```html
<div class="aside"></div>
<div class="main"></div>
```

```css
div {
  height: 500px;
}

.aside {
  width: 300px;
  float: right;
  background: yellow;
}

.main {
  background: aqua;
  margin-right: 300px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/OJOKbMb)

### absolute 定位加 margin-left（右边自适应）

```html
<div class="wrap">
  <div class="aside"></div>
  <div class="main"></div>
</div>
```

```css
div {
  height: 500px;
}

.wrap {
  position: relative;
}

.aside {
  width: 300px;
  background: yellow;
  position: absolute;
}

.main {
  background: aqua;
  margin-left: 300px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/rNYXWMQ)

### absolute 定位加 margin-right（左边自适应）

```html
<div class="wrap">
  <div class="aside"></div>
  <div class="main"></div>
</div>
```

```css
div {
  height: 500px;
}

.wrap {
  position: relative;
}

.aside {
  width: 300px;
  background: yellow;
  position: absolute;
  right: 0;
}

.main {
  background: aqua;
  margin-right: 300px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/LYOwbzE)

### 使用 flex 实现

```html
<div class="wrap">
  <div class="aside"></div>
  <div class="main"></div>
</div>
```

```css
div {
  height: 500px;
}

.wrap {
  display: flex;
}

.aside {
  flex: 0 0 300px;
  background: yellow;
}

.main {
  background: aqua;
  flex: 1 1;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/xxPvRax)

### 使用 grid 实现

```html
<div class="wrap">
  <div class="aside"></div>
  <div class="main"></div>
</div>
```

```css
div {
  height: 500px;
}

.wrap {
  display: grid;
  grid-template-columns: 300px auto;
}

.aside {
  background: yellow;
}

.main {
  background: aqua;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/WNXVRNa)

## 三栏布局

三栏布局就是两边固定，中间自适应布局，效果如下

![WX20220310-170949.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afc6edd03dc64475a8b7fbb4baaa0ff4~tplv-k3u1fbpfcp-watermark.image?)

实现三栏布局的方法也有很多，笔者接下来介绍用的比较多的几种方式。

### position + margin-left + margin-right 实现三栏布局

```html
<div class="left"></div>
<div class="middle"></div>
<div class="right"></div>
```

```css
html,
body {
  margin: 0;
}

div {
  height: 500px;
}

.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  background: green;
}

.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  background: red;
}

.middle {
  margin-left: 200px;
  margin-right: 200px;
  background: lightpink;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/rNYXjWV)

### float + margin-left + margin-right 实现三栏布局

```html
<div class="left"></div>
<div class="right"></div>
<div class="middle"></div>
```

```css
html,
body {
  margin: 0;
}

div {
  height: 500px;
}

.left {
  width: 200px;
  background: green;
  float: left;
}

.right {
  width: 200px;
  background: yellow;
  float: right;
}

.middle {
  margin-left: 200px;
  margin-right: 200px;
  background: lightpink;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/ExbqWmQ)

### flex 实现三栏布局

```html
<div class="wrap">
  <div class="left"></div>
  <div class="middle"></div>
  <div class="right"></div>
</div>
```

```css
html,
body {
  margin: 0;
}

div {
  height: 500px;
}

.wrap {
  display: flex;
}

.left {
  flex: 0 0 200px;
  background: green;
}

.right {
  flex: 0 0 200px;
  background: yellow;
}

.middle {
  background: lightpink;
  flex: 1 1;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/KKyOWya)

### grid 实现三栏布局

```html
<div class="wrap">
  <div class="left"></div>
  <div class="middle"></div>
  <div class="right"></div>
</div>
```

```css
html,
body {
  margin: 0;
}

div {
  height: 500px;
}

.wrap {
  display: grid;
  grid-template-columns: 200px auto 200px;
}

.left {
  background: green;
}

.right {
  background: yellow;
}

.middle {
  background: lightpink;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/podMede)

### 圣杯布局

圣杯布局在项目中基本上不会再使用了，在面试中我们会经常碰到，所以需要了解。

主要用到了浮动和和相对定位。

```html
<div class="container">
  <div class="content">中间内容</div>
  <div class="left">左侧区域</div>
  <div class="right">右侧区域</div>
</div>
```

```css
div {
  height: 500px;
}

.container {
  padding: 0 200px 0 200px;
  border: 1px solid black;
}

.content {
  float: left;
  width: 100%;
  background: #f00;
}

.left {
  width: 200px;
  background: #0f0;
  float: left;
  margin-left: -100%;
  position: relative;
  left: -200px;
}

.right {
  width: 200px;
  background: #00f;
  float: left;
  margin-left: -200px;
  position: relative;
  right: -200px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/yLPmbmw)

### 双飞翼布局

双飞翼布局在项目中基本上不会再使用了，在面试中我们会经常碰到，所以需要了解。

主要用到了浮动。

```html
<div class="main">
  <div class="content">content</div>
</div>
<div class="left">left</div>
<div class="right">right</div>
```

```css
div {
  height: 500px;
}

.main {
  float: left;
  width: 100%;
  background: #f00;
}

.main .content {
  /* margin、padding这两种方式都可以 */

  /*   margin-left: 200px;
  margin-right: 300px; */
  padding-left: 200px;
  padding-right: 300px;
}

.left {
  width: 200px;
  background: #0f0;
  float: left;
  margin-left: -100%;
}

.right {
  width: 200px;
  background: #00f;
  float: left;
  margin-left: -200px;
}
```

[点击查看代码运行实例](https://codepen.io/sc950828/pen/ExbqXNP)

## 总结

因为`flex`和`grid`布局方法已经很强大了，日常工作中`99%`的布局都可以使用这两种方式来实现。所以笔者建议能使用`flex`或者`grid`布局方法实现的就尽量使用这两种布局方式实现。因为不仅简单而且负面作用也很少。

浮动布局和绝对定位布局会导致元素脱离文档流，会带来一些负面作用，有时会导致一些意想不到的结果。

关于`flex`布局的兼容性和`grid`布局的兼容性，目前已经支持的很好了，大家可以放心使用。

`flex`布局的兼容性

![WX20220310-190731.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/727384c58ee54599a332d41b64b160b4~tplv-k3u1fbpfcp-watermark.image?)

`grid`布局的兼容性

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0067ca1361f740a590ebed890a846d3a~tplv-k3u1fbpfcp-zoom-1.image)

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
