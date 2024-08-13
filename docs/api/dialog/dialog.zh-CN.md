## API

| 参数    | 说明    | 类型    | 默认值 | 版本 |
| ------- | -------------- | ------- | ------ |------ |
| afterClose         | Modal 完全关闭后的回调                 | function           | 无        |  |
| bodyStyle          | Modal body 样式                       | object             | {}        |  |
| cancelText         | 取消按钮文字                           | string&#124;slot   |  取消     |   |
| centered           | 垂直居中展示 Modal                     | Boolean            |  `fales`  |   |
| closable           | 是否显示右上角的关闭按钮                | Boolean            |  true     |   |
| closeIcon          | 自定义关闭图标                         | VNode&#124;slot    | -         | 1.5.0 |
| confirmLoading     | 确定按钮 loading                      | Boolean             |  无       |  |
| destroyOnClose     | 关闭时销毁 Modal 里的子元素            | Boolean             | fales     |  |
| footer             | 底部内容，当不需要默认底部按钮时，可以设为 `:footer="null"`    | string&#124;slot   |  确定取消按钮  |   |
| forceRender        | 强制渲染 Modal                         |  Boolean           |  fales    |   |
| getContainer       | 指定 Modal 挂载的 HTML 节点            | (instance): HTMLElement  | () => document.body  |   |
| keyboard           | 是否支持键盘 esc 关闭                  | boolean              | true     |  |    
| mask               | 是否展示遮罩                           | boolean              | true     |  | 
| maskClosable       | 点击蒙层是否允许关闭                    | boolean              | true     |  | 
| maskStyle          | 遮罩样式                               | object               |  {}      |   |
| okText             | 确认按钮文字                           | string&#124;slot      |  确认    |   |
| okType             | 确认按钮类型                           | srting                |  primary |   |
| okButtonProps      | ok 按钮 props, 遵循 jsx规范            | {props: ButtonProps, on: {}}     | -   |  |    
| cancelButtonProps  | cancel 按钮 props, 遵循 jsx规范        | {props: ButtonProps, on: {}}     | -   |  | 
| title              | 标题                                   | string&#124;slot      | false   |无   |
| visible(v-model)   | 对话框是否可见                          | Boolean               |  无     |   |
| width              | 宽度                                   | string&#124;number    |  520    |   |
| wrapClassName      | 对话框外层容器的类名                     | string                | -       |   |
| zIndex             | 	设置 Modal 的 z-index                  | number                | 1000   |   |
| dialogStyle        | 可用于设置浮层的样式，调整浮层位置等       | object                |  -     | 1.6.1 |
| dialogClass        | 可用于设置浮层的类名                      | string                | -      |  1.6.1 |   


## 事件

| 事件名称 | 说明 | 回调函数 | 
| -------- | ----   | --------      | 
| cancel        | 	点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 
| ok            |   点击确定回调                        | function(e) | 

#### 注意
`<Modal />` 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnClose`。