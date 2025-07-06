<template>
    <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
        <div class="marklang">
            <p class="marklang-paragraph"><span><span rl-type="stop"
                        href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=Docker&amp;rsv_pq=dd3a4d5f00b4033e&amp;oq=docker%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84%2C%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8&amp;rsv_t=2034YEAadaW8voyyc06GTGGfYaXlVSMnm6ISTm0fMh0jGqsJyIj/Tu3jYL4&amp;tn=baidu&amp;ie=utf-8"
                        target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                        <span>Docke<span style="white-space: nowrap;">r<i
                                    class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                        </span><!--2232-->
                    </span></span>是一个开源的应用容器引擎，用于将应用程序及其依赖打包为可移植的容器镜像，实现跨平台运行和隔离部署。 ‌<span disable-audio="true"
                    disable-copy="true"><span rl-type="stop"><!--2242--><span
                            class="cos-tooltip cosd-citation"><!--2245--><span
                                class="cosd-citation-citationId">1<!--2246--></span><!--2245--></span><!--2243--><!--2247--><!--2247--><!--2242--></span><span
                        rl-type="stop"><!--2249--><span class="cos-tooltip cosd-citation"><!--2252--><span
                                class="cosd-citation-citationId">2<!--2253--></span><!--2252--></span><!--2250--><!--2254--><!--2254--><!--2249--></span></span>
            </p>
            <h3>核心功能</h3>
            <ul>
                <li>‌<strong>跨平台部署</strong>‌：将应用及其依赖打包为容器镜像，可在任何支持Docker的环境中运行，保证不同环境下的运行一致性。 ‌<span
                        disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2256--><span
                                class="cos-tooltip cosd-citation"><!--2259--><span
                                    class="cosd-citation-citationId">1<!--2260--></span><!--2259--></span><!--2257--><!--2261--><!--2261--><!--2256--></span><span
                            rl-type="stop"><!--2263--><span class="cos-tooltip cosd-citation"><!--2266--><span
                                    class="cosd-citation-citationId">2<!--2267--></span><!--2266--></span><!--2264--><!--2268--><!--2268--><!--2263--></span></span>
                </li>
                <li>‌<strong>轻量化虚拟化</strong>‌：通过操作系统内核级虚拟化，容器启动更快（秒级），且共享主机内核，无需独立操作系统。 ‌<span disable-audio="true"
                        disable-copy="true"><span rl-type="stop"><!--2270--><span
                                class="cos-tooltip cosd-citation"><!--2273--><span
                                    class="cosd-citation-citationId">1<!--2274--></span><!--2273--></span><!--2271--><!--2275--><!--2275--><!--2270--></span><span
                            rl-type="stop"><!--2277--><span class="cos-tooltip cosd-citation"><!--2280--><span
                                    class="cosd-citation-citationId">3<!--2281--></span><!--2280--></span><!--2278--><!--2282--><!--2282--><!--2277--></span></span>
                </li>
                <li>‌<strong>隔离运行</strong>‌：容器之间彼此隔离，但可通过特定通道通信，确保资源高效利用。 ‌<span disable-audio="true"
                        disable-copy="true"><span rl-type="stop"><!--2284--><span
                                class="cos-tooltip cosd-citation"><!--2287--><span
                                    class="cosd-citation-citationId">1<!--2288--></span><!--2287--></span><!--2285--><!--2289--><!--2289--><!--2284--></span><span
                            rl-type="stop"><!--2291--><span class="cos-tooltip cosd-citation"><!--2294--><span
                                    class="cosd-citation-citationId">2<!--2295--></span><!--2294--></span><!--2292--><!--2296--><!--2296--><!--2291--></span></span>
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
                                </span></span>系统均支持安装，可通过官网或第三方教程完成环境搭建。 ‌<span disable-audio="true"
                                disable-copy="true"><span rl-type="stop"><!--2298--><span
                                        class="cos-tooltip cosd-citation"><!--2301--><span
                                            class="cosd-citation-citationId">3<!--2302--></span><!--2301--></span><!--2299--><!--2303--><!--2303--><!--2298--></span><span
                                    rl-type="stop"><!--2305--><span class="cos-tooltip cosd-citation"><!--2308--><span
                                            class="cosd-citation-citationId">4<!--2309--></span><!--2308--></span><!--2306--><!--2310--><!--2310--><!--2305--></span></span>
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
                                </span></span>：<code>docker run nginx</code>）。 ‌<span disable-audio="true"
                                disable-copy="true"><span rl-type="stop"><!--2312--><span
                                        class="cos-tooltip cosd-citation"><!--2315--><span
                                            class="cosd-citation-citationId">3<!--2316--></span><!--2315--></span><!--2313--><!--2317--><!--2317--><!--2312--></span><span
                                    rl-type="stop"><!--2319--><span class="cos-tooltip cosd-citation"><!--2322--><span
                                            class="cosd-citation-citationId">4<!--2323--></span><!--2322--></span><!--2320--><!--2324--><!--2324--><!--2319--></span></span>
                        </li>
                    </ul>
                </li>
                <li>‌<strong>管理镜像</strong>‌
                    <ul>
                        <li>使用<code>docker pull</code>下载镜像（如<code>docker pull ubuntu</code>），<code>docker save</code>导出镜像。
                            ‌<span disable-audio="true" disable-copy="true"><span rl-type="stop"><!--2326--><span
                                        class="cos-tooltip cosd-citation"><!--2329--><span
                                            class="cosd-citation-citationId">5<!--2330--></span><!--2329--></span><!--2327--><!--2331--><!--2331--><!--2326--></span></span>
                        </li>
                    </ul>
                </li>
                <li>‌<strong>容器操作</strong>‌
                    <ul>
                        <li>启动/停止容器：<code>docker start/stop [容器ID]</code></li>
                        <li>查看容器日志：<code>docker logs [容器ID]</code></li>
                        <li>端口映射：<code>docker run -p 80:80 nginx</code>（宿主机的80端口映射到容器的80端口） ‌<span disable-audio="true"
                                disable-copy="true"><span rl-type="stop"><!--2333--><span
                                        class="cos-tooltip cosd-citation"><!--2336--><span
                                            class="cosd-citation-citationId">3<!--2337--></span><!--2336--></span><!--2334--><!--2338--><!--2338--><!--2333--></span><span
                                    rl-type="stop"><!--2340--><span class="cos-tooltip cosd-citation"><!--2343--><span
                                            class="cosd-citation-citationId">5<!--2344--></span><!--2343--></span><!--2341--><!--2345--><!--2345--><!--2340--></span></span>
                        </li>
                    </ul>
                </li>
            </ol>
            <h3>典型应用场景</h3>
            <ul>
                <li>‌<strong>开发测试</strong>‌：统一开发环境，避免不同机器间的兼容性问题。 ‌<span disable-audio="true" disable-copy="true"><span
                            rl-type="stop"><!--2347--><span class="cos-tooltip cosd-citation"><!--2350--><span
                                    class="cosd-citation-citationId">1<!--2351--></span><!--2350--></span><!--2348--><!--2352--><!--2352--><!--2347--></span></span>
                </li>
                <li>‌<strong>自动化部署</strong>‌：通过容器快速部署应用，实现持续集成/持续交付。 ‌<span disable-audio="true"
                        disable-copy="true"><span rl-type="stop"><!--2354--><span
                                class="cos-tooltip cosd-citation"><!--2357--><span
                                    class="cosd-citation-citationId">6<!--2358--></span><!--2357--></span><!--2355--><!--2359--><!--2359--><!--2354--></span></span>
                </li>
                <li>‌<strong>微服务架构</strong>‌：支持分布式系统的高可用与弹性扩展。 ‌<span disable-audio="true" disable-copy="true"><span
                            rl-type="stop"><!--2361--><span class="cos-tooltip cosd-citation"><!--2364--><span
                                    class="cosd-citation-citationId">2<!--2365--></span><!--2364--></span><!--2362--><!--2366--><!--2366--><!--2361--></span></span>
                </li>
            </ul>
        </div>
    </div>
</template>