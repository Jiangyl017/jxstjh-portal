# 播放器接入

> 配套视频云平台使用的H5播放器插件

## 为什么使用

在浏览器上无依赖的实现实时流和录像流的播放,存在许多还未被业界普遍实现的技术标准.
使用封装好的播放器插件屏蔽一部分和业务无关的开发工作.提高接入效率.


## 接入流程

* 初始化客户端 `GlobalClient`
* 构建播放器 `Player`
* 传入参数开始拉流 `Player.init()`

### 安装
> ES module
```bash
npm i @jxstjh/jhvideo
```

```javascript
// 添加公共css
import '@jxstjh/jhvideo/dist/jhvideo.css'
```

> umd 引入

```html
<!-- 引入公共css -->
<link rel="stylesheet" type="text/css" href="/dist/jhvideo.css" />

<script src="/dist/jhvideo.js"></script>

/**
 umd 引入js的情况下
 会默认在window全局注册`jhvideo`变量
 核心类`GlobalClient`和`JPlayer`是这个全局变量下的两个成员
 如: jhvideo.JPlayer
 */

```

### 实例化客户端实例

客户端实例一般情况下一个web项目是一个**全局单例**的.虽然不限制重复构建实例,但是**不推荐**这么做.

```javascript
import { GlobalClient } from '@jxstjh/jhvideo'

const config = {
    endPoint: "http://video.jxwrd.cn/video-api", // 云平台地址
    username: "username", // 云平台注册获取
    password: "password", // 云平台注册获取
    clientId: 'clientId', // 云平台注册获取
    clientSecret: 'clientSecret', // 云平台注册获取
}
const globalClient = GlobalClient(
  config,
  (status, data) => {
      if (status === 'LoginSuccess') {
          // LoginSuccess
          // 初始化成功
      }
  }
)

```
### 创建播放器

通常,项目中会有多个播放器实例被创建,每一个播放器需要一个容器,一般是一个具有固定高框的`div`


```javascript
import { JPlayer } from '@jxstjh/jhvideo'

// 获取播放器容器div
const el = document.getElementById('el')

// 传入globalClient实例
const playerIns = new JPlayer(globalClient, el)

```

### 开流

此时,播放器实例已经创建好了,接下来,传入配置进行开流动作

```javascript
const opt = {
  aisleId: '1450724945217744899',  // 通道的aisleId 平台获取
  title: '水政码头1', // 播放器头部title 一般是点位名称
  isptz: true, // 是否开启云台
  streamtype: 'live',  // 表明打开实时流
}
playerIns.init(opt)

```
<!-- <div id="start-vue">hello {{ msg }}</div>

<script>
  new Vue({
    el: '#start-vue',
    data: { msg: 'start' }
  })
</script> -->