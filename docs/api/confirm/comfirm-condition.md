<cn>
#### 条件触发
可以判断是否需要弹出。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-popconfirm
      title="确定要删除此任务吗?"
      :visible="visible"
      ok-text="确认"
      cancel-text="取消"
      @visibleChange="handleVisibleChange"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">消息确认</a>
    </a-popconfirm>
    <br />
    <br />
    是否直接执行：<a-checkbox default-checked @change="changeCondition" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      condition: true,
    };
  },
  methods: {
    changeCondition(e) {
      this.condition = e.target.checked;
    },
    confirm() {
      this.visible = false;
      this.$message.success('确认');
    },
    cancel() {
      this.visible = false;
      this.$message.error('取消');
    },
    handleVisibleChange(visible) {
      if (!visible) {
        this.visible = false;
        return;
      }
      // Determining condition before show the popconfirm.
      console.log(this.condition);
      if (this.condition) {
        this.confirm(); // next step
      } else {
        this.visible = true;
      }
    },
  },
};
</script>
```