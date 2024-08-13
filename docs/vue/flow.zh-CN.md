# 接入结构图

## 业务平台`卡片`概念说明

![CogGO2IlryWAZJAgAAPo2tRJlaY984.jpg](https://ding.jxwrd.gov.cn/fastdfs/group1/M00/03/5E/CogGO2IlryWAZJAgAAPo2tRJlaY984.jpg)

- 卡片接入效果如图，`日历`，`通知公告`等都是卡片，卡片的具体接入步骤请看后续文档

## 业务平台`模块`概念说明

![CogGO2Ilq52AWg9QAACMkb59wrc489.jpg](https://ding.jxwrd.gov.cn/fastdfs/group1/M00/03/5E/CogGO2Ilq52AWg9QAACMkb59wrc489.jpg)

- 如上图，当前有`值班平台`系统要以模块的方式接入业务平台，可以将系统中任意菜单组合成，这样形成一个模块，例如图中的模块 A、模块 B、模块 C 是由各类菜单组成

## 接入说明

![CogGO2IloqqAMSBsAACp8G3DsVU371.jpg](https://ding.jxwrd.gov.cn/fastdfs/group1/M00/03/5E/CogGO2IloqqAMSBsAACp8G3DsVU371.jpg)

- 待接入系统以`卡片`或`模块`接入均可通过 4a token（通过`GET_TOKEN()`方法获取到）进行前后端交互。

- 若以`模块`的形式接入，模块内页面权限配置可以如下方式配置

  1. 在平台后台通过将模块页面绑定至平台菜单，再对菜单配置访问权限实现访问权限配置
  2. 在模块入口页面`App.vue`中自行处理权限判断，并可以自行开发左侧菜单满足访问权限配置

## 4a 接入文档

[4a 接入资料.zip](https://ding.jxwrd.gov.cn/fastdfs/group1/M00/05/1E/wKgFumImxQyAKAATAA4zQe2p9X8245.zip)

- 依赖解析后获取人员信息方式

```
com.jxstjh.common.jwt.domain.AdminUserDetails userDetails = com.jxstjh.common.jwt.util.SysUserUtil.getLoginUser()
```

![CogGO2ImvrSAYj-KAAFcDTFETMQ104.png](https://ding.jxwrd.gov.cn/fastdfs/group1/M00/03/5E/CogGO2ImvrSAYj-KAAFcDTFETMQ104.png)

- <font color = 'red'>注：业务平台仅支持`授权模式`为“普通模式”，`认证协议`为“jwt”的外部系统资源
