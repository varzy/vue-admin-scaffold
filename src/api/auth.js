import { asyncTimeout } from '@/utils/helpers';

export const reqLogin = async data => {
  await asyncTimeout(600);

  if (data.username === 'admin' && data.password === '123456') {
    return {
      status: 200,
      data: {
        id: 1,
        username: 'admin',
        name: 'Admin',
        avatar:
          'https://pic1.zhimg.com/80/v2-32d9ebc9241510a4d84c12c61f13f799_720w.jpg?source=1940ef5c'
      }
    };
  } else {
    return Promise.reject({
      status: 500,
      data: {
        code: 'login_fail',
        message: 'login fail'
      }
    });
  }
};
