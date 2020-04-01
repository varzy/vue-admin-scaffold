import { ls } from '@/utils/Storage';
import IUserInfo from '@/models/IUserInfo';

export default class Permission {
  /**
   *
   * @returns {boolean}
   */
  static isLogin() {
    return !!ls.get('user');
  }

  static login() {
    ls.set(
      'user',
      new IUserInfo({
        id: 1,
        username: 'username',
        name: '游客'
      })
    );
  }

  static logout() {
    ls.clear('user');
  }
}
