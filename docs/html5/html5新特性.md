## 总览

html5 新特性笔者做了如下总结。

1. 新的文档类型
2. 新增移除了一些标签
3. 新增了一些属性
4. 拖放
5. 地理定位
6. 音视频
7. 存储
8. web workers
9. sse
10. websocket
11. History API
12. 在线和离线事件
13. 全屏 API
14. requestAnimationFrame ： 允许控制动画渲染以获得更优性能

## 文档类型

html5 不再使用复杂的 dtd 文件定义文档类型了，而是直接使用`<!DOCTYPE html>`定义文档类型

## 标签

在 html5 中新增了一些标签。也移除了一些标签，移除的标签主要是样式方面的标签。

### 新增标签

#### canvas 新元素

```
<canvas> 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API
```

#### svg 新元素

```
<svg> 指可伸缩矢量图形 (Scalable Vector Graphics)
```

#### 新多媒体元素

```
<audio>	定义音频内容
<video>	定义视频（video 或者 movie）
<source>	定义多媒体资源 <video> 和 <audio>
<embed>	定义嵌入的内容，比如插件。
<track>	为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道。
```

#### 新表单元素

```
<datalist>	定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。
<keygen>	规定用于表单的密钥对生成器字段。
<output>	定义不同类型的输出，比如脚本的输出。
```

#### 新的语义和结构元素

```
<section>	定义文档中的节（section、区段）。
<header>	定义了文档的头部区域
<article>	定义页面独立的内容区域。
<footer>	定义 section 或 document 的页脚。
<nav>	定义导航链接的部分。
<aside>	定义页面的侧边栏内容。
<figure>	规定独立的流内容（图像、图表、照片、代码等等）。
<figcaption>	定义 <figure> 元素的标题
<dialog>	定义对话框，比如提示框

<bdi>	允许您设置一段文本，使其脱离其父元素的文本方向设置。
<command>	定义命令按钮，比如单选按钮、复选框或按钮
<details>	用于描述文档或文档某个部分的细节
<summary>	标签包含 details 元素的标题
<mark>	定义带有记号的文本。
<meter>	定义度量衡。仅用于已知最大和最小值的度量。
<progress>	定义任何类型的任务的进度。
<ruby>	定义 ruby 注释（中文注音或字符）。
<rt>	定义字符（中文注音或字符）的解释或发音。
<rp>	在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
<time>	定义日期或时间。
<wbr>	规定在文本中的何处适合添加换行符。
```

### 移除标签

```
<acronym>
<applet>
<basefont>
<big>
<center>
<dir>
<font>
<frame>
<frameset>
<noframes>
<strike>
<tt>
```

## 属性

### 新的 input type 值

```html
<input type="color" />
<input type="email" />
<input type="number" />
<input type="range" />
<input type="search" />
<input type="tel" />
<input type="url" />
<input type="time" />
<input type="week" />
<input type="month" />
<input type="date" />
<input type="datetime" />
<input type="datetime-local" />
```

### 新的表单属性

```
<form>新属性
  autocomplete 默认on，自动填写表单数据,关闭设置值为off。
  novalidate 表单不验证。

<input>新属性：
  autocomplete 默认on，自动填写表单数据,关闭设置值为off。
  autofocus 是一个 boolean属性。规定在页面加载时，能自动地获得焦点。
  form 指明属于哪个form表单，可以不写在form里面。
  formaction 覆盖form的action属性，常与submit按钮一起使用。
  formenctype 覆盖form的enctype属性，常与submit按钮一起使用。
  formmethod 覆盖form的method属性，常与submit按钮一起使用。
  formnovalidate 覆盖form的novalidate属性，常与submit按钮一起使用。
  formtarget 覆盖form的target属性，常与submit按钮一起使用。
  height 与 width 用于 image类型的 <input /> 标签，设置图像高度和宽度。
  list 用于input与datalist的配合标签。
  multiple 用于input类型为file，可以上传多个文件。
  pattern (regexp) 一个正则表达式用于验证<input /> 元素的值。
  step 用于input类型为number，每次增加/减少多少。
  min 与 max 用于input类型为number或者range。
  placeholder 提示语。
  required 不能为空。
  disabled 禁用
  readonly 只读
```

### 新的全局属性

```
hidden 直接放上去就是隐藏相当于display:none。
spellcheck 语法纠错，主要用在文本输入框里面。
tabindex="1" Tab跳转顺序，按Tab键优先级从小到大，越小越高，也是应用在文本输入框。
data-自定义属性名字。这样就是自定义属性。
contenteditable="true"(可编辑状态，单击内容，可修改，p标签 table等等都能用)。
为style标签添加了scoped属性。
为script标签添加了defer async的异步属性。
为html标签添加了manifest属性 定义离线缓存。
```

## 拖放

拖放是一种常见的特性，即抓取对象以后拖到另一个位置。

## 地理定位

```js
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {});
}
```

## 音频视频

### Video

### Audio

## 存储

### web 存储

web 存储包括 localStorage 和 sessionStorage

检测是否支持 web 存储使用 typeof(Storage) !== "undefined"

常用方法：

- localStorage/sessionStorage.setItem('key', 'val') // 存储数据
- localStorage/sessionStorage.getItem('key') // 取数据
- localStorage/sessionStorage.removeItem('key') // 删除数据
- localStorage/sessionStorage.clear() // 删除所有数据
- localstorage/sessionStorage.key(index) //获取某个索引位置的 key，index 从下标 0 开始。

### web sql

### 离线存储

manifest，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。

```
# 在此标题下列出的文件将在首次下载后进行缓存
CACHE MANIFEST
/theme.css
/logo.gif
/main.js

# 永远不会被缓存，且离线时是不可用的
NETWORK:
login.php

# 如果无法建立因特网连接，则进行显示
FALLBACK:
/html/ /offline.html
```

## web workers

web worker 是运行在后台的 JavaScript，不会影响页面的性能。

## sse

HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。

## websocket

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 是基于 HTTP 协议的 ： 借用了 Http 协议来完成一部分握手

## History API

## 在线和离线事件

## 全屏 API

## requestAnimationFrame ： 允许控制动画渲染以获得更优性能
