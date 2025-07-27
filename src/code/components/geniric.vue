<template>
    <h3>1.泛型基本概念</h3>
    <div data-show-ext="">
        <div class="cosd-markdown cos-space-mt-lg" id="1"><!--1131-->
            <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
                <div class="marklang">
                    <p class="marklang-paragraph">
                        泛型（Generics）是一种程序设计技术，它允许在定义类、接口或方法时使用‌<strong>类型参数</strong>‌（通常是占位符如<code>T</code>、<code>E</code>等），这些参数在使用时才被指定为具体类型。其核心目的是提高代码的‌<strong>复用性</strong>‌和‌<strong>类型安全性</strong>‌，同时减少冗余代码和类型转换错误。‌<span
                            disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2193--><span
                                    class="cos-tooltip cosd-citation"><!--2196--><span
                                        class="cosd-citation-citationId">1<!--2197--></span><!--2196--></span><!--2194--><!--2198--><!--2198--><!--2193--></span><span
                                rl-type="stop"><!--2200--><span class="cos-tooltip cosd-citation"><!--2203--><span
                                        class="cosd-citation-citationId">2<!--2204--></span><!--2203--></span><!--2201--><!--2205--><!--2205--><!--2200--></span></span>
                    </p>
                    <h3>泛型的核心特性：</h3>
                    <ol>
                        <li>
                            <p class="marklang-paragraph">‌<strong>参数化类型（Type Parameterization）</strong>‌<br>
                                泛型将数据类型抽象为参数，使得代码逻辑不依赖具体类型。例如定义泛型类 <code>Box&lt;T&gt;</code>，实际使用时可通过
                                <code>Box&lt;String&gt;</code> 或 <code>Box&lt;Integer&gt;</code> 指定具体类型。‌<span
                                    disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2207--><span
                                            class="cos-tooltip cosd-citation"><!--2210--><span
                                                class="cosd-citation-citationId">1<!--2211--></span><!--2210--></span><!--2208--><!--2212--><!--2212--><!--2207--></span><span
                                        rl-type="stop"><!--2214--><span
                                            class="cos-tooltip cosd-citation"><!--2217--><span
                                                class="cosd-citation-citationId">2<!--2218--></span><!--2217--></span><!--2215--><!--2219--><!--2219--><!--2214--></span></span>
                            </p>
                        </li>
                        <li>
                            <p class="marklang-paragraph">‌<strong>类型安全（Type Safety）</strong>‌<br>
                                在编译时进行类型检查，避免运行时因类型转换导致的错误（如 <code>ClassCastException</code>）。例如集合类
                                <code>List&lt;String&gt;</code> 只能添加字符串类型元素。‌<span disable-audio="true"
                                    disable-copy="true"><span rl-type="stop"><!--2221--><span
                                            class="cos-tooltip cosd-citation"><!--2224--><span
                                                class="cosd-citation-citationId">4<!--2225--></span><!--2224--></span><!--2222--><!--2226--><!--2226--><!--2221--></span><span
                                        rl-type="stop"><!--2228--><span
                                            class="cos-tooltip cosd-citation"><!--2231--><span
                                                class="cosd-citation-citationId">16<!--2232--></span><!--2231--></span><!--2229--><!--2233--><!--2233--><!--2228--></span></span>
                            </p>
                        </li>
                        <li>
                            <p class="marklang-paragraph">‌<strong>代码复用（Code Reusability）</strong>‌<br>
                                同一套逻辑可适用于多种数据类型。例如一个泛型方法 <code>T findMax(T[] array)</code> 既能处理整数数组，也能处理字符串数组。‌<span
                                    disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2235--><span
                                            class="cos-tooltip cosd-citation"><!--2238--><span
                                                class="cosd-citation-citationId">7<!--2239--></span><!--2238--></span><!--2236--><!--2240--><!--2240--><!--2235--></span><span
                                        rl-type="stop"><!--2242--><span
                                            class="cos-tooltip cosd-citation"><!--2245--><span
                                                class="cosd-citation-citationId">14<!--2246--></span><!--2245--></span><!--2243--><!--2247--><!--2247--><!--2242--></span></span>
                            </p>
                        </li>
                    </ol>
                    <h3>泛型的典型应用场景：</h3>
                    <ul>
                        <li>
                            <p class="marklang-paragraph">‌<strong>泛型类（Generic Class）</strong>‌<br>
                                类名后声明类型参数（如 <code>class Container&lt;T&gt; {...}</code>），内部成员（属性/方法）可直接使用
                                <code>T</code>。‌<span disable-audio="true" disable-copy="true"><span
                                        rl-type="stop"><!--2249--><span
                                            class="cos-tooltip cosd-citation"><!--2252--><span
                                                class="cosd-citation-citationId">4<!--2253--></span><!--2252--></span><!--2250--><!--2254--><!--2254--><!--2249--></span><span
                                        rl-type="stop"><!--2256--><span
                                            class="cos-tooltip cosd-citation"><!--2259--><span
                                                class="cosd-citation-citationId">6<!--2260--></span><!--2259--></span><!--2257--><!--2261--><!--2261--><!--2256--></span></span>
                            </p>
                            <pre><div class="code-header"><span rl-type="stop">java</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div></div><div class="code-right"><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Box</span>&lt;T&gt; {
    <span class="hljs-keyword">private</span> T content;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">set</span><span class="hljs-params">(T item)</span> { <span class="hljs-built_in">this</span>.content = item; }
    <span class="hljs-keyword">public</span> T <span class="hljs-title function_">get</span><span class="hljs-params">()</span> { <span class="hljs-keyword">return</span> content; }
}
</code></div></div></pre>
                        </li>
                        <li>
                            <p class="marklang-paragraph">‌<strong>泛型方法（Generic Method）</strong>‌<br>
                                在方法返回值前声明类型参数（如 <code>&lt;T&gt; T identity(T input)</code>），独立于所属类。静态方法也可使用泛型。‌<span
                                    disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2263--><span
                                            class="cos-tooltip cosd-citation"><!--2266--><span
                                                class="cosd-citation-citationId">4<!--2267--></span><!--2266--></span><!--2264--><!--2268--><!--2268--><!--2263--></span><span
                                        rl-type="stop"><!--2270--><span
                                            class="cos-tooltip cosd-citation"><!--2273--><span
                                                class="cosd-citation-citationId">9<!--2274--></span><!--2273--></span><!--2271--><!--2275--><!--2275--><!--2270--></span></span>
                            </p>
                            <pre><div class="code-header"><span rl-type="stop">java</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div></div><div class="code-right"><code class="hljs language-java"><span class="hljs-keyword">public</span> &lt;T&gt; T <span class="hljs-title function_">firstElement</span><span class="hljs-params">(T[] array)</span> {
    <span class="hljs-keyword">return</span> array;
}
</code></div></div></pre>
                        </li>
                        <li>
                            <p class="marklang-paragraph">‌<strong>泛型接口（Generic Interface）</strong>‌<br>
                                接口定义类型参数（如 <code>interface Repository&lt;T&gt; {...}</code>），实现类需指定具体类型。‌<span
                                    disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2277--><span
                                            class="cos-tooltip cosd-citation"><!--2280--><span
                                                class="cosd-citation-citationId">12<!--2281--></span><!--2280--></span><!--2278--><!--2282--><!--2282--><!--2277--></span><span
                                        rl-type="stop"><!--2284--><span
                                            class="cos-tooltip cosd-citation"><!--2287--><span
                                                class="cosd-citation-citationId">13<!--2288--></span><!--2287--></span><!--2285--><!--2289--><!--2289--><!--2284--></span></span>
                            </p>
                            <pre><div class="code-header"><span rl-type="stop">typescript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div></div><div class="code-right"><code class="hljs language-typescript"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">ApiResponse</span>&lt;T&gt; {
    <span class="hljs-attr">data</span>: T;
    <span class="hljs-attr">code</span>: <span class="hljs-built_in">number</span>;
}
</code></div></div></pre>
                        </li>
                    </ul>
                    <h3>泛型在不同语言中的实现：</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>语言</th>
                                <th>特性说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>‌<strong>Java</strong>‌</td>
                                <td>使用类型擦除（编译后泛型信息被移除），通过编译器保证类型安全。‌<span disable-audio="true" disable-copy="true"><span
                                            rl-type="stop"><!--2291--><span
                                                class="cos-tooltip cosd-citation"><!--2294--><span
                                                    class="cosd-citation-citationId">16<!--2295--></span><!--2294--></span><!--2292--><!--2296--><!--2296--><!--2291--></span><span
                                            rl-type="stop"><!--2298--><span
                                                class="cos-tooltip cosd-citation"><!--2301--><span
                                                    class="cosd-citation-citationId">17<!--2302--></span><!--2301--></span><!--2299--><!--2303--><!--2303--><!--2298--></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>‌<strong>C#</strong>‌</td>
                                <td>运行时保留泛型信息，支持更灵活的类型操作（如反射）。‌<span disable-audio="true" disable-copy="true"><span
                                            rl-type="stop"><!--2305--><span
                                                class="cos-tooltip cosd-citation"><!--2308--><span
                                                    class="cosd-citation-citationId">12<!--2309--></span><!--2308--></span><!--2306--><!--2310--><!--2310--><!--2305--></span><span
                                            rl-type="stop"><!--2312--><span
                                                class="cos-tooltip cosd-citation"><!--2315--><span
                                                    class="cosd-citation-citationId">13<!--2316--></span><!--2315--></span><!--2313--><!--2317--><!--2317--><!--2312--></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>‌<strong>TypeScript</strong>‌</td>
                                <td>编译时类型检查，泛型增强代码可读性和工具支持（如自动补全）。‌<span disable-audio="true" disable-copy="true"><span
                                            rl-type="stop"><!--2319--><span
                                                class="cos-tooltip cosd-citation"><!--2322--><span
                                                    class="cosd-citation-citationId">9<!--2323--></span><!--2322--></span><!--2320--><!--2324--><!--2324--><!--2319--></span><span
                                            rl-type="stop"><!--2326--><span
                                                class="cos-tooltip cosd-citation"><!--2329--><span
                                                    class="cosd-citation-citationId">10<!--2330--></span><!--2329--></span><!--2327--><!--2331--><!--2331--><!--2326--></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>‌<strong>Python</strong>‌</td>
                                <td>通过 <code>typing</code> 模块实现类型提示（如 <code>TypeVar</code>），无运行时强制类型检查。‌<span
                                        disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2333--><span
                                                class="cos-tooltip cosd-citation"><!--2336--><span
                                                    class="cosd-citation-citationId">15<!--2337--></span><!--2336--></span><!--2334--><!--2338--><!--2338--><!--2333--></span></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>泛型的优势：</h3>
                    <ol>
                        <li>‌<strong>减少重复代码</strong>‌：一份逻辑适配多种类型，避免为相似功能编写多个类/方法。‌<span disable-audio="true"
                                disable-copy="true"><span rl-type="stop"><!--2340--><span
                                        class="cos-tooltip cosd-citation"><!--2343--><span
                                            class="cosd-citation-citationId">5<!--2344--></span><!--2343--></span><!--2341--><!--2345--><!--2345--><!--2340--></span><span
                                    rl-type="stop"><!--2347--><span class="cos-tooltip cosd-citation"><!--2350--><span
                                            class="cosd-citation-citationId">7<!--2351--></span><!--2350--></span><!--2348--><!--2352--><!--2352--><!--2347--></span></span>
                        </li>
                        <li>‌<strong>增强可读性</strong>‌：明确类型约束（如 <code>Map&lt;String, Integer&gt;</code> 直观表示键值类型）。‌<span
                                disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2354--><span
                                        class="cos-tooltip cosd-citation"><!--2357--><span
                                            class="cosd-citation-citationId">9<!--2358--></span><!--2357--></span><!--2355--><!--2359--><!--2359--><!--2354--></span><span
                                    rl-type="stop"><!--2361--><span class="cos-tooltip cosd-citation"><!--2364--><span
                                            class="cosd-citation-citationId">10<!--2365--></span><!--2364--></span><!--2362--><!--2366--><!--2366--><!--2361--></span></span>
                        </li>
                        <li>‌<strong>优化性能</strong>‌：避免非泛型代码中的频繁装箱/拆箱操作（如Java集合使用原始类型时的性能损耗）。‌<span disable-audio="true"
                                disable-copy="true"><span rl-type="stop"><!--2368--><span
                                        class="cos-tooltip cosd-citation"><!--2371--><span
                                            class="cosd-citation-citationId">6<!--2372--></span><!--2371--></span><!--2369--><!--2373--><!--2373--><!--2368--></span><span
                                    rl-type="stop"><!--2375--><span class="cos-tooltip cosd-citation"><!--2378--><span
                                            class="cosd-citation-citationId">17<!--2379--></span><!--2378--></span><!--2376--><!--2380--><!--2380--><!--2375--></span></span>
                        </li>
                    </ol>
                    <h3>使用示例：</h3>
                    <pre><div class="code-header"><span rl-type="stop">typescript</span><span class="cosd-markdown-code-copy cos-link" rl-type="stop">Copy Code</span></div><div class="code-wrapper"><div class="code-left"><div data-line-number="1" class="code-number"></div><div data-line-number="2" class="code-number"></div><div data-line-number="3" class="code-number"></div><div data-line-number="4" class="code-number"></div><div data-line-number="5" class="code-number"></div><div data-line-number="6" class="code-number"></div></div><div class="code-right"><code class="hljs language-typescript"><span class="hljs-comment">// TypeScript 泛型函数：返回数组第一项</span>
<span class="hljs-keyword">function</span> first&lt;T&gt;(<span class="hljs-attr">arr</span>: T[]): T | <span class="hljs-literal">undefined</span> {
    <span class="hljs-keyword">return</span> arr;
}
<span class="hljs-keyword">const</span> num = <span class="hljs-title function_">first</span>([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);     <span class="hljs-comment">// T 推断为 number</span>
<span class="hljs-keyword">const</span> str = <span class="hljs-title function_">first</span>([<span class="hljs-string">"a"</span>, <span class="hljs-string">"b"</span>]); <span class="hljs-comment">// T 推断为 string</span>
</code></div></div></pre>
                    <p class="marklang-paragraph">‌<span disable-audio="true" disable-copy="true"><span
                                rl-type="stop"><!--2382--><span class="cos-tooltip cosd-citation"><!--2385--><span
                                        class="cosd-citation-citationId">9<!--2386--></span><!--2385--></span><!--2383--><!--2387--><!--2387--><!--2382--></span><span
                                rl-type="stop"><!--2389--><span class="cos-tooltip cosd-citation"><!--2392--><span
                                        class="cosd-citation-citationId">10<!--2393--></span><!--2392--></span><!--2390--><!--2394--><!--2394--><!--2389--></span></span>
                    </p>
                    <p class="marklang-paragraph">
                        ‌<strong>总结</strong>‌：泛型通过将类型抽象为参数，实现了代码逻辑与数据类型的解耦，是现代编程语言中提升工程效率的核心机制之一。</p>
                </div>
            </div>
        </div><!--1128-->
    </div>
</template>