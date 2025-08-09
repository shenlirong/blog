---
icon: pen-to-square
# date: 2024-12-01
sticky: 94
star: true
category:
  - 前端开发
---

<!-- more -->
# pinia的使用

**‌Pinia是Vue 3的专属状态管理库，用于跨组件或页面共享状态，其核心功能包括State（数据存储）、Getters（计算属性）和Actions（方法）‌。与Vuex相比，Pinia具有更简单的API设计、完整的TypeScript支持，并取消了mutations概念，更适合组合式API开发。**

## ‌核心概念与优势
**1.核心组成:**
  **‌State‌**：存储应用状态数据，定义为返回初始状态的函数。‌‌
  **‌Getters‌**：派生状态（类似计算属性），接收state作为首个参数。‌‌
  **‌Actions‌**：同步/异步方法，直接修改state（无需mutations）

**2.‌主要优势‌：**
    1. 仅1KB体积，支持Vue 2/3和TypeScript。‌‌
    2. 扁平化Store设计，无需模块嵌套。‌‌
    3.支持插件扩展（如持久化存储插件）。‌‌

## ‌安装与基础使用
  1.‌安装‌：通过npm/yarn/pnpm安装：
  ```
  pnpm install pinia
  ```
  2.集成到Vue应用‌
  ```
  import { createPinia } from 'pinia'
  app.use(createPinia())
  ```
  **3.‌定义Store‌（两种方式）**
  **Option Store‌**（类似Vue选项式API）：
  ```
  defineStore('counter', {
    state: () => ({ count: 0 }),
    getters: { double: state => state.count * 2 },
    actions: { increment() { this.count++ } }
  })
```
  **Setup Store‌**（组合式API风格）：
  ```
  defineStore('counter', () => {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    function increment() { count.value++ }
    return { count, double, increment }
  })
```
3.‌组件中使用
 1.‌调用Store‌：
 ```
  import { useCounterStore } from '@/stores/counter'
  const counter = useCounterStore()
```
2.访问状态与方法‌：
```
  直接通过counter.count读取state。
  通过counter.increment()调用action
  ```

## pinia与vuex区别
Vuex和Pinia都是用于Vue.js应用的状态管理库，但它们在设计理念、使用方式、功能、性能等方面存在一些区别。

**1.设计理念和使用方式**：

Vuex：采用全局单例模式，通过一个store对象来管理所有的状态。它的状态管理是集中的，适合大型项目和需要复杂状态管理的场景。
Pinia：则采用了分离模式，每个组件都可以拥有自己的store实例。这意味着在Pinia中，状态管理是分散的，更适合小型项目或对TypeScript要求高的场景。

**2.功能和模块化**：

Vuex：提供了更多的功能，如模块化、插件和严格模式等。Vuex的模块化允许将状态管理拆分成多个模块，每个模块负责一部分状态，提高了代码的可维护性。
Pinia：没有modules配置，每一个独立的仓库都是通过definStore生成的，这使得代码更加扁平化和易于维护。同时，Pinia对TypeScript提供了原生支持，提供了更好的类型推导和类型检查。

**3.性能**：

Pinia：相比Vuex具有更好的性能，因为它使用了新的ES6语法和数据处理方式。同时，Pinia的体积也更小，大约只有1KB，这使得它在性能上更具优势。

**4.社区支持和版本兼容性**：

Vuex：由Vue.js官方出品，拥有较强的社区支持和丰富的文档。它的设计主要是为了支持Vue 3，但也可以在Vue 2项目中使用（可能需要额外的适配工作）。
Pinia：是一个较新的框架，社区支持相对较弱，但也在不断发展壮大。它同时支持Vue 2和Vue 3，与Vue 3的响应式系统和Composition API紧密集成。

**5.易用性和语法**：

Pinia：的语法比Vuex更简单且易于理解。它提供了更好的TypeScript支持，使得代码更加简洁和易于维护。同时，Pinia允许直接修改状态，而Vuex则需要通过mutations来修改状态。
综上所述，Vuex和Pinia各有优缺点，选择哪个取决于你的项目需求和个人偏好。如果你需要一个功能丰富、社区支持强的状态管理解决方案，Vuex是一个不错的选择。而如果你追求简单、轻量且高性能的状态管理，Pinia可能是更好的选择
