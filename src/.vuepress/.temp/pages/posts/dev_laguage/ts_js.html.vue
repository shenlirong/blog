<template><div><!-- more -->
<h1 id="typescript-介绍" tabindex="-1"><a class="header-anchor" href="#typescript-介绍"><span>TypeScript 介绍</span></a></h1>
<p>1.typescript 是微软开发的一款开源编程语言，支持 ECMAScript 6 标准；<br>
2.TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法。并在此之上对 JavaScript 添加了一些扩展，如 class / interface / module 等。这样会大大提升代码的可阅读性。<br>
3.最新的 Vue 、React 也可以集成 TypeScript</p>
<h1 id="javascript-与-typescript-的区别" tabindex="-1"><a class="header-anchor" href="#javascript-与-typescript-的区别"><span>JavaScript 与 TypeScript 的区别</span></a></h1>
<p>TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。</p>
<p>TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。</p>
<p>学习链接：<a href="https://www.runoob.com/typescript/ts-install.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/typescript/ts-install.html</a></p>
<h1 id="typescript-安装" tabindex="-1"><a class="header-anchor" href="#typescript-安装"><span>TypeScript 安装</span></a></h1>
<p>cnpm install -g typescript //全局安装<br>
tsc -V 查看版本号</p>
<p>代码编辑<br>
Var message:string=&quot;hello world&quot;;<br>
console.log(message)<br>
//   注：.ts 作为typescript 文件的扩展名<br>
然后执行以下命令将 TypeScript 转换为 JavaScript 代码：<br>
tsc test.ts<br>
ts 文件浏览器本身 无法解析，需要转换成可以解析的 js 文件，就是 对应的 ts -&gt; js 每次需要这么转，很麻烦，所以希望编辑完 ts 文件，能够自动转换成浏览器可以解析的文件，需要以下操作：<br>
1.在项目中 需要 tsc --init // 生成 一个tsconfig.json 文件<br>
2.在vscode 编辑器中，任务-运行任务，监控任务</p>
<p>在VUE 中  创建项目的时候，选择编辑语言为 typescript ，不用考虑能否编辑，vue 创建的时候，已经处理好<br>
编辑完文件，自动形成可解析文件</p>
<h1 id="对象、类、方法" tabindex="-1"><a class="header-anchor" href="#对象、类、方法"><span>对象、类、方法</span></a></h1>
<p>对象：对象是类的实例<br>
类：是描述对象的行为和状态的集合<br>
方法：是类操作的步骤<br>
TypeScript 面向对象编程实例：<br>
class site {<br>
name():void{<br>
console.log('rundob')<br>
}<br>
}<br>
var obj=new site();<br>
<a href="http://obj.name" target="_blank" rel="noopener noreferrer">obj.name</a>();<br>
以上实例定义了一个类 site ，该类有一个方法  name ，该方法输出字符串 rundob<br>
new 关键字创建类的对象 obj，该对象调用方法 name()</p>
<h1 id="基础数据类型" tabindex="-1"><a class="header-anchor" href="#基础数据类型"><span>基础数据类型</span></a></h1>
<table>
<thead>
<tr>
<th style="text-align:left">数据类型</th>
<th style="text-align:right">关键字</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">任意类型</td>
<td style="text-align:right">any</td>
<td style="text-align:center">声明为 any 的变量可以赋予任意类型的值。</td>
</tr>
<tr>
<td style="text-align:left">数字类型</td>
<td style="text-align:right">number</td>
<td style="text-align:center">string	一个字符系列，使用单引号（'）或双引号（&quot;）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式</td>
</tr>
<tr>
<td style="text-align:left">字符串类型</td>
<td style="text-align:right">string</td>
<td style="text-align:center">声明为字符串</td>
</tr>
<tr>
<td style="text-align:left">布尔类型</td>
<td style="text-align:right">boolean</td>
<td style="text-align:center">boolean	表示逻辑值：true 和 false</td>
</tr>
<tr>
<td style="text-align:left">数组类型</td>
<td style="text-align:right">Array</td>
<td style="text-align:center">声明变量为数组</td>
</tr>
<tr>
<td style="text-align:left">枚举</td>
<td style="text-align:right">enum</td>
<td style="text-align:center">枚举类型用于定义数值集合</td>
</tr>
<tr>
<td style="text-align:left">void</td>
<td style="text-align:right">void</td>
<td style="text-align:center">用于标识方法返回值的类型，表示该方法没有返回值</td>
</tr>
<tr>
<td style="text-align:left">null</td>
<td style="text-align:right">null</td>
<td style="text-align:center">表示对象值缺失</td>
</tr>
<tr>
<td style="text-align:left">undefined</td>
<td style="text-align:right">undefined</td>
<td style="text-align:center">用于初始化变量为一个未定义的值</td>
</tr>
<tr>
<td style="text-align:left">never</td>
<td style="text-align:right">never</td>
<td style="text-align:center">是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值</td>
</tr>
</tbody>
</table>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>1.字符串</span></span>
<span class="line"><span>var name:string="hello world"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.数字</span></span>
<span class="line"><span>var num:number=1</span></span>
<span class="line"><span>3.布尔</span></span>
<span class="line"><span>var flag:boolean=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.数组</span></span>
<span class="line"><span>//在元素类型上面加 []            //使用数组泛型</span></span>
<span class="line"><span>var numb:number[]=[1,2]        var arry:Array&#x3C;number>=[1,2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.元组 //属于数组的一种，可以包含数字，字符串</span></span>
<span class="line"><span>var arr:[number,string]=[123,'1234']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.枚举</span></span>
<span class="line"><span>enum color{green,red,blue};</span></span>
<span class="line"><span>var c:color=color.red;</span></span>
<span class="line"><span>console.log(c) // 1 如果标识符没有赋值，它的值是下标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7.null</span></span>
<span class="line"><span>var num:null //空类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8.undefined</span></span>
<span class="line"><span>var name:number //undefined,定义未赋值，就是undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9.never //其他类型，包括（null,undefined）,代表从不会出现的类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10.any</span></span>
<span class="line"><span>var num:any</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11.void</span></span>
<span class="line"><span>function run():void{</span></span>
<span class="line"><span>    //表示方法没有任何返回类型</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="typescript-变量声明" tabindex="-1"><a class="header-anchor" href="#typescript-变量声明"><span>TypeScript 变量声明</span></a></h1>
<p>变量是一种使用方便的占位符，用于引用计算机内存地址，我们可以把变量看做存储数据的容器。<br>
typescript 变量的命名规则：<br>
1.变量名可以包含数字和字母；<br>
2.除了下划线_和美元符号$以外，不能包含其它特殊字符，包括空格；<br>
3.变量名不能以数字开头<br>
变量使用前需要申明，我们可以使用 var 来申明变量；<br>
var [变量名]：[数据类型]=值<br>
如：<br>
var name:string='hello world'<br>
申明变量的类型，没有初始值，变量值会设为 undefined<br>
var name:string;<br>
声明变量并初始值，但不设置类型类型，该变量可以是任意类型：<br>
var name='string'<br>
声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：<br>
var name;</p>
<h1 id="typescript-申明属性的方式" tabindex="-1"><a class="header-anchor" href="#typescript-申明属性的方式"><span>TypeScript 申明属性的方式</span></a></h1>
<pre><code>1.public  // 公共类型
表示可以在这个类里面使用，也可以在这个类外面使用

2.protected //保护类型
只在当前类和它的子类可以使用

3.private //私有
只在当前类才可以使用

注意：不写类型，默认是 public
</code></pre>
<h1 id="typescript-定义函数" tabindex="-1"><a class="header-anchor" href="#typescript-定义函数"><span>TypeScript 定义函数</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>1.函数申明法</span></span>
<span class="line"><span>function run ():string{</span></span>
<span class="line"><span>    return 'run'  //正确写法</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function run ():string{</span></span>
<span class="line"><span>    return 111  //错误写法，返回类型不对</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.匿名函数</span></span>
<span class="line"><span>var run=function():number{</span></span>
<span class="line"><span>    return 1111</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>run ()//调用函数</span></span>
<span class="line"><span>3.定义方法传参</span></span>
<span class="line"><span>function getinfo(name:string,age:number):string{</span></span>
<span class="line"><span>    return name +age</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>alert('zhangsan',30)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var getinfo=function(name:string,age:number):string{</span></span>
<span class="line"><span>    return name+age</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//无返回值</span></span>
<span class="line"><span>function run():void{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>4.可选参数，如果age 存在，返回两者，否则返回name</span></span>
<span class="line"><span>function getinfo(name:string,age?:number):string{</span></span>
<span class="line"><span>    if(age){</span></span>
<span class="line"><span>        return `${name}+${age}`</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        return '${name}'</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>5.默认参数</span></span>
<span class="line"><span>function getinfo(name:string,age:number=20):string{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6.剩余参数</span></span>
<span class="line"><span>function sum(a:number,b:number,c:number):number{</span></span>
<span class="line"><span>    return a+b+c</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>三点运算符接收传过来的参数</span></span>
<span class="line"><span>function sum(...result:number[]):number{</span></span>
<span class="line"><span>   var sum=0;</span></span>
<span class="line"><span>    for(var i=0;i&#x3C;result.length;i++){</span></span>
<span class="line"><span>        sum+=result[i]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sum</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>7.函数的重载</span></span>
<span class="line"><span>函数名相同，传的参数不同</span></span>
<span class="line"><span>function get(name:string):string</span></span>
<span class="line"><span>function get(name:string,age:number):string</span></span>
<span class="line"><span>function get(name:any):any{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8.继承</span></span>
<span class="line"><span>functin run (){</span></span>
<span class="line"><span>    this.name='zhangsan';</span></span>
<span class="line"><span>    this.age=90;</span></span>
<span class="line"><span>    this.getinfo=function(){//实例方法</span></span>
<span class="line"><span>        alert(89898)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>run.prototype.sex='男';//原型链上的属性</span></span>
<span class="line"><span>run.prototype.work=function(){//原型链上的方法</span></span>
<span class="line"><span>    alert('正在工作')</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>9.对象继承</span></span>
<span class="line"><span> function web (){</span></span>
<span class="line"><span>     run.call(this) //实现继承,web 可使用run 的方法，对象冒充继承，只能继承构造函数里的方法和属性，无法继承原型链上的方法</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10.原型链继承  //实例化子类，没发给父类传参</span></span>
<span class="line"><span>原型链实现继承，既可以继承构造函数里面的熟悉和方法，又可以继承原型链上的属性和方法</span></span>
<span class="line"><span>web.prototype=new run ();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11.原型链+构造函数组合的继承</span></span>
<span class="line"><span>funcTion web(name,age){</span></span>
<span class="line"><span>    this.run(this,name,age)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>web.prototype=run.prototype //实现继承</span></span>
<span class="line"><span>12.ts 中类</span></span>
<span class="line"><span>class Person{</span></span>
<span class="line"><span>    name:string //定义属性前面省略了关键字 public</span></span>
<span class="line"><span>    constructor(n:string){//构造函数，实例化类的时候触发</span></span>
<span class="line"><span>        this.name=n</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  getname():string{</span></span>
<span class="line"><span>      return this.name</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   setname(name:string):void{</span></span>
<span class="line"><span>       this.name=name</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>13.ts 中的继承 //关键字 extends、super</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class person{</span></span>
<span class="line"><span>    name:string</span></span>
<span class="line"><span>    constractor(name:string):string{</span></span>
<span class="line"><span>        this.name=name</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class web extends person{</span></span>
<span class="line"><span>    constractor(name:String){</span></span>
<span class="line"><span>        super(name) //实现真正的继承，初始化父类的构造函数</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>类里面的修饰符，typescript 里面定义属性提供三种修饰符</span></span>
<span class="line"><span>public ： 公有属性 ,在类里面，子类，类外面都可以访问</span></span>
<span class="line"><span>protected ：保护， 在类里面，子类可以访问，在类外部无法访问</span></span>
<span class="line"><span>private:   私有 ，在类里面可以访问，子类，类外面无法访问</span></span>
<span class="line"><span>//接口的作用</span></span>
<span class="line"><span>在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，接口定义了某些类所需要准守的规范，接口不关心类的内部状态数据，也不关心这些类的方法实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足某些需求，typescript 接口类似于java ，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等。</span></span>
<span class="line"><span>export {j,k,}// 可以导出多个  import {j,k}        引入</span></span>
<span class="line"><span>export default j // 默认到处，只有一个数据导出，只能用一次    import j   //不需要花括号</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="extends和implements区别" tabindex="-1"><a class="header-anchor" href="#extends和implements区别"><span>extends和implements区别</span></a></h1>
<p>1.extends<br>
（1）在类的声明中通过关键字extends来创建一个类的子类;<br>
（2）extends是继承某个类，继承之后可以使用父类的方法，也可以重写父类的方法;<br>
（3）extends是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承;<br>
（4）JAVA中不支持多重继承，但是可以用接口来实现，这样就要用到implements，继承只能继承一个类;<br>
2.implments<br>
(1)一个类通过关键字implements声明自己使用一个或者多个接口。<br>
(2)implements 是实现多个接口, 接口的方法一般为空的, 必须重写才能使用 ;<br>
(3)JAVA中不支持多重继承，但是可以用接口 来实现，这样就要用到implements，继承只能继承一个类，</p>
<p>但implements可以实现多个接口，用逗号分开就行了 比如 ：</p>
<p>class A extends B implements C,D,E<br>
接口实现的注意点：</p>
<p>a.实现一个接口就是要实现该接口的所有的方法(抽象类除外)。</p>
<p>b.接口中的方法都是抽象的。</p>
<p>c.多个无关的类可以实现同一个接口，一个类可以实现多个无关的接口。</p>
<p>与Extends的不同<br>
extends， 可以实现父类，也可以调用父类初始化 this.parent()。而且会覆盖父类定义的变量或者函数。这样的好处是：架构师定义好接口，让工程师实现就可以了。整个项目开发效率和开发成本大大降低。    implements，实现父类，子类不可以覆盖父类的方法或者变量。即使子类定义与父类相同的变量或者函数，也会被父类取代掉。<br>
这两种实现的具体使用，是要看项目的实际情况，需要实现，不可以修改implements，只定义接口需要具体实现，或者可以被修改扩展性好，用extends。</p>
<h1 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器"><span>装饰器</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>装饰器就是一个方法</span></span>
<span class="line"><span>// 定义一个装饰器</span></span>
<span class="line"><span>function logclass(params:any){</span></span>
<span class="line"><span>  console.log(params)</span></span>
<span class="line"><span>  params 就是当前类</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  params.prototype.apiurl="xxxxx"  // 给这个class 扩展属性</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@logclass // 调用装饰器</span></span>
<span class="line"><span>class person{</span></span>
<span class="line"><span>  constactor(){</span></span>
<span class="line"><span>      // 定义构造函数</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getdata(){</span></span>
<span class="line"><span>      // 定义一个方法</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="包装类" tabindex="-1"><a class="header-anchor" href="#包装类"><span>包装类</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>基础数据类型：string number boolean null undefiend </span></span>
<span class="line"><span>引用数据类型：object</span></span>
<span class="line"><span>在js中为我们提供了三个包装类，通过这个三个类可以将基本数据类型转换成对象</span></span>
<span class="line"><span>三个包装类：</span></span>
<span class="line"><span>String() //将基本数据类型字符串转换成对象</span></span>
<span class="line"><span>Number()</span></span>
<span class="line"><span>Boolean()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="javascript数组" tabindex="-1"><a class="header-anchor" href="#javascript数组"><span>javascript数组</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>数组是一个特殊的变量，数组用于在单一变量中存储多个值，我们通过下标号来引用某个元素。</span></span>
<span class="line"><span>var all=['arr','vol','bmw']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.把数组转换成字符串</span></span>
<span class="line"><span>var fruits=["Banana", "Orange", "Apple", "Mango"];</span></span>
<span class="line"><span>document.getelementbyid('demo').innerhtml=fruits.toString(); //结果 ：Banana，Orange，Apple，Mango</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 学习链接：https://www.w3school.com.cn/js/js_array_methods.asp</span></span>
<span class="line"><span>2.数组方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(1) slice(startIndex, endIndex) // 从已经存在的数组中返回选定的元素</span></span>
<span class="line"><span>    var fruits=["Banana", "Orange", "Apple", "Mango"];</span></span>
<span class="line"><span>    该方法接收两个参数slice(start,end)，strat为必选，表示从第几位开始；end为可选，表示到第几位结束(不包含end位)，省略表示到最后一位；start和end都可以为负数，负数时表示从最后一位开始算起，如-1表示最后一位。</span></span>
<span class="line"><span>   fruits.slice(1,3) //slice()可接受两个参数，当赋予两个参数时，从Start数组元素开始选择元素，直到（但不包括）    end 参数 如：slice(1,3)  结果：Orange Apple</span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2) splice() //向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var fruits = ["Banana", "Orange", "Apple", "Mango"];</span></span>
<span class="line"><span>        fruits.splice(2, 0, "Lemon", "Kiwi");</span></span>
<span class="line"><span>        //结果：Banana，Orange，Lemon，Kiwi，Apple，Mango</span></span>
<span class="line"><span>    第一个参数（2）定义了应添加新元素的位置（拼接）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    第二个参数（0）定义应删除多少元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。</span></span>
<span class="line"><span>  //删除元素</span></span>
<span class="line"><span>    fruits.splice(2, 2, "Lemon", "Kiwi"); //结果：Banana，Orange，Lemon，Kiwi， //删除Apple，Mango</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>   fruits.splice(0,1);   // 删除 fruits 中的第一个元素</span></span>
<span class="line"><span>      //结果 Orange，Apple，Mango</span></span>
<span class="line"><span>    第一个参数（0）定义新元素应该被添加（接入）的位置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    第二个参数（1）定义应该删除多个元素。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    其余参数被省略。没有新元素将被添加。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3)join //  把数组元素，结合成一个字符串</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>   var frusts=["orange","apple","banana","mango"];</span></span>
<span class="line"><span>    var ner=document.getelementbyid('demo').innerhtml=frusts.join('-');</span></span>
<span class="line"><span>    console.log(ner)  //结果：orange-apple-banana-mango</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(4)pop // 从数组中删除最后一个元素</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>     var frusts=["orange","apple","banana","mango"];</span></span>
<span class="line"><span>     frusts.pop()  // 结果：orange，apple，banana</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(5)concat //方法通过合并（连接）现有数组来创建一个新数组：</span></span>
<span class="line"><span>   var myGirls = ["Cecilie", "Lone"];</span></span>
<span class="line"><span>  var myBoys = ["Emil", "Tobias", "Linus"];</span></span>
<span class="line"><span>  var myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(6)shift //方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。</span></span>
<span class="line"><span>   var fruits = ["Banana", "Orange", "Apple", "Mango"];</span></span>
<span class="line"><span>    fruits.shift();  // Orange,Apple,Mango</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(7)unshift //方法（在开头）向数组添加新元素，并“反向位移”旧元素</span></span>
<span class="line"><span>   var fruits = ["Banana", "Orange", "Apple", "Mango"];</span></span>
<span class="line"><span>    fruits.unshift("Lemon");    // 向 fruits 添加新元素 "Lemon"</span></span>
<span class="line"><span>    // 结果 Lemon,Banana,Orange,Apple,Mango</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


