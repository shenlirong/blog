<template>
    <div class="markdown_1jK8o " style="">
        <p>在Angular（一个流行的JavaScript框架）中，依赖注入（Dependency
            Injection，简称DI）是一种核心概念，它允许你创建松耦合的代码。依赖注入使得组件或服务能够更容易地被测试和重用。Angular通过其服务容器（Service Container）来管理依赖注入。</p>
        <h3>什么是依赖注入？</h3>
        <p>依赖注入是一种软件设计模式，它允许一个对象（称为客户端）从另一个对象（称为服务）中获取其依赖项，而不是在客户端中创建或实例化这些依赖项。这通常通过在构造函数或其他方法中直接将依赖项作为参数传递来实现。</p>
        <h3>在Angular中使用依赖注入</h3>
        <p>在Angular中，你可以通过几种方式使用依赖注入：</p>
        <ol>
            <li>
                <div class="dqa-li-inner">
                    <p><strong class="ai-core-answer wd-highlight c-fwb-big">构造函数注入</strong>：这是最常见的方式，你在类的构造函数中声明依赖项。
                    </p>
                </div>
            </li>
            <li>
                <div class="dqa-li-inner">
                    <p><strong class="ai-core-answer wd-highlight c-fwb-big">属性注入</strong>：通过在属性前使用<code
                            class="dqa-code-span">@Inject</code>装饰器来注入依赖项。</p>
                </div>
            </li>
            <li>
                <div class="dqa-li-inner">
                    <p><strong class="ai-core-answer wd-highlight c-fwb-big">工厂方法注入</strong>：通过在类中定义一个工厂方法来创建依赖项。</p>
                </div>
            </li>
        </ol>
        <h3>示例：构造函数注入</h3>
        <p>假设你有一个服务<code class="dqa-code-span">UserService</code>，你想在组件<code
                class="dqa-code-span">UserComponent</code>中使用它：</p>
        <pre><code class="language-typescript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="typescript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="10"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="11"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// user.service.ts</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Injectable</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'@angular/core'</span>;</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-meta">@Injectable</span>({</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">providedIn</span>: <span class="hljs-string">'root'</span></div><div class="hljs-ln-line hljs-ln-code">})</div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UserService</span> {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-title function_">getUserData</span>(<span class="hljs-params"></span>) {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-keyword">return</span> <span class="hljs-string">'User Data'</span>;</div><div class="hljs-ln-line hljs-ln-code">  }</div><div class="hljs-ln-line hljs-ln-code">}</div></div></div></code></pre>
        </code></pre>
        <pre><code class="language-typescript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="typescript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="5"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="6"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="7"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="8"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="9"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="10"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="11"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="12"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="13"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="14"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="15"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="16"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-comment">// user.component.ts</span></div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'@angular/core'</span>;</div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">UserService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'./user.service'</span>;</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-meta">@Component</span>({</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">selector</span>: <span class="hljs-string">'app-user'</span>,</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">'./user.component.html'</span>,</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">'./user.component.css'</span>]</div><div class="hljs-ln-line hljs-ln-code">})</div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UserComponent</span> {</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> userService: UserService</span>) { }</div><div class="hljs-ln-line hljs-ln-code"> </div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-title function_">getUserData</span>(<span class="hljs-params"></span>) {</div><div class="hljs-ln-line hljs-ln-code">    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">userService</span>.<span class="hljs-title function_">getUserData</span>();</div><div class="hljs-ln-line hljs-ln-code">  }</div><div class="hljs-ln-line hljs-ln-code">}</div></div></div></code></pre>
        </code></pre>
        <h3>注册服务</h3>
        <p>在Angular中，服务通常通过<code class="dqa-code-span">@Injectable()</code>装饰器注册，并通过<code
                class="dqa-code-span">providedIn</code>属性指定它们是如何被注入的。例如，如果你想让服务在整个应用中全局可用，可以这样设置：</p>
        <pre><code class="language-typescript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="typescript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-meta">@Injectable</span>({</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">providedIn</span>: <span class="hljs-string">'root'</span> <span class="hljs-comment">// 全局单例服务</span></div><div class="hljs-ln-line hljs-ln-code">})</div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UserService</span> { ... }</div></div></div></code></pre>
        </code></pre>
        <p>或者，你可以在特定的模块中提供服务，这样服务就是模块级别的单例：</p>
        <pre><code class="language-typescript"><pre class="dqa-code-pre"><code class="dqa-code-block hljs" md-code-container=""><div disable-copy="" class="code-header"><div class="chat-lang" data-chat-lang="typescript"></div><div class="code-copy" data-module="code-copy"><svg class="copy-icon" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>复制-icon</title><g id="设计输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="画板" class="code-copy-svg" transform="translate(-61.000000, -29.000000)" fill="#1E1F24" fill-rule="nonzero"><g id="复制-icon" transform="translate(61.000000, 29.000000)"><path d="M13.3333333,3.25925926 C14.3151729,3.25925926 15.1111111,4.05519748 15.1111111,5.03703704 L15.1111111,13.3333333 C15.1111111,14.3151729 14.3151729,15.1111111 13.3333333,15.1111111 L5.03703704,15.1111111 C4.05519748,15.1111111 3.25925926,14.3151729 3.25925926,13.3333333 L3.25925926,5.03703704 C3.25925926,4.05519748 4.05519748,3.25925926 5.03703704,3.25925926 L13.3333333,3.25925926 Z M13.3333333,4.44444444 L5.03703704,4.44444444 C4.70975719,4.44444444 4.44444444,4.70975719 4.44444444,5.03703704 L4.44444444,13.3333333 C4.44444444,13.6606132 4.70975719,13.9259259 5.03703704,13.9259259 L13.3333333,13.9259259 C13.6606132,13.9259259 13.9259259,13.6606132 13.9259259,13.3333333 L13.9259259,5.03703704 C13.9259259,4.70975719 13.6606132,4.44444444 13.3333333,4.44444444 Z M11.8531385,0.888888889 L11.8531385,2.07407407 L3.85185185,2.07407407 C2.8700123,2.07407407 2.07407407,2.8700123 2.07407407,3.85185185 L2.07407407,12.1502118 L0.888888889,12.1502118 L0.888888889,3.85185185 C0.888888889,2.21545259 2.21545259,0.888888889 3.85185185,0.888888889 L11.8531385,0.888888889 Z" id="形状结合"></path></g></g></g></svg><span class="code-copy-text" data-code-copy-text="Copy code"></span></div></div><div class="code-wrapper"><div class="left-part"><div class="hljs-ln-line hljs-ln-numbers" data-line-number="1"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="2"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="3"></div><div class="hljs-ln-line hljs-ln-numbers" data-line-number="4"></div></div><div class="right-part" md-code-content=""><div class="hljs-ln-line hljs-ln-code"><span class="hljs-meta">@NgModule</span>({</div><div class="hljs-ln-line hljs-ln-code">  <span class="hljs-attr">providers</span>: [<span class="hljs-title class_">UserService</span>] <span class="hljs-comment">// 模块级别的单例服务</span></div><div class="hljs-ln-line hljs-ln-code">})</div><div class="hljs-ln-line hljs-ln-code"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppModule</span> { }</div></div></div></code></pre>
        </code></pre>
        <h3>总结</h3>
        <p>依赖注入是Angular中实现组件和服务解耦的关键机制。通过正确使用依赖注入，你可以构建出更灵活、更易于测试和维护的应用程序。在Angular中，无论是通过构造函数、属性还是工厂方法注入依赖项，都可以有效地利用这一特性来提高应用的模块化和可维护性。
        </p>
    </div>
</template>

<script setup lang="ts">
let arr=[1,2,3,4]
let arr2=[]
let arr3=[{key:'cn',name:'china'},{key:"us",name:"America"}]
arr.sort()
let a=arr.reduce((pre,cur,index,arr)=>{
    console.log(pre,'pre')
    console.log(cur,'cur')
    return pre +cur
})
const b=arr.includes(1,1)
arr.unshift(0,11)
console.log(arr,'srr')
console.log(arr2)
console.log(a,'a')
console.log(b,'b')
console.log(arr.join('-'))

let sortArr=[{id:1,age:10},{id:3,age:2},{id:4,age:70}].sort((a,b)=>{
    return (b.id - a.id) 
})

console.log(sortArr,'9090')
let obj1={}
arr3.forEach(item=>{
    obj1[item.key]=item.name
})
console.log(obj1,'obj')
 let c=arr3.reduce((total,cur)=>{
    total[cur.key]=cur.name
    console.log(total,999)
    console.log(cur)
    return total
},{})
console.log(c,'c')



const strings = ['apple', 'banana', 'apple', 'origin', 'banana'];
const totals = strings.reduce((total, string) => {
    console.log(total,'1')
    console.log(string,'2')
  total[string] = (total[string] || 0) + 1;
  return total;
}, {}); //
console.log(totals,'totals')
</script>