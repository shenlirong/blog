<template>
    <article class="baidu_pl">
        <div id="article_content" class="article_content clearfix">
            <link rel="stylesheet"
                href="https://csdnimg.cn/release/blogv2/dist/mdeditor/css/editerView/kdoc_html_views-1a98987dfd.css">
            <link rel="stylesheet"
                href="https://csdnimg.cn/release/blogv2/dist/mdeditor/css/editerView/ck_htmledit_views-01addd087f.css">
            <div id="content_views" class="htmledit_views atom-one-dark">
                <h2><a name="t2"></a><a id="_26"></a>二、浏览器的基本结构和工作原理</h2>
                <ul>
                    <li>
                        <h4><a name="t3"></a>浏览器的基本结构</h4>
                    </li>
                </ul>
                <p>用户界面：展示除标签页外的其他界面内容。</p>
                <p>浏览器引擎：在用户界面和渲染引擎之间传递数据。</p>
                <p>渲染引擎：负责渲染页面内容，包含多个模块内容，例如负责网络请求的网络模块、用于解析和执行<span class="words-blog hl-git-1" data-tit="JavaScript"
                        data-pretit="javascript">JavaScript</span>的JS解释器，以及数据存储持久层，用于帮助浏览器存储诸如Cookie等各类数据。</p>
                <p><img alt="" height="143" src="../image/11.png" width="137">&nbsp;&nbsp;</p>
                <p>渲染引擎是浏览器的核心与灵魂，我们通常称之为内核，我们通常将渲染引擎称为浏览器的内核，不同浏览器使用的内核也有所不同。</p>
                <h4><a name="t4"></a>不同浏览器的渲染引擎</h4>
                <p>IE：Trident。</p>
                <p>Firefox：Gecko。</p>
                <p>Safari：WebKit。</p>
                <p>Chrome：Blink。</p>
                <p>Opera和<span class="words-blog hl-git-1" data-tit="Edge" data-pretit="edge">Edge</span>：Blink。</p>
                <h4><a name="t5"></a>&nbsp;浏览器的进程和线程</h4>
                <p>当我们启动某个程序时，操作系统会创建一个进程来执行任务代码。同时会为该进程分配内存空间，应用程序的状态均保存在该内存空间中。当应用关闭时，其占用的内存空间会被系统回收。进程可以启动更多的子进程来执行任务。由于每个进程分配的内存空间是独立的，如果两个进程间需要传递数据，则必须通过进程间通信管道（IPC）来实现。
                </p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 进程：操作系统资源分配和调度的基本单元。</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;线程：操作系统进行运算调度的最小单位。&nbsp;</p>
                <p>&nbsp;在现在的多进程浏览器出现之前，浏览器试是单进程的，所以会出现许多问题，诸如：一个进程卡死，整个页面卡死；或者执行某个页面时间耗费时间比较久，导致其他的操作被延迟；因为所有的任务都是按照顺序执行，并未实现真正意义上的并发，一个任务的卡死，就导致整个浏览器崩溃。现在的浏览器采用多进程结构，优化之前单进程浏览器出现的问题，同时也提高了浏览器的安全性，稳定性以及性能。
                </p>
                <h4><a name="t6"></a>多进程结构的优势</h4>
                <p>稳定性：避免单个进程卡死影响整个浏览器。</p>
                <p>安全性：进程间数据隔离。</p>
                <p>流畅性：提高运行效率。</p>
                <h4><a name="t7"></a>浏览器的多进程结构</h4>
                <p>多进程浏览器大致被分为五个部分，由五个不同的进程组成：</p>
                <p>1. 浏览器进程:也被称为主进程，负责管理用户界面的内容，包括浏览器的前进、后退、地址栏、&nbsp; &nbsp; &nbsp;书签栏。同时也控制浏览器的其他进程。<br> 2.
                    渲染进程：负责执行js，解析html,css，绘制用户界面。每个标签页都有自己的渲染进程，渲染&nbsp; &nbsp; &nbsp; 进程之间相互独立，避免一个页面崩掉，影响到其他的标签页。<br>
                    3. gpu进程：主要负责处理图形例如视频解码，3d渲染。<br> 4. 网络进程：负责发起网络请求和响应。<br> 5. 插件进程:&nbsp; 控制网站使用的插件，拓展文件。</p>
                <h2><a name="t8"></a>三、浏览器渲染流程</h2>
                <p><strong>网络线程获取数据</strong></p>
                <p>当你在地址栏输入网址时，浏览器进程的UI线程会捕捉你的输入内容。如果访问的是网址，UI线程会启动网络线程，请求DNS进行域名解析，随后连接服务器以<a
                        href="https://so.csdn.net/so/search?q=%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE&amp;spm=1001.2101.3001.7020"
                        target="_blank" class="hl hl-1"
                        data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;获取数据\&quot;}&quot;}"
                        data-tit="获取数据"
                        data-pretit="获取数据">获取数据</a>。如果输入的是关键词而非网址，浏览器会识别为搜索请求，并使用默认配置的搜索引擎进行查询。当网络线程获取数据后，会通过Safe
                    Browsing检查站点是否为恶意站点。若检测到安全问题，浏览器将展示警告页面并阻止访问，但您仍可选择强行继续访问。当返回数据准备完毕且安全校验通过时，网络线程会通知UI线程，表示数据已准备好。
                </p>
                <p><strong>渲染器进程的工作流</strong></p>
                <p>UI线程会创建一个渲染器进程来渲染页面，浏览器进程通过IPC管道将数据传递给渲染器进程，然后正式进入渲染流程。</p>
                <ol>
                    <li>
                        <p><strong>解析HTML构建构建DOM树</strong>：浏HTML首先经过Tokenizer标记化，通过词法分析将输入的HTML内容解析成多个标记，并根据这些标记构建DOM树，每当解析到一个新的HTML标签时，相应的DOM节点就会被创建并添加到DOM树中，解析过程中，如果遇到外部资源（如图片、样式表或脚本），浏览器会同时请求这些资源。
                        </p>
                    </li>
                    <li>
                        <p><strong>加载与解析CSS构建CSSOM树：</strong>当浏览器遇到<code>&lt;link&gt;</code>或<code>&lt;style&gt;</code>标签引用的CSS文件或内联样式时，它会下载并解析这些样式规则并生成CSSDOM树。这一步骤可能与HTML解析并行进行，取决于资源加载的方式和浏览器的策略。
                        </p>
                    </li>
                    <li>
                        <p><strong>生成渲染树</strong>：接下来，浏览器结合DOM树和CSSOM树来创建渲染树。需要注意的是，DOM树和渲染树并非一一对应。设置了`display:
                            none`的节点不会出现在布局树上，而在`::before`伪类中添加了`content`值的元素，其内容会出现在布局树上，但不会出现在DOM树中。这是因为DOM是通过HTML解析获得的，并不涉及样式。最终由渲染树生成再屏幕上展示的节点。
                        </p>
                    </li>
                    <li>
                        <p><strong>布局（重排）</strong>：一旦渲染树构建完成，浏览器便开始布局过程，即确定页面上每个元素的确切尺寸和位置。这一过程有时被称为“回流”，一旦涉及到对元素位置和大小的变更，就需要重新计算布局。
                        </p>
                    </li>
                    <li>
                        <p><strong>绘制</strong>：主线程遍历Layout Tree，根据渲染树中的信息，创建一个绘制记录表，该表记录了绘制的顺序，这个阶段被称为绘制。&nbsp;</p>
                    </li>
                    <li>
                        <p><strong>合成</strong>：绘制表创建完成后，会将信息转化为像素点并显示在屏幕上，这一过程被称为栅格化，早起的<span
                                class="words-blog hl-git-1" data-tit="谷歌浏览器"
                                data-pretit="谷歌浏览器">谷歌浏览器</span>使用了一种简单的方式，即栅格化用户可视区域的内容，当用户滚动页面时，浏览器会不断栅格化更多内容以填充缺失部分，这种方式带来的问题显而易见，会导致展示延迟。现在的Chrome采用了一种更为复杂的栅格化流程，称为合成。合成就是将页面的各个部分划分为多个图层，分别进行栅格化，最终将可视区域的内容组合成一帧展示给用户。
                        </p>
                    </li>
                </ol>
                <p><strong>总结</strong>：浏览器进程中的网络线程请求获取到HTML数据后，通过IPC将数据传递给渲染器进程的主线程。主线程解析HTML并构建DOM树，随后进行样式计算。根据DOM树和生成的样式，主线程创建布局树（Layout
                    Tree），并生成绘制顺序表。</p>
                <p>接着，主线程将布局树和绘制顺序信息传递给合成器线程。合成器线程按照规则将图层分割，并将这些图层划分为更小的图块，传递给栅格线程进行栅格化处理。</p>
                <p>栅格化完成后，合成器线程会接收栅格线程传递的图块信息。基于这些信息，合成器线程生成一个合成帧，并通过IPC将其传回浏览器进程。浏览器进程随后将帧传递给GPU进行渲染，最终显示在屏幕上。</p>
                <h2><a name="t9"></a>四、回流和重绘</h2>
                <p>我们修改元素的尺寸或位置属性时，会触发样式计算、布局、绘制以及后续流程，这一过程称为重排。若仅改变元素的颜色属性，则不会触发布局，但仍会进行样式计算和绘制，这称为重绘。重排和重绘都会占用主线程。此外，GS（Graphics
                    Layer）也运行在主线程上。由于它们共享主线程，可能会出现抢占执行时间的情况。</p>
                <p>如果在运行动画时，还有大量的JavaScript任务需要执行，由于布局、绘制和JavaScript的执行都在主线程上进行，当一帧时间内布局和绘制完成后仍有剩余时间，JavaScript便会获得主线程的使用权。如果JavaScript执行时间过长，可能导致在下一帧开始时，JavaScript未能及时释放主线程，导致下一帧动画无法按时渲染，从而出现页面动画卡顿的现象。
                </p>
                <h4><a name="t10"></a>优化手段</h4>
                <p>1、可以通过`requestAnimationFrame`这个API来解决这个问题。`requestAnimationFrame`会在每一帧被调用，我们可以将JavaScript任务拆分为更小的任务块，在每一帧时间用完前暂停JavaScript的执行，释放主线程，这样在下一帧开始时，主线程便可以按时执行布局和绘制。
                </p>
                <p>2、通过之前的流程图可知，合成器的整个流程不占用主线程，仅在合成器线程和栅格线程中运行，这意味着它无需与JavaScript争夺主线程资源。CSS中有个动画属性叫`transform`，通过该属性实现的动画不会经过布局和绘制，而是直接运行在合成器线程和栅格化线程中，因此不会受到主线程中JS执行的影响，通过`transform`实现的动画，不需要经过布局、绘制、样式计算等操作，可以节省了大量运算时间。
                </p>
                <h3><a name="t11"></a><a id="1_27"></a></h3>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    </article>
</template>