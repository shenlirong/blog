---
icon: pen-to-square
# date: 2024-12-01
sticky: 97
# star: true
category:
  - 前端开发
---

<!-- more -->
# 前端解决跨域的方法
```


1.什么是跨域
跨域是指一个域下的文档或者脚本试图去请求另一个域下的资源，这里跨域是广义上的，而我们一般说的跨域是狭义的，是由浏览器同源策略限制的一种场景。

2.什么是同源策略
同源策略，简称sop(same origin policy),是一种约定，是浏览器最核心也是最基本的安全功能，如果缺少同源策略，浏览器很容易受到非法攻击，所谓同源，是指 “协议+域名+端口”，三者相同。

同源策略限制以下几种行为：
1、Cookie、LocalStorage 和 IndexDB 无法读取
2、 DOM 和 Js对象无法获得
3、 AJAX 请求不能发送

常见跨域场景

URL                                      说明                    是否允许通信
http://www.demo.com/a.js
http://www.demo.com/b.js         同一域名，不同文件或路径           允许
http://www.demo.com/lab/c.js

http://www.demo.com:8000/a.js
http://www.demo.com/b.js         同一域名，不同端口                不允许
 
http://www.demo.com/a.js
https://www.demo.com/b.js        同一域名，不同协议                不允许
 
http://www.demo.com/a.js
http://127.0.0.1/b.js           域名和域名对应相同ip              不允许
 
http://www.demo.com/a.js
http://x.demo.com/b.js           主域相同，子域不同                不允许
http://demo.com/c.js
 
http://www.demo1.com/a.js
http://www.demo2.com/b.js        不同域名                         不允许

```
# 跨域解决方案
```
1、 通过jsonp跨域
2、 document.domain + iframe跨域
3、 location.hash + iframe
4、 window.name + iframe跨域
5、 postMessage跨域
6、 跨域资源共享（CORS）
7、 nginx代理跨域
8、 nodejs中间件代理跨域
9、 WebSocket协议跨域
```