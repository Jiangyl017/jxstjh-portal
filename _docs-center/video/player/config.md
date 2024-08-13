# 配置参数Config

## GlobalClient客户端实例
```javascript
const globalClient = GlobalClient(
  config,
  (status, data) => {}
)
```
> GlobalClientConfig


| 参数     | 说明               | 类型   | 必填 | 默认值 | 版本 |
|----------|--------------------|--------|------|--------|------|
| endPoint | 视频云平台接口地址 | string |  ✅    | 无     |      |
| username | 平台申请后获取           | string |  ✅   | 无     |      |
| password | 平台申请后获取           | string |  ✅   | 无     |      |
| clientId | 平台申请后获取           | string |  ✅   | 无     |      |
| clientSecret | 平台申请后获取           | string |  ✅  | 无     |      |




> GlobalClientEvent

| status | 说明                                 | 
|----------|--------------------------------------|
| `LoginSuccess`   | 初始化成功 |
| `LoginError`     | 初始化失败 | 


## JPlayer播放器实例
```javascript
playerIns.init(opt)
```
> 开流参数 Opt


| 参数     | 说明               | 类型   | 必填 | 默认值 | 版本 |
|----------|--------------------|--------|------|--------|------|
| aisleId | 通道aisleId | string |  ✅    | 无     |      |
| streamtype | 实时流:`live` &#124; 录像流:`vod`  | string   |    ✅   | `live`   |     |
| title | 播放器内置header中的tile | string |     | 无     |      |
| isptz | 是否打开云台交互 `录像模式下无效`| boolean |     | `false`      |     |
| beginTime | 录像开始时间 ex:`'2021-10-31 08:00:00.000'`| string |  ✅ 录像模式下必填   | 无     |     |
| endTime | 录像结束时间 ex:`'2021-10-31 10:00:00.000'`| string |  ✅ 录像模式下必填   | 无     |     |
| vod | 中心存储:`0` &#124; 前端存储 `1` | number |  ✅ 录像模式下必填   | 无 `播放器首次开流会自动判断,如果中心存储无录像,则自动切换前端存储`  |     |
| hideHeaderToolBar | 是否隐藏播放器内置工具栏| boolean |     | `false`      |     |
| hideFooterToolBar | 是否隐藏播放器内置工具栏| boolean |     | `false`      |     |
| enableWorker | 是否启用`web worker`| boolean |     | `false`      |     |
| protocolType | 视频流格式:`httpflv` &#124; `websocketflv` &#124; `hls` &#124; `webrtc` | string   |     | `websocketflv`   |     |
| deviceType | 设备类型:`pvg67` &#124; `pvgplus` &#124; `rtsp` &#124; `gb28181` | string   |     | `pvgplus`   |     |

> 播放器生命周期


```javascript
const playerIns = new JPlayer(globalClient, el)
playerIns = player.init(opt)


playerIns.on('created', () => { console.log('created') }) // 播放器实例被创建 此时dom元素已准备
playerIns.on('inited', (vid) => { console.log('inited', vid) }) // 播放器开流成功 但是不代表可以播放 vid:一个客户端唯一的随机字符串
playerIns.on('play', () => { console.log('play') }) // 播放器开始播放 
playerIns.on('pause', () => { console.log('pause') }) // 播放器暂停
playerIns.on('seeked', () => { console.log('seeked') }) // 录像模式下跳转成功 
playerIns.on('destroy', () => { console.log('destroy') }) // 播放器销毁 

```


