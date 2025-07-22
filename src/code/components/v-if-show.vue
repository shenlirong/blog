<template>
    <div class="ai-entry"><!--22519-->
        <div>
            <div data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22524-->
                        <div class="cosd-markdown-content "><!--22525-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>v-if 和 v-show
                                            的核心区别在于渲染机制</strong>‌</mark>：v-if 通过条件判断动态创建/销毁 DOM 元素，而 v-show 仅通过 CSS 的
                                    display 属性切换元素可见性。主要使用场景建议：频繁切换（如选项卡）用 v-show，初始渲染条件不稳定或需减少 DOM 节点时用 v-if。</p>
                            </div><!--22525-->
                        </div>
                    </div>
                </div>
            </div><!--22520-->
        </div><!--22519--><!--22526-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22531-->
                        <div class="cosd-markdown-content "><!--22532-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>核心区别对比</strong>‌</mark>
                                </p>
                            </div><!--22532-->
                        </div>
                    </div>
                </div>
            </div><!--22527-->
        </div><!--22526--><!--22533-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22538-->
                        <div class="cosd-markdown-content "><!--22539-->
                            <div class="marklang">
                                <ol>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>DOM
                                                    操作机制</strong>‌</mark>。</p>
                                        <ul>
                                            <li>v-if：条件为假时完全移除 DOM 元素，销毁组件实例及事件监听。‌‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--22541--><span
                                                            class="cos-tooltip cosd-citation"><!--22544--><span
                                                                class="cosd-citation-citationId">1<!--22545--></span><!--22544--></span><!--22542--><!--22546--><!--22546--><!--22541--></span></span>‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--22548--><span
                                                            class="cos-tooltip cosd-citation"><!--22551--><span
                                                                class="cosd-citation-citationId">2<!--22552--></span><!--22551--></span><!--22549--><!--22553--><!--22553--><!--22548--></span></span>
                                            </li>
                                            <li>v-show：仅修改元素的 <code>display: none</code> 样式，DOM 元素始终存在。‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--22555--><span
                                                            class="cos-tooltip cosd-citation"><!--22558--><span
                                                                class="cosd-citation-citationId">2<!--22559--></span><!--22558--></span><!--22556--><!--22560--><!--22560--><!--22555--></span></span>‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--22562--><span
                                                            class="cos-tooltip cosd-citation"><!--22565--><span
                                                                class="cosd-citation-citationId">3<!--22566--></span><!--22565--></span><!--22563--><!--22567--><!--22567--><!--22562--></span></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>生命周期影响</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>v-if 切换时会触发组件的 <code>created/mounted</code> 等完整生命周期钩子。</li>
                                            <li>v-show 初始化后不再触发生命周期变化，仅执行一次渲染。‌‌<span disable-audio="true"
                                                    disable-copy="true"></span>‌‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--22569--><span
                                                            class="cos-tooltip cosd-citation"><!--22572--><span
                                                                class="cosd-citation-citationId">4<!--22573--></span><!--22572--></span><!--22570--><!--22574--><!--22574--><!--22569--></span></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p class="marklang-paragraph"><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>模板语法支持</strong>‌</mark>。
                                        </p>
                                        <ul>
                                            <li>v-if 支持 <code>&lt;template&gt;</code> 标签和配套的 v-else-if/v-else 语法。</li>
                                            <li>v-show 无法与 v-else 联用，也不支持 <code>&lt;template&gt;</code>‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--22576--><span
                                                            class="cos-tooltip cosd-citation"><!--22579--><span
                                                                class="cosd-citation-citationId">2<!--22580--></span><!--22579--></span><!--22577--><!--22581--><!--22581--><!--22576--></span></span>‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--22583--><span
                                                            class="cos-tooltip cosd-citation"><!--22586--><span
                                                                class="cosd-citation-citationId">5<!--22587--></span><!--22586--></span><!--22584--><!--22588--><!--22588--><!--22583--></span></span>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div><!--22539-->
                        </div>
                    </div>
                </div>
            </div><!--22534-->
        </div><!--22533--><!--22589-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22594-->
                        <div class="cosd-markdown-content "><!--22595-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>性能特征与使用场景</strong>‌</mark>
                                </p>
                            </div><!--22595-->
                        </div>
                    </div>
                </div>
            </div><!--22590-->
        </div><!--22589--><!--22596-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22601-->
                        <div class="cosd-markdown-content "><!--22602-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>优先使用 v-show
                                            的情况</strong>‌</mark></p>
                                <ul>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>高频切换场景</strong>‌</mark>：如选项卡切换、折叠面板（切换成本更低）。
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>需要保留组件状态</strong>‌</mark>：如表单输入内容的缓存（DOM
                                        未被销毁）。‌‌<span disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--22604--><span
                                                    class="cos-tooltip cosd-citation"><!--22607--><span
                                                        class="cosd-citation-citationId">6<!--22608--></span><!--22607--></span><!--22605--><!--22609--><!--22609--><!--22604--></span></span>‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--22611--><span
                                                    class="cos-tooltip cosd-citation"><!--22614--><span
                                                        class="cosd-citation-citationId">7<!--22615--></span><!--22614--></span><!--22612--><!--22616--><!--22616--><!--22611--></span></span>
                                    </li>
                                </ul>
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>优先使用 v-if
                                            的情况</strong>‌</mark></p>
                                <ul>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>初始化条件不稳定</strong>‌</mark>：如权限校验未完成时避免渲染敏感内容。
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>需要触发生命周期回调</strong>‌</mark>：如组件显示时才需执行的接口请求。‌‌<span
                                            disable-audio="true" disable-copy="true"></span>‌‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--22618--><span
                                                    class="cos-tooltip cosd-citation"><!--22621--><span
                                                        class="cosd-citation-citationId">4<!--22622--></span><!--22621--></span><!--22619--><!--22623--><!--22623--><!--22618--></span></span>
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>优化首屏性能</strong>‌</mark>：初始不显示的元素可减少
                                        DOM 节点数量。‌‌<span disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--22625--><span
                                                    class="cos-tooltip cosd-citation"><!--22628--><span
                                                        class="cosd-citation-citationId">2<!--22629--></span><!--22628--></span><!--22626--><!--22630--><!--22630--><!--22625--></span></span>‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--22632--><span
                                                    class="cos-tooltip cosd-citation"><!--22635--><span
                                                        class="cosd-citation-citationId">6<!--22636--></span><!--22635--></span><!--22633--><!--22637--><!--22637--><!--22632--></span></span>
                                    </li>
                                </ul>
                            </div><!--22602-->
                        </div>
                    </div>
                </div>
            </div><!--22597-->
        </div><!--22596--><!--22638-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22643-->
                        <div class="cosd-markdown-content "><!--22644-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>进阶使用建议</strong>‌</mark>
                                </p>
                            </div><!--22644-->
                        </div>
                    </div>
                </div>
            </div><!--22639-->
        </div><!--22638--><!--22645-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--22650-->
                        <div class="cosd-markdown-content "><!--22651-->
                            <div class="marklang">
                                <ul>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>组合使用策略</strong>‌</mark>：表格行渲染时，对总容器用
                                        v-if 控制显隐，行内元素用 v-show 处理局部切换。</li>
                                    <li><mark class="flexible-marker flexible-marker-default">‌<strong>SSR
                                                场景注意</strong>‌</mark>：服务端渲染时 v-show 可能引发 hydration 错误，优先使用 v-if。‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--22653--><span
                                                    class="cos-tooltip cosd-citation"><!--22656--><span
                                                        class="cosd-citation-citationId">4<!--22657--></span><!--22656--></span><!--22654--><!--22658--><!--22658--><!--22653--></span></span>
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>性能陷阱提示</strong>‌</mark>：频繁切换的复杂组件使用
                                        v-if 可能导致页面卡顿，需用 keep-alive 优化。‌‌<span disable-audio="true"
                                            disable-copy="true"></span></li>
                                </ul>
                            </div><!--22651-->
                        </div>
                    </div>
                </div>
            </div><!--22646-->
        </div><!--22645--><!--22518-->
    </div>
</template>