## API
```javascript
this.$message.success(content, [duration], onClose);
this.$message.error(content, [duration], onClose);
this.$message.info(content, [duration], onClose);
this.$message.warning(content, [duration], onClose);
this.$message.loading(content, [duration], onClose);
```
参数说明如下:
| 属性    | 说明           | 类型    | 默认值 |
| ------- | -------------- | ------- | ------ |
| content   | 提示内容       | string  |  string&#124;VNode&#124;(h) => VNode      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | boolean | false  |
| onClose | 关闭时触发的回调函数 | boolean | false  |

同时提供 promise 接口
* `this.$message[level](content, [duration]).then(afterClose)`
* `this.$message[level](content, [duration], onClose).then(afterClose)`

其中message[level] 是组件已经提供的静态方法。then 接口返回值是 Promise 。

也可以对象的形式传递参数：
* `this.$message.open(config)`
* `this.$message.success(config)`
* `this.$message.error(config)`
* `this.$message.info(config)`
* `this.$message.warning(config)`
* `this.$message.loading(config)`

## 参数

| 参数名称 | 说明 | 类型 | 默认值 |
| -------- | ---- | -------- | ---- |
| content   | 	提示内容       |  string&#124;VNode&#124;(h) => VNode  |  -  |
| duration |自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number | 3 |
| onClose | 关闭时触发的回调函数 | 	Function| -  |
| icon | 	自定义图标 | string&#124;VNode&#124;(h) => VNode  | -  |
| key | 当前提示的唯一标志 | string|number | -  |

