import { UserInfo } from '@/utils/permission';

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

  getters: {
    roleNames: state => state.userInfo.roles.map(role => role.name),
    hasPermission: (state, getters) => allowRoles =>
      getters.roleNames.some(role => allowRoles.includes(role))
  },

  mutations: {
    STORE_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  }
};
