export default [
  {
    path: 'portalcard',
    component: () => import('../components/portalcard/demo/index.vue'),
  },
  {
    path: 'portalcard-cn',
    component: () => import('../components/portalcard/demo/index.vue'),
  },
  { path: '', redirect: 'portalcard-cn' },
];
