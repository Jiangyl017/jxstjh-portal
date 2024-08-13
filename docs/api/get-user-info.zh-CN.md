# 获取用户信息

我们准备了两个方法来获取用户信息和验证信息.

- `this.GET_USER_INFO()` 获取用户信息
- `this.GET_TOKEN()` 获取 4A 用户 token

要想正常的使用这两个 api,依赖一个公共的 mixin`portalCardMixin`

```javascript
// 导入
import { portalCardMixin } from '@jxstjh/portal/lib/mixins/portalcard';
```

## 用户信息

通过`this.GET_USER_INFO()`获取到的用户信息是当前登入水利门户的用户信息.当然,这也是水利人员信息管理系统的标准人员数据.可以通过`:PREVIEW_USERINFO`输入属性在开发时模拟.

## 安全验证

通过`this.GET_TOKEN()`获取到的用户单点登录 4A 系统的用户 token,这个信息有助于您的后台针对来自卡片的请求进行安全验证.或者解析用户信息.可以通过`:PREVIEW_TOKEN`输入属性在开发时模拟.

## 小贴士

在开发卡片的预览环境里面,是没有真实环境的这两个信息的.`portalCardMixin`提供了一种方案,这种方案不需要你做额外的代码进行判断,你只需要在预览环境的*PortalWorkplace.vue*文件里找到你的组件.使用 vue 的 prop 进行模拟.注意,这种模拟不会影响你获取用户信息与安全信息的方法,针对卡片来说,只是换了一个提供数据的方法,毫不影响你获取数据.

> 例:模拟用户信息 ![user.png](https://e.im5i.com/2020/12/02/user.png)
