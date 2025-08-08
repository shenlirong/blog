<template><div><!-- more -->
<h1 id="pinia的使用" tabindex="-1"><a class="header-anchor" href="#pinia的使用"><span>pinia的使用</span></a></h1>
<p><strong>‌Pinia是Vue 3的专属状态管理库，用于跨组件或页面共享状态，其核心功能包括State（数据存储）、Getters（计算属性）和Actions（方法）‌。与Vuex相比，Pinia具有更简单的API设计、完整的TypeScript支持，并取消了mutations概念，更适合组合式API开发。</strong></p>
<h2 id="‌核心概念与优势" tabindex="-1"><a class="header-anchor" href="#‌核心概念与优势"><span>‌核心概念与优势</span></a></h2>
<p><strong>1.核心组成:</strong><br>
<strong>‌State‌</strong>：存储应用状态数据，定义为返回初始状态的函数。‌‌<br>
<strong>‌Getters‌</strong>：派生状态（类似计算属性），接收state作为首个参数。‌‌<br>
<strong>‌Actions‌</strong>：同步/异步方法，直接修改state（无需mutations）</p>
<p><strong>2.‌主要优势‌：</strong><br>
1. 仅1KB体积，支持Vue 2/3和TypeScript。‌‌<br>
2. 扁平化Store设计，无需模块嵌套。‌‌<br>
3.支持插件扩展（如持久化存储插件）。‌‌</p>
<h2 id="‌安装与基础使用" tabindex="-1"><a class="header-anchor" href="#‌安装与基础使用"><span>‌安装与基础使用</span></a></h2>
<p>1.‌安装‌：通过npm/yarn/pnpm安装：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pnpm install pinia</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.集成到Vue应用‌</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>import { createPinia } from 'pinia'</span></span>
<span class="line"><span>app.use(createPinia())</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.‌定义Store‌（两种方式）</strong><br>
<strong>Option Store‌</strong>（类似Vue选项式API）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>defineStore('counter', {</span></span>
<span class="line"><span>  state: () => ({ count: 0 }),</span></span>
<span class="line"><span>  getters: { double: state => state.count * 2 },</span></span>
<span class="line"><span>  actions: { increment() { this.count++ } }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Setup Store‌</strong>（组合式API风格）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>defineStore('counter', () => {</span></span>
<span class="line"><span>  const count = ref(0)</span></span>
<span class="line"><span>  const double = computed(() => count.value * 2)</span></span>
<span class="line"><span>  function increment() { count.value++ }</span></span>
<span class="line"><span>  return { count, double, increment }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.‌组件中使用<br>
1.‌调用Store‌：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span> import { useCounterStore } from '@/stores/counter'</span></span>
<span class="line"><span> const counter = useCounterStore()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.访问状态与方法‌：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>  直接通过counter.count读取state。</span></span>
<span class="line"><span>  通过counter.increment()调用action</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia与vuex区别" tabindex="-1"><a class="header-anchor" href="#pinia与vuex区别"><span>pinia与vuex区别</span></a></h2>
<p>Vuex和Pinia都是用于Vue.js应用的状态管理库，但它们在设计理念、使用方式、功能、性能等方面存在一些区别。</p>
<p><strong>1.设计理念和使用方式</strong>：</p>
<p>Vuex：采用全局单例模式，通过一个store对象来管理所有的状态。它的状态管理是集中的，适合大型项目和需要复杂状态管理的场景。<br>
Pinia：则采用了分离模式，每个组件都可以拥有自己的store实例。这意味着在Pinia中，状态管理是分散的，更适合小型项目或对TypeScript要求高的场景。</p>
<p><strong>2.功能和模块化</strong>：</p>
<p>Vuex：提供了更多的功能，如模块化、插件和严格模式等。Vuex的模块化允许将状态管理拆分成多个模块，每个模块负责一部分状态，提高了代码的可维护性。<br>
Pinia：没有modules配置，每一个独立的仓库都是通过definStore生成的，这使得代码更加扁平化和易于维护。同时，Pinia对TypeScript提供了原生支持，提供了更好的类型推导和类型检查。</p>
<p><strong>3.性能</strong>：</p>
<p>Pinia：相比Vuex具有更好的性能，因为它使用了新的ES6语法和数据处理方式。同时，Pinia的体积也更小，大约只有1KB，这使得它在性能上更具优势。</p>
<p><strong>4.社区支持和版本兼容性</strong>：</p>
<p>Vuex：由Vue.js官方出品，拥有较强的社区支持和丰富的文档。它的设计主要是为了支持Vue 3，但也可以在Vue 2项目中使用（可能需要额外的适配工作）。<br>
Pinia：是一个较新的框架，社区支持相对较弱，但也在不断发展壮大。它同时支持Vue 2和Vue 3，与Vue 3的响应式系统和Composition API紧密集成。</p>
<p><strong>5.易用性和语法</strong>：</p>
<p>Pinia：的语法比Vuex更简单且易于理解。它提供了更好的TypeScript支持，使得代码更加简洁和易于维护。同时，Pinia允许直接修改状态，而Vuex则需要通过mutations来修改状态。<br>
综上所述，Vuex和Pinia各有优缺点，选择哪个取决于你的项目需求和个人偏好。如果你需要一个功能丰富、社区支持强的状态管理解决方案，Vuex是一个不错的选择。而如果你追求简单、轻量且高性能的状态管理，Pinia可能是更好的选择</p>
</div></template>


