---
icon: pen-to-square
# date: 2024-12-01
sticky: 42
# star: true
category:
  - 前端开发
---

::: info
ES6 是 ECMAScript 2015 的别名，属于 JavaScript 的标准版本。TypeScript 是 JavaScript 的超集，这意味着它包含了所有 JavaScript 的特性（包括 ES6），并添加了静态类型等额外功能。
所以，ES6 属于 JavaScript 的一部分，TypeScript 完全支持 ES6 并扩展了它。
:::


# js/ts/es6
- ES6 是 ECMAScript 2015 的别名，属于 JavaScript 的标准版本。TypeScript 是 JavaScript 的超集，这意味着它包含了所有 JavaScript 的特性（包括 ES6），并添加了静态类型等额外功能。
- 所以，ES6 属于 JavaScript 的一部分，TypeScript 完全支持 ES6 并扩展了它。

具体说明：
1. ES6 的本质
ES6 是 ECMAScript 标准的第 6 个版本（2015 年发布），是 JavaScript 语言的规范。所有现代浏览器和 Node.js 都原生支持 ES6 特性（如 let/const、箭头函数、Promise 等）。

1. TypeScript 的定位
TypeScript 是 JavaScript 的 超集（Superset），它在语法上完全兼容 JavaScript（包括 ES6 及更高版本）。TypeScript 的主要扩展是添加了静态类型系统（如 :string、interface 等）。

1. 关键区别
```javascript
// ES6 纯 JavaScript 代码（合法）
const sum = (a, b) => a + b;

// TypeScript 在 ES6 基础上添加类型（依然是合法 JS）
const sum = (a: number, b: number): number => a + b;
```

1. 开发中的关系
    - 用 .js 文件写 ES6 → 是纯 JavaScript
    - 用 .ts 文件写 ES6 + 类型 → 是 TypeScript
TypeScript 编译后会移除类型注解，生成 ES6（或更旧版本）的 JavaScript 代码。

总结：
ES6 是 JavaScript 的标准升级，TypeScript 通过添加类型对其进行了增强。
✅ ES6 属于 JavaScript
✅ TypeScript 扩展了 ES6（而非替代）