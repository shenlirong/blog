---
icon: pen-to-square
# date: 2024-12-01
sticky: 53
# star: true
category:
  - 前端开发
---

<!-- more -->
# promise
<promise></promise>

```
async function async1() {
    console.log('A');
    await async2();
    console.log('B');
}

async function async2() {
    console.log('C');
}

console.log('D');
async1();
console.log('E');
//输出顺序:D, A, C, E, B。
```
### 重要结论


**1.​async 函数中的代码不全是异步的**​：

只有 await 后面的代码会变成异步
await 之前的代码是同步执行的



**2.​await 的本质​：**

await 是语法糖，底层基于 Promise
它会将后续代码包装成 then() 回调
这个回调会被放入微任务队列



**3.​执行优先级​：**

同步代码总是最先执行
微任务在当前宏任务结束后执行
宏任务在下一个事件循环中执行

#### 理解技巧
可以把 await 看作是一个"暂停并继续"的指令：

1.执行到 await 时，暂停当前函数
2.将后续代码放入"待办事项"（微任务队列）
3.立即返回控制权给调用者
4.当调用栈清空后，再回来执行"待办事项"


## async/await 与 Promise 的核心关系
**1. async 函数总是返回 Promise**
```
async function example() {
    return "Hello";
}

// 等同于
function example() {
    return Promise.resolve("Hello");
}
```
**2. await 操作符处理 Promise**
```
async function fetchData() {
    // await 暂停执行直到 Promise 完成
    const data = await fetch('https://api.example.com/data');
    return data.json();
}
```
**3.错误处理对比**

```
// Promise 错误处理
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// async/await 错误处理
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```
## 何时使用 Promise 或 async/await
### 使用 Promise 的场景：
1. 多个并行异步操作：
```
Promise.all([fetchData1(), fetchData2()])
  .then(([data1, data2]) => {});
```
1. 更细粒度的控制：
```
fetchData()
  .then(processData)
  .then(saveData)
  .catch(handleError);
```
1. 需要立即返回 Promise：
```
function getData() {
  return fetchData().then(processData);
}
```
### 使用 async/await 的场景：
1. 顺序执行异步操作：
```
async function process() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  return processOrders(orders);
}
```
1. 简化错误处理：
```
async function safeFetch() {
  try {
    return await fetchData();
  } catch (error) {
    console.error(error);
    return null;
  }
}
```
1. 让异步代码更像同步代码：
```
async function init() {
  const config = await loadConfig();
  const data = await fetchData(config.url);
  render(data);
}
```

## 关键优势对比
|特性|Promise|async/await|
|---|---|---|
|可读性|链式调用清晰但可能嵌套|类似同步代码，更易理解|
|错误处理|.catch() 方法|try/catch 同步语法|
|调试|较难追踪调用栈|类似同步代码，调试更简单|
|流程控制|需要手动链接|自动暂停和恢复执行|
|返回值|总是返回 Promise|总是返回 Promise|

## 最佳实践建议
**1. 混合使用**：在 async 函数内部结合使用 Promise.all 处理并行操作
```
async function getDashboardData() {
  const [user, orders, products] = await Promise.all([
    getUser(),
    getOrders(),
    getProducts()
  ]);
  return { user, orders, products };
}
```
**2. 避免过度嵌套**：async/await 可以解决 Promise 的深层嵌套问题
**3. 错误处理统一**：在顶层使用 try/catch 或在 async 函数返回的 Promise 上使用 .catch()
**4. 理解执行顺序**：await 会暂停当前 async 函数的执行，但不会阻塞主线程


[点击这里查看子文档(async/await)](async-await.md)
