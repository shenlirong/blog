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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="浏览器加载原理" tabindex="-1"><a class="header-anchor" href="#浏览器加载原理"><span>浏览器加载原理</span></a></h1>
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


