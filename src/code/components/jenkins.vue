<template>
    <h3>Jenkins原理</h3>
    <div class="ai-entry"><!--1062-->
        <div>
            <div data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1067-->
                        <div class="cosd-markdown-content "><!--1068-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>Jenkins的核心原理基于主从（Master-Agent）架构和自动化流程编排</strong>‌</mark>，通过分布式构建、插件扩展和事件驱动机制实现持续集成与交付（CI/CD）。其主节点负责任务调度和管理，代理节点执行构建任务，结合丰富的插件生态系统和Pipeline脚本化定义，支持跨平台、多环境的复杂自动化流程。‌‌<span
                                        disable-audio="true" disable-copy="true"></span>‌‌<span disable-audio="true"
                                        disable-copy="true"><span rl-type="stop"><!--1070--><span
                                                class="cos-tooltip cosd-citation"><!--1073--><!--1073--></span><!--1071--><!--1075--><!--1075--><!--1070--></span></span>
                                </p>
                            </div><!--1068-->
                        </div>
                    </div>
                </div>
            </div><!--1063-->
        </div><!--1062--><!--1076-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1081-->
                        <div class="cosd-markdown-content "><!--1082-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>主从架构与分布式构建</strong>‌</mark>
                                </p>
                            </div><!--1082-->
                        </div>
                    </div>
                </div>
            </div><!--1077-->
        </div><!--1076--><!--1083-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1088-->
                        <div class="cosd-markdown-content "><!--1089-->
                            <div class="marklang">
                                <ol>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>Master节点</strong>‌</mark>：作为控制中心，负责任务调度、配置管理、界面提供及插件支持，不直接执行构建任务。‌‌<span
                                            disable-audio="true" disable-copy="true"></span>‌‌<span disable-audio="true"
                                            disable-copy="true"><span rl-type="stop"><!--1091--><span
                                                    class="cos-tooltip cosd-citation"><!--1094--><!--1094--></span><!--1092--><!--1096--><!--1096--><!--1091--></span></span>
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>Agent节点</strong>‌</mark>：分布式执行的终端，根据主节点指令运行具体构建步骤，可跨平台部署以实现环境隔离与资源优化。‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--1098--><span
                                                    class="cos-tooltip cosd-citation"><!--1101--><!--1101--></span><!--1099--><!--1103--><!--1103--><!--1098--></span></span>‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--1105--><span
                                                    class="cos-tooltip cosd-citation"><!--1108--><!--1108--></span><!--1106--><!--1110--><!--1110--><!--1105--></span></span>
                                    </li>
                                </ol>
                            </div><!--1089-->
                        </div>
                    </div>
                </div>
            </div><!--1084-->
        </div><!--1083--><!--1111-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1116-->
                        <div class="cosd-markdown-content "><!--1117-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>自动化流程触发机制</strong>‌</mark>
                                </p>
                            </div><!--1117-->
                        </div>
                    </div>
                </div>
            </div><!--1112-->
        </div><!--1111--><!--1118-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1123-->
                        <div class="cosd-markdown-content "><!--1124-->
                            <div class="marklang">
                                <ul>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>事件驱动模式</strong>‌</mark>：通过代码提交触发（SCM轮询或Webhook）、定时任务或手动启动等方式激活流程。‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--1126--><span
                                                    class="cos-tooltip cosd-citation"><!--1129--><!--1129--></span><!--1127--><!--1131--><!--1131--><!--1126--></span></span>‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--1133--><span
                                                    class="cos-tooltip cosd-citation"><!--1136--><!--1136--></span><!--1134--><!--1138--><!--1138--><!--1133--></span></span>
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>Pipeline编排</strong>‌</mark>：用Jenkinsfile定义从代码检出到部署的完整生命周期，支持并行任务、条件判断等复杂逻辑。‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--1140--><span
                                                    class="cos-tooltip cosd-citation"><!--1143--><!--1143--></span><!--1141--><!--1145--><!--1145--><!--1140--></span></span>‌‌<span
                                            disable-audio="true" disable-copy="true"><span
                                                rl-type="stop"><!--1147--><span
                                                    class="cos-tooltip cosd-citation"><!--1150--><!--1150--></span><!--1148--><!--1152--><!--1152--><!--1147--></span></span>
                                    </li>
                                </ul>
                            </div><!--1124-->
                        </div>
                    </div>
                </div>
            </div><!--1119-->
        </div><!--1118--><!--1153-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1158-->
                        <div class="cosd-markdown-content "><!--1159-->
                            <div class="marklang">
                                <p class="marklang-paragraph"><mark
                                        class="flexible-marker flexible-marker-default">‌<strong>核心支撑系统</strong>‌</mark>
                                </p>
                            </div><!--1159-->
                        </div>
                    </div>
                </div>
            </div><!--1154-->
        </div><!--1153--><!--1160-->
        <div>
            <div class="cos-space-mt-xxl" data-show="summary"
                data-show-ext="{&quot;component_content&quot;:{&quot;component_name&quot;:&quot;markdown&quot;,&quot;component_type&quot;:&quot;abstract&quot;,&quot;reference_type&quot;:&quot;&quot;},&quot;hasCredibleRef&quot;:false}">
                <div class="link-wrapper_2Zcj9">
                    <div class="cosd-markdown"><!--1165-->
                        <div class="cosd-markdown-content "><!--1166-->
                            <div class="marklang">
                                <ol>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>插件生态系统</strong>‌</mark>：
                                        <ul>
                                            <li>提供1800+插件覆盖版本控制、构建工具、测试框架等关键领域。‌‌<span disable-audio="true"
                                                    disable-copy="true"><span rl-type="stop"><!--1168--><span
                                                            class="cos-tooltip cosd-citation"><!--1171--><!--1171--></span><!--1169--><!--1173--><!--1173--><!--1168--></span></span>‌‌<span
                                                    disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--1175--><span
                                                            class="cos-tooltip cosd-citation"><!--1178--><!--1178--></span><!--1176--><!--1180--><!--1180--><!--1175--></span></span>
                                            </li>
                                            <li>允许自定义插件开发以满足特殊需求。</li>
                                        </ul>
                                    </li>
                                    <li><mark
                                            class="flexible-marker flexible-marker-default">‌<strong>安全与权限管理</strong>‌</mark>：
                                        <ul>
                                            <li>支持LDAP/OAuth等认证方式。‌‌<span disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--1182--><span
                                                            class="cos-tooltip cosd-citation"><!--1185--><!--1185--></span><!--1183--><!--1187--><!--1187--><!--1182--></span></span>
                                            </li>
                                            <li>构建日志加密传输保障过程安全性。‌‌<span disable-audio="true" disable-copy="true"><span
                                                        rl-type="stop"><!--1189--><span
                                                            class="cos-tooltip cosd-citation"><!--1192--><!--1192--></span><!--1190--><!--1194--><!--1194--><!--1189--></span></span>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div><!--1166-->
                        </div>
                    </div>
                </div>
            </div><!--1161-->
        </div><!--1160--><!--1061-->
    </div>
</template>
<style>
strong{
    background-color: white;
}
</style>