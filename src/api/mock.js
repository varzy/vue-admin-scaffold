import { asyncTimeout } from '@/utils/helpers';

const axiosResponseSchema = data => ({
  status: 200,
  statusText: 'OK',
  data
});

export const reqLogin = async data => {
  await asyncTimeout(600);

  return data.username === 'admin' && data.password === 'qaz123'
    ? axiosResponseSchema({
        status: 0,
        message: 'Success'
      })
    : axiosResponseSchema({
        status: 1,
        message: 'Failure'
      });
};
