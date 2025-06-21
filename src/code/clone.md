---
icon: pen-to-square
# date: 2024-12-01
sticky: 91
star: true
category:
  - 前端开发
---

<!-- more -->
# 深拷贝与浅拷贝
 **注释：深拷贝独立内存，浅拷贝共享内存**

 **深拷贝与浅拷贝的核心区别在于内存管理方式‌**：浅拷贝仅复制对象的引用地址，新旧对象共享同一内存空间；深拷贝则递归复制所有层级数据，创建完全独立的内存空间。

## 1.内存独立性
（1）浅拷贝：新旧对象共享内存，修改任意一方会影响另一方属性。‌‌‌‌

（2）深拷贝：新旧对象内存完全隔离，修改互不影响

## 2.数据影响机制
（1）当对象包含指针或引用类型时，浅拷贝会导致原对象和拷贝对象中的指针指向同一地址，可能引发指针悬挂问题。‌‌

（2）深拷贝通过逐层复制指针指向的实际数据，彻底消除共享依赖

## 3.实现复杂度
（1）浅拷贝只需复制基本数据类型和引用地址，时间复杂度为O(1)


（2）深拷贝需要递归处理所有嵌套对象，时间复杂度通常为O(n)，空间占用更高

## 4.使用场景不同
**浅拷贝：**
1. 适用于需要快速创建一个新对象或数组，并且对嵌套的对象或数组的修改不影响原始数据的情况。例如，在函数参数传递中，如果只需要读取对象的属性而不修改它们，可以使用浅拷贝来避免对原始对象的意外修改。
2. 也适用于一些简单的数据结构，或者当性能是主要考虑因素而不需要完全独立的副本时。

**深拷贝：**
1. 适用于需要创建一个完全独立的副本，确保原对象的任何修改都不会影响新对象的情况。例如，在数据持久化、对象克隆或需要对数据进行独立操作而不影响原始数据的场景中，深拷贝是更好的选择。


## 5.实现方式不同
**（1）浅拷贝**
    **可以使用展开运算符、Object.assign()方法或者手动复制属性的方式实现：**
    **使用展开运算符:**
 ```
    const oldObject={name:'小号',age:30,hobbies:['reading','coding']}
    const newOldObject={...oldObject}
```
**在这个例子中，使用展开运算符创建了一个新的对象newObject，它包含了与oldObject 相同的属性。但是，如果修改 oldObject.name,newOldObject.name也会收到影像**

**使用Object.assign()方法:**
 ```
    const oldObject={name:'小号',age:30,hobbies:['reading','coding']}
    const newOldObject=Object.assign({},oldObject)
```
**Object.assign()方法将源对象的所有可枚举属性复制到目标对象，并返回目标对象。同样，如果修改oldObject.hobbies，newObject.hobbies也会收到影响**

**（2）深拷贝**
    **可以使用JSON.parse(JSON.stringify())、、递归函数或借助第三方库（如 lodash的cloneDeep()方法 实现：**
    **使用JSON.parse(JSON.stringify()):**
 ```
    const oldObject={name:'小号',age:30,hobbies:['reading','coding']}
    const newOldObject=JSON.parse(JSON.stringify(oldObject))
```
**这个方法将对象转换为JSON 字符串，然后再将 JSON 字符串转换回对象。这样可以创建一个完全独立的副本。但是，这个方法有一些限制，例如它不能处理函数、正则表达式、日期对象等特殊类型的值。**

**使用JS库:**
        有一些 JavaScript 库提供了深拷贝的功能，例如 lodash的cloneDeep()方法
 ```
    const _=require('lodash')
    const oldObject={name:'小号',age:30,hobbies:['reading','coding']}
    const newOldObject=_.cloneDeep(oldObject)
```
**使用库可以简化深拷贝的实现，并且通常提供了更好的性能和更多的功能。但是，引入库可能会增加项目的体积和复杂性。**


