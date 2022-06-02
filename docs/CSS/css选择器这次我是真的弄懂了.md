---
theme: fancy
highlight: a11y-dark
---

「这是我参与2022首次更文挑战的第10天，活动详情查看：[2022首次更文挑战](https://juejin.cn/post/7052884569032392740)」

## 简介

`css`作为前端的三大基石，对于我们前端开发来说极其重要。其中`css选择器`在日常开发中天天会碰到，但是每种类型的选择器你真的都弄懂弄透彻了吗？下面请跟随笔者的步伐在来温习一遍。希望能对你有所帮助。

> 文章里的每个案例都是我亲自编写并验证的，建议阅读文章时，可以在浏览器执行案例，会更有利于理解。

## 分类

css选择器主要可以分为五类，包括 基本选择器、组合选择器、属性选择器、伪类选择器、伪元素选择器。这五类选择器里面又可以再细分。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/613b29f0bfb74f8e84947e243f865875~tplv-k3u1fbpfcp-watermark.awebp)

### 基本选择器

基本选择器包括 `通配选择器 *`、`标签选择器`、`id选择器 #`、`类选择器 .`四种。

#### 通配选择器

通配符选择器使用`*`表示，选择文档内的所有元素。

```css
*{color:#f00;}
```

#### 标签选择

标签选择器就是`html`元素标签，比如常见的`div、p、span`等。

```css
div {font-size:20px;}
p {font-size:13px;}
span {font-size:13px;}
```

#### id选择器 #

`id`选择器使用`#`表示，选择指定`id`的元素。

```html
<h1 id="title">标题</h1>
```
```css
#title {color: red;}
```

#### 类选择器 .

`class`选择器使用`.`表示，选择指定`class`的元素。

```html
<h1 class="title">标题</h1>
```
```css
.title {color: red;}
```

### 组合选择器

组合选择器包括 `后代选择器 空格`、`子选择器 >`、`兄弟选择器 ~`、`相邻选择器 +`、`分组选择器 ,`五种。

#### 后代选择器

后代选择器使用空格表示，选择所有后代元素（子、子孙）。

#### 子选择器

子选择器使用`>`表示，只选择到直接子元素，不包括孙子元素。

#### 兄弟选择器

兄弟选择器使用`~`表示，选择该元素后面同级的所有符合条件的元素。

#### 相邻选择器

相邻选择器使用`+`表示，选择该元素后面紧跟的元素，并且该元素刚好符合条件。

比如`E + F` 就是选择紧贴在`E`元素之后的`F`元素。如果`E`和`F`元素之间还有其它元素就会无效。

#### 分组选择器

分组选择器使用`,`表示，选择符合条件的多个元素。

#### 实例

```css
div {
  padding: 10px;
}

.fu1 div {
  border: 1px solid green;
}

.fu2 > div {
  border: 1px solid palevioletred;
}

.xiongdi ~ div {
  color: aquamarine;
}

.xianglin + div {
  color: greenyellow;
}

.zuhe1,
.zuhe2 {
  color: blue;
}
```

```html
<div class="fu1">
  父亲1
  <div>
    儿子1
    <div>孙子1</div>
    <div>孙子1</div>
  </div>
</div>

<div class="fu2">
  父亲2
  <div>
    儿子2
    <div>孙子2</div>
    <div>孙子2</div>
  </div>
</div>

<div>
  <div>兄弟1</div>
  <div class="xiongdi">兄弟2</div>
  <div>兄弟3</div>
  <div>兄弟4</div>
</div>

<div>
  <div>相邻1</div>
  <div class="xianglin">相邻2</div>
  <div>相邻3</div>
  <div>相邻4</div>
</div>

<div>
  <div class="zuhe1">组合1</div>
  <div class="zuhe2">组合2</div>
  <div>组合3</div>
  <div>组合4</div>
</div>
```

结果如下图所示

![FireShot Capture 002 - 组合选择器 - 127.0.0.1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ff01776cd99445da4ce6501ab59ce87~tplv-k3u1fbpfcp-watermark.image?)

### 属性选择器

#### E[att]

`E[att]`选择具有att属性的E元素

#### E[att="val"]

`E[att="val"]`选择具有att属性且属性值等于val的E元素

#### E[att^="val"]

`E[att^="val"]`选择具有att属性且属性值为以val开头的字符串的E元素

#### E[att$="val"]

`E[att$="val"]`选择具有att属性且属性值为以val结尾的字符串的E元素

#### E[att~="val"]

`E[att~="val"]`选择具有att属性且属性值为用空格分隔的字词列表，其中一个等于val的E元素。

#### E[att|="val"]

`E[att|="val"]`选择具有att属性且属性值为用连接符`-`分隔的字符串，并以val开头的E元素。

#### E[att*="val"]

`E[att*="val"]`选择具有att属性且属性值包含val的字符串的E元素。

#### 实例

```css
[att] {
  background-color: aqua;
}

[att="val"] {
  background-color: yellow;
}

[att^="value"] {
  background-color: pink;
}

[att$="test"] {
  background-color: lightcyan;
}

[att~="test2"] {
  background-color: aquamarine;
}

[att|="key"] {
  background-color: lavenderblush;
}

[att*="so"] {
  background-color: lightgreen;
}
```

```html
<div att>att [att]</div>
<div att="val">att="val" [att="val"]</div>
<div att="value1">att="value1" [att^="value"]</div>
<div att="value2">att="value2" [att^="value"]</div>
<div att="valuetest">att="valuetest" [att$="test"]</div>
<div att="nametest">att="nametest" [att$="test"]</div>
<div att="test1 test2 test3">test1 test2 test3 [att~="test2"]</div>
<div att="key-test1 ">key-test1 [att|="key"]</div>
<div att="key-test2 ">key-test2 [att|="key"]</div>
<div att="key value some-test">key value some-test [att*="so"]</div>
```

结果如下图所示

![FireShot Capture 005 - 属性选择器 - 127.0.0.1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66c5d3ab9c3044f4a09f052c5f03ec12~tplv-k3u1fbpfcp-watermark.image?)

### 伪类选择器

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/310652ad0bf040cda0b17b4054cecaa1~tplv-k3u1fbpfcp-watermark.awebp)

#### 动态伪类选择器

动态伪类主要包括 `E:link`、`E:visited`、`E:hover`、`E:active`、`E:focus`五个，用得比较少，笔者就不举例了。

#### 目标伪类

目标伪类使用`E:target`表示，元素id和页面url的hash相匹配就会被命中。

```css
div:target {
  color: blue;
}
```

```html
<div id="div1">div1</div>
<div id="div2">div2</div>
```

结果如下图所示

![WX20220223-104530.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6978fae188ff4ec29fad26dc6783c173~tplv-k3u1fbpfcp-watermark.image?)

#### 否定伪类

否定伪类使用`:not()`表示，不包含某些素。

```css
p:not(#p2) {
  color: red;
}
```

```html
<p id="p1">p1</p>
<p id="p2">p2</p>
<p id="p3">p3</p>
```

结果如下图所示

![WX20220223-105019.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06944ef3e248415fa2619bf1f99cfcbb~tplv-k3u1fbpfcp-watermark.image?)

#### 语言伪类

语言伪类选择器使用`E:lang(language)`表示，匹配使用了某种语言的元素。

语言我们可以设置在单个元素上，也可以设置在`html`、`body`元素上，应用于整个文档。

```css
div:lang(zh) {
  color: red;
}
```

```html
<div lang="zh" id="div1">div1</div>
<div id="div2">div2</div>
<span>span</span>
```

结果如下图所示

![WX20220223-105504.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36c341e183194b259b60a9054b62fc58~tplv-k3u1fbpfcp-watermark.image?)

#### UI元素伪类

UI元素伪类包括`E:enabled`启用状态、`E:disabled`禁用状态、`E:checked`选择状态、`E:default`默认被选择状态、`E:read-write`可读写状态、`E:read-only`只读状态六种。

```css
input[type="radio"]:enabled {
  box-shadow: 0 0 0 2px red;
}

input[type="checkbox"]:enabled {
  box-shadow: 0 0 0 2px red;
}

input[type="radio"]:disabled {
  box-shadow: 0 0 0 2px greenyellow;
}

input[type="checkbox"]:disabled {
  box-shadow: 0 0 0 2px greenyellow;
}

input[type="radio"]:checked {
  box-shadow: 0 0 0 2px gold;
}

input[type="checkbox"]:checked {
  box-shadow: 0 0 0 2px gold;
}

input[type="radio"]:default {
  box-shadow: 0 0 0 2px firebrick;
}

input[type="checkbox"]:default {
  box-shadow: 0 0 0 2px firebrick;
}

input[type="text"]:read-write {
  background-color: greenyellow;
}

input[type="text"]:read-only {
  background-color: lightblue;
}
```

```html
<div>
  <input type="radio" id="radio1" checked />
  <label for="radio1">默认选中</label>
  <input type="radio" id="radio2" disabled />
  <label for="radio2">未选中-禁用</label>
  <input type="radio" id="radio3" />
  <label for="radio3">未选中-可用</label>
</div>
<div>
  <input type="checkbox" id="checkbox1" checked />
  <label for="checkbox1">默认选中</label>
  <input type="checkbox" id="checkbox2" disabled />
  <label for="checkbox2">未选中-禁用</label>
  <input type="checkbox" id="checkbox3" />
  <label for="checkbox3">未选中-可用</label>
</div>
<div>
  <input type="text" id="input1" value="input1" />
  <input type="text" id="input2" value="input2" readonly />
</div>
```

结果如下图所示

![WX20220223-112004.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9815cf71d344e4093a1553cd9e8f7c7~tplv-k3u1fbpfcp-watermark.image?)

#### 结构伪类

1. `html:root` 匹配文档的根元素。在HTML中，根元素永远是html。
2. `E:empty` 匹配没有任何子元素（包括text节点）的元素E。
3. `E:required` 选择有"required"属性指定的元素。
4. `E:optional` 选择没有"required"属性的元素。
5. `E:first-child` 匹配第一个子元素E。**（注意这里的选择器是子元素）**
6. `E:last-child` 匹配最后一个子元素E。**（注意这里的选择器是子元素）**
7. `E:only-child` 匹配自己是父元素唯一的子元素。**（注意这里的选择器是子元素）**
8. `E:nth-child(n)` 匹配第n个子元素E，下标从1开始。 (even偶数、odd奇数)。**（注意这里的选择器是子元素）**
9. `E:nth-last-child(n)` 匹配倒数第n个子元素E。**（注意这里的选择器是子元素）**
10. `E:first-of-type` 匹配同类型中的第一个同级兄弟元素E。**（注意这里的选择器是子元素）**
11. `E:last-of-type` 匹配同类型中的最后一个同级兄弟元素E。**（注意这里的选择器是子元素）**
12. `E:only-of-type` 匹配同类型中的唯一的一个同级兄弟元素E。**（注意这里的选择器是子元素）**
13. `E:nth-of-type(n)` 匹配同类型中的第n个同级兄弟元素E。**（注意这里的选择器是子元素）**
14. `E:nth-last-of-type(n)` 匹配同类型中的倒数第n个同级兄弟元素E。**（注意这里的选择器是子元素）**

> 这里需要注意`child`和`type`的区别，`child`是有条件的，下面举个例子。

> `.box > p:nth-child(2)`选择的是 box 下的 p 元素，并且 p 元素刚好是 box 的第二个子元素元素，如果 p 不是第二个子元素则选不到。**并且如果有其它类型的元素还会被干扰**

> `.box > p:nth-of-type(2)`选择的始终是 box 下的第二个 p 元素，而不管p元素是不是第二个子元素。**并且不会被其它类型的元素干扰**

```css
html:root {
  color: darkorchid;
}

div:empty {
  background-color: goldenrod;
  height: 20px;
}

input[type="text"]:required {
  background-color: lightblue;
}

input[type="text"]:optional {
  background-color: darkcyan;
}

.zi:first-child {
  background-color: lightcyan;
}

.zi:last-child {
  background-color: lightgreen;
}

.zi:nth-child(2) {
  background-color: lightgoldenrodyellow;
}

.zi:nth-last-child(2) {
  background-color: lightpink;
}

/* .zi:nth-child(even) {
  background-color: lightseagreen;
} */

/* .zi:nth-child(odd) {
  background-color: lightcyan;
} */

.onlychildtest:only-child {
  background-color: hotpink;
}

.foo:first-of-type {
  background-color: lemonchiffon;
}

.foo:last-of-type {
  background-color: lightsalmon;
}

.foo:nth-of-type(2) {
  background-color: limegreen;
}

.foo:nth-last-of-type(2) {
  background-color: linen;
}

.onlytypetest:only-of-type {
  background-color: darkcyan;
}
```

```html
<h2>root empty required optional</h2>

<div id="div1">div1</div>
<div id="div2"></div>
<div>
  <input type="text" class="input" value="input1" />
  <input type="text" class="input" value="input2" required />
</div>

<h2>child</h2>

<div id="fu1">
  <!-- <p>p1 我类型不同会对child的判断产生干扰</p> -->
  <div class="zi">zi1</div>
  <div class="zi">zi2</div>
  <div class="zi">zi3</div>
  <div class="zi">zi4</div>
  <!-- <p>p2 我类型不同会对child的判断产生干扰</p> -->
</div>

<h2>only child</h2>

<div id="fu2">
  <div class="onlychildtest">only-child 唯一子元素才会被命中</div>
  <!-- <p>p3 我虽然类型不同但是还是会干扰child的判断</p> -->
</div>

<h2>type</h2>

<div id="fu3">
  <p>p1</p>
  <div class="foo">foo1</div>
  <div class="foo">foo2</div>
  <div class="foo">foo3</div>
  <div class="foo">foo4</div>
  <p>p2</p>
</div>

<h2>only type</h2>

<div id="fu4">
  <div class="onlytypetest">only-of-type 唯一子元素才会被命中</div>
  <p>p3 虽然有两个元素，但我不是div所以不会干扰only type的判断</p>
</div>
```

结果如下图所示

![FireShot Capture 008 - 伪类选择器 - 127.0.0.1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f36ad76f22224a40b5328c27e6e50ecb~tplv-k3u1fbpfcp-watermark.image?)

### 伪元素选择器

CSS3将伪元素选择符前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择器，但以前的写法（单冒号）仍然有效。

#### E:before/E::before

`E:before/E::before` 在目标元素E里前面插入的内容。用来和content属性一起使用。

#### E:after/E::after

`E:after/E::after` 在目标元素E里后面插入的内容。用来和content属性一起使用。

#### E:first-letter/E::first-letter

`E:first-letter/E::first-letter` 设置元素内的第一个字符的样式。

#### E:first-line/E::first-line 

`E:first-line/E::first-line` 设置元素内的第一行的样式。

#### E::placeholder

`E::placeholder` 设置元素文字占位符的样式。(一般用于input输入框)。

#### E::selection

`E::selection` 设置元素被选择时的字体颜色和背景颜色。

```css
p::selection {
  background: #000;
  color: #f00;
}

input::placeholder {
  color: greenyellow;
}

.div1::first-letter {
  color: blue;
}

.div2::first-line {
  color: forestgreen;
}

.div3::before {
  content: "哈哈";
  color: aquamarine;
}

.div4::after {
  content: "哈哈";
  color: aquamarine;
}
```

```html
<p>E::selection 设置元素被选择时的字体颜色和背景颜色。</p>
<input type="text" placeholder="我的颜色能被设置哦" />
<div class="div1">听说第一个字符能被选择到呢？</div>
<div class="div2">
  听说第一行字符能被选择到呢？听说第一行字符能被选择到呢？听说第一行字符能被选择到呢？听说第一行字符能被选择到呢？
  听说第一行字符能被选择到呢？听说第一行字符能被选择到呢？听说第一行字符能被选择到呢？听说第一行字符能被选择到呢？
</div>
<div class="div3">伪元素</div>
<div class="div4">伪元素</div>
```

结果如下图所示

![WX20220223-102425.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5617dd8eb5ef4feeb754a6eb93d659a4~tplv-k3u1fbpfcp-watermark.image?)

## 扩展

### 伪类和伪元素区别是什么？

1. 伪类和伪元素都是弥补 css 选择器的不足。
2. 伪类 当一个元素达到一个特定状态时，它可能得到一个伪类的样式。它是基于元素的。用单冒号`:`。
3. 伪元素 伪元素是对元素中的特定内容进行操作，它是基于元素内容的。css3 规定用双冒号`::`。

### 权重计算

只有在css冲突的时候才会用到样式权重的计算，权重大的会覆盖权重小的样式，当权重值一样的时候，后面的样式会覆盖前面的样式。

权重值到底怎么计算呢？下面我来说明一下。

1. `!important`会覆盖页面内任何位置的元素样式。
2. 内联样式，即写在html标签里面的样式，权重值为1000。
3. id选择器，权重值为100。
4. 类选择器、伪类选择器、属性选择器，权重值为10。
5. 标签选择器、伪元素选择器，权重值为1。
6. 组合选择器、通配符选择器，权重值为0。
7. 继承样式如（color、font-size等），权重值为-1。

注意，**权重值不能进位**，比如我十一个`class`的权重(计算出来是0110)不会大于一个`id`（0100）。也就是说等级高的永远会覆盖等级低的。

```css
/* 10000 */
.p1 {
  color: lawngreen !important;
}

/* 0100 */
#p2 {
  color: blue;
}

/* 0110 */
#s1 .text {
  color: lightpink;
}

/* 0020 */
.box .text {
  color: lightblue;
}

/* 0001 */
span {
  color: green;
}

/* 0000 */
* {
  color: black;
}

/* 0020 */
.p3.p4 {
  background-color: darkcyan;
}

/* 0010 */
.p3 {
  background-color: lightpink;
}

/* 0010 */
.p4 {
  background-color: lemonchiffon;
}

/* 0010 */
.text2 {
  background-color: lavender;
}

/* 0010 */
p[class="text2"] {
  background-color: bisque;
}
```

```html
<div class="box" id="s1">
  <p class="p1" style="color: red">
    red 无效行内样式还是会被!important覆盖
  </p>

  <p id="p2" style="color: red">
    行内样式权重值为1000，id样式会被覆盖，变为red
  </p>

  <div class="text">权重计算 大的覆盖小的</div>

  <span>权重计算 大的覆盖小的</span>

  <div class="p3 p4">权重计算 大的覆盖小的</div>

  <p class="text2">权重相同后面的覆盖前面的</p>
</div>
```

结果如下图所示

![WX20220223-143130.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3d785d9a0b3457597177b169b4e47f2~tplv-k3u1fbpfcp-watermark.image?)

### CSS 命名规范

为了避免 `CSS` 选择器命名冲突的问题，以及更好的实现 `CSS` 模块化，`CSS` 社区在早期诞生了一些 `CSS` 命名方法论，如 `BEM、OOCSS、SMACSS、ITCSS `等。

#### BEM

`BEM` 是一种典型的 `CSS` 命名方法论，由 Yandex 团队（相当于中国的百度）在 2009 年前提出，它的核心思想是 **通过组件名的唯一性来保证选择器的唯一性，从而保证样式不会污染到组件外**。

`BEM` 命名规约是 `.block-name__element-name--modifier-name`，即 `.模块名__元素名--修饰器名` 三个部分，用双下划线 `__` 来明确区分模块名和元素名，用双横线 `--` 来明确区分元素名和修饰器名。你也可以在保留 BEM 核心思想的前提下，自定义命名风格，如驼峰法、使用单下划线、使用单横线等。

在 BEM 中不建议使用子代选择器，因为每一个类名已经都是全局唯一的了，除非是 block 相互嵌套的场景。

```html
<div class="card">
  <div class="card__head">
    <ul class="card__menu">
      <li class="card__menu-item">menu item 1</li>
      <li class="card__menu-item">menu item 2</li>
      <li class="card__menu-item card__menu-item--active">menu item 3</li>
      <li class="card__menu-item card__menu-item--disable">menu item 4</li>
    </ul>
  </div>
  <div class="card__body"></div>
  <div class="card__foot"></div>
</div>
```

#### OOCSS

`OOCSS`（Object-Oriented CSS）即面向对象的 CSS，它借鉴了 OOP（面向对象编程）的抽象思维，主张将元素的样式抽象成多个独立的小型样式类，来提高样式的灵活性和可重用性。

`OOCSS` 有两个基本原则：

1.  **独立的结构和样式**。即不要将定位、尺寸等布局样式与字体、颜色等表现样式写在一个选择器中。
2.  **独立的容器和内容**。即让对象的行为可预测，避免对位置的依赖，子元素即使离开了容器也应该能正确显示。

比如：我们有一个容器是页面的 1/4 宽，有一个蓝色的背景，1px 灰色的边框，10px 的左右边距，5px 的上边距，10px 的下边距。以前对于这样一个样式，我们常常给这个容器创建一个类，并把这些样式写在一起。像下面这样。

```html
<div class="box"></div>

<style>
  .box {
    width: 25%;
    margin: 5px 10px 10px;
    background: blue;
    border: 1px solid #ccc;
  }
</style>
```

然而使用 OOCSS 的话，我们不能这样做，OOCSS 要求为这个容器创建更多的“原子类”，并且每个样式对应一个类，这样是为了后面可以重复使用这些组件的样式，避免重复写相同的样式，就拿这个实例来说，我们给这个容器增加下面的类：

```html
<div class="size1of4 bgBlue solidGray mt-5 ml-10 mr-10 mb-10"></div>

<style>
  .size1of4 { width: 25%; }
  .bgBlue { background: blue; }
  .solidGray { border: 1px solid #ccc; }
  .mt-5 { margin-top: 5px; }
  .mr-10 { margin-right: 10px }
  .mb-10 { margin-bottom: 10px; }
  .ml-10 { margin-left: 10px; }
</style>
```

`OOCSS` 最大的优点是让样式可复用性最大化，也能够显著减少整体的 CSS 代码数量。缺点也很明显，你需要为每个元素搜集一大堆类名，这可是一个不小的体力活 😅。

在 `OOCSS` 中，类名既要能传递对象的用途，也要有通用性，例如 mod、complex、pop 等。如果将 CSS 类命名的太语义化，例如 navigation-bar，那么就会将其限制在导航栏，无法应用到网页的其它位置。

#### SMACSS

`SMACSS`（Scalable and Modular Architecture for CSS）即可伸缩及模块化的 CSS 结构，由 Jonathan Snook 在 2011 年雅虎时提出。

`SAMCSS` 按照部件的功能特性，将其划分为五大类：

1.  基础（Base）是为HTML元素定义默认样式，可以包含属性、伪类等选择器。
2.  布局（Layout）会将页面分为几部分，可作为高级容器包含一个或多个模块，例如左右分栏、栅格系统等。
3.  模块（Module）又名对象或块，是可重用的模块化部分，例如导航栏、产品列表等。
4.  状态（State）描述的是任一模块或布局在特定状态下的外观，例如隐藏、激活等。
5.  主题（Theme）也就是换肤，描述了页面的外观，它可修改前面四个类别的样式，例如链接颜色、布局方式等。

`SMACSS` 推荐使用前缀来区分不同部件：

1.  基础规则是直接作用于元素的，因此不需要前缀。
2.  布局的前缀是 `l-` 或 `layout-`，例如 `.l-table`、`.layout-grid` 等。
3.  模块的前缀是 `m-` 或模块自身的命名，例如 `.m-nav`、`.card`、`.field` 等。
4.  状态的前缀是 `is-`，例如 `.is-active`、`.is-current` 等。
5.  主题的前缀是 `theme-`，例如 `.theme-light`、`.theme-dark` 等。

```html
<form class="layout-grid">
  <div class="field">
    <input type="search" id="searchbox" />
    <span class="msg is-error">There is an error!</span>
  </div>
</form>
```

#### ITCSS

`ITCSS`（Inverted Triangle CSS，倒三角 CSS）是一套方便扩展和管理的 CSS 体系架构，它兼容 BEM、OOCSS、SMACSS 等 CSS 命名方法论。ITCSS 使用 **分层** 的思想来管理你的样式文件，类似服务端开发中的 MVC 分层设计。

`ITCSS` 将 CSS 的样式规则划分成以下的几个层次：

1.  Settings：项目使用的全局变量，比如颜色，字体大小等等。
2.  Tools：项目使用的 mixins 和 functions。到 Tools 为止，不会生成具体的 CSS 代码。
3.  Generic：最基本的设定，比如 reset.css、normalize.css 等。
4.  Base：最基础的元素（elements），比如 img、p、link、list 等。
5.  Objects：某种设计模式，比如水平居中，
6.  Components：UI 组件，比如 button、switch、slider 等。
7.  Trumps：用于辅助和微调的样式，只有这一层才可以使用 `!important`。

`ITCSS` 的分层逻辑越往下就越具体，越局限在某个具体的场景。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81e43e15ea4148b084b2a1634b0ed5c2~tplv-k3u1fbpfcp-watermark.image?)

根据 `ITCSS` 的思想，你可以这样组织你的 `CSS` 样式文件：

```html
stylesheets/
├── settings/
│   ├── colors.scss
│   ├── z-layers.scss
│   └── breakpoints.scss
├── tools/
│   ├── mixins.scss
│   └── functions.scss
├── generic/
│   ├── box-sizing.scss
│   └── normalize.scss
├── base/
│   ├── img.scss
│   └── list.scss
├── objects/
│   ├── grid.scss
│   └── media.scss
├── components/
│   ├── buttons.scss
│   └── slider.scss
├── trumps/
│   ├── widths.scss
│   └── gaps.scss
└── index.scss
```

## 参考文章

[css3文档](https://www.xp.cn/css3/)

[深入解析css选择器](https://juejin.cn/post/6953405751104634916)

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
