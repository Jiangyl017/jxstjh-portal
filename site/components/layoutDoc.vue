<script>
import { enquireScreen } from 'enquire-js';
import AllDemo from '../demo';
import Header from './header';
import zhCN from '@jxstjh/ant-design-vue/lib/locale-provider/zh_CN';
import enUS from '@jxstjh/ant-design-vue/lib/locale-provider/default';
import sortBy from 'lodash/sortBy';
import { isZhCN } from '../util';
import { Provider, create } from '@jxstjh/ant-design-vue/lib/_util/store';
import NProgress from 'nprogress';
import MobileMenu from '@jxstjh/ant-design-vue/lib/vc-drawer/src';

const docsList = [
  {
    title: '入门介绍',
    children: [
      { key: 'getting-started', enTitle: 'Getting Started', title: '开始使用' },
      { key: 'introduce', enTitle: 'Introduce', title: '体系结构' },
      { key: 'flow', enTitle: 'flow', title: '接入说明' },
    ],
  },
  {
    title: '开发模块',
    children: [
      { key: 'how-to-start-module', enTitle: 'How to Start Module', title: '如何开始' },
      { key: 'scaffold-module', enTitle: 'Scaffold Module', title: '脚手架结构' },
      { key: 'publish-module', enTitle: 'Publish Module', title: '发布模块' },
    ],
  },
  {
    title: '开发卡片',
    children: [
      { key: 'how-to-start-card', enTitle: 'How to Start Card', title: '如何开始' },
      { key: 'scaffold-card', enTitle: 'Scaffold Card', title: '脚手架结构' },
      { key: 'publish-card', enTitle: 'Publish Card', title: '发布卡片' },
    ],
  },
  {
    title: '开发标准',
    children: [
      { key: 'ui-component', enTitle: 'UI', title: '组件标准' },
      { key: 'scroll-bar', enTitle: 'Scroll Bar', title: '完美滚动条' },
      { key: 'customize-theme', enTitle: 'Customize Theme', title: '颜色与主题标准' },
      { key: 'class-utils', enTitle: 'Class Utils', title: '工具类' },
      { key: 'download', enTitle: 'Download Design Resources', title: '下载设计资源' },
    ],
  },
  {
    title: 'Api',
    children: [
      { key: 'custom-legend', enTitle: 'Api Custom Legend', title: '自定义图例' },
      { key: 'api-get-user-info', enTitle: 'Api Get User', title: '获取用户信息' },
      { key: 'api-get-authority-info', enTitle: 'Api Get Authority', title: '获取权限信息' },
      { key: 'resize', enTitle: 'Resize', title: '响应视图' },
      { key: 'api-dialog', enTitle: 'Api Dialog', title: 'dialog弹窗' },
      { key: 'api-confirm', enTitle: 'Api Confirm', title: 'confirm确认框' },
      { key: 'api-message', enTitle: 'Api Message', title: 'message吐司' },
      { key: 'api-loading', enTitle: 'Api Loading', title: 'loading交互' },
      { key: 'api-gis', enTitle: 'Api Gis', title: 'gis地图交互' },
    ],
  },
];

export default {
  props: {
    name: String,
    showDemo: Boolean,
    showApi: Boolean,
  },
  data() {
    this.store = create({
      currentSubMenu: [],
    });
    this.subscribe();
    return {
      showSideBars: true,
      currentSubMenu: [],
      sidebarHeight: document.documentElement.offsetHeight,
      isMobile: false,
    };
  },
  provide() {
    return {
      demoContext: this,
    };
  },
  watch: {
    '$route.path': function() {
      this.store.setState({ currentSubMenu: [] });
      this.addSubMenu();
    },
  },
  beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    clearTimeout(this.timer);
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  mounted() {
    console.dir(this);
    this.$nextTick(() => {
      this.addSubMenu();
      const nprogressHiddenStyle = document.getElementById('nprogress-style');
      if (nprogressHiddenStyle) {
        this.timer = setTimeout(() => {
          nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
        }, 0);
      }
      enquireScreen(b => {
        this.isMobile = !!b;
      });
    });
  },
  methods: {
    addSubMenu() {
      if (this.$route.path.indexOf('/docs/vue/') !== -1) {
        this.$nextTick(() => {
          const menus = [];
          const doms = [...this.$refs.doc.querySelectorAll(['h2', 'h3'])];
          doms.forEach(dom => {
            const id = dom.id;
            if (id) {
              const title = dom.textContent.split('#')[0].trim();
              menus.push({ cnTitle: title, usTitle: title, id });
            }
          });
          this.currentSubMenu = menus;
        });
      }
    },
    subscribe() {
      const { store } = this;
      this.unsubscribe = store.subscribe(() => {
        this.currentSubMenu = this.store.getState().currentSubMenu;
      });
    },
    getSubMenu(isCN) {
      const currentSubMenu = this.currentSubMenu;
      const lis = [];
      currentSubMenu.forEach(({ cnTitle, usTitle, id }) => {
        const title = isCN ? cnTitle : usTitle;
        lis.push(<a-anchor-link key={id} href={`#${id}`} title={title} />);
      });
      const showApi = this.$route.path.indexOf('/components/') !== -1;
      return (
        <a-anchor offsetTop={100} class="demo-anchor">
          {lis}
          {showApi ? <a-anchor-link key="API" title="API" href="#api" /> : ''}
        </a-anchor>
      );
    },
    getDocsMenu(isCN, pagesKey) {
      const docsMenu = docsList.map(group => {
        return (
          <a-menu-item-group key={group.title + '1'} title={group.title}>
            {group.children.map(({ key, enTitle, title }, index) => {
              const k = isCN ? `${key}-cn` : key;
              pagesKey.push({ name: k, url: `/docs/vue/${k}/`, title: isCN ? title : enTitle });
              return (
                <a-menu-item key={k}>
                  <router-link to={`/docs/vue/${k}/`}>{isCN ? title : enTitle}</router-link>
                </a-menu-item>
              );
            })}
          </a-menu-item-group>
        );
      });
      return docsMenu;
    },
    resetDocumentTitle(component, name, isCN) {
      let titleStr = '水利门户-开放平台';
      if (component) {
        const { subtitle, title } = component;
        const componentName = isCN ? subtitle + ' ' + title : title;
        titleStr = componentName + ' - ' + titleStr;
      } else {
        const currentKey = docsList.filter(item => {
          return item.key === name;
        });
        if (currentKey.length) {
          titleStr = (isCN ? currentKey[0]['title'] : currentKey[0]['enTitle']) + ' - ' + titleStr;
        }
      }
      document.title = titleStr;
    },
    mountedCallback() {
      NProgress.done();
      document.documentElement.scrollTop = 0;
    },
  },

  render() {
    const name = this.name;
    const isCN = isZhCN(name);
    const titleMap = {};
    const pagesKey = [];
    let prevPage = null;
    let nextPage = null;
    const docsMenu = this.getDocsMenu(isCN, pagesKey);
    const reName = name.replace(/-cn\/?$/, '');
    pagesKey.forEach((item, index) => {
      if (item.name === name) {
        prevPage = pagesKey[index - 1];
        nextPage = pagesKey[index + 1];
      }
    });
    let locale = zhCN;
    if (!isCN) {
      locale = enUS;
    }
    const config = AllDemo[titleMap[reName]];
    this.resetDocumentTitle(config, reName, isCN);
    const { isMobile, $route } = this;

    return (
      <div class="page-wrapper">
        <Header name={name} />
        <a-locale-provider locale={locale}>
          <div class="main-wrapper">
            <a-row>
              {isMobile ? (
                <MobileMenu ref="sidebar" wrapperClassName="drawer-wrapper">
                  <a-menu
                    class="aside-container menu-site"
                    selectedKeys={[name]}
                    defaultOpenKeys={['Components']}
                    inlineIndent={40}
                    mode="inline"
                  >
                    {docsMenu}
                  </a-menu>
                </MobileMenu>
              ) : (
                <a-col
                  ref="sidebar"
                  class="site-sidebar main-menu"
                  xxl={4}
                  xl={5}
                  lg={5}
                  md={6}
                  sm={8}
                  xs={12}
                >
                  <a-affix>
                    <section class="main-menu-inner">
                      <a-menu
                        class="aside-container menu-site"
                        selectedKeys={[name]}
                        defaultOpenKeys={['Components']}
                        inlineIndent={40}
                        mode="inline"
                      >
                        {docsMenu}
                      </a-menu>
                    </section>
                  </a-affix>
                </a-col>
              )}
              <a-col xxl={20} xl={19} lg={19} md={18} sm={24} xs={24}>
                <section class="main-container main-container-component">
                  {!isMobile ? (
                    <div class={['toc-affix', isCN ? 'toc-affix-cn' : '']} style="width: 150px;">
                      {this.getSubMenu(isCN)}
                    </div>
                  ) : null}
                  {this.showDemo ? (
                    <Provider store={this.store} key={'cn'}>
                      <router-view
                        class={`demo-cols-${config.cols || 2}`}
                        {...{
                          directives: [
                            {
                              name: 'mountedCallback',
                              value: this.mountedCallback,
                            },
                          ],
                        }}
                      ></router-view>
                    </Provider>
                  ) : (
                    ''
                  )}
                  {this.showApi ? (
                    <div class="markdown api-container" ref="doc">
                      <router-view
                        {...{
                          directives: [
                            {
                              name: 'mountedCallback',
                              value: this.mountedCallback,
                            },
                          ],
                        }}
                      ></router-view>
                    </div>
                  ) : (
                    ''
                  )}
                </section>
                <section class="prev-next-nav">
                  {prevPage ? (
                    <router-link class="prev-page" to={`${prevPage.url}`}>
                      <a-icon type="left" />
                      &nbsp;&nbsp;{prevPage.title}
                    </router-link>
                  ) : (
                    ''
                  )}
                  {nextPage ? (
                    <router-link class="next-page" to={`${nextPage.url}`}>
                      {nextPage.title}&nbsp;&nbsp;
                      <a-icon type="right" />
                    </router-link>
                  ) : (
                    ''
                  )}
                </section>
              </a-col>
            </a-row>
          </div>
        </a-locale-provider>
        {name.indexOf('back-top') === -1 ? <a-back-top /> : null}
      </div>
    );
  },
};
</script>
