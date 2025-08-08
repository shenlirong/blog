---
icon: pen-to-square
# date: 2024-12-01
sticky: 94
star: true
category:
  - 前端开发
---

<!-- more -->


# CSS 选择器详解（附优先级与实战技巧）
CSS 选择器是定义样式规则的关键引擎，我将从 11 大类选择器详细解析，涵盖基础用法与高阶应用场景：
---
## 🔍 一、基础选择器（4种核心武器）
### 1. 元素选择器
```css
/* 选择所有 <p> 元素 */
p {
  color: #333;
}
```
### 2. 类选择器 (.class)
```css
/* 选择 class="warning" 的元素 */
.warning {
  background-color: yellow;
}

/* 多类选择：同时有 btn 和 primary 类 */
.btn.primary {
  background: blue;
}
```
### 3. ID 选择器 (#id)
```css
/* 选择 id="header" 的元素 */
#header {
  height: 80px;
}
```
### 4. 通配符选择器 (*)
```css
/* 选择所有元素 */
* {
  box-sizing: border-box;
}
```
---
## 🧩 二、关系选择器（5种连接符）
### 1. 后代选择器 (空格)
```css
/* 选择 .article 内所有 <p> */
.article p {
  line-height: 1.6;
}
```
### 2. 子元素选择器 (>)
```css
/* 只选择 .menu 的直接子元素 <li> */
.menu > li {
  border-bottom: 1px solid #eee;
}
```
### 3. 相邻兄弟选择器 (+)
```css
/* 选择紧跟在 h2 后的第一个 <p> */
h2 + p {
  margin-top: 0;
}
```
### 4. 通用兄弟选择器 (~)
```css
/* 选择 h3 后的所有同级 <p> */
h3 ~ p {
  color: #666;
}
```
### 5. 列选择器 (||)（实验性）
```css
/* 选择表格中列有 col-active 类 */
col.col-active || td {
  background: #f0f9ff;
}
```
---
## 🎭 三、属性选择器（7种匹配武器）
```css
/* 存在 title 属性 */
[title] {...} 

/* title="help" */
[title="help"] {...}

/* title 以 "icon-" 开头 */
[title^="icon-"] {...} 

/* title 以 ".pdf" 结尾 */
[title$=".pdf"] {...}

/* title 包含 "example" */
[title*="example"] {...}

/* 独立单词匹配（空格分隔） */
[class~="active"] {...}

/* 连字符前缀匹配（lang|="zh"） */
[lang|="zh"] {...} 
```
---
## 👻 四、伪类选择器（状态类）
### 1. 动态伪类
```css
a:link {...}     /* 未访问 */
a:visited {...}  /* 已访问 */
a:hover {...}    /* 鼠标悬停 */
a:active {...}   /* 激活状态 */
input:focus {...} /* 获得焦点 */
```
### 2. 结构伪类
```css
/* 第一个子元素 */
li:first-child {...}

/* 最后一个子元素 */
li:last-child {...}

/* 第3个子元素 */
li:nth-child(3) {...}

/* 奇数行 */
tr:nth-child(odd) {...}

/* 唯一子元素 */
p:only-child {...}

/* 空元素 */
div:empty {...}
```
### 3. 表单伪类
```css
input:checked {...}   /* 勾选状态 */
input:disabled {...}  /* 禁用状态 */
input:required {...}  /* 必填项 */
input:in-range {...}  /* 值在范围内 */
```
---
## 🧪 五、伪元素选择器（虚拟元素）
```css
/* 段落首行 */
p::first-line {...}

/* 段落首字母 */
p::first-letter {...}

/* 元素前插入内容 */
blockquote::before {
  content: "“";
  font-size: 2em;
}

/* 元素后插入内容 */
.tooltip::after {
  content: attr(data-tip);
}

/* 选中的文本 */
::selection {
  background: yellow;
}
```
---
## 🎯 六、选择器优先级计算（4级权重）
|选择器类型|示例|权重值|
| :---------- | ---------- | ---------- |
|行内样式|style="..."|1000|
|ID 选择器|#header|100|
|类/属性/伪类选择器|.active|10|
|元素/伪元素选择器|p / ::after|1|
|通配符/关系符|* / > / +|0|

计算规则：
```css
#nav .item:hover     /* 100 + 10 + 10 = 120 */
header#top a.active  /* 1 + 100 + 10 = 111 */
```
---
## 💡 高级技巧与实战应用
### 1. 性能优化
```css
/* 避免过度使用通用选择器 */
/* 不佳： */
div span {...} 

/* 更优： */
.specific-span {...}
```
### 2. 动态样式控制
```css
/* 根据属性动态改变样式 */
a[href^="https"]::after {
  content: url(secure-icon.svg);
}
```
### 3. 表单进阶
```css
/* 未勾选的复选框 */
input[type="checkbox"]:not(:checked) {
  opacity: 0.5;
}
```
### 4. 现代伪类应用
```css
/* 首个子元素 */
:first-child { ... }

/* 用户无效输入 */
input:user-invalid { 
  border-color: red;
}
```
### 5. 选择器逻辑组合
```css
/* 排除特定元素 */
article :not(.ad) {
  max-width: 800px;
}

/* 组合选择器 */
button:disabled, 
.button-disabled {
  cursor: not-allowed;
}
```
---
## 🌐 浏览器支持速查表
|选择器|Chrome|Firefox|Safari|Edge|
| :---- | ----- | ---- |---- |---- |
|:is()|✅ 88+|✅ 78+|✅ 14+|✅ 88+|
|:where()|✅ 88+|✅ 78+|✅ 14+|✅ 88+|
|:has()|✅ 105+|✅ 121+|🚫|✅ 105+|
|::marker|✅ 86+|✅ 68+|✅ 14+|✅ 86+|
|:focus-visible|✅ 86+|✅ 85+|✅ 15.4+|✅ 86+|

> ✅ = 支持 🚫 = 不支持
掌握这些选择器组合，能让你如CSS忍者般精准定位元素！🏹

## ```<div class="static active"></div>``` 中 class 写样式的时候谁的优先级更高
```
在 CSS 中，样式优先级不是由 HTML 的 class 属性中的类名顺序决定的。<div class="static active"></div> 中的两个类名优先级是相等的，关键看样式表中的定义顺序和选择器权重。
```
### 优先级规则：
1. 选择器权重决定优先级：
    - !important > 行内样式 > ID选择器 > 类/属性/伪类选择器 > 元素/伪元素选择器 > 通配符
1. 相同权重的比较原则：
    - 后定义的样式会覆盖先定义的样式（样式表顺序优先）
    - HTML 属性中的类名顺序无关紧要
---

### 示例说明：
```css
/* 权重：0-0-1-0 */
.static {
  color: red;
}

/* 权重：0-0-1-0 */
.active {
  color: blue;
}
```
#### 结果：
- <div class="static active"> </div>会显示 蓝色文字
- 因为 .active 定义在 .static 之后，后定义的覆盖先定义的
#### 如果调换顺序：
```css
.active {
  color: blue;
}

.static {
  color: red;
}
```
- 结果变成 红色文字
---

### 更复杂的权重比较：
```css
/* 权重：0-0-1-0 */
.static.active { 
  font-weight: bold; /* 双类选择器权重更高 */
}

/* 权重：0-0-1-0 */
.active {
  font-weight: normal;
}
```
#### 结果：
- <div class="static active"> </div> 的字体为 粗体
- 即使 .active 定义在双类选择器之后，因为 .static.active 权重更高
---

### 关键总结：
1. 类名顺序不影响：.static.active 与 .active.static 等价
1. 样式表定义顺序：相同权重下，后定义的生效
1. 选择器权重：
    - 类选择器 .class：权重 0-0-1-0
    - 双类选择器 .class1.class2：权重 0-0-2-0
    - ID 选择器 #id：权重 0-1-0-0
---

### 解决优先级冲突技巧：
```css
/* 方案1：提高选择器权重 */
div.static.active {
  color: purple;
}

/* 方案2：改变定义顺序 */
.active { color: blue; }
.static { color: red; } /* 后定义的生效 */

/* 方案3：谨慎使用 !important（不推荐） */
.static {
  color: red !important; /* 强制最高优先级 */
}
```
> 📌 最佳实践：当有样式冲突时，优先使用更具体的选择器（如 div.header.active）而不是改变顺序或使用 !important。

