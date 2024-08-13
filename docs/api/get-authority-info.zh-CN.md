# 获取权限信息

## 权限信息

业务平台默认以"业务门户"(如：防御处、南昌市水利局)为权限信息的载体，如需进行权限判断可通过`GET_BUSINESS_PORTAL()`方法获取业务门户信息。

- 其中数据权限通过`GET_BUSINESS_PORTAL().areaPermission`获取

```javascript
// 导入公共mixin
import { portalCardMixin } from '@jxstjh/portal/lib/mixins/portalcard';

export default {
  mixins: [portalCardMixin],
  mounted() {
    // 业务门户信息
    const businessPortal = GET_BUSINESS_PORTAL();
    console.log('数据权限', businessPortal.areaPermission);
    // businessPortal.areaPermission 示例 : '360100,360200'
  },
};
```

## 小贴士

在开发卡片的预览环境里面,是没有真实环境的这两个信息的.portalCardMixin 提供了一种方案,这种方案不需要你做额外的代码进行判断,你只需要在预览环境的 PortalWorkplace.vue 文件里找到你的组件.使用 vue 的 prop 进行模拟.注意,这种模拟不会影响你获取用户信息与安全信息的方法,针对卡片来说,只是换了一个提供数据的方法,毫不影响你获取数据.
