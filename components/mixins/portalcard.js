/*
 * @Author: 杨俊
 * @Date:
 * @LastEditors: 姜跃龙
 * @LastEditTime: 2023-03-02 15:21:56
 * @Description: file content
 */
import { mapGetters, mapMutations } from 'vuex';

export const portalCardMixin = {
  props: {
    DynamicParameters: {
      type: Object,
      default: () => ({}),
    },
    PREVIEW_USERINFO: {
      type: Object,
      default: () => undefined,
    },
    PREVIEW_AUTHTOKEN: {
      type: String,
      default: undefined,
    },
    PREVIEW_TOKEN: {
      type: String,
      default: undefined,
    },
    PREVIEW_BUSINESS_PORTAL: {
      type: Object,
      default: () => undefined,
    },
    w: {
      type: Number,
      default: null,
    },
    h: {
      type: Number,
      default: null,
    },
    i: {
      type: [Number, String],
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      __USERINFO__: 'userInfo',
      __AUTHTOKEN__: 'thirdToken',
      __TOKEN__: 'token',
      __BUSINESS_PORTAL__: 'currentBusiness',
    }),
  },
  methods: {
    ...mapMutations({
      SET_CUSLEGEND: 'SET_CUSLEGEND',
      TOGGLE_CUSLEGEND: 'TOGGLE_CUSLEGEND',
      UPDATE_MAPCONTROL: 'UPDATE_MAPCONTROL',
    }),
    GET_USER_INFO() {
      return !!this.PREVIEW_USERINFO ? this.PREVIEW_USERINFO : this.__USERINFO__;
    },
    GET_AUTH_TOKEN() {
      return !!this.PREVIEW_AUTHTOKEN ? this.PREVIEW_AUTHTOKEN : this.__AUTHTOKEN__;
    },
    GET_TOKEN() {
      return !!this.PREVIEW_TOKEN ? this.PREVIEW_TOKEN : this.__TOKEN__;
    },
    GET_BUSINESS_PORTAL() {
      return !!this.PREVIEW_BUSINESS_PORTAL ? this.PREVIEW_BUSINESS_PORTAL : this.__BUSINESS_PORTAL__;
    },
  },
};
