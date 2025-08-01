<template><div><!-- more -->
<h1 id="localstorage和sessionstorage和cookie" tabindex="-1"><a class="header-anchor" href="#localstorage和sessionstorage和cookie"><span>localstorage和sessionstorage和cookie</span></a></h1>
<p>以下是关于localStorage、sessionStorage和Cookie三种浏览器存储方式的详细对比分析：</p>
<h2 id="一、核心区别" tabindex="-1"><a class="header-anchor" href="#一、核心区别"><span>一、核心区别</span></a></h2>
<p><strong>1.存储容量‌：</strong></p>
<p>Cookie：单个限制约4KB<br>
localStorage/sessionStorage：通常5MB左右（不同浏览器有差异）</p>
<p><strong>2.生命周期‌：</strong></p>
<p>Cookie：可设置过期时间，未设置则随会话结束清除<br>
localStorage：永久存储，需手动清除<br>
sessionStorage：仅当前会话有效（关闭标签页即清除）</p>
<p><strong>3.数据传递‌：</strong></p>
<p>Cookie：每次HTTP请求自动携带（增加请求头大小）<br>
Web Storage：仅本地存储，不参与服务器通信</p>
<h2 id="二、作用域差异" tabindex="-1"><a class="header-anchor" href="#二、作用域差异"><span>二、作用域差异</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>Cookie</th>
<th>localStorage</th>
<th>sessionStorage</th>
</tr>
</thead>
<tbody>
<tr>
<td>同源窗口共享</td>
<td>是</td>
<td>是</td>
<td>否（仅当前标签页）</td>
</tr>
<tr>
<td>跨子域名共享</td>
<td>需设置domain属性</td>
<td>不可共享</td>
<td>不可共享</td>
</tr>
</tbody>
</table>
<h2 id="三、典型应用场景" tabindex="-1"><a class="header-anchor" href="#三、典型应用场景"><span>三、典型应用场景</span></a></h2>
<p><strong>Cookie‌：</strong></p>
<p>用户会话管理（如登录状态）<br>
跟踪用户行为（需注意隐私合规）</p>
<p><strong>localStorage‌：</strong></p>
<p>用户偏好设置（主题/语言）<br>
离线缓存数据<br>
未登录用户的购物车暂存</p>
<p><strong>sessionStorage‌：</strong></p>
<p>表单页面间临时数据传递<br>
单页应用的路由状态保持</p>
<h2 id="四、技术实现要点" tabindex="-1"><a class="header-anchor" href="#四、技术实现要点"><span>四、技术实现要点</span></a></h2>
<p><strong>1.Cookie操作‌：</strong></p>
<p ref="5,9" data="citationList">// 设置<br>
document.cookie = &quot;key=value; expires=日期; path=/&quot;;<br>
// 读取（需自行解析字符串）:ml-citation</p>
<p>Web Storage API‌：</p>
<p>// localStorage<br>
localStorage.setItem('key', JSON.stringify(object));<br>
const data = JSON.parse(localStorage.getItem('key')):ml-citation{ref=&quot;2,4&quot; data=&quot;citationList&quot;};</p>
<p>// sessionStorage（API相同）<br>
sessionStorage.setItem('tempData', 'value'):ml-citation{ref=&quot;6&quot; data=&quot;citationList&quot;};</p>
<h2 id="五、安全注意事项" tabindex="-1"><a class="header-anchor" href="#五、安全注意事项"><span>五、安全注意事项</span></a></h2>
<p>1.Cookie需设置HttpOnly和Secure属性防止XSS攻击<br>
2.敏感数据避免存储在客户端，重要操作需服务器验证<br>
3.隐私模式下localStorage不可用，需做兼容处理</p>
<h3 id="localstorage和sessionstorage和cookie-1" tabindex="-1"><a class="header-anchor" href="#localstorage和sessionstorage和cookie-1"><span>localstorage和sessionstorage和cookie</span></a></h3>
<p>我们将详细比较localStorage、sessionStorage和cookie的特性、使用场景以及它们的区别。</p>
<p>1.特性对比<br>
2.使用场景<br>
3.安全性考虑<br>
4.容量限制<br>
5.如何选择</p>
<h3 id="深入解析-localstorage、sessionstorage-与-cookie" tabindex="-1"><a class="header-anchor" href="#深入解析-localstorage、sessionstorage-与-cookie"><span>深入解析：localStorage、sessionStorage 与 Cookie</span></a></h3>
<h4 id="核心区别一览表" tabindex="-1"><a class="header-anchor" href="#核心区别一览表"><span>核心区别一览表</span></a></h4>
<table>
<thead>
<tr>
<th>特性</th>
<th>Cookie</th>
<th>localStorage</th>
<th>sessionStorage</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>存储位置</strong></td>
<td>浏览器 + 服务器</td>
<td>仅浏览器</td>
<td>仅浏览器</td>
</tr>
<tr>
<td><strong>生命周期</strong></td>
<td>自定义过期时间</td>
<td>永久存储</td>
<td>标签页关闭即销毁</td>
</tr>
<tr>
<td><strong>容量限制</strong></td>
<td>≈4KB（单域名）</td>
<td>≈5-10MB（各浏览器不同）</td>
<td>≈5-10MB（各浏览器不同）</td>
</tr>
<tr>
<td><strong>服务器访问</strong></td>
<td>每次请求自动携带</td>
<td>完全不发送</td>
<td>完全不发送</td>
</tr>
<tr>
<td><strong>数据类型支持</strong></td>
<td>仅字符串</td>
<td>仅字符串</td>
<td>仅字符串</td>
</tr>
<tr>
<td><strong>作用域</strong></td>
<td>所有标签页共享</td>
<td>所有标签页共享</td>
<td>仅当前标签页</td>
</tr>
<tr>
<td><strong>操作API</strong></td>
<td>document.cookie</td>
<td>localStorage 方法</td>
<td>sessionStorage 方法</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="一、详细解析" tabindex="-1"><a class="header-anchor" href="#一、详细解析"><span>一、详细解析</span></a></h3>
<h4 id="_1-🍪-cookie" tabindex="-1"><a class="header-anchor" href="#_1-🍪-cookie"><span>1. 🍪 Cookie</span></a></h4>
<ul>
<li><strong>工作原理：</strong> 浏览器每次发起 HTTP 请求时，会自动在请求头 Cookie 中附带当前域名的 cookie</li>
<li><strong>数据格式：</strong> 键值对字符串（需手动编码/解码）</li>
<li><strong>典型使用：</strong></li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>// 设置 cookie（默认会话级，浏览器关闭失效）</span></span>
<span class="line"><span>document.cookie = "username=john; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 读取（返回所有 cookie 的字符串）</span></span>
<span class="line"><span>const cookies = document.cookie; // "username=john; theme=dark"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>安全配置：</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 加密传输（只走 HTTPS）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">cookie</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "secureKey=value; Secure"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 防 XSS 攻击（禁止 JS 读取）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">cookie</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "secret=123; HttpOnly"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-📦-localstorage" tabindex="-1"><a class="header-anchor" href="#_2-📦-localstorage"><span>2. 📦 localStorage</span></a></h4>
<ul>
<li><strong>永久存储：</strong> 需手动删除或通过 JS 清除，同域名下所有窗口共享</li>
<li><strong>操作方法：</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 存对象（需序列化）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> user</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "John"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"user"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 取对象</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> userData</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">parse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"user"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 删除特定项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">removeItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"theme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 清空所有</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">clear</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-🗂️-sessionstorage" tabindex="-1"><a class="header-anchor" href="#_3-🗂️-sessionstorage"><span>3. 🗂️ sessionStorage</span></a></h4>
<ul>
<li><strong>会话级存储：</strong> 刷新页面不丢失，但关闭标签页后自动销毁</li>
<li><strong>特定场景：</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 敏感临时数据（如表单草稿）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">sessionStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"formDraft"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">inputValues</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 页面刷新保持状态</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"beforeunload"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  sessionStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"scrollPos"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scrollY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="二、关键特性对比" tabindex="-1"><a class="header-anchor" href="#二、关键特性对比"><span>二、关键特性对比</span></a></h3>
<h4 id="_1-存储周期" tabindex="-1"><a class="header-anchor" href="#_1-存储周期"><span>1. 存储周期</span></a></h4>
<table>
<thead>
<tr>
<th>存储方式</th>
<th>默认生命周期</th>
<th>改变方式</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Cookie</strong></td>
<td>浏览器关闭失效</td>
<td>expires/max-age 设置时间</td>
</tr>
<tr>
<td><strong>local</strong></td>
<td>永久存储</td>
<td>JS 删除或浏览器清理</td>
</tr>
<tr>
<td><strong>session</strong></td>
<td>标签页关闭即失效</td>
<td>不可延长</td>
</tr>
</tbody>
</table>
<h4 id="_2-作用域控制" tabindex="-1"><a class="header-anchor" href="#_2-作用域控制"><span>2. 作用域控制</span></a></h4>
<table>
<thead>
<tr>
<th>存储方式</th>
<th>域名作用域</th>
<th>路径作用域</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Cookie</strong></td>
<td>✅ <a href="http://domain=.example.com" target="_blank" rel="noopener noreferrer">domain=.example.com</a></td>
<td>✅ path=/admin</td>
</tr>
<tr>
<td><strong>local</strong></td>
<td>❌ 仅当前域名</td>
<td>❌ 全域名共享</td>
</tr>
<tr>
<td><strong>session</strong></td>
<td>❌ 仅当前域名</td>
<td>❌ 全域名共享</td>
</tr>
</tbody>
</table>
<h4 id="_3-性能影响" tabindex="-1"><a class="header-anchor" href="#_3-性能影响"><span>3. 性能影响</span></a></h4>
<ul>
<li><strong>Cookie：</strong> 每次请求携带，过多数据会显著增加请求体积</li>
<li><strong>Web Storage：</strong> 不参与网络通信，适合大数据场景</li>
</ul>
<hr>
<h3 id="三、使用场景建议" tabindex="-1"><a class="header-anchor" href="#三、使用场景建议"><span>三、使用场景建议</span></a></h3>
<h4 id="🛒-cookie-适用场景" tabindex="-1"><a class="header-anchor" href="#🛒-cookie-适用场景"><span>🛒 Cookie 适用场景</span></a></h4>
<ul>
<li>1.用户身份认证（JWT/Session ID）</li>
<li>2.个性化设置需传至服务器的数据（如语言偏好）</li>
<li>3.广告追踪（需跨域时配合第三方域名）</li>
</ul>
<h4 id="💾-localstorage-适用场景" tabindex="-1"><a class="header-anchor" href="#💾-localstorage-适用场景"><span>💾 localStorage 适用场景</span></a></h4>
<ul>
<li>1.缓存静态资源（CSS/JS）</li>
<li>2.长期保存的用户设置（主题/布局）</li>
<li>3.PWA 应用离线数据存储</li>
</ul>
<h4 id="📍-sessionstorage-适用场景" tabindex="-1"><a class="header-anchor" href="#📍-sessionstorage-适用场景"><span>📍 sessionStorage 适用场景</span></a></h4>
<ul>
<li>1.敏感临时数据（多步骤表单）</li>
<li>2.单页面应用（SPA）路由状态保持</li>
<li>3.页面刷新时的滚动位置记录</li>
</ul>
<hr>
<h3 id="四、安全最佳实践-🔒" tabindex="-1"><a class="header-anchor" href="#四、安全最佳实践-🔒"><span>四、安全最佳实践 🔒</span></a></h3>
<p>1.<strong>敏感数据永不存客户端（密码、支付信息等）</strong><br>
2.Cookie 必须设置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 样例：高安全配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">cookie</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  `authToken=</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">token</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "HttpOnly"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 防 XSS 读取</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "Secure"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 仅 HTTPS 传输</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "SameSite=Lax"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 防 CSRF 攻击</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "path=/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "domain=example.com"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  `max-age=</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3600</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 24</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'; '</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://3.Web" target="_blank" rel="noopener noreferrer">3.Web</a> Storage 存储前加密：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">encrypt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)));</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="五、特殊场景处理" tabindex="-1"><a class="header-anchor" href="#五、特殊场景处理"><span>五、特殊场景处理</span></a></h3>
<h4 id="跨标签页通信" tabindex="-1"><a class="header-anchor" href="#跨标签页通信"><span>跨标签页通信</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 使用 localStorage 实现标签页同步</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"storage"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">key</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "theme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    applyTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">newValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="超大存储方案" tabindex="-1"><a class="header-anchor" href="#超大存储方案"><span>超大存储方案</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 超 10MB 数据使用 IndexedDB</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> db</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> indexedDB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"MyDB"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onupgradeneeded</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> db</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createObjectStore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"videos"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">autoIncrement</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结选择策略" tabindex="-1"><a class="header-anchor" href="#总结选择策略"><span>总结选择策略</span></a></h3>
<table>
<thead>
<tr>
<th>需求特征</th>
<th>推荐方案</th>
</tr>
</thead>
<tbody>
<tr>
<td>需服务器读取的小数据（&lt;4KB）</td>
<td>Cookie</td>
</tr>
<tr>
<td>长期保存的静态数据</td>
<td>localStorage</td>
</tr>
<tr>
<td>敏感临时数据</td>
<td>sessionStorage</td>
</tr>
<tr>
<td>结构化大数据（文件/视频）</td>
<td>IndexedDB</td>
</tr>
</tbody>
</table>
<blockquote>
<p>最佳实践：优先使用 Web Storage，Cookie 仅用于需与服务端通信的关键信息，敏感数据必须加密处理并考虑 HttpOnly 和 Secure 标记的保护<br>
<a href="https://blog.csdn.net/m0_74037439/article/details/146538639" target="_blank" rel="noopener noreferrer">前端数据存储全解析：localStorage、sessionStorage 与 Cookie</a></p>
</blockquote>
</div></template>


