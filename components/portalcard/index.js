import PortalCard from './PortalCard';
import  Meta  from '@jxstjh/ant-design-vue/lib/card/Meta';
import  Grid  from '@jxstjh/ant-design-vue/lib/card/Grid';
import  Base  from '@jxstjh/ant-design-vue/lib/base';
PortalCard.Meta = Meta;
PortalCard.Grid = Grid;

/* istanbul ignore next */
PortalCard.install = function (Vue) {
  Vue.use(Base);
  Vue.component(PortalCard.name, PortalCard);
  Vue.component(Meta.name, Meta);
  Vue.component(Grid.name, Grid);
};

export default PortalCard;
