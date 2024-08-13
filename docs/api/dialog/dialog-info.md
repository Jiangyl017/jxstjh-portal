<cn>
#### 信息提示 
各种类型的信息提示，只提供一个按钮用于关闭。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button @click="info">
      通知
    </a-button>
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
    info() {
      const h = this.$createElement;
      this.$info({
        title: '这是一条通知消息',
        content: h('div', {}, [
          h('p', '这是内容...这是内容...'),
          h('p', '这是内容...这是内容...'),
        ]),
        onOk() {},
      });
    },

    success() {
      this.$success({
        title: '这是一条成功消息',
        // JSX support
        content: (
          <div>
            <p>这是内容...这是内容...</p>
            <p>这是内容...这是内容...</p>
          </div>
        ),
      });
    },

    error() {
      this.$error({
        title: '这是一条错误消息',
        content: '这是内容...这是内容...',
      });
    },

    warning() {
      this.$warning({
        title: '这是一条警告消息',
        content: '这是内容...这是内容...',
      });
    },
  },
};
</script>
```
