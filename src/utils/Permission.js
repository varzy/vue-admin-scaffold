import { ls } from '@/utils/Storage';
import IUserInfo from '@/models/IUserInfo';
import { reqLogin } from '@/api/mock';

export default class Permission {
  static isLogin() {
    return !!ls.get('user');
  }

  static async login(loginData) {
    const { data } = await reqLogin(loginData);

    if (data.status !== 0) {
      throw new Error('login_fail');
    }

    ls.set(
      'user',
      new IUserInfo({
        id: 1,
        username: 'username',
        name: 'Nickname'
      })
    );
  }

  static logout() {
    ls.clear('user');
  }
}
