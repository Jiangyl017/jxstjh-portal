import LayoutDoc from './components/layoutDoc.vue';
import LayoutCom from './components/layoutCom.vue';
import Iframe from './components/iframe.vue';
import demoRoutes from './demoRoutes';

export default [
  {
    path: '/components',
    component: LayoutCom,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0];
      return { name, showDemo: true };
    },
    children: demoRoutes,
  },
  {
    path: '/iframe',
    component: Iframe,
    children: demoRoutes.map(item => ({
      ...item,
      props: route => {
        const hash = route.hash.replace('#', '');
        return { iframeName: hash };
      },
    })),
  },
  {
    path: '/docs',
    component: LayoutDoc,
    props: route => {
      const name = route.path.split('/docs/vue/')[1].split('/')[0];
      return { name, showApi: true };
    },
    children: [
      {
        path: 'vue/getting-started',
        component: () => import('../docs/vue/getting-started.en-US.md'),
      },
      {
        path: 'vue/getting-started-cn',
        component: () => import('../docs/vue/getting-started.zh-CN.md'),
      },
      {
        path: 'vue/introduce',
        component: () => import('../docs/vue/introduce.en-US.md'),
      },
      {
        path: 'vue/introduce-cn',
        component: () => import('../docs/vue/introduce.zh-CN.md'),
      },
      {
        path: 'vue/flow',
        component: () => import('../docs/vue/flow.en-US.md'),
      },
      {
        path: 'vue/flow-cn',
        component: () => import('../docs/vue/flow.zh-CN.md'),
      },
      {
        path: 'vue/scaffold-card',
        component: () => import('../docs/vue/scaffold-card.en-US.md'),
      },
      {
        path: 'vue/scaffold-card-cn',
        component: () => import('../docs/vue/scaffold-card.zh-CN.md'),
      },
      {
        path: 'vue/scaffold-module',
        component: () => import('../docs/vue/scaffold-module.en-US.md'),
      },
      {
        path: 'vue/scaffold-module-cn',
        component: () => import('../docs/vue/scaffold-module.zh-CN.md'),
      },
      {
        path: 'vue/customize-theme',
        component: () => import('../docs/vue/customize-theme.en-US.md'),
      },
      {
        path: 'vue/customize-theme-cn',
        component: () => import('../docs/vue/customize-theme.zh-CN.md'),
      },
      {
        path: 'vue/download',
        component: () => import('../docs/vue/download.en-US.md'),
      },
      {
        path: 'vue/download-cn',
        component: () => import('../docs/vue/download.zh-CN.md'),
      },
      {
        path: 'vue/how-to-start-card',
        component: () => import('../docs/vue/how-to-start-card.en-US.md'),
      },
      {
        path: 'vue/how-to-start-card-cn',
        component: () => import('../docs/vue/how-to-start-card.zh-CN.md'),
      },
      {
        path: 'vue/publish-card-cn',
        component: () => import('../docs/vue/publish-card.zh-CN.md'),
      },
      {
        path: 'vue/ui-component-cn',
        component: () => import('../docs/vue/ui-component.zh-CN.md'),
      },

      {
        path: 'vue/how-to-start-module',
        component: () => import('../docs/vue/how-to-start-module.en-US.md'),
      },
      {
        path: 'vue/how-to-start-module-cn',
        component: () => import('../docs/vue/how-to-start-module.zh-CN.md'),
      },
      {
        path: 'vue/publish-module-cn',
        component: () => import('../docs/vue/publish-module.zh-CN.md'),
      },

      {
        path: 'vue/class-utils-cn',
        component: () => import('../docs/vue/class-utils.zh-CN.md'),
      },
      {
        path: 'vue/scroll-bar-cn',
        component: () => import('../docs/vue/scroll-bar.zh-CN.md'),
      },
      {
        path: 'vue/resize-cn',
        component: () => import('../docs/vue/resize.zh-CN.md'),
      },
      {
        path: 'vue/custom-legend-cn',
        component: () => import('../docs/api/custom-legend.zh-CN.md'),
      },
      {
        path: 'vue/api-get-user-info-cn',
        component: () => import('../docs/api/get-user-info.zh-CN.md'),
      },
      {
        path: 'vue/api-get-authority-info-cn',
        component: () => import('../docs/api/get-authority-info.zh-CN.md'),
      },
      {
        path: 'vue/api-confirm-cn',
        component: () => import('../docs/api/confirm/index.vue'),
      },
      {
        path: 'vue/api-dialog-cn',
        component: () => import('../docs/api/dialog/index.vue'),
      },
      {
        path: 'vue/api-gis-cn',
        component: () => import('../docs/api/gis.zh-CN.md'),
      },
      {
        path: 'vue/api-loading-cn',
        component: () => import('../docs/api/loading/index.vue'),
      },
      {
        path: 'vue/api-message-cn',
        component: () => import('../docs/api/message/index.vue'),
      },
      { path: '', redirect: 'vue/getting-started-cn' },
    ],
  },
  { path: '/*', redirect: '/docs' },
];
