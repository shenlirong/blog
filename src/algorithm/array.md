---
title: 数组相关
icon: pen-to-square
# sticky: -1
category:
  - 基础算法
# permalink: /website/
---

<!-- more -->
::: info
此处存放的一些数组常用方法。
:::
## 数组基础方法
以下是 JavaScript 中数组的 **12 个核心基础方法，** 涵盖增删改查和转换操作，附代码示例：

### 1. 增删元素

#### push() - 末尾添加元素（改变原数组）
```javascript
let fruits = ['apple'];
fruits.push('banana'); // ['apple', 'banana']
```
#### pop() - 删除末尾元素（改变原数组）
```javascript
fruits.pop(); // 返回 'banana'，数组变为 ['apple']
```
#### unshift() - 开头添加元素（改变原数组）
```javascript
fruits.unshift('orange'); // ['orange', 'apple']
```
#### shift() - 删除开头元素（改变原数组）
```javascript
fruits.shift(); // 返回 'orange'，数组变为 ['apple']
```
---

### 2. 截取与拼接
#### slice() - 截取子数组（不改变原数组）
```javascript
let arr = [1, 2, 3, 4];
arr.slice(1, 3); // 返回 [2, 3]（索引 1 到 2）
```
#### splice() - 删除/插入元素（改变原数组）
```javascript
let nums = [10, 20, 30];
nums.splice(1, 1, 'a', 'b'); // 从索引1删除1个元素，插入'a','b'
// nums 变为 [10, 'a', 'b', 30]
```
---

### 3. 合并与转换
#### concat() - 合并数组（不改变原数组）
```javascript
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```
#### join() - 数组转字符串
```javascript
['Hello', 'World'].join(' '); // "Hello World"
```
---

### 4. 遍历与查找
#### forEach() - 遍历数组
```javascript
['a', 'b'].forEach((item, index) => {
  console.log(index + ":" + item); // 0:a, 1:b
});
```
#### indexOf() / includes() - 查找元素
```javascript
['a', 'b'].indexOf('b'); // 1
['a', 'b'].includes('c'); // false
```
#### find() - 查找首个符合条件的元素
```javascript
[5, 12, 8].find(num => num > 10); // 12
```
---

### 5. 高阶方法
#### map() - 映射新数组
```javascript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```
#### filter() - 过滤元素
```javascript
[1, 2, 3, 4].filter(num => num % 2 === 0); // [2, 4]
```
#### reduce() - 累计计算
```javascript
[1, 2, 3].reduce((sum, curr) => sum + curr, 0); // 6
```
---

### ⚠️ 关键注意：
- 改变原数组的方法：push/pop/shift/unshift/splice/sort/reverse
- 不改变原数组的方法：slice/concat/map/filter/reduce
- 使用 find 替代 indexOf 处理对象数组
- 优先用 includes 检查存在性（支持 NaN）
> 示例支持 ES6+ 语法，现代浏览器均可运行。根据需求选择方法，避免不必要的副作用！


## 数组遍历的方法

在JavaScript中，数组遍历方法有很多，它们各自有不同的用途和特点。以下是一些常用的数组遍历方法，包括它们的基本用法和示例：

1.  ​**forEach()**
- 对数组的每个元素执行一次提供的函数。

- 不会改变原数组，但可以通过回调函数修改原数组（因为操作的是原数组的元素）。

- 没有返回值（undefined）。
```
const arr = [1, 2, 3];
arr.forEach(item => {
  console.log(item * 2); // 2, 4, 6
});
```
2. ​**map()**

- 创建一个新数组，其结果是该数组中的每个元素调用一次提供的函数后的返回值。

- 不会改变原数组。
```
const arr = [1, 2, 3];
const doubled = arr.map(item => item * 2);
console.log(doubled); // [2, 4, 6]
```
3. ​**filter()**

- 创建一个新数组，包含通过所提供函数测试的所有元素。

- 不会改变原数组。
```
const arr = [1, 2, 3, 4];
const evens = arr.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]
```
4. ​**reduce()**

- 对数组中的每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值。

- 不会改变原数组。
```
const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10
```
5. ​**reduceRight()**

- 与reduce()类似，但是从数组的末尾向前遍历。
```
const arr = [1, 2, 3, 4];
const reversedConcat = arr.reduceRight((acc, cur) => acc + cur, '');
console.log(reversedConcat); // '4321'
```
6. ​**find()**

- 返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined。

- 不会改变原数组。
```
const arr = [1, 2, 3, 4];
const found = arr.find(item => item > 2);
console.log(found); // 3
```
7. ​**findIndex()**

- 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

- 不会改变原数组。
```
const arr = [1, 2, 3, 4];
const index = arr.findIndex(item => item > 2);
console.log(index); // 2
```
8. ​**every()**

- 测试数组的所有元素是否都通过了指定函数的测试。

- 不会改变原数组。
```
const arr = [1, 2, 3, 4];
const allEven = arr.every(item => item % 2 === 0);
console.log(allEven); // false
```
9. ​**some()**

- 测试数组中是否至少有一个元素通过了提供的函数的测试。

- 不会改变原数组。
```
const arr = [1, 2, 3, 4];
const hasEven = arr.some(item => item % 2 === 0);
console.log(hasEven); // true
```
10. ​**entries()**
- 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
- 通常用于`for...of`循环。

```javascript
const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
for (const [index, value] of iterator) {
  console.log(index, value); // 0 'a', 1 'b', 2 'c'
}
```
11. ​**keys()**
- 返回一个新的Array Iterator对象，包含数组中每个索引的键（索引）。

```javascript
const arr = ['a', 'b', 'c'];
const iterator = arr.keys();
for (const key of iterator) {
  console.log(key); // 0, 1, 2
}
```
12. ​**values()**
- 返回一个新的Array Iterator对象，包含数组中每个索引的值。

```javascript
const arr = ['a', 'b', 'c'];
const iterator = arr.values();
for (const value of iterator) {
  console.log(value); // 'a', 'b', 'c'
}
```
13. ​**for...of循环**
- 一种遍历可迭代对象（包括数组）的循环语法。

```javascript
const arr = ['a', 'b', 'c'];
for (const item of arr) {
  console.log(item); // 'a', 'b', 'c'
}
```
14. ​传统的for循环​
- 使用索引进行遍历。

```javascript
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 'a', 'b', 'c'
}
```
总结：

- ​改变原数组的方法：在遍历过程中，如果回调函数修改了原数组（比如修改元素），那么原数组会被改变。但以上方法本身不会改变原数组（除了forEach可以通过回调修改原数组元素，但方法本身没有返回修改后的数组）。

- ​返回新数组的方法：map、filter、slice（虽然不是遍历方法，但常用于复制数组）。

- ​返回单个值的方法：reduce、reduceRight、every、some、find（返回元素）、findIndex（返回索引）。

- ​迭代器方法​：entries、keys、values，它们返回迭代器对象，可以用for...of遍历。
根据具体需求选择合适的方法，例如：

- 需要变换数组元素并得到新数组：map

- 需要筛选元素：filter

- 需要检查所有元素是否满足条件：every

- 需要检查是否有元素满足条件：some

- 需要将数组元素汇总为单个值：reduce

- 只需要遍历而不需要新数组：forEach 或 for...of

