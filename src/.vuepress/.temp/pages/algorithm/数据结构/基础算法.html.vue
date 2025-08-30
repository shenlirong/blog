<template><div><!-- more -->
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>此处存放的一些常用基础算法、数据结构。</p>
</div>
<h2 id="一、哈希" tabindex="-1"><a class="header-anchor" href="#一、哈希"><span>一、哈希</span></a></h2>
<h3 id="核心思想-将任意数据变成唯一的-数字指纹" tabindex="-1"><a class="header-anchor" href="#核心思想-将任意数据变成唯一的-数字指纹"><span>核心思想：将任意数据变成唯一的“数字指纹”</span></a></h3>
<p>想象一下，你有一本很厚的书（数据），然后你用一个神奇的机器（哈希函数）把它压缩成一个简短的、唯一的摘要或指纹。这个指纹就是哈希值。<br>
这个过程的几个关键特点是：</p>
<ol>
<li>固定长度：无论你的原始数据是一本百科全书、一部电影，还是仅仅一个字母“a”，通过同一个哈希函数计算出的哈希值长度都是固定的。例如，SHA-256算法生成的哈希值永远是256位（即64个十六进制字符）。</li>
<li>确定性：相同的输入数据，使用同一个哈希函数，永远会得到完全相同的哈希值。</li>
<li>快速计算：从原始数据计算出哈希值的过程非常快。</li>
<li>不可逆性（单向性）：这是哈希最关键的特性之一。你无法通过这个“指纹”（哈希值）反推出原始的“书”（数据）。这就像一个单向街道，只能从数据到哈希值，不能反过来。</li>
<li>抗碰撞性：几乎不可能找到两个不同的原始数据，它们会计算出完全相同的哈希值。也就是说，每个数据的哈希值几乎都是独一无二的。</li>
</ol>
<h3 id="一个简单的例子" tabindex="-1"><a class="header-anchor" href="#一个简单的例子"><span>一个简单的例子</span></a></h3>
<p>让我们用一个非常简单的哈希函数来演示（这只是一个概念演示，并非实际使用的安全哈希函数）：<br>
假设我们的哈希函数是：取每个字符的ASCII码，然后相加。</p>
<ul>
<li>输入数据：&quot;Hi&quot;
<ul>
<li>H的ASCII是72， i的ASCII是105。</li>
<li>哈希值 = 72 + 105 = 177</li>
</ul>
</li>
<li>输入数据：&quot;Hello&quot;
<ul>
<li>H(72) + e(101) + l(108) + l(108) + o(111) = 72+101+108+108+111 = 500<br>
你看，不同的输入得到了不同的输出。但你无法从“500”这个数字反推出原始单词是“Hello”，因为“Catt”或其他组合也可能加起来等于500（这就发生了“碰撞”，而好的哈希函数会极力避免这种情况）。</li>
</ul>
</li>
</ul>
<h3 id="实际应用中常见的哈希算法" tabindex="-1"><a class="header-anchor" href="#实际应用中常见的哈希算法"><span>实际应用中常见的哈希算法</span></a></h3>
<ul>
<li>MD5： 曾经很流行，但现在已被发现存在安全漏洞，不再用于加密安全场景，但仍可用于校验文件完整性。</li>
<li>SHA-1： 同样，现在被认为是不安全的。</li>
<li>SHA-256： 属于SHA-2家族，是目前最广泛使用的安全哈希算法之一（比特币就使用它）。</li>
<li>SHA-3： 更新的标准，提供了另一种设计思路。</li>
</ul>
<h3 id="哈希的用途-为什么它如此重要" tabindex="-1"><a class="header-anchor" href="#哈希的用途-为什么它如此重要"><span>哈希的用途（为什么它如此重要？）</span></a></h3>
<ol>
<li>密码存储
<ul>
<li>这是你最常遇到的用途。安全的网站永远不会以明文存储你的密码。当你注册时，网站会用哈希函数处理你的密码，然后只存储这个哈希值。</li>
<li>当你登录时，网站再次将你输入的密码进行哈希运算，然后比较这个哈希值和它存储的哈希值是否一致。如果一致，密码就正确。</li>
<li>这样做的好处是：即使数据库泄露，黑客也只能看到一堆哈希值，而无法得知用户的原始密码（得益于哈希的不可逆性）。</li>
</ul>
</li>
<li>数据完整性校验（文件验证）
<ul>
<li>当你从网上下载一个大型文件（如操作系统镜像、软件安装包）时，官方网站通常会提供一个哈希值（如SHA-256 Checksum）。</li>
<li>下载完成后，你可以用自己的工具计算下载文件的哈希值，并与官方的对比。</li>
<li>如果两者完全一致，证明文件在下载过程中没有损坏，也未被篡改。哪怕只改动文件中的一个比特，整个哈希值也会变得完全不同。</li>
</ul>
</li>
<li>区块链和加密货币
<ul>
<li>比特币等加密货币的核心技术就是哈希。每个区块都包含前一个区块的哈希值，从而形成一条不可篡改的链。挖矿的过程本质上也是在寻找一个满足特定条件的哈希值。</li>
</ul>
</li>
<li>哈希表
<ul>
<li>这是一种极其高效的数据结构，用于实现快速的数据插入和查找（如Python中的字典，Java中的HashMap）。它通过哈希函数将键（key）转换成一个地址索引，从而直接定位到数据存储的位置。</li>
</ul>
</li>
</ol>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p>简单来说，哈希就是一个单向的、能将任何数据转换成固定长度唯一指纹的数学函数。<br>
它的核心价值在于：</p>
<ul>
<li>安全性：保护密码等敏感信息。</li>
<li>完整性：确保数据没有被篡改或损坏。</li>
<li>高效性：为数据结构提供快速的查找能力。</li>
</ul>
<h2 id="二、动态规划" tabindex="-1"><a class="header-anchor" href="#二、动态规划"><span>二、动态规划</span></a></h2>
<h3 id="核心思想-用空间换时间" tabindex="-1"><a class="header-anchor" href="#核心思想-用空间换时间"><span>核心思想：用空间换时间</span></a></h3>
<p>动态规划的本质是一种优化技术，它通过巧妙地“记住”已经解决过的子问题的答案，来避免重复计算，从而大幅提高算法效率。<br>
它主要用来解决一类特定问题：具有重叠子问题和最优子结构的问题。<br>
别怕，这两个术语我们马上就会解释清楚。</p>
<h3 id="一个经典的例子-斐波那契数列" tabindex="-1"><a class="header-anchor" href="#一个经典的例子-斐波那契数列"><span>一个经典的例子：斐波那契数列</span></a></h3>
<p>斐波那契数列的定义是：</p>
<ul>
<li>F(0) = 0</li>
<li>F(1) = 1</li>
<li>F(n) = F(n-1) + F(n-2) (当 n &gt;= 2)<br>
如果我们想计算 F(5)，最直观的方法是直接按照定义递归地写一个函数：</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fibonacci</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> fibonacci</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> fibonacci</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">fibonacci</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这个方法的效率极低！ 我们来看看计算 F(5) 时发生了什么：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>                F(5)</span></span>
<span class="line"><span>               /    \</span></span>
<span class="line"><span>          F(4)      F(3)</span></span>
<span class="line"><span>         /   \      /   \</span></span>
<span class="line"><span>      F(3)  F(2)  F(2)  F(1)</span></span>
<span class="line"><span>      /  \   / \   / \</span></span>
<span class="line"><span>   F(2) F(1) ... ... ...</span></span>
<span class="line"><span>   /  \</span></span>
<span class="line"><span>F(1)  F(0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你有没有发现？</p>
<ul>
<li>F(3) 被计算了 2次。</li>
<li>F(2) 被计算了 3次。</li>
<li>F(1) 和 F(0) 被计算了更多次。<br>
这就是重叠子问题（Overlapping Subproblems）：整个问题可以被分解成若干个子问题，而这些子问题不是独立的，它们被重复计算了很多次。</li>
</ul>
<h4 id="动态规划解法-记忆化-memoization" tabindex="-1"><a class="header-anchor" href="#动态规划解法-记忆化-memoization"><span>动态规划解法：记忆化（Memoization）</span></a></h4>
<p>我们何不开辟一个“备忘录”（通常是一个数组或字典），把已经计算过的结果存起来呢？这样下次再遇到同样的子问题时，直接查表即可，无需重新计算。</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fibonacci_dp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> memo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">{}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 如果已经在备忘录中，直接返回答案</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> memo:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> memo[n]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 基础情况</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 计算并记录结果到备忘录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    memo[n] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> fibonacci_dp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, memo) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> fibonacci_dp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, memo)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> memo[n]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">fibonacci_dp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 5，但速度快得多</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在计算 F(5) 的调用树变成了这样，每个灰色的点都只是简单地返回备忘录里的值，无需展开计算：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>                F(5)</span></span>
<span class="line"><span>               /    \</span></span>
<span class="line"><span>          F(4)      (F(3))  &#x3C;- 直接从备忘录读取</span></span>
<span class="line"><span>         /   \      </span></span>
<span class="line"><span>      F(3)   F(2)   </span></span>
<span class="line"><span>      /  \    </span></span>
<span class="line"><span>   F(2) F(1) </span></span>
<span class="line"><span>   /  \</span></span>
<span class="line"><span>F(1)  F(0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法叫做自顶向下的记忆化搜索。它仍然是递归，但通过备忘录避免了重复计算。</p>
<h4 id="更常见的dp写法-制表法-tabulation" tabindex="-1"><a class="header-anchor" href="#更常见的dp写法-制表法-tabulation"><span>更常见的DP写法：制表法（Tabulation）</span></a></h4>
<p>我们还可以换一种思路：自底向上。既然我们知道计算 F(n) 需要先知道 F(n-1) 和 F(n-2)，那我们为什么不直接从最小的数开始，一步步算到 n 呢？</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fibonacci_dp_bottom_up</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 处理基础情况</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 创建一个DP数组（表）来存储所有子问题的解</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # dp[i] 表示 F(i) 的值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    dp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    dp[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # F(0)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    dp[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # F(1)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 从已知的基础情况开始，一步步推导出更大的解</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        dp[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dp[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dp[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dp[n]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">fibonacci_dp_bottom_up</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法就是标准的动态规划。我们显式地构建了一个 dp 表，并通过循环填充它。</p>
<h3 id="动态规划问题的两个关键特征" tabindex="-1"><a class="header-anchor" href="#动态规划问题的两个关键特征"><span>动态规划问题的两个关键特征</span></a></h3>
<ol>
<li>最优子结构（Optimal Substructure）
<ul>
<li>一个问题的最优解，包含了它的子问题的最优解。</li>
<li>例如，在斐波那契数列中，F(5) 的最优解就是由 F(4) 和 F(3) 这两个子问题的最优解组合而成的。</li>
</ul>
</li>
<li>重叠子问题（Overlapping Subproblems）
<ul>
<li>正如上文所述，在递归地分解问题时，相同的子问题会被反复计算。<br>
如果一个问题同时满足这两个性质，那么它就可以用动态规划来解决。</li>
</ul>
</li>
</ol>
<h3 id="解决动态规划问题的通常步骤" tabindex="-1"><a class="header-anchor" href="#解决动态规划问题的通常步骤"><span>解决动态规划问题的通常步骤</span></a></h3>
<ol>
<li>定义状态（Define the State）
<ul>
<li>这是最关键的一步。状态通常表示为 dp[i] 或 dp[i][j]，它到底代表什么？例如，在斐波那契数列中，dp[i] 就表示 F(i) 的值。</li>
</ul>
</li>
<li>建立状态转移方程（Formulate the Recurrence Relation）
<ul>
<li>找出状态之间的关系。如何用小的状态（子问题）的解来求出大的状态（原问题）的解？</li>
<li>例如，dp[i] = dp[i-1] + dp[i-2]。</li>
</ul>
</li>
<li>确定基础情况（Determine Base Cases）
<ul>
<li>最小的、不可再分的子问题的解是什么？它们是整个推导的起点。</li>
<li>例如，dp[0] = 0, dp[1] = 1。</li>
</ul>
</li>
<li>选择计算方向（迭代顺序）
<ul>
<li>是自顶向下（记忆化搜索）还是自底向上（制表法）？通常制表法更常用，因为它避免了递归的开销，而且思路更符合逻辑。</li>
</ul>
</li>
<li>（可选）优化空间
<ul>
<li>有时我们并不需要存储整个 dp 表。例如在斐波那契数列中，要计算 F(n)，我们只需要前两个状态 F(n-1) 和 F(n-2)，所以可以用两个变量来滚动记录，将空间复杂度从 O(n) 优化到 O(1)。</li>
</ul>
</li>
</ol>
<h3 id="动态规划的典型应用场景" tabindex="-1"><a class="header-anchor" href="#动态规划的典型应用场景"><span>动态规划的典型应用场景</span></a></h3>
<ul>
<li>背包问题：给定一组物品的重量和价值，如何在限定的总重量内选择物品，使得总价值最大。</li>
<li>最长公共子序列（LCS）：两个序列中共同出现的最长的子序列（不要求连续）。</li>
<li>最短路径问题：比如经典的迪杰斯特拉算法和弗洛伊德算法。</li>
<li>股票买卖问题：给定股价序列，计算何时买卖能获得最大利润。</li>
</ul>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性/方法</th>
<th>普通递归</th>
<th>动态规划</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心思想</td>
<td>直接根据定义调用自身</td>
<td>记忆化，存储子问题解以避免重复计算</td>
</tr>
<tr>
<td>效率</td>
<td>低（指数级时间复杂度）</td>
<td>高（多项式时间复杂度）</td>
</tr>
<tr>
<td>空间使用</td>
<td>低（栈空间）</td>
<td>高（需要额外空间存储状态）</td>
</tr>
<tr>
<td>方向</td>
<td>自顶向下</td>
<td>通常是自底向上</td>
</tr>
</tbody>
</table>
<p>简单来说，动态规划就是“聪明的递归”。它通过“记笔记”的方式，把遇到过的子问题的答案都记下来，下次再遇到直接查笔记，从而避免了大量的重复劳动。<br>
希望这个解释能帮助你理解动态规划！它是一个需要练习才能掌握的概念，多找一些经典的DP问题（比如爬楼梯、硬币兑换）来练习，你会越来越熟练。</p>
<h2 id="三、贪心算法" tabindex="-1"><a class="header-anchor" href="#三、贪心算法"><span>三、贪心算法</span></a></h2>
<h3 id="核心思想-眼前最优-但愿全局最优" tabindex="-1"><a class="header-anchor" href="#核心思想-眼前最优-但愿全局最优"><span>核心思想：眼前最优，但愿全局最优</span></a></h3>
<p>贪心算法的理念是：在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的解法。<br>
它就像一个非常“贪心”的人，只着眼于眼前的最大利益，希望这些局部的最优选择能最终累积成全局的最优解。</p>
<h3 id="一个经典的例子-找零钱问题" tabindex="-1"><a class="header-anchor" href="#一个经典的例子-找零钱问题"><span>一个经典的例子：找零钱问题</span></a></h3>
<p>假设你是超市收银员，需要找给顾客 41 元的零钱，目标是让给出的纸币和硬币数量最少。纸币面额有：20元、10元、5元和1元。<br>
一个贪心的做法是：</p>
<ol>
<li>当前最大面额：看看 20 元能不能用。41 &gt; 20，可以用一张。剩余金额：41 - 20 = 21元。</li>
<li>当前最大面额：再看 20 元，21 &gt; 20，还能用一张。剩余金额：21 - 20 = 1元。</li>
<li>当前最大面额：20元太大（1 &lt; 20），看10元，也太大（1 &lt; 10），看5元，还是太大（1 &lt; 5），最后只能用1元。剩余金额：1 - 1 = 0元。<br>
最终，我们给出了 2张20元 + 1张1元，总共 3 张钞票。这确实是这个问题的最优解。<br>
为什么贪心算法在这里有效？<br>
因为我们的硬币系统（20, 10, 5, 1）具有贪心选择性质，即每次选择面额最大的纸币，最终就能得到整体数量最少的解。</li>
</ol>
<h3 id="贪心算法并不总是有效" tabindex="-1"><a class="header-anchor" href="#贪心算法并不总是有效"><span>贪心算法并不总是有效</span></a></h3>
<p>但是，贪心算法并不是万能的。如果问题不具备某些性质，贪心算法可能会得到局部最优，而不是全局最优。<br>
反例：改变一下币值<br>
假设有一个“奇怪”的币值系统：面额有 25元、20元、10元、5元和1元。现在需要找零 41 元。</p>
<ul>
<li>贪心算法的选择：
<ol>
<li>选最大面额 25元，剩余 41 - 25 = 16元。</li>
<li>选最大面额 10元，剩余 16 - 10 = 6元。</li>
<li>选最大面额 5元，剩余 6 - 5 = 1元。</li>
<li>选 1元。<br>
最终，给出了 4 张钞票（25, 10, 5, 1）。</li>
</ol>
</li>
<li>实际最优解：<br>
如果我们不选25元，而是选20元：
<ol>
<li>选 20元，剩余 41 - 20 = 21元。</li>
<li>再选一个20元？不行（21&lt;20）。选10元，剩余 21 - 10 = 11元。</li>
<li>选10元？不行（11&lt;10）。选5元，剩余 11 - 5 = 6元。（似乎也不对）<br>
实际上，最优解是：20元 + 20元 + 1元？ 20+20=40 &lt; 41，不对。<br>
真正的最优解是：1张20元 + 3张7元？ 不对，没有7元面值。<br>
实际上，在这个币值系统下，给41元找零，贪心算法给出的（25,10,5,1）就是唯一解，就是全局最优解。这个反例可能举得不够好。<br>
一个更好的经典反例是：币值为1, 3, 4元，要找零6元。</li>
</ol>
<ul>
<li>贪心：先拿4（剩余2），再拿1（剩余1），再拿1 -&gt; 共3枚硬币（4,1,1）。</li>
<li>最优：两个3元硬币 -&gt; 共2枚硬币（3,3）。此时贪心失败。<br>
这个反例说明了什么？<br>
贪心算法因为第一步的“贪心”（选择了4元），导致了后续需要解决一个更棘手的问题（凑2元），最终结果反而不是最优的。它只顾眼前利益，没有从整体考虑。</li>
</ul>
</li>
</ul>
<h3 id="贪心算法的适用场景" tabindex="-1"><a class="header-anchor" href="#贪心算法的适用场景"><span>贪心算法的适用场景</span></a></h3>
<p>一个问题是适用贪心算法的，通常需要满足两个性质：</p>
<ol>
<li>贪心选择性质（Greedy Choice Property）
<ul>
<li>一个问题的全局最优解可以通过一系列局部最优选择（贪心选择）来达到。这是贪心算法可行的基本要素。</li>
</ul>
</li>
<li>最优子结构（Optimal Substructure）
<ul>
<li>这个问题和动态规划一样，也需要具备最优子结构。即一个问题的最优解包含了它的子问题的最优解。</li>
</ul>
</li>
</ol>
<h3 id="贪心算法的优缺点" tabindex="-1"><a class="header-anchor" href="#贪心算法的优缺点"><span>贪心算法的优缺点</span></a></h3>
<table>
<thead>
<tr>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>非常高效：通常时间复杂度低，运行速度快。</td>
<td>局限性大：并非所有问题都适用，需要问题本身具备贪心选择性质。</td>
</tr>
<tr>
<td>思路简单，容易理解和实现。</td>
<td>可能得不到最优解：在很多问题上，它只能得到一个接近最优解的可行解（近似解）。</td>
</tr>
</tbody>
</table>
<h3 id="典型的贪心算法应用" tabindex="-1"><a class="header-anchor" href="#典型的贪心算法应用"><span>典型的贪心算法应用</span></a></h3>
<ol>
<li>霍夫曼编码（Huffman Coding）
<ul>
<li>一种无损数据压缩算法。通过贪心地选择频率最低的节点来合并，构建压缩效率最高的前缀码。</li>
</ul>
</li>
<li>最小生成树（Minimum Spanning Tree）
<ul>
<li>Prim算法 和 Kruskal算法 都是贪心算法的经典应用。它们通过贪心地选择当前最短的边，来最终构建出连接所有节点的、总权重最小的树。</li>
</ul>
</li>
<li>迪杰斯特拉算法（Dijkstra's Algorithm）
<ul>
<li>解决单源最短路径问题。在每一步中，它都贪心地选择当前距离起点最近的、未处理过的节点，来更新到其他点的距离。</li>
</ul>
</li>
<li>活动选择问题（Activity Selection Problem）
<ul>
<li>给定一堆活动及其开始和结束时间，如何安排才能在一个教室里举行最多的活动？贪心策略是：每次都选择结束时间最早的活动。</li>
</ul>
</li>
</ol>
<h3 id="总结-贪心-vs-动态规划" tabindex="-1"><a class="header-anchor" href="#总结-贪心-vs-动态规划"><span>总结：贪心 vs. 动态规划</span></a></h3>
<p>这是初学者最容易混淆的一对概念。它们的核心区别在于选择的不可撤销性。</p>
<table>
<thead>
<tr>
<th>特性</th>
<th>贪心算法</th>
<th>动态规划</th>
</tr>
</thead>
<tbody>
<tr>
<td>决策方式</td>
<td>每一步都做出当前看似最优的选择，并且永不回退。</td>
<td>会考察所有可能的选择，确保找到全局最优。每个决策都依赖于子问题的解。</td>
</tr>
<tr>
<td>效率</td>
<td>高，通常时间复杂度是多项式级（如O(n log n)）。</td>
<td>相对较低，因为需要解决所有重叠子问题。</td>
</tr>
<tr>
<td>适用范围</td>
<td>较窄，需要问题满足贪心选择性质。</td>
<td>较广，只要满足最优子结构和重叠子问题即可。</td>
</tr>
<tr>
<td>结果</td>
<td>可能不是全局最优解。</td>
<td>总是得到全局最优解。</td>
</tr>
</tbody>
</table>
<p>简单来说，贪心算法是一条路走到黑，每一步都选当下最好的，从不后悔。而动态规划则更“谨慎”，它记得所有走过的路和结果，通过对比所有可能性来做出最终的最优决策。<br>
希望这个解释能帮助你理解贪心算法！</p>
<h2 id="四、广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#四、广度优先搜索-bfs"><span>四、广度优先搜索（BFS）</span></a></h2>
<p>广度优先搜索（Breadth-First Search，简称 BFS）是一种用于遍历或搜索树或图这种数据结构的算法。<br>
它的核心思想非常直观：“一层一层地探索”。就像我们的人际关系网，它会先探索所有的直接朋友，然后再去探索朋友的朋友，以此类推，而不是一头扎进一个朋友的社交圈里深挖到底。</p>
<h3 id="一个生动的比喻-涟漪效应" tabindex="-1"><a class="header-anchor" href="#一个生动的比喻-涟漪效应"><span>一个生动的比喻：涟漪效应</span></a></h3>
<p>想象一下，你往平静的湖水里扔进一块石头。</p>
<ul>
<li>水波会以石头落点（起点）为中心，一圈一圈地、由近及远地向外扩散。</li>
<li>第一圈涟漪到达所有离中心最近的点，然后是第二圈、第三圈……<br>
BFS 就是这样“涟漪式”的搜索过程。它保证你总是先找到离起点最近的所有目标，然后再去找更远的目标。</li>
</ul>
<h3 id="bfs-是如何工作的" tabindex="-1"><a class="header-anchor" href="#bfs-是如何工作的"><span>BFS 是如何工作的？</span></a></h3>
<p>BFS 算法通常遵循以下步骤，需要借助一个队列（Queue） 数据结构（“先进先出”的原则）来实现：</p>
<ol>
<li>选择起点：从图中的某个顶点（节点）开始。</li>
<li>标记并入队：将这个起点标记为“已访问”（以免重复访问），并将其放入队列中。</li>
<li>循环执行以下步骤，直到队列为空：
<ul>
<li>出队：从队列中取出最前面的那个顶点（我们称它为“当前顶点”）。</li>
<li>检查目标：检查这个“当前顶点”是不是你要找的目标。如果是，搜索成功，结束！</li>
<li>探索邻居：如果不是目标，则找到这个“当前顶点”所有尚未被访问的相邻顶点，将它们一一标记为“已访问”，并按顺序放入队列的末尾。</li>
</ul>
</li>
<li>如果队列为空，意味着你已经遍历了整个连通图的所有顶点，但没有找到目标。<br>
简单来说，队列保证了访问顺序：谁先来，谁就先被服务（探索）。这样就实现了按层次、由内向外搜索的效果。</li>
</ol>
<h3 id="图解bfs流程" tabindex="-1"><a class="header-anchor" href="#图解bfs流程"><span>图解BFS流程</span></a></h3>
<p>假设我们有下面这个简单的图，从节点 A 开始进行BFS：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>    A</span></span>
<span class="line"><span>   / \</span></span>
<span class="line"><span>  B   C</span></span>
<span class="line"><span> / \   \</span></span>
<span class="line"><span>D   E   F</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤分解：</p>
<table>
<thead>
<tr>
<th>步骤</th>
<th>队列状态 (队首-&gt;队尾)</th>
<th>当前出队节点</th>
<th>访问顺序</th>
<th>新加入的邻居</th>
</tr>
</thead>
<tbody>
<tr>
<td>初始</td>
<td>[ A ]</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>[ ] -&gt; A</td>
<td>A</td>
<td>A</td>
<td>B, C</td>
</tr>
<tr>
<td>2</td>
<td>[ B, C ] -&gt; B</td>
<td>B</td>
<td>A, B</td>
<td>D, E</td>
</tr>
<tr>
<td>3</td>
<td>[ C, D, E ] -&gt; C</td>
<td>C</td>
<td>A, B, C</td>
<td>F</td>
</tr>
<tr>
<td>4</td>
<td>[ D, E, F ] -&gt; D</td>
<td>D</td>
<td>A, B, C, D</td>
<td>(无)</td>
</tr>
<tr>
<td>5</td>
<td>[ E, F ] -&gt; E</td>
<td>E</td>
<td>A, B, C, D, E</td>
<td>(无)</td>
</tr>
<tr>
<td>6</td>
<td>[ F ] -&gt; F</td>
<td>F</td>
<td>A, B, C, D, E, F</td>
<td>(无)</td>
</tr>
<tr>
<td>7</td>
<td>[ ]</td>
<td>(空)</td>
<td>结束</td>
<td></td>
</tr>
</tbody>
</table>
<p>最终的访问顺序（遍历顺序）是：A -&gt; B -&gt; C -&gt; D -&gt; E -&gt; F<br>
你可以清晰地看到，它是先访问第一层（A），然后是第二层（B, C），最后是第三层（D, E, F）。</p>
<h3 id="bfs-的特点和应用场景" tabindex="-1"><a class="header-anchor" href="#bfs-的特点和应用场景"><span>BFS 的特点和应用场景</span></a></h3>
<h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点：</span></a></h4>
<ul>
<li>** completeness（完备性）**：如果目标存在，BFS 一定能找到它。</li>
<li>最优性：当图中的边没有权重（或权重相等）时，BFS 找到的路径一定是从起点到目标的最短路径（因为按层遍历，第一次遇到目标时经过的边数肯定最少）。这是它的核心优势！</li>
<li>空间复杂度高：因为需要用一个队列来存储每一层的所有节点。对于分支因子（每个节点的平均子节点数）很高的树/图，可能会消耗大量内存。</li>
</ul>
<h4 id="经典应用场景" tabindex="-1"><a class="header-anchor" href="#经典应用场景"><span>经典应用场景：</span></a></h4>
<ol>
<li>查找最短路径：在无权图中（如迷宫、棋盘游戏、社交网络），寻找两点之间的最短步数路径。</li>
<li>社交网络：查找某个人的“三度人脉”（朋友、朋友的朋友、朋友的朋友的朋友）。</li>
<li>网络爬虫：搜索引擎爬虫可以用 BFS 来按“距离”系统地抓取网页，但通常会结合其他策略。</li>
<li>广播网络：在网络上广播一个数据包，BFS 可以确保它以最少的跳数到达所有节点。</li>
<li>图的连通性：检查一个图是否是连通的，或者找出所有连通分量。</li>
</ol>
<h3 id="与深度优先搜索-dfs-的简单对比" tabindex="-1"><a class="header-anchor" href="#与深度优先搜索-dfs-的简单对比"><span>与深度优先搜索（DFS）的简单对比</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>广度优先搜索 (BFS)</th>
<th>深度优先搜索 (DFS)</th>
</tr>
</thead>
<tbody>
<tr>
<td>遍历顺序</td>
<td>层级优先（横向）</td>
<td>深度优先（纵向）</td>
</tr>
<tr>
<td>数据结构</td>
<td>队列 (Queue)</td>
<td>栈 (Stack) (或递归)</td>
</tr>
<tr>
<td>最优解</td>
<td>在无权图中能找到最短路径</td>
<td>不一定是最短路径</td>
</tr>
<tr>
<td>空间消耗</td>
<td>通常较高（要存大量同级节点）</td>
<td>通常较低（只需存一条路径上的节点）</td>
</tr>
<tr>
<td>好比</td>
<td>稳妥的“团队推进”</td>
<td>勇敢的“孤身探险”</td>
</tr>
</tbody>
</table>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span>总结</span></a></h3>
<p>广度优先搜索 (BFS) 的核心就是“地毯式”、“一层一层”地搜索，它最适合用来在无权图中寻找最短路径或进行按距离扩展的遍历。 当你需要找到最近或最短的解决方案时，BFS 通常是你的首选算法。</p>
<h2 id="五、双指针" tabindex="-1"><a class="header-anchor" href="#五、双指针"><span>五、双指针</span></a></h2>
<p>它不是一个内置的语法，而是一种非常常用且高效的算法技巧或编程思想。</p>
<h3 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想"><span>核心思想</span></a></h3>
<p>双指针，顾名思义，就是在处理数据时，使用两个指针（或索引）来遍历数据结构（最常见的是数组或链表），通过某种逻辑协同工作，以达到特定的目的。<br>
它的主要优势在于能够将通常需要多重循环（如 O(n²) 时间复杂度）的问题优化为线性循环（如 O(n) 时间复杂度），从而大幅提升效率。</p>
<h3 id="常见的三种应用场景" tabindex="-1"><a class="header-anchor" href="#常见的三种应用场景"><span>常见的三种应用场景</span></a></h3>
<p>双指针技巧根据两个指针的移动方式，主要可以分为以下三类：</p>
<h4 id="_1-同向指针-快慢指针" tabindex="-1"><a class="header-anchor" href="#_1-同向指针-快慢指针"><span>1. 同向指针（快慢指针）</span></a></h4>
<p>两个指针从同一侧开始遍历，但移动速度不同（通常一个“快指针”，一个“慢指针”）。<br>
主要应用：</p>
<ul>
<li>移除数组中的元素：在不使用额外数组的情况下，在原地修改数组。
<ul>
<li>慢指针：指向下一个有效元素应该存放的位置。</li>
<li>快指针：向前探索，寻找新的有效元素。</li>
</ul>
</li>
<li>判断链表是否有环：这是经典的“Floyd 判圈算法”（龟兔赛跑算法）。
<ul>
<li>慢指针：每次移动一步。</li>
<li>快指针：每次移动两步。</li>
<li>如果链表有环，快指针最终会追上慢指针（相遇）；如果无环，快指针会先到达末尾。<br>
示例：LeetCode 27. 移除元素<br>
要求：在原地移除所有值等于 val 的元素，返回新数组的长度。</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> removeElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    slow </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 慢指针，指向下一个有效位置</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> fast </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(nums)): </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 快指针，遍历整个数组</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[fast] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> val: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 快指针找到了一个有效值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            nums[slow] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums[fast] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将其放到慢指针的位置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            slow </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 慢指针向前移动一位</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> slow </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 慢指针最终的位置就是新数组的长度</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，fast 指针负责扫描所有元素，而 slow 指针负责维护一个“不包含 val”的新数组的前沿。</p>
<h4 id="_2-相向指针-对撞指针" tabindex="-1"><a class="header-anchor" href="#_2-相向指针-对撞指针"><span>2. 相向指针（对撞指针）</span></a></h4>
<p>两个指针分别从数据结构的首和尾开始，向中间移动，直到它们相遇或错开。<br>
主要应用：</p>
<ul>
<li>有序数组的二分查找：虽然是双指针的特例（首、尾、中指针），但思想相通。</li>
<li>两数之和 II（有序数组）：给定一个已排序数组，找到两个数使它们相加等于目标值。</li>
<li>反转字符串或数组。</li>
<li>盛最多水的容器：计算由数组索引和值构成的最大面积。<br>
示例：LeetCode 167. 两数之和 II<br>
要求：在非递减顺序排列的数组中，找出两个数之和等于目标数。</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> twoSum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">numbers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 左指针，指向最小元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(numbers) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 右指针，指向最大元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> right:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        total </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> numbers[left] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> numbers[right]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> total </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> target:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 题目要求索引从1开始</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> total </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> target:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            left </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 总和太小，左指针右移以增大总和</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># total > target</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            right </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 总和太大，右指针左移以减小总和</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，left 和 right 指针根据当前和与目标值的比较，智能地向中间收缩，快速定位答案。</p>
<h4 id="_3-分离指针" tabindex="-1"><a class="header-anchor" href="#_3-分离指针"><span>3. 分离指针</span></a></h4>
<p>两个指针分别遍历不同的数组或链表。<br>
主要应用：</p>
<ul>
<li>判断一个链表是否是另一个链表的子集。</li>
<li>合并两个有序数组或链表。<br>
示例：合并两个有序数组</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> mergeTwoArrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">nums1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> nums2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 从两个数组的末尾开始，以及合并后数组的末尾</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 数组1的最后一个有效元素指针</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 数组2的最后一个有效元素指针</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 最终合并数组的末尾指针</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 从后往前遍历，将较大的数放到k的位置</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">>=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 当数组2还有元素未处理时</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">>=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums1[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums2[j]:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            nums1[k] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums1[i]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            nums1[k] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nums2[j]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            j </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        k </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用了三个指针，其中 i 和 j 就是分离指针，分别遍历两个不同的数组。</p>
<h3 id="总结与对比" tabindex="-1"><a class="header-anchor" href="#总结与对比"><span>总结与对比</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>指针初始位置</th>
<th>移动方向</th>
<th>典型应用</th>
</tr>
</thead>
<tbody>
<tr>
<td>同向指针</td>
<td>同一侧（通常都是起点）</td>
<td>相同方向，速度不同</td>
<td>移除元素、链表判环</td>
</tr>
<tr>
<td>相向指针</td>
<td>两侧（一头一尾）</td>
<td>相对方向，朝中间移动</td>
<td>有序数组求和、反转</td>
</tr>
<tr>
<td>分离指针</td>
<td>不同数组/链表上</td>
<td>独立移动，可同可异</td>
<td>合并有序数组、比较链表</td>
</tr>
</tbody>
</table>
<p>核心好处：双指针技巧通过巧妙的指针移动规则，避免了不必要的循环嵌套，将时间复杂度从 O(n²) 优化到了 O(n)，是一种非常高效的算法思想。掌握它对于解决各类数据结构和算法问题至关重要。</p>
<h2 id="六、深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#六、深度优先搜索-dfs"><span>六、深度优先搜索（DFS）</span></a></h2>
<p>​DFS（深度优先搜索，Depth-First Search）​​ 是一种用于遍历或搜索树或图数据结构的经典算法。<br>
它的核心策略与广度优先搜索（BFS）的“一层一层”探索完全不同，DFS 的策略是：​​“一条路走到黑，不撞南墙不回头”​。</p>
<h3 id="一个生动的比喻-走迷宫" tabindex="-1"><a class="header-anchor" href="#一个生动的比喻-走迷宫"><span>一个生动的比喻：走迷宫</span></a></h3>
<p>想象一下你在一个迷宫里，想要找到出口。</p>
<ul>
<li>BFS 的策略：你会站在路口，同时派出很多人去尝试所有岔路的第一段，然后再尝试所有岔路的第二段……（同时扩张）。</li>
<li>DFS 的策略：你会选择一条岔路一直走下去，直到遇到死胡同。然后，你回溯到最后一个岔路口，换另一条没走过的路继续尝试，直到找到出口。<br>
DFS 就是这种“钻牛角尖”式的搜索过程。它优先探索一条路径的深度，直到尽头再回溯。</li>
</ul>
<h3 id="dfs-是如何工作的" tabindex="-1"><a class="header-anchor" href="#dfs-是如何工作的"><span>DFS 是如何工作的？</span></a></h3>
<p>DFS 算法通常遵循以下步骤，可以通过递归（最直观）或显式地使用栈（Stack） 数据结构（“后进先出”的原则）来实现：</p>
<ol>
<li>选择起点：从图中的某个顶点（节点）开始。</li>
<li>标记并探索：将这个顶点标记为“已访问”。</li>
<li>递归深入：对于当前顶点的每一个未被访问的相邻顶点，重复步骤 1-3（即递归地访问它）。</li>
<li>回溯：当当前顶点的所有相邻顶点都被访问过之后，则回溯到它的上一个顶点。<br>
简单来说：递归的实现利用了系统调用栈，而手动实现则是用一个栈来模拟这个过程。每次都优先访问最新发现的节点。</li>
</ol>
<h3 id="图解dfs流程" tabindex="-1"><a class="header-anchor" href="#图解dfs流程"><span>图解DFS流程</span></a></h3>
<p>假设我们有和之前BFS例子中相同的图，从节点 A 开始进行DFS：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>    A</span></span>
<span class="line"><span>   / \</span></span>
<span class="line"><span>  B   C</span></span>
<span class="line"><span> / \   \</span></span>
<span class="line"><span>D   E   F</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤分解（使用递归）：</p>
<ol>
<li>访问 A （第一步）</li>
<li>从 A 出发，有 B 和 C 两个未访问邻居。选择第一个邻居 B，递归访问 B。</li>
<li>访问 B</li>
<li>从 B 出发，有 D 和 E 两个未访问邻居。选择第一个邻居 D，递归访问 D。</li>
<li>访问 D</li>
<li>D 没有未访问的邻居，回溯到 B。</li>
<li>在 B 处，选择下一个邻居 E，递归访问 E。</li>
<li>访问 E</li>
<li>E 没有未访问的邻居，回溯到 B。B 的所有邻居都已访问，回溯到 A。</li>
<li>在 A 处，选择下一个邻居 C，递归访问 C。</li>
<li>访问 C</li>
<li>从 C 出发，有一个未访问邻居 F，递归访问 F。</li>
<li>访问 F</li>
<li>F 没有未访问的邻居，回溯到 C，再回溯到 A。整个过程结束。<br>
最终的访问顺序（遍历顺序）取决于你选择邻居的顺序。<br>
假设总是优先选择左边的邻居，顺序是：A -&gt; B -&gt; D -&gt; E -&gt; C -&gt; F<br>
你可以清晰地看到，它沿着 A-B-D 这条路径一口气走到了底（深度），然后才回溯去探索其他分支。</li>
</ol>
<h3 id="dfs-的特点和应用场景" tabindex="-1"><a class="header-anchor" href="#dfs-的特点和应用场景"><span>DFS 的特点和应用场景</span></a></h3>
<h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点：</span></a></h4>
<ul>
<li>** completeness（完备性）**：如果目标存在，且图是有限的，DFS 一定能找到它（但路径可能不是最优的）。</li>
<li>非最优解：DFS 找到的路径不一定是最短路径。因为它可能在一个很深的分支上找到目标，而实际上存在一个更近的解。</li>
<li>空间复杂度相对较低：在最坏情况下（如一条线性的链），空间复杂度为 O(h)，其中 h 是图的最大深度。这通常比 BFS 的 O(n) 要好。</li>
</ul>
<h4 id="经典应用场景-1" tabindex="-1"><a class="header-anchor" href="#经典应用场景-1"><span>经典应用场景：</span></a></h4>
<ol>
<li>拓扑排序：用于安排有依赖关系的任务（如编译器的依赖管理）。</li>
<li>查找连通分量：在图中找出所有连通的子图。</li>
<li>解决迷宫问题：寻找从起点到终点的任何一条可行路径。</li>
<li>回溯算法的基础：用于尝试所有可能的解决方案，例如：
<ul>
<li>八皇后问题</li>
<li>数独求解器</li>
<li>排列组合问题</li>
</ul>
</li>
<li>检测图中的环（尤其是在有向图中）。</li>
</ol>
<h3 id="递归实现-vs-迭代实现-栈" tabindex="-1"><a class="header-anchor" href="#递归实现-vs-迭代实现-栈"><span>递归实现 vs. 迭代实现（栈）</span></a></h3>
<ol>
<li>递归实现（最简洁直观）：</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 以图的DFS为例，使用邻接表表示图</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> dfs_recursive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> visited</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> node </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    visited.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(node) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 标记为已访问</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(node) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 处理当前节点（例如打印）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> neighbor </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> graph[node]: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 遍历所有邻居</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> neighbor </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">not</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> visited:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">            dfs_recursive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(neighbor, visited, graph) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 递归访问</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>迭代实现（使用显式栈）：</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> dfs_iterative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> graph</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    stack </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [start] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 用一个栈来模拟</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    visited </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([start])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> stack:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        node </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> stack.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 弹出栈顶元素（最后加入的）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(node) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 处理当前节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> neighbor </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> graph[node]:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> neighbor </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">not</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> visited:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                visited.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(neighbor)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                stack.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(neighbor) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将邻居压入栈顶</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与广度优先搜索-bfs-的简单对比回顾" tabindex="-1"><a class="header-anchor" href="#与广度优先搜索-bfs-的简单对比回顾"><span>与广度优先搜索（BFS）的简单对比回顾</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>深度优先搜索 (DFS)</th>
<th>广度优先搜索 (BFS)</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心思想</td>
<td>深度优先（一条路走到底）</td>
<td>广度优先（一层一层扩展）</td>
</tr>
<tr>
<td>数据结构</td>
<td>栈 (Stack) (或递归)</td>
<td>队列 (Queue)</td>
</tr>
<tr>
<td>最优解</td>
<td>不能保证最短路径</td>
<td>在无权图中能找到最短路径</td>
</tr>
<tr>
<td>空间消耗</td>
<td>通常较低（O(深度)）</td>
<td>通常较高（O(宽度)）</td>
</tr>
<tr>
<td>好比</td>
<td>勇敢的“孤身探险家”</td>
<td>稳妥的“军团指挥官”</td>
</tr>
</tbody>
</table>
<h3 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3"><span>总结</span></a></h3>
<p>深度优先搜索 (DFS) 的核心就是“不撞南墙不回头”，优先探索图的深度，非常适合用于需要遍历所有可能性的场景，如拓扑排序、检测环和回溯算法。 当你需要找到是否存在一条路径，或者需要处理所有排列组合时，DFS 往往是你的首选。</p>
<h2 id="七、栈-stack" tabindex="-1"><a class="header-anchor" href="#七、栈-stack"><span>七、栈（Stack）</span></a></h2>
<p>栈这是一个非常重要且基础的数据结构，在计算机科学中无处不在。</p>
<h3 id="核心思想-一摞盘子的比喻" tabindex="-1"><a class="header-anchor" href="#核心思想-一摞盘子的比喻"><span>核心思想：一摞盘子的比喻</span></a></h3>
<p>想象一下餐厅里放盘子的一摞架子。你只能做两个操作：</p>
<ol>
<li>放入 (Push)：把一个新盘子放在这摞盘子的最顶部。</li>
<li>拿走 (Pop)：把最顶部的那个盘子取走。<br>
你不能从中间或底部抽出盘子！这种 “后进先出” 的规则就是栈的精髓。</li>
</ol>
<ul>
<li>LIFO：Last In, First Out （后进先出）
<ul>
<li>最后一个放上去的盘子，将是第一个被取走的。</li>
</ul>
</li>
</ul>
<h3 id="栈的官方定义和操作" tabindex="-1"><a class="header-anchor" href="#栈的官方定义和操作"><span>栈的官方定义和操作</span></a></h3>
<p>栈是一种遵循 LIFO（后进先出） 原则的线性数据结构。所有操作都发生在其顶端（Top）。<br>
主要操作包括：</p>
<ol>
<li>Push (入栈)：向栈顶添加一个元素。</li>
<li>Pop (出栈)：移除并返回栈顶的元素。</li>
<li>Peek (查看栈顶)：返回栈顶的元素但不移除它。</li>
<li>isEmpty (判断空)：检查栈是否为空。<br>
这个过程可以用下图直观展示：</li>
</ol>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph Operations [栈的操作流程]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        direction LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        subgraph Stack [栈结构]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            direction TB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            T[Top]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            E3[元素 C]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            E2[元素 B]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            E1[元素 A]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            B[Bottom]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Push[Push (入栈): 添加新元素到顶部] --> Pop</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Pop[Pop (出栈): 从顶部移除元素] --> Peek</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Peek[Peek (查看): 仅查看顶部元素] --> IsEmpty</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        IsEmpty[IsEmpty (判空): 检查栈是否为空]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么栈如此重要-它的应用场景" tabindex="-1"><a class="header-anchor" href="#为什么栈如此重要-它的应用场景"><span>为什么栈如此重要？它的应用场景</span></a></h3>
<p>栈的概念简单，但应用极其广泛，是计算机科学的基石之一。</p>
<h4 id="_1-函数调用-call-stack" tabindex="-1"><a class="header-anchor" href="#_1-函数调用-call-stack"><span>1. 函数调用（Call Stack）</span></a></h4>
<p>这是栈最核心的应用。当你调用一个函数时，计算机会创建一个栈帧（Stack Frame） 并将其压入调用栈。这个栈帧包含了函数的参数、局部变量和返回地址。</p>
<ul>
<li>调用函数时：将其压入栈顶。</li>
<li>函数返回时：将其从栈顶弹出，程序回到上一层函数继续执行。<br>
这种机制完美地处理了函数的嵌套调用和返回顺序。<br>
例子：</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> funcA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"A 开始"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">    funcB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 调用 funcB</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"A 结束"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等待 funcB 返回后执行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> funcB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"B 开始"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">    funcC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 调用 funcC</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"B 结束"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等待 funcC 返回后执行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> funcC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"C 执行"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">funcA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 调用 funcA</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用栈的变化过程（括号内为当前执行的代码）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>[ ] -> [funcA] -> [funcA, funcB] -> [funcA, funcB, funcC] -> [funcA, funcB] -> [funcA] -> [ ]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出顺序为：A 开始 -&gt; B 开始 -&gt; C 执行 -&gt; B 结束 -&gt; A 结束。这正是 LIFO 的顺序！</p>
<h4 id="_2-表达式求值-如计算器" tabindex="-1"><a class="header-anchor" href="#_2-表达式求值-如计算器"><span>2. 表达式求值（如计算器）</span></a></h4>
<p>编译器使用栈来解析和计算数学表达式（如 3 + 5 * (2 - 1)）。</p>
<ul>
<li>操作数栈：存放数字。</li>
<li>运算符栈：存放运算符 +, -, *, / 和括号。<br>
通过比较运算符的优先级，决定是先计算乘除还是加减。</li>
</ul>
<h4 id="_3-括号匹配" tabindex="-1"><a class="header-anchor" href="#_3-括号匹配"><span>3. 括号匹配</span></a></h4>
<p>检查代码中的括号 {}, [], () 是否正确配对。</p>
<ul>
<li>遍历字符串。</li>
<li>遇到左括号（如 (, {, [）就 Push 入栈。</li>
<li>遇到右括号（如 ), }, ]）就 Pop 出栈，并检查是否与当前右括号类型匹配。</li>
<li>最后检查栈是否为空。如果为空，说明所有括号都正确匹配。</li>
</ul>
<h4 id="_4-撤销-undo-功能" tabindex="-1"><a class="header-anchor" href="#_4-撤销-undo-功能"><span>4. 撤销（Undo）功能</span></a></h4>
<p>文本编辑器或绘图软件中的“撤销”操作。</p>
<ul>
<li>你的每一个操作（输入字符、绘制图形）都被作为状态压入栈中。</li>
<li>当你按下“撤销”时，就是弹出栈顶的状态，恢复到上一个操作时的样子。</li>
</ul>
<h4 id="_5-浏览器的前进-后退" tabindex="-1"><a class="header-anchor" href="#_5-浏览器的前进-后退"><span>5. 浏览器的前进/后退</span></a></h4>
<ul>
<li>后退栈：记录你访问过的历史页面。点击后退按钮相当于“弹出”当前页面，回到栈顶的下一个页面。</li>
<li>前进栈：当你后退后，原来的页面被放入“前进栈”，点击前进按钮相当于将页面从“前进栈”弹出，再压回“后退栈”。</li>
</ul>
<hr>
<h3 id="如何实现一个栈" tabindex="-1"><a class="header-anchor" href="#如何实现一个栈"><span>如何实现一个栈？</span></a></h3>
<p>栈既可以用数组（Array） 实现，也可以用链表（Linked List） 实现。</p>
<ul>
<li>数组实现：简单，访问快。但需要预先指定大小或涉及动态扩容。</li>
<li>链表实现：更加灵活，理论上没有大小限制（直到内存耗尽）。每个节点包含数据和指向下一个节点的指针。<br>
Python 列表（List）本质上就是一个动态数组，可以直接用它来实现栈：</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> __init__</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.items </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 用列表作为底层存储</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.items.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(item) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 入栈：添加到列表末尾</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">is_empty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.items.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 出栈：移除列表最后一个元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> peek</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">is_empty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.items[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看栈顶：返回列表最后一个元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> is_empty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.items) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.items)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 使用示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> Stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'A'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'B'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 'B'</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">peek</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 'A'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结-4" tabindex="-1"><a class="header-anchor" href="#总结-4"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心原则</td>
<td>LIFO（后进先出）</td>
</tr>
<tr>
<td>主要操作</td>
<td>Push（入栈）， Pop（出栈）， Peek（查看）</td>
</tr>
<tr>
<td>时间复杂度</td>
<td>所有操作都是 O(1)，非常高效</td>
</tr>
<tr>
<td>关键应用</td>
<td>函数调用、表达式求值、括号匹配、撤销操作、浏览器历史</td>
</tr>
<tr>
<td>实现方式</td>
<td>数组或链表</td>
</tr>
</tbody>
</table>
<p>简单来说，栈就是一个所有操作都发生在一端（顶部）、遵循“后进先出”规则的线性数据结构。 它是理解计算机如何运行（特别是函数调用）的关键概念之一。</p>
<h2 id="八、堆-heap" tabindex="-1"><a class="header-anchor" href="#八、堆-heap"><span>八、堆（Heap）</span></a></h2>
<h3 id="核心-两种-堆-的含义" tabindex="-1"><a class="header-anchor" href="#核心-两种-堆-的含义"><span>核心：两种“堆”的含义</span></a></h3>
<ol>
<li>数据结构中的堆 (Heap Data Structure)：一种特殊的完全二叉树，用于实现优先队列。</li>
<li>内存管理中的堆 (Heap Memory)：程序运行时动态分配内存的一块区域。<br>
它们名字相同，但指的是完全不同的事物。我们主要关注第一种（数据结构），但也会解释第二种，以免混淆。</li>
</ol>
<hr>
<h2 id="一、作为数据结构的-堆" tabindex="-1"><a class="header-anchor" href="#一、作为数据结构的-堆"><span>一、作为数据结构的“堆”</span></a></h2>
<p>这是一种特殊的完全二叉树，它满足一个关键性质：</p>
<ul>
<li>堆序性 (Heap Property)：每个节点的值都必须大于或等于（最大堆）或小于或等于（最小堆）其子节点的值。</li>
</ul>
<h3 id="两种基本类型" tabindex="-1"><a class="header-anchor" href="#两种基本类型"><span>两种基本类型</span></a></h3>
<table>
<thead>
<tr>
<th>堆类型</th>
<th>规则</th>
<th>主要用途</th>
</tr>
</thead>
<tbody>
<tr>
<td>最大堆 (Max Heap)</td>
<td>父节点 &gt;= 子节点。根节点是整个堆中最大的元素。</td>
<td>快速获取和删除最大值</td>
</tr>
<tr>
<td>最小堆 (Min Heap)</td>
<td>父节点 &lt;= 子节点。根节点是整个堆中最小的元素。</td>
<td>快速获取和删除最小值</td>
</tr>
</tbody>
</table>
<p>图示：一个最大堆</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>         100</span></span>
<span class="line"><span>        /   \</span></span>
<span class="line"><span>      19     36</span></span>
<span class="line"><span>     /  \    /  \</span></span>
<span class="line"><span>    17   3  25   1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，每个父节点（100, 19, 36）都大于它的子节点。最大的元素（100）在根节点。</p>
<h3 id="堆的核心操作" tabindex="-1"><a class="header-anchor" href="#堆的核心操作"><span>堆的核心操作</span></a></h3>
<p>堆通常用一个数组来实现，而不是用指针连接的节点。对于数组中位置 i 的节点：</p>
<ul>
<li>父节点位置：(i-1)/2</li>
<li>左子节点位置：2*i + 1</li>
<li>右子节点位置：2*i + 2</li>
</ul>
<ol>
<li>插入 (Insert / Push)
<ul>
<li>步骤：将新元素添加到数组末尾（即树的最后一个节点），然后执行 “上浮 (Sift Up / Heapify Up)” 操作，与其父节点比较，如果违反堆序性就交换，直到满足为止。</li>
<li>时间复杂度：O(log n)</li>
</ul>
</li>
<li>取出堆顶元素 (Extract / Pop)
<ul>
<li>步骤：移走根节点（即最大或最小值），将数组的最后一个元素放到根节点的位置，然后执行 “下沉 (Sift Down / Heapify Down)” 操作，与子节点中更大（或更小）的那个交换，直到满足堆序性。</li>
<li>时间复杂度：O(log n)</li>
</ul>
</li>
<li>查看堆顶 (Peek)
<ul>
<li>步骤：直接返回根节点的值，不修改堆。</li>
<li>时间复杂度：O(1)</li>
</ul>
</li>
</ol>
<h3 id="堆的经典应用场景" tabindex="-1"><a class="header-anchor" href="#堆的经典应用场景"><span>堆的经典应用场景</span></a></h3>
<ol>
<li>优先队列 (Priority Queue)
<ul>
<li>这是堆最直接的应用。它不像普通队列“先进先出”，而是优先级高的元素先出。</li>
<li>现实比喻：医院的急诊科。病人按病情严重程度排队，而不是按挂号顺序。</li>
<li>技术应用：操作系统的进程调度、网络流量管理、AI中的路径搜索算法（如A*）。</li>
</ul>
</li>
<li>堆排序 (Heap Sort)
<ul>
<li>一种利用堆进行排序的算法。</li>
<li>步骤：① 将待排序数组构建成一个大顶堆。② 此时根节点是最大值，将其与最后一个元素交换。③ 排除最后一个元素（已排序），对剩余堆进行“下沉”调整。④ 重复步骤②③，直到堆中只剩一个元素。</li>
<li>时间复杂度：O(n log n)</li>
</ul>
</li>
<li>求Top K问题
<ul>
<li>问题：“从十亿个数中找出最大的100个数？”</li>
<li>解决方案：维护一个大小为 K 的最小堆。遍历数据，如果数字比堆顶（当前第100大的数中最小的那个）大，就替换堆顶并调整堆。遍历完成后，堆中的100个数就是最大的100个。</li>
<li>同理，求最小的K个数则使用最大堆。</li>
</ul>
</li>
<li>图算法
<ul>
<li>在 Dijkstra 算法（寻找带权图的最短路径）和 Prim 算法（求最小生成树）中，都需要用优先队列（通常用最小堆实现）来高效地选取下一个要处理的节点。</li>
</ul>
</li>
</ol>
<hr>
<h2 id="二、内存管理中的-堆" tabindex="-1"><a class="header-anchor" href="#二、内存管理中的-堆"><span>二、内存管理中的“堆”</span></a></h2>
<p>这是一个完全不同的概念，它与栈（Stack Memory） 一起，是程序运行时内存分配的两个主要区域。</p>
<table>
<thead>
<tr>
<th>特性</th>
<th>栈 (Stack Memory)</th>
<th>堆 (Heap Memory)</th>
</tr>
</thead>
<tbody>
<tr>
<td>管理方式</td>
<td>由编译器自动管理（自动分配/释放）</td>
<td>由程序员手动管理（如C++的new/delete，C的malloc/free）</td>
</tr>
<tr>
<td>分配速度</td>
<td>快</td>
<td>慢</td>
</tr>
<tr>
<td>内存大小</td>
<td>较小，大小固定</td>
<td>很大，理论上只受限于虚拟内存</td>
</tr>
<tr>
<td>内容</td>
<td>存储函数调用信息（栈帧）、局部变量</td>
<td>存储动态创建的对象、全局变量</td>
</tr>
<tr>
<td>灵活性</td>
<td>大小生命周期固定</td>
<td>大小生命周期灵活，可动态变化</td>
</tr>
<tr>
<td>典型问题</td>
<td>栈溢出（递归太深）</td>
<td>内存泄漏（忘了释放）、碎片化</td>
</tr>
</tbody>
</table>
<p>简单比喻：</p>
<ul>
<li>栈就像酒店的客房。入住和退房（函数调用和返回）由系统严格管理，速度快但房间小且固定。</li>
<li>堆就像一块巨大的空地。你可以自己申请一块地（分配内存），想用多大就申请多大，想用多久就用多久。但用完后必须自己归还（释放内存），否则别人就无法使用（内存泄漏）。</li>
</ul>
<hr>
<h3 id="总结与对比-1" tabindex="-1"><a class="header-anchor" href="#总结与对比-1"><span>总结与对比</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>数据结构-堆</th>
<th>内存-堆</th>
</tr>
</thead>
<tbody>
<tr>
<td>是什么</td>
<td>一种树形数据结构</td>
<td>一块内存区域</td>
</tr>
<tr>
<td>核心特性</td>
<td>堆序性（父&gt;子或父&lt;子）</td>
<td>动态分配、手动管理</td>
</tr>
<tr>
<td>主要操作</td>
<td>插入、取出堆顶、调整</td>
<td>分配(malloc)、释放(free)</td>
</tr>
<tr>
<td>核心用途</td>
<td>实现优先队列、堆排序</td>
<td>存储动态创建的对象</td>
</tr>
</tbody>
</table>
<p>结论：<br>
当你听到“堆”时，绝大多数情况下（尤其是在算法和面试的语境中），指的是作为一种数据结构的堆，它是一种高效管理优先级元素的树结构。</p>
<h2 id="九、队列-queue" tabindex="-1"><a class="header-anchor" href="#九、队列-queue"><span>九、队列（Queue）</span></a></h2>
<h3 id="核心思想-排队的比喻" tabindex="-1"><a class="header-anchor" href="#核心思想-排队的比喻"><span>核心思想：排队的比喻</span></a></h3>
<p>想象一下你在超市、银行或者食堂里排队。</p>
<ul>
<li>规则：后来的人排在队伍的末尾（Rear），队伍最前面的人先接受服务然后离开。</li>
<li>这是一个 “先进先出” 的过程。<br>
队列就是这种“排队”规则的数据抽象。 它模拟了现实世界中公平、有序的等待机制。</li>
</ul>
<hr>
<h3 id="队列的官方定义和操作" tabindex="-1"><a class="header-anchor" href="#队列的官方定义和操作"><span>队列的官方定义和操作</span></a></h3>
<p>队列是一种遵循 FIFO（First In, First Out — 先进先出） 原则的线性数据结构。<br>
它有两个主要的操作位置：</p>
<ul>
<li>队尾（Rear / Back）：允许添加新元素的一端。</li>
<li>队头（Front / Head）：允许移除元素的一端。<br>
主要操作包括：</li>
</ul>
<ol>
<li>Enqueue (入队)：向队列的队尾添加一个元素。（也叫 Add 或 Offer）</li>
<li>Dequeue (出队)：从队列的队头移除并返回一个元素。（也叫 Remove 或 Poll）</li>
<li>Peek / Front (查看队头)：返回队头的元素但不移除它。</li>
<li>isEmpty (判断空)：检查队列是否为空。<br>
这个过程可以用下图直观展示：</li>
</ol>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph Operations [队列的操作流程]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        direction LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        subgraph Queue [队列结构]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            direction LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            F[Front&#x3C;br>队头]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            E1[元素 A]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            E2[元素 B]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            E3[元素 C]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            R[Rear&#x3C;br>队尾]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Enqueue[Enqueue (入队): 新元素加入队尾] --> Dequeue</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Dequeue[Dequeue (出队): 从队头移除元素] --> Peek</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Peek[Peek (查看): 仅查看队头元素] --> IsEmpty</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        IsEmpty[IsEmpty (判空): 检查队列是否为空]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么队列如此重要-它的应用场景" tabindex="-1"><a class="header-anchor" href="#为什么队列如此重要-它的应用场景"><span>为什么队列如此重要？它的应用场景</span></a></h3>
<p>队列的概念简单，但它是构建复杂系统的基础组件。</p>
<h4 id="_1-广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#_1-广度优先搜索-bfs"><span>1. 广度优先搜索（BFS）</span></a></h4>
<p>图或树算法中，BFS 使用队列来确保先访问一层的所有节点，再访问下一层。节点先被访问的先将其邻居入队，这就保证了访问顺序是按层次由近及远的。</p>
<h4 id="_2-操作系统的进程调度" tabindex="-1"><a class="header-anchor" href="#_2-操作系统的进程调度"><span>2. 操作系统的进程调度</span></a></h4>
<p>CPU 使用各种队列算法（如多级反馈队列）来管理等待运行的进程。进程通常被放入一个就绪队列中，按照某种策略（如先来先服务）等待被 CPU 执行。</p>
<h4 id="_3-消息队列-message-queue" tabindex="-1"><a class="header-anchor" href="#_3-消息队列-message-queue"><span>3. 消息队列（Message Queue）</span></a></h4>
<p>在分布式系统或大型应用中，不同组件或服务之间通过消息队列进行异步通信。生产者将消息放入队列，消费者从队列中取出消息进行处理。</p>
<ul>
<li>优点：解耦系统组件、缓冲流量、避免系统被冲垮。</li>
<li>常见技术：Kafka, RabbitMQ, Redis Streams。</li>
</ul>
<h4 id="_4-数据流-data-buffer" tabindex="-1"><a class="header-anchor" href="#_4-数据流-data-buffer"><span>4. 数据流（Data Buffer）</span></a></h4>
<p>当数据生产者和消费者速度不一致时，队列作为一个缓冲区（Buffer），平滑数据流。</p>
<ul>
<li>例如：视频播放器的缓冲。网络下载的视频数据先存入一个队列，播放器再从队列中读取数据进行播放，从而避免因网络波动造成的卡顿。</li>
</ul>
<h4 id="_5-打印机任务管理" tabindex="-1"><a class="header-anchor" href="#_5-打印机任务管理"><span>5. 打印机任务管理</span></a></h4>
<h2 id="发送到打印机的文档会被放入一个队列中-打印机按照-先来先打印-的顺序依次处理它们。" tabindex="-1"><a class="header-anchor" href="#发送到打印机的文档会被放入一个队列中-打印机按照-先来先打印-的顺序依次处理它们。"><span>发送到打印机的文档会被放入一个队列中，打印机按照“先来先打印”的顺序依次处理它们。</span></a></h2>
<h3 id="队列的变体" tabindex="-1"><a class="header-anchor" href="#队列的变体"><span>队列的变体</span></a></h3>
<p>基本的队列有时无法满足复杂需求，因此衍生出几种重要的变体：</p>
<h4 id="_1-双端队列-deque-double-ended-queue" tabindex="-1"><a class="header-anchor" href="#_1-双端队列-deque-double-ended-queue"><span>1. 双端队列（Deque - Double-Ended Queue）</span></a></h4>
<p>允许在队头和队尾两端都进行入队和出队操作。它更加灵活，既可以当队列用，也可以当栈用。</p>
<h4 id="_2-循环队列-circular-queue" tabindex="-1"><a class="header-anchor" href="#_2-循环队列-circular-queue"><span>2. 循环队列（Circular Queue）</span></a></h4>
<p>将普通的数组队列首尾相连，形成一个环。这样可以更高效地利用数组空间，避免“假溢出”（即数组前端有空位但无法使用的情况）。</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 一个非常简单的循环队列概念性示例</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 当指针走到数组末尾后，下一个位置是数组开头 (0)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">index </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (index </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> array_size</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-优先队列-priority-queue" tabindex="-1"><a class="header-anchor" href="#_3-优先队列-priority-queue"><span>3. 优先队列（Priority Queue）</span></a></h4>
<h2 id="出队顺序不再遵循-先进先出-而是遵循优先级最高的元素先出队-例如-急诊病人优先于普通病人-。这通常使用堆-heap-数据结构来实现。" tabindex="-1"><a class="header-anchor" href="#出队顺序不再遵循-先进先出-而是遵循优先级最高的元素先出队-例如-急诊病人优先于普通病人-。这通常使用堆-heap-数据结构来实现。"><span>出队顺序不再遵循“先进先出”，而是遵循优先级最高的元素先出队（例如，急诊病人优先于普通病人）。这通常使用堆（Heap） 数据结构来实现。</span></a></h2>
<h3 id="如何实现一个队列" tabindex="-1"><a class="header-anchor" href="#如何实现一个队列"><span>如何实现一个队列？</span></a></h3>
<p>队列既可以用数组实现，也可以用链表实现。</p>
<ul>
<li>数组实现：需要处理“假溢出”问题，通常采用循环队列的方式。</li>
<li>链表实现：更加直观和灵活。维护两个指针（head 和 tail）分别指向链表的头节点和尾节点。
<ul>
<li>入队：在尾节点后添加新节点，并更新 tail。</li>
<li>出队：移除头节点，并更新 head。<br>
Python 示例（使用 collections.deque）：<br>
在 Python 中，使用 collections.deque（双端队列）来实现普通队列效率非常高。</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> collections </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> deque</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建一个队列</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">q </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> deque</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 入队操作</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">q.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'A'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 队列: ['A']</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">q.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'B'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 队列: ['A', 'B']</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">q.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'C'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 队列: ['A', 'B', 'C']</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 出队操作 (从左边移除)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(q.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">popleft</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 'A'，队列变为: ['B', 'C']</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(q.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">popleft</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 'B'，队列变为: ['C']</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看队头元素</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(q[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 'C'，但不移除它</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 判断队列是否为空</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(q) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># False</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结-5" tabindex="-1"><a class="header-anchor" href="#总结-5"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心原则</td>
<td>FIFO（先进先出）</td>
</tr>
<tr>
<td>主要操作</td>
<td>Enqueue（入队）， Dequeue（出队）， Peek（查看队头）</td>
</tr>
<tr>
<td>时间复杂度</td>
<td>入队和出队操作通常是 O(1)</td>
</tr>
<tr>
<td>关键应用</td>
<td>BFS算法、进程调度、消息队列、数据缓冲</td>
</tr>
<tr>
<td>常见变体</td>
<td>双端队列 (Deque)、循环队列、优先队列</td>
</tr>
<tr>
<td>实现方式</td>
<td>数组（通常是循环数组）或链表</td>
</tr>
</tbody>
</table>
<p>简单来说，队列就是一个遵守“先进先出”规则、元素从队尾进入、从队头离开的线性数据结构。 它是管理顺序和公平性的基础工具，在算法和系统设计中扮演着至关重要的角色。</p>
<h2 id="十、递归-recursion" tabindex="-1"><a class="header-anchor" href="#十、递归-recursion"><span>十、递归（Recursion）</span></a></h2>
<p>这是一个听起来很高大上，但实际上非常直观的核心编程概念。</p>
<h3 id="核心思想-一句话概括" tabindex="-1"><a class="header-anchor" href="#核心思想-一句话概括"><span>核心思想：一句话概括</span></a></h3>
<h2 id="递归就是-在一个函数内部调用自己本身。这就像两面镜子面对面放置-产生的无限镜像效应-或者像俄罗斯套娃-大娃里面套着一个一模一样的小娃。" tabindex="-1"><a class="header-anchor" href="#递归就是-在一个函数内部调用自己本身。这就像两面镜子面对面放置-产生的无限镜像效应-或者像俄罗斯套娃-大娃里面套着一个一模一样的小娃。"><span>递归就是：在一个函数内部调用自己本身。<br>
这就像两面镜子面对面放置，产生的无限镜像效应，或者像俄罗斯套娃，大娃里面套着一个一模一样的小娃。</span></a></h2>
<h3 id="一个生动的比喻-查字典" tabindex="-1"><a class="header-anchor" href="#一个生动的比喻-查字典"><span>一个生动的比喻：查字典</span></a></h3>
<p>假设你想知道一个词（比如“算法”）的意思，字典的解释中可能又包含了一个你不认识的词（比如“计算”），于是你不得不去查“计算”的意思。而“计算”的解释里可能又引用了另一个词（比如“数学”）。<br>
这个过程就是一个递归过程：</p>
<ol>
<li>查“算法” -&gt; 遇到不懂的“计算”</li>
<li>查“计算” -&gt; 遇到不懂的“数学”</li>
<li>查“数学” -&gt; 终于得到了一个明确的、不需要再解释的定义（这是关键！）</li>
<li>你明白了“数学”的意思 -&gt; 从而理解了“计算”</li>
<li>你明白了“计算”的意思 -&gt; 最终理解了“算法”<br>
这里的核心是： 第3步，你遇到了一个无需再递归的简单答案。如果没有这一步，你就会无限地查下去。</li>
</ol>
<hr>
<h3 id="递归的两个必备要素" tabindex="-1"><a class="header-anchor" href="#递归的两个必备要素"><span>递归的两个必备要素</span></a></h3>
<p>一个有效的递归函数必须包含两个部分：</p>
<ol>
<li>基线条件 (Base Case)
<ul>
<li>这是递归的“出口”。它定义了最简单、最直接的情况，在这种情况下，函数不需要再调用自己，而是直接返回一个结果。</li>
<li>没有基线条件的递归会造成无限循环，最终导致栈溢出错误（Stack Overflow）。就像查字典没有尽头一样。</li>
</ul>
</li>
<li>递归条件 (Recursive Case)
<ul>
<li>这是函数调用自身的部分。它将原始问题分解成一个或多个更小的、类似的子问题。</li>
<li>每次递归调用都应该朝着基线条件前进一步。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="经典示例-计算阶乘-factorial" tabindex="-1"><a class="header-anchor" href="#经典示例-计算阶乘-factorial"><span>经典示例：计算阶乘（Factorial）</span></a></h3>
<p>数学中，n!（n的阶乘）表示 n * (n-1) * (n-2) * ... * 1。<br>
我们可以发现一个规律：n! = n * (n-1)!。这就是一个递归定义！<br>
用代码实现：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> factorial</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 1. 基线条件：0的阶乘和1的阶乘都是1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> or</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 2. 递归条件：n的阶乘等于 n * (n-1的阶乘)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> factorial</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 计算 5!</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> factorial</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 返回 5 * 4 * 3 * 2 * 1 = 120</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(result)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们一步步拆解 factorial(5) 的执行过程：</p>
<ol>
<li>factorial(5)：5不是0或1，所以返回 5 * factorial(4)。但要先算出 factorial(4)。</li>
<li>factorial(4)：返回 4 * factorial(3)。但要先算出 factorial(3)。</li>
<li>factorial(3)：返回 3 * factorial(2)。但要先算出 factorial(2)。</li>
<li>factorial(2)：返回 2 * factorial(1)。但要先算出 factorial(1)。</li>
<li>factorial(1)：遇到基线条件！ 直接返回 1。<br>
现在开始“回溯”，将结果返回给上一层：</li>
<li>factorial(2) 拿到了 factorial(1) 的返回值 1，计算 2 * 1 = 2，返回。</li>
<li>factorial(3) 拿到了 2，计算 3 * 2 = 6，返回。</li>
<li>factorial(4) 拿到了 6，计算 4 * 6 = 24，返回。</li>
<li>factorial(5) 拿到了 24，计算 5 * 24 = 120，返回。</li>
<li>最终结果 120 被打印出来。<br>
这个过程完美展示了递归的“递”和“归”。</li>
</ol>
<hr>
<h3 id="递归的优缺点" tabindex="-1"><a class="header-anchor" href="#递归的优缺点"><span>递归的优缺点</span></a></h3>
<table>
<thead>
<tr>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>代码简洁优雅：将复杂问题变得非常清晰易懂。</td>
<td>性能较差：函数调用需要压栈、记录现场，开销比循环大。</td>
</tr>
<tr>
<td>更符合思维模式：许多算法和数据结构（如树、分治、回溯）本质就是递归的，用递归实现更直观。</td>
<td>可能栈溢出：递归深度太大会耗尽系统为栈分配的内存，导致程序崩溃。</td>
</tr>
<tr>
<td></td>
<td>难以调试：跟踪递归的执行流程有时会比较复杂。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="递归的常见应用场景" tabindex="-1"><a class="header-anchor" href="#递归的常见应用场景"><span>递归的常见应用场景</span></a></h3>
<ol>
<li>树和图的遍历：DFS（深度优先搜索）天然就是递归的。</li>
<li>分治算法（Divide and Conquer）：将大问题分解成小问题解决，如归并排序、快速排序。</li>
<li>回溯算法：尝试可能的解决方案，失败则退回上一步，如八皇后问题、数独求解。</li>
<li>定义递归数据结构：链表、树等本身就是用递归概念定义的。操作它们自然常用递归，例如：</li>
</ol>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 计算二叉树的深度</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> tree_depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> node </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 基线条件：空树的深度为0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 递归条件：树的深度 = 1 + 左右子树中深度更大的那个</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        left_depth </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> tree_depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(node.left)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        right_depth </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> tree_depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(node.right)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(left_depth, right_depth)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重要概念-调用栈-call-stack" tabindex="-1"><a class="header-anchor" href="#重要概念-调用栈-call-stack"><span>重要概念：调用栈（Call Stack）</span></a></h3>
<p>理解递归的关键是理解调用栈。每次函数调用时，计算机会将当前函数的上下文（如变量、返回地址）压入一个叫“调用栈”的内存区域。</p>
<ul>
<li>递归的“递”：就是不断调用自身，层层压栈的过程。</li>
<li>递归的“归”：就是遇到基线条件后，层层出栈，返回结果的过程。<br>
如果递归深度太大，调用栈就会被塞满，导致 Stack Overflow 错误。</li>
</ul>
<h3 id="总结-6" tabindex="-1"><a class="header-anchor" href="#总结-6"><span>总结</span></a></h3>
<p>递归是一种通过函数自我调用来解决问题的方法，其核心在于将大问题分解为结构相同的更小问题，并设定一个明确的终止条件（基线条件）。<br>
它是一种强大的编程技巧，虽然有效率高的问题，但在处理许多问题时，其带来的代码清晰度和逻辑简洁性是无可替代的。 当你看到一个问题可以分解为类似的子问题时，就应该考虑使用递归。</p>
<h2 id="十一、回溯算法-backtracking" tabindex="-1"><a class="header-anchor" href="#十一、回溯算法-backtracking"><span>十一、回溯算法（Backtracking）</span></a></h2>
<h3 id="核心思想-走迷宫与试错" tabindex="-1"><a class="header-anchor" href="#核心思想-走迷宫与试错"><span>核心思想：走迷宫与试错</span></a></h3>
<p>想象一下你在走一个复杂的迷宫。</p>
<ol>
<li>尝试路径：你选择一条路一直走下去。</li>
<li>遇到死胡同：发现这条路是死路。</li>
<li>往回走：你后退（回溯） 到最后一个岔路口。</li>
<li>换条路再试：选择一条之前没走过的路，继续尝试。<br>
这种“尝试 -&gt; 失败 -&gt; 回退 -&gt; 再试”的策略，就是回溯算法的核心思想。<br>
它是一种通过试错来寻找所有（或一个）可行解的算法。当它发现当前选择无法得到有效解时，会撤销最近所做的选择（“回溯”），并尝试其他可能性。</li>
</ol>
<hr>
<h3 id="为什么需要回溯" tabindex="-1"><a class="header-anchor" href="#为什么需要回溯"><span>为什么需要回溯？</span></a></h3>
<h2 id="有些问题没有直接的计算公式-解空间很大-需要系统地枚举-尝试-所有可能的情况。暴力枚举效率极低-比如有-n-种可能-回溯算法则是一种更聪明的枚举方式-它会在探索过程中提前剪掉那些-明知不可能-的路径-从而大大提高效率。这个过程也叫-剪枝-就像园丁剪掉枯枝败叶一样-避免在无效路径上浪费时间。" tabindex="-1"><a class="header-anchor" href="#有些问题没有直接的计算公式-解空间很大-需要系统地枚举-尝试-所有可能的情况。暴力枚举效率极低-比如有-n-种可能-回溯算法则是一种更聪明的枚举方式-它会在探索过程中提前剪掉那些-明知不可能-的路径-从而大大提高效率。这个过程也叫-剪枝-就像园丁剪掉枯枝败叶一样-避免在无效路径上浪费时间。"><span>有些问题没有直接的计算公式，解空间很大，需要系统地枚举（尝试）所有可能的情况。暴力枚举效率极低（比如有 $n!$ 种可能），回溯算法则是一种更聪明的枚举方式，它会在探索过程中提前剪掉那些“明知不可能”的路径，从而大大提高效率。<br>
这个过程也叫 “剪枝”，就像园丁剪掉枯枝败叶一样，避免在无效路径上浪费时间。</span></a></h2>
<h3 id="回溯算法的框架" tabindex="-1"><a class="header-anchor" href="#回溯算法的框架"><span>回溯算法的框架</span></a></h3>
<p>回溯算法通常使用递归来实现，其代码结构非常模板化：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> backtrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">路径</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> 选择列表</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 满足结束条件: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 基线条件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        结果集.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(路径) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 得到一个有效解</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 选择 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 选择列表:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 选择 是 无效的: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 剪枝，跳过无效选择</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            continue</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        做选择 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将当前选择加入路径</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">        backtrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(新的路径, 新的选择列表) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 递归</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        撤销选择 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 回溯的关键一步！将当前选择从路径中移除</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最关键的一步是-撤销选择-。这就像在迷宫里往回走-把你最后一步的脚印擦掉-回到上一个岔路口的状态-这样才能尝试另一条路。" tabindex="-1"><a class="header-anchor" href="#最关键的一步是-撤销选择-。这就像在迷宫里往回走-把你最后一步的脚印擦掉-回到上一个岔路口的状态-这样才能尝试另一条路。"><span>最关键的一步是“撤销选择”。这就像在迷宫里往回走，把你最后一步的脚印擦掉，回到上一个岔路口的状态，这样才能尝试另一条路。</span></a></h2>
<h3 id="经典示例-全排列问题" tabindex="-1"><a class="header-anchor" href="#经典示例-全排列问题"><span>经典示例：全排列问题</span></a></h3>
<p>给定一个数字集合 [1, 2, 3]，找出所有可能的排列顺序。<br>
我们可以用回溯法系统地构建所有排列：</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Start("开始: 初始路径[]&#x3C;br>选择列表[1,2,3]") --> Choice1[选择1]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Start --> Choice2[选择2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Start --> Choice3[选择3]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph Path1 [路径分支 1]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Choice1 --> P1["做选择: 路径[1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P1 --> R1["递归: 选择列表[2,3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R1 --> C1_2[选择2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R1 --> C1_3[选择3]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        C1_2 --> P1_2["路径[1,2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P1_2 --> R1_2["递归: 选择列表[3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R1_2 --> P1_2_3["路径[1,2,3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P1_2_3 --> S1["完成 ✅&#x3C;br>添加结果"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P1_2_3 -.-> |撤销选择： pop(3)| U1_2[回溯点]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        C1_3 --> P1_3["路径[1,3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P1_3 --> R1_3["递归: 选择列表[2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R1_3 --> P1_3_2["路径[1,3,2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P1_3_2 --> S2["完成 ✅&#x3C;br>添加结果"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph Path2 [路径分支 2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Choice2 --> P2["做选择: 路径[2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2 --> R2["递归: 选择列表[1,3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R2 --> C2_1[选择1]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R2 --> C2_3[选择3]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        C2_1 --> P2_1["路径[2,1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2_1 --> R2_1["递归: 选择列表[3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R2_1 --> P2_1_3["路径[2,1,3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2_1_3 --> S3["完成 ✅&#x3C;br>添加结果"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        C2_3 --> P2_3["路径[2,3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2_3 --> R2_3["递归: 选择列表[1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R2_3 --> P2_3_1["路径[2,3,1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2_3_1 --> S4["完成 ✅&#x3C;br>添加结果"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph Path3 [路径分支 3]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Choice3 --> P3["做选择: 路径[3]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P3 --> R3["递归: 选择列表[1,2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R3 --> C3_1[选择1]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R3 --> C3_2[选择2]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        C3_1 --> P3_1["路径[3,1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P3_1 --> R3_1["递归: 选择列表[2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R3_1 --> P3_1_2["路径[3,1,2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P3_1_2 --> S5["完成 ✅&#x3C;br>添加结果"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        C3_2 --> P3_2["路径[3,2]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P3_2 --> R3_2["递归: 选择列表[1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        R3_2 --> P3_2_1["路径[3,2,1]"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P3_2_1 --> S6["完成 ✅&#x3C;br>添加结果"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用代码实现上述过程：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> permute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> backtrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> choices</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 基线条件：如果路径长度等于原数组长度，说明一个排列已完成</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(path) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(nums):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            result.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(path[:]) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 添加路径的副本到结果</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(choices)):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            # 做选择：将当前选项加入路径，并从选择列表中移除它</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            path.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(choices[i])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            new_choices </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> choices[:i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> choices[i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建新的选择列表（移除已选项）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            # 递归</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">            backtrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(path, new_choices, result)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            # 撤销选择：回溯的关键！将当前选项从路径中移除，以尝试下一个选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            path.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">    backtrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([], nums, result)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> result</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 测试</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">permute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]))</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="回溯算法的常见应用场景" tabindex="-1"><a class="header-anchor" href="#回溯算法的常见应用场景"><span>回溯算法的常见应用场景</span></a></h3>
<p>回溯算法是解决以下类型问题的利器：</p>
<ol>
<li>排列、组合、子集问题：
<ul>
<li>全排列（LeetCode 46）</li>
<li>组合总和（LeetCode 39）</li>
<li>子集（LeetCode 78）</li>
</ul>
</li>
<li>约束满足问题（CSP）：
<ul>
<li>N皇后问题（LeetCode 51）：在N×N的棋盘上放置N个皇后，使其互不攻击。</li>
<li>数独求解器（LeetCode 37）：填充数独的空格。</li>
<li>正则表达式匹配：复杂的模式匹配。</li>
</ul>
</li>
<li>棋盘类游戏：
<ul>
<li>象棋、围棋、八数码等AI中，会使用回溯来探索可能的走法。</li>
</ul>
</li>
</ol>
<h3 id="回溯-vs-深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#回溯-vs-深度优先搜索-dfs"><span>回溯 vs. 深度优先搜索（DFS）</span></a></h3>
<p>这是一个重要的区别：</p>
<ul>
<li>DFS 是一种遍历算法，用于系统地访问图或树中的每一个节点，目标是要访问所有节点。</li>
<li>回溯 是一种解决问题的算法思想，它使用DFS作为其遍历解空间的方法。但它的目标不是遍历所有节点，而是找到有效的解，并且会通过“剪枝”避免无效的遍历。<br>
可以说，回溯 = DFS + 剪枝。 回溯是一种更“聪明”的DFS。</li>
</ul>
<h3 id="总结-7" tabindex="-1"><a class="header-anchor" href="#总结-7"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心思想</td>
<td>“尝试-回退”，一种改进的暴力枚举法</td>
</tr>
<tr>
<td>实现方式</td>
<td>通常基于递归，配合“选择”与“撤销选择”</td>
</tr>
<tr>
<td>关键步骤</td>
<td>撤销选择，以实现状态回溯</td>
</tr>
<tr>
<td>主要优化</td>
<td>剪枝，提前排除无效路径，提高效率</td>
</tr>
<tr>
<td>本质</td>
<td>在问题的解空间树中，进行深度优先搜索(DFS)并剪枝</td>
</tr>
<tr>
<td>适用问题</td>
<td>需要找出所有或一个可行解的组合优化、决策问题</td>
</tr>
</tbody>
</table>
<p>简单来说，回溯算法就是一种有组织、有系统的“试错”方法，它通过递归探索所有可能性，遇到死路就回退到上一个选择点，从而最终找到所有解决方案。 它是解决许多复杂搜索问题的强大工具。</p>
<h2 id="十二、链表-linked-list" tabindex="-1"><a class="header-anchor" href="#十二、链表-linked-list"><span>十二、链表（Linked List）</span></a></h2>
<p>这是一种非常基础且重要的数据结构，它用一种与数组截然不同的方式来存储和管理数据。</p>
<h3 id="核心思想-寻宝游戏" tabindex="-1"><a class="header-anchor" href="#核心思想-寻宝游戏"><span>核心思想：寻宝游戏</span></a></h3>
<p>想象一个寻宝游戏。你找到了第一张纸条，上面写着：</p>
<ul>
<li>宝藏线索：“你的下一份宝藏藏在客厅的花瓶里。”</li>
<li>地址：（花瓶的位置）<br>
你跑到客厅的花瓶里，找到了第二张纸条：</li>
<li>宝藏线索：“你的下一份宝藏藏在书房的书架第二层。”</li>
<li>地址：（书架的位置）<br>
你就这样一张纸条指向下一张纸条，直到最后一张纸条告诉你：“恭喜，宝藏就在这！”<br>
链表就是这种“一环扣一环”的结构。 每个数据单元不仅存储自己的数据，还存储着下一个单元的位置信息。</li>
</ul>
<hr>
<h3 id="链表的官方定义" tabindex="-1"><a class="header-anchor" href="#链表的官方定义"><span>链表的官方定义</span></a></h3>
<p>链表是一种线性数据结构，其中的元素（称为节点 - Node）并不是在连续的内存空间中紧密相邻的，而是通过指针（Pointer） 连接起来。<br>
每个节点都包含两部分：</p>
<ol>
<li>数据域（Data）：存储实际的数据值。</li>
<li>指针域（Next）：存储下一个节点的内存地址。<br>
整个链表由一个头指针（Head） 来引领，它指向链表的第一个节点。最后一个节点的指针指向 NULL（空），表示这是链表的终点。<br>
这个过程可以用下图直观展示：</li>
</ol>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Head[Head Pointer&#x3C;br>头指针] --> A[Node 1&#x3C;br>数据域: A&#x3C;br>指针域: ➔]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    A --> B[Node 2&#x3C;br>数据域: B&#x3C;br>指针域: ➔]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    B --> C[Node 3&#x3C;br>数据域: C&#x3C;br>指针域: ➔]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    C --> Null[NULL]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么需要链表-与数组的对比" tabindex="-1"><a class="header-anchor" href="#为什么需要链表-与数组的对比"><span>为什么需要链表？与数组的对比</span></a></h3>
<p>数组在内存中是连续存储的，这既是它的优点也是缺点。</p>
<table>
<thead>
<tr>
<th>操作</th>
<th>数组</th>
<th>链表</th>
</tr>
</thead>
<tbody>
<tr>
<td>内存分配</td>
<td>需要一块连续的内存空间</td>
<td>不需要连续空间，节点可以散落在内存各处</td>
</tr>
<tr>
<td>大小调整</td>
<td>固定大小，扩容麻烦（需复制整个数组）</td>
<td>动态大小，可轻松增删节点</td>
</tr>
<tr>
<td>访问元素</td>
<td>O(1) - 通过索引直接计算地址，极快</td>
<td>O(n) - 必须从头开始逐个遍历，直到找到目标</td>
</tr>
<tr>
<td>插入/删除</td>
<td>O(n) - 平均需要移动一半的元素</td>
<td>O(1)/O(n) - 若已知位置，只需修改指针，极快<br>若需查找位置，则需先遍历</td>
</tr>
</tbody>
</table>
<p>简单比喻：</p>
<ul>
<li>数组就像电影院座位。座位是固定的、连续的。找第5排8座很快，但如果你想在中间加一个人，所有人都得往后挪，非常麻烦。</li>
<li>链表就像一队手拉手的小朋友。他们站的位置可以很随意，只要每个人知道下一个人是谁就行。想在中间加一个人很容易，只要让前一个人松开手，拉住新来的人，而新来的人拉住后一个人即可。同样，让一个人离队也很简单。</li>
</ul>
<hr>
<h3 id="链表的常见类型" tabindex="-1"><a class="header-anchor" href="#链表的常见类型"><span>链表的常见类型</span></a></h3>
<ol>
<li>单向链表（Singly Linked List）
<ul>
<li>最基础的形式，每个节点只有一个指针 next，指向下一个节点。</li>
<li>只能从一个方向遍历（从头到尾）。</li>
</ul>
</li>
<li>双向链表（Doubly Linked List）
<ul>
<li>每个节点有两个指针：next 指向下一个节点，prev 指向前一个节点。</li>
<li>可以双向遍历（从头到尾，或从尾到头）。</li>
<li>删除、插入操作更灵活，但需要更多的内存来存储额外的指针。</li>
</ul>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<p>flowchart LR<br>
A[Node<br>Prev: ◀<br>Data: A<br>Next: ➔] &lt;--&gt; B[Node<br>Prev: ◀<br>Data: B<br>Next: ➔]</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>1. 循环链表（Circular Linked List）</span></span>
<span class="line"><span>    - 单向或双向链表的变体，其中尾节点的 next 指针指向头节点，形成一个环。</span></span>
<span class="line"><span>    - 适合需要循环处理数据的场景。</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 链表的基本操作（以单向链表为例）</span></span>
<span class="line"><span>#### 1. 插入节点</span></span>
<span class="line"><span>在指定节点后插入：</span></span>
<span class="line"><span>1. 创建新节点。</span></span>
<span class="line"><span>1. 将新节点的 next 指向原节点指向的节点。</span></span>
<span class="line"><span>1. 将原节点的 next 指向新节点。</span></span>
<span class="line"><span>```mermaid</span></span>
<span class="line"><span>flowchart LR</span></span>
<span class="line"><span>    subgraph After [插入后]</span></span>
<span class="line"><span>        direction LR</span></span>
<span class="line"><span>        A[Node A] --> N[New Node]</span></span>
<span class="line"><span>        N --> B[Node B]</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    subgraph Before [插入前]</span></span>
<span class="line"><span>        direction LR</span></span>
<span class="line"><span>        A_P[Node A] --> B_P[Node B]</span></span>
<span class="line"><span>    end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-删除节点" tabindex="-1"><a class="header-anchor" href="#_2-删除节点"><span>2. 删除节点</span></a></h4>
<p>删除指定节点的后一个节点：</p>
<ol>
<li>找到要删除的节点（B）及其前驱节点（A）。</li>
<li>将 A 的 next 指向 B 的 next（即 C）。</li>
<li>optionally，释放节点 B 的内存。</li>
</ol>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph After [删除后]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        direction LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        A[Node A] --> C[Node C]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph Before [删除前]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        direction LR</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        A_P[Node A] --> B[Node B]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        B --> C_P[Node C]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="链表的应用场景" tabindex="-1"><a class="header-anchor" href="#链表的应用场景"><span>链表的应用场景</span></a></h3>
<p>链表非常适合那些需要频繁插入和删除操作，但随机访问需求不高的场景。</p>
<ol>
<li>实现高级数据结构：
<ul>
<li>栈（Stack） 和 队列（Queue） 经常用链表来实现，因为它们主要在头部或尾部进行增删。</li>
<li>哈希表（Hash Table） 的冲突解决中，常用链表来链地址。</li>
</ul>
</li>
<li>动态内存管理：
<ul>
<li>操作系统的内存管理单元需要维护一个空闲内存块的链表。</li>
</ul>
</li>
<li>浏览器历史记录：
<ul>
<li>双向链表非常适合实现浏览器的“前进”和“后退”功能。每个网页是一个节点，prev 指向上一个页面，next 指向下一个页面。</li>
</ul>
</li>
<li>音乐/视频播放列表：
<ul>
<li>用链表可以轻松实现上一首、下一首的切换。</li>
</ul>
</li>
</ol>
<h3 id="总结-8" tabindex="-1"><a class="header-anchor" href="#总结-8"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心</td>
<td>通过指针连接节点的非连续线性数据结构</td>
</tr>
<tr>
<td>核心组件</td>
<td>节点（数据+指针）、头指针</td>
</tr>
<tr>
<td>主要优点</td>
<td>动态大小，高效插入/删除（尤其已知位置时）</td>
</tr>
<tr>
<td>主要缺点</td>
<td>低效的随机访问（必须遍历），需要额外内存存储指针</td>
</tr>
<tr>
<td>主要类型</td>
<td>单向链表、双向链表、循环链表</td>
</tr>
</tbody>
</table>
<p>简单来说，链表就像一列火车，每节车厢（节点）都装着货物（数据）和连接下一节车厢的挂钩（指针）。 它是一种灵活、动态的数据组织方式，是许多复杂结构和算法的基础。</p>
<h2 id="十三、二叉树-binary-tree" tabindex="-1"><a class="header-anchor" href="#十三、二叉树-binary-tree"><span>十三、二叉树（Binary Tree）</span></a></h2>
<p>这是一种非常重要且基础的非线性数据结构，是许多高级算法和数据结构的基础。</p>
<h3 id="核心思想-家族谱系的比喻" tabindex="-1"><a class="header-anchor" href="#核心思想-家族谱系的比喻"><span>核心思想：家族谱系的比喻</span></a></h3>
<p>想象一个家族谱系：</p>
<ul>
<li>每个人都是一个节点。</li>
<li>最顶层的祖父是根节点。</li>
<li>祖父有两个孩子（比如，父亲和叔叔），这是他的左子节点和右子节点。</li>
<li>父亲又有他的两个孩子（你和你的兄弟）。<br>
这种“一个父节点最多有两个子节点”的层次化结构，就是二叉树的精髓。</li>
</ul>
<hr>
<h3 id="二叉树的官方定义" tabindex="-1"><a class="header-anchor" href="#二叉树的官方定义"><span>二叉树的官方定义</span></a></h3>
<p>二叉树是 n（n≥0）个节点的有限集合。这个集合要么是空的，要么就是由一个根节点和两棵互不相交的、分别称为左子树和右子树的二叉树组成。<br>
这个过程可以用下图直观展示：</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    R[根节点 Root]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    R --> L[左子树 Left Subtree]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    R --> Ri[右子树 Right Subtree]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph L_G [左子树本身也是一棵二叉树]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        L --> L_L[它的左子树]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        L --> L_R[它的右子树]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subgraph R_G [右子树本身也是一棵二叉树]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Ri --> R_L[它的左子树]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Ri --> R_R[它的右子树]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    end</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个定义是递归的，这意味着子树本身也是一棵二叉树。这种递归性质使得用递归算法处理二叉树变得非常自然。</p>
<h3 id="为什么需要二叉树-与线性结构的对比" tabindex="-1"><a class="header-anchor" href="#为什么需要二叉树-与线性结构的对比"><span>为什么需要二叉树？与线性结构的对比</span></a></h3>
<p>数组和链表都是线性结构，数据元素是一个接一个排列的。而二叉树是分层的、非线性的结构。</p>
<table>
<thead>
<tr>
<th>特性</th>
<th>线性结构（数组/链表）</th>
<th>二叉树</th>
</tr>
</thead>
<tbody>
<tr>
<td>逻辑关系</td>
<td>“一对一”</td>
<td>“一对二”（或“一对多”的树）</td>
</tr>
<tr>
<td>访问方式</td>
<td>顺序或随机访问</td>
<td>必须从根开始，按特定路径（路径）访问</td>
</tr>
<tr>
<td>主要优势</td>
<td>访问特定元素快</td>
<td>表示具有层次关系的数据，搜索效率高（特指二叉搜索树）</td>
</tr>
</tbody>
</table>
<p>简单比喻：</p>
<ul>
<li>线性结构就像一条单一的决策路径：“如果A，则B；如果B，则C……”</li>
<li>二叉树就像一个决策树：“如果天气好，就去公园；否则就在家。如果去公园，是骑车还是步行？……” 每个决策点都可能产生两个分支。</li>
</ul>
<hr>
<h3 id="二叉树的重要特性与术语" tabindex="-1"><a class="header-anchor" href="#二叉树的重要特性与术语"><span>二叉树的重要特性与术语</span></a></h3>
<ol>
<li>节点构成：每个节点包含：
<ul>
<li>数据域：存储实际数据。</li>
<li>左指针：指向左子节点。</li>
<li>右指针：指向右子节点。</li>
</ul>
</li>
<li>度（Degree）：一个节点拥有的子节点数。二叉树的节点度 ≤ 2。</li>
<li>叶节点（Leaf）：度为 0 的节点（没有子节点的节点）。</li>
<li>深度（Depth）：从根节点到该节点所经过的边的条数。根节点的深度为 0。</li>
<li>高度（Height）：从该节点到最远的叶节点所经过的边的条数。叶节点的高度为 0。树的高度等于根节点的高度。</li>
<li>层（Level）：节点的深度 + 1。根节点在第 1 层。</li>
</ol>
<hr>
<h3 id="二叉树的常见类型" tabindex="-1"><a class="header-anchor" href="#二叉树的常见类型"><span>二叉树的常见类型</span></a></h3>
<ol>
<li>满二叉树（Full Binary Tree）
<ul>
<li>定义：每一层的节点都达到最大值。或者说，每个节点都有 0 或 2 个子节点。</li>
<li>特点：叶节点只能出现在最下一层。</li>
</ul>
</li>
<li>完全二叉树（Complete Binary Tree）
<ul>
<li>定义：除最后一层外，其他层的节点数都达到最大值，且最后一层的节点都向左对齐。</li>
<li>重要性：堆（Heap）就是一种完全二叉树，因此常用数组来实现，节省指针的空间开销。</li>
</ul>
</li>
<li>二叉搜索树（Binary Search Tree, BST）
<ul>
<li>定义：一种有序的二叉树。对于任意节点：
<ul>
<li>其左子树上所有节点的值都小于它的值。</li>
<li>其右子树上所有节点的值都大于它的值。</li>
</ul>
</li>
<li>重要性：这种结构使得搜索、插入、删除的平均时间复杂度可以达到 O(log n)，效率极高。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="二叉树的遍历-traversal" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历-traversal"><span>二叉树的遍历（Traversal）</span></a></h3>
<p>遍历是指按某种规则访问树中所有节点，且每个节点仅访问一次。主要有四种方式：</p>
<table>
<thead>
<tr>
<th>遍历方式</th>
<th>访问顺序</th>
<th>特点与应用</th>
</tr>
</thead>
<tbody>
<tr>
<td>前序遍历<br>(Preorder)</td>
<td>根 -&gt; 左 -&gt; 右</td>
<td>首先访问根，用于复制整个树的结构</td>
</tr>
<tr>
<td>中序遍历<br>(Inorder)</td>
<td>左 -&gt; 根 -&gt; 右</td>
<td>对BST进行中序遍历，会得到一个有序序列！</td>
</tr>
<tr>
<td>后序遍历<br>(Postorder)</td>
<td>左 -&gt; 右 -&gt; 根</td>
<td>先访问子节点再访问根，用于释放整个树的内存</td>
</tr>
<tr>
<td>层序遍历<br>(Level Order)</td>
<td>从上到下，从左到右</td>
<td>按层次访问，需要借助队列实现</td>
</tr>
</tbody>
</table>
<p>示例（中序遍历）：<br>
对下面这棵BST进行中序遍历：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>      4</span></span>
<span class="line"><span>     / \</span></span>
<span class="line"><span>    2   6</span></span>
<span class="line"><span>   / \ / \</span></span>
<span class="line"><span>  1  3 5  7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问顺序为-1-2-3-4-5-6-7-正好是升序排列-。" tabindex="-1"><a class="header-anchor" href="#访问顺序为-1-2-3-4-5-6-7-正好是升序排列-。"><span>访问顺序为：1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 7（正好是升序排列）。</span></a></h2>
<h3 id="二叉树的应用场景" tabindex="-1"><a class="header-anchor" href="#二叉树的应用场景"><span>二叉树的应用场景</span></a></h3>
<p>二叉树，特别是其变体（如BST、堆），是计算机科学的基石。</p>
<ol>
<li>高效搜索：二叉搜索树（BST） 是很多搜索算法的基础，用于快速查找数据（平均 O(log n)）。</li>
<li>数据库索引：数据库（如MySQL）的索引通常使用 B+树（一种多路平衡搜索树，由二叉树演化而来）来加速数据检索。</li>
<li>优先队列：堆（一种完全二叉树）用于实现优先队列，应用于操作系统进程调度、图算法（如Dijkstra算法）。</li>
<li>表达式求值：编译器中，算术表达式可以表示为一棵二叉树（表达式树），其中叶节点是操作数，内部节点是运算符。通过遍历这棵树可以计算表达式的值。</li>
<li>文件系统：许多文件系统的目录结构就是用树（不仅是二叉树）来表示的。</li>
</ol>
<h3 id="总结-9" tabindex="-1"><a class="header-anchor" href="#总结-9"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心结构</td>
<td>分层、非线性，每个节点最多有两个子节点</td>
</tr>
<tr>
<td>核心概念</td>
<td>根节点、左/右子树、叶节点、深度/高度</td>
</tr>
<tr>
<td>核心类型</td>
<td>二叉搜索树（BST）、满二叉树、完全二叉树、堆</td>
</tr>
<tr>
<td>核心操作</td>
<td>遍历（前序、中序、后序、层序）、插入、删除、搜索</td>
</tr>
<tr>
<td>主要优势</td>
<td>表示层次关系，实现高效搜索和排序（特指BST）</td>
</tr>
</tbody>
</table>
<p>简单来说，二叉树是一种强大的、分层组织数据的方式，它将“分而治之”的思想融入数据结构本身，是通往理解更复杂算法和数据结构的必经之路。</p>
<h2 id="十四、二分查找-binary-search" tabindex="-1"><a class="header-anchor" href="#十四、二分查找-binary-search"><span>十四、二分查找（Binary Search）</span></a></h2>
<p>这是一种非常高效且基础的搜索算法，是“分而治之”思想的经典应用。</p>
<h3 id="核心思想-猜数字游戏" tabindex="-1"><a class="header-anchor" href="#核心思想-猜数字游戏"><span>核心思想：猜数字游戏</span></a></h3>
<p>想象一个经典的猜数字游戏：我心里想一个1到100之间的数字，让你来猜。</p>
<ul>
<li>笨办法（线性查找）：你从1开始猜，然后2，然后3……直到100。最坏情况下你需要猜100次。</li>
<li>聪明办法（二分查找）：你猜50（中间值）。
<ul>
<li>如果我告诉你“大了”，你就知道数字在1-49之间。</li>
<li>然后你猜25（1-49的中间值）。</li>
<li>如果我告诉你“小了”，你就知道数字在26-49之间。</li>
<li>你继续猜中间值……<br>
这样，每次猜测都能排除掉一半的可能性！这就是二分查找的核心思想。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="官方定义与前提条件" tabindex="-1"><a class="header-anchor" href="#官方定义与前提条件"><span>官方定义与前提条件</span></a></h3>
<p>二分查找是一种在有序数组中查找特定元素的算法。<br>
最重要的前提条件：数组必须是有序的（升序或降序）。 如果数组是乱序的，二分查找就无法工作。</p>
<h3 id="算法的工作步骤-以升序数组为例" tabindex="-1"><a class="header-anchor" href="#算法的工作步骤-以升序数组为例"><span>算法的工作步骤（以升序数组为例）</span></a></h3>
<ol>
<li>确定边界：初始化两个指针，low（通常指向数组第一个元素）和 high（通常指向数组最后一个元素）。</li>
<li>循环条件：只要 low 不大于 high，就继续循环。</li>
<li>找中间点：计算中间索引 mid = low + (high - low) // 2（这样写是为了防止 (low + high) 可能出现的整数溢出）。</li>
<li>比较判断：
<ul>
<li>如果 arr[mid] == target：恭喜！找到了，返回 mid。</li>
<li>如果 arr[mid] &lt; target：说明目标值在中间点的右侧。调整 low = mid + 1，在右半部分继续查找。</li>
<li>如果 arr[mid] &gt; target：说明目标值在中间点的左侧。调整 high = mid - 1，在左半部分继续查找。</li>
</ul>
</li>
<li>循环结束：如果 low &gt; high，意味着搜索区间为空，目标值不存在于数组中，返回 -1 或类似表示未找到的值。<br>
这个过程可以用下图直观展示，假设我们要在有序数组 [1, 3, 5, 7, 9, 11, 13, 15] 中查找目标值 7：</li>
</ol>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Start["开始查找&#x3C;br>low=0, high=7"] --> ComputeMid["计算中间点 mid = (0+7)//2 = 3&#x3C;br>arr[3] = 7"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ComputeMid --> Compare{与目标值 7 比较}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Compare -- "相等" --> Found["找到目标！&#x3C;br>返回索引 3 ✅"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Compare -- "大于" --> TooHigh["调整 high = mid - 1"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Compare -- "小于" --> TooLow["调整 low = mid + 1"]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    TooHigh --> ComputeMid</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    TooLow --> ComputeMid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    TooHigh -.->|“示例：如果目标是 5”| Exp1[“arr[3]=7 > 5&#x3C;br>故 high = 3-1 = 2”]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    TooLow -.->|“示例：如果目标是 11”| Exp2[“arr[3]=7 &#x3C; 11&#x3C;br>故 low = 3+1 = 4”]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码实现-迭代版本" tabindex="-1"><a class="header-anchor" href="#代码实现-迭代版本"><span>代码实现（迭代版本）</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> binary_search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">arr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    在有序数组arr中查找target，返回其索引，找不到则返回-1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    """</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    low, high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(arr) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> high:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> low) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 防止溢出，计算中间索引</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> arr[mid] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> target:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> mid </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 找到目标，返回索引</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        elif</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> arr[mid] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> target:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            low </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 目标在右侧，调整左边界</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            high </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> mid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 目标在左侧，调整右边界</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 搜索区间为空，未找到</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 示例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sorted_array </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">13</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">15</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> binary_search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sorted_array, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"目标 7 的索引是: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">result</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> binary_search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sorted_array, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"目标 10 的索引是: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">result</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出 -1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二分查找的威力-时间复杂度" tabindex="-1"><a class="header-anchor" href="#二分查找的威力-时间复杂度"><span>二分查找的威力：时间复杂度</span></a></h3>
<p>二分查找最吸引人的地方在于其极高的效率。</p>
<ul>
<li>时间复杂度：O(log n)
<ul>
<li>这里 log 是以 2 为底的对数。</li>
<li>这意味着什么？ 即使数组非常大，所需的查找步骤也增长得非常缓慢。<br>
震撼的对比：<br>
假设有一个包含 10亿（1,000,000,000） 个元素的有序数组。</li>
</ul>
</li>
<li>线性查找 (O(n))：最坏情况下需要查找 10亿 次。</li>
<li>二分查找 (O(log n))：最坏情况下只需要查找 约30次！
<ul>
<li>(因为 2³⁰ ≈ 1.07 billion)<br>
这种指数级的效率提升是巨大的。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="二分查找的应用场景" tabindex="-1"><a class="header-anchor" href="#二分查找的应用场景"><span>二分查找的应用场景</span></a></h3>
<p>只要数据是有序的，并且需要频繁查找，二分查找就是首选方案。</p>
<ol>
<li>在标准库中查找：编程语言的标准库（如 Python 的 bisect 模块，C++ 的 std::binary_search，Java 的 Arrays.binarySearch()）都提供了二分查找的实现。</li>
<li>数据库索引：数据库使用 B+树 等结构来维护索引，其查找过程就是二分查找思想的扩展，可以快速定位数据。</li>
<li>调试找错：当程序版本不断迭代后出现一个 Bug，可以用二分查找的策略（如 Git bisect）快速定位是哪个提交引入了这个 Bug。</li>
<li>数值计算：用于在单调函数中求解方程的近似解（如求平方根）。</li>
</ol>
<h3 id="总结-10" tabindex="-1"><a class="header-anchor" href="#总结-10"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心思想</td>
<td>“分而治之”，每次比较后都将搜索范围减半</td>
</tr>
<tr>
<td>前提条件</td>
<td>数据必须有序（否则无效）</td>
</tr>
<tr>
<td>时间复杂度</td>
<td>O(log n)，极其高效</td>
</tr>
<tr>
<td>空间复杂度</td>
<td>O(1)，迭代实现只需常数级额外空间</td>
</tr>
<tr>
<td>优势</td>
<td>搜索效率极高，尤其适用于大型数据集</td>
</tr>
<tr>
<td>劣势</td>
<td>要求数据有序，且为数组结构（链表不适用）</td>
</tr>
</tbody>
</table>
<p>简单来说，二分查找就是一种在有序数组中快速寻找目标的“智慧猜拳”策略。 它是每个程序员都必须掌握的基础算法之一。</p>
<h2 id="十五、排序-sorting" tabindex="-1"><a class="header-anchor" href="#十五、排序-sorting"><span>十五、排序（Sorting）</span></a></h2>
<p>这是一个在计算机科学和日常生活中都无处不在的基础概念。</p>
<h3 id="核心思想-整理扑克牌" tabindex="-1"><a class="header-anchor" href="#核心思想-整理扑克牌"><span>核心思想：整理扑克牌</span></a></h3>
<p>想象一下，你手里有一副洗乱了的扑克牌。你现在需要将牌按照从小到大的顺序（比如从A到K，黑桃、红心、梅花、方片）整理好。<br>
你会怎么做？你可能会：</p>
<ol>
<li>找到最小的牌（比如黑桃A），放在最左边。</li>
<li>然后从剩下的牌里再找最小的（比如黑桃2），放在A的右边。</li>
<li>... 如此重复，直到所有牌都排好序。<br>
这个将一堆杂乱无章的数据，按照某种特定的顺序（升序、降序、字母顺序等）重新排列的过程，就是排序。</li>
</ol>
<hr>
<h3 id="为什么排序如此重要" tabindex="-1"><a class="header-anchor" href="#为什么排序如此重要"><span>为什么排序如此重要？</span></a></h3>
<p>排序本身 rarely 是最终目的，但它往往是解决其他问题的关键准备工作。就像图书馆的书籍，如果杂乱无章地堆放，找一本书会非常困难；但如果按照索书号排序，就可以快速定位。<br>
排序的主要目的包括：</p>
<ol>
<li>提高搜索效率：这是排序最重要的价值。在一个有序的数组中，可以使用极其高效的二分查找（Binary Search） 算法，将查找时间从 O(n) 降至 O(log n)。</li>
<li>便于数据处理：很多操作在有序数据上会变得非常简单。
<ul>
<li>快速找到最大值、最小值、中位数。</li>
<li>发现重复项（重复项会相邻排列）。</li>
<li>高效合并多个数据集。</li>
</ul>
</li>
<li>优化其他算法：许多更复杂的算法（如数据库的连接操作、计算机图形学中的算法）都要求输入数据是有序的，否则性能会急剧下降。</li>
<li>提升用户体验：我们几乎每天都受益于排序：购物网站的商品按价格或销量排序、通讯录按姓名排序、邮件按时间排序等。</li>
</ol>
<hr>
<h3 id="常见的排序算法" tabindex="-1"><a class="header-anchor" href="#常见的排序算法"><span>常见的排序算法</span></a></h3>
<p>科学家们发明了各种各样的排序算法，它们在不同的场景下各有优劣。主要可以分为两类：</p>
<h4 id="_1-比较类排序" tabindex="-1"><a class="header-anchor" href="#_1-比较类排序"><span>1. 比较类排序</span></a></h4>
<p>通过比较元素的大小来决定它们的顺序。其平均时间复杂度下限为 O(n log n)。<br>
|算法|基本思想|时间复杂度|特点|<br>
|冒泡排序|重复遍历，比较相邻元素，如果顺序错误就交换，像气泡一样将最大/小的元素“浮”到顶端。|O(n²)|简单但效率极低，几乎仅用于教学。|<br>
|选择排序|每次从未排序部分中选择最小（或最大）的元素，放到已排序部分的末尾。|O(n²)|比冒泡稍好，但依然很慢。|<br>
|插入排序|像打扑克牌时整理手牌一样，将每个新元素插入到已排序序列中的适当位置。|O(n²)|对于小规模或基本有序的数据非常高效。|<br>
|快速排序|分而治之的典范。选一个“基准”，将数组分成“比基准小”和“比基准大”的两部分，递归地对两部分排序。|O(n log n)|应用最广泛的排序算法。平均效率极高，但最坏情况是 O(n²)。|<br>
|归并排序|分而治之的另一典范。将数组递归地分成两半，分别排序后，再将两个有序数组合并成一个。|O(n log n)|效率稳定，总是 O(n log n)，但需要额外的存储空间。|<br>
|堆排序|利用堆这种数据结构的特性，依次从堆顶取出最大/小元素。|O(n log n)|原地排序，不需要额外空间，但不如快排快。|</p>
<h4 id="_2-非比较类排序" tabindex="-1"><a class="header-anchor" href="#_2-非比较类排序"><span>2. 非比较类排序</span></a></h4>
<p>不通过比较来决定元素顺序，而是利用自身的特性。它可以突破 O(n log n) 的下限。</p>
<table>
<thead>
<tr>
<th>算法</th>
<th>基本思想</th>
<th>时间复杂度</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>计数排序</td>
<td>将输入的数据值转化为键存储在额外开辟的数组空间中。要求输入必须是有确定范围的整数。</td>
<td>O(n + k)</td>
<td>非常快，但限制很大（整数、范围小）。</td>
</tr>
<tr>
<td>桶排序</td>
<td>将数据分到有限数量的桶里，每个桶再单独排序（可能使用其他排序算法）。</td>
<td>O(n + k)</td>
<td>是计数排序的泛化，适用于数据均匀分布的情况。</td>
</tr>
<tr>
<td>基数排序</td>
<td>按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。</td>
<td>O(n * k)</td>
<td>适用于整数或字符串排序。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="如何衡量排序算法的优劣" tabindex="-1"><a class="header-anchor" href="#如何衡量排序算法的优劣"><span>如何衡量排序算法的优劣？</span></a></h3>
<p>我们通常用以下几个指标来评价一个排序算法的好坏：</p>
<ol>
<li>时间复杂度：衡量执行速度的快慢。
<ul>
<li>平均情况：对随机顺序的数据排序所需的时间。</li>
<li>最坏情况：对逆序数据排序所需的时间（考验算法的稳定性）。</li>
<li>最好情况：对已有序数据排序所需的时间。</li>
</ul>
</li>
<li>空间复杂度：衡量算法需要消耗的额外内存空间。
<ul>
<li>原地排序：指算法只需要 O(1) 的额外空间（如冒泡、选择、插入、快排、堆排序）。</li>
<li>非原地排序：需要额外的内存空间（如归并排序、计数排序）。</li>
</ul>
</li>
<li>稳定性：
<ul>
<li>如果待排序的序列中，存在值相等的元素，排序后它们的相对顺序保持不变，那么这个算法就是稳定的。</li>
<li>为什么重要？ 例如，先按成绩排序，再按学号排序。如果排序算法稳定，那么相同成绩的学生，其学号依然会保持有序。</li>
</ul>
</li>
</ol>
<h3 id="总结与实践" tabindex="-1"><a class="header-anchor" href="#总结与实践"><span>总结与实践</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心</td>
<td>将数据元素按照某种规则重新排列的过程</td>
</tr>
<tr>
<td>主要目的</td>
<td>为后续操作（尤其是搜索）提供便利，提升效率</td>
</tr>
<tr>
<td>关键指标</td>
<td>时间复杂度、空间复杂度、稳定性</td>
</tr>
<tr>
<td>算法选择</td>
<td>没有一种算法在所有情况下都是最好的。小数据用插入，通用需求用快排，要求稳定用归并，特殊整数用计数/基数。</td>
</tr>
</tbody>
</table>
<p>简单来说，排序就像是为混乱的信息建立索引和秩序，是计算机高效工作的基石。 几乎所有的编程语言的标准库都提供了高度优化的排序函数（如 Python 的 list.sort() 和 sorted()），它们在大多数情况下都会选择最合适的算法（通常是 TimSort，一种混合了归并和插入排序的算法），因此我们很少需要自己实现。<br>
但理解排序背后的思想，对于提升算法思维和解决复杂问题至关重要。</p>
<h2 id="十六、模拟-simulation" tabindex="-1"><a class="header-anchor" href="#十六、模拟-simulation"><span>十六、模拟（Simulation）</span></a></h2>
<h3 id="核心思想-角色扮演" tabindex="-1"><a class="header-anchor" href="#核心思想-角色扮演"><span>核心思想：角色扮演</span></a></h3>
<p>想象一下，你要写一个程序来预测一场台球比赛的结果。你不是去推导复杂的物理公式，而是选择在电脑中“重现”这场比赛：</p>
<ol>
<li>你定义好球桌、球的位置、球的初始速度。</li>
<li>你编写规则：当球A撞到球B时，根据动量守恒和角度计算它们的新速度。</li>
<li>你编写规则：当球撞到边库时，如何反弹。</li>
<li>然后，你让程序一帧一帧地运行，一步步计算每个球的位置，直到所有球都静止。<br>
这个在计算机中建立模型、设定规则、并逐步演绎过程的方法，就是模拟。<br>
它的本质是：放弃寻求一个一步到位的“数学解”，转而通过严格遵循已知规则和流程，一步步计算状态变化，来得到最终结果或中间状态。</li>
</ol>
<hr>
<h3 id="为什么需要模拟" tabindex="-1"><a class="header-anchor" href="#为什么需要模拟"><span>为什么需要模拟？</span></a></h3>
<p>很多问题过于复杂，无法直接推导出一个简单的数学公式或答案。模拟提供了一种更直观、更“暴力”但往往非常有效的解决方案。<br>
适用场景：</p>
<ul>
<li>过程复杂：涉及大量交互和状态变化，比如模拟交通流量、天体运行、化学反应。</li>
<li>规则清晰：虽然整体过程复杂，但每一步的规则都非常明确、可编程。</li>
<li>无需最优解：很多时候只需要一个可行的、符合规则的解决方案，而不是数学上的最优解。</li>
</ul>
<hr>
<h3 id="模拟的特点" tabindex="-1"><a class="header-anchor" href="#模拟的特点"><span>模拟的特点</span></a></h3>
<table>
<thead>
<tr>
<th>特点</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>思路直观</td>
<td>模拟的过程通常就是现实世界过程在计算机中的映射，容易理解和实现。</td>
</tr>
<tr>
<td>细节繁琐</td>
<td>需要处理大量的边界情况和细节，考验编程者的细心和严谨。</td>
</tr>
<tr>
<td>计算量大</td>
<td>通常需要循环迭代很多次，时间复杂度可能较高。</td>
</tr>
<tr>
<td>结果准确</td>
<td>只要规则定义正确，模拟结果就具有很高的可信度和参考价值。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="模拟问题的分类和解决方法" tabindex="-1"><a class="header-anchor" href="#模拟问题的分类和解决方法"><span>模拟问题的分类和解决方法</span></a></h3>
<p>模拟题大致可以分为两类：</p>
<h4 id="_1-流程模拟" tabindex="-1"><a class="header-anchor" href="#_1-流程模拟"><span>1. 流程模拟</span></a></h4>
<p>特点：模拟一个定义好的、按步骤执行的流程。<br>
关键：准确地将流程翻译成代码，处理好每一步的状态转换。<br>
经典例题：约瑟夫环问题</p>
<blockquote>
<p>描述：n个人围成一圈，从第一个人开始报数，数到k的人出列，剩下的人从下一个继续报数，直到所有人出列。求出列顺序。<br>
模拟解法：<br>
1. 用一个数组或链表表示这n个人（初始存活）。<br>
2. 用一个指针表示当前报数的人。<br>
3. 开始循环，直到所有人出列：<br>
- 从当前人开始报数，数到k。<br>
- 将当前对应的人标记为“出列”，并记录顺序。<br>
- 从下一个人开始继续报数。<br>
4. 输出出列顺序。</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> josephus_simulation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> k</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 初始化：0表示存活，1表示出列</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    people </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 存储出列顺序</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    index </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 当前指针位置，从-1开始，因为第一次会+1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 模拟流程，直到所有人都出列</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(result) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 模拟报数：数到k为止</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> k:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            index </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (index </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 环状，取模</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> people[index] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果这个人还存活，才算数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                count </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 数到k的人出列</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        people[index] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        result.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(index </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 记录编号（从1开始）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> result</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 示例：5个人，数到3出列</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">josephus_simulation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出: [3, 1, 5, 2, 4]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-状态模拟" tabindex="-1"><a class="header-anchor" href="#_2-状态模拟"><span>2. 状态模拟</span></a></h4>
<p>特点：关注一个系统随着时间推移而发生的状态变化。<br>
关键：定义好状态，并准确计算每个时间点或事件触发后的新状态。<br>
经典例题：蚂蚁爬杆</p>
<blockquote>
<p>描述：一根长100厘米的木杆上有n只蚂蚁，它们要么向左爬，要么向右爬，速度为1厘米/秒。当两只蚂蚁相遇时，它们会立即掉头。当蚂蚁爬到杆子的端点时，它会掉下去。问所有蚂蚁都掉下去需要多少时间？<br>
“聪明解”：蚂蚁相遇掉头可以看作是“互相穿过”。因此，问题等价于每只蚂蚁独立爬行，所需时间就是它到最近端点距离的最大值。<br>
模拟解法（如果非要模拟）：<br>
1. 定义蚂蚁的数据结构：{位置, 方向}。<br>
2. 以1秒为步长，逐步推进时间。<br>
3. 每一秒：<br>
- 根据方向更新所有蚂蚁的位置。<br>
- 检查是否有蚂蚁掉下杆子，移出模拟。<br>
- 检查是否有蚂蚁相遇（位置相同），让这些相遇的蚂蚁都掉头。<br>
4. 直到没有蚂蚁为止，输出总时间。</p>
</blockquote>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Start[开始模拟] --> Initialize[初始化蚂蚁状态&#x3C;br>位置、方向]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Initialize --> Loop[进入时间循环 T]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Loop --> Update[更新所有蚂蚁位置]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Update --> CheckDrop[检查是否有蚂蚁掉下杆子]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    CheckDrop --> Remove[将掉下的蚂蚁移出模拟]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Remove --> CheckMeet[检查是否有蚂蚁相遇]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    CheckMeet --> Reverse[相遇的蚂蚁掉头]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Reverse --> CheckEnd{是否还有蚂蚁？}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    CheckEnd -- 是 --> NextStep[时间 T+1]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    NextStep --> Loop</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    CheckEnd -- 否 --> Output[输出总时间 T]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Output --> End[结束]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：虽然这道题有更巧妙的数学解法，但模拟解法更能体现“模拟”的思想。在实际编程题中，我们通常追求的是“聪明解”，但模拟是保证你能得到答案的可靠基础。</p>
</blockquote>
<hr>
<h3 id="如何解决模拟题" tabindex="-1"><a class="header-anchor" href="#如何解决模拟题"><span>如何解决模拟题？</span></a></h3>
<ol>
<li>仔细读题：理解所有规则和细节，这是最关键的一步。漏掉一个细节可能全盘皆输。</li>
<li>抽象建模：用合适的数据结构来表示对象和状态（如用数组、链表、字典、队列等）。</li>
<li>流程翻译：将题目描述的自然语言流程，一步步翻译成代码逻辑。</li>
<li>处理边界：特别注意边界条件，如数组越界、时间结束、相遇判断等。</li>
<li>逐步调试：由于逻辑复杂，往往需要逐步输出中间状态来调试代码。</li>
</ol>
<h3 id="总结-11" tabindex="-1"><a class="header-anchor" href="#总结-11"><span>总结</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>核心</td>
<td>在计算机中复现一个过程，通过逐步执行规则来得到结果</td>
</tr>
<tr>
<td>本质</td>
<td>一种编程思想或策略，而不是一种具体的算法</td>
</tr>
<tr>
<td>关键</td>
<td>严谨和细致，需要处理好所有规则和边界条件</td>
</tr>
<tr>
<td>优点</td>
<td>思路直观，能解决复杂且无法直接推导的问题</td>
</tr>
<tr>
<td>缺点</td>
<td>可能效率较低，计算量大</td>
</tr>
<tr>
<td>常见于</td>
<td>编程竞赛、游戏开发（物理引擎、AI）、科学研究、业务流程仿真</td>
</tr>
</tbody>
</table>
<p>简单来说，模拟就是让计算机“扮演”上帝，在一个由你设定的虚拟世界里，严格按照你制定的规则，一步步推演，直到得出最终结果。 它是将复杂现实问题转化为可计算问题的一座重要桥梁。</p>
</div></template>


