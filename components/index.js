/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

import { default as PortalCard } from './portalcard';
import { default as version } from './version';

// mixins
import { portalCardMixin } from './mixins/portalcard';
const components = [PortalCard];

const install = function(Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { version, install, PortalCard, portalCardMixin};
export default {
  version,
  install,
  PortalCard,
  portalCardMixin,
};
