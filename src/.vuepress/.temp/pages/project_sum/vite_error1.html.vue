<template><div><!-- more -->
<h1 id="记一次vite项目无法启动的问题" tabindex="-1"><a class="header-anchor" href="#记一次vite项目无法启动的问题"><span>记一次vite项目无法启动的问题</span></a></h1>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2>
<p>在启动vue3项目，项目构建工具使用的是vite，但当我满心欢喜一顿install、dev操作启动之后，发现报错了；<br>
<img src="@source/project_sum/image/1.jpg" alt="alt text" loading="lazy"></p>
<h2 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h2>
<p>跟随提示发现esbuild@0.11.3下没有esbuild.exe文件<br>
<img src="@source/project_sum/image/2.png" alt="alt text" loading="lazy"></p>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2>
<p>手动执行这个文件,node D:\project\node_modules.pnpm\esbuild@0.11.3\node_modules\esbuild\install<br>
运行正常<br>
<img src="@source/project_sum/image/3.png" alt="alt text" loading="lazy"></p>
</div></template>


