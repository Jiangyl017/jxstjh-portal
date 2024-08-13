# 自定义图例

我们准备了两个方法控制自定义图例

- `this.SET_CUSLEGEND()` 设置自定义图例
- `this.UPDATE_MAPCONTROL({cusLegend: true})` 切换自定义图例是否渲染

要想正常的使用这两个 api,依赖一个公共的 mixin`portalCardMixin`

```javascript
// 导入
import { portalCardMixin } from '@jxstjh/portal/lib/mixins/portalcard';

export default {
  ...
  mixins: [portalCardMixin],
  method: {
    setCusLegend () {
      const component = {
        render () {
          return (
            <div style={{ width: '150px', height: '150px' }}>
              动态加载的自定义图例
            </div>
          )
        }
      }
      this.SET_CUSLEGEND(component)
      this.UPDATE_MAPCONTROL({cusLegend: true})
    },
  }
  ...
}

```

## 添加/更新自定义图例

通过`this.SET_CUSLEGEND(component)`将准备好的自定义图例组件传给平台，平台会在卡片布局内找到空白的位置渲染自定义图例，多次调用会直接替换上一次的值.

> 参数`component`必须为 vue 组件！不能是 template 或者渲染函数

## 小贴士

如需在自定义图例组件中使用`class`类名控制样式，请使用vue单文件组件(`xxx.vue`)作为自定义图例组件，并使用`<style scoped>`避免样式污染.
