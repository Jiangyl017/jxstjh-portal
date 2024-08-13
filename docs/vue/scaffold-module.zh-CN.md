## 目录结构

以下脚手架目录结构概略图：

```
├── ...
├── dist                            # 产出文件夹
│   ├── img                         # 模块需要用的静态资源等
│   ├── jh-test-module.umd.min.js     # 模块生产js
├── example                         # 模块预览工程
├── src                             # 模块工程
│   ├── assets                      # 需要使用的静态资源
│   ├── components                  # 组件文件夹
│   ├── module.js                   # 模块根文件
│   ├── router                      
│   │   └── index.js                #@ 拓展门户路由配置表
│   └── store                       # 拓展门户vuex
│   └── views                       # 页面组件
├── vue.config.js                   # 标准的vue-cli文件
├── package.json                    # 标准的package.json文件
└── ...
```
<font color='red'>注:</font> 带有`#@`前缀的文件是插件根据您的项目名称自动生成的,如果您有修改的需要,请您在明确知道修改项后再操作


## 以下是针对各个目录及文件说明及使用目的

### 1. module.js

模块打包入口文件,此文件是模块接入门户的入口文件,模块的混入门户逻辑在此处编写,您编写的模块包将获得以下能力

* 操作门户路由
* 向门户Vuex中添加store实例
* 事件通信

![t9MMG.png](https://e.im5i.com/2021/07/29/t9MMG.png)

### 2. router/index.js

vue-router的路由配置对象,在本工程里对路由对象有一些额外的要求:
* <font color='blueviolet'>模块的路由配置都书写在更节点`children`内</font>
* <font color='blueviolet'>模块内的菜单路由应在统一安全管理平台中注册</font>
* <font color='blueviolet'>不支持`webpack`惰性加载特性</font>
* <font color='blueviolet'>深层的嵌套路由使用`routerView`包裹</font>

![t9j9Y.png](https://e.im5i.com/2021/07/29/t9j9Y.png)

### 3. package.json

package.json中有几个关键字段需要额外说明
![t9T1w.png](https://e.im5i.com/2021/07/29/t9T1w.png)
* `name` 模块的工程名称,也就是创建模块时输入的名称.<font color='red'>发布/更新模块时会业务平台会自动识别</font>
* `version` 卡片的工程的版本号
* `module_config`
  * `resourceCode` <font color='blueviolet'> 统一安全管理平台分配的`resourceCode`</font>
  * `pages` <font color='blueviolet'> 默认会由`router/index.js`自动生成的配置,特殊情况可以手动配置</font>
* `scripts` 
  * `npm run dev` 开发模块时使用
  * `npm run serve:example` 将运行预览工程,开发模块时使用
  * `npm run build` 构建标准模块产物
  * `npm run pub` 构建标准模块产物&&生成工程压缩包以供上传 `v0.1.3`
