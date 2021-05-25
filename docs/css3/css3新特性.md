## 总览

css3 新特性笔者做了如下总结。

1. 新的选择器
2. 边框
3. 圆角
4. 背景
5. 渐变
6. 文本效果
7. 网络字体
8. 2D/3D 转换
9. 过渡
10. 动画
11. 标准盒模型
12. flex 布局
13. 媒体查询

## 新的选择器

添加了一些新的伪类、属性、伪元素选择器

## 边框

```
border-radius
box-shadow
border-image
```

## 圆角

```
border-radius
```

## 背景

```
background-image
background-size
background-origin
background-clip
```

## 渐变

线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

径向渐变（Radial Gradients）- 由它们的中心定义

```css
background-image: radial-gradient(
  shape size at position,
  start-color,
  ...,
  last-color
);
```

## 文本效果

```
text-shadow
box-shadow
text-overflow
word-wrap
word-break
```

## 网络字体

```css
<style>
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}

div {
  font-family:myFirstFont;
}
</style>
```

## 2D/3D 转换

```
transform

translate()
rotate()
scale()
skew()
matrix()
```

## 过渡

```
transition
```

## 动画

```
@keyframes 定义动画
animation 使用动画
```

## 标准盒模型

控制盒子模型的属性是 box-sizing，默认值是 content-box。

- 属性值为 content-box 的时候是标准盒子模型：元素宽度=设置的宽度（content）+ border + padding + margin
- 属性值为 border-box 的时候是 IE 盒子模型：元素宽度=设置的宽度（content+border+padding）+ margin

## flex 布局

使用 display: flex 定义 flex 布局

## 多媒体查询

```css
@media not|only mediatype and (expressions) {
    CSS 代码...;
}
```

媒体类型有如下几种

```
all	用于所有多媒体类型设备
print	用于打印机
screen	用于电脑屏幕，平板，智能手机等。
speech	用于屏幕阅读器
```
