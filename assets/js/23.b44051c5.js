(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{153:function(e,o,i){"use strict";i.r(o);var t=i(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("div",{staticClass:"content"},[i("p",[i("strong",[e._v("GET 和 POST 的区别")])]),i("p",[e._v("（GET）请注意，查询字符串（名称/值对）是在 GET 请求的 URL 中发送的：/test/demo_form.asp?name1=value1&name2=value2")]),i("ol",[i("li",[e._v("GET 请求可被缓存")]),i("li",[e._v("GET 请求保留在浏览器历史记录中")]),i("li",[e._v("GET 请求可被收藏为书签")]),i("li",[e._v("GET 请求不应在处理敏感数据时使用")]),i("li",[e._v("GET 请求有长度限制")]),i("li",[e._v("GET 请求只应当用于取回数据POST 方法（POST）请注意，查询字符串（名称/值对）是在 POST 请求的 HTTP 消息主体中发送的：POST /test/demo_form.asp HTTP/1.1Host: w3schools.comname1=value1&name2=value2")]),i("li",[e._v("POST 请求不会被缓存")]),i("li",[e._v("POST 请求不会保留在浏览器历史记录中")]),i("li",[e._v("POST 不能被收藏为书签")]),i("li",[e._v("POST 请求对数据长度没有要求")])]),i("p",[i("strong",[e._v("get和post的区别")])]),i("ol",[i("li",[e._v("get是从服务器上获取数据，post是向服务器传送数据。")]),i("li",[e._v("get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP 的post机制，将表单内各个字段与其内容放置在HTML header内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。")]),i("li",[e._v("对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。")]),i("li",[e._v("get传送的数据量较小，因为受URL限制，不能大于2KB，但是效率高。\npost传送的数据量较大，一般被默认为不受限制，所以上传文件时只能用post。但理论上，IIS4中最大量为80KB，IIS5中为100KB。")]),i("li",[e._v("get安全性非常低，因为URL是可见的，可能会泄露私密信息，如密码等，post安全性较高。但是执行效率却比Post方法好。")]),i("li",[e._v("get方式只能支持ASCII字符，向服务器传的中文字符可能会乱码。\npost支持标准字符集，可以正确传递中文字符。")]),i("li",[e._v("get请求可以被缓存，可以被收藏为书签，但 post 不行。")]),i("li",[e._v("get请求会保留在浏览器的历史记录中，post 不会。")])]),i("p",[e._v("SO：\n1、get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式；\n2、在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式")]),i("p",[e._v("PS： POST 请求仅比 GET 请求略安全一点，它的数据不在 URL 中，但依然以明文的形式存放于 HTTP 的请求头中。")]),i("p",[i("strong",[e._v("幂等")])]),i("p",[e._v("一个幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。这些函数不会影响系统状态，也不用担心重复执行会对系统造成改变。例如，“getUsername()和setTrue()”函数就是一个幂等函数.")]),i("p",[i("strong",[e._v("Cookies和session区别")])]),i("ol",[i("li",[e._v("Cookies是一种能够让网站服务器把少量数据储存到客户端的硬盘或内存，或是从客户端的硬盘读取数据的一种技术。Cookies是当你浏览某网站时，由Web服务器置于你硬盘上的一个非常小的文本文件，它可以记录你的用户ID、密码、浏览过的网页、停留的时间等信息。session: 当用户请求来自应用程序的 Web 页时，如果该用户还没有会话，则 Web 服务器将自动创建一个 Session 对象。当会话过期或被放弃后，服务器将终止该会话。cookie机制：采用的是在客户端保持状态的方案，而session机制采用的是在服务端保持状态的方案。同时我们看到由于服务器端保持状态的方案在客户端也需要保存一个标识，所以session机制可能需要借助cookie机制来达到保存标识的目的。")]),i("li",[e._v("Session是服务器用来跟踪用户的一种手段，每个Session都有一个唯一标识：session ID。当服务器创建了Session时，给客户端发送的响应报文包含了Set-cookie字段，其中有一个名为sid的键值对，这个键值Session ID。客户端收到后就把Cookie保存浏览器，并且之后发送的请求报表都包含SessionID。HTTP就是通过Session和Cookie这两个发送一起合作来实现跟踪用户状态，Session用于服务端，Cookie用于客户端")])]),i("p",[i("strong",[e._v("Cookie和Session的区别")])]),i("p",[e._v("HTTP 是一种无状态的连接，客户端每次读取 web页面时，服务器都会认为这是一次新的会话。但有时候我们又需要持久保持某些信息，比如登录时的用户名、密码，用户上一次连接时的信息等。这些信息就由 Cookie 和 Session 保存。")]),i("p",[i("strong",[e._v("Cookie")])]),i("p",[e._v("cookie实际上是一小段文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个cookie，客户端浏览器会把cookie保存起来，当浏览器再次请求访问该网站时，浏览器把请求的网站连同该cookie一同提交给服务器，服务器检查该cookie，以此来辨认用户状态。")]),i("ol",[i("li",[e._v("简单来说，cookie的工作原理可总结如下：client连接server")]),i("li",[e._v("client生成cookie（有效期）,再次访问时携带cookie")]),i("li",[e._v("server根据cookie的信息识别用户身份")])]),i("p",[i("strong",[e._v("Session")])]),i("p",[e._v("Session是服务器端使用的一种记录客户端状态的机制，使用上比Cookie简单一些。同一个客户端每次和服务端交互时，不需要每次都传回所有的 Cookie 值，而是只要传回一个 ID，这个 ID 是客户端第一次访问服务器的时候生成的，而且每个客户端是唯一的。这样每个客户端就有了一个唯一的 ID，客户端只要传回这个 ID 就行了，这个 ID 通常是 name为 JSESIONID 的一个 Cookie。Session依据这个id来识别是否为同一用户（只认ID不认人）。")]),i("p",[i("strong",[e._v("区别")])]),i("ol",[i("li",[e._v("cookie数据存放在客户的浏览器上，session数据放在服务器上。")]),i("li",[e._v("cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗\n考虑到安全应当使用session。")]),i("li",[e._v("session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能\n考虑到减轻服务器性能方面，应当使用COOKIE。")]),i("li",[e._v("单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。")])]),i("p",[i("strong",[e._v("一次完整的HTTP请求过程")])]),i("p",[e._v("域名解析 --\x3e 发起TCP的3次握手 --\x3e 建立TCP连接后发起http请求 --\x3e 服务器响应http请求，浏览器得到html代码 --\x3e 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --\x3e 浏览器对页面进行渲染呈现给用户")]),i("p",[i("strong",[e._v("http的方法")])]),i("ol",[i("li",[e._v("get:客户端向服务端发起请求，获得资源。请求获得URL处所在的资源。")]),i("li",[e._v("post:向服务端提交新的请求字段。请求URL的资源后添加新的数据。")]),i("li",[e._v("head:请求获取URL资源的响应报告，即获得URL资源的头部")]),i("li",[e._v("patch：请求局部修改URL所在资源的数据项")]),i("li",[e._v("put：请求修改URL所在资源的数据元素。")]),i("li",[e._v("delete：请求删除url资源的数据")])]),i("p",[i("strong",[e._v("HTTPS和HTTP的区别")])]),i("ol",[i("li",[e._v("https协议需要到CA申请证书，一般免费证书很少，需要交费。")]),i("li",[e._v("http是超文本传输协议，信息是明文传输；https 则是具有安全性的ssl加密传输协 议。")]),i("li",[e._v("http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。")]),i("li",[e._v("http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。")]),i("li",[e._v("http默认使用80端口，https默认使用443端口")])]),i("p",[i("strong",[e._v("常见HTTP首部字段")])]),i("p",[e._v("通用首部字段（请求报文与响应报文都会使用的首部字段）")]),i("ul",[i("li",[e._v("Date：创建报文时间")]),i("li",[e._v("Connection：连接的管理")]),i("li",[e._v("Cache-Control：缓存的控制")]),i("li",[e._v("Transfer-Encoding：报文主体的传输编码方式")])]),i("p",[e._v("请求首部字段（请求报文会使用的首部字段）")]),i("ul",[i("li",[e._v("Host：请求资源所在服务器")]),i("li",[e._v("Accept：可处理的媒体类型")]),i("li",[e._v("Accept-Charset：可接收的字符集")]),i("li",[e._v("Accept-Encoding：可接受的内容编码")]),i("li",[e._v("Accept-Language：可接受的自然语言")])]),i("p",[e._v("响应首部字段（响应报文会使用的首部字段）")]),i("ul",[i("li",[e._v("Accept-Ranges：可接受的字节范围")]),i("li",[e._v("Location：令客户端重新定向到的URI")]),i("li",[e._v("Server：HTTP服务器的安装信息")])]),i("p",[e._v("实体首部字段（请求报文与响应报文的的实体部分使用的首部字段）")]),i("ul",[i("li",[e._v("Allow：资源可支持的HTTP方法")]),i("li",[e._v("Content-Type：实体主类的类型")]),i("li",[e._v("Content-Encoding：实体主体适用的编码方式")]),i("li",[e._v("Content-Language：实体主体的自然语言")]),i("li",[e._v("Content-Length：实体主体的的字节数")]),i("li",[e._v("Content-Range：实体主体的位置范围，一般用于发出部分请求时使用")])])])}],!1,null,null,null);o.default=s.exports}}]);