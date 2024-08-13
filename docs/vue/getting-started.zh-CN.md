# 开始使用

## 写在前面

<font color='#40a9ff' size='4'><strong> 江西水利事务业务平台</strong></font>是一个服务于水利事务平台及业务平台的微前端解决方案，为众多水利事务业务应用提供一个统一的门户入口.各应用通过卡片(组件)或者模块(页面)的形式接入水利门户.门户通过工作台承载各个应用卡片,通过业务分类统筹各个模块,从而达到高效整合的目的.同时,随着『水利门户』『业务应用』的不断迭代，逐步沉淀和总结出更多的`门户业务卡片`及`业务模块`，使得水利业务及事务不断完善,**十分期待大家的参与和共建**。
本文档主要介绍[门户卡片]()、[门户模块]()、[接入流程]()、[开发规范]().


## 前序准备

* 如果你是`产品人员`,了解业务卡片和水利门户的结构关系非常重要,请参阅[体系结构](/docs/vue/introduce-cn)
* 如果你是`开发人员`,你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [vue](https://cn.vuejs.org/)、[vue-cli](https://cli.vuejs.org/zh/)、[@jxstjh/ant-design-vue](https://www.npmjs.com/package/@jxstjh/ant-design-vue)、[@jxstjh/portal](https://www.npmjs.com/package/@jxstjh/portal)和[@jxstjh/vue-module-loader](https://www.npmjs.com/package/@jxstjh/vue-module-loader)提前了解和学习这些知识会非常有帮助。
> 其中[@jxstjh/ant-design-vue](https://www.npmjs.com/package/@jxstjh/ant-design-vue)fork自[ant-design-vue](https://www.antdv.com/components/button-cn/),如果你之前使用过社区版,则无需了解更多,因为目前我们没有拓展很多需要额外说明的内容.

## 在线演示

> 敬请期待

