## 目录结构

以下脚手架目录结构概略图：

```
├── ...
├── dist                            # 产出文件夹
│   ├── img                         # 卡片需要用的静态资源等
│   ├── jh-test-card.umd.min.js     # 卡片生产js
├── example                         # 卡片预览工程
├── src                             # 卡片工程
│   ├── assets                      # 需要使用的静态资源
│   ├── components                  # 组件文件夹
│   │   ├── JhTestCard.vue          #@ 基于项目名称自动生成的组件,提供给门户的唯一组件
│   │   └── Logo.vue                # 相关业务组件
│   ├── module.js                   #@ 卡片模块根文件
│   ├── router                      # 如果您需要拓展门户页面
│   └── store                       # 如果您需要拓展门户vuex
├── vue.config.js                   # 标准的vue-cli文件
├── package.json                    # 标准的package.json文件
└── ...
```
<font color='red'>注:</font> 带有`#@`前缀的文件是插件根据您的项目名称自动生成的,如果您有修改的需要,请您在明确知道修改项后再操作


## 以下是针对各个目录及文件说明及使用目的

### 1. module.js

卡片打包入口文件,此文件是卡片接入门户的入口文件,卡片的混入门户逻辑在此处编写,您编写的卡片将获得以下能力

* 注册卡片(组件)到门户
* 事件通信

![code.png](https://e.im5i.com/2020/11/29/code.png)

### 2. JhTestCard.vue

本质上就是一个普通的vue组件,再本工程里额外会作为动态组件在门户运行时加载进门户项目.除此之外和正常组件没有区别

![code2.png](https://e.im5i.com/2020/11/29/code2.png)

### 3. package.json

package.json中有几个关键字段需要额外说明
![code3.png](https://e.im5i.com/2020/11/29/code3.png)
* `name` 卡片的工程名称,也就是创建卡片时输入的名称.<font color='red'>必须和发布卡片时候的组件名一直 否则导致发布失败</font>
* `version` 卡片的工程的版本号
* `card_config`
  * `width` 卡片的初始宽度
  * `height` 卡片的初始高度
  * `gis` 卡片是否需要gis联动
* `scripts` 
  * `npm run serve` 将运行预览工程,开发卡片时使用
  * `npm run build` 构建标准门户卡片
  * `npm run pub` 构建标准卡片&&生成工程压缩包以供上传 `v0.1.3`
