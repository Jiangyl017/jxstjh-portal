<cn>
#### 基本 
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button type="primary" @click="openLoading()">
      默认
    </a-button>
    <a-button type="primary" @click="openLoading('db')">
      db
    </a-button>
    <a-button type="primary" @click="openLoading('setting')">
      setting
    </a-button>
    <a-button type="primary" @click="openLoading('record')">
      record
    </a-button>
    <a-button type="primary" @click="openLoading('logo')">
      logo
    </a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    openLoading(type = 'cloud'){
      const loader = this.$loading.show({ loader: type })
      setTimeout(()=>{
        loader.hide();
      },3000)
    }
  },
};
</script>
```
