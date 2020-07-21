import { UserInfo } from '@/utils/Permission';

export default {
  namespaced: true,

  state: {
    userInfo: new UserInfo({
      id: 0,
      username: '',
      name: '',
      avatar: '',
      roles: []
    })
  },

  mutations: {
    STORE_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  }
};
