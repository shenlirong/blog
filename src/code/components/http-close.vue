<template>
    <div class="cosd-markdown"><!--20132-->
        <div class="cosd-markdown-content cosd-markdown-content-typingall" style="height: auto;">
            <div class="marklang">
                <p class="marklang-paragraph">‌<strong><span><span rl-type="stop"
                                href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=HTTP&amp;rsv_pq=c94f2f7b0059690f&amp;oq=http%20%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%20%E6%98%AF%E4%BB%80%E4%B9%88&amp;rsv_t=522fFBI8U7xdS7mM6cSkbs+Mje1LksGVbL5/eAiCzuW362Dm54ID7yPNP30&amp;tn=baidu&amp;ie=utf-8"
                                target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                <span>HTT<span style="white-space: nowrap;">P<i
                                            class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                </span><!--20322-->
                            </span></span>中的四次挥手</strong>‌是指<span><span rl-type="stop"
                            href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=TCP%E5%8D%8F%E8%AE%AE&amp;rsv_pq=c94f2f7b0059690f&amp;oq=http%20%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%20%E6%98%AF%E4%BB%80%E4%B9%88&amp;rsv_t=522fFBI8U7xdS7mM6cSkbs+Mje1LksGVbL5/eAiCzuW362Dm54ID7yPNP30&amp;tn=baidu&amp;ie=utf-8"
                            target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                            <span>TCP协<span style="white-space: nowrap;">议<i
                                        class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                            </span><!--20324-->
                        </span></span>用来关闭连接的过程，确保两个主机之间能够安全、可靠地关闭连接。四次挥手通过四次消息交换，确保双方都接收到对方的关闭请求，并且数据传输已经完成‌<span
                        disable-audio="true" disable-copy="true"><span rl-type="stop"><!--20330--><span
                                class="cos-tooltip cosd-citation"><!--20333--><span
                                    class="cosd-citation-citationId">1<!--20334--></span><!--20333--></span><!--20331--><!--20335--><!--20335--><!--20330--></span></span>。
                </p>
                <h3>四次挥手的具体过程</h3>
                <ol>
                    <li>‌<strong>第一次挥手</strong>‌：客户端决定关闭连接，向服务器发送一个<span><span rl-type="stop"
                                href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=FIN&amp;rsv_pq=c94f2f7b0059690f&amp;oq=http%20%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%20%E6%98%AF%E4%BB%80%E4%B9%88&amp;rsv_t=522fFBI8U7xdS7mM6cSkbs+Mje1LksGVbL5/eAiCzuW362Dm54ID7yPNP30&amp;tn=baidu&amp;ie=utf-8"
                                target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                <span>FI<span style="white-space: nowrap;">N<i
                                            class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                </span><!--20326-->
                            </span></span>报文，表示客户端已经完成数据发送，准备关闭连接。服务器收到后回复一个<span><span rl-type="stop"
                                href="https://www.baidu.com/s?rsv_dl=re_dqa_generate&amp;sa=re_dqa_generate&amp;wd=ACK&amp;rsv_pq=c94f2f7b0059690f&amp;oq=http%20%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%20%E6%98%AF%E4%BB%80%E4%B9%88&amp;rsv_t=522fFBI8U7xdS7mM6cSkbs+Mje1LksGVbL5/eAiCzuW362Dm54ID7yPNP30&amp;tn=baidu&amp;ie=utf-8"
                                target="_blank" class="cosd-markdown-research cos-color-text-link cos-space-mr-3xs">
                                <span>AC<span style="white-space: nowrap;">K<i
                                            class="cos-icon cos-icon-research cosd-markdown-research-icon"></i></span>
                                </span><!--20328-->
                            </span></span>报文，表示确认收到客户端的关闭请求‌<span disable-audio="true" disable-copy="true"><span
                                rl-type="stop"><!--20337--><span class="cos-tooltip cosd-citation"><!--20340--><span
                                        class="cosd-citation-citationId">1<!--20341--></span><!--20340--></span><!--20338--><!--20342--><!--20342--><!--20337--></span><span
                                rl-type="stop"><!--20344--><span class="cos-tooltip cosd-citation"><!--20347--><span
                                        class="cosd-citation-citationId">2<!--20348--></span><!--20347--></span><!--20345--><!--20349--><!--20349--><!--20344--></span></span>。
                    </li>
                    <li>‌<strong>第二次挥手</strong>‌：服务器确认收到客户端的关闭请求后，如果还有数据需要发送给客户端，则发送一个FIN报文。客户端收到后回复一个ACK报文，表示确认收到服务器的关闭请求‌<span
                            disable-audio="true" disable-copy="true"><span rl-type="stop"><!--20351--><span
                                    class="cos-tooltip cosd-citation"><!--20354--><span
                                        class="cosd-citation-citationId">1<!--20355--></span><!--20354--></span><!--20352--><!--20356--><!--20356--><!--20351--></span><span
                                rl-type="stop"><!--20358--><span class="cos-tooltip cosd-citation"><!--20361--><span
                                        class="cosd-citation-citationId">2<!--20362--></span><!--20361--></span><!--20359--><!--20363--><!--20363--><!--20358--></span></span>。
                    </li>
                    <li>‌<strong>第三次挥手</strong>‌：服务器发送一个FIN报文，表示服务器已经完成数据发送，准备关闭连接。客户端收到后回复一个ACK报文，表示确认收到服务器的关闭请求‌<span
                            disable-audio="true" disable-copy="true"><span rl-type="stop"><!--20365--><span
                                    class="cos-tooltip cosd-citation"><!--20368--><span
                                        class="cosd-citation-citationId">1<!--20369--></span><!--20368--></span><!--20366--><!--20370--><!--20370--><!--20365--></span><span
                                rl-type="stop"><!--20372--><span class="cos-tooltip cosd-citation"><!--20375--><span
                                        class="cosd-citation-citationId">2<!--20376--></span><!--20375--></span><!--20373--><!--20377--><!--20377--><!--20372--></span></span>。
                    </li>
                    <li>‌<strong>第四次挥手</strong>‌：客户端收到服务器的FIN报文后，回复一个ACK报文，表示确认关闭连接‌<span disable-audio="true"
                            disable-copy="true"><span rl-type="stop"><!--20379--><span
                                    class="cos-tooltip cosd-citation"><!--20382--><span
                                        class="cosd-citation-citationId">1<!--20383--></span><!--20382--></span><!--20380--><!--20384--><!--20384--><!--20379--></span><span
                                rl-type="stop"><!--20386--><span class="cos-tooltip cosd-citation"><!--20389--><span
                                        class="cosd-citation-citationId">2<!--20390--></span><!--20389--></span><!--20387--><!--20391--><!--20391--><!--20386--></span></span>。
                    </li>
                </ol>
                <h3>四次挥手的作用</h3>
                <ol>
                    <li>‌<strong>确保数据传输完成</strong>‌：通过FIN和ACK报文，确保双方都完成了数据传输，没有未发送的数据‌<span disable-audio="true"
                            disable-copy="true"><span rl-type="stop"><!--20393--><span
                                    class="cos-tooltip cosd-citation"><!--20396--><span
                                        class="cosd-citation-citationId">1<!--20397--></span><!--20396--></span><!--20394--><!--20398--><!--20398--><!--20393--></span></span>。
                    </li>
                    <li>‌<strong>防止资源泄漏</strong>‌：通过四次挥手，双方可以安全地关闭连接，释放占用的资源，避免资源泄漏‌<span disable-audio="true"
                            disable-copy="true"><span rl-type="stop"><!--20400--><span
                                    class="cos-tooltip cosd-citation"><!--20403--><span
                                        class="cosd-citation-citationId">1<!--20404--></span><!--20403--></span><!--20401--><!--20405--><!--20405--><!--20400--></span></span>。
                    </li>
                    <li>‌<strong>确保连接关闭的可靠性</strong>‌：通过多次确认，确保连接关闭的过程是可靠的，避免因网络问题导致连接未正确关闭‌<span disable-audio="true"
                            disable-copy="true"><span rl-type="stop"><!--20407--><span
                                    class="cos-tooltip cosd-citation"><!--20410--><span
                                        class="cosd-citation-citationId">1<!--20411--></span><!--20410--></span><!--20408--><!--20412--><!--20412--><!--20407--></span></span>。
                    </li>
                </ol>
            </div>
        </div>
    </div>

</template>