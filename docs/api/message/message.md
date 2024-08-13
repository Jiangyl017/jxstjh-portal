<cn>
#### 普通提示
信息提醒反馈。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button type="primary" @click="info">消息提示</a-button>
  </div>
</template>
<script>
export default {
  methods: {
    info() {
      this.$message.info('这是一条消息提示');
    },
  },
};
</script>
```
