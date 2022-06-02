---
theme: channing-cyan
highlight: a11y-dark
---

## 简介

Cookie、Session、Storage、Token、JWT、总感觉分不清楚，单点登录、OAuth 第三方登录不知道怎么用，今天笔者来给大家详细介绍下，让你们一次性搞懂。

## Cookie

HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。

### Cookie 特点

1. cookie 数据始终在同源（协议、主机、端口相同即为同源）的 http 请求中携带（即使不需要，所以会影响性能），会在浏览器和服务器间来回传递。
2. cookie 数据大小不能超过 4 k，个数也会有限制。[具体可以查看该文章](https://www.cnblogs.com/henryhappier/archive/2011/03/03/1969564.html)
3. 如果设置了过期时间，在过期时间之前一直有效，即使窗口或浏览器关闭。如果没设置过期时间则关闭浏览器就会失效。
4. cookie 在所有同源窗口中都是共享的。

### Cookie 的属性

| 属性        | 说明                                                                                                                                                                                                                                                                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name=value; | 键值对，设置 Cookie 的名称及相对应的值，都必须是**字符串类型**。使用 document.cookie ="username1=randy1;expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"设置值，使用 document.cookie 获取值。                                                                                                                                                                          |
| Expires     | 过期时间，在设置的某个时间点后该 cookie 就会失效。是一个具体时间。                                                                                                                                                                                                                                                                                                   |
| Max-Age     | cookie 失效的时间，单位秒。如果为整数，则该 cookie 在 maxAge 秒后失效。如果为负数，该 cookie 为临时 cookie ，关闭浏览器就失效，浏览器也不会以任何形式保存该 cookie。如果为 0，表示删除该 cookie。默认为 -1。                                                                                                                                                         |
| domain      | 指定 cookie 所属域名，默认是当前域名                                                                                                                                                                                                                                                                                                                                 |
| path        | 指定 cookie 在哪个路径下生效，默认是 '/'                                                                                                                                                                                                                                                                                                                             |
| secure      | 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效。默认是 false                                                                                                                                                                                                                                                                                     |
| httpOnly    | 如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读取到该 cookie 的信息                                                                                                                                                                                                                                                                                    |
| SameSite    | 有 Strict、Lax、None 三种模式。 在 Strict 模式下，浏览器完全禁止第三方请求携带 Cookie。比如请求 randy.com 网站只能在 randy.com 域名当中请求才能携带 Cookie，在其他网站请求都不能。在 Lax 模式，就宽松一点了，但是只能在 get 方法提交表单况或者 a 标签发送 get 请求的情况下可以携带 Cookie，其他情况均不能。在 None 模式下，也就是默认模式，请求会自动携带上 Cookie。 |

如果觉得原生操作 cookie 很麻烦的话这里笔者推荐大家安装目前较为流行的一款封装 Cookie 操作的库  [js-cookie](https://github.com/js-cookie/js-cookie)  进行使用，其 API 操作如下：

```js
import Cookies from "js-cookie";

// 存储 Cookie
Cookies.set("name", "juejin", { domain: "juejin.cn" });

// 读取 Cookie
Cookies.get("name");

// 删除 Cookie
Cookies.remove("name");
```

## Session

Session 代表着服务器和客户端一次会话的过程。Session 对象存储特定用户会话所需的属性及配置信息。

### Session Cookie 的认证流程

1. 用户第一次登录请求服务器的时候，服务器根据用户登录信息查用户表，成功则创建对应的 Session。

2. 请求返回时通过响应头 Set-Cookie 将此 Session 的唯一标识信息 SessionID 返回给浏览器。

> 服务器端的 SessionId 可能存放在很多地方，例如：内存、文件、数据库等。

3. 浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到本地 Cookie 中。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de6c4bbcf04b45bdabf81f4db8b492f4~tplv-k3u1fbpfcp-zoom-1.image)

4. 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息通过请求头 Cookie 发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8027f82019e94d6d864a254611e36317~tplv-k3u1fbpfcp-zoom-1.image)

### Cookie + Session 存在的问题

虽然我们使用 Cookie + Session 的方式完成了登录验证，但仍然存在一些问题：

- 由于服务器端需要对接大量的客户端，也就需要存放大量的 SessionId，这样会导致服务器压力过大。
- 如果服务器端是一个集群，为了同步登录态，需要将 SessionId 同步到每一台机器上，无形中增加了服务器端维护成本。
- 由于 SessionId 存放在 Cookie 中，所以无法避免 CSRF 攻击。

### 分布式 Session 失效问题

通常服务端是集群，而用户请求过来会走一次负载均衡，不一定分配哪台机器上。那一旦用户后续接口请求到的机器和他登录请求的机器不一致，或者登录请求的机器宕机了，Session 不就失效了吗？

解决 Session 失效只要有两种方法

1. 一是从「存储」角度，把 session 集中存储。如果我们用独立的 Redis 或普通数据库，把 session 都存到一个库里。

2. 二是从「分布」角度，让相同 IP 的请求在负载均衡时都分配同一台机器上。以 nginx 为例，可以配置 ip_hash 来实现。但这种方式相当于阉割了负载均衡，且仍没有解决「用户请求的机器宕机」的问题。

## Storage(localStorage、sessionStorage)

storage 是 HTML5 新增的 Web 存储。用于在浏览器端存储数据，相较于 Cookie 的 4K，Storage 可以存储 5M 的数据。

- localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。在同源窗口共享。
- sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

### 常用方法

```js
// 保存
localStorage.setItem("test", "测试");
// 获取
localStorage.getItem("test");
// 删除
localStorage.removeItem("test");
// 删除所有
localStorage.clear();
// 通过下标获取key
const key1 = localStorage.key(0);

// 保存
sessionStorage.setItem("test", "测试");
// 获取
sessionStorage.getItem("test");
// 删除
sessionStorage.removeItem("test");
// 删除所有
sessionStorage.clear();
// 通过下标获取key
const key2 = sessionStorage.key(0);
```

## Token

使用`Cookie + Session`认证的方式往往还需要查询数据库。客服端通过`Cookie`传递`SessionId`到服务端，服务端通过`SessionId`查询数据库才能获取到用户信息，性能会有影响。于是`Token`就应运而生了。

> Token 是服务端生成的一串字符串，以作为客户端请求的一个令牌。当第一次登录后，服务器会生成一个 Token 并返回给客户端，客户端后续访问时，只需带上这个 Token 即可完成身份认证。

### Token 的认证流程

1. 用户登录，服务端校验账号密码，获得用户信息

2. 把用户信息结合时间戳等生成 token 返回给客户端

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c720d981ec794c1eabd715b50f9b93d5~tplv-k3u1fbpfcp-zoom-1.image)

3. 此后用户请求业务接口携带 token 到服务器端

4. 接口校验 token 有效性，进行正常业务接口处理

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78f639af0d404f1f85a46e6ea5c97f96~tplv-k3u1fbpfcp-zoom-1.image)

### Token 的优势

1. 服务器端不需要存放 `Token`，直接解密就可以获取到用户信息，所以不会对服务器端造成压力，即使是服务器集群，也不需要增加维护成本。

2. `Token` 可以存放在前端任何地方，可以不用保存在 `Cookie` 中，提升了页面的安全性。

3. `Token` 下发之后，只要在生效时间之内，就一直有效，如果服务器端想收回此 `Token` 的权限，并不容易。

## JWT（JSON Web Token）

[JSON Web Token](https://jwt.io/introduction/)它是一种成熟的 token 字符串生成方案，包含了我们前面提到的数据、签名。使用请求头`Authorization`传递`Token`。

使用方式

```
Authorization: Bearer <token>
```

JWT 主要由三部分组成，每个部分用  `.`  进行分割，各个部分分别是 `Header`、`Payload`、`Signature` [具体可以查看阮一峰老师的 JWT 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

## SSO 单点登录

单点登录指的是在公司内部搭建一个公共的认证中心，公司下的所有产品的登录都可以在认证中心里完成，一个产品在认证中心登录后，再去访问另一个产品，可以不用再次登录，即可获取登录状态。

### 简单版

简单版的单点登录我们利用的是 cookie 在同域下自动携带的特性。

我们可以把我们的各个子系统都使用相同的主域名，这样在一个系统登录后，后续各系统就不需要登录了。比如`wenku.baidu.com` 、`tieba.baidu.com`，可以直接把 `cookie domain` 设置为主域名  `baidu.com`。

这种方式的局限性是各系统必须在同一主域下，并且必须使用 cookie 来携带我们的`token`。

### 复杂版

复杂版的单点登录就是使用同一登录中心。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffdefb54e20a4c2ab150da59e6eb649e~tplv-k3u1fbpfcp-zoom-1.image)

1. 用户访问系统 1 的受保护资源，系统 1 发现用户未登录，跳转至 sso 认证中心，并将自己的地址作为参数

2. sso 认证中心发现用户未登录，将用户引导至登录页面

3. 用户输入用户名密码提交登录申请

4. sso 认证中心校验用户信息，创建用户与 sso 认证中心之间的会话，称为全局会话，同时创建授权令牌。（这里可以根据自己业务的需求，使用同一个令牌还是分系统创建不同的令牌）

5. sso 认证中心带着令牌跳转会最初的请求地址（系统 1）

6. 系统 1 拿到令牌，访问接口，接口里面去 sso 认证中心校验令牌是否有效

7. sso 认证中心校验令牌，返回有效，注册系统 1

8. 系统 1 使用该令牌创建与用户的会话，称为局部会话，返回受保护资源

9. 用户访问系统 2 的受保护资源

10. 系统 2 发现用户未登录，跳转至 sso 认证中心，并将自己的地址作为参数

11. sso 认证中心发现用户已登录，跳转回系统 2 的地址，并附上令牌。（这里我觉得应该在 sso 里面先验证令牌的有效性，有效就直接调回系统 2，无效应该再次登录）

12. 系统 2 拿到令牌，访问接口，接口里面去 sso 认证中心校验令牌是否有效

13. sso 认证中心校验令牌，返回有效，注册系统 2

14. 系统 2 使用该令牌创建与用户的局部会话，返回受保护资源

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6f7264821ce447b998bed428637bda1~tplv-k3u1fbpfcp-zoom-1.image)

1. 用户向系统 1 发起注销请求

2. 系统 1 拿着令牌，向 sso 认证中心发起注销请求

3. sso 认证中心销毁此令牌

4. sso 认证中心向所有注册系统发起注销请求（根据业务看是否需要销毁其他系统的令牌）

5. 各注册系统接收 sso 认证中心的注销请求，销毁局部会话

6. sso 认证中心引导用户至登录页面

## OAuth 第三方登录

这里以微信开放平台的接入流程为例：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a791d9e6d0d24cd299035ab1362fb870~tplv-k3u1fbpfcp-zoom-1.image)

1. 首先，`a.com` 的运营者需要在微信开放平台注册账号，并向微信申请使用微信登录功能。

2. 申请成功后，在后台配置好回调域名`a.com`，并且可以拿到申请的 appid、appsecret。

3. 用户在微信浏览器访问 `a.com`。

4. `a.com`在未登录的情况下会跳转微信的 `OAuth` 授权登录，并带上 `a.com` 的回调地址。

5. 微信授权成功之后，微信会根据拉起 `a.com?code=123` ，这时带上了一个临时票据 `code`。

6. 获取 `code` 之后， `a.com` 前端会携带 `code` 请求 `a.com` 的服务端。服务端会拿着 `code 、appid、appsecret`，向微信服务器申请 `token`，验证成功后，微信会下发一个 `token`。

7. 有了 `token` 之后， `a.com`服务端就可以凭借 `token` 访问微信服务器拿到对应的微信用户头像，用户昵称等信息了。

8. `a.com` 服务器返回自己的`token`给`a.com`前端，提示用户登录成功，并将登录状态写入本地，以作为后续访问的凭证。

## 参考文章

[前端鉴权的兄弟们：cookie、session、token、jwt、单点登录](https://juejin.cn/post/6898630134530752520)

[傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)

[前端关于单点登录的知识](https://juejin.cn/post/6844903664264413198)

## 后记

本文只是笔者学习和读文后的个人笔记，如有谬误，还请告知，万分感谢！如果本文对你有所帮助，还请点个赞~~
