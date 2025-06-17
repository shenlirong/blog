<template><div><!-- more -->
<h1 id="vue3定于组件名字的几种方法" tabindex="-1"><a class="header-anchor" href="#vue3定于组件名字的几种方法"><span>Vue3定于组件名字的几种方法</span></a></h1>
<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h2>
<p>使用两个组件标签</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;script lang="ts"></span></span>
<span class="line"><span>export default({</span></span>
<span class="line"><span>    name:'myComponnet'</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script lang="ts" setup></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件逻辑</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>使用defineOptions</span></span>
<span class="line"><span>&#x3C;script></span></span>
<span class="line"><span>defineOptions({</span></span>
<span class="line"><span>    name:'myComponnet'</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三"><span>方法三</span></a></h2>
<p>使用插件 ：pnpm i vite-plugin-vue-setup-extend -D<br>
<img src="@source/code/image/1.png" alt="alt text" loading="lazy"></p>
</div></template>


