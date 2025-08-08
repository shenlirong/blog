---
icon: pen-to-square
# date: 2024-12-01
sticky: 94
star: true
category:
  - 前端开发
---

<!-- more -->
# TS数据类型
TypeScript 的数据类型系统是其核心特性之一，它在 JavaScript 原始类型的基础上增加了强大的静态类型检查能力。以下是 TypeScript 中主要的数据类型及其详细说明：
### 🔰 一、原始类型（Primitive Types）
这些是 JavaScript 中的基础原始类型在 TypeScript 中的直接表示：

|类型|写法|说明|示例值|
| :-----------: | :-------------: | :-------------: |:-------------: |
|布尔值|boolean|值为 true 或 false|const isDone: boolean = true;|
|数字|number|任意数值（含整数、浮点数等）|const count: number = 42;|
|字符串|string|任意文本内容|const name: string = 'Alice';|
|BigInt|bigint|能够安全表示超过 2^53 的数字|const big: bigint = 100n;|
|Symbol|symbol|创建唯一的键值|const sym: symbol = Symbol('key');|
|Null|null|明确表示为 null|const n: null = null;|
|Undefined|undefined|明确表示为 undefined|const u: undefined = undefined;|

### 🧬 二、对象类型（Object Types）
这些类型用于描述对象、函数等非原始类型的结构：
#### 1. 数组
表示某种类型的数组，有两种写法：
```ts
const nums: number[] = [1, 2, 3];
const names: Array<string> = ['Alice', 'Bob']; // 泛型写法
```
#### 2. 元组（Tuple）
表示已知元素数量和类型的数组：
```ts
let tuple: [string, number] = ['key', 1]; // OK
tuple = ['hello', 42]; // OK
tuple = [1, 'key']; // ❌ 类型顺序错误
```
#### 3. 任意类型（any）
可用于绕过类型检查：
```ts
let risky: any = 'danger';
risky = 42;          // ✅ 可通过检查
risky.doSomething(); // ❌ 运行时可能出错
```
#### 4. 对象类型
直接定义对象的形状：
```ts
type User = {
  name: string;
  age?: number;      // 可选属性
  readonly id: number; // 只读属性
};

const user: User = { name: 'Alice', id: 1 };
user.id = 2;        // ❌ 只读属性不可修改
```
#### 5. 函数类型
定义函数的类型：
```ts
type AddFunc = (a: number, b: number) => number;

const add: AddFunc = (a, b) => a + b;
```
#### 6. 接口（interface）
类似于对象类型，但支持扩展：
```ts
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const circle: Circle = { color: 'blue', radius: 10 };
```
#### 7. 类（class）
在类中定义属性类型：
```ts
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```
#### 8. 枚举（enum）
为一组值命名常量：
```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
}

const dir: Direction = Direction.Up;
```
---


### 🔮 三、特殊类型
#### 1. 联合类型（Union）
表示变量可以是多种类型之一：
```ts
type ID = number | string;
function printId(id: ID) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase()); // ✅ 在此分支识别为字符串
  } else {
    console.log(id.toFixed(2)); // ✅ 识别为数字
  }
}
```
#### 2. 交叉类型（Intersection）
组合多个类型（常用于扩展对象）：
```ts
type Admin = User & { permissions: string[] };
const admin: Admin = { name: 'Bob', id: 2, permissions: ['manage'] };
```
#### 3. 字面量类型（Literal）
精确到具体的值：
```ts
type ButtonSize = 'small' | 'medium' | 'large';
const buttonSize: ButtonSize = 'medium'; // ✅
buttonSize = 'huge';                    // ❌ 不在字面量集合中
```
#### 4. 未知类型（unknown）
比 any 更安全的顶层类型：
```ts
let unsure: unknown = "Hello";
unsure = 42;            // ✅ 重新赋值（类似 any）
const s: string = unsure;  // ❌ 不能直接赋值给其他类型
```
#### 5. never 类型
表示永远不会返回的值：
```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```
#### 6. void 类型
表示函数没有返回值：
```ts
function logMsg(message: string): void {
  console.log(message);
}
```
---

### 📊 类型关系图
```mermaid
graph TB
    A[原始类型] --> B(number, string...)
    C[对象类型] --> D(Object, Array, Function)
    E[特殊类型] --> F(any, unknown, never)
    B -->|联合| G(number | string)
    D -->|交叉| H(User & Admin)
    G & H --> I(复杂类型)
```
---

### 💡 类型操作（高级）
#### 1. 类型别名（type）
定义类型的别名：
```ts
type Coordinates = [number, number];
```
#### 2. 条件类型（Conditional Types）
在类型系统中实现三目运算：
```ts
type CheckType<T> = T extends string ? 'str' : 'unknown';
type T = CheckType<number>; // 'unknown'
```
#### 3. 映射类型（Mapped Types）
批量转换已有类型：
```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
```
---