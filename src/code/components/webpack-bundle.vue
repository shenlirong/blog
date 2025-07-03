<template>
    <div class="markdown_1jK8o " style="">
        <p>在Webpack打包优化方面，你可以采取多种策略来提高应用的性能和加载速度。下面是一些常见的优化方案：</p>
        <h3>1. 使用生产模式</h3>
        <p>确保在生产环境中使用Webpack的生产模式（<code class="dqa-code-span">mode: 'production'</code>）。这会自动启用一些优化，比如代码压缩。</p>
        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// webpack.config.js</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">mode</span>: <span class="hljs-string">'production'</span>,</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-comment">// 其他配置...</span></div><div class="hljs-ln-line hljs-ln-code">};</div></div></div></code></pre>
        </code></pre>
        <h3>2. 代码分割（Code Splitting）</h3>
        <p>将代码分割成多个包，以便按需加载。</p>
        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// 使用动态import语法</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">function</span> <span class="hljs-title function_">loadComponent</span>(<span class="hljs-params"></span>) {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-keyword">return</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">'./path/to/component'</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">component</span> =&gt;</span> {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-comment">// 使用组件</span></div><div class="hljs-ln-line hljs-ln-code">  });</div><div class="hljs-ln-line hljs-ln-code">}</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// 或使用Webpack的魔法注释</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">import</span>(<span class="hljs-comment">/* webpackChunkName: "my-chunk-name" */</span> <span class="hljs-string">'./path/to/module'</span>).<span class="hljs-title function_">then</span>(...);</div></div></div></code></pre>
        </code></pre>
        <h3>3. Tree Shaking</h3>
        <p>确保启用了Tree Shaking，以去除未使用的代码。</p>
        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// webpack.config.js</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">mode</span>: <span class="hljs-string">'production'</span>, <span class="hljs-comment">// 确保是生产模式</span></div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">optimization</span>: {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">usedExports</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 启用Tree Shaking</span></div><div class="hljs-ln-line hljs-ln-code">  },</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-comment">// 其他配置...</span></div><div class="hljs-ln-line hljs-ln-code">};</div></div></div></code></pre>
        </code></pre>
        <h3>4. 压缩资源</h3>
        <p>使用<code class="dqa-code-span">TerserPlugin</code>来压缩JavaScript代码，使用<code
                class="dqa-code-span">css-minimizer-webpack-plugin</code>来压缩CSS。</p>
        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="10"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="11"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="12"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="13"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="14"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// webpack.config.js</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">const</span> <span class="hljs-title class_">TerserPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'terser-webpack-plugin'</span>);</div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">const</span> <span class="hljs-title class_">CssMinimizerPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'css-minimizer-webpack-plugin'</span>);</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">optimization</span>: {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">minimize</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 启用最小化</span></div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">minimizer</span>: [</div><div class="hljs-ln-line hljs-ln-code">      <span class="hljs-keyword">new</span> <span class="hljs-title class_">TerserPlugin</span>({ <span class="hljs-comment">/* 配置选项 */</span> }),</div><div class="hljs-ln-line hljs-ln-code">      <span class="hljs-keyword">new</span> <span class="hljs-title class_">CssMinimizerPlugin</span>(), <span class="hljs-comment">// 压缩CSS</span></div><div class="hljs-ln-line hljs-ln-code">    ],</div><div class="hljs-ln-line hljs-ln-code">  },</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-comment">// 其他配置...</span></div><div class="hljs-ln-line hljs-ln-code">};</div></div></div></code></pre>
        </code></pre>
        <h3>5. 缓存利用（Caching）</h3>
        <p>使用缓存来加速构建过程，例如通过<code class="dqa-code-span">cache-loader</code>或<code
                class="dqa-code-span">hard-source-webpack-plugin</code>。</p>
        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// 使用hard-source-webpack-plugin插件来缓存构建结果</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">const</span> <span class="hljs-title class_">HardSourceWebpackPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'hard-source-webpack-plugin'</span>);</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">plugins</span>: [</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-keyword">new</span> <span class="hljs-title class_">HardSourceWebpackPlugin</span>(), <span class="hljs-comment">// 添加到插件列表中</span></div><div class="hljs-ln-line hljs-ln-code">  ],</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-comment">// 其他配置...</span></div><div class="hljs-ln-line hljs-ln-code">};</div></div></div></code></pre>
        </code></pre>
        <h3>6. 优化资源加载（Asset Optimization）</h3>
        <p>使用<code class="dqa-code-span">image-webpack-loader</code>来优化图片，使用<code
                class="dqa-code-span">file-loader</code>和<code class="dqa-code-span">url-loader</code>来处理文件。</p>
        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="10"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="11"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="12"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="13"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="14"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// webpack.config.js</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">module</span>: {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">rules</span>: [</div><div class="hljs-ln-line hljs-ln-code">      {</div><div class="hljs-ln-line hljs-ln-code">        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.(png|svg|jpg|jpeg|gif)$/i</span>, <span class="hljs-comment">// 图片文件类型匹配规则</span></div><div class="hljs-ln-line hljs-ln-code">        <span class="hljs-attr">use</span>: [</div><div class="hljs-ln-line hljs-ln-code">          {</div><div class="hljs-ln-line hljs-ln-code">            <span class="hljs-attr">loader</span>: <span class="hljs-string">'file-loader'</span>, <span class="hljs-comment">// 使用file-loader或url-loader处理文件，根据需要选择合适的loader和配置。例如：url-loader?limit=10000&amp;name=img/[name].[ext] 可以将小于10KB的图片转换为Base64格式，减少HTTP请求。</span></div><div class="hljs-ln-line hljs-ln-code">          },</div><div class="hljs-ln-line hljs-ln-code">        ],</div><div class="hljs-ln-line hljs-ln-code">      },</div><div class="hljs-ln-line hljs-ln-code">      {</div><div class="hljs-ln-line hljs-ln-code">        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.css$/i</span>, <span class="hljs-comment">// CSS文件类型匹配规则，可以添加image-webpack-loader优化图片资源。例如：'postcss-loader', 'css-loader', 'image-webpack-loader'。image-webpack-loader可以用来优化图片资源，比如压缩图片等。具体配置取决于你的需求和使用的loader。例如：'postcss-loader', 'css-loader', 'image-webpack-loader'。image-webpack-loader可以用来优化图片资源，比如压缩图片等。具体配置取决于你的需求和使用的loader。例如：'postcss-loader', 'css-loader', 'image-webpack-loader'。image-webpack-loader可以用来优化图片资源，比如压缩图片等。具体配置取决于你的需求和使用的loader。例如：'postcss-loader', 'css-loader', 'image-webpack-loader'。image-webpack-loader可以用来优化图片资源，比如压缩图片等。具体配置取决于你的需求和使用的loader。例如：'postcss-loader', 'css-loader', 'image-webpack-loader'。image-webpack-loader可以用来优化图片资源，比如压缩图片等。具体配置取决于你的需求和使用的loader。例如：'postcss-loader', 'css-loader', 'image-webpack-loader</span></div></div></div></code></pre>
        </code></pre>
    </div>
    <div class="_content_1ml43_4"><!--3978-->
        <div>
            <div>
                <div data-module="char" class="title_6OfO5">
                    <span class="cu-line-clamp-default">
                        <h1>webpack打包的四个阶段</h1>
                    </span>
                </div>
            </div><!--3982-->


            <!--3983-->
        </div>
        <div class="item-container_62BMH"><!--3984-->
            <div class="content-box_1t3WR">

                <div>
                    <div class="markdown-wrapper_4CcPR" style="position: relative;">
                        <div class="dqa-markdown_5emil ">

                            <div class="markdown_1jK8o " style="">

                                <!--4368--><!--4369-->
                                <p>Webpack 是一个现代 JavaScript 应用程序的静态模块打包器（module bundler）。它通过处理你的应用程序中的模块，然后将它们打包成一个或多个
                                    bundle。Webpack 的打包过程大致可以分为四个主要阶段：初始化、编译、优化和输出。</p>
                                <h3>1. 初始化阶段（Initialization）</h3>
                                <p>在这个阶段，Webpack 开始读取配置文件（通常是 <code
                                        class="dqa-code-span">webpack.config.js</code>），解析项目的入口文件（entry point），并开始建立依赖图。
                                </p>
                                <ul>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">配置解析</strong>：Webpack
                                                读取 <code class="dqa-code-span">webpack.config.js</code>
                                                文件，解析其中的配置项，如入口文件（entry）、输出配置（output）、加载器（loaders）、插件（plugins）等。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">入口文件解析</strong>：根据配置的入口文件（通常是
                                                <code class="dqa-code-span">index.js</code> 或 <code
                                                    class="dqa-code-span">app.js</code>），Webpack 从这里开始解析和构建内部依赖图。
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <h3>2. 编译阶段（Compilation）</h3>
                                <p>在编译阶段，Webpack 使用加载器（loaders）对模块的代码进行转换。加载器可以将文件从不同的格式转换为 Webpack 能够处理的有效模块。</p>
                                <ul>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">加载器应用</strong>：根据配置的加载器规则，Webpack
                                                对模块的代码进行转换。例如，将 ES6 转换为 ES5，将 JSX 转换为 JavaScript 等。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">依赖解析</strong>：Webpack
                                                递归地解析每个模块的依赖，确保所有的依赖都被正确处理和打包。</p>
                                        </div>
                                    </li>
                                </ul>
                                <h3>3. 优化阶段（Optimization）</h3>
                                <p>在优化阶段，Webpack 对打包的输出进行优化，以提高应用的加载速度和性能。</p>
                                <ul>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">代码拆分</strong>：通过代码拆分（Code
                                                Splitting），可以将代码分割成多个包，按需加载。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong class="ai-core-answer wd-highlight c-fwb-big">压缩</strong>：使用
                                                UglifyJS 等工具压缩 JavaScript 文件，减少文件大小。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong class="ai-core-answer wd-highlight c-fwb-big">Tree
                                                    Shaking</strong>：移除 JavaScript 中未引用代码（dead code），减少最终包的大小。</p>
                                        </div>
                                    </li>
                                </ul>
                                <h3>4. 输出阶段（Output）</h3>
                                <p>最后阶段，Webpack 将编译和优化后的代码输出到指定的目录。</p>
                                <ul>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">生成资源</strong>：将处理后的模块组合成最终的
                                                bundle 文件或多个文件。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dqa-li-inner">
                                            <p><strong
                                                    class="ai-core-answer wd-highlight c-fwb-big">写入磁盘</strong>：将输出的文件写入到配置的输出目录中，通常是
                                                <code class="dqa-code-span">dist</code> 文件夹。
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <h3>总结</h3>
                                <p>Webpack 的这四个阶段是连续的，每个阶段都有其特定的任务和目标，共同协作完成项目的打包任务。了解这些阶段可以帮助你更好地理解 Webpack
                                    的工作原理，以及如何通过配置来优化你的构建过程。通过合理配置加载器、插件和优化选项，你可以显著提高你的应用的性能和开发效率。</p>
                            </div>
                        </div>

                    </div><!--4366-->
                </div>
            </div><!--3987-->
            <div
                data-ucfg="{&quot;ubcId&quot;:&quot;17132&quot;,&quot;config&quot;:{&quot;page&quot;:&quot;resultpage&quot;,&quot;from&quot;:&quot;search&quot;,&quot;queryParams&quot;:{}}}">
                <div>








                    <!--3989-->
                    <div class="
            interact-wrapper_7LRS0
            
            
         interact_5EKsc ">

                        <!--4378-->
                        <div style="--color: #5240FF;">
                            <div class="
                praise-wrapper_1a6Fa
                
                use-wise-style_4LzXj
                
            " rl-type="stop">
                                <div class="btn-wrapper_7r9wk ">
                                    <div data-module="zan" class="
                        btn-group_7iOL0
                        useful_31D7K
                        
                    ">


                                    </div>

                                </div>
                            </div>
                            <!--4394-->
                            <!--4396-->
                        </div>

                        <!--4404-->
                    </div><!--3990-->
                </div>
            </div><!--4365--><!--3993-->
        </div><!--3978-->
    </div>

    <h1>webpack配置项有哪些</h1>
    <div class="ai-entry"><!--5236-->
        <div>
            <div data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--5241-->
                        <div class="cosd-markdown-content "><!--5242-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>Webpack的核心配置项主要包括入口(entry)、输出(output)、模块(module)、插件(plugins)、开发服务器(devServer)和优化(optimization)等。</strong>‌</mark>
                                    这些配置项用于定义打包的起点、输出文件的规则、资源处理方式、扩展功能以及开发和生产环境的优化策略。</p>
                            </div><!--5242-->
                        </div>
                    </div>
                </div>
            </div><!--5237-->
        </div><!--5236--><!--5243-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--5248-->
                        <div class="cosd-markdown-content "><!--5249-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>核心配置项详解</strong>‌</mark>
                                </p>
                            </div><!--5249-->
                        </div>
                    </div>
                </div>
            </div><!--5244-->
        </div><!--5243--><!--5250-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--5255-->
                        <div class="cosd-markdown-content ">
                            <div class="marklang">
                                <ol>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>入口(entry)</strong>‌</mark>。<br>
                                        指定Webpack构建依赖图的起点，支持单入口（字符串）或多入口（对象）。例如：</li>
                                </ol>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-attr">entry</span>: <span class="hljs-string">'./src/index.js'</span> <span class="hljs-comment">// 单入口</span>
<span class="hljs-attr">entry</span>: { <span class="hljs-attr">app</span>: <span class="hljs-string">'./src/app.js'</span>, <span class="hljs-attr">vendor</span>: <span class="hljs-string">'./src/vendor.js'</span> } <span class="hljs-comment">// 多入口</span>
</code></div></div></pre>
                                <p class="marklang-paragraph">动态入口可通过<code>glob</code>等工具实现。‌‌<span disable-audio="true"
                                        disable-copy="true"><span rl-type="stop"><!--5258--><span
                                                class="cos-tooltip cosd-citation"><!--5261--><span
                                                    class="cosd-citation-citationId">1<!--5262--></span><!--5261--></span><!--5259--><!--5263--><!--5263--><!--5258--></span></span>
                                </p>
                                <ol start="2">
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>输出(output)</strong>‌</mark>。<br>
                                            定义打包文件的输出位置和命名规则，常用属性包括：</p>
                                        <ul>
                                            <li><code>path</code>: 输出目录（需绝对路径）。</li>
                                            <li><code>filename</code>:
                                                主输出文件名（支持<code>[name]</code>、<code>[hash]</code>等占位符）。</li>
                                            <li><code>chunkFilename</code>: 非入口文件的命名规则。‌‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--5265--><span
                                                            class="cos-tooltip cosd-citation"><!--5268--><span
                                                                class="cosd-citation-citationId">1<!--5269--></span><!--5268--></span><!--5266--><!--5270--><!--5270--><!--5265--></span></span>‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--5272--><span
                                                            class="cos-tooltip cosd-citation"><!--5275--><span
                                                                class="cosd-citation-citationId">2<!--5276--></span><!--5275--></span><!--5273--><!--5277--><!--5277--><!--5272--></span></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>模块(module)</strong>‌</mark>。<br>
                                            通过<code>rules</code>配置Loader，处理非JS资源（如CSS、图片）。例如：</p>
                                    </li>
                                </ol>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-attr">module</span>: {
<span class="hljs-attr">rules</span>: [
{ <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.css$/</span>, <span class="hljs-attr">use</span>: [<span class="hljs-string">'style-loader'</span>, <span class="hljs-string">'css-loader'</span>] },
{ <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.(png|jpg)$/</span>, <span class="hljs-attr">use</span>: [<span class="hljs-string">'file-loader'</span>] }
]
}
</code></div></div></pre>
                                <p class="marklang-paragraph">Loader执行顺序为从右到左。‌‌<span disable-audio="true"
                                        disable-copy="true"><span rl-type="stop"><!--5279--><span
                                                class="cos-tooltip cosd-citation"><!--5282--><span
                                                    class="cosd-citation-citationId">2<!--5283--></span><!--5282--></span><!--5280--><!--5284--><!--5284--><!--5279--></span></span>‌‌<span
                                        disable-audio="true" disable-copy="true"></span></p>
                                <ol start="4">
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>插件(plugins)</strong>‌</mark>。<br>
                                        扩展Webpack功能，如代码压缩、HTML生成等。需通过<code>new</code>实例化后添加到数组：</li>
                                </ol>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-attr">plugins</span>: [<span class="hljs-keyword">new</span> <span class="hljs-title class_">HtmlWebpackPlugin</span>({ <span class="hljs-attr">template</span>: <span class="hljs-string">'./src/index.html'</span> })]
</code></div></div></pre>
                                <p class="marklang-paragraph">。‌‌<span disable-audio="true" disable-copy="true"><span
                                            rl-type="stop"><!--5286--><span
                                                class="cos-tooltip cosd-citation"><!--5289--><span
                                                    class="cosd-citation-citationId">3<!--5290--></span><!--5289--></span><!--5287--><!--5291--><!--5291--><!--5286--></span></span>‌‌<span
                                        disable-audio="true" disable-copy="true"><span rl-type="stop"><!--5293--><span
                                                class="cos-tooltip cosd-citation"><!--5296--><span
                                                    class="cosd-citation-citationId">4<!--5297--></span><!--5296--></span><!--5294--><!--5298--><!--5298--><!--5293--></span></span>
                                </p>
                                <ol start="5">
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>开发服务器(devServer)</strong>‌</mark>。<br>
                                        配置本地开发服务，支持热更新(HMR)和静态资源服务：</li>
                                </ol>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-attr">devServer</span>: {
<span class="hljs-attr">contentBase</span>: <span class="hljs-string">'./dist'</span>,
<span class="hljs-attr">hot</span>: <span class="hljs-literal">true</span>
}
</code></div></div></pre>
                                <p class="marklang-paragraph">。‌‌<span disable-audio="true" disable-copy="true"><span
                                            rl-type="stop"><!--5300--><span
                                                class="cos-tooltip cosd-citation"><!--5303--><span
                                                    class="cosd-citation-citationId">4<!--5304--></span><!--5303--></span><!--5301--><!--5305--><!--5305--><!--5300--></span></span>
                                </p>
                                <ol start="6">
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>优化(optimization)</strong>‌</mark>。<br>
                                        生产环境优化策略，如代码分割、Tree Shaking：</li>
                                </ol>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-attr">optimization</span>: {
<span class="hljs-attr">splitChunks</span>: { <span class="hljs-attr">chunks</span>: <span class="hljs-string">'all'</span> },
<span class="hljs-attr">minimize</span>: <span class="hljs-literal">true</span>
}
</code></div></div></pre>
                                <p class="marklang-paragraph">。‌‌<span disable-audio="true" disable-copy="true"><span
                                            rl-type="stop"><!--5307--><span
                                                class="cos-tooltip cosd-citation"><!--5310--><span
                                                    class="cosd-citation-citationId">3<!--5311--></span><!--5310--></span><!--5308--><!--5312--><!--5312--><!--5307--></span></span>‌‌<span
                                        disable-audio="true" disable-copy="true"><span rl-type="stop"><!--5314--><span
                                                class="cos-tooltip cosd-citation"><!--5317--><span
                                                    class="cosd-citation-citationId">5<!--5318--></span><!--5317--></span><!--5315--><!--5319--><!--5319--><!--5314--></span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--5251-->
        </div><!--5250--><!--5320-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--5325-->
                        <div class="cosd-markdown-content "><!--5326-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>其他重要配置</strong>‌</mark>
                                </p>
                            </div><!--5326-->
                        </div>
                    </div>
                </div>
            </div><!--5321-->
        </div><!--5320--><!--5327-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--5332-->
                        <div class="cosd-markdown-content "><!--5333-->
                            <div class="marklang">
                                <ul>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>模式(mode)</strong>‌</mark>：指定<code>development</code>或<code>production</code>，影响内置优化策略。‌‌<span
                                            disable-audio="true" disable-copy="true"></span></li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>externals</strong>‌</mark>：排除某些依赖（如CDN引入的库）。‌‌<span
                                            disable-audio="true" disable-copy="true"></span></li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>resolve</strong>‌</mark>：配置模块解析规则（如别名、扩展名）。‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--5335--><span
                                                    class="cos-tooltip cosd-citation"><!--5338--><span
                                                        class="cosd-citation-citationId">3<!--5339--></span><!--5338--></span><!--5336--><!--5340--><!--5340--><!--5335--></span></span>
                                    </li>
                                </ul>
                            </div><!--5333-->
                        </div>
                    </div>
                </div>
            </div><!--5328-->
        </div><!--5327--><!--5235-->
    </div>

    <div class="content-box_1t3WR">
      <h1>webpack打包流程及原理</h1>
        <div>
            <div class="markdown-wrapper_4CcPR" style="position: relative;">
                <div class="dqa-markdown_5emil ">

                    <div class="markdown_1jK8o " style="">

                        <!--6385--><!--6386-->
                        <p>Webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。在 Webpack 的世界里，一切文件皆为模块，通过使用 Loader 和
                            Plugin，Webpack 能够将应用程序中的所有资源（例如 JavaScript、CSS、图片等）视为模块，并将它们打包成浏览器可以理解的静态资源。下面将详细介绍 Webpack
                            的打包流程和原理。</p>
                        <h3>1. 初始化项目</h3>
                        <p>首先，你需要初始化一个 Node.js 项目，并安装 Webpack。可以通过 npm 或 yarn 来安装：</p>
                        <pre><code class="language-bash"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="bash"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code">npm init -y</div><div class="hljs-ln-line hljs-ln-code">npm install --save-dev webpack webpack-cli</div></div></div></code></pre>
                        </code></pre>
                        <p>或者使用 yarn：</p>
                        <pre><code class="language-bash"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="bash"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code">yarn init -y</div><div class="hljs-ln-line hljs-ln-code">yarn add --dev webpack webpack-cli</div></div></div></code></pre>
                        </code></pre>
                        <h3>2. 配置 Webpack</h3>
                        <p>在项目根目录下创建一个名为 <code class="dqa-code-span">webpack.config.js</code> 的文件，这是 Webpack 的配置文件。例如：
                        </p>
                        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="10"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">mode</span>: <span class="hljs-string">'development'</span>, <span class="hljs-comment">// 或 'production'</span></div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">entry</span>: <span class="hljs-string">'./src/index.js'</span>, <span class="hljs-comment">// 入口文件</span></div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">output</span>: {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">filename</span>: <span class="hljs-string">'bundle.js'</span>, <span class="hljs-comment">// 输出文件名</span></div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">path</span>: path.<span class="hljs-title function_">resolve</span>(__dirname, <span class="hljs-string">'dist'</span>), <span class="hljs-comment">// 输出目录</span></div><div class="hljs-ln-line hljs-ln-code">  },</div><div class="hljs-ln-line hljs-ln-code">};</div></div></div></code></pre>
                        </code></pre>
                        <h3>3. 编写模块和加载器（Loaders）</h3>
                        <p>Webpack 本身只能理解 JavaScript 和 JSON 文件。Loader 让 Webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用。例如，要处理
                            CSS 文件，你可以使用 <code class="dqa-code-span">style-loader</code> 和 <code
                                class="dqa-code-span">css-loader</code>：</p>
                        <pre><code class="language-bash"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="bash"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code">npm install --save-dev style-loader css-loader</div></div></div></code></pre>
                        </code></pre>
                        <p>在 <code class="dqa-code-span">webpack.config.js</code> 中配置：</p>
                        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-attr">module</span>: {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">rules</span>: [</div><div class="hljs-ln-line hljs-ln-code">    {</div><div class="hljs-ln-line hljs-ln-code">      <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.css$/</span>, <span class="hljs-comment">// 正则表达式匹配 css 文件</span></div><div class="hljs-ln-line hljs-ln-code">      <span class="hljs-attr">use</span>: [<span class="hljs-string">'style-loader'</span>, <span class="hljs-string">'css-loader'</span>], <span class="hljs-comment">// 使用 style-loader 和 css-loader 处理这些文件</span></div><div class="hljs-ln-line hljs-ln-code">    },</div><div class="hljs-ln-line hljs-ln-code">  ],</div><div class="hljs-ln-line hljs-ln-code">},</div></div></div></code></pre>
                        </code></pre>
                        <h3>4. 使用插件（Plugins）</h3>
                        <p>插件用于执行更广泛的任务，如打包优化、资源管理和环境变量注入等。例如，使用 <code class="dqa-code-span">HtmlWebpackPlugin</code>
                            自动生成 HTML 文件：</p>
                        <pre><code class="language-bash"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="bash"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code">npm install --save-dev html-webpack-plugin</div></div></div></code></pre>
                        </code></pre>
                        <p>在 <code class="dqa-code-span">webpack.config.js</code> 中配置：</p>
                        <pre><code class="language-javascript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="javascript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">const</span> <span class="hljs-title class_">HtmlWebpackPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'html-webpack-plugin'</span>);</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-attr">plugins</span>: [</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-keyword">new</span> <span class="hljs-title class_">HtmlWebpackPlugin</span>({</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-attr">template</span>: <span class="hljs-string">'./src/index.html'</span> <span class="hljs-comment">// 基于模板生成 HTML 文件，并自动引入打包后的 JS 文件</span></div><div class="hljs-ln-line hljs-ln-code">  })</div><div class="hljs-ln-line hljs-ln-code">],</div></div></div></code></pre>
                        </code></pre>
                        <h3>5. 运行 Webpack</h3>
                        <p>在 <code class="dqa-code-span">package.json</code> 中添加一个脚本来运行 Webpack：</p>
                        <pre><code class="language-json"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="json"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-attr">"scripts"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span></div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">"build"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"webpack"</span> <span class="hljs-comment">// 或 "webpack --mode production" 在生产环境中使用优化设置</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-punctuation">}</span></div></div></div></code></pre>
                        </code></pre>
                        <p>然后，通过以下命令运行 Webpack：</p>
                        <pre><code class="language-bash"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="bash"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code">npm run build</div></div></div></code></pre>
                        </code></pre>
                        <p>或者使用 yarn：</p>
                        <pre><code class="language-bash"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="bash"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code">yarn build</div></div></div></code></pre>
                        </code></pre>
                        <h3>6. 打包流程详解：</h3>
                        <ol>
                            <li>
                                <div class="dqa-li-inner">
                                    <p><strong class="ai-core-answer wd-highlight c-fwb-big">初始化</strong>：Webpack
                                        根据配置文件读取项目设置。</p>
                                </div>
                            </li>
                            <li>
                                <div class="dqa-li-inner">
                                    <p><strong class="ai-core-answer wd-highlight c-fwb-big">编译</strong>：Webpack
                                        从入口点开始，递归地构建一个依赖图（dependency graph），其中包括应用程序中需要的每个模块。对于每个模块，Webpack 使用相应的 loader
                                        进行转换。</p>
                                </div>
                            </li>
                            <li>
                                <div class="dqa-li-inner">
                                    <p><strong
                                            class="ai-core-answer wd-highlight c-fwb-big">输出</strong>：处理完所有模块后，Webpack
                                        将所有模块打包成一个或多个 bundle。这些 bundle 可以包含代码和资源，并通过配置的 output
                                        设置输出到指定目录。插件可以在这一步进一步处理或优化生成的资源。</p>
                                </div>
                            </li>
                            <li>
                                <div class="dqa-li-inner">
                                    <p><strong class="ai-core-answer wd-highlight c-fwb-big">完成</strong>：最终，Webpack
                                        将生成的文件放置在指定的输出目录中，你可以通过 HTTP 服务器提供这些文件给浏览器。</p>
                                </div>
                            </li>
                        </ol>
                        <p>通过以上步骤，Webpack 能够有效地将各种资源打包成浏览器可执行的代码，极大地简化了前端开发的工作流程。</p>
                    </div>
                </div>

            </div><!--6383-->
        </div>
    </div>
</template>