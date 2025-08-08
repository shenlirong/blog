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
                        </span></span>用来关闭连接的过程，确保两个主机之间能够安全、可靠地关闭连接。四次挥手通过四次消息交换，确保双方都接收到对方的关闭请求，并且数据传输已经完成‌
              
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
                            </span></span>报文，表示确认收到客户端的关闭请求
                    </li>
                    <li>‌<strong>第二次挥手</strong>‌：服务器确认收到客户端的关闭请求后，如果还有数据需要发送给客户端，则发送一个FIN报文。客户端收到后回复一个ACK报文，表示确认收到服务器的关闭请求
                    </li>
                    <li>‌<strong>第三次挥手</strong>‌：服务器发送一个FIN报文，表示服务器已经完成数据发送，准备关闭连接。客户端收到后回复一个ACK报文，表示确认收到服务器的关闭请求
                    </li>
                    <li>‌<strong>第四次挥手</strong>‌：客户端收到服务器的FIN报文后，回复一个ACK报文，表示确认关闭连接‌
                    </li>
                </ol>
                <h3>四次挥手的作用</h3>
                <ol>
                    <li>‌<strong>确保数据传输完成</strong>‌：通过FIN和ACK报文，确保双方都完成了数据传输，没有未发送的数据
                    </li>
                    <li>‌<strong>防止资源泄漏</strong>‌：通过四次挥手，双方可以安全地关闭连接，释放占用的资源，避免资源泄漏
                    </li>
                    <li>‌<strong>确保连接关闭的可靠性</strong>‌：通过多次确认，确保连接关闭的过程是可靠的，避免因网络问题导致连接未正确关闭
                    </li>
                </ol>
            </div>
        </div>
    </div>

</template>