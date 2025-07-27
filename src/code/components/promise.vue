<template>
    <div>
        <div data-show-ext="">
            <div class="cosd-markdown cos-space-mt-lg" id="1"><!--5044-->
                <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
                    <div class="marklang">
                        <p class="marklang-paragraph">‌<strong>前端开发中Promise详解</strong>‌<br>
                            Promise是JavaScript中处理‌<strong>异步操作</strong>‌的核心机制，用于管理异步任务的状态和结果，解决回调地狱问题，提升代码可读性与可维护性‌<span
                                disable-audio="true" disable-copy="true"><span rl-type="stop"><!--5196--><span
                                        class="cos-tooltip cosd-citation"><!--5199--><span
                                            class="cosd-citation-citationId">1<!--5200--></span><!--5199--></span><!--5197--><!--5201--><!--5201--><!--5196--></span><span
                                    rl-type="stop"><!--5203--><span class="cos-tooltip cosd-citation"><!--5206--><span
                                            class="cosd-citation-citationId">2<!--5207--></span><!--5206--></span><!--5204--><!--5208--><!--5208--><!--5203--></span></span>。
                        </p>
                        <hr>
                        <h3>一、Promise是什么？</h3>
                        <ol>
                            <li>
                                <p class="marklang-paragraph">‌<strong>核心概念</strong>‌：</p>
                                <ul>
                                    <li>Promise是一个‌<strong>对象</strong>‌，表示异步操作的最终完成或失败‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--5210--><span
                                                    class="cos-tooltip cosd-citation"><!--5213--><span
                                                        class="cosd-citation-citationId">1<!--5214--></span><!--5213--></span><!--5211--><!--5215--><!--5215--><!--5210--></span><span
                                                rl-type="stop"><!--5217--><span
                                                    class="cos-tooltip cosd-citation"><!--5220--><span
                                                        class="cosd-citation-citationId">2<!--5221--></span><!--5220--></span><!--5218--><!--5222--><!--5222--><!--5217--></span></span>。
                                    </li>
                                    <li>包含三种状态：
                                        <ul>
                                            <li>‌<strong>Pending</strong>‌：初始状态（等待中）‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--5224--><span
                                                            class="cos-tooltip cosd-citation"><!--5227--><span
                                                                class="cosd-citation-citationId">1<!--5228--></span><!--5227--></span><!--5225--><!--5229--><!--5229--><!--5224--></span><span
                                                        rl-type="stop"><!--5231--><span
                                                            class="cos-tooltip cosd-citation"><!--5234--><span
                                                                class="cosd-citation-citationId">3<!--5235--></span><!--5234--></span><!--5232--><!--5236--><!--5236--><!--5231--></span></span>。
                                            </li>
                                            <li>‌<strong>Fulfilled</strong>‌：操作成功完成（resolved）‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--5238--><span
                                                            class="cos-tooltip cosd-citation"><!--5241--><span
                                                                class="cosd-citation-citationId">1<!--5242--></span><!--5241--></span><!--5239--><!--5243--><!--5243--><!--5238--></span><span
                                                        rl-type="stop"><!--5245--><span
                                                            class="cos-tooltip cosd-citation"><!--5248--><span
                                                                class="cosd-citation-citationId">4<!--5249--></span><!--5248--></span><!--5246--><!--5250--><!--5250--><!--5245--></span></span>。
                                            </li>
                                            <li>‌<strong>Rejected</strong>‌：操作失败（rejected）‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--5252--><span
                                                            class="cos-tooltip cosd-citation"><!--5255--><span
                                                                class="cosd-citation-citationId">1<!--5256--></span><!--5255--></span><!--5253--><!--5257--><!--5257--><!--5252--></span><span
                                                        rl-type="stop"><!--5259--><span
                                                            class="cos-tooltip cosd-citation"><!--5262--><span
                                                                class="cosd-citation-citationId">4<!--5263--></span><!--5262--></span><!--5260--><!--5264--><!--5264--><!--5259--></span></span>。
                                            </li>
                                        </ul>
                                    </li>
                                    <li>状态一旦改变（从Pending到Fulfilled/Rejected）‌<strong>不可逆转</strong>‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--5266--><span
                                                    class="cos-tooltip cosd-citation"><!--5269--><span
                                                        class="cosd-citation-citationId">1<!--5270--></span><!--5269--></span><!--5267--><!--5271--><!--5271--><!--5266--></span></span>。
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>设计目的</strong>‌：</p>
                                <ul>
                                    <li>将异步操作‌<strong>标准化</strong>‌，统一处理成功/失败逻辑‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--5273--><span
                                                    class="cos-tooltip cosd-citation"><!--5276--><span
                                                        class="cosd-citation-citationId">2<!--5277--></span><!--5276--></span><!--5274--><!--5278--><!--5278--><!--5273--></span><span
                                                rl-type="stop"><!--5280--><span
                                                    class="cos-tooltip cosd-citation"><!--5283--><span
                                                        class="cosd-citation-citationId">4<!--5284--></span><!--5283--></span><!--5281--><!--5285--><!--5285--><!--5280--></span></span>。
                                    </li>
                                    <li>通过链式调用（<code>.then()</code>）取代嵌套回调，解决“回调地狱”‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--5287--><span
                                                    class="cos-tooltip cosd-citation"><!--5290--><span
                                                        class="cosd-citation-citationId">4<!--5291--></span><!--5290--></span><!--5288--><!--5292--><!--5292--><!--5287--></span><span
                                                rl-type="stop"><!--5294--><span
                                                    class="cos-tooltip cosd-citation"><!--5297--><span
                                                        class="cosd-citation-citationId">5<!--5298--></span><!--5297--></span><!--5295--><!--5299--><!--5299--><!--5294--></span></span>。
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
                                    <li><code>.then()</code>：处理成功状态，接收<code>resolve</code>传递的值‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6522--><span
                                                    class="cos-tooltip cosd-citation"><!--6525--><span
                                                        class="cosd-citation-citationId">1<!--6526--></span><!--6525--></span><!--6523--><!--6527--><!--6527--><!--6522--></span><span
                                                rl-type="stop"><!--6529--><span
                                                    class="cos-tooltip cosd-citation"><!--6532--><span
                                                        class="cosd-citation-citationId">3<!--6533--></span><!--6532--></span><!--6530--><!--6534--><!--6534--><!--6529--></span></span>。
                                    </li>
                                    <li><code>.catch()</code>：处理失败状态，捕获<code>reject</code>或异常‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6536--><span
                                                    class="cos-tooltip cosd-citation"><!--6539--><span
                                                        class="cosd-citation-citationId">1<!--6540--></span><!--6539--></span><!--6537--><!--6541--><!--6541--><!--6536--></span></span>。
                                    </li>
                                    <li><code>.finally()</code>：无论成功/失败都会执行（常用于清理操作）‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6543--><span
                                                    class="cos-tooltip cosd-citation"><!--6546--><span
                                                        class="cosd-citation-citationId">3<!--6547--></span><!--6546--></span><!--6544--><!--6548--><!--6548--><!--6543--></span></span>。
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
                                    每个<code>.then()</code>返回新Promise，实现顺序执行异步任务‌<span disable-audio="true"
                                        disable-copy="true"><span rl-type="stop"><!--6550--><span
                                                class="cos-tooltip cosd-citation"><!--6553--><span
                                                    class="cosd-citation-citationId">4<!--6554--></span><!--6553--></span><!--6551--><!--6555--><!--6555--><!--6550--></span><span
                                            rl-type="stop"><!--6557--><span
                                                class="cos-tooltip cosd-citation"><!--6560--><span
                                                    class="cosd-citation-citationId">5<!--6561--></span><!--6560--></span><!--6558--><!--6562--><!--6562--><!--6557--></span></span>：
                                </p>
                                <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-title function_">loadImage</span>(<span class="hljs-string">"img1.png"</span>)
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">loadImage</span>(<span class="hljs-string">"img2.png"</span>)) <span class="hljs-comment">// 前一张加载完再加载下一张</span>
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">startGame</span>());
</code></div></div></pre>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>并发处理</strong>‌</p>
                                <ul>
                                    <li><code>Promise.all()</code>：所有Promise成功才返回结果数组（任一失败则整体失败）‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6564--><span
                                                    class="cos-tooltip cosd-citation"><!--6567--><span
                                                        class="cosd-citation-citationId">1<!--6568--></span><!--6567--></span><!--6565--><!--6569--><!--6569--><!--6564--></span><span
                                                rl-type="stop"><!--6571--><span
                                                    class="cos-tooltip cosd-citation"><!--6574--><span
                                                        class="cosd-citation-citationId">2<!--6575--></span><!--6574--></span><!--6572--><!--6576--><!--6576--><!--6571--></span></span>。
                                    </li>
                                    <li><code>Promise.allSettled()</code>：等待所有Promise完成（无论成功/失败）‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6578--><span
                                                    class="cos-tooltip cosd-citation"><!--6581--><span
                                                        class="cosd-citation-citationId">3<!--6582--></span><!--6581--></span><!--6579--><!--6583--><!--6583--><!--6578--></span></span>。
                                    </li>
                                    <li><code>Promise.race()</code>：返回最快完成的Promise结果‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6585--><span
                                                    class="cos-tooltip cosd-citation"><!--6588--><span
                                                        class="cosd-citation-citationId">4<!--6589--></span><!--6588--></span><!--6586--><!--6590--><!--6590--><!--6585--></span></span>。
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
                                    <li>网络请求（如Fetch API、Axios）‌<span disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6592--><span
                                                    class="cos-tooltip cosd-citation"><!--6595--><span
                                                        class="cosd-citation-citationId">1<!--6596--></span><!--6595--></span><!--6593--><!--6597--><!--6597--><!--6592--></span><span
                                                rl-type="stop"><!--6599--><span
                                                    class="cos-tooltip cosd-citation"><!--6602--><span
                                                        class="cosd-citation-citationId">4<!--6603--></span><!--6602--></span><!--6600--><!--6604--><!--6604--><!--6599--></span></span>。
                                    </li>
                                    <li>文件读写（Node.js中<code>fs.promises</code>）‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6606--><span
                                                    class="cos-tooltip cosd-citation"><!--6609--><span
                                                        class="cosd-citation-citationId">5<!--6610--></span><!--6609--></span><!--6607--><!--6611--><!--6611--><!--6606--></span></span>。
                                    </li>
                                    <li>定时任务（<code>setTimeout</code>封装）‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6613--><span
                                                    class="cos-tooltip cosd-citation"><!--6616--><span
                                                        class="cosd-citation-citationId">5<!--6617--></span><!--6616--></span><!--6614--><!--6618--><!--6618--><!--6613--></span></span>。
                                    </li>
                                    <li>资源加载（图片、脚本异步加载）‌<span disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6620--><span
                                                    class="cos-tooltip cosd-citation"><!--6623--><span
                                                        class="cosd-citation-citationId">5<!--6624--></span><!--6623--></span><!--6621--><!--6625--><!--6625--><!--6620--></span></span>。
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p class="marklang-paragraph">‌<strong>典型需求</strong>‌：</p>
                                <ul>
                                    <li>‌<strong>顺序执行</strong>‌：多个异步任务需按顺序触发（如：登录后获取用户数据）‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6627--><span
                                                    class="cos-tooltip cosd-citation"><!--6630--><span
                                                        class="cosd-citation-citationId">5<!--6631--></span><!--6630--></span><!--6628--><!--6632--><!--6632--><!--6627--></span></span>。
                                    </li>
                                    <li>‌<strong>并行处理</strong>‌：同时发起多个独立请求，统一处理结果（如：首页聚合数据）‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6634--><span
                                                    class="cos-tooltip cosd-citation"><!--6637--><span
                                                        class="cosd-citation-citationId">1<!--6638--></span><!--6637--></span><!--6635--><!--6639--><!--6639--><!--6634--></span><span
                                                rl-type="stop"><!--6641--><span
                                                    class="cos-tooltip cosd-citation"><!--6644--><span
                                                        class="cosd-citation-citationId">2<!--6645--></span><!--6644--></span><!--6642--><!--6646--><!--6646--><!--6641--></span></span>。
                                    </li>
                                    <li>‌<strong>错误集中处理</strong>‌：通过<code>.catch()</code>统一捕获链式调用中的异常‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6648--><span
                                                    class="cos-tooltip cosd-citation"><!--6651--><span
                                                        class="cosd-citation-citationId">1<!--6652--></span><!--6651--></span><!--6649--><!--6653--><!--6653--><!--6648--></span><span
                                                rl-type="stop"><!--6655--><span
                                                    class="cos-tooltip cosd-citation"><!--6658--><span
                                                        class="cosd-citation-citationId">4<!--6659--></span><!--6658--></span><!--6656--><!--6660--><!--6660--><!--6655--></span></span>。
                                    </li>
                                    <li>‌<strong>状态依赖</strong>‌：任务B需等待任务A完成后再启动‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6662--><span
                                                    class="cos-tooltip cosd-citation"><!--6665--><span
                                                        class="cosd-citation-citationId">5<!--6666--></span><!--6665--></span><!--6663--><!--6667--><!--6667--><!--6662--></span></span>。
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
                                    <td>链式调用取代回调嵌套，逻辑更清晰‌<span disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--6669--><span
                                                    class="cos-tooltip cosd-citation"><!--6672--><span
                                                        class="cosd-citation-citationId">2<!--6673--></span><!--6672--></span><!--6670--><!--6674--><!--6674--><!--6669--></span><span
                                                rl-type="stop"><!--6676--><span
                                                    class="cos-tooltip cosd-citation"><!--6679--><span
                                                        class="cosd-citation-citationId">4<!--6680--></span><!--6679--></span><!--6677--><!--6681--><!--6681--><!--6676--></span></span>。
                                    </td>
                                </tr>
                                <tr>
                                    <td>‌<strong>错误穿透</strong>‌</td>
                                    <td>链式调用中可通过末尾<code>.catch()</code>捕获任意环节错误‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6683--><span
                                                    class="cos-tooltip cosd-citation"><!--6686--><span
                                                        class="cosd-citation-citationId">1<!--6687--></span><!--6686--></span><!--6684--><!--6688--><!--6688--><!--6683--></span></span>。
                                    </td>
                                </tr>
                                <tr>
                                    <td>‌<strong>状态可管理</strong>‌</td>
                                    <td>明确的状态机机制（Pending/Fulfilled/Rejected）‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6690--><span
                                                    class="cos-tooltip cosd-citation"><!--6693--><span
                                                        class="cosd-citation-citationId">1<!--6694--></span><!--6693--></span><!--6691--><!--6695--><!--6695--><!--6690--></span><span
                                                rl-type="stop"><!--6697--><span
                                                    class="cos-tooltip cosd-citation"><!--6700--><span
                                                        class="cosd-citation-citationId">3<!--6701--></span><!--6700--></span><!--6698--><!--6702--><!--6702--><!--6697--></span></span>。
                                    </td>
                                </tr>
                                <tr>
                                    <td>‌<strong>组合灵活性</strong>‌</td>
                                    <td>通过<code>all()</code>/<code>race()</code>实现复杂异步流程控制‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--6704--><span
                                                    class="cos-tooltip cosd-citation"><!--6707--><span
                                                        class="cosd-citation-citationId">1<!--6708--></span><!--6707--></span><!--6705--><!--6709--><!--6709--><!--6704--></span><span
                                                rl-type="stop"><!--6711--><span
                                                    class="cos-tooltip cosd-citation"><!--6714--><span
                                                        class="cosd-citation-citationId">2<!--6715--></span><!--6714--></span><!--6712--><!--6716--><!--6716--><!--6711--></span></span>。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div><!--5095-->
        </div><!--4534--><!--4539-->
    </div>
</template>