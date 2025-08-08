<template>
    <div class=" ">
        <div class="ai-entry"><!--6092-->
            <div>
                <div data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6097-->
                            <div class="cosd-markdown-content "><!--6098-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>Interface与Type的核心区别</strong>‌</mark>在于：interface支持声明合并和继承机制，主要用于规范对象结构；而type具备更强的类型组合能力，适用于联合类型、元组等复杂类型定义。
                                    </p>
                                </div><!--6098-->
                            </div>
                        </div>
                    </div>
                </div><!--6093-->
            </div><!--6092--><!--6099-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6104-->
                            <div class="cosd-markdown-content "><!--6105-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>声明合并特性</strong>‌</mark>
                                    </p>
                                </div><!--6105-->
                            </div>
                        </div>
                    </div>
                </div><!--6100-->
            </div><!--6099--><!--6106-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6111-->
                            <div class="cosd-markdown-content "><!--6112-->
                                <div class="marklang">
                                    <ul>
                                        <li><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>interface</strong>‌</mark>：允许重复声明同名接口，自动合并属性与方法（示例：两个<code>Person</code>接口的<code>name</code>和<code>age</code>属性会合并）。‌‌<span
                                                disable-audio="true" disable-copy="true"></span>‌‌<span
                                                disable-audio="true" disable-copy="true"></span></li>
                                        <li><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>type</strong>‌</mark>：重复定义同名类型别名会导致编译错误，无法合并。‌
                                        </li>
                                    </ul>
                                </div><!--6112-->
                            </div>
                        </div>
                    </div>
                </div><!--6107-->
            </div><!--6106--><!--6120-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6125-->
                            <div class="cosd-markdown-content "><!--6126-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>扩展方式差异</strong>‌</mark>
                                    </p>
                                </div><!--6126-->
                            </div>
                        </div>
                    </div>
                </div><!--6121-->
            </div><!--6120--><!--6127-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6132-->
                            <div class="cosd-markdown-content "><!--6133-->
                                <div class="marklang">
                                    <ol>
                                        <li><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>接口继承</strong>‌</mark>。
                                            <ul>
                                                <li>interface通过<code>extends</code>实现继承（如<code>Dog extends Animal</code>）。
                                                </li>
                                                <li>type通过交叉类型<code>&amp;</code>组合对象（如<code>Dog = Animal &amp; { bark() }</code>）。
                                                </li>
                                            </ul>
                                        </li>
                                        <li><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>类实现机制</strong>‌</mark>。
                                            <ul>
                                                <li>interface可直接被类<code>implements</code>实现。
                                                </li>
                                                <li>type定义的对象类型虽然也能被类实现，但无法使用extends继承。
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div><!--6133-->
                            </div>
                        </div>
                    </div>
                </div><!--6128-->
            </div><!--6127--><!--6176-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6181-->
                            <div class="cosd-markdown-content "><!--6182-->
                                <div class="marklang">
                                    <p class="marklang-paragraph"><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>适用范围对比</strong>‌</mark>
                                    </p>
                                </div><!--6182-->
                            </div>
                        </div>
                    </div>
                </div><!--6177-->
            </div><!--6176--><!--6183-->
            <div>
                <div class="cos-space-mt-xxl" data-show="summary"
                    data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                    <div class="link-wrapper_2Zcj9">
                        <div class="cosd-markdown"><!--6188-->
                            <div class="cosd-markdown-content "><!--6189-->
                                <div class="marklang">
                                    <ol>
                                        <li><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>interface适用场景</strong>‌</mark>。
                                            <ul>
                                                <li>定义需要扩展的对象结构（如API请求参数类型）。
                                                </li>
                                            </ul>
                                        </li>
                                        <li><mark
                                                class="flexible-marker flexible-marker-default">‌<strong>type适用场景</strong>‌</mark>。
                                            <ul>
                                                <li>定义联合类型（如<code>ID = string | number</code>）。
                                                </li>
                                                <li>创建元组类型（如<code>Coordinates = [number, number]</code>）。
                                                </li>
                                                <li>组合交叉类型（如<code>Person = {name} &amp; {age}</code>）。</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div><!--6189-->
                            </div>
                        </div>
                    </div>
                </div><!--6184-->
            </div><!--6183--><!--6091-->
        </div>
    </div>
    <strong>
        关键区别总结
    </strong>
    <table>
        <thead>
            <tr>
                <th>特性</th>
                <th><code>type</code></th>
                <th><code>interface</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>语法</td>
                <td>使用 <code>=</code> 定义，支持任意类型</td>
                <td>使用 <code>{}</code> 定义，仅描述对象类型</td>
            </tr>
            <tr>
                <td>扩展性</td>
                <td>通过交叉类型 <code>&amp;</code> 组合类型</td>
                <td>通过 <code>extends</code> 继承接口</td>
            </tr>
            <tr>
                <td>声明合并</td>
                <td>不支持，重复定义会报错</td>
                <td>支持同名接口自动合并</td>
            </tr>
            <tr>
                <td>适用场景</td>
                <td>联合类型、元组、条件类型、映射类型等复杂操作</td>
                <td>面向对象设计、类实现、对象结构定义</td>
            </tr>
            <tr>
                <td>类实现</td>
                <td>无法直接被类 <code>implements</code>（除非定义为对象类型）</td>
                <td>可直接被类实现</td>
            </tr>
            <tr>
                <td>类型推导</td>
                <td>支持 <code>typeof</code> 动态推导变量类型</td>
                <td>不支持</td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
strong {
    background-color: white;
}
</style>