<template><div><!-- more -->
<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>promise</span></a></h1>
<promise></promise><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>    console.log('A');</span></span>
<span class="line"><span>    await async2();</span></span>
<span class="line"><span>    console.log('B');</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function async2() {</span></span>
<span class="line"><span>    console.log('C');</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log('D');</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>console.log('E');</span></span>
<span class="line"><span>//输出顺序:D, A, C, E, B。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重要结论" tabindex="-1"><a class="header-anchor" href="#重要结论"><span>重要结论</span></a></h3>
<p><strong>1.​async 函数中的代码不全是异步的</strong>​：</p>
<p>只有 await 后面的代码会变成异步<br>
await 之前的代码是同步执行的</p>
<p><strong>2.​await 的本质​：</strong></p>
<p>await 是语法糖，底层基于 Promise<br>
它会将后续代码包装成 then() 回调<br>
这个回调会被放入微任务队列</p>
<p><strong>3.​执行优先级​：</strong></p>
<p>同步代码总是最先执行<br>
微任务在当前宏任务结束后执行<br>
宏任务在下一个事件循环中执行</p>
<h4 id="理解技巧" tabindex="-1"><a class="header-anchor" href="#理解技巧"><span>理解技巧</span></a></h4>
<p>可以把 await 看作是一个&quot;暂停并继续&quot;的指令：</p>
<p>1.执行到 await 时，暂停当前函数<br>
2.将后续代码放入&quot;待办事项&quot;（微任务队列）<br>
3.立即返回控制权给调用者<br>
4.当调用栈清空后，再回来执行&quot;待办事项&quot;</p>
<h2 id="async-await-与-promise-的核心关系" tabindex="-1"><a class="header-anchor" href="#async-await-与-promise-的核心关系"><span>async/await 与 Promise 的核心关系</span></a></h2>
<p><strong>1. async 函数总是返回 Promise</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function example() {</span></span>
<span class="line"><span>    return "Hello";</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等同于</span></span>
<span class="line"><span>function example() {</span></span>
<span class="line"><span>    return Promise.resolve("Hello");</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. await 操作符处理 Promise</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function fetchData() {</span></span>
<span class="line"><span>    // await 暂停执行直到 Promise 完成</span></span>
<span class="line"><span>    const data = await fetch('https://api.example.com/data');</span></span>
<span class="line"><span>    return data.json();</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.错误处理对比</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>// Promise 错误处理</span></span>
<span class="line"><span>fetchData()</span></span>
<span class="line"><span>    .then(data => console.log(data))</span></span>
<span class="line"><span>    .catch(error => console.error(error));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// async/await 错误处理</span></span>
<span class="line"><span>async function getData() {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        const data = await fetchData();</span></span>
<span class="line"><span>        console.log(data);</span></span>
<span class="line"><span>    } catch (error) {</span></span>
<span class="line"><span>        console.error(error);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="何时使用-promise-或-async-await" tabindex="-1"><a class="header-anchor" href="#何时使用-promise-或-async-await"><span>何时使用 Promise 或 async/await</span></a></h2>
<h3 id="使用-promise-的场景" tabindex="-1"><a class="header-anchor" href="#使用-promise-的场景"><span>使用 Promise 的场景：</span></a></h3>
<ol>
<li>多个并行异步操作：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Promise.all([fetchData1(), fetchData2()])</span></span>
<span class="line"><span>  .then(([data1, data2]) => {});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>更细粒度的控制：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>fetchData()</span></span>
<span class="line"><span>  .then(processData)</span></span>
<span class="line"><span>  .then(saveData)</span></span>
<span class="line"><span>  .catch(handleError);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>需要立即返回 Promise：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>function getData() {</span></span>
<span class="line"><span>  return fetchData().then(processData);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-async-await-的场景" tabindex="-1"><a class="header-anchor" href="#使用-async-await-的场景"><span>使用 async/await 的场景：</span></a></h3>
<ol>
<li>顺序执行异步操作：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function process() {</span></span>
<span class="line"><span>  const user = await getUser();</span></span>
<span class="line"><span>  const orders = await getOrders(user.id);</span></span>
<span class="line"><span>  return processOrders(orders);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>简化错误处理：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function safeFetch() {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    return await fetchData();</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    console.error(error);</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>让异步代码更像同步代码：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function init() {</span></span>
<span class="line"><span>  const config = await loadConfig();</span></span>
<span class="line"><span>  const data = await fetchData(config.url);</span></span>
<span class="line"><span>  render(data);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键优势对比" tabindex="-1"><a class="header-anchor" href="#关键优势对比"><span>关键优势对比</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>Promise</th>
<th>async/await</th>
</tr>
</thead>
<tbody>
<tr>
<td>可读性</td>
<td>链式调用清晰但可能嵌套</td>
<td>类似同步代码，更易理解</td>
</tr>
<tr>
<td>错误处理</td>
<td>.catch() 方法</td>
<td>try/catch 同步语法</td>
</tr>
<tr>
<td>调试</td>
<td>较难追踪调用栈</td>
<td>类似同步代码，调试更简单</td>
</tr>
<tr>
<td>流程控制</td>
<td>需要手动链接</td>
<td>自动暂停和恢复执行</td>
</tr>
<tr>
<td>返回值</td>
<td>总是返回 Promise</td>
<td>总是返回 Promise</td>
</tr>
</tbody>
</table>
<h2 id="最佳实践建议" tabindex="-1"><a class="header-anchor" href="#最佳实践建议"><span>最佳实践建议</span></a></h2>
<p><strong>1. 混合使用</strong>：在 async 函数内部结合使用 Promise.all 处理并行操作</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>async function getDashboardData() {</span></span>
<span class="line"><span>  const [user, orders, products] = await Promise.all([</span></span>
<span class="line"><span>    getUser(),</span></span>
<span class="line"><span>    getOrders(),</span></span>
<span class="line"><span>    getProducts()</span></span>
<span class="line"><span>  ]);</span></span>
<span class="line"><span>  return { user, orders, products };</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 避免过度嵌套</strong>：async/await 可以解决 Promise 的深层嵌套问题<br>
<strong>3. 错误处理统一</strong>：在顶层使用 try/catch 或在 async 函数返回的 Promise 上使用 .catch()<br>
<strong>4. 理解执行顺序</strong>：await 会暂停当前 async 函数的执行，但不会阻塞主线程</p>
<p><RouteLink to="/code/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3/async-await.html">点击这里查看子文档(async/await)</RouteLink></p>
</div></template>


