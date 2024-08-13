<script>
import Dialog from './dialog.md';
import DialogCustom from './dialog-custom.md';
import DialogInfo from './dialog-info.md';
import DialogGis from './dialog-gis.md';
import CN from './dialog.zh-CN.md';
import US from './dialog.en-US.md';
const md = {
  cn: `# dialog
          对话框Api
          ## 何时使用
          需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 dialog 在当前页面正中打开一个浮层，承载相应的操作。
          ## 代码演示`,
  us: ``,
};
export default {
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <DialogGis/>
        <Dialog />
        <DialogCustom />
        <DialogInfo />
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>
<style>

</style>
