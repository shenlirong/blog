<template>
    <div id="content_views" class="markdown_views prism-atom-one-dark">
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block"
                style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
        </svg>
        <p><strong>Vue3.0相较于Vue2.0有了很大的提升，本篇是对Vue3.0新特性的总结，分别从 语法 API、响应式系统增强、Teleport、Suspense
                这几方面进行详细介绍及使用方式：</strong></p>
        <h3><a name="t0"></a><a id="_API__2"></a>语法和 API 层面</h3>
        <ul>
            <li>
                <p><strong>组合式 API（Composition API）</strong></p>
                <ul>
                    <li><strong>原理：</strong> 组合式 API 是 Vue 3 最核心的新特性之一，它允许开发者以函数的形式组织逻辑，将相关的逻辑封装在一个函数中，而不是像选项式 API
                        那样分散在不同的选项里。</li>
                    <li><strong>优势：</strong> 提高了代码的复用性和可维护性，尤其适用于大型项目。</li>
                </ul>
            </li>
            <li>
                <p><strong>&lt; script setup&gt; 语法糖</strong></p>
                <ul>
                    <li><strong>原理：</strong> 这是一种在单文件组件（SFC）中使用组合式 API 的更简洁语法。使用 &lt; script setup&gt; 后，无需再手动导出 setup
                        函数的返回值，变量和函数会自动暴露给模板。</li>
                    <li><strong>优势：</strong> 减少了样板代码，让代码更加简洁。</li>
                    <li><strong>示例：</strong></li>
                </ul>
                <pre data-index="0" class="new-version set-code-height set-code-hide prettyprint"
                    name="code"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{<!-- --></span><span class="token punctuation">{<!-- --></span> count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"increment"</span><span class="token operator">&gt;</span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{<!-- --></span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{<!-- --></span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code><div class="opt-box"><button class="btn-code-notes mdeditor " data-report-click="{&quot;spm&quot;:&quot;3001.10436&quot;,&quot;dest&quot;:&quot;https://trae.com.cn?utm_source=community&amp;utm_medium=csdn&amp;utm_campaign=daima&quot;,&quot;extra&quot;:{&quot;index&quot;:0,&quot;runIdx&quot;:-1}}">AI写代码</button><span class="code-language" data-language="javascript">javascript</span><div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="mdcp.signin(event)"></div><span class="code-run-btn" data-idx="0" data-language="javascript">运行</span></div><div class="hide-preCode-box"><span class="hide-preCode-bt"><img class="look-more-preCode contentImg-no-view" src="https://csdnimg.cn/release/blogv2/dist/pc/img/runCode/icon-arrowwhite.png" alt="" title=""></span></div><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li><li style="color: rgb(153, 153, 153);">15</li></ul></pre>
            </li>
        </ul>
        <h3><a name="t1"></a><a id="_29"></a><a
                href="https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&amp;spm=1001.2101.3001.7020"
                target="_blank" class="hl hl-1"
                data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=%E5%93%8D%E5%BA%94%E5%BC%8F&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;响应式\&quot;}&quot;}"
                data-tit="响应式" data-pretit="响应式">响应式</a>系统增强</h3>
        <ul>
            <li><strong>原理：</strong> Vue 3 使用 Proxy 代替了 Vue 2 中的 Object.defineProperty 来实现响应式。Proxy 可以直接监听对象和数组的变化，而不需要像
                Object.defineProperty 那样对每个属性进行遍历和劫持，这使得响应式的实现更加高效和灵活，并且能够检测到更多类型的变化，比如对数组的直接修改等。</li>
            <li><strong>优势：</strong> 提高了性能，支持更多的数据类型（如 Map、Set 等），并且能更精确地追踪依赖。</li>
            <li><strong>使用示例：</strong>
                <pre data-index="1" class="new-version set-code-height set-code-hide prettyprint"
                    name="code"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Count<span class="token operator">:</span> <span class="token punctuation">{<!-- --></span><span class="token punctuation">{<!-- --></span> state<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"increment"</span><span class="token operator">&gt;</span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{<!-- --></span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{<!-- --></span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token comment">// 创建响应式数据</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{<!-- --></span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义方法</span>
    <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{<!-- --></span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{<!-- --></span>
      state<span class="token punctuation">,</span>
      increment
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code><div class="opt-box"><div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="mdcp.signin(event)"></div><span class="code-run-btn" data-idx="1" data-language="javascript">运行</span></div><div class="hide-preCode-box"><span class="hide-preCode-bt"><img class="look-more-preCode contentImg-no-view" src="https://csdnimg.cn/release/blogv2/dist/pc/img/runCode/icon-arrowwhite.png" alt="" title=""></span></div><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li><li style="color: rgb(153, 153, 153);">15</li><li style="color: rgb(153, 153, 153);">16</li><li style="color: rgb(153, 153, 153);">17</li><li style="color: rgb(153, 153, 153);">18</li><li style="color: rgb(153, 153, 153);">19</li><li style="color: rgb(153, 153, 153);">20</li><li style="color: rgb(153, 153, 153);">21</li><li style="color: rgb(153, 153, 153);">22</li><li style="color: rgb(153, 153, 153);">23</li><li style="color: rgb(153, 153, 153);">24</li><li style="color: rgb(153, 153, 153);">25</li></ul></pre>
            </li>
        </ul>
        <h3><a name="t2"></a><a id="Teleport_61"></a>Teleport（传送门）</h3>
        <ul>
            <li><strong>概念：</strong> Teleport 是 Vue 3 提供的一个新组件，它允许你将一个组件内部的元素渲染到 DOM 中的其他位置，而不是严格按照组件的嵌套层次来渲染。</li>
            <li><strong>优势：</strong> 这在一些场景下非常有用，比如创建模态框、提示框等，这些元素通常需要放置在文档的顶层，以避免被其他元素的样式或布局所影响。</li>
            <li><strong>使用示例：</strong>
                <pre data-index="2" class="new-version set-code-height prettyprint set-code-show"
                    name="code"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"showModal = true"</span><span class="token operator">&gt;</span>Open Modal<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Teleport组件将其内部内容传送到指定的目标元素 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"showModal"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"modal"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"modal-content"</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>This is a modal<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"showModal = false"</span><span class="token operator">&gt;</span>Close<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>teleport<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{<!-- --></span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
    <span class="token keyword">return</span> <span class="token punctuation">{<!-- --></span>
      <span class="token literal-property property">showModal</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>modal <span class="token punctuation">{<!-- --></span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>modal<span class="token operator">-</span>content <span class="token punctuation">{<!-- --></span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code><div class="opt-box"><button class="btn-code-notes mdeditor " data-report-click="{&quot;spm&quot;:&quot;3001.10436&quot;,&quot;dest&quot;:&quot;https://trae.com.cn?utm_source=community&amp;utm_medium=csdn&amp;utm_campaign=daima&quot;,&quot;extra&quot;:{&quot;index&quot;:2,&quot;runIdx&quot;:-1}}">AI写代码</button><span class="code-language" data-language="javascript">javascript</span><div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="mdcp.signin(event)"></div><span class="code-run-btn" data-idx="2" data-language="javascript">运行</span></div><div class="hide-preCode-box"><span class="hide-preCode-bt"><img class="look-more-preCode contentImg-no-view" src="https://csdnimg.cn/release/blogv2/dist/pc/img/runCode/icon-arrowwhite.png" alt="" title=""></span></div><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li><li style="color: rgb(153, 153, 153);">15</li><li style="color: rgb(153, 153, 153);">16</li><li style="color: rgb(153, 153, 153);">17</li><li style="color: rgb(153, 153, 153);">18</li><li style="color: rgb(153, 153, 153);">19</li><li style="color: rgb(153, 153, 153);">20</li><li style="color: rgb(153, 153, 153);">21</li><li style="color: rgb(153, 153, 153);">22</li><li style="color: rgb(153, 153, 153);">23</li><li style="color: rgb(153, 153, 153);">24</li><li style="color: rgb(153, 153, 153);">25</li><li style="color: rgb(153, 153, 153);">26</li><li style="color: rgb(153, 153, 153);">27</li><li style="color: rgb(153, 153, 153);">28</li><li style="color: rgb(153, 153, 153);">29</li><li style="color: rgb(153, 153, 153);">30</li><li style="color: rgb(153, 153, 153);">31</li><li style="color: rgb(153, 153, 153);">32</li><li style="color: rgb(153, 153, 153);">33</li><li style="color: rgb(153, 153, 153);">34</li><li style="color: rgb(153, 153, 153);">35</li><li style="color: rgb(153, 153, 153);">36</li><li style="color: rgb(153, 153, 153);">37</li><li style="color: rgb(153, 153, 153);">38</li><li style="color: rgb(153, 153, 153);">39</li><li style="color: rgb(153, 153, 153);">40</li><li style="color: rgb(153, 153, 153);">41</li></ul></pre>
            </li>
        </ul>
        <h3><a name="t3"></a><a id="Suspense_109"></a>Suspense（异步组件加载）</h3>
        <ul>
            <li><strong>概念：</strong> Suspense 是 Vue 3
                中用于处理异步组件加载的新特性。它允许你在组件加载过程中显示一个加载状态，直到异步组件加载完成后再显示实际内容。这对于提高用户体验，特别是在加载一些较大的组件或需要异步获取数据的组件时非常有帮助。</li>
            <li><strong>优势：</strong> 提高了用户体验，避免在异步组件加载时出现空白页面。</li>
            <li><strong>使用示例：</strong>
                <pre data-index="3" class="new-version set-code-height prettyprint set-code-show"
                    name="code"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>suspense<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 加载中的提示 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #fallback<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 异步组件 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #<span class="token keyword">default</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>AsyncComponent <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>suspense<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{<!-- --></span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 定义异步组件</span>
<span class="token keyword">const</span> AsyncComponent <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./AsyncComponent.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{<!-- --></span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{<!-- --></span>
    AsyncComponent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code><div class="opt-box"><button class="btn-code-notes mdeditor " data-report-click="{&quot;spm&quot;:&quot;3001.10436&quot;,&quot;dest&quot;:&quot;https://trae.com.cn?utm_source=community&amp;utm_medium=csdn&amp;utm_campaign=daima&quot;,&quot;extra&quot;:{&quot;index&quot;:3,&quot;runIdx&quot;:-1}}">AI写代码</button><span class="code-language" data-language="javascript">javascript</span><div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="mdcp.signin(event)"></div><span class="code-run-btn" data-idx="3" data-language="javascript">运行</span></div><div class="hide-preCode-box"><span class="hide-preCode-bt"><img class="look-more-preCode contentImg-no-view" src="https://csdnimg.cn/release/blogv2/dist/pc/img/runCode/icon-arrowwhite.png" alt="" title=""></span></div><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li><li style="color: rgb(153, 153, 153);">15</li><li style="color: rgb(153, 153, 153);">16</li><li style="color: rgb(153, 153, 153);">17</li><li style="color: rgb(153, 153, 153);">18</li><li style="color: rgb(153, 153, 153);">19</li><li style="color: rgb(153, 153, 153);">20</li><li style="color: rgb(153, 153, 153);">21</li><li style="color: rgb(153, 153, 153);">22</li><li style="color: rgb(153, 153, 153);">23</li><li style="color: rgb(153, 153, 153);">24</li></ul></pre>
            </li>
        </ul>
        <h3><a name="t4"></a><a id="_140"></a>渲染机制层面</h3>
        <ul>
            <li>
                <p><strong>Fragment 支持</strong></p>
                <ul>
                    <li><strong>原理：</strong> 在 Vue 2 中，组件必须有一个根节点。而在 Vue 3 中，组件可以返回多个根节点，形成一个片段。</li>
                    <li><strong>优势：</strong> 减少了不必要的 DOM 节点嵌套，使代码结构更加清晰。</li>
                    <li><strong>示例：</strong></li>
                </ul>
                <pre data-index="4" class="new-version set-code-show prettyprint"
                    name="code"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Paragraph <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Paragraph <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{<!-- --></span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code><div class="opt-box"><button class="btn-code-notes mdeditor " data-report-click="{&quot;spm&quot;:&quot;3001.10436&quot;,&quot;dest&quot;:&quot;https://trae.com.cn?utm_source=community&amp;utm_medium=csdn&amp;utm_campaign=daima&quot;,&quot;extra&quot;:{&quot;index&quot;:4,&quot;runIdx&quot;:-1}}">AI写代码</button><span class="code-language" data-language="javascript">javascript</span><div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="mdcp.signin(event)"></div><span class="code-run-btn" data-idx="4" data-language="javascript">运行</span></div><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li></ul></pre>
            </li>
        </ul>
        <h3><a name="t5"></a><a id="_158"></a>其他特性</h3>
        <ul>
            <li><strong>全局 API 的模块化</strong>
                <ul>
                    <li><strong>原理：</strong> Vue 3 将全局 API 进行了模块化处理，需要按需引入，而不是像 Vue 2 那样挂载在全局的 Vue 对象上。</li>
                    <li><strong>优势：</strong> 减少了打包体积，提高了代码的可维护性。</li>
                    <li><strong>示例：</strong>
                        <pre data-index="5" class="new-version set-code-show prettyprint"
                            name="code"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token keyword">import</span> <span class="token punctuation">{<!-- --></span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code><div class="opt-box"><button class="btn-code-notes mdeditor " data-report-click="{&quot;spm&quot;:&quot;3001.10436&quot;,&quot;dest&quot;:&quot;https://trae.com.cn?utm_source=community&amp;utm_medium=csdn&amp;utm_campaign=daima&quot;,&quot;extra&quot;:{&quot;index&quot;:5,&quot;runIdx&quot;:-1}}">AI写代码</button><span class="code-language" data-language="javascript">javascript</span><div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="mdcp.signin(event)"></div><span class="code-run-btn" data-idx="5" data-language="javascript">运行</span></div><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li></ul></pre>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style>
.pre-numbering,
.opt-box {
    display: none;
}
</style>