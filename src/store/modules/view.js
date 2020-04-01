export default {
  namespaced: true,

  state: {
    homeNavigates: [],
    isHomeNavigatesSaved: false
  },

  mutations: {
    STORE_HOME_NAVIGATIONS(state, homeNavigates) {
      state.homeNavigates = homeNavigates;
      state.isHomeNavigatesSaved = true;
    },
    UPDATE_HOME_BREADCRUMB_VISIBLE(state, isHomeBreadcrumbVisible) {
      state.isHomeBreadcrumbVisible = isHomeBreadcrumbVisible;
    },
    STORE_CUSTOM_HOME_BREADCRUMB(state, customHomeBreadcrumb) {
      state.useCustomHomeBreadcrumb = true;
      state.customHomeBreadcrumb = customHomeBreadcrumb;
    }
  }
};
