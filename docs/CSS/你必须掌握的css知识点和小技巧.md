---
theme: channing-cyan
highlight: a11y-dark
---

## 简介

css 在我们前端开发中是绕不开的一个点，本文分 css 重要知识点和 css 小技巧两部分进行讲解。希望对小伙伴们能有所帮助。

## css 必备知识点

### 盒模型

`margin box`、`border box`、`padding box`、`content box`这四个盒子由外到内构成了盒模型。

#### IE 模型

IE 模型：`box-sizing: border-box` 此模式下，元素的宽度计算为`border+padding+content`的宽度总和。也就是说我们使用 css 设置元素的宽度，这个宽度是该元素的`border+padding+content`的和。所以元素在文档中占据的总宽度为 **css 设置元素的宽度 + `margin`**

#### w3c 标准模型

w3c 标准模型：`box-sizing: content-box` 此模式下，元素的宽度计算为`content`的宽度。也就是说我们使用 css 设置元素的宽度，这个宽度是该元素的`content`的宽度。所以元素在文档中占据的总宽度为 **css 设置元素的宽度 + `margin` + `border` + `padding`**

### 层叠上下文

层叠上下文我们只需要记住这张图就可以了。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fbc59ae1adb5454c8c7f60582df10ff9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

顺序一次是`正的z-index -> 0或auto -> 行内元素 -> 浮动元素 -> 块级盒子 -> 负的z-index -> 背景颜色`

#### 注意

只有设置了定位的元素才能设置`z-index`，也就是`position`的值不为`static`的元素。

### 浮动

浮动现在基本上不使用了，但是面试的时候有可能会被问到，所以我们还是需要了解下。

我们使用`float: left/right` 开启左右浮动。

#### 浮动元素特点

1. 不管是块级元素还是行内元素，设置浮动后的 `display` 属性值是 `inline-block`，也就是变为行内块级元素了。

2. 浮动元素直到遇到另一个浮动元素或者遇到它外边缘的包含框或者块级元素才不会向上浮动。

#### 浮动带来的问题

1. 浮动会导致父元素撑不开，会有父元素高度塌陷问题。

2. 浮动元素会脱离文档流，会影像内联元素的布局。

3. 与浮动元素同级的非浮动元素会跟随其后。

#### 清除浮动的方式

1. 浮动元素后加空 `div` 标签 并添加样式 `clear:both`，或者看具体情况也可以使用 `clear:left` 或者 `clear:right`。

2. 父元素使用伪类 `.parent:after{content: ''; clear: both; display: block;}`。`clear` 属性只有块级元素才有效的。所以需要 `display:block`。

3. 如果单纯想解决父元素高度塌陷的问题，可以给父元素添加`.parent{overflow: hidden/auto;}` 开启 `bfc`。或者给父元素设置高度。

### bfc

`bfc`（块级格式化上下文）是一个独立的布局环境。

#### bfc 特点

元素布局是不受外界的影响也不会影响外部元素。

#### 怎么开启 bfc

满足以下四条中的任意一条就可以开启 `bfc`

1. `float` 的值是 `right 或 left`。
2. `position` 的值是 `absolute 或者 fixed`。
3. `display` 的值是 `inline-block、flex、inline-flex、grid、table-cell、table-caption`。
4. `overflow` 的值是 `hidden、scroll 或 auto`。

### margin 合并

外边距合并只有在正常流中的相邻兄弟或父子元素才会出现，并且外边距合并只会是上下外边距合并，左右外边距不会合并。

行内元素可以设置左右内外边距，但是不能设置上下内外边距。

#### 计算规则

如果出现外边距合并，我们的计算规则是 两个外边距都是正数取大的正数，两个都是负数取绝对值大的数，一正一负取和。

#### 出现场景

1. 相邻兄弟元素之间`margin`合并。
2. 父元素`margin-top`和子元素`margin-top`，父元素`margin-bottom`和子元素`margin-bottom`。
3. 空块级元素自身的`margin-top`和`margin-botom`合并。

#### 解决方案

要解决外边距合并主要有如下四种方案

1. 把元素放到`bfc`中。
2. 设置`border`或`padding`阻隔`margin`。
3. 用内联元素（如文字）阻隔。
4. 给父元素设定高度。

### margin 和 padding

#### 行内元素和块级元素的有效性

行内元素只能设置左右`margin`和`padding`，设置上下`margin`和`padding`会无效。

块级元素上下左右`margin`和`padding`都能设置。

#### margin 和 padding 的百分比计算

`margin`和`padding`的百分比值，在垂直方向和水平方向上是一样的，都是相对于父元素**宽度**计算的。

下面我用例子说明

```css
.container {
  background-color: lavenderblush;
  width: 200px;
  height: 100px;
  border: 1px solid lavenderblush;
}
.child {
  background-color: lawngreen;
  padding: 10%;
  margin: 10%;
}
```

```html
<div class="container">
  <div class="child">child</div>
</div>
```

![WX20220228-102537.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f0352eb1ea14110b1118a5cd7bcfe98~tplv-k3u1fbpfcp-watermark.image?)

这里子元素内外边距设置为 10%，值都是 20px，所以上下左右内外百分比边距都是根据父元素的宽度来计算的。

### width auto 和 height auto

`width`、`height`的默认值都是`auto`。

对于块级元素，流体布局之下`width: auto`自适应撑满父元素宽度。这里的撑满并不同于`width: 100%`的固定宽度，而是像水一样能够根据自身`margin`和`padding`的不同而自适应父元素的宽度。也就是说子元素宽度不会超出父元素。

对于内联元素，`width: auto`则呈现出包裹性，即由子元素的宽度决定。

无论内联元素还是块级元素，`height: auto`都是呈现包裹性，即高度由子级元素撑开。并且父元素`height: auto`会导致子元素`height: 100%`百分比失效。

如果块级元素的`width`是个固定值，`margin`是`auto`，则`margin`会撑满剩下的空间；如果`margin`是固定值，`width`是`auto`，则`width`会撑满剩下的空间。

下面我用例子说明

```css
ontainer1 {
  padding: 20px;
  margin: 40px;
  background-color: greenyellow;
}
.child1 {
  background-color: lavender;
  margin: 0 20px;
  padding: 20px;
}

.container2 {
  padding: 20px;
  margin: 40px;
  background-color: greenyellow;
}
.child2 {
  background-color: lavender;
  width: 100%;
  margin: 0 20px;
  padding: 20px;
}

.container3 {
  margin: 100px;
  width: auto;
  background-color: greenyellow;
}

.container4 {
  margin: auto;
  width: 500px;
  background-color: lavender;
}
```

```html
<div class="container1">
  <div class="child1">child widtd使用默认值 auto 永远被父元素包裹</div>
</div>

<div class="container2">
  <div class="child2">
    child widtd 100%; 如果自身有margin或padding会超出父元素
  </div>
</div>

<div class="container3">margin: 100px; width: auto;</div>

<div class="container4">margin: auto; width: 500px;</div>
```

效果如下图所示

![FireShot Capture 009 - width auto height auto - 127.0.0.1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7698b9cf19cb4b5985161ed2e80618ba~tplv-k3u1fbpfcp-watermark.image?)

### line-height

`line-height`主要用来设置行高，我们经常使用`line-height`和`height`相等来实现文字居中。

`line-height`值如果是百分比的话则是根据父元素的`font-size`来进行计算的。

### vertical-align

`vertical-align`属性值有 `baseline（默认值）`、`top`、`middle`、`bottom`、`text-top`、`text-bottom`、`sub`、`super`、数值、百分比。

很多人说我设置了`vertical-align`怎么没有效果，其实**vertical-align 属性起作用的前提必须是作用在内联元素上。**

注意如果元素设置了`float: left`或者`position: absolute`，则其`vertical-align`属性不能生效，因为此时元素的`display`计算值为`block`了。

### 绝对定位元素与非绝对定位元素的百分比计算的区别

绝对定位元素的宽高百分比是相对于临近的 `position` 不为 `static` 的祖先元素的 `padding box` 来计算的。

非绝对定位元素的宽高百分比则是相对于父元素的 `content box` 来计算的。

### 沾性定位

沾性定位使用`position: sticky`表示。

```css
.container {
  height: 2000px;
}
.box {
  height: 200px;
  background-color: lawngreen;
}
.child {
  background-color: lightblue;
  width: 100px;
  height: 100px;
  position: sticky;
  top: 20px;
}
```

元素滚动到距离浏览器顶部小于 10px 之前，元素为相对定位。之后，元素将固定在与浏览器顶部 10px 的位置，直到 `viewport视口` 回滚到阈值以下。

需注意当  `position: sticky`  的父元素的  `overflow`  属性设置了默认值  `visible`  以外的值时，`position: sticky`  将失效。

### CSS 中可继承属性有哪些

字体相关：`font-family`、`font-style`、`font-size`、`font-weight` 等；

文本相关：`text-align`、`text-indent`、`text-decoration`、`text-shadow`、`letter-spacing`、`word-spacing`、`white-space`、`line-height` 等；

颜色相关：`color：文本颜色`、`background-color：元素背景色`等；

其他属性：`visibility`、`cursor` 等；

对于其他默认不继承的属性也可以通过以下几个属性值来控制继承行为：

1. `inherit`：继承父元素对应属性的计算值；
2. `initial`：应用该属性的默认值，比如 color 的默认值是 `#000`；
3. `unset`：如果属性是默认可以继承的，则取 `inherit` 的效果，否则同 `initial`；
4. `revert`：效果等同于 `unset`，兼容性差。

### word-spacing、white-space、word-berak、word-wrap

#### word-spacing

`word-spacing`指的是字符“空格”的间隙。如果一段文字中没有空格，则该属性无效。如果`word-spacing`值设为`100px`。那么空格现在占据的宽度是原有的空格宽度+`100px`的宽度。

#### white-space

我们都知道如果在`html`中输入多个空白符，默认会被当成一个空白符处理，实际上就是`white-space`控制的。

1. `normal`：默认处理方式。不保留文字最前面的空格，其它空格做一个空格处理。空间不够的时候会换行。
2. `nowrap`：不保留文字最前面的空格，其它空格做一个空格处理。空间不够的时候不换行。
3. `pre`：保留文字的格式并且空间不够的时候不会换行。
4. `pre-wrap`：保留文字的格式但是空间不够的时候会换行。
5. `pre-line`：不保留文字最前面的空格，其它空格做一个空格处理。空间不够的时候会换行。

#### word-break

`word-break` 顾名思义这个属性控制单词如何被拆分换行的。

1. `normal` 使用浏览器默认的换行规则。
2. `break-all` 所有单词或中文句子碰到边界一律拆分换行
3. `keep-all` 所有单词或中文句子一律不拆分换行

#### word-wrap

`word-wrap` 这个属性也是控制单词如何被拆分换行的 作为`word-break`的互补

1. `normal` 使用浏览器默认的换行规则。。
2. `break-word` 一个汉字(一个单词)如果长了会换行。

```css
.s1 {
  word-spacing: 100px;
}

.p1 {
  white-space: normal;
}
.p2 {
  white-space: nowrap;
}
.p3 {
  white-space: pre;
}
.p4 {
  white-space: pre-wrap;
}
.p5 {
  white-space: pre-line;
}

.div1 {
  word-break: normal;
  background-color: lightpink;
}
.div2 {
  word-break: break-all;
  background-color: lightblue;
}
.div3 {
  word-break: keep-all;
  background-color: lightgreen;
}

.w1 {
  word-wrap: normal;
  background-color: lightblue;
}
.w2 {
  word-wrap: break-word;
  background-color: lightpink;
}
```

```html
<h3>word-spacing</h3>
<div class="s1">
  我是谁我是谁我是谁我是谁我是谁我是谁 我是randy
</div>

<h3>white-space</h3>
<div class="p1">
  normal：默认处理方式。 不保留文字最前面的空格， 其它空格做一个空格处理。
  空间不够的时候会换行。
</div>
<div class="p2">
  nowrap：不保留文字最前面的空格， 其它空格做一个空格处理。
  空间不够的时候不换行。
</div>
<div class="p3">
  pre：保留文字的格式并且空间 不够的时候不会换行。
</div>
<div class="p4">pre-wrap：保留文字的格式但是空间 不够的时候会换行。</div>
<div class="p5">
  pre-line： 不保留文字最前面的空格， 其它空格做一个空格处理。
  空间不够的时候会换行。
</div>

<h3>word-break</h3>
<div class="div1">
  word-break:
  normal;我是谁我是谁我是谁我是谁我是谁我是谁我是谁我是谁randyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandy
</div>
<div class="div2">
  word-break:
  break-all;我是谁我是谁我是谁我是谁我是谁我是谁我是谁我是谁randyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandy
</div>
<div class="div3">
  keepall我是谁我是谁我是谁我是谁我是谁我是谁我是谁我是谁randyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandy
</div>

<h3>word-wrap</h3>
<p class="w1">
  word-wrap:
  normal;我是谁我是谁我是谁我是谁我是谁我是谁我是谁我是谁randyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandy
</p>
<p class="w2">
  word-wrap:
  break-word;我是谁我是谁我是谁我是谁我是谁我是谁我是谁randyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandyrandy
</p>
```

样式效果如下

![WX20220228-142854.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d6aaf45aa46482ab56b9f4e97d73825~tplv-k3u1fbpfcp-watermark.image?)

这里重点区分下`word-wrap`和`word-break`，`word-wrap: break-word;`的情况下长单词会另外新起一行，并且超出范围后换行。`word-break: break-all`的情况下长单词不会另外新起一行，并且超出范围后换行，因此更加严格。

### `display: none`与`visibility: hidden`的区别

1. `display: none`的元素不占据任何空间，`visibility: hidden`的元素空间保留。
2. `display: none`会影响 css3 的`transition`过渡效果，`visibility: hidden`不会。
3. `display: none`隐藏产生重绘 ( repaint ) 和回流 ( relfow )，`visibility: hidden`只会触发重绘。
4. 株连性：`display: none`的节点和子孙节点元素全都不可见，`visibility: hidden`的节点的子孙节点元素可以设置 `visibility: visible`显示。`visibility: hidden`属性值具有继承性，所以子孙元素默认继承了`hidden`而隐藏，但是当子孙元素重置为`visibility: visible`就不会被隐藏。

### css 有哪些方法？

1. `calc`(这里面可以进行`+-*/`运算)。
2. `attr()`获取某个属性的值。
3. `min(x, y, z)` 取最小值。
4. `max(x, y, z)` 取最大值。

```css
a::after {
  content: attr(href);
}
```

### css 变量

不使用`css`预处理器的情况下我们也能使用`css`变量。使用`--变量名`定义变量。使用`var(变量名)`使用变量。

在`:root`里面定义的是全局变量。

```css
/* 全局变量 */
:root {
  --main-bg-color: blue;
}

.a {
  /* 写在类里面的是局部变量 */
  --color: red;
  color: var(--color);
}

.b {
  /* 使用 第一个参数为自定义属性名，第一个参数找不到的时候会使用第二个参数值*/
  color: var(--main-bg-color, red);
}
```

## css 中常用小技巧

### 怎么解决 img 底部空白间隙问题

1. 将 img 元素设置为  `display: block`
2. 将 img 元素设置为  `vertical-align: bottom`
3. 设置父元素字体大小为 0

### 修改光标的颜色

我们可以使用`caret-color`属性来修改光标颜色

```css
.imput1 {
  caret-color: #ffd476;
}
```

### 删除  `type="number"`  末尾的箭头

```css
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
```

### 去除 input 聚焦状态下的外边框样式

```css
.imput1 {
  outline: none;
}
```

### 隐藏滚动条

```css
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
```

### 全网页置灰

```css
html {
  filter: grayscale(100%);
}
```

如果需要具体到某元素置灰，把该样式应用到某具体元素即可。

## 参考文章

[高频前端面试题汇总之 CSS 篇](https://juejin.cn/post/6905539198107942919)

[前端基础篇之 CSS 世界](https://juejin.cn/post/6844903894313598989)

## 后记

感谢小伙伴们的耐心观看，本文为笔者个人学习笔记，如有谬误，还请告知，万分感谢！

关于必须掌握的`css`知识点的骚操作笔者将持续更新，如果本文对你有所帮助，还请点个关注点个赞~，您的支持是笔者不断更新的动力！
