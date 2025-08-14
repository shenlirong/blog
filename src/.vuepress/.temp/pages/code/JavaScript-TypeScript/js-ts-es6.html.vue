<template><div><!-- more -->
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>ES6 是 ECMAScript 2015 的别名，属于 JavaScript 的标准版本。TypeScript 是 JavaScript 的超集，这意味着它包含了所有 JavaScript 的特性（包括 ES6），并添加了静态类型等额外功能。<br>
所以，ES6 属于 JavaScript 的一部分，TypeScript 完全支持 ES6 并扩展了它。</p>
</div>
<h1 id="js-ts-es6" tabindex="-1"><a class="header-anchor" href="#js-ts-es6"><span>js/ts/es6</span></a></h1>
<ul>
<li>ES6 是 ECMAScript 2015 的别名，属于 JavaScript 的标准版本。TypeScript 是 JavaScript 的超集，这意味着它包含了所有 JavaScript 的特性（包括 ES6），并添加了静态类型等额外功能。</li>
<li>所以，ES6 属于 JavaScript 的一部分，TypeScript 完全支持 ES6 并扩展了它。</li>
</ul>
<p>具体说明：</p>
<ol>
<li>
<p>ES6 的本质<br>
ES6 是 ECMAScript 标准的第 6 个版本（2015 年发布），是 JavaScript 语言的规范。所有现代浏览器和 Node.js 都原生支持 ES6 特性（如 let/const、箭头函数、Promise 等）。</p>
</li>
<li>
<p>TypeScript 的定位<br>
TypeScript 是 JavaScript 的 超集（Superset），它在语法上完全兼容 JavaScript（包括 ES6 及更高版本）。TypeScript 的主要扩展是添加了静态类型系统（如 :string、interface 等）。</p>
</li>
<li>
<p>关键区别</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// ES6 纯 JavaScript 代码（合法）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// TypeScript 在 ES6 基础上添加类型（依然是合法 JS）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">a</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">b</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> number</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>开发中的关系
<ul>
<li>用 .js 文件写 ES6 → 是纯 JavaScript</li>
<li>用 .ts 文件写 ES6 + 类型 → 是 TypeScript<br>
TypeScript 编译后会移除类型注解，生成 ES6（或更旧版本）的 JavaScript 代码。</li>
</ul>
</li>
</ol>
<p>总结：<br>
ES6 是 JavaScript 的标准升级，TypeScript 通过添加类型对其进行了增强。<br>
✅ ES6 属于 JavaScript<br>
✅ TypeScript 扩展了 ES6（而非替代）</p>
</div></template>


