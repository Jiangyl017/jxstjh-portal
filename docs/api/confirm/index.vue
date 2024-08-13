<script>
import Confirm from './confirm.md';
import ConfirmPlace from './comfirm-place.md';
import ConfirmIcon from './comfirm-icon.md';
import ConfirmCondition from './comfirm-condition.md';
import CN from './confirm.zh-CN.md';
import US from './confirm.en-US.md';
const md = {
  cn: `# confirm
          点击元素，弹出气泡式的确认框。。
          ## 何时使用
          目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。
          ## 代码演示`,
  us: ``,
};
export default {
  render () {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <Confirm />
        <ConfirmPlace />
        <ConfirmIcon />
        <ConfirmCondition />
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