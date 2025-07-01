<template><div><!-- more -->
<h2 id="dom简介" tabindex="-1"><a class="header-anchor" href="#dom简介"><span>DOM简介</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>DOM 全名称 document object model 文档对象模型；</span></span>
<span class="line"><span>JS中通过DOM 来操作HTML ，只要理解dom 就可以随心所欲操作web 页面。</span></span>
<span class="line"><span>--文档</span></span>
<span class="line"><span>  文档表示的就是整个HTML网页文档；</span></span>
<span class="line"><span>--对象</span></span>
<span class="line"><span>将网页中的每一个部分都转换成一个对象</span></span>
<span class="line"><span>--模型</span></span>
<span class="line"><span>使用模型来表示对象之间的关系，方便获取对象，通俗说，模型就是dom树，关联节点。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="节点" tabindex="-1"><a class="header-anchor" href="#节点"><span>节点</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>节点Node，是构成我们网页的最基本部分，网页中的每一个部分都可以成为一个节点。</span></span>
<span class="line"><span>比如：属性、文本、注释、整个文档等都是一个节点，每个节点的类型不一样，有元素节点，属性节点、文本节点、文档节点等。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="网络协议基础" tabindex="-1"><a class="header-anchor" href="#网络协议基础"><span>网络协议基础</span></a></h1>
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
<h1 id="浏览器加载原理" tabindex="-1"><a class="header-anchor" href="#浏览器加载原理"><span>浏览器加载原理</span></a></h1>
<p><strong>浏览器的加载原理‌</strong>主要包括以下几个步骤：<br>
<strong>1.‌ 用户输入网址‌</strong>：用户在浏览器地址栏输入网址（如 <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">https://www.example.com</a>）并按下回车键，这是浏览器工作的起点‌。</p>
<p><strong>2.‌ DNS解析‌</strong>：浏览器将用户输入的域名（如 <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com</a>）转换为服务器IP地址。这个过程包括检查本地缓存、向本地DNS服务器发送解析请求，然后向上级DNS服务器递归查询，最终由权威DNS服务器返回IP地址‌。</p>
<p><strong>3.‌ 建立网络连接‌</strong>：浏览器获取到目标服务器的IP地址后，通过TCP协议建立一个连接。TCP连接的建立过程包括三次握手：SYN、SYN-ACK和ACK‌</p>
<p><strong>4.‌ 发送HTTP请求‌</strong>：TCP连接建立后，浏览器通过HTTP协议向服务器发送请求，获取网页内容‌。</p>
<p><strong>5.‌ 查找缓存‌</strong>：在真正发起网络请求之前，浏览器会先在数据存储中查询是否有需要请求的文件缓存。如果没有缓存，则进入网络请求过程；如果有缓存，则直接返回缓存内容‌。</p>
<p><strong>6.‌ 解析HTML‌8</strong>：浏览器接收到HTML代码后，解析HTML代码生成DOM树和CSSOM树。在这个过程中，浏览器会启动一个预解析器率先下载和解析CSS，遇到JS时会暂停其他操作，等待JS下载和执行后再继续‌。</p>
<p><strong>7.‌ 样式计算和布局‌</strong>：浏览器将DOM树和CSSOM树对应起来，进行样式计算和布局，生成布局树。布局树包含了之后渲染后呈现给用户的所有信息‌。</p>
<p><strong>8.‌ 分层渲染‌</strong>：为了优化渲染性能，渲染树会被分解成多个层（Layers），每个层可以独立于其他层进行渲染和合成，减少绘制和合成的工作量‌。</p>
<p><strong>9.‌ 呈现页面‌</strong>：最后，浏览器将布局树转换为可视化的页面，呈现给用户‌。</p>
<p>通过这些步骤，浏览器能够高效地加载和渲染网页内容，提供流畅的浏览体验。</p>
<h1 id="浏览器渲染原理及流程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染原理及流程"><span>浏览器渲染原理及流程</span></a></h1>
<p><strong>浏览器渲染流程是将HTML、CSS和JavaScript转换为可视化页面的核心过程，主要包含解析、样式计算、布局、分层、绘制与合成六大阶段‌。</strong> 现代浏览器采用多进程架构（如Chrome的独立渲染进程）提升性能与稳定性。</p>
<h3 id="核心渲染流程" tabindex="-1"><a class="header-anchor" href="#核心渲染流程"><span>核心渲染流程</span></a></h3>
<h3 id="_1-‌解析与构建‌" tabindex="-1"><a class="header-anchor" href="#_1-‌解析与构建‌"><span>1.‌解析与构建‌</span></a></h3>
<p><strong>DOM树生成‌</strong>：主线程逐行解析HTML，生成DOM树结构。遇到<code v-pre>&lt;script&gt;标签时暂停解析，优先执行JS（异步脚本除外）</code>。‌‌</p>
<p><strong>CSSOM树构建‌</strong>：预解析线程提前下载CSS文件，主线程解析后生成CSSOM树，与DOM树共同构成渲染树基础.</p>
<h3 id="_2-样式计算与布局‌" tabindex="-1"><a class="header-anchor" href="#_2-样式计算与布局‌"><span>2.样式计算与布局‌</span></a></h3>
<p>‌<strong>计算样式‌</strong>：将DOM节点与CSSOM规则匹配，解析相对单位（如em→px）和预设值（如red→rgb(255,0,0)），生成带最终样式的DOM树。‌‌</p>
<p><strong>‌布局树生成‌</strong>：根据样式计算元素几何信息（位置、尺寸），生成布局树。DOM树与布局树内容不完全对应（如display:none元素不进入布局树）。</p>
<h3 id="_3-分层与绘制" tabindex="-1"><a class="header-anchor" href="#_3-分层与绘制"><span>3.分层与绘制</span></a></h3>
<p><strong>分层优化‌</strong>：根据堆叠上下文属性（如z-index、transform）将页面分为多个图层，单独渲染以提升效率。‌‌</p>
<p><strong>‌绘制指令生成‌</strong>：主线程将图层拆分为绘制指令（类似Canvas绘图命令），传递给合成线程处理。</p>
<h3 id="_4-合成与显示" tabindex="-1"><a class="header-anchor" href="#_4-合成与显示"><span>4.合成与显示</span></a></h3>
<p><strong>分块光栅化‌</strong>：合成线程将图层分割为图块，优先处理可视区域内容，利用GPU加速生成位图。‌‌<br>
‌<strong>最终合成‌</strong>：所有图块光栅化后，合成线程通过IPC提交给浏览器进程，最终由GPU驱动显示器更新。</p>
<h3 id="关键性能影响因素" tabindex="-1"><a class="header-anchor" href="#关键性能影响因素"><span>关键性能影响因素</span></a></h3>
<p><strong>1.‌回流（重排）与重绘‌</strong>：</p>
<p><strong>回流‌</strong>：布局变化（如窗口缩放、元素尺寸改动）触发重新计算布局树，代价最高。‌‌</p>
<p><strong>重绘‌</strong>：颜色等不影响布局的样式修改仅触发重新生成绘制指令，跳过布局阶段。</p>
<p><strong>2. 优化策略</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">优化方向</th>
<th>具体方法</th>
<th style="text-align:center">原理</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">减少回流</td>
<td>使用transform替代top/left动画</td>
<td style="text-align:center">跳过布局阶段，直接进入合成‌‌</td>
</tr>
<tr>
<td style="text-align:left">分层控制</td>
<td>为频繁变动元素添加will-change: transform</td>
<td style="text-align:center">提前分配独立图层，避免临时分层计算</td>
</tr>
<tr>
<td style="text-align:left">JS优化</td>
<td>避免同步布局操作（如读取offsetWidth后立即修改样式）</td>
<td style="text-align:center">防止强制布局计算阻塞渲染线程‌‌</td>
</tr>
</tbody>
</table>
<browserPrinciple></browserPrinciple></div></template>


