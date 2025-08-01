---
icon: pen-to-square
# date: 2024-12-01
sticky: 94
star: true
category:
  - 前端开发
---

<!-- more -->
# localstorage和sessionstorage和cookie
以下是关于localStorage、sessionStorage和Cookie三种浏览器存储方式的详细对比分析：

## 一、核心区别

**1.存储容量‌：**

Cookie：单个限制约4KB
localStorage/sessionStorage：通常5MB左右（不同浏览器有差异）

**2.生命周期‌：**

Cookie：可设置过期时间，未设置则随会话结束清除
localStorage：永久存储，需手动清除
sessionStorage：仅当前会话有效（关闭标签页即清除）

**3.数据传递‌：**

Cookie：每次HTTP请求自动携带（增加请求头大小）
Web Storage：仅本地存储，不参与服务器通信
## 二、作用域差异
|特性|	Cookie|	localStorage|	sessionStorage|
| ---- | --- | --- | --- |
|同源窗口共享	|是	|是|	否（仅当前标签页）|
|跨子域名共享	|需设置domain属性|	不可共享|	不可共享|
## 三、典型应用场景

**Cookie‌：**

用户会话管理（如登录状态）
跟踪用户行为（需注意隐私合规）

**localStorage‌：**

用户偏好设置（主题/语言）
离线缓存数据
未登录用户的购物车暂存

**sessionStorage‌：**

表单页面间临时数据传递
单页应用的路由状态保持

## 四、技术实现要点

**1.Cookie操作‌：**


// 设置
document.cookie = "key=value; expires=日期; path=/";
// 读取（需自行解析字符串）:ml-citation{ref="5,9" data="citationList"}


Web Storage API‌：


// localStorage
localStorage.setItem('key', JSON.stringify(object));
const data = JSON.parse(localStorage.getItem('key')):ml-citation{ref="2,4" data="citationList"};

// sessionStorage（API相同）
sessionStorage.setItem('tempData', 'value'):ml-citation{ref="6" data="citationList"};

## 五、安全注意事项
1.Cookie需设置HttpOnly和Secure属性防止XSS攻击
2.敏感数据避免存储在客户端，重要操作需服务器验证
3.隐私模式下localStorage不可用，需做兼容处理



### localstorage和sessionstorage和cookie
我们将详细比较localStorage、sessionStorage和cookie的特性、使用场景以及它们的区别。

1.特性对比
2.使用场景
3.安全性考虑
4.容量限制
5.如何选择


### 深入解析：localStorage、sessionStorage 与 Cookie
#### 核心区别一览表
|特性|Cookie|localStorage|sessionStorage|
|---|---|---|---|
|**存储位置**|浏览器 + 服务器|仅浏览器|仅浏览器|
|**生命周期**|自定义过期时间|永久存储|标签页关闭即销毁|
|**容量限制**|≈4KB（单域名）|≈5-10MB（各浏览器不同）|≈5-10MB（各浏览器不同）|
|**服务器访问**|每次请求自动携带|完全不发送|完全不发送|
|**数据类型支持**|仅字符串|仅字符串|仅字符串|
|**作用域**|所有标签页共享|所有标签页共享|仅当前标签页|
|**操作API**|document.cookie|localStorage 方法|sessionStorage 方法|

---

### 一、详细解析
#### 1. 🍪 Cookie
- **工作原理：** 浏览器每次发起 HTTP 请求时，会自动在请求头 Cookie 中附带当前域名的 cookie
- **数据格式：** 键值对字符串（需手动编码/解码）
- **典型使用：**
```
// 设置 cookie（默认会话级，浏览器关闭失效）
document.cookie = "username=john; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// 读取（返回所有 cookie 的字符串）
const cookies = document.cookie; // "username=john; theme=dark"
```
- **安全配置：**
```javascript
// 加密传输（只走 HTTPS）
document.cookie = "secureKey=value; Secure";

// 防 XSS 攻击（禁止 JS 读取）
document.cookie = "secret=123; HttpOnly";
```
#### 2. 📦 localStorage
- **永久存储：** 需手动删除或通过 JS 清除，同域名下所有窗口共享
- **操作方法：**
```javascript
// 存对象（需序列化）
const user = { id: 1, name: "John" };
localStorage.setItem("user", JSON.stringify(user));

// 取对象
const userData = JSON.parse(localStorage.getItem("user"));

// 删除特定项
localStorage.removeItem("theme");

// 清空所有
localStorage.clear();
```
#### 3. 🗂️ sessionStorage
- **会话级存储：** 刷新页面不丢失，但关闭标签页后自动销毁
- **特定场景：**
```javascript
// 敏感临时数据（如表单草稿）
sessionStorage.setItem("formDraft", JSON.stringify(inputValues));

// 页面刷新保持状态
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("scrollPos", window.scrollY);
});
```
---

### 二、关键特性对比
#### 1. 存储周期
|存储方式|默认生命周期|改变方式|
|----|---|---|
|**Cookie**|浏览器关闭失效|expires/max-age 设置时间|
|**local**|永久存储|JS 删除或浏览器清理|
|**session**|标签页关闭即失效|不可延长|

#### 2. 作用域控制
|存储方式|域名作用域|路径作用域|
|---|---|---|
|**Cookie**|✅ domain=.example.com|✅ path=/admin|
|**local**|❌ 仅当前域名|❌ 全域名共享|
|**session**|❌ 仅当前域名|❌ 全域名共享|

#### 3. 性能影响
- **Cookie：** 每次请求携带，过多数据会显著增加请求体积
- **Web Storage：** 不参与网络通信，适合大数据场景
---


### 三、使用场景建议
#### 🛒 Cookie 适用场景
- 1.用户身份认证（JWT/Session ID）
- 2.个性化设置需传至服务器的数据（如语言偏好）
- 3.广告追踪（需跨域时配合第三方域名）
#### 💾 localStorage 适用场景
- 1.缓存静态资源（CSS/JS）
- 2.长期保存的用户设置（主题/布局）
- 3.PWA 应用离线数据存储
#### 📍 sessionStorage 适用场景
- 1.敏感临时数据（多步骤表单）
- 2.单页面应用（SPA）路由状态保持
- 3.页面刷新时的滚动位置记录
---

### 四、安全最佳实践 🔒
1.**敏感数据永不存客户端（密码、支付信息等）**
2.Cookie 必须设置：
```javascript
// 样例：高安全配置
document.cookie = [
  `authToken=${token}`,
  "HttpOnly",     // 防 XSS 读取
  "Secure",       // 仅 HTTPS 传输
  "SameSite=Lax", // 防 CSRF 攻击
  "path=/",
  "domain=example.com",
  `max-age=${3600 * 24 * 30}`
].join('; ');
```
3.Web Storage 存储前加密：
```javascript
localStorage.setItem("data", encrypt(JSON.stringify(data)));
```
---

### 五、特殊场景处理
#### 跨标签页通信
```javascript
// 使用 localStorage 实现标签页同步
window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    applyTheme(event.newValue);
  }
});
```
#### 超大存储方案
```javascript
// 超 10MB 数据使用 IndexedDB
const db = indexedDB.open("MyDB", 1);
db.onupgradeneeded = (e) => {
  const db = e.target.result;
  db.createObjectStore("videos", { autoIncrement: true });
};
```
---

### 总结选择策略
|需求特征|推荐方案|
|---|--|
|需服务器读取的小数据（<4KB）|Cookie|
|长期保存的静态数据|localStorage|
|敏感临时数据|sessionStorage|
|结构化大数据（文件/视频）|IndexedDB|

> 最佳实践：优先使用 Web Storage，Cookie 仅用于需与服务端通信的关键信息，敏感数据必须加密处理并考虑 HttpOnly 和 Secure 标记的保护
[前端数据存储全解析：localStorage、sessionStorage 与 Cookie](https://blog.csdn.net/m0_74037439/article/details/146538639)