<template><div><h1 id="mapbox-api" tabindex="-1"><a class="header-anchor" href="#mapbox-api"><span>Mapbox API</span></a></h1>
<h2 id="点、线、面" tabindex="-1"><a class="header-anchor" href="#点、线、面"><span>点、线、面</span></a></h2>
<p>添加数据线，收集线数据，type:linestring</p>
<p>var geojson={<br>
&quot;type&quot;:'featurecollection',<br>
&quot;feature&quot;:[{<br>
&quot;type&quot;: &quot;Feature&quot;,<br>
&quot;geometry&quot;: {<br>
&quot;type&quot;: &quot;LineString&quot;,<br>
&quot;coordinates&quot;: []<br>
}]<br>
}<br>
添加线的类型应该设置为：type: LineString，添加相对应坐标 ，配置样式layout和pain：</p>
<p>layout :{<br>
line-cap //线显示的类型，可以是圆形、正方形、Butt<br>
line-join //连接时线的显示<br>
visibility // 图层显示与否 none,visible<br>
}<br>
pain:{<br>
line-color //线的颜色<br>
line-width //线的宽度<br>
line-opacity //线的透明度<br>
line-translate //线的的偏移量<br>
}<br>
给地图添加监听事件：</p>
<p>map.on('load'),()={}） //添加监听地图加载完事件<br>
map.on('click'),()={}） //添加监听地图点击完事件<br>
根据不同Zoom改变图层颜色<br>
给地图添加点、线、面：</p>
<p>map.addSource(mapid,{<br>
type:geojson,<br>
data<br>
})<br>
map.addLayer({<br>
id,<br>
source,<br>
type:fill symbol line //(添加面，点，线类型)；<br>
maxzoom //图层最大缩放级别<br>
minzoom //图层最小缩放级别<br>
//添加面<br>
layout:{<br>
visibility // visible ,none<br>
} //布局<br>
pain:{<br>
fill-color:{<br>
stop  //数组类型，不同级别显示不同的颜色 ，如：<br>
[6,'red'],<br>
[10,'blue'],<br>
[11,'green']<br>
}<br>
}//配置样式<br>
})<br>
//添加点<br>
map.addsouce(mapid,{<br>
type:'geojson',<br>
data://点数据<br>
})<br>
//添加点图层<br>
map.addlayer({<br>
id:'',<br>
type: //点类型,<br>
souce:mapid//点数据<br>
layout:{<br>
visibility:visible //设置点图层可见<br>
text-field //设置文字信息<br>
text-font //显示文字类型<br>
text-size //文本大小<br>
}<br>
pain:{<br>
text-color //设置文字颜色<br>
text-halo-color //文本光晕颜色设置<br>
text-halo-width  //光晕到字体轮廓的距离<br>
text-halo-blur   //光晕向外逐渐消失的距离<br>
}<br>
})<br>
栅格瓦片与矢量切换<br>
map.addsource('mapid',{<br>
type:'raster'<br>
titles:[''] //获取栅格数据链接<br>
tileSize // 栅格图层大小<br>
})<br>
map.addlayer({<br>
id:'',<br>
type:'raster',<br>
source:mapid<br>
})<br>
向地图添加的常用数据<br>
注：向地图添加的常用数据有六种<br>
1.矢量数据  //  vector<br>
map.addsource('mapid',{<br>
type:&quot;vector&quot;,<br>
url:''<br>
})<br>
map.addlayer({<br>
id:'',<br>
sources:'mapid',<br>
type: 数据类型  // Point、line 、circle、fill<br>
})</p>
<p>2.栅格数据  //  raster<br>
map.addsource('mapid',{<br>
type:&quot;raster&quot;,<br>
titles:['']<br>
})</p>
<p>3.geojson 数据   //geojson<br>
map.addsource('mapid',{<br>
type:&quot;geojson&quot;,<br>
data:you data<br>
})</p>
<p>4.图片    //  image<br>
map.addsource('mapid',{<br>
type:'image',<br>
url:'' //图片地址<br>
coordinates:[] //显示的位置坐标<br>
})</p>
<p>5.视频   //video<br>
map.addsource('mapid',{<br>
type:'video',<br>
url:'' //视频链接<br>
coordinates:[] //视频显示的位置<br>
})</p>
<p>6.栅格数据高程   // rester-dem<br>
map.addsource('mapid',{<br>
type:'raster-dem',<br>
url:''  //需要加载的数据源<br>
})</p>
<h2 id="添加的地图-图层-type-是一个枚举类-其中取值有如下几种" tabindex="-1"><a class="header-anchor" href="#添加的地图-图层-type-是一个枚举类-其中取值有如下几种"><span>添加的地图 图层 type 是一个枚举类 ，其中取值有如下几种</span></a></h2>
<p>&quot;fill&quot;, &quot;line&quot;, &quot;symbol&quot;, &quot;circle&quot;, &quot;point&quot;,&quot;heatmap&quot;, &quot;fill-extrusion&quot;, &quot;raster&quot;, &quot;hillshade&quot;, &quot;background&quot;.</p>
<p>// 面<br>
&quot;fill&quot;:<br>
A filled polygon with an optional stroked border.</p>
<p>//线<br>
&quot;line&quot;:<br>
A stroked line.</p>
<p>// 图标或者文本标签<br>
&quot;symbol&quot;:<br>
An icon or a text label.</p>
<p>//圆<br>
&quot;circle&quot;:<br>
A filled circle.<br>
// 点<br>
&quot;point&quot;<br>
a point<br>
// 热图<br>
&quot;heatmap&quot;:<br>
A heatmap.<br>
// 拉伸（3D）多边形<br>
&quot;fill-extrusion&quot;:<br>
An extruded (3D) polygon.</p>
<p>//栅格<br>
&quot;raster&quot;:<br>
Raster map textures such as satellite imagery.</p>
<p>// 山体阴影可视化(该部分只支持mapbox Terrain RGB and Mapzen Terrarium tiles)<br>
&quot;hillshade&quot;:<br>
Client-side hillshading visualization based on DEM data. Currently, the implementation only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.</p>
<p>// 地图的背景色或者图案<br>
&quot;background&quot;:<br>
The background color or pattern of the map.<br>
注：在地图中，显示数据颜色，color 可以有很多种写法，都可以显示颜色</p>
<p>以线为例<br>
{<br>
&quot;line-color&quot;: &quot;#ff0&quot;,<br>
&quot;line-color&quot;: &quot;#ffff00&quot;,<br>
&quot;line-color&quot;: &quot;rgb(255, 255, 0)&quot;,<br>
&quot;line-color&quot;: &quot;rgba(255, 255, 0, 1)&quot;,<br>
&quot;line-color&quot;: &quot;hsl(100, 50%, 50%)&quot;,<br>
&quot;line-color&quot;: &quot;hsla(100, 50%, 50%, 1)&quot;,<br>
&quot;line-color&quot;: &quot;yellow&quot;<br>
}<br>
上面表示颜色的写法，都是可用的表达<br>
添加图标、矢量点（增添拖拽功能，并且实时显示坐标）<br>
1.图标<br>
var marker=smartmapx.UnionMarker([图标位置]); //定义图标<br>
marker.addTo(map)  // 将图标添加到地图<br>
marker.enableDragging()  //允许图标拖拽<br>
marker.disableDragging() //图标不可拖拽</p>
<p>2.矢量点拖拽功能<br>
全局定义json对象<br>
var poin_json={<br>
'type':'FeatureCollection',<br>
'features': [<br>
{<br>
'type': 'Feature',<br>
'geometry': {<br>
'type': 'Point',<br>
'coordinates': [坐标]<br>
}<br>
}<br>
]<br>
}<br>
当地图加载完成，添加监听事件<br>
map.on('load',()=&gt;{<br>
//添加矢量点<br>
map.addsource('mpoint',{<br>
type:'geojson',<br>
data:poin_json<br>
})<br>
map.addlayer({<br>
id:'poin',<br>
source:'point_json',<br>
type:'circle'<br>
})<br>
})<br>
地图加载完成后，添加监听事件<br>
map.on('load',()={<br>
//对点进行鼠标监听事件，第一个参数是监听的事件，第二个参数是需要监听的图层<br>
map.on('mouseenter','point',()=&gt;{<br>
//鼠标移入事件<br>
})<br>
map.on('mouseleave','point',()=&gt;{<br>
//鼠标离开事件<br>
})<br>
map.on('mousemove','point',()=&gt;{<br>
//鼠标移动事件<br>
})<br>
map.on('mousedown','poin',()=&gt;{<br>
//鼠标按下事件<br>
})<br>
map.on('mouseup','poin',()=&gt;{<br>
//鼠标放开事件<br>
})<br>
})<br>
地图中 on 和 once 的区别<br>
map.on('mouseenter','poin',()={<br>
console.log(777)<br>
// 当每次鼠标进入是控制台都可以输出 777<br>
})</p>
<p>map.once('mouseenter','poin',()={<br>
console.log(777)<br>
// 当每次鼠标时 没有输出<br>
})<br>
map.once('mouseup','poin',()={<br>
console.log(777)<br>
// 当每次鼠标放开开始，输出 777<br>
})<br>
总结：<br>
on 可以一直监听某个事件<br>
once 只监听一次<br>
map.on('click')  //地图点击一次后，下次还可以点击<br>
map.once('click') // 地图点击一次后，下次点击没有效果<br>
地图可否可拖拽<br>
利用dragPan属性<br>
map.dragPan.eable() //地图可拖拽<br>
map.dragPan.disable() //地图不可拖拽<br>
map.dragPan.isEnabled() //返回一个boolean值，判断地图是否可拖拽<br>
map.dragPan.isActive() //返回一个boolean值，指示“拖动到平移”交互是否处于活动状态，即当前正在使用<br>
地图中图层配置样式</p>
<ol>
<li>停止(stops)<br>
是一个数组，根据输入和输出值定义功能，一组一个输入值和一个输出值，也叫“停止”，停止输出值必须是文字值（即不是函数或表达式），并且适用于该属性，如：<br>
circle-radius:{<br>
stops:[<br>
[5,1], // zoom is 5,circle-radius will be 1px<br>
[10,2] //zoom is 10,circle-radius will be 2px<br>
]<br>
}<br>
circle-color:[<br>
&quot;match&quot;,['to-string',['get','需要匹配的属性字段']],<br>
&quot;55&quot;,<br>
&quot;#0000ff&quot;,<br>
&quot;456&quot;,<br>
&quot;#0085f0&quot;,<br>
&quot;22&quot;,<br>
&quot;#06fcfc&quot;,<br>
&quot;512&quot;,<br>
&quot;#4dea21&quot;,<br>
&quot;#b12c2c&quot;<br>
]</li>
</ol>
<p>2.过滤器 (filter)<br>
现有过滤器<br>
[&quot;has&quot;,key]  key 存在<br>
[&quot;!has&quot;,key] key 不存在</p>
<pre><code>比较过滤器
[&quot;==&quot;, key, value] 相等：feature [key] = value
[&quot;!=&quot;, key, value] 不等式：feature [key] ≠ 值
[&quot;&gt;&quot;, key, value] 大于：feature [key] &gt; value
[&quot;&gt;=&quot;, key, value] 大于或等于：feature [key] ≥ 值
[&quot;&lt;&quot;, key, value] 小于：feature [key] &lt; 值
[&quot;&lt;=&quot;, key, value] 小于或等于：特征[键] ≤ 值

设置成员资格过滤器
[&quot;in&quot;, key, v0, ..., vn] 集合包含：feature [key] ∈ { v0，...，vn }
[&quot;!in&quot;, key, v0, ..., vn] 设置排除：feature [key] ∉ { v0，...，vn }

组合过滤器
[&quot;all&quot;, f0, ..., fn] 逻辑AND：F0 ∧...∧ FN  //全部为真
[&quot;any&quot;, f0, ..., fn] 逻辑OR：F0 ∨...∨ FN   // 包含其中一个
[&quot;none&quot;, f0, ..., fn] 逻辑NOR：¬ F0 ∧...∧¬ FN // 即不是，也不是

  // 此过滤器要求每个要素的属性等于“ street_major”，“ street_minor”或“ street_limited”
[&quot;in&quot;, &quot;class&quot;, &quot;street_major&quot;, &quot;street_minor&quot;, &quot;street_limited&quot;]

  组合过滤器“ all”采用其后的其他三个过滤器，并要求所有过滤器都为真才能包含功能：
  功能必须等于“street_limited”，且必须大于或等于3，并且其类型不能为多边形.如下：
  [
    &quot;all&quot;, // all 表示下面所有的条件都得满足
    [&quot;==&quot;, &quot;class&quot;, &quot;street_limited&quot;], //图层存在属性 class==street_limited
    [&quot;&gt;=&quot;, &quot;admin_level&quot;, 3],    // 图层存在属性 admin_level&gt;=3
    [&quot;!in&quot;, &quot;$type&quot;, &quot;Polygon&quot;]  // 图层存在属性 $type 不是 多边形
  ]
   1.图层存在属性 class==street_limited
   2.图层存在属性 admin_level&gt;=3
   3.图层存在属性 $type 不是 多边形
   上面三种情况都得满足，才可以。
   
     [
    &quot;any&quot;, // any 满足其中一个条件即可
    [&quot;==&quot;, &quot;class&quot;, &quot;street_limited&quot;], //图层存在属性 class==street_limited
    [&quot;&gt;=&quot;, &quot;admin_level&quot;, 3],    // 图层存在属性 admin_level&gt;=3
    [&quot;!in&quot;, &quot;$type&quot;, &quot;Polygon&quot;]  // 图层存在属性 $type 不是 多边形
  ]
   1.图层存在属性 class==street_limited
   2.图层存在属性 admin_level&gt;=3
   3.图层存在属性 $type 不是 多边形
   上面三种情况满足其中一个就可以。
   
   [
    &quot;none&quot;, // none 都不满足，才可
    [&quot;==&quot;, &quot;class&quot;, &quot;street_limited&quot;], //图层存在属性 class==street_limited
    [&quot;&gt;=&quot;, &quot;admin_level&quot;, 3],    // 图层存在属性 admin_level&gt;=3
    [&quot;!in&quot;, &quot;$type&quot;, &quot;Polygon&quot;]  // 图层存在属性 $type 不是 多边形
  ]
   1.图层存在属性 class==street_limited
   2.图层存在属性 admin_level&gt;=3
   3.图层存在属性 $type 不是 多边形
   上面三种情况都不满足，才可以。
</code></pre>
<p>line-gradient  (渐变属性，需要 lineMetrics：true，才能生效，数据源必须是geojson ，存在属性line-dasharray、 line-pattern 不能使用)<br>
// 线的渐变，需要数据源必须是geojson<br>
// line-dasharray、 line-pattern中不能使用</p>
<p>地图接口<br>
1.unproject<br>
返回一个lnglat表示与指定的像素坐标相对应的地理坐标。<br>
参数<br>
point(PointLike)像素坐标。<br>
返回<br>
lnglat： lnglat所对应 Point</p>
</div></template>


