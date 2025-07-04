<template>
    <div class="
                            
                            
                            
                        ">
        <div class="ai-entry"><!--1507-->
            <div>
                <div data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1512-->
                            <div class="cosd-markdown-content "><!--1513-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>computed</strong>‌<mark
                                                class="flexible-marker flexible-marker-default">是计算属性，基于依赖缓存并自动计算返回值；</mark>‌<strong>watch</strong>‌</mark>是监听器，响应数据变化执行回调，支持异步操作。
                                    </p>
                                </div><!--1513-->
                            </div>
                        </div>
                    </div>
                </div><!--1508-->
            </div><!--1507--><!--1514-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1519-->
                            <div class="cosd-markdown-content "><!--1520-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>核心区别</strong>‌</mark>
                                    </p>
                                </div><!--1520-->
                            </div>
                        </div>
                    </div>
                </div><!--1515-->
            </div><!--1514--><!--1521-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1526-->
                            <div class="cosd-markdown-content "><!--1527-->
                                <div class="marklang">
                                    <ol>
                                        <li>
                                            <p class="marklang-paragraph"><mark
                                                    class="flexible-marker flexible-marker-default">‌<strong>功能定位</strong>‌</mark>。
                                            </p>
                                            <ul>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>computed</strong>‌</mark>：用于声明式地派生新数据，依赖其他响应式属性自动计算并返回结果。‌‌<span
                                                        disable-audio="true" disable-copy="true"></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1529--><span
                                                                class="cos-tooltip cosd-citation"><!--1532--><span
                                                                    class="cosd-citation-citationId">1<!--1533--></span><!--1532--></span><!--1530--><!--1534--><!--1534--><!--1529--></span></span>
                                                </li>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>watch</strong>‌</mark>：用于观察数据变化并执行副作用（如异步请求或复杂逻辑），无返回值要求。‌‌<span
                                                        disable-audio="true" disable-copy="true"></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1536--><span
                                                                class="cos-tooltip cosd-citation"><!--1539--><span
                                                                    class="cosd-citation-citationId">2<!--1540--></span><!--1539--></span><!--1537--><!--1541--><!--1541--><!--1536--></span></span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p class="marklang-paragraph"><mark
                                                    class="flexible-marker flexible-marker-default">‌<strong>缓存机制</strong>‌</mark>。
                                            </p>
                                            <ul>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>computed</strong>‌</mark>：依赖未变化时直接返回缓存结果，避免重复计算。‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1543--><span
                                                                class="cos-tooltip cosd-citation"><!--1546--><span
                                                                    class="cosd-citation-citationId">3<!--1547--></span><!--1546--></span><!--1544--><!--1548--><!--1548--><!--1543--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1550--><span
                                                                class="cos-tooltip cosd-citation"><!--1553--><span
                                                                    class="cosd-citation-citationId">4<!--1554--></span><!--1553--></span><!--1551--><!--1555--><!--1555--><!--1550--></span></span>
                                                </li>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>watch</strong>‌</mark>：每次数据变化均触发回调，无缓存。‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1557--><span
                                                                class="cos-tooltip cosd-citation"><!--1560--><span
                                                                    class="cosd-citation-citationId">1<!--1561--></span><!--1560--></span><!--1558--><!--1562--><!--1562--><!--1557--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1564--><span
                                                                class="cos-tooltip cosd-citation"><!--1567--><span
                                                                    class="cosd-citation-citationId">4<!--1568--></span><!--1567--></span><!--1565--><!--1569--><!--1569--><!--1564--></span></span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p class="marklang-paragraph"><mark
                                                    class="flexible-marker flexible-marker-default">‌<strong>异步支持</strong>‌</mark>。
                                            </p>
                                            <ul>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>computed</strong>‌</mark>：不支持异步操作，必须同步返回计算结果。‌‌<span
                                                        disable-audio="true" disable-copy="true"></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1571--><span
                                                                class="cos-tooltip cosd-citation"><!--1574--><span
                                                                    class="cosd-citation-citationId">2<!--1575--></span><!--1574--></span><!--1572--><!--1576--><!--1576--><!--1571--></span></span>
                                                </li>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>watch</strong>‌</mark>：可在回调中执行异步任务（如API调用）。‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1578--><span
                                                                class="cos-tooltip cosd-citation"><!--1581--><span
                                                                    class="cosd-citation-citationId">2<!--1582--></span><!--1581--></span><!--1579--><!--1583--><!--1583--><!--1578--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1585--><span
                                                                class="cos-tooltip cosd-citation"><!--1588--><span
                                                                    class="cosd-citation-citationId">4<!--1589--></span><!--1588--></span><!--1586--><!--1590--><!--1590--><!--1585--></span></span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p class="marklang-paragraph"><mark
                                                    class="flexible-marker flexible-marker-default">‌<strong>初始监听行为</strong>‌</mark>。
                                            </p>
                                            <ul>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>computed</strong>‌</mark>：组件初始化时立即计算并监听依赖。‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1592--><span
                                                                class="cos-tooltip cosd-citation"><!--1595--><span
                                                                    class="cosd-citation-citationId">1<!--1596--></span><!--1595--></span><!--1593--><!--1597--><!--1597--><!--1592--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1599--><span
                                                                class="cos-tooltip cosd-citation"><!--1602--><span
                                                                    class="cosd-citation-citationId">3<!--1603--></span><!--1602--></span><!--1600--><!--1604--><!--1604--><!--1599--></span></span>
                                                </li>
                                                <li><mark
                                                        class="flexible-marker flexible-marker-default">‌<strong>watch</strong>‌</mark>：默认不监听初始值，需通过<code>immediate: true</code>显式启用。‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1606--><span
                                                                class="cos-tooltip cosd-citation"><!--1609--><span
                                                                    class="cosd-citation-citationId">1<!--1610--></span><!--1609--></span><!--1607--><!--1611--><!--1611--><!--1606--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1613--><span
                                                                class="cos-tooltip cosd-citation"><!--1616--><span
                                                                    class="cosd-citation-citationId">4<!--1617--></span><!--1616--></span><!--1614--><!--1618--><!--1618--><!--1613--></span></span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div><!--1527-->
                            </div>
                        </div>
                    </div>
                </div><!--1522-->
            </div><!--1521--><!--1619-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1624-->
                            <div class="cosd-markdown-content "><!--1625-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>使用场景</strong>‌</mark>
                                    </p>
                                </div><!--1625-->
                            </div>
                        </div>
                    </div>
                </div><!--1620-->
            </div><!--1619--><!--1626-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1631-->
                            <div class="cosd-markdown-content "><!--1632-->
                                <div class="marklang">
                                    <ol>
                                        <li>
                                            <p class="marklang-paragraph"><mark
                                                    class="flexible-marker flexible-marker-default">‌<strong>computed适用场景</strong>‌</mark>。
                                            </p>
                                            <ul>
                                                <li>多属性联合计算（如购物车总价、数据格式化）。‌‌<span disable-audio="true"
                                                        disable-copy="true"></span>‌‌<span disable-audio="true"
                                                        disable-copy="true"><span rl-type="stop"><!--1634--><span
                                                                class="cos-tooltip cosd-citation"><!--1637--><span
                                                                    class="cosd-citation-citationId">1<!--1638--></span><!--1637--></span><!--1635--><!--1639--><!--1639--><!--1634--></span></span>
                                                </li>
                                                <li>高频访问但依赖稳定的派生数据（如过滤列表）。‌‌<span disable-audio="true"
                                                        disable-copy="true"><span rl-type="stop"><!--1641--><span
                                                                class="cos-tooltip cosd-citation"><!--1644--><span
                                                                    class="cosd-citation-citationId">2<!--1645--></span><!--1644--></span><!--1642--><!--1646--><!--1646--><!--1641--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1648--><span
                                                                class="cos-tooltip cosd-citation"><!--1651--><span
                                                                    class="cosd-citation-citationId">5<!--1652--></span><!--1651--></span><!--1649--><!--1653--><!--1653--><!--1648--></span></span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p class="marklang-paragraph"><mark
                                                    class="flexible-marker flexible-marker-default">‌<strong>watch适用场景</strong>‌</mark>。
                                            </p>
                                            <ul>
                                                <li>数据变化触发复杂逻辑（如路由监听、搜索关键词响应）。‌‌<span disable-audio="true"
                                                        disable-copy="true"></span>‌‌<span disable-audio="true"
                                                        disable-copy="true"><span rl-type="stop"><!--1655--><span
                                                                class="cos-tooltip cosd-citation"><!--1658--><span
                                                                    class="cosd-citation-citationId">2<!--1659--></span><!--1658--></span><!--1656--><!--1660--><!--1660--><!--1655--></span></span>
                                                </li>
                                                <li>深度监听对象/数组变化（需配置<code>deep: true</code>）。‌‌<span disable-audio="true"
                                                        disable-copy="true"><span rl-type="stop"><!--1662--><span
                                                                class="cos-tooltip cosd-citation"><!--1665--><span
                                                                    class="cosd-citation-citationId">2<!--1666--></span><!--1665--></span><!--1663--><!--1667--><!--1667--><!--1662--></span></span>‌‌<span
                                                        disable-audio="true" disable-copy="true"><span
                                                            rl-type="stop"><!--1669--><span
                                                                class="cos-tooltip cosd-citation"><!--1672--><span
                                                                    class="cosd-citation-citationId">4<!--1673--></span><!--1672--></span><!--1670--><!--1674--><!--1674--><!--1669--></span></span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div><!--1632-->
                            </div>
                        </div>
                    </div>
                </div><!--1627-->
            </div><!--1626--><!--1675-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1680-->
                            <div class="cosd-markdown-content "><!--1681-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>代码示例</strong>‌</mark>
                                    </p>
                                </div><!--1681-->
                            </div>
                        </div>
                    </div>
                </div><!--1676-->
            </div><!--1675--><!--1682-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--1687-->
                            <div class="cosd-markdown-content ">
                                <div class="marklang">
                                    <pre><div class="code-header"><span rl-type="stop">javascript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div><div data-line-number="7" class="code-number"></div><div data-line-number="8" class="code-number"></div><div data-line-number="9" class="code-number"></div><div data-line-number="10" class="code-number"></div><div data-line-number="11" class="code-number"></div><div data-line-number="12" class="code-number"></div><div data-line-number="13" class="code-number"></div><div data-line-number="14" class="code-number"></div><div data-line-number="15" class="code-number"></div><div data-line-number="16" class="code-number"></div></div><div class="code-right"><code class="hljs language-javascript"><span class="hljs-comment">// computed示例</span>
<span class="hljs-attr">computed</span>: {
<span class="hljs-title function_">fullName</span>(<span class="hljs-params"></span>) {
<span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">firstName</span> + <span class="hljs-string">' '</span> + <span class="hljs-variable language_">this</span>.<span class="hljs-property">lastName</span>; <span class="hljs-comment">// 自动缓存</span>
}
}



<span class="hljs-comment">// watch示例</span>
<span class="hljs-attr">watch</span>: {
<span class="hljs-title function_">searchQuery</span>(<span class="hljs-params">newVal</span>) {
<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">fetchResults</span>(newVal); <span class="hljs-comment">// 支持异步请求</span>
},
<span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// 初始加载即执行</span>
}
</code></div></div></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--1683-->
            </div><!--1682--><!--1506-->
        </div>
    </div>
</template>