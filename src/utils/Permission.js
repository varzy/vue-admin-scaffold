import { ls } from '@/utils/Storage';
import { reqLogin } from '@/api/auth';

export default class Permission {
  static isLogin() {
    return !!ls.get('user');
  }

  static async login(loginData) {
    const { data } = await reqLogin(loginData);
    ls.set('user', {
      id: data.id,
      username: data.username,
      name: data.name,
      avatar: data.avatar
    });
  }

  static logout() {
    ls.clear('user');
  }
}
