<cn>
#### 自定义页脚
更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button type="primary" @click="showModal">
      点击弹窗
    </a-button>
    <a-modal v-model="visible" title="标题" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          提交
        </a-button>
      </template>
      <p>这里是内容...</p>
      <p>这里是内容...</p>
      <p>这里是内容...</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
  },
};
</script>
```
