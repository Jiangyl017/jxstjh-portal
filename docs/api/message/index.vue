<script>
import Message from './message.md';
import MessageOthen from './message-othen.md';
import Messageload from './message-load.md';
import MessagePromise from './message-promise.md';
import CN from './message.zh-CN.md';
import US from './message.en-US.md';
const md = {
  cn: `# message
          全局展示操作反馈信息。
          ## 何时使用
          * 可提供成功、警告和错误等反馈信息。
          * 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
          ## 代码演示`,
  us: ``,
};
export default {
  render () {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <Message />
        <Messageload />
        <MessageOthen />
        <MessagePromise />
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