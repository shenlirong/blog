<template>
    <div class="marklang">
        <p class="marklang-paragraph">‌<strong>ref需要使用.value来访问和更新数据，而reactive不需要，主要原因在于它们处理数据的方式不同。</strong>‌</p>
        <h3>ref和reactive的基本概念和区别</h3>
        <ol>
            <li>
                <p>‌<strong>ref</strong>‌：</p>
                <ul>
                    <li>‌<strong>数据类型</strong>‌ref可以处理基础数据类型（如字符串、数字、布尔值）和复杂数据类型（如对象）。</li>
                    <li>‌<strong>访问方式</strong>‌：无论是基础数据类型还是对象，访问数据都需要通过<code>.value</code>形式进行，更新数据也需要通过<code>.value</code>来更新。但在<code>&lt;template&gt;</code>中使用ref的值时不需要带上<code>.value</code>。
                    </li>
                    <li>‌<strong>内部实现</strong>‌：ref内部本质上是调用了reactive方法，将传入的对象转换成具有深层次的响应式对象‌<span disable-audio="true"
                            disable-copy="true"><span rl-type="stop"><!--860--><span
                                    class="cos-tooltip cosd-citation"><!--863--><span
                                        class="cosd-citation-citationId">1<!--864--></span><!--863--></span><!--861--><!--865--><!--865--><!--860--></span><span
                                rl-type="stop"><!--867--><span class="cos-tooltip cosd-citation"><!--870--><span
                                        class="cosd-citation-citationId">2<!--871--></span><!--870--></span><!--868--><!--872--><!--872--><!--867--></span></span>。
                    </li>
                </ul>
            </li>
            <li>
                <p class="marklang-paragraph">‌<strong>reactive</strong>‌：</p>
                <ul>
                    <li>‌<strong>数据类型</strong>‌：仅处理复杂数据类型（如对象），不允许传递基础类型的值。</li>
                    <li>‌<strong>访问方式</strong>‌：直接访问对象的属性，不需要通过额外的<code>.value</code>。</li>
                    <li>‌<strong>内部实现</strong>‌：基于ES6的Proxy对象，通过拦截属性的获取和设置操作来实现响应式‌<span disable-audio="true"
                            disable-copy="true"><span rl-type="stop"><!--874--><span
                                    class="cos-tooltip cosd-citation"><!--877--><span
                                        class="cosd-citation-citationId">2<!--878--></span><!--877--></span><!--875--><!--879--><!--879--><!--874--></span><span
                                rl-type="stop"><!--881--><span class="cos-tooltip cosd-citation"><!--884--><span
                                        class="cosd-citation-citationId">3<!--885--></span><!--884--></span><!--882--><!--886--><!--886--><!--881--></span></span>。
                    </li>
                </ul>
            </li>
        </ol>
        <h3>为什么ref需要.value而reactive不需要</h3>
        <ol>
            <li>
                <p class="marklang-paragraph">‌<strong>设计哲学</strong>‌：</p>
                <ul>
                    <li>‌<strong>ref的设计</strong>‌：ref的设计初衷是为了替代Vue 2中的data属性，能够更好地与Vue
                        2的迁移兼容。通过<code>.value</code>访问和更新数据，使得代码更加直观和易于理解。</li>
                    <li>‌<strong>reactive的设计</strong>‌：由于reactive仅处理对象，且不涉及基础数据类型的处理，因此直接访问对象的属性即可，无需额外的语法。</li>
                </ul>
            </li>
            <li>
                <p class="marklang-paragraph">‌<strong>使用场景</strong>‌：</p>
                <ul>
                    <li>‌<strong>ref</strong>‌：适用于需要处理基础数据类型和复杂数据类型的场景，提供了一种统一的处理方式。</li>
                    <li>‌<strong>reactive</strong>‌：适用于仅处理复杂数据类型的场景，由于其不支持基础数据类型，使用起来更为简单直接。</li>
                </ul>
            </li>
        </ol>
        <h3>总结对比表</h3>
        <table>
            <thead>
                <tr>
                    <th>‌<strong>场景</strong>‌</th>
                    <th>‌<strong>推荐使用</strong>‌</th>
                    <th>‌<strong>原因</strong>‌</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>基本类型数据</td>
                    <td><code>ref</code></td>
                    <td><code>reactive</code>不支持基本类型</td>
                </tr>
                <tr>
                    <td>DOM/组件引用</td>
                    <td><code>ref</code></td>
                    <td><code>reactive</code>无法直接绑定模板引用</td>
                </tr>
                <tr>
                    <td>整体替换对象</td>
                    <td><code>ref</code></td>
                    <td><code>reactive</code>替换会丢失响应式</td>
                </tr>
                <tr>
                    <td>明确的值传递语义</td>
                    <td><code>ref</code></td>
                    <td><code>.value</code>提供清晰接口</td>
                </tr>
                <tr>
                    <td>独立状态管理</td>
                    <td><code>ref</code></td>
                    <td>代码更简洁，避免不必要的对象嵌套</td>
                </tr>
            </tbody>
        </table>
        <h2>reactive和 ref 对比</h2>
        <table data-draft-node="block" data-draft-type="table" data-size="normal" data-row-style="normal">
            <tbody>
                <tr>
                    <td>reactive</td>
                    <td>ref</td>
                </tr>
                <tr>
                    <td>❌ 只支持对象和数组（引用数据类型）</td>
                    <td>✅ 支持基本数据类型 + 引用数据类型</td>
                </tr>
                <tr>
                    <td>✅ 在 &lt;script&gt; 和 &lt;template&gt; 中无差别使用</td>
                    <td>❌ 在 &lt;script&gt; 和 &lt;template&gt; 使用方式不同（在 &lt;script&gt; 中要使用 .value）</td>
                </tr>
                <tr>
                    <td>❌ 重新分配一个新对象会丢失响应性</td>
                    <td>✅ 重新分配一个新对象不会失去响应</td>
                </tr>
                <tr>
                    <td>能直接访问属性</td>
                    <td>需要使用 .value 访问属性</td>
                </tr>
                <tr>
                    <td>❌ 将对象传入函数时，失去响应</td>
                    <td>✅ 传入函数时，不会失去响应</td>
                </tr>
                <tr>
                    <td>❌ 解构时会丢失响应性，需使用 toRefs</td>
                    <td>❌ 解构对象时会丢失响应性，需使用 toRefs</td>
                </tr>
            </tbody>
        </table>
        <ul>
            <li data-pid="hAQZ1bD2">ref 用于将基本类型的数据和引用数据类型（对象）转换为响应式数据，通过 .value 访问和修改。</li>
            <li data-pid="elEbqWxx">reactive 用于将对象转换为响应式数据，可以直接访问和修改属性，适用于复杂的嵌套对象和数组。</li>
        </ul>
    </div>

</template>
<style scoped>
li::marker {
    content: "";
}
</style>