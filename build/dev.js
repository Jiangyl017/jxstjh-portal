process.env.ENTRY_INDEX = 'index';
// process.env.ENTRY_INDEX = 'dev';

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const importFresh = require('import-fresh');
const replace = require('json-templater/string');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devWebpack = require('./webpack.dev.conf');
const { dev: devComponents } = require('./config');
const configPath = path.join(__dirname, './config.js');
/**
 * a-bc-d --> aBcD
 * @param {string} s
 */
const camelize = s => s.replace(/-(\w)/g, ($, $1) => $1.toUpperCase());

/**
 * radio-group --> radio
 * @param {string} s
 */
const getUpper = s => s.replace(/(-[a-z]*)/g, '');

let { componentName } = require('./config').dev;

const componentsInPrototype = ['Modal', 'message', 'notification'];

const MAIN_TEMPLATE = `import 'babel-polyfill';
import 'highlight.js/styles/solarized-light.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueClipboard from 'vue-clipboard2';
import Md from './components/md';
import Api from './components/api';
import demoBox from './components/demoBox';
import demoSort from './components/demoSort';
import demoContainer from './components/demoContainer';
import Modal from '@jxstjh/ant-design-vue/lib/modal';
import message from '@jxstjh/ant-design-vue/lib/message';
import notification from '@jxstjh/ant-design-vue/lib/notification';
{{importComponents}}
{{importStyles}}
{{importDevComponents}}
{{importDevStyles}}
import '@jxstjh/ant-design-vue/lib/modal/style';
import '@jxstjh/ant-design-vue/lib/message/style';
import '@jxstjh/ant-design-vue/lib/notification/style';
import Test from '../components/{{name}}/demo/index.vue';
import zhCN from './theme/zh-CN';
import enUS from './theme/en-US';
import './index.less';
Vue.use(Vuex);
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.component(Md.name, Md);
Vue.component(Api.name, Api);
Vue.component('demo-box', demoBox);
Vue.component('demo-sort', demoSort);
Vue.component('demo-container', demoContainer);

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.use(Modal);
{{install}}
{{installDev}}

const i18n = new VueI18n({
  locale: enUS.locale,
  messages: {
    [enUS.locale]: { message: enUS.messages },
    [zhCN.locale]: { message: zhCN.messages },
  },
});

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/test',
    component: () => import('../components/test/index.vue'),
  }, {
    path: '/*', component: Test
  }],
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
console.log(Vue)
new Vue({
  el: '#app',
  i18n,
  router,
  store,
});
`;

const OUTPUT_PATH = path.join(__dirname, '../site/dev.js');

const generateEntry = components =>
  Object.keys(components)
    .map(
      component =>
        `import ${component} from '@jxstjh/ant-design-vue/lib/${components[component]}';`,
    )
    .join('\n');

const generateStyles = components =>
  Object.keys(components)
    .map(component => `import '@jxstjh/ant-design-vue/lib/${components[component]}/style';`)
    .join('\n');

const generateInstall = components =>
  Object.keys(components)
    .map(component => `Vue.use(${component});`)
    .join('\n');

// dev
const generateDevEntry = components => {
  console.log('generateDevEntry');
  console.log(Object.values(components));
  return Object.values(components)
    .map(component => `import ${component} from '../components/${component}';`)
    .join('\n');
};
const generateDevStyles = components =>
  Object.values(components)
    .map(component => `import '../components/${component}/style';`)
    .join('\n');

const generateDevInstall = components =>
  // Object.values(components)
  //   .map(component => `Vue.component(${component}.name, ${component});`)
  //   .join('\n');
  Object.values(components)
    .map(component => `Vue.use(${component});`)
    .join('\n');

// dev end

const renderTemplate = name => {
  const components = {
    Tooltip: 'tooltip', // for DemoBox
    Icon: 'icon', // Basic
  };

  const demoPaths = fs
    .readdirSync(path.join(__dirname, `../components/${name}/demo`))
    .map(p => `../components/${name}/demo/${p}`);
  const testPaths = fs
    .readdirSync(path.join(__dirname, `../components/test`))
    .map(p => `../components/test/${p}`);
  [...demoPaths, ...testPaths].forEach(demoPath => {
    const demo = fs.readFileSync(path.join(__dirname, demoPath)).toString();
    const componentsInDemo = demo.match(/a-(\w+(-\w+)*)/g) || [];
    console.log(componentsInDemo);
    console.log('---');
    componentsInDemo.forEach(name => {
      const dirName = name.replace(/^a-/, '');
      const componentName = camelize(name).replace(/^a/, '');
      const upperComponentDir = getUpper(dirName);
      const upperComponentName = upperComponentDir.replace(/^[a-z]/, $ => $.toUpperCase());
      console.log(upperComponentName);
      // const componentPath = path.join(__dirname, `../components/${dirName}`);
      // if (fs.existsSync(componentPath)) {
      //   if (componentsInPrototype.includes(componentName)) {
      //     return;
      //   }
      //   components[componentName] = dirName;
      // } else if (fs.existsSync(path.join(__dirname, `../components/${upperComponentDir}`))) {
      //   components[upperComponentName] = upperComponentDir;
      // }
      const componentPath = `@jxstjh/ant-design-vue/lib/${dirName}`;
      if (componentsInPrototype.includes(componentName)) {
        return;
      }
      components[componentName] = dirName;
    });
  });

  const importComponents = generateEntry(components);
  const importStyles = generateStyles(components);
  const install = generateInstall(components);

  const importDevComponents = generateDevEntry(devComponents);
  const importDevStyles = generateDevStyles(devComponents);
  const installDev = generateDevInstall(devComponents);

  const template = replace(MAIN_TEMPLATE, {
    importComponents,
    importDevComponents,
    importStyles,
    importDevStyles,
    install,
    installDev,
    name,
  });
  fs.writeFileSync(OUTPUT_PATH, template);
};

function fsExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

if (!fsExistsSync(path.join(__dirname, '../components/test/index.vue'))) {
  if (!fsExistsSync(path.join(__dirname, '../components/test'))) {
    fs.mkdirSync(path.join(__dirname, '../components/test'));
  }
  fs.writeFileSync(path.join(__dirname, '../components/test/index.vue'), `<template></template>`);
}

let demoWatcher;

chokidar.watch(configPath, { ignoreInitial: true }).on('change', async () => {
  ({ componentName } = importFresh(configPath).dev);

  demoWatcher && (await demoWatcher.close());

  demoWatcher = chokidar.watch(path.join(__dirname, `../components/${componentName}/demo`));
  demoWatcher.on('change', () => {
    renderTemplate(componentName);
  });

  renderTemplate(componentName);
});

renderTemplate(componentName);

const compiler = webpack(devWebpack);

const configuration = devWebpack.devServer;

const server = new WebpackDevServer(compiler, configuration);
server.listen(configuration.port);
