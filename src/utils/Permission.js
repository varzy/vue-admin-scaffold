import { ls } from '@/utils/storage';
import { reqLogin } from '@/api/auth';

export class UserInfo {
  constructor({ id, username, name, avatar, roles }) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.avatar = avatar;
    this.roles = roles;
  }
}

export default {
  isLogin() {
    return !!ls.get('user');
  },

  async login(loginData) {
    const { data } = await reqLogin(loginData);
    ls.set(
      'user',
      new UserInfo({
        id: data.id,
        username: data.username,
        name: data.name,
        avatar: data.avatar,
        roles: data.roles
      })
    );
  },

  logout() {
    ls.clear('user');
  }
};
