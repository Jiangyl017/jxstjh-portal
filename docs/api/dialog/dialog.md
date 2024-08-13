<cn>
#### 基本 
基本弹窗。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button type="primary" @click="showModal">
      点击弹窗
    </a-button>
    <a-modal v-model="visible" title="标题" @ok="handleOk">·
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
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>
```
