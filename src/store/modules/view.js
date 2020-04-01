export default {
  namespaced: true,

  state: {
    navigation: [],
    isNavigationSaved: false
  },

  mutations: {
    STORE_NAVIGATION(state, navigation) {
      state.navigation = navigation;
      state.isNavigationSaved = true;
    }
  }
};
