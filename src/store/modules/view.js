export default {
  namespaced: true,

  state: {
    // 导航菜单
    navigation: [],
    isNavigationSaved: false,
    // 面包屑
    breadcrumbVisible: true
  },

  mutations: {
    STORE_NAVIGATION(state, navigation) {
      state.navigation = navigation;
      state.isNavigationSaved = true;
    },
    UPDATE_BREADCRUMB_VISIBLE(state, breadcrumbVisible) {
      state.breadcrumbVisible = breadcrumbVisible;
    }
  }
};
