<template>
    <h1>什么是管道</h1>
    <p>管道是Angular中用于在模板中转换数据显示格式的简单函数。它们接收输入值并返回转换后的值，非常适合用于格式化字符串、货币金额、日期等常见场景。</p>
    <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
        <div class="marklang">
            <p class="marklang-paragraph">Angular的管道（Pipe）是用于在组件模板中转换或格式化数据的语法结构，通过“|”符号调用，无需修改组件逻辑即可直接在视图层处理数据。 ‌<span
                    disable-audio="true" disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                class="cosd-citation-citationId">1</span></span></span><span><span class="cosd-citation"
                            rl-type="stop"><span class="cosd-citation-citationId">2</span></span></span></span></p>
            <h3>核心特点</h3>
            <ul>
                <li>‌<strong>纯函数</strong>‌：不会修改原数据，返回转换后的新值 ‌<span disable-audio="true" disable-copy="true"><span><span
                                class="cosd-citation" rl-type="stop"><span
                                    class="cosd-citation-citationId">1</span></span></span></span></li>
                <li>‌<strong>链式调用</strong>‌：支持多个管道依次处理同一数据（例如先格式化日期再转换为大写） ‌<span disable-audio="true"
                        disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                    class="cosd-citation-citationId">1</span></span></span><span><span
                                class="cosd-citation" rl-type="stop"><span
                                    class="cosd-citation-citationId">5</span></span></span></span></li>
                <li>‌<strong>参数配置</strong>‌：大多数管道支持通过参数调整转换逻辑（如日期格式、货币符号等） ‌<span disable-audio="true"
                        disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                    class="cosd-citation-citationId">1</span></span></span><span><span
                                class="cosd-citation" rl-type="stop"><span
                                    class="cosd-citation-citationId">5</span></span></span></span></li>
            </ul>
            <h3>主要用途</h3>
            <ol>
                <li>
                    <p class="marklang-paragraph">‌<strong>数据格式化</strong>‌</p>
                    <ul>
                        <li>日期格式化： <pre v-pre><code>{{ today | date: 'fullDate' }}</code>（</pre>输出：2023年11月15日星期三） ‌<span
                                disable-audio="true" disable-copy="true"><span><span class="cosd-citation"
                                        rl-type="stop"><span
                                            class="cosd-citation-citationId">5</span></span></span></span></li>
                        <li>货币格式化：<pre v-pre><code>{{ price | currency: 'CNY': 'symbol': '1.2-2' }}</code></pre>（输出：¥100.00） ‌<span
                                disable-audio="true" disable-copy="true"><span><span class="cosd-citation"
                                        rl-type="stop"><span
                                            class="cosd-citation-citationId">5</span></span></span></span></li>
                        <li>数字格式化： <pre v-pre><code>{{ pi | number: '1.2-2' }}</code></pre>（输出：3.14） ‌<span disable-audio="true"
                                disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                            class="cosd-citation-citationId">5</span></span></span></span></li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>数据转换</strong>‌</p>
                    <ul>
                        <li>大小写转换： <pre v-pre><code>{{ 'Angular' | uppercase }}</code></pre>（输出：ANGULAR） ‌<span disable-audio="true"
                                disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                            class="cosd-citation-citationId">5</span></span></span></span></li>
                        <li>JSON格式化：<pre v-pre><code>{{ user | json }}</code></pre>（输出格式化后的JSON字符串） ‌<span disable-audio="true"
                                disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                            class="cosd-citation-citationId">5</span></span></span></span></li>
                    </ul>
                </li>
                <li>
                    <p class="marklang-paragraph">‌<strong>自定义扩展</strong>‌<br>
                        可通过创建自定义管道处理复杂逻辑（例如数组过滤、数据清洗等），支持链式调用和参数配置。 ‌<span disable-audio="true"
                            disable-copy="true"><span><span class="cosd-citation" rl-type="stop"><span
                                        class="cosd-citation-citationId">1</span></span></span><span><span
                                    class="cosd-citation" rl-type="stop"><span
                                        class="cosd-citation-citationId">5</span></span></span></span></p>
                </li>
            </ol>
        </div>
    </div>
</template>
