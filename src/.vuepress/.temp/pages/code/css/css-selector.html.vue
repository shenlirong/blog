<template><div><!-- more -->
<h1 id="css-选择器详解-附优先级与实战技巧" tabindex="-1"><a class="header-anchor" href="#css-选择器详解-附优先级与实战技巧"><span>CSS 选择器详解（附优先级与实战技巧）</span></a></h1>
<h2 id="css-选择器是定义样式规则的关键引擎-我将从-11-大类选择器详细解析-涵盖基础用法与高阶应用场景" tabindex="-1"><a class="header-anchor" href="#css-选择器是定义样式规则的关键引擎-我将从-11-大类选择器详细解析-涵盖基础用法与高阶应用场景"><span>CSS 选择器是定义样式规则的关键引擎，我将从 11 大类选择器详细解析，涵盖基础用法与高阶应用场景：</span></a></h2>
<h2 id="🔍-一、基础选择器-4种核心武器" tabindex="-1"><a class="header-anchor" href="#🔍-一、基础选择器-4种核心武器"><span>🔍 一、基础选择器（4种核心武器）</span></a></h2>
<h3 id="_1-元素选择器" tabindex="-1"><a class="header-anchor" href="#_1-元素选择器"><span>1. 元素选择器</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择所有 &#x3C;p> 元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">333</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-类选择器-class" tabindex="-1"><a class="header-anchor" href="#_2-类选择器-class"><span>2. 类选择器 (.class)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择 class="warning" 的元素 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.warning</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 多类选择：同时有 btn 和 primary 类 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.btn.primary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-id-选择器-id" tabindex="-1"><a class="header-anchor" href="#_3-id-选择器-id"><span>3. ID 选择器 (#id)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择 id="header" 的元素 */</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">#header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-通配符选择器" tabindex="-1"><a class="header-anchor" href="#_4-通配符选择器"><span>4. 通配符选择器 (*)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择所有元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  box-sizing: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">border-box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🧩-二、关系选择器-5种连接符" tabindex="-1"><a class="header-anchor" href="#🧩-二、关系选择器-5种连接符"><span>🧩 二、关系选择器（5种连接符）</span></a></h2>
<h3 id="_1-后代选择器-空格" tabindex="-1"><a class="header-anchor" href="#_1-后代选择器-空格"><span>1. 后代选择器 (空格)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择 .article 内所有 &#x3C;p> */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.article</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  line-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-子元素选择器" tabindex="-1"><a class="header-anchor" href="#_2-子元素选择器"><span>2. 子元素选择器 (&gt;)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 只选择 .menu 的直接子元素 &#x3C;li> */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.menu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">eee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_3-相邻兄弟选择器"><span>3. 相邻兄弟选择器 (+)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择紧跟在 h2 后的第一个 &#x3C;p> */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  margin-top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_4-通用兄弟选择器"><span>4. 通用兄弟选择器 (~)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择 h3 后的所有同级 &#x3C;p> */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ~</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">666</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-列选择器-实验性" tabindex="-1"><a class="header-anchor" href="#_5-列选择器-实验性"><span>5. 列选择器 (||)（实验性）</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选择表格中列有 col-active 类 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">col</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.col-active</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> || </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">td</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">f0f9ff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎭-三、属性选择器-7种匹配武器" tabindex="-1"><a class="header-anchor" href="#🎭-三、属性选择器-7种匹配武器"><span>🎭 三、属性选择器（7种匹配武器）</span></a></h2>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 存在 title 属性 */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">title</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* title="help" */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"help"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* title 以 "icon-" 开头 */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">^=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"icon-"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* title 以 ".pdf" 结尾 */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">".pdf"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* title 包含 "example" */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">*=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"example"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 独立单词匹配（空格分隔） */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">~=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"active"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 连字符前缀匹配（lang|="zh"） */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"zh"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="👻-四、伪类选择器-状态类" tabindex="-1"><a class="header-anchor" href="#👻-四、伪类选择器-状态类"><span>👻 四、伪类选择器（状态类）</span></a></h2>
<h3 id="_1-动态伪类" tabindex="-1"><a class="header-anchor" href="#_1-动态伪类"><span>1. 动态伪类</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 未访问 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:visited</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 已访问 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 鼠标悬停 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 激活状态 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:focus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...} </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 获得焦点 */</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-结构伪类" tabindex="-1"><a class="header-anchor" href="#_2-结构伪类"><span>2. 结构伪类</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 第一个子元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:first-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 最后一个子元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:last-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 第3个子元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:nth-child</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 奇数行 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tr</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:nth-child</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">(</span><span style="--shiki-light:#986801;--shiki-dark:#C678DD">odd</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 唯一子元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:only-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 空元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:empty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-表单伪类" tabindex="-1"><a class="header-anchor" href="#_3-表单伪类"><span>3. 表单伪类</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:checked</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 勾选状态 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:disabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 禁用状态 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:required</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 必填项 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:in-range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 值在范围内 */</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🧪-五、伪元素选择器-虚拟元素" tabindex="-1"><a class="header-anchor" href="#🧪-五、伪元素选择器-虚拟元素"><span>🧪 五、伪元素选择器（虚拟元素）</span></a></h2>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 段落首行 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::first-line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 段落首字母 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::first-letter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 元素前插入内容 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">blockquote</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  content: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"“"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 元素后插入内容 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.tooltip</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  content: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">attr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">data-tip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 选中的文本 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::selection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🎯-六、选择器优先级计算-4级权重" tabindex="-1"><a class="header-anchor" href="#🎯-六、选择器优先级计算-4级权重"><span>🎯 六、选择器优先级计算（4级权重）</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">选择器类型</th>
<th>示例</th>
<th>权重值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">行内样式</td>
<td>style=&quot;...&quot;</td>
<td>1000</td>
</tr>
<tr>
<td style="text-align:left">ID 选择器</td>
<td>#header</td>
<td>100</td>
</tr>
<tr>
<td style="text-align:left">类/属性/伪类选择器</td>
<td>.active</td>
<td>10</td>
</tr>
<tr>
<td style="text-align:left">元素/伪元素选择器</td>
<td>p / ::after</td>
<td>1</td>
</tr>
<tr>
<td style="text-align:left">通配符/关系符</td>
<td>* / &gt; / +</td>
<td>0</td>
</tr>
</tbody>
</table>
<p>计算规则：</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">#nav</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> .item</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:hover</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">     /* 100 + 10 + 10 = 120 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">header</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">#top</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.active</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  /* 1 + 100 + 10 = 111 */</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="💡-高级技巧与实战应用" tabindex="-1"><a class="header-anchor" href="#💡-高级技巧与实战应用"><span>💡 高级技巧与实战应用</span></a></h2>
<h3 id="_1-性能优化" tabindex="-1"><a class="header-anchor" href="#_1-性能优化"><span>1. 性能优化</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 避免过度使用通用选择器 */</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 不佳： */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 更优： */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.specific-span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {...}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-动态样式控制" tabindex="-1"><a class="header-anchor" href="#_2-动态样式控制"><span>2. 动态样式控制</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 根据属性动态改变样式 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">^=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">::after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  content: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">secure-icon.svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-表单进阶" tabindex="-1"><a class="header-anchor" href="#_3-表单进阶"><span>3. 表单进阶</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 未勾选的复选框 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"checkbox"</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">]</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:not</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">(</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:checked</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  opacity: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-现代伪类应用" tabindex="-1"><a class="header-anchor" href="#_4-现代伪类应用"><span>4. 现代伪类应用</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 首个子元素 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:first-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { ... }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 用户无效输入 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">user-invalid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-选择器逻辑组合" tabindex="-1"><a class="header-anchor" href="#_5-选择器逻辑组合"><span>5. 选择器逻辑组合</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 排除特定元素 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">article</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2"> :not</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.ad</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">800</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 组合选择器 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:disabled</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.button-disabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  cursor: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">not-allowed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="🌐-浏览器支持速查表" tabindex="-1"><a class="header-anchor" href="#🌐-浏览器支持速查表"><span>🌐 浏览器支持速查表</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th>Chrome</th>
<th>Firefox</th>
<th>Safari</th>
<th>Edge</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">:is()</td>
<td>✅ 88+</td>
<td>✅ 78+</td>
<td>✅ 14+</td>
<td>✅ 88+</td>
</tr>
<tr>
<td style="text-align:left">:where()</td>
<td>✅ 88+</td>
<td>✅ 78+</td>
<td>✅ 14+</td>
<td>✅ 88+</td>
</tr>
<tr>
<td style="text-align:left">:has()</td>
<td>✅ 105+</td>
<td>✅ 121+</td>
<td>🚫</td>
<td>✅ 105+</td>
</tr>
<tr>
<td style="text-align:left">::marker</td>
<td>✅ 86+</td>
<td>✅ 68+</td>
<td>✅ 14+</td>
<td>✅ 86+</td>
</tr>
<tr>
<td style="text-align:left">:focus-visible</td>
<td>✅ 86+</td>
<td>✅ 85+</td>
<td>✅ 15.4+</td>
<td>✅ 86+</td>
</tr>
</tbody>
</table>
<blockquote>
<p>✅ = 支持 🚫 = 不支持<br>
掌握这些选择器组合，能让你如CSS忍者般精准定位元素！🏹</p>
</blockquote>
<h2 id="div-class-static-active-div-中-class-写样式的时候谁的优先级更高" tabindex="-1"><a class="header-anchor" href="#div-class-static-active-div-中-class-写样式的时候谁的优先级更高"><span><code v-pre>&lt;div class=&quot;static active&quot;&gt;&lt;/div&gt;</code> 中 class 写样式的时候谁的优先级更高</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>在 CSS 中，样式优先级不是由 HTML 的 class 属性中的类名顺序决定的。&#x3C;div class="static active">&#x3C;/div> 中的两个类名优先级是相等的，关键看样式表中的定义顺序和选择器权重。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="优先级规则" tabindex="-1"><a class="header-anchor" href="#优先级规则"><span>优先级规则：</span></a></h3>
<ol>
<li>选择器权重决定优先级：
<ul>
<li>!important &gt; 行内样式 &gt; ID选择器 &gt; 类/属性/伪类选择器 &gt; 元素/伪元素选择器 &gt; 通配符</li>
</ul>
</li>
<li>相同权重的比较原则：
<ul>
<li>后定义的样式会覆盖先定义的样式（样式表顺序优先）</li>
<li>HTML 属性中的类名顺序无关紧要</li>
</ul>
</li>
</ol>
<hr>
<h3 id="示例说明" tabindex="-1"><a class="header-anchor" href="#示例说明"><span>示例说明：</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 权重：0-0-1-0 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 权重：0-0-1-0 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果" tabindex="-1"><a class="header-anchor" href="#结果"><span>结果：</span></a></h4>
<ul>
<li>
<div class="static active"> </div>会显示 蓝色文字
</li>
<li>因为 .active 定义在 .static 之后，后定义的覆盖先定义的</li>
</ul>
<h4 id="如果调换顺序" tabindex="-1"><a class="header-anchor" href="#如果调换顺序"><span>如果调换顺序：</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结果变成 红色文字</li>
</ul>
<hr>
<h3 id="更复杂的权重比较" tabindex="-1"><a class="header-anchor" href="#更复杂的权重比较"><span>更复杂的权重比较：</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 权重：0-0-1-0 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.static.active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 双类选择器权重更高 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 权重：0-0-1-0 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">normal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果-1" tabindex="-1"><a class="header-anchor" href="#结果-1"><span>结果：</span></a></h4>
<ul>
<li>
<div class="static active"> </div> 的字体为 粗体
</li>
<li>即使 .active 定义在双类选择器之后，因为 .static.active 权重更高</li>
</ul>
<hr>
<h3 id="关键总结" tabindex="-1"><a class="header-anchor" href="#关键总结"><span>关键总结：</span></a></h3>
<ol>
<li>类名顺序不影响：.static.active 与 .active.static 等价</li>
<li>样式表定义顺序：相同权重下，后定义的生效</li>
<li>选择器权重：
<ul>
<li>类选择器 .class：权重 0-0-1-0</li>
<li>双类选择器 .class1.class2：权重 0-0-2-0</li>
<li>ID 选择器 #id：权重 0-1-0-0</li>
</ul>
</li>
</ol>
<hr>
<h3 id="解决优先级冲突技巧" tabindex="-1"><a class="header-anchor" href="#解决优先级冲突技巧"><span>解决优先级冲突技巧：</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 方案1：提高选择器权重 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.static.active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">purple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 方案2：改变定义顺序 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.active</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; } </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 后定义的生效 */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 方案3：谨慎使用 !important（不推荐） */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> !important</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 强制最高优先级 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>📌 最佳实践：当有样式冲突时，优先使用更具体的选择器（如 div.header.active）而不是改变顺序或使用 !important。</p>
</blockquote>
</div></template>


