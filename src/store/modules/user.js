import IUserInfo from '@/models/IUserInfo';

export default {
  namespaced: true,

  state: {
    userInfo: new IUserInfo({ id: 0, username: '', name: '' })
  },

  mutations: {
    STORE_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  }
};
