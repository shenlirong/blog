---
title: 数组相关
icon: pen-to-square

# sticky: -1
category:
  - 知识点
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

#### 数组扁平化
```javascript
let list=[1,2,[3,4],5,[8,9]]
//对于二位数组可以直接用扩展运算符....,加concat
[].concat(...list)
//对于更深度,利用flat扁平化
list.flat(Infinity)
//使用reduce，加concat
const flatWithReduce=(arr)=>{
  return arr.reduce((cur,next)=>{
    return cur.concat(Array.isArray(next)?flatWithReduce(next):next)
  },[])
}
```

#### 排序
```javascript
   let list = line.split(' ').reduce((cur, next) => {
    let indexSort = 0;
    while (indexSort < cur.length && cur[indexSort] < next) {
        indexSort++
    }
    cur.splice(indexSort, 0, next)
    return cur
}, [])
```

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
['a', 'b'].indexOf('b'); // 1 找到返回对应下标，没有返回-1
['a', 'b'].includes('c'); // false 找到返回true,没有返回false
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
- **改变原数组的方法**：push/pop/shift/unshift/splice/sort/reverse
- **不改变原数组的方法**：slice/concat/map/filter/reduce
- 使用 find 替代 indexOf 处理对象数组
- 优先用 includes 检查存在性（支持 NaN）
> 示例支持 ES6+ 语法，现代浏览器均可运行。根据需求选择方法，避免不必要的副作用！

Math.floor() 是 JavaScript 中的一个标准数学函数，用于对数字进行向下取整。它的作用是返回一个小于或等于给定数值的最大整数。
为了更直观地理解它与其他取整方法的区别，请看下表：
|方法|功能描述|示例 (输入 4.7)|示例 (输入 -4.7)|
|--|---|--|--|
|Math.floor()|向下取整|返回 4|返回 -5|
|Math.ceil()|向上取整|返回 5|返回 -4|
|Math.round()|四舍五入|返回 5|返回 -5|
|parseInt()|解析字符串，返回整数|返回 4|返回 -4|

🧮 简单示例
```javascript
console.log(Math.floor(4.7));   // 输出：4
console.log(Math.floor(8.1));   // 输出：8
console.log(Math.floor(5));      // 输出：5 (整数输入返回原值)
console.log(Math.floor(-3.2));  // 输出：-4 (向下取整到更小的整数)
console.log(Math.floor(-0.9));  // 输出：-1
```


## 数组遍历的方法

在JavaScript中，数组遍历方法有很多，它们各自有不同的用途和特点。以下是一些常用的数组遍历方法，包括它们的基本用法和示例：

1.  ​**forEach()**
- 对数组的每个元素执行一次提供的函数。

- 不会改变原数组，但可以通过回调函数修改原数组（因为操作的是原数组的元素）。

- 没有返回值（undefined）。
```
const arr = [1, 2, 3];
let a=arr.forEach(item => {
  return item*2
  console.log(item * 2); // 2, 4, 6
});
console.log(a) //undefined(没有返回值)
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


## 数组排序
- reverse()数组倒序(反转)
- sort()
**两种方法都会改变原数组**

```
let arr = [3,5,2,5,8]
arr.sort((a,b)=>a-b)
console.log(arr) //[2,3,5,5,8]

let arr1 = [1,2,3,4,5,6]
arr1.sort((a,b)=>Math.random()-0.5)
console.log(arr1) //[3,4,1,6,2,5] 打乱数组 根据返回值的大小判断是否交换a，b位置 大于0才交换 小于或者等于0不交换

//根据对象某个属性排序
let sortArr=[{id:1,age:10},{id:3,age:2},{id:4,age:70}].sort((a,b)=>{
    return (b.id - a.id) 
})
console.log(sortArr) //[{"id": 4,"age": 70},{"id": 3,"age": 2},{"id": 1,"age": 10}]

```

## 数组求和
reduce / reduceRight

都会迭代数组的所有项，并在此基础上构建一个最终返回值，对没有值的数组元素，不执行方法,归并方法不会改变原始数组；reduce()方法从左到右遍历数组项，reduceRight()则从右到左遍历数组项。

这两个函数都接收两个参数：归并函数以及可选的初始值。传给方法的函数接收4个参数：上一个归并值、当前项、当前项索引、数组本身。
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```
var  arr = [1, 2, 3, 4];
var sum = arr.reduce((pre,cur,index,arr)=>pre+cur)
var mul = arr.reduce((pre,cur,index,arr)=>pre*cur)
console.log( sum ); //求和，10
console.log( mul ); //求乘积，24
```

**高级用法如下：**

计算数组中每个元素出现的次数
```
let names = ['a', 'b', 'b', 'b', 'a'];

let nameNum = names.reduce((pre,cur)=>{
  //第一种写法
   pre[cur] = (pre[cur] || 0) + 1;

  //第二种写法,使用三元表达式
   pre[cur] =  pre[cur] ?  pre[cur] + 1 : 1;

  //第三种写法,使用if判断
  if(!pre[cur]){
      pre[cur]=1
  }else{
    pre[cur]+=1
  }

  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1 
  }
  return pre
},{})
console.log(nameNum); //{a: 2, b: 3}
```
**对象里面的属性求和：**
```
var result = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

var sum = result.reduce(function(prev, cur) {
    return cur.score + prev;
}, 0);
console.log(sum) //60
```
## 数组去重
```
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return pre.concat(cur)
    }else{
      return pre
    }
},[])
console.log(newArr);// [1, 2, 3, 4]
//或者 (pre, cur) => pre.includes(cur) ? acc : [...pre, cur]
```
数组去重是JavaScript中的常见问题，根据不同的场景和需求，可以选择多种方法。以下是一些常用的数组去重方法，每种方法都有其特点和适用场景：

**1. 使用Set（ES6+）**
**​原理​：** 利用Set数据结构中元素不可重复的特性。
```
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
// 或 Array.from(new Set(array))
```
**​优点​：** 简洁高效，适合基本数据类型去重。
**​缺点​：** 无法直接处理对象（因为对象引用不同），NaN会被保留（Set认为NaN等于自身）。

**2. 使用filter + indexOf**
**​原理​：** 通过索引位置判断元素是否首次出现。
```
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
```
**​优点​：** 兼容性好（ES5）。
**​缺点​：** 时间复杂度O(n²)，性能较差；无法区分NaN。

**3. 使用reduce**
**​原理​：** 迭代过程中检查结果数组是否已包含当前元素。
```
const uniqueArray = array.reduce((acc, cur) => 
  acc.includes(cur) ? acc : [...acc, cur], 
[]
);
```
**​优点​：** 可读性较好。
**​缺点​：** 每次迭代都需遍历结果数组，效率较低（尤其大数组）。

**4. 使用对象键值对（适用于基本类型）**
**​原理​：** 利用对象键的唯一性。
```
const obj = {};
const uniqueArray = [];
for (let item of array) {
  if (!obj[item]) {
    uniqueArray.push(item);
    obj[item] = true;
  }
}
```
**​注意​：** 此方法会将数字1和字符串'1'视为相同，且对象无法作为键（会转为[object Object]）。

**5. 使用Map（ES6+）**
**​原理​：** 利用Map的键唯一性（可处理各种类型）。
```
const map = new Map();
const uniqueArray = [];
array.forEach(item => {
  if (!map.has(item)) {
    map.set(item, true);
    uniqueArray.push(item);
  }
});
```
**​优点​：** 可处理NaN、对象等（按引用区分）。
**​缺点​：** 代码稍长。

**6. 排序后相邻比较**
**​原理​：** 先排序，然后跳过重复相邻项。
```
const sorted = [...array].sort();
const uniqueArray = sorted.filter((item, index) => 
  index === 0 || item !== sorted[index - 1]
);
```
**​优点​：** 时间复杂度O(n log n)，适合大型数值数组。
**​缺点​：** 会改变原始顺序；无法区分1和'1'（排序后类型可能转换）。

**特殊值处理说明：**
- ​NaN​：Set和Map可正确处理（去重保留一个），其他方法需额外处理。
- ​对象​：除Set/Map（按引用）外，其他方法无法直接去重对象数组（除非使用深度比较，但效率低）。
- ​混合类型​：需注意类型转换问题（如数字1和字符串'1'）。
性能对比（一般情况）：
- ​最优​：Set（O(n)）
- ​最差​：filter + indexOf（O(n²)）
**终极方案建议：**
- ​基本数据类型数组​：优先使用[...new Set(array)]
- ​对象数组（按引用去重）​​：使用Map方案
- ​需要深度去重​：需递归比较（如lodash的_.uniqWith）
实际开发中推荐使用Lodash的_.uniq/_.uniqBy/_.uniqWith，已全面处理边界情况。

### 1. Set 去重（ES6+ 推荐）
```javascript
const unique = arr => [...new Set(arr)];
```
原理：利用 Set 对象自动去重的特性
优点：简洁高效（O(n) 时间复杂度）
缺点：无法处理对象引用（不同对象视为不同值），不兼容 IE11
适用：基本数据类型数组（数字、字符串等）


### 2. filter + indexOf（ES5 兼容）
```javascript
const unique = arr => arr.filter(
  (item, index) => arr.indexOf(item) === index
);
```
原理：通过索引位置判断元素是否首次出现
优点：兼容性好
缺点：时间复杂度 O(n²)，性能较差；无法处理 NaN
适用：小型基础类型数组


### 3. reduce 去重
```javascript
const unique = arr => arr.reduce(
  (acc, cur) => acc.includes(cur) ? acc : [...acc, cur], 
  []
);
```
原理：迭代过程中检查结果数组是否包含当前元素
优点：可读性强
缺点：每次迭代都需遍历结果数组，效率较低


### 4. 对象键值对法（高效去重）
```javascript
const unique = arr => {
  const obj = {};
  return arr.filter(item => 
    obj.hasOwnProperty(typeof item + item) ? 
      false : 
      (obj[typeof item + item] = true)
  );
};
```
原理：利用对象键名唯一性（typeof item + item 解决类型冲突）
优点：O(n) 时间复杂度，可处理 NaN（typeof NaN === 'number'）
缺点：对象和数组会被转为 [object Object] 导致误判


### 5. Map 去重（ES6+ 推荐）
```javascript
const unique = arr => {
  const map = new Map();
  return arr.filter(item => 
    !map.has(item) && map.set(item, true)
  );
};
```
原理：利用 Map 的键唯一性
优点：O(n) 时间复杂度，可正确处理各种类型（包括对象引用）
缺点：不兼容 IE


### 6. 排序后相邻比较
```javascript
const unique = arr => {
  const sorted = [...arr].sort();
  return sorted.filter(
    (item, index) => index === 0 || item !== sorted[index-1]
  );
};
```
原理：排序后相同元素相邻，只需比较相邻元素
优点：时间复杂度 O(n log n)
缺点：改变原始顺序；对对象无效（对象无法直接比较）


### 7. 双重循环（原始方法）
```javascript
function unique(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) res.push(arr[i]);
  }
  return res;
}
```
原理：最基础的嵌套循环比对
优点：兼容所有环境
缺点：O(n²) 时间复杂度，性能最差

### 8. lodash 库方法（生产环境推荐）
```javascript
import _ from 'lodash';
const unique = _.uniq; // 基础去重
const deepUnique = _.uniqWith(arr, _.isEqual); // 深度去重
```
原理：成熟的工具库实现
优点：处理各种边界情况（如 NaN、对象深度比较）
缺点：需引入外部库


### 特殊值处理对比表
|方法|处理 NaN|处理对象|保留顺序|时间复杂度|
|--|--|--|--|--|
|Set|✅|❌|✅|O(n)|
|filter+indexOf|❌|❌|✅|O(n²)|
|reduce|❌|❌|✅|O(n²)|
|对象键值法|✅|❌|✅|O(n)|
|Map|✅|✅|✅|O(n)|
|排序相邻比较|❌|❌|❌|O(n log n)|
|lodash.uniq|✅|❌|✅|O(n)|
|lodash.uniqWith|✅|✅|✅|O(n²)|

---

### 最佳实践建议：
1. 现代浏览器环境：优先使用 [...new Set(arr)]（简单高效）
1. 需要处理对象：使用 Map 方法或 lodash 的 _.uniqWith
1. 兼容旧浏览器：采用对象键值法或 filter+indexOf
1. 生产环境：直接使用 lodash 库避免边界问题
> 注意：所有方法中对象去重都是基于引用地址而非内容，深度去重需递归比较（如 lodash 的 _.isEqual）
```
 var arr = [1,2,3,4,3,5,6,2,1]
//1.利用indexOf循环过滤       
        var arr1 = []       
        for(var i=0;i<arr.length;i++){
            if( arr1.indexOf(arr[i])=== -1){
                 arr1.push(arr[i])
            }
        }
  console.log(arr1) //[1,2,3,4,5,6]
//2.利用对象
       var obj = {}
        for(var i=0;i<arr.length;i++){
            obj[arr[i]] = "随便"
        }
        var arr2 =[]
        for(var i in obj){
            arr2.push(i-0)
        }
        console.log(arr2)
//3.利用set结构
       var set1= new Set(arr)
       var arr3 = Array.from(set1)
       console.log(arr3)
//4.利用数组中的filter方法
var newArr = arr.filter(function(value,index,self){
    return self.indexOf(value) === index;
});
console.log(newArr);
//5.利用includes去重
    var arr5= []
    arr.forEach((item) => {
        if (!arr5.includes(item)) {
            arr5.push(item)
        }
    })
console.log(arr5); //[1,2,3,4,,5,6]
//6.利用map去重
    let arr6= [];
    let map = new Map()
    arr.forEach((item) => {
        if (!map.has(item)) {
            map.set(item,ture)
            arr6.push(item)
        }
    })
console.log(arr6); //[1,2,3,4,,5,6]
```

**将二维数组转化为一维**
```
let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((pre,cur)=>{
    return pre.concat(cur)
},[])
console.log(newArr); // [0, 1, 2, 3, 4, 5]
```
**将多维数组转化为一维**
```
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const newArr = function(arr){
   return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
```