## Hybrid app 本质

在原生 app 中使用 webview 作为容器来承载一个 web 页面

![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/5/16f75a7d003f0a17~tplv-t2oaga2asx-watermark.awebp)

## JSBridge

### 定义

一座用 JavaScript 搭建起来的桥 一端是 web 一端是 Native

### 目的

让 Native 可以调用 web 的 JavaScript 代码 让 web 可以调用 Native 的原生代码

## 相互调用

### 原生调用 web 方法

原生端调用 web 端的 js 方法必须是挂载到 window 对象上的方法。

android 端

```java
// Native调用js方法
private void isAutoUser () {
    String username = mSpHelper.getAutoUser();
    if (TextUtils.isEmpty(username)) {
        return;
    }

    // 1.Android: loadUrl (4.4-)
    // 调用js中的JSBridge.trigger方法
    // 该方法的弊端是无法获取函数返回值；
    mWebView.loadUrl("javascript:nativeFunctionUserLogin('" + username + "')")

    // 2.Android: evaluateJavascript (4.4+)
    // 原生调用 JS 方法， 调用的必须是绑定到window上面的方法
    // 保存当前登录的用户名到 web
    mWebView.evaluateJavascript("javascript:nativeFunctionUserLogin('" + username + "')", new ValueCallback<String>() {
        @Override
        public void onReceiveValue(String s) {
          //此处为 js 返回的结果
        }
    });
}
```

ios 端

```c
// Objective-C
[self.webView evaluateJavaScript:@"registerCallback(true)" completionHandler:nil];

// Swift
webview.stringByEvaluatingJavaScriptFromString("alert('NativeCall')")
```

### web 调用原生方法

web 调用原生的方法总共有三种

1. JS 上下文注入
2. 弹窗拦截
3. URL Schema

下面主要说 JS 上下文注入

构建 JSBridge 对象 这里提供的 JSBridge 的方法会被挂载到网页的 window 对象上，Android 与 IOS 分别拥有对应的挂载方式。分别对应是:苹果 UIWebview JavaScriptCore 注入、安卓 addJavascriptInterface 注入、苹果 WKWebView scriptMessageHandler 注入。

#### android 注册给 web 端调用的方法

web 端调用原生的方法 使用 window.androidJSBridge.xxx xxx 是 MyJaveScriptInterface 里面的方法。例如 window.androidJSBridge.aliPay()

js 调用 Native 原生方法传递的参数必须是基本类型的数据 不能是引用数据类型。如果想传递对象需要使用 JSON.stringify()

android 在暴露给 web 端调用的方法能直接有返回值

```java
addJavascriptInterface(new MyJaveScriptInterface(mContext), "androidJSBridge");

// MyJaveScriptInterface类里面的方法
// js调用Native原生方法传递的参数必须是基本类型的数据 不能是引用数据类型
// 如果想传递对象需要使用JSON.stringify()
@JavascriptInterface
public void aliPay (String payJson) {
  aliPayHelper.pay(payJson);
}
```

#### ios 注册给 web 端调用的方法

web 端调用原生的方法 使用 window.webkit.messageHandlers.xxx 例如 window.webkit.messageHandlers.register() 与 android 不同的是这里的 JSBridge 名字是固定的 webkit.messageHandlers

js 调用 Native 原生方法传递的参数可以是基本类型和引用数据类型。如果方法需要传递参数 我们调用的方式还得改成 window.webkit.messageHandlers.xxx.postMessage(params)

ios 在暴露给 web 端调用的方法不能直接有返回值 如果需要有返回值需要再调用 web 端的方法来传递参数

```c
#pragma mark -  OC注册供JS调用的方法
- (void)addScriptFunction {
    self.wkUserContentController = [self.webView configuration].userContentController;

    [self.wkUserContentController addScriptMessageHandler:self name:@"register"];
    [self.wkUserContentController addScriptMessageHandler:self name:@"login"];
    [self.wkUserContentController addScriptMessageHandler:self name:@"logout"];
}

#pragma mark - 注册方法
- (void)register:(id)body {
     NSDictionary *dict = body;
    [self.userDefaults setObject:[dict objectForKey:@"password"] forKey:[dict objectForKey:@"username"]];
    [self.webView evaluateJavaScript:@"registerCallback(true)" completionHandler:nil];
}
```

## android ios 的双向通讯对比

### 相同点

1. 都是通过 WebView 来完成网页的加载
2. 都是通过向 Window 注入对象的方式来提供可被 Web 端调用的方法
3. 都可以直接使用 evaluateJavaScript 调用 Web 端挂载到 window 对象下的方法

### 不同点

1. 注入对象的不同： android 可以提供注入对象名。 ios 固定为 webkit
2. js 调用 Native 方式不同： android 可直接获取注入对象调用方法。而 ios 为相对固定的写法 使用 window.webkit
   .messageHandlers.方法名.postMessage(参数)
3. 接受 web 端传递来的数据格式不同： android 只能接受基本数据类型，传递对象需要用到 JSON.stringify()方法。而 ios 可以接受任意类型的数据
4. 返回值的不同：android 在 web 端可以直接接受 andriod 方法的返回值。而 ios 只能通过再次调用 web 端方法来传递值

## 接入方式:

在线 H5: 直接将项目部署于线上服务器，并由客户端在 HTML 头部注入对应的 Bridge。

- 优势: 接入/开发成本低，对 App 的侵入小；
- 劣势: 重度依赖网络，无法离线使用，首屏加载慢；

内置离线包: 将代码直接内置于 App 中，即本地存储中，可由 H5 或者 客户端引用 Bridge。

- 优势: 首屏加载快，可离线化使用；
- 劣势: 开发、调试成本变高，需要多端合作，且会增加 App 包体积
