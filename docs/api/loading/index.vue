<script>
import Loading from './loading.md';
import CN from './loading.zh-CN.md';
import US from './loading.en-US.md';
const md = {
  cn: `# Loading
          全局loading交互层
          ## 何时使用
          在一些场景中,异步交互的同时,不希望用户同步操作应用,使用全局loading遮罩,阻止用户交互以免产生复杂场景.
          > 如需局部使用loading,请使用\`a-spin\`组件
          ## 代码演示`,
  us: ``,
};
export default {
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <Loading />
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
