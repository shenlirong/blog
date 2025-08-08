<template>
    <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
        <div class="marklang">
            <p class="marklang-paragraph"><span><span rl-type="stop"
                        href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=Docker&amp;rsv_pq=dd3a4d5f00b4033e&amp;oq=docker%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84%2C%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8&amp;rsv_t=2034YEAadaW8voyyc06GTGGfYaXlVSMnm6ISTm0fMh0jGqsJyIj/Tu3jYL4&amp;tn=baidu&amp;ie=utf-8"
                        target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                        <span>Docke<span style="white-space: nowrap;">r<i
                                    class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                        </span><!--2232-->
                    </span></span>是一个开源的应用容器引擎，用于将应用程序及其依赖打包为可移植的容器镜像，实现跨平台运行和隔离部署。
            </p>
            <h3>核心功能</h3>
            <ul>
                <li>‌<strong>跨平台部署</strong>‌：将应用及其依赖打包为容器镜像，可在任何支持Docker的环境中运行，保证不同环境下的运行一致性。
                </li>
                <li>‌<strong>轻量化虚拟化</strong>‌：通过操作系统内核级虚拟化，容器启动更快（秒级），且共享主机内核，无需独立操作系统。
                </li>
                <li>‌<strong>隔离运行</strong>‌：容器之间彼此隔离，但可通过特定通道通信，确保资源高效利用。
                </li>
            </ul>
            <h3>基础使用步骤</h3>
            <ol>
                <li>‌<strong>安装Docker</strong>‌
                    <ul>
                        <li><span><span rl-type="stop"
                                    href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=Ubuntu&amp;rsv_pq=dd3a4d5f00b4033e&amp;oq=docker%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84%2C%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8&amp;rsv_t=2034YEAadaW8voyyc06GTGGfYaXlVSMnm6ISTm0fMh0jGqsJyIj/Tu3jYL4&amp;tn=baidu&amp;ie=utf-8"
                                    target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                    <span>Ubunt<span style="white-space: nowrap;">u<i
                                                class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                    </span><!--2234-->
                                </span></span>/<span><span rl-type="stop"
                                    href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=CentOS&amp;rsv_pq=dd3a4d5f00b4033e&amp;oq=docker%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84%2C%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8&amp;rsv_t=2034YEAadaW8voyyc06GTGGfYaXlVSMnm6ISTm0fMh0jGqsJyIj/Tu3jYL4&amp;tn=baidu&amp;ie=utf-8"
                                    target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                    <span>CentO<span style="white-space: nowrap;">S<i
                                                class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                    </span><!--2236-->
                                </span></span>/<span><span rl-type="stop"
                                    href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=Windows&amp;rsv_pq=dd3a4d5f00b4033e&amp;oq=docker%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84%2C%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8&amp;rsv_t=2034YEAadaW8voyyc06GTGGfYaXlVSMnm6ISTm0fMh0jGqsJyIj/Tu3jYL4&amp;tn=baidu&amp;ie=utf-8"
                                    target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                    <span>Window<span style="white-space: nowrap;">s<i
                                                class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                    </span><!--2238-->
                                </span></span>系统均支持安装，可通过官网或第三方教程完成环境搭建。
                        </li>
                    </ul>
                </li>
                <li>‌<strong>运行容器</strong>‌
                    <ul>
                        <li>通过<code>docker run</code>命令启动容器（如运行<span><span rl-type="stop"
                                    href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=Nginx&amp;rsv_pq=dd3a4d5f00b4033e&amp;oq=docker%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84%2C%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8&amp;rsv_t=2034YEAadaW8voyyc06GTGGfYaXlVSMnm6ISTm0fMh0jGqsJyIj/Tu3jYL4&amp;tn=baidu&amp;ie=utf-8"
                                    target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                    <span>Ngin<span style="white-space: nowrap;">x<i
                                                class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                    </span><!--2240-->
                                </span></span>：<code>docker run nginx</code>）。
                        </li>
                    </ul>
                </li>
                <li>‌<strong>管理镜像</strong>‌
                    <ul>
                        <li>使用<code>docker pull</code>下载镜像（如<code>docker pull ubuntu</code>），<code>docker save</code>导出镜像。

                        </li>
                    </ul>
                </li>
                <li>‌<strong>容器操作</strong>‌
                    <ul>
                        <li>启动/停止容器：<code>docker start/stop [容器ID]</code></li>
                        <li>查看容器日志：<code>docker logs [容器ID]</code></li>
                        <li>端口映射：<code>docker run -p 80:80 nginx</code>（宿主机的80端口映射到容器的80端口） 
                        </li>
                    </ul>
                </li>
            </ol>
            <h3>典型应用场景</h3>
            <ul>
                <li>‌<strong>开发测试</strong>‌：统一开发环境，避免不同机器间的兼容性问题。 
                </li>
                <li>‌<strong>自动化部署</strong>‌：通过容器快速部署应用，实现持续集成/持续交付。 ‌
                </li>
                <li>‌<strong>微服务架构</strong>‌：支持分布式系统的高可用与弹性扩展。
                </li>
            </ul>
        </div>
    </div>
</template>