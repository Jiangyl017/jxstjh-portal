import 'babel-polyfill';
// import '../components/style.js';
import '@jxstjh/ant-design-vue/dist/antd.css';
import './index.less';
import 'nprogress/nprogress.css';
import 'highlight.js/styles/solarized-light.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueClipboard from 'vue-clipboard2';
import NProgress from 'nprogress';
import routes from './routes';
import Md from './components/md';
import Api from './components/api';
import './components';
import demoBox from './components/demoBox';
import demoContainer from './components/demoContainer';
import demoSort from './components/demoSort';
import zhCN from './theme/zh-CN';
import enUS from './theme/en-US';
import { isZhCN } from './util';
import { PortalCard } from '../components';
const mountedCallback = {
  install: (Vue, options) => {
    Vue.directive('mountedCallback', {
      inserted: function(el, binding, vnode) {
        binding.value(vnode);
      },
    });
  },
};
// 全局使用 滚动条
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
// 全局loading
import Loading from '@jxstjh/vue-loading-overlay';
import '@jxstjh/vue-loading-overlay/dist/vue-loading.css';
import Dialog from './components/Dialog';

Vue.use(Dialog);
Vue.use(Loading); // cloud setting db record
Vue.use(PerfectScrollbar);

Vue.use(Vuex);
Vue.use(mountedCallback);
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(PortalCard);
Vue.component(Md.name, Md);
Vue.component(Api.name, Api);
Vue.component('demo-box', demoBox);
Vue.component('demo-container', demoContainer);
Vue.component('demo-sort', demoSort);

const i18n = new VueI18n({
  locale: isZhCN(location.pathname) ? zhCN.locale : enUS.locale,
  messages: {
    [enUS.locale]: { message: enUS.messages },
    [zhCN.locale]: { message: zhCN.messages },
  },
});

const router = new VueRouter({
  mode: 'hash',
  fallback: false,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

const store = new Vuex.Store({
  state: {
    username: 'zeka',
  },
  mutations: {
    update(state, payload) {
      state.username = payload.username;
    },
  },
});

new Vue({
  el: '#app',
  i18n,
  router,
  store,
});
