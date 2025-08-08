<template><div><!-- more -->
<h1 id="前端解决跨域的方法" tabindex="-1"><a class="header-anchor" href="#前端解决跨域的方法"><span>前端解决跨域的方法</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.什么是跨域</span></span>
<span class="line"><span>跨域是指一个域下的文档或者脚本试图去请求另一个域下的资源，这里跨域是广义上的，而我们一般说的跨域是狭义的，是由浏览器同源策略限制的一种场景。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.什么是同源策略</span></span>
<span class="line"><span>同源策略，简称sop(same origin policy),是一种约定，是浏览器最核心也是最基本的安全功能，如果缺少同源策略，浏览器很容易受到非法攻击，所谓同源，是指 “协议+域名+端口”，三者相同。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同源策略限制以下几种行为：</span></span>
<span class="line"><span>1、Cookie、LocalStorage 和 IndexDB 无法读取</span></span>
<span class="line"><span>2、 DOM 和 Js对象无法获得</span></span>
<span class="line"><span>3、 AJAX 请求不能发送</span></span>
<span class="line"><span></span></span>
<span class="line"><span>常见跨域场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>URL                                      说明                    是否允许通信</span></span>
<span class="line"><span>http://www.demo.com/a.js</span></span>
<span class="line"><span>http://www.demo.com/b.js         同一域名，不同文件或路径           允许</span></span>
<span class="line"><span>http://www.demo.com/lab/c.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://www.demo.com:8000/a.js</span></span>
<span class="line"><span>http://www.demo.com/b.js         同一域名，不同端口                不允许</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>http://www.demo.com/a.js</span></span>
<span class="line"><span>https://www.demo.com/b.js        同一域名，不同协议                不允许</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>http://www.demo.com/a.js</span></span>
<span class="line"><span>http://127.0.0.1/b.js           域名和域名对应相同ip              不允许</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>http://www.demo.com/a.js</span></span>
<span class="line"><span>http://x.demo.com/b.js           主域相同，子域不同                不允许</span></span>
<span class="line"><span>http://demo.com/c.js</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>http://www.demo1.com/a.js</span></span>
<span class="line"><span>http://www.demo2.com/b.js        不同域名                         不允许</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="跨域解决方案" tabindex="-1"><a class="header-anchor" href="#跨域解决方案"><span>跨域解决方案</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>1、 通过jsonp跨域</span></span>
<span class="line"><span>2、 document.domain + iframe跨域</span></span>
<span class="line"><span>3、 location.hash + iframe</span></span>
<span class="line"><span>4、 window.name + iframe跨域</span></span>
<span class="line"><span>5、 postMessage跨域</span></span>
<span class="line"><span>6、 跨域资源共享（CORS）</span></span>
<span class="line"><span>7、 nginx代理跨域</span></span>
<span class="line"><span>8、 nodejs中间件代理跨域</span></span>
<span class="line"><span>9、 WebSocket协议跨域</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


