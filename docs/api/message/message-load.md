<cn>
#### 加载中
进行全局 loading，异步自行移除。
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
      const hide = this.$message.loading('正在加载..', 0);
      setTimeout(hide, 2500);
    },
  },
};
</script>
```