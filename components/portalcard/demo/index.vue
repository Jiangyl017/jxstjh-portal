<script>
import Basic from './basic';
import Flip from './flip';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
const md = {
  cn: `# PortalCard 门户卡片
          水利门户卡片容器
          ## 何时使用
          门户工作台卡片容器使用
          ## 组件注册
          \`\`\`js
          import PortalCard from '@jxstjh/portal/lib/portalcard'
          import '@jxstjh/portal/lib/portalcard/style/index.less'
          Vue.use(PortalCard);
          \`\`\`
          ## 代码演示`,
  us: ``,
};
export default {
  category: 'Components',
  type: 'card',
  zhType: '卡片',
  title: 'PortalCard',
  subtitle: '门户卡片',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <Basic />
        <Flip />
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
[id^='components-button-demo-'] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^='components-button-demo-'] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
