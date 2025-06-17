<template><div><!-- more -->
<h1 id="vue3组件通信方式" tabindex="-1"><a class="header-anchor" href="#vue3组件通信方式"><span>Vue3组件通信方式</span></a></h1>
<p>1.<strong>props</strong>:可以实现父子组件、字父组件、甚至兄弟组件通信<br>
2.<strong>自定义事件</strong>:可以实现子父组件通信<br>
3.<strong>全局事件总线$bus</strong>:可以实现任意组件通信<br>
4.<strong>pubsub</strong>:发布订阅模式实现任意组件通信<br>
5.<strong>vuex</strong>:集中式状态管理容器，实现任意组件通信<br>
6.<strong>ref</strong>:父组件获取子组件实例，获取子组件的响应式数据以及方法<br>
7.<strong>slot</strong>：插槽（默认插槽、具名插槽、作用于插槽）实现父子组件通信</p>
<h3 id="_1-1props" tabindex="-1"><a class="header-anchor" href="#_1-1props"><span>1.1props</span></a></h3>
<p>props可以实现父子组件通信,在vue3中我们可以通过defineProps获取父组件传递的数据。且在组件内部不需要引入defineProps方法可以直接使用！</p>
<p><strong>父组件给子组件传递数据</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;Child info="传递信息" :money="money">&#x3C;/Child></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>子组件获取父组件传递数据:方式1</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>let props = defineProps({</span></span>
<span class="line"><span>  info:{</span></span>
<span class="line"><span>   type:String,//接受的数据类型</span></span>
<span class="line"><span>   default:'默认参数',//接受默认数据</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  money:{</span></span>
<span class="line"><span>   type:Number,</span></span>
<span class="line"><span>   default:0</span></span>
<span class="line"><span>}})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子组件获取父组件传递数据:方式2</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>let props = defineProps(["info",'money']);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>子组件获取到props数据就可以在模板中使用了,但是切记props是只读的(只能读取，不能修改)</p>
<h3 id="_1-2自定义事件" tabindex="-1"><a class="header-anchor" href="#_1-2自定义事件"><span>1.2自定义事件</span></a></h3>
<p>在vue框架中事件分为两种:一种是原生的DOM事件，另外一种自定义事件。</p>
<p>原生DOM事件可以让用户与网页进行交互，比如click、dbclick、change、mouseenter、mouseleave....</p>
<p>自定义事件可以实现子组件给父组件传递数据</p>
<h4 id="_1-2-1原生dom事件" tabindex="-1"><a class="header-anchor" href="#_1-2-1原生dom事件"><span>1.2.1原生DOM事件</span></a></h4>
<p>代码如下:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span> &#x3C;pre @click="handler"></span></span>
<span class="line"><span>      事件名称</span></span>
<span class="line"><span> &#x3C;/pre></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前代码级给pre标签绑定原生DOM事件点击事件,默认会给事件回调注入event事件对象。当然点击事件想注入多个参数可以按照下图操作。但是切记注入的事件对象务必叫做$event.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>  &#x3C;div @click="handler1(1,2,3,$event)">我要传递多个参数&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在vue3框架click、dbclick、change(这类原生DOM事件),不管是在标签、自定义标签上(组件标签)都是原生DOM事件。</p>
<p><strong><!--vue2中却不是这样的,在vue2中组件标签需要通过native修饰符才能变为原生DOM事件--></strong></p>
<h4 id="_1-2-2自定义事件" tabindex="-1"><a class="header-anchor" href="#_1-2-2自定义事件"><span>1.2.2自定义事件</span></a></h4>
<p>自定义事件可以实现子组件给父组件传递数据.在项目中是比较常用的。</p>
<p>比如在父组件内部给子组件(Event2)绑定一个自定义事件</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;Event2  @xxx="handler3">&#x3C;/Event2></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在Event2子组件内部触发这个自定义事件</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;h1>我是子组件2&#x3C;/h1></span></span>
<span class="line"><span>    &#x3C;button @click="handler">点击我触发xxx自定义事件&#x3C;/button></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>let $emit = defineEmits(["xxx"]);</span></span>
<span class="line"><span>const handler = () => {</span></span>
<span class="line"><span>  $emit("xxx", "法拉利", "茅台");</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span>&#x3C;style scoped></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会发现在script标签内部,使用了defineEmits方法，此方法是vue3提供的方法,不需要引入直接使用。defineEmits方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个$emit方法用于触发自定义事件。</p>
<p>当点击按钮的时候，事件回调内部调用$emit方法去触发自定义事件,第一个参数为触发事件类型，第二个、三个、N个参数即为传递给父组件的数据。</p>
<p>需要注意的是:代码如下</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;Event2  @xxx="handler3" @click="handler">&#x3C;/Event2></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>正常说组件标签书写@click应该为原生DOM事件,但是如果子组件内部通过defineEmits定义就变为自定义事件了</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>let $emit = defineEmits(["xxx",'click']);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-3全局事件总线" tabindex="-1"><a class="header-anchor" href="#_1-3全局事件总线"><span>1.3全局事件总线</span></a></h3>
<p>全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线。</p>
<p>但是在vue3中没有Vue构造函数，也就没有Vue.prototype.以及组合式API写法没有this，</p>
<p>那么在Vue3想实现全局事件的总线功能就有点不现实啦，如果想在Vue3中使用全局事件总线功能</p>
<p>可以使用插件mitt实现。</p>
<p><strong>mitt:官网地址:<a href="https://www.npmjs.com/package/mitt" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/mitt</a></strong></p>
<h3 id="_1-4v-model" tabindex="-1"><a class="header-anchor" href="#_1-4v-model"><span>1.4v-model</span></a></h3>
<p>v-model指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。</p>
<p>而v-model实指利用props[modelValue]与自定义事件[update:modelValue]实现的。</p>
<p>下方代码:相当于给组件Child传递一个props(modelValue)与绑定一个自定义事件update:modelValue</p>
<p>实现父子组件数据同步</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;Child v-model="msg">&#x3C;/Child></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在vue3中一个组件可以通过使用多个v-model,让父子组件多个数据同步,下方代码相当于给组件Child传递两个props分别是pageNo与pageSize，以及绑定两个自定义事件update:pageNo与update:pageSize实现父子数据同步</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;Child v-model:pageNo="msg" v-model:pageSize="msg1">&#x3C;/Child></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-5useattrs" tabindex="-1"><a class="header-anchor" href="#_1-5useattrs"><span>1.5useAttrs</span></a></h3>
<p>在Vue3中可以利用useAttrs方法获取组件的属性与事件(包含:原生DOM事件或者自定义事件),次函数功能类似于Vue2框架中$attrs属性与$listeners方法。</p>
<p>比如:在父组件内部使用一个子组件my-button</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;my-button type="success" size="small" title='标题' @click="handler">&#x3C;/my-button></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>子组件内部可以通过useAttrs方法获取组件属性与事件.因此你也发现了，它类似于props,可以接受父组件传递过来的属性与属性值。需要注意如果defineProps接受了某一个属性，useAttrs方法返回的对象身上就没有相应属性与属性值。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import {useAttrs} from 'vue';</span></span>
<span class="line"><span>let $attrs = useAttrs();</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6ref与-parent" tabindex="-1"><a class="header-anchor" href="#_1-6ref与-parent"><span>1.6ref与$parent</span></a></h3>
<p>ref,提及到ref可能会想到它可以获取元素的DOM或者获取子组件实例的VC。既然可以在父组件内部通过ref获取子组件实例VC，那么子组件内部的方法与响应式数据父组件可以使用的。</p>
<p>比如:在父组件挂载完毕获取组件实例</p>
<p>父组件内部代码:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;h1>ref与$parent&#x3C;/h1></span></span>
<span class="line"><span>    &#x3C;Son ref="son">&#x3C;/Son></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import Son from "./Son.vue";</span></span>
<span class="line"><span>import { onMounted, ref } from "vue";</span></span>
<span class="line"><span>const son = ref();</span></span>
<span class="line"><span>onMounted(() => {</span></span>
<span class="line"><span>  console.log(son.value);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过defineExpose对外暴露,因为vue3中组件内部的数据对外“关闭的”，外部不能访问</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import { ref } from "vue";</span></span>
<span class="line"><span>//数据</span></span>
<span class="line"><span>let money = ref(1000);</span></span>
<span class="line"><span>//方法</span></span>
<span class="line"><span>const handler = ()=>{</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  money,</span></span>
<span class="line"><span>   handler</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$parent可以获取某一个组件的父组件实例VC,因此可以使用父组件内部的数据与方法。必须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过defineExpose方法对外暴露</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;button @click="handler($parent)">点击我获取父组件实例&#x3C;/button></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-7provide与inject" tabindex="-1"><a class="header-anchor" href="#_1-7provide与inject"><span>1.7provide与inject</span></a></h3>
<p><strong>provide[提供]</strong></p>
<p><strong>inject[注入]</strong></p>
<p>vue3提供两个方法provide与inject,可以实现隔辈组件传递参数</p>
<p>组件组件提供数据:</p>
<p>provide方法用于提供数据，此方法执需要传递两个参数,分别提供数据的key与提供数据value</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import {provide} from 'vue'</span></span>
<span class="line"><span>provide('token','admin_token');</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后代组件可以通过inject方法获取数据,通过key获取存储的数值</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import {inject} from 'vue'</span></span>
<span class="line"><span>let token = inject('token');</span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8pinia" tabindex="-1"><a class="header-anchor" href="#_1-8pinia"><span>1.8pinia</span></a></h3>
<p><strong>pinia官网:<a href="https://pinia.web3doc.top/" target="_blank" rel="noopener noreferrer">https://pinia.web3doc.top/</a></strong></p>
<p>pinia也是集中式管理状态容器,类似于vuex。但是核心概念没有mutation、modules,使用方式参照官网</p>
<h3 id="_1-9slot" tabindex="-1"><a class="header-anchor" href="#_1-9slot"><span>1.9slot</span></a></h3>
<p>插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信.</p>
<p><strong>默认插槽:</strong></p>
<p>在子组件内部的模板中书写slot全局组件标签</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;slot>&#x3C;/slot></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span>&#x3C;style scoped></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在父组件内部提供结构：Todo即为子组件,在父组件内部使用的时候，在双标签内部书写结构传递给子组件</p>
<p>注意开发项目的时候默认插槽一般只有一个</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;Todo></span></span>
<span class="line"><span>  &#x3C;h1>我是默认插槽填充的结构&#x3C;/h1></span></span>
<span class="line"><span>&#x3C;/Todo></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>具名插槽：</strong></p>
<p>顾名思义，此插槽带有名字在组件内部留多个指定名字的插槽。</p>
<p>下面是一个子组件内部,模板中留两个插槽</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;h1>todo&#x3C;/h1></span></span>
<span class="line"><span>    &#x3C;slot name="a">&#x3C;/slot></span></span>
<span class="line"><span>    &#x3C;slot name="b">&#x3C;/slot></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;style scoped></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件内部向指定的具名插槽传递结构。需要注意v-slot：可以替换为#</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;h1>slot&#x3C;/h1></span></span>
<span class="line"><span>    &#x3C;Todo></span></span>
<span class="line"><span>      &#x3C;template v-slot:a>  //可以用#a替换</span></span>
<span class="line"><span>        &#x3C;div>填入组件A部分的结构&#x3C;/div></span></span>
<span class="line"><span>      &#x3C;/template></span></span>
<span class="line"><span>      &#x3C;template v-slot:b>//可以用#b替换</span></span>
<span class="line"><span>        &#x3C;div>填入组件B部分的结构&#x3C;/div></span></span>
<span class="line"><span>      &#x3C;/template></span></span>
<span class="line"><span>    &#x3C;/Todo></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import Todo from "./Todo.vue";</span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span>&#x3C;style scoped></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作用域插槽</strong></p>
<p>作用域插槽：可以理解为，子组件数据由父组件提供，但是子组件内部决定不了自身结构与外观(样式)</p>
<p>子组件Todo代码如下:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;h1>todo&#x3C;/h1></span></span>
<span class="line"><span>    &#x3C;ul></span></span>
<span class="line"><span>     &#x3C;!--组件内部遍历数组--></span></span>
<span class="line"><span>      &#x3C;li v-for="(item,index) in todos" :key="item.id"></span></span>
<span class="line"><span>         &#x3C;!--作用域插槽将数据回传给父组件--></span></span>
<span class="line"><span>         &#x3C;slot :$row="item" :$index="index">&#x3C;/slot></span></span>
<span class="line"><span>      &#x3C;/li></span></span>
<span class="line"><span>    &#x3C;/ul></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>defineProps(['todos']);//接受父组件传递过来的数据</span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span>&#x3C;style scoped></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件内部代码如下:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;h1>slot&#x3C;/h1></span></span>
<span class="line"><span>    &#x3C;Todo :todos="todos"></span></span>
<span class="line"><span>      &#x3C;template v-slot="{$row,$index}"></span></span>
<span class="line"><span>         &#x3C;!--父组件决定子组件的结构与外观--></span></span>
<span class="line"><span>         &#x3C;span :style="{color:$row.done?'green':'red'}">{{$row.title}}&#x3C;/span></span></span>
<span class="line"><span>      &#x3C;/template></span></span>
<span class="line"><span>    &#x3C;/Todo></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>import Todo from "./Todo.vue";</span></span>
<span class="line"><span>import { ref } from "vue";</span></span>
<span class="line"><span>//父组件内部数据</span></span>
<span class="line"><span>let todos = ref([</span></span>
<span class="line"><span>  { id: 1, title: "吃饭", done: true },</span></span>
<span class="line"><span>  { id: 2, title: "睡觉", done: false },</span></span>
<span class="line"><span>  { id: 3, title: "打豆豆", done: true },</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span>&#x3C;style scoped></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


