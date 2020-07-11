export default {
  namespaced: true,

  state: {
    userInfo: { id: 0, username: '', name: '' }
  },

  mutations: {
    STORE_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  }
};
