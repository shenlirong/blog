<template>
    <div>
        <div data-show-ext="">
            <div class="cosd-markdown cos-space-mt-lg" id="1"><!--5044-->
                <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
                    <div class="marklang">
                        <p class="marklang-paragraph">‌<strong>前端开发中Promise详解</strong>‌<br>
                            Promise是JavaScript中处理‌<strong>异步操作</strong>‌的核心机制，用于管理异步任务的状态和结果，解决回调地狱问题，提升代码可读性与可维护性
                        </p>
                        <hr>
                        <h3>一、Promise是什么？</h3>
                        <ol>
                            <li>
                                <p class="marklang-paragraph">‌<strong>核心概念</strong>‌：</p>
                                <ul>
                                    <li>Promise是一个‌<strong>对象</strong>‌，表示异步操作的最终完成或失败
                                    </li>
                                    <li>包含三种状态：
                                        <ul>
                                            <li>‌<strong>Pending</strong>‌：初始状态（等待中）
                                            </li>
                                            <li>‌<strong>Fulfilled</strong>‌：操作成功完成（resolved）
                                            </li>
                                            <li>‌<strong>Rejected</strong>‌：操作失败（rejected）
                                            </li>
                                        </ul>
                                    </li>
                                    <li>状态一旦改变（从Pending到Fulfilled/Rejected）‌<strong>不可逆转</strong>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>设计目的</strong>‌：</p>
                                <ul>
                                    <li>将异步操作‌<strong>标准化</strong>‌，统一处理成功/失败逻辑
                                    </li>
                                    <li>通过链式调用（<code>.then()</code>）取代嵌套回调，解决“回调地狱”
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div><!--5041-->
        </div>
        <div data-show-ext="">
            <div class="cosd-markdown cos-space-mt-lg" id="3"><!--5098-->
                <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
                    <div class="marklang">
                        <hr>
                        <h3>二、怎么用Promise？</h3>
                        <h4>▶ 基本用法</h4>
                        <ol>
                            <li>
                                <p class="marklang-paragraph">‌<strong>创建Promise</strong>‌<br>
                                    通过构造函数传入执行器函数（<code>resolve</code>/<code>reject</code>）：</p>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-keyword">const</span> promise = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-comment">/* 成功条件 */</span>) <span class="hljs-title function_">resolve</span>(<span class="hljs-string">"操作成功"</span>); 
    <span class="hljs-keyword">else</span> <span class="hljs-title function_">reject</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">"操作失败"</span>));
  }, <span class="hljs-number">1000</span>);
});
</code></div></div></pre>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>处理结果</strong>‌</p>
                                <ul>
                                    <li><code>.then()</code>：处理成功状态，接收<code>resolve</code>传递的值
                                    </li>
                                    <li><code>.catch()</code>：处理失败状态，捕获<code>reject</code>或异常
                                    </li>
                                    <li><code>.finally()</code>：无论成功/失败都会执行（常用于清理操作）‌
                                    </li>
                                </ul>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript">promise
  .<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result)) <span class="hljs-comment">// 输出"操作成功"</span>
  .<span class="hljs-title function_">catch</span>(<span class="hljs-function"><span class="hljs-params">error</span> =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(error))
  .<span class="hljs-title function_">finally</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"执行完毕"</span>));
</code></div></div></pre>
                            </li>
                        </ol>
                        <h4>▶ 高级方法</h4>
                        <ol>
                            <li>
                                <p class="marklang-paragraph">‌<strong>链式调用</strong>‌<br>
                                    每个<code>.then()</code>返回新Promise，实现顺序执行异步任务：
                                </p>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-title function_">loadImage</span>(<span class="hljs-string">"img1.png"</span>)
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">loadImage</span>(<span class="hljs-string">"img2.png"</span>)) <span class="hljs-comment">// 前一张加载完再加载下一张</span>
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">startGame</span>());
</code></div></div></pre>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>并发处理</strong>‌</p>
                                <ul>
                                    <li><code>Promise.all()</code>：所有Promise成功才返回结果数组（任一失败则整体失败）‌</li>
                                    <li><code>Promise.allSettled()</code>：等待所有Promise完成（无论成功/失败）‌
                                    </li>
                                    <li><code>Promise.race()</code>：返回最快完成的Promise结果
                                    </li>
                                </ul>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-comment">// 同时加载多张图片并统一处理</span>
<span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">all</span>([<span class="hljs-title function_">loadImg</span>(<span class="hljs-string">"a.png"</span>), <span class="hljs-title function_">loadImg</span>(<span class="hljs-string">"b.png"</span>)])
  .<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">images</span> =&gt;</span> <span class="hljs-title function_">renderAll</span>(images));
</code></div></div></pre>
                            </li>
                        </ol>
                        <hr>
                        <h3>三、什么时候用Promise？</h3>
                        <ol>
                            <li>
                                <p class="marklang-paragraph">‌<strong>异步操作场景</strong>‌：</p>
                                <ul>
                                    <li>网络请求（如Fetch API、Axios）
                                    </li>
                                    <li>文件读写（Node.js中<code>fs.promises</code>）
                                    </li>
                                    <li>定时任务（<code>setTimeout</code>封装）</li>
                                    <li>资源加载（图片、脚本异步加载）
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>典型需求</strong>‌：</p>
                                <ul>
                                    <li>‌<strong>顺序执行</strong>‌：多个异步任务需按顺序触发（如：登录后获取用户数据）‌
                                    </li>
                                    <li>‌<strong>并行处理</strong>‌：同时发起多个独立请求，统一处理结果（如：首页聚合数据）
                                    </li>
                                    <li>‌<strong>错误集中处理</strong>‌：通过<code>.catch()</code>统一捕获链式调用中的异常
                                    </li>
                                    <li>‌<strong>状态依赖</strong>‌：任务B需等待任务A完成后再启动
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <hr>
                        <h3>四、Promise的优势</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>特性</th>
                                    <th>说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>‌<strong>代码可读性</strong>‌</td>
                                    <td>链式调用取代回调嵌套，逻辑更清晰
                                    </td>
                                </tr>
                                <tr>
                                    <td>‌<strong>错误穿透</strong>‌</td>
                                    <td>链式调用中可通过末尾<code>.catch()</code>捕获任意环节错误
                                    </td>
                                </tr>
                                <tr>
                                    <td>‌<strong>状态可管理</strong>‌</td>
                                    <td>明确的状态机机制（Pending/Fulfilled/Rejected）
                                    </td>
                                </tr>
                                <tr>
                                    <td>‌<strong>组合灵活性</strong>‌</td>
                                    <td>通过<code>all()</code>/<code>race()</code>实现复杂异步流程控制
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>