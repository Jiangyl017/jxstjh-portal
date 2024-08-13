<cn>
#### 其他提示类型
包括成功、失败、警告。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button @click="success">
      成功
    </a-button>
    <a-button @click="error">
      失败
    </a-button>
    <a-button @click="warning">
      警告
    </a-button>
  </div>
</template>
<script>
export default {
  methods: {
    success() {
      this.$message.success('这是一条成功消息');
    },
    error() {
      this.$message.error('这是一条失败消息');
    },
    warning() {
      this.$message.warning('这是一条警告消息');
    },
  },
};
</script>
```