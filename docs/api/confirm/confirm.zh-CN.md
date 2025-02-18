## API

| 参数    | 说明    | 类型    | 默认值 | 版本 |
| ------- | -------------- | ------- | ------ |------ |
| cancelText   | 取消按钮文字                           | string&#124;slot     |  取消 |  |
| okText       | 确认按钮文字                           | string&#124;slot     | 确定  |  |
| okType       | 确认按钮类型                           | string               |  primary  |   |
| title        | 确认框的描述                           | string&#124;slot     |  无    |   |
| icon         | 自定义弹出气泡 Icon 图标                | vNode                |  `<Icon type="exclamation-circle" />`  |   |
| disabled     | 点击 Popconfirm 子元素是否弹出气泡确认框 | boolean               | false   | 1.5.0 |    |


## 事件

| 事件名称 | 说明 | 回调函数 | 
| -------- | ----   | --------      | 
| cancel        | 	点击取消的回调  | function(e)  | 
| confirm       | 点击确认的回调    | function(e) | 
| visibleChange | 显示隐藏的回调    | function(visible) | 

## 注意
请确保 `confirm` 的子元素能接受  `mouseenter`、`mouseleave`、`focus`、`click` 事件。
