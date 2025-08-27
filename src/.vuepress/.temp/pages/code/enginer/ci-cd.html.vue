<template><div><!-- more -->
<h1 id="‌ci-cd‌概念" tabindex="-1"><a class="header-anchor" href="#‌ci-cd‌概念"><span>‌CI/CD‌概念</span></a></h1>
<cicd></cicd><h2 id="持续部署cd有哪些工具" tabindex="-1"><a class="header-anchor" href="#持续部署cd有哪些工具"><span>持续部署CD有哪些工具</span></a></h2>
<p>持续部署（CD）工具列表涵盖开源和商业解决方案，以下按类别整理主流工具：<br>
<strong>​开源工具</strong>​<br>
1.​Jenkins​</p>
<p>最流行的开源CI/CD工具之一，插件生态系统丰富<br>
特点：基于Java开发，支持Pipeline即代码，可通过Jenkinsfile配置流程<br>
适用场景：复杂的定制化部署流程</p>
<p>2.​GitLab CI/CD​</p>
<p>GitLab内置的CI/CD解决方案，与GitLab仓库无缝集成<br>
特点：使用.gitlab-ci.yml配置文件，支持Auto DevOps功能<br>
部署示例：自动部署到Kubernetes、云服务器等</p>
<p>3.​GitHub Actions​</p>
<p>GitHub原生提供的自动化工具，直接集成在仓库中<br>
特点：通过YAML文件定义工作流，市场提供丰富的预置Action<br>
典型用途：构建测试后自动部署到AWS/Azure/Cloudflare等</p>
<p>4.​Argo CD​</p>
<p>专为Kubernetes设计的GitOps持续交付工具<br>
特点：声明式部署，自动同步Git仓库与K8s集群状态<br>
核心优势：可视化应用状态，支持多环境管理</p>
<p>5.​Spinnaker​</p>
<p>Netflix开源的多云持续交付平台<br>
特性：强大的部署策略（金丝雀、蓝绿部署），支持云原生应用<br>
部署能力：AWS、GCP、Azure、Kubernetes等</p>
<p><strong>商业工具</strong>​<br>
​1.GitLab Ultimate（CI/CD模块）​​<br>
开源版进阶功能：高级部署策略、安全扫描、合规管理等<br>
亮点：单一平台覆盖从代码到生产的全流程</p>
<p>2.​GitHub Enterprise（含Actions）​​<br>
企业级安全和管理功能，支持大规模团队协作<br>
集成生态：与第三方部署工具无缝衔接</p>
<p>3.​CircleCI​<br>
云托管CI/CD服务（也有自托管方案）<br>
优势：快速并行构建，丰富的Orbs共享配置库<br>
适用：云原生应用和容器化部署</p>
<p>4.​Harness​<br>
智能化的持续交付平台，强调AI驱动<br>
核心功能：自动回滚、变更验证、成本优化<br>
特色：可视化流水线编辑器，低代码部署</p>
<p>5.​AWS CodeDeploy​<br>
AWS原生的部署服务，集成CodePipeline/CodeCommit<br>
场景：EC2、Lambda、ECS等AWS资源部署</p>
<p>6.​Azure DevOps​<br>
微软提供的全套应用生命周期管理<br>
部署能力：支持Azure云服务、混合环境、K8s</p>
<p><strong>特殊场景工具</strong>​</p>
<p>​Flux​：GitOps风格K8s部署（与Argo CD类似）<br>
​Drone​：轻量级容器化CI/CD（适合简单项目）<br>
​Travis CI​：早期流行的SaaS CI/CD服务（现逐渐被取代）</p>
<p><strong>选择建议</strong><br>
1.​项目需求​</p>
<p>云原生项目：优先考虑Argo CD/Spinnaker<br>
多云环境：Spinnaker/Harness<br>
轻量级需求：GitHub Actions/GitLab CI</p>
<p>2.​技术栈​</p>
<p>Java项目：Jenkins传统优势<br>
Kubernetes：Argo CD是当前最佳实践<br>
GitHub生态：首选GitHub Actions</p>
<p>3.​团队规模​</p>
<p>小团队：SaaS解决方案（CircleCI/GitHub Actions）<br>
大企业：自建Jenkins/商业方案（Harness/GitLab Ultimate）</p>
<p>💡 ​趋势提示​：GitOps模式（如Argo CD）已成为云原生部署的主流范式，建议新项目优先评估此类工具。</p>
<p><strong>部署流程示例（GitHub Actions）</strong></p>
<div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>name: Production Deployment</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [ main ]</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  deploy:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>    - name: Checkout code</span></span>
<span class="line"><span>      uses: actions/checkout@v4</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    - name: Deploy to AWS</span></span>
<span class="line"><span>      uses: aws-actions/configure-aws-credentials@v3</span></span>
<span class="line"><span>      with:</span></span>
<span class="line"><span>        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY }}</span></span>
<span class="line"><span>        aws-secret-access-key: ${{ secrets.AWS_SECRET_KEY }}</span></span>
<span class="line"><span>        aws-region: us-east-1</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    - run: |</span></span>
<span class="line"><span>        aws s3 sync ./dist s3://my-bucket</span></span>
<span class="line"><span>        aws cloudfront create-invalidation --distribution-id ${{ secrets.CF_ID }} --paths "/*"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="开源工具" tabindex="-1"><a class="header-anchor" href="#开源工具"><span>开源工具</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">工具</th>
<th>特点</th>
<th style="text-align:center">适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Jenkins</td>
<td>• 最流行的开源CI/CD工具<br>• 强大插件生态<br>• 支持Pipeline即代码</td>
<td style="text-align:center">企业级复杂部署流程</td>
</tr>
<tr>
<td style="text-align:left">GitLab CI/CD</td>
<td>• 与GitLab仓库深度集成<br>• 单一配置文件.gitlab-ci.yml<br>• 内置容器注册表</td>
<td style="text-align:center">GitLab用户的完整解决方案</td>
</tr>
<tr>
<td style="text-align:left">Argo CD</td>
<td>• Kubernetes原生GitOps工具<br>• 声明式部署<br>• 自动同步集群状态</td>
<td style="text-align:center">Kubernetes环境持续交付</td>
</tr>
<tr>
<td style="text-align:left">Spinnaker</td>
<td>• Netflix开源的持续部署平台<br>• 支持多云部署<br>• 内置金丝雀/蓝绿发布</td>
<td style="text-align:center">复杂发布策略企业</td>
</tr>
<tr>
<td style="text-align:left">Tekton</td>
<td>• Kubernetes原生CI/CD框架<br>• 基于自定义资源的流水线</td>
<td style="text-align:center">容器化CI/CD工作流</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="商业云服务" tabindex="-1"><a class="header-anchor" href="#商业云服务"><span>商业云服务</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">服务商</th>
<th>产品</th>
<th style="text-align:center">核心优势</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">GitHub</td>
<td>GitHub Actions</td>
<td style="text-align:center">• 深度GitHub集成<br>• 市场共享Actions库<br>• 按分钟计费</td>
</tr>
<tr>
<td style="text-align:left">GitLab</td>
<td>GitLab CI/CD</td>
<td style="text-align:center">• 端到端DevSecOps平台<br>• 高级安全扫描<br>• 多集群管理</td>
</tr>
<tr>
<td style="text-align:left">CircleCI</td>
<td>CircleCI</td>
<td style="text-align:center">• 高性能云托管<br>• 原生容器支持<br>• 可视化工作流</td>
</tr>
<tr>
<td style="text-align:left">AWS</td>
<td>CodePipeline</td>
<td style="text-align:center">• 无缝衔接AWS服务<br>• 与CodeCommit/CodeBuild集成</td>
</tr>
<tr>
<td style="text-align:left">Azure</td>
<td>Azure DevOps</td>
<td style="text-align:center">• 完整ALM工具链<br>• 多语言支持<br>• Azure部署优化</td>
</tr>
<tr>
<td style="text-align:left">Google Cloud</td>
<td>Cloud Build</td>
<td style="text-align:center">• GCP原生集成<br>• 支持多云部署<br>• Serverless执行环境</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="专用工具" tabindex="-1"><a class="header-anchor" href="#专用工具"><span>专用工具</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th>工具</th>
<th style="text-align:center">功能亮点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">K8s专属</td>
<td>Flux CD</td>
<td style="text-align:center">GitOps自动同步器</td>
</tr>
<tr>
<td style="text-align:left">移动应用</td>
<td>Bitrise</td>
<td style="text-align:center">移动端CI/CD专用解决方案</td>
</tr>
<tr>
<td style="text-align:left">Serverless</td>
<td>Serverless Framework</td>
<td style="text-align:center">无服务应用部署框架</td>
</tr>
<tr>
<td style="text-align:left">数据库</td>
<td>Liquibase/Flyway</td>
<td style="text-align:center">数据库变更管理</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="新兴趋势工具" tabindex="-1"><a class="header-anchor" href="#新兴趋势工具"><span>新兴趋势工具</span></a></h3>
<ol>
<li>Harness - 智能化CD平台（自动验证/回滚）</li>
<li>Drone - 轻量级容器化CI/CD</li>
<li>Woodpecker - Drone的开源分支</li>
<li>Jenkins X - Kubernetes原生的Jenkins演进版</li>
</ol>
<hr>
<h3 id="选型参考维度" tabindex="-1"><a class="header-anchor" href="#选型参考维度"><span>选型参考维度：</span></a></h3>
<ol>
<li>环境适配：
<ul>
<li>云原生：Argo CD、Tekton</li>
<li>多云部署：Spinnaker</li>
<li>Kubernetes：Argo CD、Flux</li>
</ul>
</li>
<li>集成需求：
<ul>
<li>GitHub用户：GitHub Actions</li>
<li>GitLab用户：GitLab CI/CD</li>
<li>AWS生态：CodePipeline</li>
</ul>
</li>
<li>部署策略复杂度：
<ul>
<li>简单部署：Jenkins、GitLab</li>
<li>高级发布：Spinnaker、Harness（内置金丝雀分析）</li>
</ul>
</li>
<li>团队规模：
<ul>
<li>小团队：CircleCI、GitHub Actions</li>
<li>大型企业：Jenkins（自定义能力强）</li>
</ul>
</li>
</ol>
<blockquote>
<p>💡 2023年趋势：GitOps模式（Argo CD/Flux）在K8s领域快速增长，GitHub Actions在开源项目占比超60%（据2023 JetBrains开发者调查）</p>
</blockquote>
<hr>
<h3 id="示例架构-现代cd工具链组合" tabindex="-1"><a class="header-anchor" href="#示例架构-现代cd工具链组合"><span>示例架构：现代CD工具链组合</span></a></h3>
<figure><img src="@source/code/image/12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>典型工作流：</p>
<ol>
<li>代码提交触发CI构建</li>
<li>生成容器镜像推送到制品库</li>
<li>CD工具自动检测镜像更新</li>
<li>执行声明式部署到目标环境</li>
<li>自动验证+监控回滚</li>
</ol>
</div></template>


