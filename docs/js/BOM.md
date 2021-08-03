### 如何在 js 里面判断是否有网络？

- navigator.onLine
- window.addEventListener('online', updateOnlineStatus);
- window.addEventListener('offline', updateOnlineStatus);

### 如何在 js 里面判断网络类型？

使用 navigator.connection||navigator.mozConnection||navigator.webkitConnection，该对象里面包含了网络相关的一些属性。

```js
navigator.connection||navigator.mozConnection||navigator.webkitConnection

{onchange: null, effectiveType: "3g", rtt: 350, downlink: 0.9, saveData: false}
```

### 如何在 js 里面判断浏览器类型？如何判断版本？

- navigator.userAgent 判断浏览器类型
- navigator.appVersion 判断浏览器版本

### 获取页面是否可见

当页面被最小化或者被切换成后台标签页时，页面为不可见，浏览器会触发一个 visibilitychange 事件,并设置 document.hidden 属性为 true；切换到显示状态时，页面为可见，也同样触发一个 visibilitychange 事件，设置 document.hidden 属性为 false。

```js
let eventName = "visibilitychange";
if (document.webkitHidden != undefined) {
  eventName = "webkitvisibilitychange";
}

window.addEventListener(eventName, function() {
  alert(document.hidden || document.webkitHidden);
});
```
