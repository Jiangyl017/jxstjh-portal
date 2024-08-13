<script>
import { isZhCN } from '../util';
import sortBy from 'lodash/sortBy';
import packageInfo from '../../package.json';
import logo from '../logo.svg';
import antDesignVue from '../ant-design-vue.svg';
import jxstjhkun from '../jxst-jh-kun.svg';

export default {
  props: {
    name: String,
    searchData: Array,
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    handleClick() {
      const name = this.name;
      const path = this.$route.path;
      const newName = isZhCN(name) ? name.replace(/-cn\/?$/, '') : `${name}-cn`;
      this.$router.push({
        path: path.replace(name, newName),
      });
      this.$i18n.locale = isZhCN(name) ? 'en-US' : 'zh-CN';
    },
    onSelect(val) {
      this.$router.push(val);
      this.value = val;
    },
  },
  render() {
    const name = this.name;
    const searchData = this.searchData ? sortBy(this.searchData, ['title']) : null;
    const isCN = isZhCN(name);
    return (
      <header id="header">
        <a-row>
          <a-col class="header-left" xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <router-link to={{ path: '/' }} id="logo">
              <img alt="logo" height="18" src={jxstjhkun} />
            </router-link>
          </a-col>
          <a-col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            {searchData ? (
              <div id="search-box">
                <a-icon type="search" />
                <a-select
                  ref="selectBox"
                  placeholder={isCN ? '搜索组件...' : 'input search text'}
                  style="width: 200px"
                  defaultActiveFirstOption={false}
                  showArrow={false}
                  showSearch
                  onSelect={this.onSelect}
                  optionFilterProp="children"
                  key={this.value}
                >
                  {searchData.map(({ title, subtitle, url }) => (
                    <a-select-option key={url}>
                      {title} {isCN && subtitle}
                    </a-select-option>
                  ))}
                </a-select>
              </div>
            ) : null}
            {null ? (
              <a-button
                ghost
                size="small"
                onClick={this.handleClick}
                class="header-lang-button"
                key="lang-button"
              >
                {isCN ? 'English' : '中文'}
              </a-button>
            ) : null}
            <a-select
              size="small"
              defaultValue={packageInfo.version}
              class="version"
              style="margin-right:40px"
            >
              <a-select-option value={packageInfo.version}>{packageInfo.version}</a-select-option>
            </a-select>
            <a-menu mode="horizontal" class="menu-site" id="nav">
              <a-menu-item key="docs">
                <router-link to="/docs">{isCN ? '文档' : 'Documents'}</router-link>
              </a-menu-item>
              <a-menu-item key="components">
                <router-link to="/components">{isCN ? '组件' : 'Components'}</router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </header>
    );
  },
};
</script>

<style lang="less" scoped></style>
