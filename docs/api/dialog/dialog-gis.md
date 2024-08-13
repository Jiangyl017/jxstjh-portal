<cn>
#### gis场景 弹窗实例
厅领导强烈希望使用的弹窗样式,希望一次弹窗用tab页将数据集中在弹窗中按维度展示,而非分散在页面的其它地方。
</cn>

<us>
</us>

```tpl
<template>
  <div>
    <a-button type="primary" @click="openDialog">
      gis触发弹窗
    </a-button>
  </div>
</template>
<script>
import GisDialog from './GisDialog.vue'
export default {
  data() {
    return {
      loading: false,
    };
  },
	mounted () {
    console.dir(this)
	},
  methods: {
		openDialog (tranData = {}) {
			this.$dialog(GisDialog,
			// component props
			{
			tranData,
			on: {
				ok (record) {
				console.log('ok 回调', record)
				},
				cancel () {
				console.log('cancel 回调')
				},
				close () {
				console.log('modal close 回调')
				}
			}
			},
			// modal props
			{
				title: '标题',
				width: 90 + '%',
				// height: 80 + '%',
				footer: () => '',
				centered: true,
				maskClosable: false,
				mask: false,
				dialogClass: 'JPortal-GIS'
			})
		},
  },
};
</script>
```
