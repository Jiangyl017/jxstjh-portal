<cn>
#### Promise 接口
可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 
</cn>

<us>
</us>

```tpl
<template>
  <a-button @click="success">
    消息提示
  </a-button>
</template>
<script>
export default {
  methods: {
    success() {
      this.$message
        .loading('正在加载', 2.5)
        .then(() => this.$message.success('加载完成', 2.5))
        .then(() => this.$message.info('加载完成', 2.5));
    },
  },
};
</script>
```