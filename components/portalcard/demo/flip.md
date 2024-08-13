<cn>
#### 门户卡片-翻转
翻转卡片样式一
</cn>

<us>
</us>

```tpl
<template>
  <div >
    <div class='items'>
      <JPortalcard  :flipable='true' :flipValue="flipValue3" :flipWidth='300' :flipHeight='200' title="卡片标题">
      浮动翻转-自定义宽高
      <button @click='toggleFlipValue(3)'>toggle</button>
      <!-- <div slot="back" style="height:100%"> -->
        <JPortalcard slot="back" title="背面标题">
          背面内容
          <button @click='toggleFlipValue(3)'>toggle</button>
        </JPortalcard>
      <!-- </div> -->
      </JPortalcard>
    </div>
    <div class='items'>
      <JPortalcard  :flipable='true' :flipValue="flipValue2" :flipFloatModel='false' title="卡片标题">
      原地翻转
      <button @click='toggleFlipValue(2)'>toggle</button>
      <!-- <div slot="back" style="height:100%"> -->
        <JPortalcard slot="back" title="背面标题">
          背面内容
          <button @click='toggleFlipValue(2)'>toggle</button>
        </JPortalcard>
      <!-- </div> -->
      </JPortalcard>
    </div>
    <div class='items'>
      <JPortalcard  :flipable='true' :flipValue="flipValue1" title="卡片标题">
      浮动翻转
      <button @click='toggleFlipValue(1)'>toggle</button>
      <!-- <div slot="back" style="height:100%"> -->
        <JPortalcard slot="back" title="背面标题">
          背面内容
          <button @click='toggleFlipValue(1)'>toggle</button>
        </JPortalcard>
      <!-- </div> -->
      </JPortalcard>
    </div>
    <div class='clear'></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flipValue1: 1,
      flipValue2: 1,
      flipValue3: 1,
    };
  },
  mounted() {
    // setTimeout(()=>{
    //   document.querySelector('#item').style.height = '200px' ;
    // })
  },
  methods: {
    toggleFlipValue(i){
      this['flipValue'+i] =  this['flipValue'+i] === 1 ? -1 : 1
    }
  }
};
</script>
<style >
.clear{
  clear: both;
}
.items{
  /* 示例 */
  float:left;
  width:350px;
  height:130px; 
  margin-left:16px;
  margin-top:16px;
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 800px;
  flex: 1;
}
</style>
```
