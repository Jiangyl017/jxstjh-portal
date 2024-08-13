# ArcGis
如果你的卡片有ArcGis场景.
## 场景说明
业务平台中ArcGis相关的依赖卡片或模块不需要关心,平台已经全局管理,只关注有需要用到的时候使用即可.
> 在开始之前，推荐先学习 [ArcGis JavaScriptAPI Version 4.17](https://developers.arcgis.com/javascript/latest/api-reference/) 因为本文档不会详述ArcGis JavaScriptAPI如何使用,我们主要讨论如何在门户中使用.
> [江西省水利数据共享系统](http://gxpt.jxsl.gov.cn/#/space),里面的[数据](http://gxpt.jxsl.gov.cn/#/data)与[地图](http://gxpt.jxsl.gov.cn/#/space)在大部分场景下都可以直接使用,可以大大降低你的开发工作量与复杂度

## gis实例
![gis1.jpg](https://e.im5i.com/2020/12/22/gis1.jpg)
* 卡片组件获取gis实例
  ```javascript
  //...
    computed: {
    ...mapGetters({
      gisView: 'gisView',
      gisMap: 'gisMap'
    })
  //...
  ```
## 生命周期管理

 了解生命周期会大大有助于你理解gis地图与卡片加载的时序关系,让你的恰当的时机销毁与gis地图之间的通信联系.

<img  src="https://e.im5i.com/2020/12/22/1a10a1956f30faecdb387e77294ea84f.png" alt="1a10a1956f30faecdb387e77294ea84f.png" border="0" />

## gisApi
由于ArcGisJSApi使用`dojo`框架编写而成,`dojo`有自己的`AMD loader`,按照官方推荐,我们使用`loadModules`来加载api模块
```javascript
import { loadModules } from 'esri-loader'
//...
async initGis(){
    // 此处解构是按照数组下标位置而不是模块名
    const [esriConfig, MapImageLayer] = await loadModules([
        'esri/config', 'esri/layers/MapImageLayer'
    ])
}
```
## gis通信
### 卡片向gis发送数据
> 如有其它情况 欢迎补充

* 添加图层
  * 添加图层**必须**设置图层id,使用有id的图层会让后续针对gis的操作更具准确性
    ```javascript
    const LAYERID = 'JhRainCardSK';
    const flURL = 'http://gxpt.jxsl.gov.cn/arcgis/rest/services/UNN_FAC_INFA/Feature_UNN_FAC_INFA_ST/FeatureServer';
    const fl = new FeatureLayer({
        url: flURL,
        id: LAYERID,
        // ...
    });
    ```
  * 添加图层之前判断图层是否存在同样很重要,因为可能你发布的多张卡片公用一个图层
    ```javascript
    if (map.findLayerById(LAYERID)) return;
    ```
* 绑定事件
  * arcgisApi绑定事件的返回值需要保存,因为在恰当的时机需要解绑监听,如果不这样做,会因为卡片造成内存泄露导致卡片<font color='red'>审核失败</font>
    ```javascript
    destroyed () {
        // 移除相关图层与监听器
        const map = this.gisMap
        if (map.findLayerById(LAYERID)) {
            map.remove(map.findLayerById(LAYERID))
        }
        if (this.$immediateClick) {
            this.$immediateClick.remove()
            this.$immediateClick = undefined
        }
    }
    ```
### gis向卡片通信
> 如有其它情况 欢迎补充
* gis广播事件,卡片监听 <small style="color:red">暂未上线</small>
* 卡片监听gis地图上已注册的事件.
    ```javascript
    methods: {
    // ...
        bindClick(){
			const view = this.gisView
            if (!this.$immediateClick) { // 防止重复监听
                this.$immediateClick = view.on('immediate-click', event => {
                view.hitTest(event).then(e => {
                    // 通过点击事件拿到 目标ID 图层上graphic上的attributes
                    const { attributes } = e.results.map(({ graphic }) => graphic).find(graphic => {
                        return graphic && graphic.layer && graphic.layer.id === LAYERID
                    })
                    if (attributes) { this.doSomeThing(attributes) } // 处理相关业务
                    })
                })
            }
        }
    // ...
    }
    ```

## gis常用方法
### 绑定地图事件
1. 地图点击
```javascript
view.on('click', (event) => { 
  // 获取点击经纬度，屏幕坐标信息
  view.hitTest(event).then(res => {
    // 获取自己绘制点或者FeatureLayer图层上的点
  })
})
```
2. 监听图层缩放
```javascript
view.watch('scale', () => { 
})
```

### 跳转视图
1. 跳转到一个点
```javascript
const [ Point ] = await loadModules(['esri/geometry/Point'])
const center = new Point({
  x: 116,
  y: 27,
  spatialReference: {
    wkid: 4490
  }
})
view.goTo({
  zoom: 2,
  center: center
})
```
2. 跳转到一个范围
```javascript
view.goTo(data.geometry.extent, {
  speedFactor: 0.6,
  duration: 1500
});
```
### 加载字体和共享平台code
1. 字体指向地址
```javascript
const [ esriConfig ] = await loadModules(['esri/config'])
esriConfig.fontsUrl = `${GisBaseUrl}/arcgis_js_api/library/4.16/fonts`
```
2. 共享平台添加code
```javascript
const mapUrl = 'http://gxpt.jxsl.gov.cn/arcgis/rest/services/basemap/JXVectorBasemap/MapServer'
esriConfig.request.interceptors.push({
  urls: mapUrl,
  before: function (params) {
    if (params.requestOptions.query) {
      params.requestOptions.query.code = '5b8dcae8332ee4f2d93db7e9f483ddaa1'
    } else if (params.requestOptions) {
      params.url += '&code=' + '5b8dcae8332ee4f2d93db7e9f483ddaa1'
    }
  }
})
```
### 弹框
1. 创建弹框
```javascript
view.popup.open({
  actions: [],
  title: "<div class='bs-headline'><img src='/bs_11.png'>" + data.cwsName + "</div>",
  location: etry,
  content: "<div class='bs-lading'>加载中...</div>"
});
```
2. 更新弹框
```javascript
view.popup.content = "<div class='bs-popup'></div>" // 跟新弹框内容
```
3. 关闭弹框
```javascript
view.popup.close()
```
### FeatureLayer 要素图层
FeatureLayer 要素图层服务，可通过前端对样式在修改
1. 创建要素及模版信息
```javascript
const hwySym = {
  type: 'simple-marker',
  size: 8,
  color: [51, 41, 0, 0.6],
  outline: { // autocasts as new SimpleLineSymbol()
    width: '2px',
    color: 'white'
  }
}
const hwsSym = {
  type: 'simple-marker',
  size: 8,
  color: [23, 207, 121, 0.6],
  outline: { // autocasts as new SimpleLineSymbol()
    width: '2px',
    color: 'white'
  }
}
const otherSym = {
  type: 'simple-marker',
  size: 8,
  color: [240, 36, 0, 0.6],
  outline: { // autocasts as new SimpleLineSymbol()
    width: '2px',
    color: 'white'
  }
}
const template = { // 模板
  title: '{SSQ}/{NAME}',
  content: [{
    type: 'fields',
    fieldInfos: [
      { fieldName: 'SSQ', label: '市级' }
    ]
  }]
}
const renderer = {
  type: 'unique-value', // autocasts as new UniqueValueRenderer()
  field: 'SFYWCZZ', // 查询字段
  defaultSymbol: otherSym,
  defaultLabel: '未标注状态',
  legendOptions: false,
  uniqueValueInfos: [{
    value: '是', // 表字段的值
    symbol: hwsSym,
    label: '已整治'
  },
    {
      value: '否',
      symbol: hwySym,
      label: '未整治'
    }]
}
```
2. 添加图层
```javascript
const [ FeatureLayer ] = await loadModules(['esri/layers/FeatureLayer'])
const feature = new FeatureLayer({
  url: `${GisBaseUrl}/arcgis/rest/services/XXXXX`, // 图层服务地址
  id: 'XXXXXXXX', // 图层唯一标识必须添加
  popupTemplate: template, // gis官方弹框
  outFields: ['*'], // 显示所有字段
  renderer: renderer // 前端重置样式
})
// 加载图层，第二个参数图层顺序
map.add(feature, 1)
// 图层按搜索条件显示要素，查询语句是数据库查询语句
feature.definitionExpression = "ID='XXXX'"
// 查询语句
const rings = [['21.3242', '123.34532'], ['21.3242', '123.34532'], ['21.3242', '123.34532'], ['21.3242', '123.34532']]
feature.queryFeatures({
  where: '1=1', // 字段查询数据库查询语句,'1=1'查询所有数据
  geometry: { // 空间数据
    rings: rings,
    spatialReference: view.spatialReference,
    type: 'polygon',
    outFields: ['*'] // 查询后返回的字段，*代表所有字段
  }
}).then(res => {})
```
### MapImageLayer 切片图层
MapImageLayer 即切片图层服务，加载速度更快
```javascript
const [ MapImageLayer ] = await loadModules(['esri/layers/MapImageLayer'])
const imageLayer = new MapImageLayer({
  url: `${GisBaseUrl}/arcgis/rest/services/XXXXX`,
  id: 'XXXXXXXX'
})
map.add(imageLayer, 2)
```
### GraphicsLayer 图形图层
GraphicsLayer 即图形图层，可由前端自定义绘制点、线、面
1. 加载GraphicsLayer图层
```javascript
const [GraphicsLayer] = await loadModules(['esri/layers/GraphicsLayer'])
const graphicsLayers = new GraphicsLayer({
  id: 'XXXXXX'
})
map.add(graphicsLayers, 3)
// 清除图层上所有绘制的数据
graphicsLayers.graphics.removeAll()
```
2. 绘制点
```javascript
const [Graphic] = await loadModules(['esri/Graphic'])
const points = {
  type: 'point',
    longitude: '12.43234',
    latitude: '123.345123',
    spatialReference: {
    wkid: 4490 // 空间参考系数
  }
}
// 点-图片形式展现
const pointsImg = new Graphic({
  geometry: points,
  symbol: {
    type: 'picture-marker',
    url: mySite,
    width: '22px',
    height: '22px'
  },
  attributes: {} // 添加属性，在图层点击可以获取到点信息
})
graphicsLayers.add(pointsImg)
// 点-自定义样式
const pointGraphic = new Graphic({
  geometry: points,
  symbol: {
    type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
    color: [226, 119, 40],
    outline: {
      // autocasts as new SimpleLineSymbol()
      color: [255, 255, 255],
      width: 2
    }
  }
})
// 添加单个点
graphicsLayers.add(pointGraphic)
// 添加多个点
const points = []
this.drawDotLayer.graphics.addMany(points)
```
2. 绘制线
```javascript
const polyline = {
  type: 'polyline',
  paths: [
    [-111.3, 52.68],
    [-98, 49.5],
    [-93.94, 29.89]
  ]
}
const lineSymbol = {
  type: 'simple-line',
  color: [226, 119, 40],
  width: 4
}
const lineAtt = {
  Name: 'Keystone Pipeline',
  Owner: 'TransCanada',
  Length: '3,456 km'
}
const polylineGraphic = new Graphic({
  geometry: polyline,
  symbol: lineSymbol,
  attributes: lineAtt,
  popupTemplate: {
    // 使用arcgis弹框
    title: '{Name}',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Name'
          },
          {
            fieldName: 'Owner'
          },
          {
            fieldName: 'Length'
          }
        ]
      }
    ]
  }
})
graphicsLayers.add(polylineGraphic)
```
3. 绘制面
```javascript
const polygon = new Graphic({
  geometry: {
      rings: [], // 数组空间数据
      spatialReference: view.spatialReference,
      type: 'polygon'
    },
  symbol: {
    type: 'simple-fill', // autocasts as new SimpleFillSymbol()
    style: 'solid',
    color: [0, 0, 0, 0.5],
    outline: { // 描边样式
      style: 'solid',
      color: [0, 0, 0],
      width: 0
    }
  }
})
graphicsLayers.add(polygon)
```
### 图层查询
```javascript
/**
 * 图层查询
 * @rings 空间数据
 * @where 数据库查询语句
 * */
export function spaceQuery( rings, where ) {
  return new Promise(async (resolve, reject) => {
    const [QueryTask, Query] = await loadModules([
      'esri/tasks/QueryTask',
      'esri/tasks/support/Query'
    ])
    // url必须到具体图层序号
    const queryUrl = `${GisBaseUrl}/arcgis/rest/services/XXXXX/0`
    const qTask = new QueryTask({ url: queryUrl })
    const query = new Query({
      returnGeometry: true,
      outFields: ['*']
    })
    query.where = where
    query.geometry = rings
    // 空间参考信息
    query.outSpatialReference = 4490
    // 查询的标准，此处代表和geometry相交的图形都要返回
    query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS
    qTask.execute(query).then(res => {
      resolve(res)
    })
  })
}
```
### GP基础服务
```javascript
/**
 * GP基础服务
 **/
const gpUrl = `${GisBaseUrl}/arcgis/rest/services/Utilities/Geometry/GeometryServer`
// 两点之间间距离
// segment 两个点经纬度
export function twoPointMeter (segment = []) {
  // 调用方法示例
  // twoPointMeter(
  // [[ '115.87534803236237', '28.684258476253564' ],[ '115.67828464305758', '28.676464475291823' ]]
  // ).then(res => {
  //   console.log('两点距离', res)
  // })
  return new Promise(async (resolve, reject) => {
    const [Polyline, LengthsParameters, GeometryService] = await loadModules([
      'esri/geometry/Polyline', 'esri/tasks/support/LengthsParameters', 'esri/tasks/GeometryService'
    ])
    const geoservice = new GeometryService(gpUrl)
    const polyline = new Polyline({ spatialReference: 4490 })
    polyline.addPath(segment)
    const params = new LengthsParameters()
    params.distanceUnit = GeometryService.UNIT_METER
    params.calculationType = 'preserveShape'
    params.polylines = [polyline]
    geoservice.lengths(params).then(res => {
      // 返回单位：米（m）
      resolve(res.lengths[0])
    })
  })
}

// 点缓冲半径公里-圆
// point 中心点
export function nearby(point) {
  return new Promise(async (resolve, reject) => {
    const [BufferParameters, GeometryService] = await loadModules([
      'esri/tasks/support/BufferParameters', 'esri/tasks/GeometryService'
    ])
    const geometryService = new GeometryService(gpUrl)
    const params = new  BufferParameters()
    params.unit = 'kilometers'
    params.distances =  [1]  //半径
    params.geometries = [point.geometry]
    params.geodesic = true;
    params.bufferSpatialReference = 4490
    params.outSpatialReference = 4490
    geometryService.buffer(params).then(res => {
      // 返回空间数据
      resolve(res)
    })
  })
}
```