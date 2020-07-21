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

  get roleNames() {
    return this.roles.map(role => role.name);
  }
}

export default class Permission {
  static isLogin() {
    return !!ls.get('user');
  }

  static async login(loginData) {
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
  }

  static logout() {
    ls.clear('user');
  }
}
