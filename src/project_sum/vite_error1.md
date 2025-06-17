---
title: 记一次vite项目无法启动的问题
icon: pen-to-square
sticky: 90
# index: false
# article: false
---

<!-- more -->
# 记一次vite项目无法启动的问题

## 问题描述
在启动vue3项目，项目构建工具使用的是vite，但当我满心欢喜一顿install、dev操作启动之后，发现报错了；
![alt text](image/1.jpg)

## 问题分析
跟随提示发现esbuild@0.11.3下没有esbuild.exe文件
![alt text](image/2.png)

## 解决方案
手动执行这个文件,node D:\project\node_modules.pnpm\esbuild@0.11.3\node_modules\esbuild\install
运行正常
![alt text](image/3.png)

