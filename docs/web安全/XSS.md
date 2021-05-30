## 定义

XSS(Cross Site Scripting ) 全称跨站点脚本攻击。

主要是本网站运行了来自其他网站的脚本。

## 分类

XSS 常见的类型有反射型、存储型

### 反射型

主要是通过 url 传参把脚本传到服务器，服务器把参数回显到页面的时候运行了该脚本，导致黑客获取了用户信息或者登录态。

常见的是用户名的回显、等等。

### 存储型

脚本被存储到了服务器数据库，用户获取数据的时候，从数据库读取出来显示到页面的时候运行了该脚本，导致黑客获取了用户信息或者登录态。

常见的是留言、博客文章等。

## 注入方式

html 节点内容，也就是 innerHtml 的内容是动态的，所以有可能插入并运行脚本。

```html
<div>#{content}</div>
```

html 属性，属性值是动态的，所以有可能运行脚本。

```html
<img src="#{image}" />
```

javascript 代码，在动态赋值的时候可能运行脚本。

```js
const data = "#{data}";
```

富文本，富文本因为提交的是 html，所以也有可能插入脚本。

## 防御方法

### 自动防御

Chrome 有自己的一套防御，但是只能防御部分反射型的攻击。也就是通过 url 传递脚本进行 html 节点内容 或 html 属性注入攻击的时候会被拦截，通过 javascript 代码或者富文本注入攻击并不会被拦截。

我们可以设置响应头 `X-XSS-Protection` 为 0 来关闭自动防御。默认值是 1，也就是自动防御。

### http-only

如果只针对 cookie，我们可以设置 cookie 的 http-only 属性为 true，这样 cookie 就不能通过 js 操作了，这样就算别人 XSS 攻击也拿不到我们的 cookie 了。

### html 转义

html 转义主要是针对 html 节点内容的攻击和 html 属性攻击

针对 html 节点内容的攻击，我们可以在存储或者是显示的时候把`<` `>`进行转义即可，比如`<`变为`&lt`， `>`变为 `&gt`

针对 html 属性攻击，我们可以把`"`转义为`&quto` `'`转义为`&apos`

### js 转义

针对 javascript 代码攻击我们可以把`"`转义为`\\"` `'`转义为`\\'`

### 过滤

针对富文本攻击我们可以通过过滤来防止攻击。过滤有两种方案，白名单或者黑名单。

黑名单方案过滤有危险的标签，比如

```js
// 替换script标签
html.replace(/<\s*\/?script\s*>/g, "");
```

白名单方案就是只有自己想要的标签才能保存，不在白名单里面的标签过滤掉。

- 我们可以利用[cheerio](https://github.com/cheeriojs/cheerio)库解析 html 文本，然后自定义过滤。
- 我们还可以使用别人写好的库 [xss](https://github.com/leizongmin/js-xss)来直接使用。

### CSP

CSP 全称 Content Security Policy，是内容安全策略，主要用于指定哪些内容可执行。

- child-src、content-src、default-src
- font-src、frame-src、img-src
- manifest-src、media-src、object-src
- scritp-src、style-src、worker-src

- `<host-source>`、`<scheme-source>`、'self'
- 'unsafe-inline'、'unsafe-eval'、'none'
- `nonce-<base64-value>`、`<hash-source>`
- 'strict-dynamic'

两种方法可以启用 CSP。

一种是通过 HTTP 头信息的 Content-Security-Policy 的字段。

```
Content-Security-Policy: script-src 'self'; object-src 'none';
style-src cdn.example.org third-party.org;
```

另一种是通过网页的`<meta>`标签。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org;"
/>
```

更多详情可以参考[阮一峰老师的 Content Security Policy 入门教程](http://www.ruanyifeng.com/blog/2016/09/csp.html)
