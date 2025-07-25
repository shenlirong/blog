<template><div><!-- more -->
<h1 id="网络协议基础" tabindex="-1"><a class="header-anchor" href="#网络协议基础"><span>网络协议基础</span></a></h1>
<networkBasic></networkBasic><h1 id="http协议基础" tabindex="-1"><a class="header-anchor" href="#http协议基础"><span>http协议基础</span></a></h1>
<httpBasic></httpBasic><h2 id="http三次握手" tabindex="-1"><a class="header-anchor" href="#http三次握手"><span>http三次握手</span></a></h2>
<HttpConnection /><p><strong>一句话总结:​</strong> 三次握手就是通信双方互喊 👉 ​​“在吗？”​​ → ​​“在的，你听得到吗？”​​ → ​​“听得到，开始传输吧！”​​<br>
少一次可能“对牛弹琴”，多一次浪费资源，三次是工程最优解！</p>
<h2 id="http-四次挥手" tabindex="-1"><a class="header-anchor" href="#http-四次挥手"><span>http 四次挥手</span></a></h2>
<HttpClose /><h2 id="浏览器请求数据的过程" tabindex="-1"><a class="header-anchor" href="#浏览器请求数据的过程"><span>浏览器请求数据的过程</span></a></h2>
<p><strong>1.请求报文</strong>：请求行+请求头+空行+请求体<br>
<strong>2.响应报文</strong>：响应行+响应头+响应体</p>
<h2 id="概括" tabindex="-1"><a class="header-anchor" href="#概括"><span>概括</span></a></h2>
<p><strong>1.浏览网页时按下回车电脑就会发送一个【请求报文】服务器处理完毕会发送一个【响应报文】</strong><br>
<strong>2.发送 【请求报文】</strong><br>
<strong>3.处理浏览器请求</strong><br>
<strong>4.将处理结果返回给浏览器</strong><br>
<strong>5.发送【响应报文】</strong><br>
<strong>6.解析浏览器返回的内容呈现给用户</strong></p>
<h2 id="什么是url" tabindex="-1"><a class="header-anchor" href="#什么是url"><span>什么是URL</span></a></h2>
<p>URL格式:<a href="http://127.0.0.1/index.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1/index.html</a> (浏览器会自动添加:80) <a href="http://127.0.0.1:80/index.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1:80/index.html</a> (完整的格式)</p>
<p>URL拆分<br>
http:// URL协议类型<br>
127.0.0.1服务器IP地址:80服务器的端口号<br>
index.html需要访问的资源名称</p>
<p>URL拆分后每个部分的作用</p>
<p>IP地址和端口号： 所以服务器ip地址和端口好的作用就是告诉浏览器我们需要访问的那台服务器的详细地址是什么</p>
<p>index.htmI作用:当我们通过IP地址和端口号找到对应的服务器之后，需要通过资源名称告诉服务器，我们需要获取服务器上的哪个资源</p>
<h2 id="什么是http协议" tabindex="-1"><a class="header-anchor" href="#什么是http协议"><span>什么是http协议</span></a></h2>
<ul><li>HTTP是Hypertext Transter Prolocol(超文本传输协议)的缩写</li><li>什么是协议？</li><li>在现实生活中有很多的协议，例如租房协议买卖协议/离婚协议 .无论是什么协议他们都是一 个共同点，就是用来规范约束某一类事物</li><li>HTTP协议是用来规范/约束哪一 类事物?</li><li>HTTP协议就相当于我们让两个人都说中文或者都说英文一样，就是提前规范两个人之间如何沟通，也就是规范约束浏览器和服务器之间如何沟通</li></ul>
<h5 id="general基本信息" tabindex="-1"><a class="header-anchor" href="#general基本信息"><span>general基本信息</span></a></h5>
<figure><img src="@source/code/image/7.jpg" alt="" width="600" height="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>Remote Address（远程地址）</strong>:<strong>就是http请求的地址或者源地址（可以把 ​Remote Address​ 想象成 ​快递发货地址）</strong></p>
<p><strong>Referrer Policy（来源策略）</strong>:是 <strong>​控制浏览器在跳转时是否告诉新页面“你从哪里来”的隐私开关。</strong> Referer头部信息通常包含链接的来源地址，例如从一个页面跳转到另一个页面时，目标服务器会收到这个信息。Referrer Policy 通过定义不同的策略值，可以限制或调整在请求过程中向目标服务器传递来源页面信息的细节程度，从而平衡用户隐私保护与网站功能实现之间的矛盾‌。</p>
<p><strong>access-control-allow-origin</strong>：在跨域请求中，服务器用来指定允许访问资源的</p>
<p><strong>Access-Control-Allow-Credentials</strong>：指明<strong>是否允许</strong>客户端在跨域请求中<strong>携带 Cookie</strong> 等凭证信息。</p>
<p><strong>Cache-Control</strong>：客户端用来告知服务器或缓存代理它希望<strong>如何控制缓存</strong>行为（<strong><code>no-cache</code>、<code>no-store</code>、<code>max-age=0</code></strong>）。</p>
<figure><img src="@source/code/image/10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="reqestheaders请求头" tabindex="-1"><a class="header-anchor" href="#reqestheaders请求头"><span>ReqestHeaders请求头</span></a></h5>
<figure><img src="@source/code/image/8.jpg" alt="" width="600" height="500" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="responseheaders响应头" tabindex="-1"><a class="header-anchor" href="#responseheaders响应头"><span>ResponseHeaders响应头</span></a></h5>
<figure><img src="@source/code/image/9.png" alt="" width="600" height="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<HttpFiled /><h2 id="响应码" tabindex="-1"><a class="header-anchor" href="#响应码"><span>响应码</span></a></h2>
<table><thead><tr><th>状态码</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><strong>200 OK</strong></td><td>2xx 成功</td><td>请求成功，并返回所请求的数据。</td></tr><tr><td><strong>201 Created</strong></td><td>2xx 成功</td><td>请求成功且<strong>服务器创建了新的资源</strong>（常用于 POST 请求）。</td></tr><tr><td><strong>204 No Content</strong></td><td>2xx 成功</td><td>请求成功，但<strong>没有返回任何内容</strong>，常见于删除或更新操作后。</td></tr><tr><td><strong>301 Moved Permanently</strong></td><td>3xx 重定向</td><td><strong>资源</strong>已被<strong>永久</strong>移动到<strong>新 URL</strong>，客户端和搜索引擎将<strong>更新访问链接</strong>。</td></tr><tr><td><strong>302 Found</strong></td><td>3xx 重定向</td><td>请求的资源<strong>临时</strong>位于其他 URL，服务器提示继续使用<strong>原 URL 访问</strong>。</td></tr><tr><td><strong>304 Not Modified</strong></td><td>3xx 重定向</td><td><strong>缓存内容未修改</strong>，无须重新传输数据。</td></tr><tr><td><strong>400 Bad Request</strong></td><td>4xx 客户端错误</td><td><strong>请求格式错误</strong>或<strong>缺少必需参数</strong>，服务器无法理解请求。</td></tr><tr><td><strong>401 Unauthorized</strong></td><td>4xx 客户端错误</td><td>请求<strong>未经授权</strong>，需要提供有效的身份验证凭证。</td></tr><tr><td><strong>403 Forbidden</strong></td><td>4xx 客户端错误</td><td>服务器理解请求但<strong>拒绝执行</strong>，可能由于<strong>权限限制</strong>。</td></tr><tr><td><strong>404 Not Found</strong></td><td>4xx 客户端错误</td><td>请求的<strong>资源不存在</strong>，常见于错误链接或资源被删除的场景。</td></tr><tr><td><strong>405 Method Not Allowed</strong></td><td>4xx 客户端错误</td><td><strong>请求方法不被允许</strong>，例如用 GET 访问只允许 POST 的接口。</td></tr><tr><td><strong>500 Internal Server Error</strong></td><td>5xx 服务器错误</td><td><strong>服务器内部出现错误</strong>，无法完成请求。</td></tr><tr><td><strong>502 Bad Gateway</strong></td><td>5xx 服务器错误</td><td><strong>网关或代理服务器</strong>从上游服务器<strong>接收到无效响应</strong>。</td></tr><tr><td><strong>503 Service Unavailable</strong></td><td>5xx 服务器错误</td><td>服务器<strong>当前无法处理</strong>请求，可能由于过载或正在维护中。</td></tr><tr><td><strong>504 Gateway Timeout</strong></td><td>5xx 服务器错误</td><td>作为<strong>网关或代理服务器</strong>时，<strong>未及时</strong>从上游服务器<strong>获得响应</strong>。</td></tr></tbody></table>
</div></template>


