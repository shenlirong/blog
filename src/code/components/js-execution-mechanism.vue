<template>
    <div class="ai-entry"><!--793-->
        <div>
            <div data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--798-->
                        <div class="cosd-markdown-content "><!--799-->
                            <div class="marklang">
                                <p class="marklang-paragraph">
                                    JavaScript执行机制基于单线程事件循环模型，通过同步任务优先执行、宏任务与微任务分层处理的方式实现异步非阻塞操作。</p>
                            </div><!--799-->
                        </div>
                    </div>
                </div>
            </div><!--794-->
        </div><!--793--><!--800-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--805-->
                        <div class="cosd-markdown-content "><!--806-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>单线程架构与设计背景</strong>‌</mark>
                                </p>
                            </div><!--806-->
                        </div>
                    </div>
                </div>
            </div><!--801-->
        </div><!--800--><!--807-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--812-->
                        <div class="cosd-markdown-content "><!--813-->
                            <div class="marklang">
                                <p class="marklang-paragraph">
                                    JavaScript采用单线程模型主要基于历史原因和DOM操作安全性考虑。该设计避免多线程并发修改DOM导致渲染冲突，但也带来了同步任务阻塞风险。为解决此矛盾，浏览器实现了事件循环机制。‌‌
                                    </p>
                                <p class="marklang-paragraph">以下是关于JavaScript执行机制的详细视频：</p>
                            </div><!--813-->
                        </div>
                    </div>
                </div>
            </div><!--808-->
        </div><!--807--><!--828-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--833-->
                        <div class="cosd-markdown-content "><!--834-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>事件循环核心流程</strong>‌</mark>
                                </p>
                            </div><!--834-->
                        </div>
                    </div>
                </div>
            </div><!--829-->
        </div><!--828--><!--835-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--840-->
                        <div class="cosd-markdown-content ">
                            <div class="marklang">
                                <ol>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>执行栈处理</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>同步任务立即进入主线程执行栈顺序执行。</li>
                                            <li>遇到异步API（如setTimeout、Promise）时会将回调函数注册到对应模块。</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>任务队列机制</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>宏任务队列：包含script整体代码、setTimeout、I/O等。</li>
                                            <li>微任务队列：包含Promise.then、MutationObserver等。</li>
                                            <li>执行栈清空后，优先处理所有微任务队列中的回调。</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>循环触发条件</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>每完成一个宏任务都会立即清空微任务队列。</li>
                                            <li>宏任务按队列顺序逐个执行，典型执行顺序为：</li>
                                        </ul>
                                    </li>
                                </ol>
                                <pre><div class="code-header"><span rl-type="stop">text</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div></div><div class="code-right"><code>同步任务 → 微任务 → 宏任务 → (重复)
</code></div></div></pre>
                                <p class="marklang-paragraph">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--836-->
        </div><!--835--><!--856-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--861-->
                        <div class="cosd-markdown-content "><!--862-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>异步任务分类示例</strong>‌</mark>
                                </p>
                            </div><!--862-->
                        </div>
                    </div>
                </div>
            </div><!--857-->
        </div><!--856--><!--863-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--868-->
                        <div class="cosd-markdown-content ">
                            <div class="marklang">
                                <ol>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>宏任务典型场景</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>setTimeout/setInterval定时器。</li>
                                            <li>I/O操作（文件读写、网络请求）。</li>
                                            <li>UI渲染（浏览器环境）。</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>微任务优先级特征</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>Promise.then/catch/finally。</li>
                                            <li>queueMicrotask API。</li>
                                            <li>MutationObserver监听变更。</li>
                                        </ul>
                                    </li>
                                </ol>
                                <p class="marklang-paragraph">微任务总在下一个宏任务前执行完毕，如：</p>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'宏任务'</span>), <span class="hljs-number">0</span>);
<span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'微任务'</span>));
<span class="hljs-comment">// 输出顺序：微任务 → 宏任务</span>
</code></div></div></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--864-->
        </div><!--863--><!--792-->
    </div>
    <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
        <div class="marklang">
            <p class="marklang-paragraph">事件循环（Event Loop）是 JavaScript 运行时环境（如浏览器和
                Node.js）的核心机制，用于处理异步操作、回调函数和事件。它的核心作用是‌<strong>在单线程中实现非阻塞的并发执行</strong>‌。以下是其核心原理和流程：</p>
            <hr>
            <h3>‌<strong>2. 事件循环的核心组成</strong>‌</h3>
            <ol>
                <li>
                    <p class="marklang-paragraph">‌<strong>调用栈（Call Stack）</strong>‌</p>
                    <ul>
                        <li>存储同步任务的执行上下文（函数调用），后进先出（LIFO）。</li>
                        <li>当函数执行时被压入栈顶，执行完毕后被弹出。</li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>任务队列（Task Queues）</strong>‌</p>
                    <ul>
                        <li>‌<strong>宏任务队列（Macro Task Queue）</strong>‌：<br>
                            包含 <code>setTimeout</code>、<code>setInterval</code>、DOM 事件回调、I/O 操作等。</li>
                        <li>‌<strong>微任务队列（Micro Task Queue）</strong>‌：<br>
                            包含 <code>Promise.then()</code>、<code>MutationObserver</code>、<code>queueMicrotask()</code>
                            等。</li>
                    </ul>
                </li>
            </ol>
            <hr>
            <h3>‌<strong>3.事件循环的工作流程</strong>‌</h3>
            <ol>
                <li>
                    <p class="marklang-paragraph">‌<strong>执行同步代码</strong>‌</p>
                    <ul>
                        <li>所有同步任务直接在调用栈中执行，直到栈为空。</li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>处理微任务队列</strong>‌</p>
                    <ul>
                        <li>调用栈清空后，立即按顺序执行‌<strong>所有微任务</strong>‌（直到微任务队列为空）。</li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>渲染更新（浏览器）</strong>‌</p>
                    <ul>
                        <li>浏览器环境下，可能执行 UI 渲染（重排、重绘）。</li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>处理宏任务队列</strong>‌</p>
                    <ul>
                        <li>从宏任务队列中取出‌<strong>第一个任务</strong>‌（如 <code>setTimeout</code> 回调）推入调用栈执行。</li>
                        <li>重复步骤 1→4（每个宏任务结束后都清空微任务队列）。</li>
                    </ul>
                </li>
            </ol>
            <pre><div class="code-header"><span rl-type="stop">mermaid</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div></div><div class="code-right"><code class="hljs language-mermaid">graph LR
    A[执行同步代码] --&gt; B[调用栈为空？]
    B -- 是 --&gt; C[执行所有微任务]
    C --&gt; D[浏览器：UI渲染]
    D --&gt; E[取一个宏任务执行]
    E --&gt; B
</code></div></div></pre>
            <hr>
            <h3>‌<strong>4.关键规则</strong>‌</h3>
            <ol>
                <li>
                    <p class="marklang-paragraph">‌<strong>微任务优先于宏任务</strong>‌</p>
                    <ul>
                        <li>每次调用栈清空后，必须清空‌<strong>所有微任务</strong>‌才会执行下一个宏任务。</li>
                        <li>示例：
                            <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Start"</span>); <span class="hljs-comment">// 同步</span>
<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Timeout"</span>), <span class="hljs-number">0</span>); <span class="hljs-comment">// 宏任务</span>
<span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Promise"</span>)); <span class="hljs-comment">// 微任务</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"End"</span>); <span class="hljs-comment">// 同步</span>
</code></div></div></pre>
                            输出顺序：
                            <pre><div class="code-header"><span rl-type="stop">text</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div></div><div class="code-right"><code>Start → End → Promise → Timeout
</code></div></div></pre>
                        </li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>微任务嵌套会阻塞渲染</strong>‌</p>
                    <ul>
                        <li>微任务执行期间新增的微任务会‌<strong>继续加入当前队列</strong>‌，直到队列为空。</li>
                        <li>过多的微任务可能延迟 UI 渲染（如页面卡顿）。</li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>宏任务的来源决定优先级</strong>‌</p>
                    <ul>
                        <li>浏览器中，用户交互事件（如点击）优先级高于网络请求回调。</li>
                        <li>Node.js 中通过 <code>setImmediate</code> 和 <code>process.nextTick</code> 区分优先级。</li>
                    </ul>
                </li>
            </ol>
            <hr>
            <h3>‌<strong>5.实际场景示例</strong>‌</h3>
            <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div><div data-line-number="7" class="code-number"></div><div data-line-number="8" class="code-number"></div><div data-line-number="9" class="code-number"></div><div data-line-number="10" class="code-number"></div><div data-line-number="11" class="code-number"></div><div data-line-number="12" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"宏任务1"</span>), <span class="hljs-number">0</span>); 

<span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>()
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"微任务1"</span>);
    <span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"嵌套微任务"</span>));
  });

<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"宏任务2"</span>), <span class="hljs-number">0</span>);

<span class="hljs-comment">// 输出顺序：</span>
<span class="hljs-comment">// 同步代码结束 → 微任务1 → 嵌套微任务 → 宏任务1 → 宏任务2</span>
</code></div></div></pre>
            <hr>
            <h3>‌<strong>6.为什么需要事件循环？</strong>‌</h3>
            <ul>
                <li>‌<strong>JavaScript 是单线程</strong>‌：避免多线程并发冲突（如 DOM 操作竞争）。</li>
                <li>‌<strong>非阻塞 I/O</strong>‌：异步操作（网络请求、文件读写）交给底层系统处理，完成后通过回调通知，不阻塞主线程。</li>
            </ul>
            <hr>
            <h3>‌<strong>浏览器 vs Node.js 事件循环</strong>‌</h3>
            <table>
                <thead>
                    <tr>
                        <th>‌<strong>特性</strong>‌</th>
                        <th>‌<strong>浏览器</strong>‌</th>
                        <th>‌<strong>Node.js</strong>‌</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>‌<strong>微任务来源</strong>‌</td>
                        <td><code>Promise</code>、<code>MutationObserver</code></td>
                        <td><code>Promise</code>、<code>process.nextTick</code></td>
                    </tr>
                    <tr>
                        <td>‌<strong>宏任务阶段</strong>‌</td>
                        <td>单队列</td>
                        <td>多阶段（定时器、I/O、setImmediate等）</td>
                    </tr>
                    <tr>
                        <td>‌<strong>渲染时机</strong>‌</td>
                        <td>微任务后、宏任务前</td>
                        <td>无渲染环节</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <h3>‌<strong>总结</strong>‌</h3>
            <ul>
                <li>事件循环是 JavaScript 异步编程的基石，通过 ‌<strong>“同步任务 → 微任务 → 渲染 → 宏任务”</strong>‌ 的循环实现高效非阻塞。</li>
                <li>掌握微任务与宏任务的优先级，避免因任务堆积导致的性能问题。</li>
                <li>在编写异步代码时，需注意嵌套微任务可能导致的延迟渲染问题。</li>
            </ul>
        </div>
    </div>
    <h3>7.事件循环机制</h3>
    <div class="ai-entry"><!--2159-->
        <div>
            <div data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2164-->
                        <div class="cosd-markdown-content "><!--2165-->
                            <div class="marklang">
                                <p class="marklang-paragraph">事件循环（Event
                                    Loop）是JavaScript运行时用于协调异步任务执行的核心机制，通过任务队列和循环调度实现非阻塞的异步编程。</p>
                            </div><!--2165-->
                        </div>
                    </div>
                </div>
            </div><!--2160-->
        </div><!--2159--><!--2166-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2171-->
                        <div class="cosd-markdown-content "><!--2172-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>事件循环的定义与作用</strong>‌</mark>
                                </p>
                            </div><!--2172-->
                        </div>
                    </div>
                </div>
            </div><!--2167-->
        </div><!--2166--><!--2173-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2178-->
                        <div class="cosd-markdown-content "><!--2179-->
                            <div class="marklang">
                                <p class="marklang-paragraph">
                                    事件循环是JavaScript单线程模型下处理异步操作的关键机制，它通过持续检查调用栈和任务队列的状态，确保异步任务（如定时器、网络请求等）在不阻塞主线程的情况下有序执行。其核心目标是解决单线程语言中同步任务与异步任务的调度问题，提升程序响应效率。‌
                                </p>
                            </div><!--2179-->
                        </div>
                    </div>
                </div>
            </div><!--2174-->
        </div><!--2173--><!--2194-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2199-->
                        <div class="cosd-markdown-content "><!--2200-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>核心组成模块</strong>‌</mark>
                                </p>
                            </div><!--2200-->
                        </div>
                    </div>
                </div>
            </div><!--2195-->
        </div><!--2194--><!--2201-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2206-->
                        <div class="cosd-markdown-content "><!--2207-->
                            <div class="marklang">
                                <ol>
                                    <li><mark class="flexible-marker flexible-marker-default">‌<strong>调用栈（Call
                                                Stack）</strong>‌</mark>：执行同步代码的后进先出（LIFO）结构，当前任务执行完毕后才会处理下一个任务。
                                    </li>
                                    <li><mark class="flexible-marker flexible-marker-default">‌<strong>任务队列（Task
                                                Queue）</strong>‌</mark>：分为宏任务队列（Macrotask Queue）和微任务队列（Microtask Queue）：
                                        <ul>
                                            <li>宏任务：包括<code>setTimeout</code>、<code>setInterval</code>、I/O操作等，每次事件循环处理一个宏任务。‌
                                            </li>
                                            <li>微任务：如<code>Promise.then</code>、<code>MutationObserver</code>回调，优先级高于宏任务，需在当前宏任务执行后立即清空。
                                            </li>
                                        </ul>
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>事件循环流程</strong>‌</mark>：
                                        <ul>
                                            <li>执行同步代码直至调用栈为空。</li>
                                            <li>检查并执行所有微任务队列中的任务。</li>
                                            <li>取出一个宏任务执行，重复上述流程。
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div><!--2207-->
                        </div>
                    </div>
                </div>
            </div><!--2202-->
        </div><!--2201--><!--2264-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2269-->
                        <div class="cosd-markdown-content "><!--2270-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>浏览器与Node.js的差异</strong>‌</mark>
                                </p>
                            </div><!--2270-->
                        </div>
                    </div>
                </div>
            </div><!--2265-->
        </div><!--2264--><!--2271-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--2276-->
                        <div class="cosd-markdown-content "><!--2277-->
                            <div class="marklang">
                                <p class="marklang-paragraph">
                                    虽然事件循环机制在浏览器和Node.js中均存在，但Node.js额外引入了<code>process.nextTick</code>和<code>setImmediate</code>等特有任务类型，且任务队列的划分更复杂。‌
                                      
                                </p>
                            </div><!--2277-->
                        </div>
                    </div>
                </div>
            </div><!--2272-->
        </div><!--2271--><!--2158-->
    </div>
</template>
<style scoped>
.code-header {
    display: none;
}
strong{
    background-color: white;
}
</style>