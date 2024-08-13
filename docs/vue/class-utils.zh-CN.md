# 样式工具类
## 全局样式类
####  颜色
```less
@color-type: [ primary, info ,success ,processing , error , warning]
```
| 类名    | 说明    | 备注 |
| ------- | -------------- | ------- |
| .text-[@color-type] |  <div class='text-primary'>.text-primary </div><div class='text-info'>.text-info </div><div class='text-success'>.text-success </div><div class='text-error'>.text-error </div><div class='text-warning'>.text-warning </div>|   |
| .bg-[@color-type] |  <div class='bg-primary'>bg-primary</div><div class='bg-success'>bg-success</div><div class='bg-error'>bg-error</div><div class='bg-warning'>bg-warning</div>|   |
| .text-[@color-type]-[saturation] |  <div class='text-primary-10'>.text-primary-10 </div> <div class='text-primary-9'>.text-primary-9 </div><div class='text-primary-8'>.text-primary-8 </div> <div class='text-primary-7'>.text-primary-7 </div><div class='text-primary-6'>.text-primary </div><div class='text-primary-5'>.text-primary-5 </div><div class='text-primary-4'>.text-primary-4 </div><div class='text-primary-3'>.text-primary-3 </div><div class='text-primary-2'>.text-primary-2 </div><div class='text-primary-1'>.text-primary-1 </div>| `saturation` : 1-10 |
| .bg-[@color-type]-[saturation] |  <div class='bg-primary-10'>.bg-primary-10 </div> <div class='bg-primary-9'>.bg-primary-9 </div><div class='bg-primary-8'>.bg-primary-8 </div> <div class='bg-primary-7'>.bg-primary-7 </div><div class='bg-primary-6'>.bg-primary </div><div class='bg-primary-5'>.bg-primary-5 </div><div class='bg-primary-4'>.bg-primary-4 </div><div class='bg-primary-3'>.bg-primary-3 </div><div class='bg-primary-2'>.bg-primary-2 </div><div class='bg-primary-1'>.bg-primary-1 </div>| `saturation` : 1-10 |

####  间距
```less
@space: {
  llg: 32px;
  lg: 24px;
  md: 16px;
  sm: 12px;
  xs: 8px;
  xss: 4px;
  0: 0
}
@placement: [ t , b , l , r ,x ,y]
```
| 类名    | 说明    | 备注 |
| ------- | -------------- | ------- |
| .m-[@space] |  margin | 例如 `.m-md` 等效于 `margin:16px` |
| .m[@placement]-[@space] |  margin | 例如 `.mt-md` 等效于 `margin-top:16px`|
| .p-[@space] |  padding | 例如 `.p-md` 等效于 `padding:16px` |
| .p[@placement]-[@space] |  padding | 例如 `.pt-md` 等效于 `padding-top:16px`|
| .[p/m][x/y]-[@space] |   | 例如 `.px-md` 等效于 `padding-left:16px;padding-right:16px`|


## 组件样式工具类
### a-tabs
| 类名    | 说明    | 预览 |
| ------- | -------------- | ------- |
| .JPortal | |<img src="https://e.im5i.com/2020/12/04/tabs.jpg" alt="tabs.jpg" border="0" /> |
| .JPortal.ltr  |  tab 左对齐                 | <a href="https://macimg.com/image/YYVMo"><img src="https://e.im5i.com/2020/12/04/tabs2.jpg" alt="tabs2.jpg" border="0" /></a>

### a-radio-group
```html
<a-radio-group :size="'small'" :buttonStyle="'solid'" class="JPortal" >
  <a-radio-button value="large">
    按时间
  </a-radio-button>
  <a-radio-button value="default">
    按区域
  </a-radio-button>
</a-radio-group>
```
| 类名    | 说明    | 预览 |
| ------- | -------------- | ------- |
| .JPortal | | <a href="https://macimg.com/image/YspzH"><img src="https://e.im5i.com/2020/12/04/radio-group2.jpg" alt="radio-group2.jpg" border="0" /></a>|


#### 常见卡片模板
```html
<JPortalcard :title="'JPortal'">
  <a-tabs class="JPortal " default-active-key="1" >
    <a-tab-pane key="1" tab="水质达标率">
      <a-radio-group :size="'small'" :buttonStyle="'solid'" class="JPortal" >
        <a-radio-button value="large">
          按时间
        </a-radio-button>
        <a-radio-button value="default">
          按区域
        </a-radio-button>
      </a-radio-group>
      <br><br>
      <span class="text-error bg-primary">
        Content of Tab Pane 1
      </span>
    </a-tab-pane>
    <a-tab-pane key="2" tab="界河断面水质" force-render>
      Content of Tab Pane 2
    </a-tab-pane>
    <a-tab-pane key="3" tab="河湖水质统计">
      Content of Tab Pane 3
    </a-tab-pane>
  </a-tabs>
</JPortalcard>
```
<img width='450' src="https://e.im5i.com/2020/12/04/demo.jpg" alt="demo.jpg" border="0" />