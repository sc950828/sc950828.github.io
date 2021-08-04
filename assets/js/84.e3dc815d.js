(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{440:function(v,_,a){"use strict";a.r(_);var t=a(44),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),a("p",[v._v("位于传输层")]),v._v(" "),a("p",[v._v("TCP 协议 全称是传输控制协议是一种面向连接的、可靠的、基于字节流的传输层通信协议。")]),v._v(" "),a("h2",{attrs:{id:"tcp-协议的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议的特点"}},[v._v("#")]),v._v(" TCP 协议的特点")]),v._v(" "),a("h3",{attrs:{id:"面向连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向连接"}},[v._v("#")]),v._v(" 面向连接")]),v._v(" "),a("p",[v._v("面向连接，是指发送数据之前必须在两端建立连接，建立连接的方法就是 三次握手，这样能建立可靠的连接，为数据的可靠传输打下了基础")]),v._v(" "),a("h3",{attrs:{id:"仅支持单播传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅支持单播传输"}},[v._v("#")]),v._v(" 仅支持单播传输")]),v._v(" "),a("p",[v._v("每条 TCP 传输连接只能有两个端点，只能进行点对点的数据传输，不支持多播和广播传输方式")]),v._v(" "),a("h3",{attrs:{id:"面向字节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向字节流"}},[v._v("#")]),v._v(" 面向字节流")]),v._v(" "),a("p",[v._v("TCP 不像 UDP 一样那样一个个报文独立传输，而是在不保留报文边界的情况下以字节流方式进行传输")]),v._v(" "),a("h3",{attrs:{id:"可靠传输-排序-重传-接收确认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输-排序-重传-接收确认"}},[v._v("#")]),v._v(" 可靠传输 排序 重传 接收确认")]),v._v(" "),a("ul",[a("li",[v._v("对于可靠传输，判断丢包，误码靠的是 TCP 的段编号以及确认号，TCP 为了保证报文传输的可靠，就给每个包一个序号，同时序号也保证了传送到接收端实体的包的按序接收")]),v._v(" "),a("li",[v._v("然后接收端实体对已成功收到的字节发回一个相应的确认(ACK)，如果发送端实体在合理的往返时延(RTT)内未收到确认，那么对应的数据（假设丢失了）将会被重传")])]),v._v(" "),a("h3",{attrs:{id:"提供拥塞控制-流量控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供拥塞控制-流量控制"}},[v._v("#")]),v._v(" 提供拥塞控制 流量控制")]),v._v(" "),a("p",[v._v("使用滑动窗口，当网络出现拥塞的时候，TCP 能够减小向网络注入数据的速率和数量，缓解拥塞")]),v._v(" "),a("h3",{attrs:{id:"tcp-提供全双工通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-提供全双工通信"}},[v._v("#")]),v._v(" TCP 提供全双工通信")]),v._v(" "),a("p",[v._v("TCP 允许通信双方的应用程序在任何时候都能发送数据，因为 TCP 连接的两端都设有缓存，用来临时存放双向通信的数据\n当然，TCP 可以立即发送一个数据段，也可以缓存一段时间以便一次发送更多的数据段（最大的数据段大小取决于 MSS）")]),v._v(" "),a("h2",{attrs:{id:"tcp-的三次握手和四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的三次握手和四次挥手"}},[v._v("#")]),v._v(" TCP 的三次握手和四次挥手")]),v._v(" "),a("h3",{attrs:{id:"三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),a("ol",[a("li",[v._v("客户端发送带 SYN=1,seq=x 标志。 客户端进入 SYNC-SENT 状态")]),v._v(" "),a("li",[v._v("服务器收到包后发送带 SYN=1,ACK=1,seq=y,ack=x+1 标志。 服务器进入 SYNC-RECEIVED 状态")]),v._v(" "),a("li",[v._v("客户端收到服务器的包然后再发送带 ACK=1,seq=x+1,ack=y+1 标志。 客户端进入 ESTABLISHED 状态，服务器进入 ESTABLISHED 状态")])]),v._v(" "),a("h3",{attrs:{id:"为什么是三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么是三次握手"}},[v._v("#")]),v._v(" 为什么是三次握手？")]),v._v(" "),a("p",[v._v("为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。")]),v._v(" "),a("p",[v._v("第一次握手：客户端发送网络包，服务端收到了。这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。")]),v._v(" "),a("p",[v._v("第二次握手：服务端发包，客户端收到了。这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。不过此时服务器并不能确认客户端的接收能力是否正常。")]),v._v(" "),a("p",[v._v("第三次握手：客户端发包，服务端收到了。这样服务端就能得出结论：客户端的接收、发送能力正常，服务器自己的发送、接收能力也正常。")]),v._v(" "),a("p",[v._v("因此，需要三次握手才能确认双方的接收与发送能力是否正常。")]),v._v(" "),a("p",[v._v("试想如果是用两次握手，则会出现下面这种情况：")]),v._v(" "),a("p",[v._v("当客户端发出第一个连接请求报文段时并没有丢失，而是在某个网络节点出现了长时间的滞留，以至于延误了连接请求在某个时间之后才到达服务器。这应该是一个早已失效的报文段。但是服务器在收到此失效的连接请求报文段后，以为是客户端的一个新请求，于是就向客户端发出了确认报文段，同意建立连接，然而客户端状态早已不是 SYNC-SENT 状态，所以并不会传输数据。假设不采用三次握手，那么只要服务器发出确认后，新的连接就可以建立了。但是由于客户端没有发出建立连接的请求，因此不会管服务器的确认，也不会向服务器发送数据，但服务器却以为新的运输连接已经建立，一直在等待，所以，服务器的资源就白白浪费掉了。")]),v._v(" "),a("h3",{attrs:{id:"什么是半连接队列-全连接队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是半连接队列-全连接队列"}},[v._v("#")]),v._v(" 什么是半连接队列，全连接队列？")]),v._v(" "),a("p",[v._v("服务器第一次收到客户端的 SYN 之后，就会处于 SYN_RCVD 状态，此时双方还没有完全建立其连接，服务器会把此种状态下请求连接放在一个队列里，我们把这种队列称之为半连接队列。")]),v._v(" "),a("p",[v._v("当然还有一个全连接队列，就是已经完成三次握手，建立起连接的就会放在全连接队列中。如果队列满了就有可能会出现丢包现象。")]),v._v(" "),a("p",[v._v("这里在补充一点关于 SYN-ACK 重传次数的问题：")]),v._v(" "),a("p",[v._v("服务器发送完 SYN-ACK 包，如果未收到客户确认包，服务器进行首次重传，等待一段时间仍未收到客户确认包，进行第二次重传。如果重传次数超过系统规定的最大重传次数，系统将该连接信息从半连接队列中删除。")]),v._v(" "),a("p",[v._v("注意，每次重传等待的时间不一定相同，一般会是指数增长，例如间隔时间为 1s，2s，4s，8s…")]),v._v(" "),a("h3",{attrs:{id:"sn-initial-sequence-number-是固定的吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sn-initial-sequence-number-是固定的吗"}},[v._v("#")]),v._v(" SN(Initial Sequence Number)是固定的吗？")]),v._v(" "),a("p",[v._v("当一端为建立连接而发送它的 SYN 时，它为连接选择一个初始序号。ISN 随时间而变化，因此每个连接都将具有不同的 ISN。ISN 可以看作是一个 32 比特的计数器，每 4ms 加 1 。这样选择序号的目的在于防止在网络中被延迟的分组在以后又被传送，而导致某个连接的一方对它做错误的解释。")]),v._v(" "),a("p",[v._v("三次握手的其中一个重要功能是客户端和服务端交换 ISN(Initial Sequence Number)，以便让对方知道接下来接收数据的时候如何按序列号组装数据。如果 ISN 是固定的，攻击者很容易猜出后续的确认号，因此 ISN 是动态生成的。")]),v._v(" "),a("h3",{attrs:{id:"三次握手过程中可以携带数据吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手过程中可以携带数据吗"}},[v._v("#")]),v._v(" 三次握手过程中可以携带数据吗？")]),v._v(" "),a("p",[v._v("其实第三次握手的时候，是可以携带数据的。但是，第一次、第二次握手不可以携带数据")]),v._v(" "),a("p",[v._v("为什么这样呢?大家可以想一个问题，假如第一次握手可以携带数据的话，如果有人要恶意攻击服务器，那他每次都在第一次握手中的 SYN 报文中放入大量的数据。因为攻击者根本就不理服务器的接收、发送能力是否正常，然后疯狂着重复发 SYN 报文的话，这会让服务器花费很多时间、内存空间来接收这些报文。")]),v._v(" "),a("p",[v._v("也就是说，第一次握手不可以放数据，其中一个简单的原因就是会让服务器更加容易受到攻击了。而对于第三次的话，此时客户端已经处于 ESTABLISHED 状态。对于客户端来说，他已经建立起连接了，并且也已经知道服务器的接收、发送能力是正常的了，所以能携带数据也没啥毛病。")]),v._v(" "),a("h3",{attrs:{id:"syn-攻击是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syn-攻击是什么"}},[v._v("#")]),v._v(" SYN 攻击是什么？")]),v._v(" "),a("p",[v._v("服务器端的资源分配是在二次握手时分配的，而客户端的资源是在完成三次握手时分配的，所以服务器容易受到 SYN 洪泛攻击。SYN 攻击就是 Client 在短时间内伪造大量不存在的 IP 地址，并向 Server 不断地发送 SYN 包，Server 则回复确认包，并等待 Client 确认，由于源地址不存在，因此 Server 需要不断重发直至超时，这些伪造的 SYN 包将长时间占用半连接队列，导致正常的 SYN 请求因为队列满而被丢弃，从而引起网络拥塞甚至系统瘫痪。SYN 攻击是一种典型的 DoS/DDoS 攻击。")]),v._v(" "),a("p",[v._v("检测 SYN 攻击非常的方便，当你在服务器上看到大量的半连接状态时，特别是源 IP 地址是随机的，基本上可以断定这是一次 SYN 攻击。在 Linux/Unix 上可以使用系统自带的 netstats 命令来检测 SYN 攻击。")]),v._v(" "),a("p",[v._v("常见的防御 SYN 攻击的方法有如下几种")]),v._v(" "),a("ol",[a("li",[v._v("缩短超时（SYN Timeout）时间和重试次数")]),v._v(" "),a("li",[v._v("增加最大半连接数")]),v._v(" "),a("li",[v._v("利用 SYN Cookie 技术，在服务端接收到 SYN 后不立即分配连接资源，而是根据这个 SYN 计算出一个 Cookie，连同第二次握手回复给客户端，在客户端回复 ACK 的时候带上这个 Cookie 值，服务端验证 Cookie 合法之后才分配连接资源。")])]),v._v(" "),a("h3",{attrs:{id:"四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),a("p",[v._v("假如是客户端先发起关闭请求。四次挥手的过程如下")]),v._v(" "),a("ol",[a("li",[v._v("客户端发送带 FIN=1,seq=u 标志，进入 FIN-WAIT1 状态")]),v._v(" "),a("li",[v._v("服务端收到 FIN 包然后再发送带 ACK=1,seq=v,ack=u+1 标志，进入 CLOSE_WAIT 状态，表明已经收到客户端的报文了，但是服务端仍然可以发送数据。")]),v._v(" "),a("li",[v._v("如果服务端也想断开连接了，服务端发送带 FIN=1,ACK=1,seq=w,ack=v+1 标志，服务端进入 LAST-ACK 状态.")]),v._v(" "),a("li",[v._v("客户端收到服务端发送的的 FIN 包，发送 ACK=1,seq=u+1,ack=w+1 标志。客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最常报文段寿命），会启用等待计时器。")]),v._v(" "),a("li",[v._v("当服务端收到确认应答后，进入 CLOSED 状态。客户端若 2MSL 时间段内没有收到服务端的重发请求的话，才进入 CLOSED 状态。")])]),v._v(" "),a("h3",{attrs:{id:"为何客户端最后还等待-2msl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何客户端最后还等待-2msl"}},[v._v("#")]),v._v(" 为何客户端最后还等待 2MSL")]),v._v(" "),a("p",[v._v("为了保证最后发送的 ack 包能被服务端接收到，所以客户端要等待两个最长报文段寿命的时间，以便于服务端没有收到请求之后重新发送请求。客户端等待 2MSL 后依然没有收到回复，则证明服务端已正常关闭，那好，发客户端也可以关闭连接了。")]),v._v(" "),a("h3",{attrs:{id:"为什么是四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么是四次挥手"}},[v._v("#")]),v._v(" 为什么是四次挥手？")]),v._v(" "),a("p",[v._v("因为服务端第三次挥手的时候没有立即进入 CLOSE 状态，而是进入了 CLOSE_WAIT 状态。直到等到客户端第四次挥手消息到达才会进入 CLOSE 状态。")]),v._v(" "),a("h3",{attrs:{id:"tcp-的流量控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的流量控制"}},[v._v("#")]),v._v(" TCP 的流量控制")]),v._v(" "),a("p",[v._v("流量控制主要用到了滑动窗口的概念。")]),v._v(" "),a("p",[v._v("发送端的滑动窗口结构如下:")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/23/17072401c4d59dcb~tplv-t2oaga2asx-image.image",alt:"image"}})]),v._v(" "),a("p",[v._v("其中包含四大部分:")]),v._v(" "),a("ul",[a("li",[v._v("已发送且已确认")]),v._v(" "),a("li",[v._v("已发送但未确认")]),v._v(" "),a("li",[v._v("未发送但可以发送")]),v._v(" "),a("li",[v._v("未发送也不可以发送")])]),v._v(" "),a("p",[v._v("接收端的滑动窗口结构如下:")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/23/17072406c803d2c7~tplv-t2oaga2asx-image.image",alt:"image"}})]),v._v(" "),a("p",[v._v("流量控制过程")]),v._v(" "),a("p",[v._v("这里我们不用太复杂的例子，以一个最简单的来回来模拟一下流量控制的过程，方便大家理解。\n首先双方三次握手，初始化各自的窗口大小，均为 200 个字节。\n假如当前发送端给接收端发送 100 个字节，那么此时对于发送端而言，SND.NXT 当然要右移 100 个字节，也就是说当前的可用窗口减少了 100 个字节，这很好理解。\n现在这 100 个到达了接收端，被放到接收端的缓冲队列中。不过此时由于大量负载的原因，接收端处理不了这么多字节，只能处理 40 个字节，剩下的 60 个字节被留在了缓冲队列中。\n注意了，此时接收端的情况是处理能力不够用啦，你发送端给我少发点，所以此时接收端的接收窗口应该缩小，具体来说，缩小 60 个字节，由 200 个字节变成了 140 字节，因为缓冲队列还有 60 个字节没被应用拿走。\n因此，接收端会在 ACK 的报文首部带上缩小后的滑动窗口 140 字节，发送端对应地调整发送窗口的大小为 140 个字节。\n此时对于发送端而言，已经发送且确认的部分增加 40 字节，也就是 SND.UNA 右移 40 个字节，同时发送窗口缩小为 140 个字节。\n这也就是流量控制的过程。尽管回合再多，整个控制的过程和原理是一样的。")]),v._v(" "),a("h3",{attrs:{id:"tcp-的拥塞控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的拥塞控制"}},[v._v("#")]),v._v(" TCP 的拥塞控制")]),v._v(" "),a("p",[v._v("拥塞窗口(cwnd)是对发送端的限制")]),v._v(" "),a("p",[v._v("涉及到的算法有这几个:")]),v._v(" "),a("ol",[a("li",[v._v("慢启动")]),v._v(" "),a("li",[v._v("拥塞避免")]),v._v(" "),a("li",[v._v("快速重传和快速恢复")])]),v._v(" "),a("h4",{attrs:{id:"慢启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢启动"}},[v._v("#")]),v._v(" 慢启动")]),v._v(" "),a("p",[v._v("刚开始进入传输数据的时候，你是不知道现在的网路到底是稳定还是拥堵的，如果做的太激进，发包太急，那么疯狂丢包，造成雪崩式的网络灾难。\n因此，拥塞控制首先就是要采用一种保守的算法来慢慢地适应整个网路，这种算法叫慢启动。运作过程如下:")]),v._v(" "),a("ol",[a("li",[v._v("首先，三次握手，双方宣告自己的接收窗口大小")]),v._v(" "),a("li",[v._v("双方初始化自己的拥塞窗口(cwnd)大小")]),v._v(" "),a("li",[v._v("在开始传输的一段时间，发送端每收到一个 ACK，拥塞窗口大小加 1，也就是说，每经过一个 RTT，cwnd 翻倍。如果说初始窗口为 10，那么第一轮 10 个报文传完且发送端收到 ACK 后，cwnd 变为 20，第二轮变为 40，第三轮变为 80，依次类推。")])]),v._v(" "),a("p",[v._v("难道就这么无止境地翻倍下去？当然不可能。它的阈值叫做慢启动阈值，当 cwnd 到达这个阈值之后，好比踩了下刹车，别涨了那么快了，老铁，先 hold 住！在到达阈值后，如何来控制 cwnd 的大小呢？这就是拥塞避免做的事情了。")]),v._v(" "),a("h4",{attrs:{id:"拥塞避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[v._v("#")]),v._v(" 拥塞避免")]),v._v(" "),a("p",[v._v("原来每收到一个 ACK，cwnd 加 1，现在到达阈值了，cwnd 只能加这么一点: 1 / cwnd。那你仔细算算，一轮 RTT 下来，收到 cwnd 个 ACK, 那最后拥塞窗口的大小 cwnd 总共才增加 1。\n也就是说，以前一个 RTT 下来，cwnd 翻倍，现在 cwnd 只是增加 1 而已。当然，慢启动和拥塞避免是一起作用的，是一体的。")]),v._v(" "),a("h4",{attrs:{id:"快速重传和快速恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速重传和快速恢复"}},[v._v("#")]),v._v(" 快速重传和快速恢复")]),v._v(" "),a("p",[v._v("重传分为快速重传和选择性重传，快速重传是有一个包丢失重传所有，而选择性重传是丢了什么包重传什么包。")]),v._v(" "),a("p",[v._v("快速恢复")]),v._v(" "),a("p",[v._v("当然，发送端收到三次重复 ACK 之后，发现丢包，觉得现在的网络已经有些拥塞了，自己会进入快速恢复阶段。")]),v._v(" "),a("p",[v._v("在这个阶段，发送端如下改变：")]),v._v(" "),a("ol",[a("li",[v._v("拥塞阈值降低为 cwnd 的一半")]),v._v(" "),a("li",[v._v("cwnd 的大小变为拥塞阈值")]),v._v(" "),a("li",[v._v("cwnd 线性增加")])]),v._v(" "),a("h2",{attrs:{id:"udp-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp-协议"}},[v._v("#")]),v._v(" UDP 协议")]),v._v(" "),a("p",[v._v("位于传输层")]),v._v(" "),a("p",[v._v("UDP 协议 全称是用户数据报协议，是一种无连接的协议")]),v._v(" "),a("h2",{attrs:{id:"udp-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp-特点"}},[v._v("#")]),v._v(" UDP 特点")]),v._v(" "),a("h3",{attrs:{id:"面向无连接-没有握手操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向无连接-没有握手操作"}},[v._v("#")]),v._v(" 面向无连接 没有握手操作")]),v._v(" "),a("ul",[a("li",[v._v("UDP 想发数据就可以开始发送了，不需要连接，它只是数据报文的搬运工，不会对数据报文进行任何拆分和拼接操作")]),v._v(" "),a("li",[v._v("在发送端，应用层将数据传递给传输层的 UDP 协议，UDP 只会给数据增加一个 UDP 头标识下是 UDP 协议，然后就传递给网络层了")]),v._v(" "),a("li",[v._v("在接收端，网络层将数据传递给传输层，UDP 只去除 IP 报文头就传递给应用层，不会任何拼接操作")])]),v._v(" "),a("h3",{attrs:{id:"有单播、多播、广播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有单播、多播、广播"}},[v._v("#")]),v._v(" 有单播、多播、广播")]),v._v(" "),a("p",[v._v("UDP 不止支持一对一的传输方式，同样支持一对多，多对多，多对一的方式，也就是说 UDP 提供了单播，多播，广播的功能")]),v._v(" "),a("h3",{attrs:{id:"面向报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向报文"}},[v._v("#")]),v._v(" 面向报文")]),v._v(" "),a("ul",[a("li",[v._v("发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层")]),v._v(" "),a("li",[v._v("UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界")]),v._v(" "),a("li",[v._v("因此，应用程序必须选择合适大小的报文")])]),v._v(" "),a("h3",{attrs:{id:"不可靠性-没有连接-没有流量控制-没有拥塞控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可靠性-没有连接-没有流量控制-没有拥塞控制"}},[v._v("#")]),v._v(" 不可靠性 没有连接 没有流量控制 没有拥塞控制")]),v._v(" "),a("ul",[a("li",[v._v("不可靠性首先体现在无连接上，通信都不需要建立连接，想发就发，这样的情况肯定不可靠")]),v._v(" "),a("li",[v._v("收到什么数据就传什么数据，并且也不会备份数据，发送数据也不会关心对方是否已经正确接收到数据了")]),v._v(" "),a("li",[v._v("网络环境时好时坏，但 UDP 没有拥塞控制，一直会以恒定的速度发送数据，即使网络条件不好，也不会对发送速率进行调整，这样实现的弊端就是在网络条件不好的情况下可能会导致丢包，但是优点也很明显，在某些实时性要求高的场景 ( 比如电话会议 ) 就需要使用 UDP 而不是 TCP")])]),v._v(" "),a("h3",{attrs:{id:"头部开销小-传输数据报文高效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头部开销小-传输数据报文高效"}},[v._v("#")]),v._v(" 头部开销小，传输数据报文高效")]),v._v(" "),a("ul",[a("li",[v._v("两个 16 位的端口号，分别为发出端口和接收端口")]),v._v(" "),a("li",[v._v("16 位整个数据报文的长度")]),v._v(" "),a("li",[v._v("16 位整个数据报文的检验和（IPv4 可选字段），该字段用于发现头部信息和数据中的错误")]),v._v(" "),a("li",[v._v("所以 UDP 的头部开销小，只有 8 字节，相比 TCP 的至少 20 字节要少得多，在传输数据报文时是很高效的")])])])}),[],!1,null,null,null);_.default=s.exports}}]);