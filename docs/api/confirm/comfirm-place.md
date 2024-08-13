<cn>
#### 位置
位置有十二个方向。如需箭头指向目标元素中心，可以设置。
`arrowPointAtCenter`。
</cn>

<us>
</us>

```tpl
<template>
  <div id="components-a-popconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <a-popconfirm placement="topLeft" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>上左</a-button>
      </a-popconfirm>
      <a-popconfirm placement="top" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>上</a-button>
      </a-popconfirm>
      <a-popconfirm placement="topRight" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>上右</a-button>
      </a-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <a-popconfirm placement="leftTop" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>左上</a-button>
      </a-popconfirm>
      <a-popconfirm placement="left" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>左</a-button>
      </a-popconfirm>
      <a-popconfirm placement="leftBottom" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>左下</a-button>
      </a-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <a-popconfirm placement="rightTop" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>右上</a-button>
      </a-popconfirm>
      <a-popconfirm placement="right" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>右</a-button>
      </a-popconfirm>
      <a-popconfirm placement="rightBottom" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>右下</a-button>
      </a-popconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-popconfirm placement="bottomLeft" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>下左</a-button>
      </a-popconfirm>
      <a-popconfirm placement="bottom" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>下</a-button>
      </a-popconfirm>
      <a-popconfirm placement="bottomRight" ok-text="确认" cancel-text="取消" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
        </template>
        <a-button>下右</a-button>
      </a-popconfirm>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonWidth: 70,
      text: '确定要删除此任务吗?',
    };
  },
  methods: {
    confirm() {
      this.$message.info('确认');
    },
  },
};
</script>
<style scoped>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```