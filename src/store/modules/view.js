export default {
  namespaced: true,

  state: {
    // 导航菜单
    navigation: [],
    isNavigationSaved: false,
    // 面包屑
    homeBreadcrumbVisible: true,
    useCustomBreadcrumb: false,
    customBreadcrumb: []
  },

  mutations: {
    STORE_NAVIGATION(state, navigation) {
      state.navigation = navigation;
      state.isNavigationSaved = true;
    },
    STORE_CUSTOM_BREADCRUMB(state, customBreadcrumb) {
      state.useCustomBreadcrumb = true;
      state.customBreadcrumb = customBreadcrumb;
    },
    UNSET_CUSTOM_BREADCRUMB(state) {
      state.useCustomBreadcrumb = false;
      state.customBreadcrumb = [];
    },
    UPDATE_HOME_BREADCRUMB_VISIBLE(state, homeBreadcrumbVisible) {
      state.homeBreadcrumbVisible = homeBreadcrumbVisible;
    }
  }
};
