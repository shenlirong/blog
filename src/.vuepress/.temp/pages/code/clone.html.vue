<template><div><!-- more -->
<h1 id="深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝与浅拷贝"><span>深拷贝与浅拷贝</span></a></h1>
<p><strong>注释：深拷贝独立内存，浅拷贝共享内存</strong></p>
<p><strong>深拷贝与浅拷贝的核心区别在于内存管理方式‌</strong>：浅拷贝仅复制对象的引用地址，新旧对象共享同一内存空间；深拷贝则递归复制所有层级数据，创建完全独立的内存空间。</p>
<h2 id="_1-内存独立性" tabindex="-1"><a class="header-anchor" href="#_1-内存独立性"><span>1.内存独立性</span></a></h2>
<p>（1）浅拷贝：新旧对象共享内存，修改任意一方会影响另一方属性。‌‌‌‌</p>
<p>（2）深拷贝：新旧对象内存完全隔离，修改互不影响</p>
<h2 id="_2-数据影响机制" tabindex="-1"><a class="header-anchor" href="#_2-数据影响机制"><span>2.数据影响机制</span></a></h2>
<p>（1）当对象包含指针或引用类型时，浅拷贝会导致原对象和拷贝对象中的指针指向同一地址，可能引发指针悬挂问题。‌‌</p>
<p>（2）深拷贝通过逐层复制指针指向的实际数据，彻底消除共享依赖</p>
<h2 id="_3-实现复杂度" tabindex="-1"><a class="header-anchor" href="#_3-实现复杂度"><span>3.实现复杂度</span></a></h2>
<p>（1）浅拷贝只需复制基本数据类型和引用地址，时间复杂度为O(1)</p>
<p>（2）深拷贝需要递归处理所有嵌套对象，时间复杂度通常为O(n)，空间占用更高</p>
<h2 id="_4-使用场景不同" tabindex="-1"><a class="header-anchor" href="#_4-使用场景不同"><span>4.使用场景不同</span></a></h2>
<p><strong>浅拷贝：</strong></p>
<ol>
<li>适用于需要快速创建一个新对象或数组，并且对嵌套的对象或数组的修改不影响原始数据的情况。例如，在函数参数传递中，如果只需要读取对象的属性而不修改它们，可以使用浅拷贝来避免对原始对象的意外修改。</li>
<li>也适用于一些简单的数据结构，或者当性能是主要考虑因素而不需要完全独立的副本时。</li>
</ol>
<p><strong>深拷贝：</strong></p>
<ol>
<li>适用于需要创建一个完全独立的副本，确保原对象的任何修改都不会影响新对象的情况。例如，在数据持久化、对象克隆或需要对数据进行独立操作而不影响原始数据的场景中，深拷贝是更好的选择。</li>
</ol>
<h2 id="_5-实现方式不同" tabindex="-1"><a class="header-anchor" href="#_5-实现方式不同"><span>5.实现方式不同</span></a></h2>
<p><strong>（1）浅拷贝</strong><br>
<strong>可以使用展开运算符、Object.assign()方法或者手动复制属性的方式实现：</strong><br>
<strong>使用展开运算符:</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>   const oldObject={name:'小号',age:30,hobbies:['reading','coding']}</span></span>
<span class="line"><span>   const newOldObject={...oldObject}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在这个例子中，使用展开运算符创建了一个新的对象newObject，它包含了与oldObject 相同的属性。但是，如果修改 <a href="http://oldObject.name" target="_blank" rel="noopener noreferrer">oldObject.name</a>,newOldObject.name也会收到影像</strong></p>
<p><strong>使用Object.assign()方法:</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>   const oldObject={name:'小号',age:30,hobbies:['reading','coding']}</span></span>
<span class="line"><span>   const newOldObject=Object.assign({},oldObject)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Object.assign()方法将源对象的所有可枚举属性复制到目标对象，并返回目标对象。同样，如果修改oldObject.hobbies，newObject.hobbies也会收到影响</strong></p>
<p><strong>（2）深拷贝</strong><br>
<strong>可以使用JSON.parse(JSON.stringify())、、递归函数或借助第三方库（如 lodash的cloneDeep()方法 实现：</strong><br>
<strong>使用JSON.parse(JSON.stringify()):</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>   const oldObject={name:'小号',age:30,hobbies:['reading','coding']}</span></span>
<span class="line"><span>   const newOldObject=JSON.parse(JSON.stringify(oldObject))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这个方法将对象转换为JSON 字符串，然后再将 JSON 字符串转换回对象。这样可以创建一个完全独立的副本。但是，这个方法有一些限制，例如它不能处理函数、正则表达式、日期对象等特殊类型的值。</strong></p>
<p><strong>使用JS库:</strong><br>
有一些 JavaScript 库提供了深拷贝的功能，例如 lodash的cloneDeep()方法</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>   const _=require('lodash')</span></span>
<span class="line"><span>   const oldObject={name:'小号',age:30,hobbies:['reading','coding']}</span></span>
<span class="line"><span>   const newOldObject=_.cloneDeep(oldObject)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用库可以简化深拷贝的实现，并且通常提供了更好的性能和更多的功能。但是，引入库可能会增加项目的体积和复杂性。</strong></p>
</div></template>


