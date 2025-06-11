---
icon: pen-to-square
# date: 2024-12-01
sticky: 96
category:
  - 前端开发
tag:
  - es6笔记
  - 前端开发
---

<!-- more -->
# es6数组解构赋值
```
以前为变量赋值，只能直接指定值，如：
let a=1；
let b=2;
let c=3;

es6 允许，这样写：
let [a,b,c]=[1,2,3];
let [head,...trail]=[1,2,3,4,5] // head:1;   trail:[2,3,4,5]
let [x,y,z]=['a'] //x:a; y:undefined; z:[]

1.对象的解构赋值
let obj={usename:'kebo',age:67};
let {usename}=obj  //让变量usename 拿到obj 的值，obj 是需要解构的对象，赋值给对应的变量

2.数组的解构赋值
let arr=[1,2,3,5,4,9,5]
let [a,b,c,d,r]=arr
```
# es6 扩展运算符
```
扩展运算符是三个点（...）,该运算符主要用于函数调用

1.数组的解构赋值
console.log(...[1,2,3])    // 1,2,3
console.log(1,...[1,2,3])  //1,1,2,3
function add (x,y){
    return x+y
}
const number=[4,38]
add(...number)

扩展运算符与正常的函数参数可以结合使用
function(x,y,z,w){}
    const avgs=[1,2,3]
    if(-1,...avgs,2,...[3]);

2.对象的解构赋值
let {bar,foo}={bar:'78',foo:'0000'}

```
# 中严格模式
```
1.理解
我们平常所写的代码规范，叫正常模式；

2.目的，作用
消除语法的一些不合理，不规范之处；

3.使用
在全局或者函数的第一条语句，使用："use strict";
如果浏览器不支持，只是简单的解析为一条语句，没有任何副作用

4.语法和行为改变
  必须用var 申明变量；
  禁止自定义的this指向windows,一般指向自定义的实例；
  对象不能有重名的属性；
  创建eval作用域
<script type='text/javascript'>
      'use strict'
</script>
JSON.stringify(obj/arr)   //js 对象（数组）转换成json对象数组
JSON.parse(json)         //json 对象（数组）转换成js 对象数组
```
# es5数组的扩展
```
var arr=[1,2,3,56,8,9];
arr.indexof(value) //得到值在数组中的下标
arr.lastindexof(value) //得到值在数组中的最后一个下标
arr.forEach(function (item,index){
    // 遍历数组
    console.log(item,index)  // item是每项值，index是下标 
})

var arr1=arr.map(function (item,index){
    // 遍历数组,返回一个新的数组，返回加工后的值
    return item +10
})

arr.filter(function (item,index){
    // 遍历过滤出一个新的子数组，返回条件为true 的值
    return item >3   返回新的数组为 arr2=[56,8,9]
})
```
# es5函数的扩展
```
var obj={username:'张三'}
function foo(data){
    console.log(this) // this指向 windows
}

    改变this 指向   foo.call(obj) foo.apply(obj) // this指向 obj

1.call 、apply 两者不同在于 传参的方式不同 
    call 直接从第二个参数开始，一次传入
    apply 第二个数组必须是数组，传入的值放在数组里
    foo.call(obj,33) foo.apply(obj,[333])

2.bind
foo.bind(obj)() //bind 绑定完this，不会立即调用当前的函数，而是将当前的函数调用，传参方式同call一样
```
# es6 变量
1.变量提升
代码在执行前，会经过预处理的过程，就是变量提升，在预处理的时候，会找到 var  function 定义的相关变量 函数 
# es6 模板字符串
```
var obj={usename:'huh',age:56};
var att="我的名字：" +obj.usename+',我的年龄是：'+obj.age
使用模板字符串
var att=`我的名字是：${obj.usename},我的年龄是：${obj.age}`
```
# es6箭头函数
```
let fun=()=>console.log(222) // 调用fun()，当没有参数时，不能省略括号
let fun=a=>console.log(555) //调用 fun(33),当有一个参数时，可以省略括号
let fun=(x,y)=>console.log(x,y) //调用 fun(2,7),当有两个参数时，不能省略括号
当只有一条语句的时候，{}可以省略，省略后会自动返回语句执行的结果或者表达式的结果

箭头函数的特点
1.箭头函数没有自己的this,箭头函数的this不是调用的时候决定的，而是定义的时候处在的对象就是它的this
2.箭头函数的this看外层是否与函数
  如果有  箭头函数的this就是外层函数的this
  如果没有  箭头函数的this就是windows
  
  fun:function(){
      console.log(this) // this 指向调用它的对象
  }
fun()=>{
     console.log(this) // this 指向windows
}
```
# es6 形参
```
point :function(x=0,y=0){   // 定义默认参数
    this.x=x;
    this.y=y
}
var point1=new point(80,7); //当传入参数时，使用实参
var point2=new point()   //当没有传入参数的时候，使用默认参数
```
# es6 Promise
```
var promise=new Promise((resolve,reject)=>{
    console.log(11);
    setTimeout(()=>{
        console.log(333)
    },2000)
    resolve()     //成功调用
    reject()      //失败调用
}).then((data)=>{  // 成功的回调
    console.log(data)
},(error)=>{      //失败的回调
    console.log(error)
})
```