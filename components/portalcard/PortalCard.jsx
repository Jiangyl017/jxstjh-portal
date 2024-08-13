import omit from 'omit.js';
import Tabs from '@jxstjh/ant-design-vue/lib/tabs';
import Row from '@jxstjh/ant-design-vue/lib/row';
import Col from '@jxstjh/ant-design-vue/lib/col';
import PropTypes from '@jxstjh/ant-design-vue/lib/_util/vue-types';
import {
  getComponentFromProp,
  getSlotOptions,
  filterEmpty,
  getListeners,
} from '@jxstjh/ant-design-vue/lib/_util/props-util';
import BaseMixin from '@jxstjh/ant-design-vue/lib/_util/BaseMixin';
import { ConfigConsumerProps } from '@jxstjh/ant-design-vue/lib/config-provider';
const { TabPane } = Tabs;
export default {
  name: 'JPortalcard',
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    title: PropTypes.any,
    extra: PropTypes.any,
    bordered: PropTypes.bool.def(false),
    bodyStyle: PropTypes.object,
    headStyle: PropTypes.object,
    loading: PropTypes.bool.def(false),
    hoverable: PropTypes.bool.def(false),
    flipable: PropTypes.bool.def(false),
    flipValue: PropTypes.number.def(1),
    flipWidth: PropTypes.number.def(600),
    flipHeight: PropTypes.number.def(400),
    flipFloatModel: PropTypes.bool.def(true),
    type: PropTypes.string,
    size: PropTypes.oneOf(['default', 'small']),
    actions: PropTypes.any,
    tabList: PropTypes.array,
    tabBarExtraContent: PropTypes.any,
    activeTabKey: PropTypes.string,
    defaultActiveTabKey: PropTypes.string,
  },
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
    icon: { default: undefined },
  },
  data() {
    return {
      widerPadding: false,
      _containerSize: {
        height: null,
        width: null,
      },
    };
  },
  watch: {
    flipValue() {
      if (this.flipable) {
        this.toggleFlipBackwardSize();
      }
    },
  },
  mounted() {
    if (this.flipable) {
      // this.initFlipSize();
    }
  },
  methods: {
    getAction(actions) {
      const actionList = actions.map((action, index) => (
        <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
          <span>{action}</span>
        </li>
      ));
      return actionList;
    },
    onTabChange(key) {
      this.$emit('tabChange', key);
    },
    isContainGrid(obj = []) {
      let containGrid;
      obj.forEach(element => {
        if (element && getSlotOptions(element).__ANT_CARD_GRID) {
          containGrid = true;
        }
      });
      return containGrid;
    },
    initFlipSize() {
      const rootDiv = this.$el.parentNode;
      const containerDiv = this.$el;
      this._containerSize = {
        height: rootDiv.offsetHeight,
        width: rootDiv.offsetWidth,
      };
      // 为了有动画而添加的 起始变量
      containerDiv.style.height = rootDiv.offsetHeight + 'px';
      containerDiv.style.width = rootDiv.offsetWidth + 'px';
    },
    toggleFlipBackwardSize() {
      if (!this.flipFloatModel) return;
      if (this._containerSize && this._containerSize.height) {
        this.toggleFlipBackward();
      } else {
        this.initFlipSize();
        setTimeout(() => {
          this.toggleFlipBackward();
        }, 26);
      }
    },
    toggleFlipBackward() {
      const containerDiv = this.$el;
      // 设置父容器的z index
      const rootDiv = this.$el.parentNode;
      if (this.flipValue < 0) {
        rootDiv.classList.add('fix-zindex');
      } else {
        rootDiv.classList.remove('fix-zindex');
      }
      // 定位容器的位置
      const rect = containerDiv.getBoundingClientRect();
      // 当前top
      const currentTop = Number(rect.y);
      const currentLeft = Number(rect.x);
      const W = document.body.clientWidth;
      const H = document.body.clientHeight;
      const offsetLeft = Number((W - this.flipWidth) / 2 - currentLeft);
      const offsetTop = Number((H - this.flipHeight) / 2 - currentTop);
      containerDiv.style.marginTop = this.flipValue < 0 ? offsetTop + 'px' : '0';
      containerDiv.style.marginLeft = this.flipValue < 0 ? offsetLeft + 'px' : '0';
      // 定位容器的位置  end

      // 设置卡片容器的宽高
      containerDiv.style.height =
        this.flipValue < 0 ? `${this.flipHeight}px` : this._containerSize.height + 'px';
      containerDiv.style.width =
        this.flipValue < 0 ? `${this.flipWidth}px` : this._containerSize.width + 'px';
    },
  },
  render() {
    const {
      prefixCls: customizePrefixCls,
      headStyle = {},
      bodyStyle = {},
      loading,
      bordered = true,
      size = 'default',
      type,
      tabList,
      hoverable,
      activeTabKey,
      defaultActiveTabKey,
    } = this.$props;

    const getPrefixCls = this.configProvider.getPrefixCls;
    const prefixCls = 'jh-portal-card';

    const { $slots, $scopedSlots } = this;
    const tabBarExtraContent = getComponentFromProp(this, 'tabBarExtraContent');
    const classString = {
      [`${prefixCls}`]: true,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-hoverable`]: !!hoverable,
      [`${prefixCls}-contain-grid`]: this.isContainGrid($slots.default),
      [`${prefixCls}-contain-tabs`]: tabList && tabList.length,
      [`${prefixCls}-${size}`]: size !== 'default',
      [`${prefixCls}-type-${type}`]: !!type,
    };
    const loadingBlockStyle =
      bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? { padding: 24 } : undefined;

    const loadingBlock = (
      <div class={`${prefixCls}-loading-content`} style={loadingBlockStyle}>
        <Row gutter={8}>
          <Col span={22}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={8}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
          <Col span={15}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={6}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
          <Col span={18}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={13}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
          <Col span={9}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={4}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
          <Col span={3}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
          <Col span={16}>
            <div class={`${prefixCls}-loading-block`} />
          </Col>
        </Row>
      </div>
    );

    const hasActiveTabKey = activeTabKey !== undefined;
    const tabsProps = {
      props: {
        size: 'large',
        [hasActiveTabKey ? 'activeKey' : 'defaultActiveKey']: hasActiveTabKey
          ? activeTabKey
          : defaultActiveTabKey,
        tabBarExtraContent,
      },
      on: {
        change: this.onTabChange,
      },
      class: `${prefixCls}-head-tabs`,
    };

    let head;
    let icon = this.icon;

    const tabs =
      tabList && tabList.length ? (
        <Tabs {...tabsProps}>
          {tabList.map(item => {
            const { tab: temp, scopedSlots = {} } = item;
            const name = scopedSlots.tab;
            const tab =
              temp !== undefined ? temp : $scopedSlots[name] ? $scopedSlots[name](item) : null;
            return <TabPane tab={tab} key={item.key} disabled={item.disabled} />;
          })}
        </Tabs>
      ) : null;
    const titleDom = getComponentFromProp(this, 'title');
    const extraDom = getComponentFromProp(this, 'extra');
    if (titleDom || extraDom || tabs) {
      head = (
        <div class={`${prefixCls}-head`} style={headStyle}>
          <div class={`${prefixCls}-head-wrapper`}>
            {titleDom && (
              <div class={`${prefixCls}-head-title`}>
                {icon}
                {titleDom}
              </div>
            )}
            {extraDom && <div class={`${prefixCls}-extra`}>{extraDom}</div>}
          </div>
          {tabs}
        </div>
      );
    }

    const children = $slots.default;
    const cover = getComponentFromProp(this, 'cover');
    const coverDom = cover ? <div class={`${prefixCls}-cover`}>{cover}</div> : null;
    const body = (
      <div class={`${prefixCls}-body`} style={bodyStyle}>
        {loading ? loadingBlock : children}
      </div>
    );
    const actions = filterEmpty(this.$slots.actions);
    const actionDom =
      actions && actions.length ? (
        <ul class={`${prefixCls}-actions`}>{this.getAction(actions)}</ul>
      ) : null;
    // 卡片背面
    const backDom = getComponentFromProp(this, 'back');
    const default_forward_dom = (
      <div
        class={classString}
        ref="cardContainerRef"
        {...{ on: omit(getListeners(this), ['tabChange', 'tab-change']) }}
      >
        {head}
        {coverDom}
        {children ? body : null}
        {actionDom}
      </div>
    );
    if (backDom && this.flipable) {
      const flipClassString = {
        ['flip-card-container']: true,
        ['fliped']: this.flipValue < 0,
      };
      return (
        <div class={flipClassString}>
          <div class="flip-card flip-forward">{default_forward_dom}</div>
          <div class="flip-card flip-backward">{backDom}</div>
        </div>
      );
    } else {
      return default_forward_dom;
    }
  },
};
