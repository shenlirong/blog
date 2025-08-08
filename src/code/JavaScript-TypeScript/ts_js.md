---
icon: pen-to-square
# date: 2024-01-01
sticky: 99
# category:
#   - TypeScript
# tag:
#   - TypeScript
#   - 前端开发

---

<!-- more -->
# TypeScript 介绍
1.typescript 是微软开发的一款开源编程语言，支持 ECMAScript 6 标准；
2.TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法。并在此之上对 JavaScript 添加了一些扩展，如 class / interface / module 等。这样会大大提升代码的可阅读性。
3.最新的 Vue 、React 也可以集成 TypeScript

# JavaScript 与 TypeScript 的区别
TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。


# TypeScript 安装
cnpm install -g typescript //全局安装
tsc -V 查看版本号

代码编辑
Var message:string="hello world";
console.log(message)
//   注：.ts 作为typescript 文件的扩展名
然后执行以下命令将 TypeScript 转换为 JavaScript 代码：
tsc test.ts
ts 文件浏览器本身 无法解析，需要转换成可以解析的 js 文件，就是 对应的 ts -> js 每次需要这么转，很麻烦，所以希望编辑完 ts 文件，能够自动转换成浏览器可以解析的文件，需要以下操作：
1.在项目中 需要 tsc --init // 生成 一个tsconfig.json 文件
2.在vscode 编辑器中，任务-运行任务，监控任务

在VUE 中  创建项目的时候，选择编辑语言为 typescript ，不用考虑能否编辑，vue 创建的时候，已经处理好
编辑完文件，自动形成可解析文件

# 对象、类、方法
 对象：对象是类的实例
类：是描述对象的行为和状态的集合
方法：是类操作的步骤
TypeScript 面向对象编程实例：
class site {
    name():void{
        console.log('rundob')
    }
}
var obj=new site();
    obj.name();
以上实例定义了一个类 site ，该类有一个方法  name ，该方法输出字符串 rundob
new 关键字创建类的对象 obj，该对象调用方法 name()

# 基础数据类型

| 数据类型 | 关键字 | 描述 |
| :-----| ----: | :----: |
| 任意类型 | any | 声明为 any 的变量可以赋予任意类型的值。 |
| 数字类型 | number | string	一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式 |
| 字符串类型 | string | 声明为字符串 |
| 布尔类型 | boolean | boolean	表示逻辑值：true 和 false |
| 数组类型 | Array | 声明变量为数组 |
| 枚举 | enum | 枚举类型用于定义数值集合 |
| void | void | 用于标识方法返回值的类型，表示该方法没有返回值 |
| null | null | 表示对象值缺失 |
| undefined |undefined  | 用于初始化变量为一个未定义的值 |
| never | never | 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值 |

```
1.字符串
var name:string="hello world"

2.数字
var num:number=1
3.布尔
var flag:boolean=true

4.数组
//在元素类型上面加 []            //使用数组泛型
var numb:number[]=[1,2]        var arry:Array<number>=[1,2]

5.元组 //属于数组的一种，可以包含数字，字符串
var arr:[number,string]=[123,'1234']

6.枚举
enum color{green,red,blue};
var c:color=color.red;
console.log(c) // 1 如果标识符没有赋值，它的值是下标

7.null
var num:null //空类型

8.undefined
var name:number //undefined,定义未赋值，就是undefined

9.never //其他类型，包括（null,undefined）,代表从不会出现的类型

10.any
var num:any

11.void
function run():void{
    //表示方法没有任何返回类型
}
```
# TypeScript 变量声明
变量是一种使用方便的占位符，用于引用计算机内存地址，我们可以把变量看做存储数据的容器。
typescript 变量的命名规则：
1.变量名可以包含数字和字母；
2.除了下划线_和美元符号$以外，不能包含其它特殊字符，包括空格；
3.变量名不能以数字开头
变量使用前需要申明，我们可以使用 var 来申明变量；
var [变量名]：[数据类型]=值
如：
var name:string='hello world'
申明变量的类型，没有初始值，变量值会设为 undefined
  var name:string;
声明变量并初始值，但不设置类型类型，该变量可以是任意类型：
  var name='string'
声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
  var name;
# TypeScript 申明属性的方式
    1.public  // 公共类型
    表示可以在这个类里面使用，也可以在这个类外面使用

    2.protected //保护类型
    只在当前类和它的子类可以使用

    3.private //私有
    只在当前类才可以使用

    注意：不写类型，默认是 public
# TypeScript 定义函数
```
1.函数申明法
function run ():string{
    return 'run'  //正确写法
}
function run ():string{
    return 111  //错误写法，返回类型不对
}

2.匿名函数
var run=function():number{
    return 1111
}
run ()//调用函数
3.定义方法传参
function getinfo(name:string,age:number):string{
    return name +age
}
alert('zhangsan',30)

var getinfo=function(name:string,age:number):string{
    return name+age
}
//无返回值
function run():void{
    
}
4.可选参数，如果age 存在，返回两者，否则返回name
function getinfo(name:string,age?:number):string{
    if(age){
        return `${name}+${age}`
    }else{
        return '${name}'
    }
}
5.默认参数
function getinfo(name:string,age:number=20):string{
    
}

6.剩余参数
function sum(a:number,b:number,c:number):number{
    return a+b+c
}
三点运算符接收传过来的参数
function sum(...result:number[]):number{
   var sum=0;
    for(var i=0;i<result.length;i++){
        sum+=result[i]
    }
    return sum
}
7.函数的重载
函数名相同，传的参数不同
function get(name:string):string
function get(name:string,age:number):string
function get(name:any):any{
    
}

8.继承
functin run (){
    this.name='zhangsan';
    this.age=90;
    this.getinfo=function(){//实例方法
        alert(89898)
    }
}
run.prototype.sex='男';//原型链上的属性
run.prototype.work=function(){//原型链上的方法
    alert('正在工作')
}
9.对象继承
 function web (){
     run.call(this) //实现继承,web 可使用run 的方法，对象冒充继承，只能继承构造函数里的方法和属性，无法继承原型链上的方法
 }

10.原型链继承  //实例化子类，没发给父类传参
原型链实现继承，既可以继承构造函数里面的熟悉和方法，又可以继承原型链上的属性和方法
web.prototype=new run ();

11.原型链+构造函数组合的继承
funcTion web(name,age){
    this.run(this,name,age)
}
或者
web.prototype=run.prototype //实现继承
12.ts 中类
class Person{
    name:string //定义属性前面省略了关键字 public
    constructor(n:string){//构造函数，实例化类的时候触发
        this.name=n
    }
  getname():string{
      return this.name
  }
   setname(name:string):void{
       this.name=name
   }
}
13.ts 中的继承 //关键字 extends、super

class person{
    name:string
    constractor(name:string):string{
        this.name=name
    }
}

class web extends person{
    constractor(name:String){
        super(name) //实现真正的继承，初始化父类的构造函数
    }
}

类里面的修饰符，typescript 里面定义属性提供三种修饰符
public ： 公有属性 ,在类里面，子类，类外面都可以访问
protected ：保护， 在类里面，子类可以访问，在类外部无法访问
private:   私有 ，在类里面可以访问，子类，类外面无法访问
//接口的作用
在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，接口定义了某些类所需要准守的规范，接口不关心类的内部状态数据，也不关心这些类的方法实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足某些需求，typescript 接口类似于java ，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等。
export {j,k,}// 可以导出多个  import {j,k}        引入
export default j // 默认到处，只有一个数据导出，只能用一次    import j   //不需要花括号
```
# extends和implements区别
1.extends
（1）在类的声明中通过关键字extends来创建一个类的子类;
（2）extends是继承某个类，继承之后可以使用父类的方法，也可以重写父类的方法;
（3）extends是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承;
（4）JAVA中不支持多重继承，但是可以用接口来实现，这样就要用到implements，继承只能继承一个类;
2.implments
(1)一个类通过关键字implements声明自己使用一个或者多个接口。 
(2)implements 是实现多个接口, 接口的方法一般为空的, 必须重写才能使用 ;
(3)JAVA中不支持多重继承，但是可以用接口 来实现，这样就要用到implements，继承只能继承一个类，

但implements可以实现多个接口，用逗号分开就行了 比如 ：

class A extends B implements C,D,E
接口实现的注意点：

a.实现一个接口就是要实现该接口的所有的方法(抽象类除外)。 

b.接口中的方法都是抽象的。

c.多个无关的类可以实现同一个接口，一个类可以实现多个无关的接口。

与Extends的不同 
  extends， 可以实现父类，也可以调用父类初始化 this.parent()。而且会覆盖父类定义的变量或者函数。这样的好处是：架构师定义好接口，让工程师实现就可以了。整个项目开发效率和开发成本大大降低。    implements，实现父类，子类不可以覆盖父类的方法或者变量。即使子类定义与父类相同的变量或者函数，也会被父类取代掉。  
  这两种实现的具体使用，是要看项目的实际情况，需要实现，不可以修改implements，只定义接口需要具体实现，或者可以被修改扩展性好，用extends。
  # 装饰器
  ```
  装饰器就是一个方法
// 定义一个装饰器
function logclass(params:any){
    console.log(params)
    params 就是当前类
    
    params.prototype.apiurl="xxxxx"  // 给这个class 扩展属性
}
@logclass // 调用装饰器
class person{
    constactor(){
        // 定义构造函数
    }
    getdata(){
        // 定义一个方法
    }
}
```
# 包装类
```
基础数据类型：string number boolean null undefiend 
引用数据类型：object
在js中为我们提供了三个包装类，通过这个三个类可以将基本数据类型转换成对象
三个包装类：
String() //将基本数据类型字符串转换成对象
Number()
Boolean()
```
# javascript数组
```
数组是一个特殊的变量，数组用于在单一变量中存储多个值，我们通过下标号来引用某个元素。
var all=['arr','vol','bmw']

1.把数组转换成字符串
var fruits=["Banana", "Orange", "Apple", "Mango"];
document.getelementbyid('demo').innerhtml=fruits.toString(); //结果 ：Banana，Orange，Apple，Mango


2.数组方法

(1) slice(startIndex, endIndex) // 从已经存在的数组中返回选定的元素
    var fruits=["Banana", "Orange", "Apple", "Mango"];
    该方法接收两个参数slice(start,end)，strat为必选，表示从第几位开始；end为可选，表示到第几位结束(不包含end位)，省略表示到最后一位；start和end都可以为负数，负数时表示从最后一位开始算起，如-1表示最后一位。
   fruits.slice(1,3) //slice()可接受两个参数，当赋予两个参数时，从Start数组元素开始选择元素，直到（但不包括）    end 参数 如：slice(1,3)  结果：Orange Apple
 

(2) splice() //向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(2, 0, "Lemon", "Kiwi");
        //结果：Banana，Orange，Lemon，Kiwi，Apple，Mango
    第一个参数（2）定义了应添加新元素的位置（拼接）。

    第二个参数（0）定义应删除多少元素。

    其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。
  //删除元素
    fruits.splice(2, 2, "Lemon", "Kiwi"); //结果：Banana，Orange，Lemon，Kiwi， //删除Apple，Mango
  
   fruits.splice(0,1);   // 删除 fruits 中的第一个元素
      //结果 Orange，Apple，Mango
    第一个参数（0）定义新元素应该被添加（接入）的位置。

    第二个参数（1）定义应该删除多个元素。

    其余参数被省略。没有新元素将被添加。

(3)join //  把数组元素，结合成一个字符串
 
   var frusts=["orange","apple","banana","mango"];
    var ner=document.getelementbyid('demo').innerhtml=frusts.join('-');
    console.log(ner)  //结果：orange-apple-banana-mango

(4)pop // 从数组中删除最后一个元素
   
     var frusts=["orange","apple","banana","mango"];
     frusts.pop()  // 结果：orange，apple，banana

(5)concat //方法通过合并（连接）现有数组来创建一个新数组：
   var myGirls = ["Cecilie", "Lone"];
  var myBoys = ["Emil", "Tobias", "Linus"];
  var myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys

(6)shift //方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。
   var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();  // Orange,Apple,Mango

(7)unshift //方法（在开头）向数组添加新元素，并“反向位移”旧元素
   var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");    // 向 fruits 添加新元素 "Lemon"
    // 结果 Lemon,Banana,Orange,Apple,Mango
```