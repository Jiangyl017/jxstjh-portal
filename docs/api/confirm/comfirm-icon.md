<cn>
#### 自定义 Icon 图标
使用  `icon` 自定义提示 `icon`。
</cn>

<us>
</us>

```tpl
<template>
  <a-popconfirm title="你确定吗？">
    <a-icon slot="icon" type="question-circle-o" style="color: red" />
    <a href="#">消息确认</a>
  </a-popconfirm>
</template>
```