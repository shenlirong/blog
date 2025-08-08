<template><div><!-- more -->
<h1 id="vue与angular以及react的区别" tabindex="-1"><a class="header-anchor" href="#vue与angular以及react的区别"><span>vue与angular以及react的区别</span></a></h1>
<diffAngularVue></diffAngularVue><h2 id="vue的双向绑定的原理-和angular的对比" tabindex="-1"><a class="header-anchor" href="#vue的双向绑定的原理-和angular的对比"><span>vue的双向绑定的原理，和angular的对比</span></a></h2>
<ul>
<li><strong>效率:</strong> 虽然Vue和Angular的双向绑定原理不同，但它们都致力于提供高效的数据更新机制。但是，由于Vue使用的是数据劫持，其效率通常比Angular的脏值检查更高。</li>
<li><strong>灵活性:</strong> Vue和Angular都为开发者提供了灵活的双向绑定选项，但Vue的API通常更为简洁。</li>
<li><strong>兼容性:</strong> Vue的数据劫持基于Object.defineProperty()，这意味着它可能不支持某些旧版浏览器。而Angular的脏值检查不受此限制。</li>
</ul>
<p >第一张图片展示了Vue的双向绑定机制。基于Object.defineProperty的数据劫持以及发布者-订阅者模式，当数据发生变化时，Vue能够自动更新视图，并且当视图发生变化时，也能自动更新数据。</p>
<p >第二张图片描绘了Angular的双向绑定机制。基于脏值检查，当数据模型中的数据发生变化时，Angular会遍历整个数据模型，查找并更新发生变化的数据，从而实现视图的自动更新。</p>
<p><strong>以下是双向数据绑定的几个关键点</strong></p>
<ul>
<li><strong>自动性：</strong> 开发者不需要手动更新视图或数据模型，框架会自动处理这些操作。</li>
<li><strong>实时性：</strong> 当数据模型发生变化时，视图的更新几乎是实时的，反之亦然。</li>
<li><strong>简化开发：</strong> 双向数据绑定可以大大简化前端开发的复杂性，因为开发者不再需要手动同步数据和视图。</li>
</ul>
<p><strong>如何实现？</strong></p>
<ul>
<li><strong>Vue.js:</strong> Vue使用v-model指令实现双向绑定。它的原理主要基于Object.defineProperty()，通过这个方法，Vue可以劫持对象的属性，从而监听数据的变化。</li>
<li><strong>Angular:</strong> Angular使用[(ngModel)]指令实现双向绑定。它的原理是基于脏检查机制，当数据模型发生变化时，Angular会遍历整个数据模型来查找变化。</li>
</ul>
<h2 id="vue的双向绑定原理" tabindex="-1"><a class="header-anchor" href="#vue的双向绑定原理"><span>Vue的双向绑定原理</span></a></h2>
<p><strong>Vue的双向绑定原理主要</strong> 基于Object.defineProperty()方法，通过这个方法，Vue能够拦截对象属性的读写操作，从而实现数据劫持。同时，Vue还使用了发布者-订阅者模式，当数据发生变化时，会通知所有订阅了该数据的订阅者，使其进行更新。</p>
<h2 id="angular的双向绑定原理" tabindex="-1"><a class="header-anchor" href="#angular的双向绑定原理"><span>Angular的双向绑定原理</span></a></h2>
<p><strong>Angular的双向绑定原理基于其核心特性——脏值检查。</strong> 当应用中的某个数据模型发生改变时，Angular会检查整个数据模型，查找所有发生变化的数据，并更新相应的视图。这与Vue的数据劫持机制有所不同。</p>
<p><strong>效率：虽然Vue和Angular的双向绑定原理不同，但它们都致力于提供高效的数据更新机制。但是，由于Vue使用的是数据劫持，其效率通常比Angular脏值检查更高。</strong></p>
<p><strong>灵活性：虽然Vue和Angular都为开发者提供了灵活的双向绑定选项，但Vue的API通常为更简洁。</strong></p>
<p><strong>兼容性：Vue的数据劫持基于Object.defineProperty()，这意味着它不支持某些旧的浏览器，而Angular的脏值检查不受此限制。</strong></p>
<h2 id="【angular】-指令详解" tabindex="-1"><a class="header-anchor" href="#【angular】-指令详解"><span>【Angular】 指令详解</span></a></h2>
<p>原文：<a href="https://blog.csdn.net/u013675821/article/details/144092206" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/u013675821/article/details/144092206</a></p>
<h2 id="angular常用的生命周期" tabindex="-1"><a class="header-anchor" href="#angular常用的生命周期"><span>angular常用的生命周期</span></a></h2>
<angularLife></angularLife><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><strong>生命周期钩子</strong>：每个组件都有被Angular管理的生命周期，angular 创建组件、渲染组件，在绑定的属性发生变化时检测，在DOM中被移除前销毁。<br>
<strong>理解</strong>：如果angular创建了组件，那么就有对应的生命周期，如下为一个组件所拥有的全部生命周期钩子，并且每个钩子按照顺序在相应的时间内调用。<br>
<strong>ngOnChanges()</strong>：当绑定的属性值发生变化时调用，在ngOnInit之前调用。主要在父子组件传值中调用。<br>
<strong>ngngOnInit()</strong>:在组件渲染到界面时调用，初始化组件，只调用一次。一般做请求数据的时候使用。<br>
<strong>ngDoCheck()</strong> 检测变化，在每个 Angular 变更检测周期中调用。<br>
<strong>ngAfterContentInit()</strong> 当把内容投影进组件之后调用，只调用一次。<br>
<strong>ngAfterContentChecked()</strong> 每次完成被投影组件内容的变更检测之后调用。<br>
<strong>ngAfterViewInit()</strong>，视图操作，DOM节点操作。<br>
<strong>ngAfterViewChecked()</strong> 每次做完组件视图和子视图的变更检测之后调用。<br>
<strong>ngOnDestroy()</strong>: 组件不挂在时触发，同时执行切换到其它组件的生命钩子。</p>
</div>
<h2 id="vue-3-中的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#vue-3-中的生命周期钩子"><span>Vue 3 中的生命周期钩子</span></a></h2>
<p>原文：<a href="https://blog.csdn.net/io_123io_123/article/details/147934777" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/io_123io_123/article/details/147934777</a><br>
Vue 3引入了setup()函数作为Composition API的一部分，这是定义组件逻辑的主要方式。在setup()函数中，可以使用一系列的生命周期钩子函数。</p>
<p>onBeforeMount() - 在组件的元素被挂载到DOM之前调用。</p>
<p>onMounted() - 在组件的元素被挂载到DOM后调用。</p>
<p>onBeforeUpdate() - 在组件的DOM被更新之前调用。</p>
<p>onUpdated() - 在组件的DOM被更新后调用。</p>
<p>onBeforeUnmount() - 在组件卸载（销毁）之前调用。</p>
<p>onUnmounted() - 在组件卸载（销毁）后调用。</p>
<p>onErrorCaptured() - 当捕获一个来自子孙组件的错误时调用。</p>
</div></template>


