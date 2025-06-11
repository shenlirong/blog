---
icon: pen-to-square
# date: 2022-01-01
# order: -5
sticky: 94
category:
  - Mapbox
tag:
  - Mapbox
  - 前端开发
---

<!-- more -->
# Mapbox API

## 点、线、面

添加数据线，收集线数据，type:linestring

var geojson={
    "type":'featurecollection',
    "feature":[{
        "type": "Feature",
                "geometry": {
                "type": "LineString",
                "coordinates": []
    }]
}
添加线的类型应该设置为：type: LineString，添加相对应坐标 ，配置样式layout和pain：

layout :{
    line-cap //线显示的类型，可以是圆形、正方形、Butt
    line-join //连接时线的显示
    visibility // 图层显示与否 none,visible
}
pain:{
    line-color //线的颜色
    line-width //线的宽度
    line-opacity //线的透明度
    line-translate //线的的偏移量
}
给地图添加监听事件：

map.on('load'),()={}） //添加监听地图加载完事件
map.on('click'),()={}） //添加监听地图点击完事件
根据不同Zoom改变图层颜色
给地图添加点、线、面：

map.addSource(mapid,{
    type:geojson,
    data
})
map.addLayer({
    id,
    source,
    type:fill symbol line //(添加面，点，线类型)；
    maxzoom //图层最大缩放级别
    minzoom //图层最小缩放级别
    //添加面
    layout:{
    visibility // visible ,none
    } //布局
    pain:{
       fill-color:{
             stop  //数组类型，不同级别显示不同的颜色 ，如：
             [6,'red'],
             [10,'blue'],
             [11,'green']
              }
             }//配置样式
})
//添加点
map.addsouce(mapid,{
    type:'geojson',
    data://点数据
})
//添加点图层
map.addlayer({
    id:'',
    type: //点类型,
    souce:mapid//点数据
    layout:{
        visibility:visible //设置点图层可见
        text-field //设置文字信息
        text-font //显示文字类型
        text-size //文本大小
    }
    pain:{
        text-color //设置文字颜色
        text-halo-color //文本光晕颜色设置
        text-halo-width  //光晕到字体轮廓的距离
        text-halo-blur   //光晕向外逐渐消失的距离
    }
})
栅格瓦片与矢量切换
map.addsource('mapid',{
    type:'raster'
    titles:[''] //获取栅格数据链接
    tileSize // 栅格图层大小
})
map.addlayer({
    id:'',
    type:'raster',
    source:mapid
})
向地图添加的常用数据
注：向地图添加的常用数据有六种
1.矢量数据  //  vector
 map.addsource('mapid',{
     type:"vector",
     url:''
 })
map.addlayer({
    id:'',
    sources:'mapid',
    type: 数据类型  // Point、line 、circle、fill
})

2.栅格数据  //  raster
map.addsource('mapid',{
    type:"raster",
    titles:['']
})

3.geojson 数据   //geojson 
 map.addsource('mapid',{
     type:"geojson",
     data:you data
 })

4.图片    //  image
  map.addsource('mapid',{
      type:'image',
      url:'' //图片地址
      coordinates:[] //显示的位置坐标
  })
  
  5.视频   //video
  map.addsource('mapid',{
      type:'video',
      url:'' //视频链接
      coordinates:[] //视频显示的位置
  })

6.栅格数据高程   // rester-dem
map.addsource('mapid',{
    type:'raster-dem',
    url:''  //需要加载的数据源
})

## 添加的地图 图层 type 是一个枚举类 ，其中取值有如下几种
"fill", "line", "symbol", "circle", "point","heatmap", "fill-extrusion", "raster", "hillshade", "background".

// 面
"fill":
A filled polygon with an optional stroked border.

//线
"line":
A stroked line.

// 图标或者文本标签
"symbol":
An icon or a text label.

//圆
"circle":
A filled circle.
// 点
"point"
a point
// 热图
"heatmap":
A heatmap.
// 拉伸（3D）多边形
"fill-extrusion":
An extruded (3D) polygon.

//栅格
"raster":
Raster map textures such as satellite imagery.

// 山体阴影可视化(该部分只支持mapbox Terrain RGB and Mapzen Terrarium tiles)
"hillshade":
Client-side hillshading visualization based on DEM data. Currently, the implementation only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.

// 地图的背景色或者图案
"background":
The background color or pattern of the map.
注：在地图中，显示数据颜色，color 可以有很多种写法，都可以显示颜色

以线为例
{
    "line-color": "#ff0",
    "line-color": "#ffff00",
    "line-color": "rgb(255, 255, 0)",
    "line-color": "rgba(255, 255, 0, 1)",
    "line-color": "hsl(100, 50%, 50%)",
    "line-color": "hsla(100, 50%, 50%, 1)",
    "line-color": "yellow"
}
上面表示颜色的写法，都是可用的表达
添加图标、矢量点（增添拖拽功能，并且实时显示坐标）
1.图标
var marker=smartmapx.UnionMarker([图标位置]); //定义图标
marker.addTo(map)  // 将图标添加到地图
marker.enableDragging()  //允许图标拖拽
marker.disableDragging() //图标不可拖拽

2.矢量点拖拽功能
全局定义json对象
var poin_json={
    'type':'FeatureCollection',
    'features': [
            {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [坐标]
              }
             }
            ]
}
当地图加载完成，添加监听事件
map.on('load',()=>{
    //添加矢量点
    map.addsource('mpoint',{
        type:'geojson',
        data:poin_json
    })
    map.addlayer({
        id:'poin',
        source:'point_json',
        type:'circle'
    })
})
地图加载完成后，添加监听事件
map.on('load',()={
//对点进行鼠标监听事件，第一个参数是监听的事件，第二个参数是需要监听的图层
    map.on('mouseenter','point',()=>{
        //鼠标移入事件
    })
    map.on('mouseleave','point',()=>{
        //鼠标离开事件
    })
    map.on('mousemove','point',()=>{
        //鼠标移动事件
    })
   map.on('mousedown','poin',()=>{
       //鼠标按下事件
   })
   map.on('mouseup','poin',()=>{
       //鼠标放开事件
   })
})
地图中 on 和 once 的区别
map.on('mouseenter','poin',()={
    console.log(777)
    // 当每次鼠标进入是控制台都可以输出 777
})

map.once('mouseenter','poin',()={
     console.log(777)
 // 当每次鼠标时 没有输出
})
map.once('mouseup','poin',()={
     console.log(777)
 // 当每次鼠标放开开始，输出 777
})
总结：
on 可以一直监听某个事件
once 只监听一次
map.on('click')  //地图点击一次后，下次还可以点击
map.once('click') // 地图点击一次后，下次点击没有效果
地图可否可拖拽
利用dragPan属性
map.dragPan.eable() //地图可拖拽
map.dragPan.disable() //地图不可拖拽
map.dragPan.isEnabled() //返回一个boolean值，判断地图是否可拖拽
map.dragPan.isActive() //返回一个boolean值，指示“拖动到平移”交互是否处于活动状态，即当前正在使用
地图中图层配置样式
1. 停止(stops)
是一个数组，根据输入和输出值定义功能，一组一个输入值和一个输出值，也叫“停止”，停止输出值必须是文字值（即不是函数或表达式），并且适用于该属性，如：
    circle-radius:{
        stops:[
            [5,1], // zoom is 5,circle-radius will be 1px
            [10,2] //zoom is 10,circle-radius will be 2px
        ]
    }
  circle-color:[
      "match",['to-string',['get','需要匹配的属性字段']],
       "55",
      "#0000ff",
      "456",
      "#0085f0",
      "22",
      "#06fcfc",
      "512",
      "#4dea21",
      "#b12c2c"
  ]
   
2.过滤器 (filter)
    现有过滤器
    ["has",key]  key 存在
    ["!has",key] key 不存在

    比较过滤器
    ["==", key, value] 相等：feature [key] = value
    ["!=", key, value] 不等式：feature [key] ≠ 值
    [">", key, value] 大于：feature [key] > value
    [">=", key, value] 大于或等于：feature [key] ≥ 值
    ["<", key, value] 小于：feature [key] < 值
    ["<=", key, value] 小于或等于：特征[键] ≤ 值
    
    设置成员资格过滤器
    ["in", key, v0, ..., vn] 集合包含：feature [key] ∈ { v0，...，vn }
    ["!in", key, v0, ..., vn] 设置排除：feature [key] ∉ { v0，...，vn }

    组合过滤器
    ["all", f0, ..., fn] 逻辑AND：F0 ∧...∧ FN  //全部为真
    ["any", f0, ..., fn] 逻辑OR：F0 ∨...∨ FN   // 包含其中一个
    ["none", f0, ..., fn] 逻辑NOR：¬ F0 ∧...∧¬ FN // 即不是，也不是
    
      // 此过滤器要求每个要素的属性等于“ street_major”，“ street_minor”或“ street_limited”
    ["in", "class", "street_major", "street_minor", "street_limited"]
  
      组合过滤器“ all”采用其后的其他三个过滤器，并要求所有过滤器都为真才能包含功能：
      功能必须等于“street_limited”，且必须大于或等于3，并且其类型不能为多边形.如下：
      [
        "all", // all 表示下面所有的条件都得满足
        ["==", "class", "street_limited"], //图层存在属性 class==street_limited
        [">=", "admin_level", 3],    // 图层存在属性 admin_level>=3
        ["!in", "$type", "Polygon"]  // 图层存在属性 $type 不是 多边形
      ]
       1.图层存在属性 class==street_limited
       2.图层存在属性 admin_level>=3
       3.图层存在属性 $type 不是 多边形
       上面三种情况都得满足，才可以。
       
         [
        "any", // any 满足其中一个条件即可
        ["==", "class", "street_limited"], //图层存在属性 class==street_limited
        [">=", "admin_level", 3],    // 图层存在属性 admin_level>=3
        ["!in", "$type", "Polygon"]  // 图层存在属性 $type 不是 多边形
      ]
       1.图层存在属性 class==street_limited
       2.图层存在属性 admin_level>=3
       3.图层存在属性 $type 不是 多边形
       上面三种情况满足其中一个就可以。
       
       [
        "none", // none 都不满足，才可
        ["==", "class", "street_limited"], //图层存在属性 class==street_limited
        [">=", "admin_level", 3],    // 图层存在属性 admin_level>=3
        ["!in", "$type", "Polygon"]  // 图层存在属性 $type 不是 多边形
      ]
       1.图层存在属性 class==street_limited
       2.图层存在属性 admin_level>=3
       3.图层存在属性 $type 不是 多边形
       上面三种情况都不满足，才可以。
       
line-gradient  (渐变属性，需要 lineMetrics：true，才能生效，数据源必须是geojson ，存在属性line-dasharray、 line-pattern 不能使用)
// 线的渐变，需要数据源必须是geojson 
// line-dasharray、 line-pattern中不能使用

地图接口
1.unproject
返回一个lnglat表示与指定的像素坐标相对应的地理坐标。
参数
point(PointLike)像素坐标。
返回
lnglat： lnglat所对应 Point

