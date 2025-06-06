import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/mapbox/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/mapbox/1.html\",\"title\":\"Mapbox API\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"sticky\":98,\"category\":[\"Mapbox\"],\"tag\":[\"Mapbox\",\"前端开发\"],\"description\":\"Mapbox API 点、线、面 添加数据线，收集线数据，type:linestring var geojson={ \\\"type\\\":'featurecollection', \\\"feature\\\":[{ \\\"type\\\": \\\"Feature\\\", \\\"geometry\\\": { \\\"type\\\": \\\"LineString\\\", \\\"coordinates\\\": [] }] }...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Mapbox API\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/test/posts/mapbox/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Mapbox API\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Mapbox API 点、线、面 添加数据线，收集线数据，type:linestring var geojson={ \\\"type\\\":'featurecollection', \\\"feature\\\":[{ \\\"type\\\": \\\"Feature\\\", \\\"geometry\\\": { \\\"type\\\": \\\"LineString\\\", \\\"coordinates\\\": [] }] }...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端开发\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Mapbox\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-01T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":6.76,\"words\":2028},\"filePathRelative\":\"posts/mapbox/1.md\",\"excerpt\":\"\\n<h2>点、线、面</h2>\\n<p>添加数据线，收集线数据，type:linestring</p>\\n<p>var geojson={<br>\\n\\\"type\\\":'featurecollection',<br>\\n\\\"feature\\\":[{<br>\\n\\\"type\\\": \\\"Feature\\\",<br>\\n\\\"geometry\\\": {<br>\\n\\\"type\\\": \\\"LineString\\\",<br>\\n\\\"coordinates\\\": []<br>\\n}]<br>\\n}<br>\\n添加线的类型应该设置为：type: LineString，添加相对应坐标 ，配置样式layout和pain：</p>\\n<p>layout :{<br>\\nline-cap //线显示的类型，可以是圆形、正方形、Butt<br>\\nline-join //连接时线的显示<br>\\nvisibility // 图层显示与否 none,visible<br>\\n}<br>\\npain:{<br>\\nline-color //线的颜色<br>\\nline-width //线的宽度<br>\\nline-opacity //线的透明度<br>\\nline-translate //线的的偏移量<br>\\n}<br>\\n给地图添加监听事件：</p>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
