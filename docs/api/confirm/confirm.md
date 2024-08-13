<cn>
#### 基本
最简单的用法。
</cn>

<us>
</us>

```tpl
<template>
  <a-popconfirm
    title="确定要删除此任务吗?"
    ok-text="确认"
    cancel-text="取消"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">消息确定</a>
  </a-popconfirm>
</template>
<script>
export default {
  methods: {
    confirm(e) {
      console.log(e);
      this.$message.success('确认');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('取消');
    },
  },
};
</script>
```