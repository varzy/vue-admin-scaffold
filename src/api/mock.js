import { asyncTimeout } from '@/utils/helpers';
import http from '../utils/http';

export const reqLogin = async data => {
  await asyncTimeout(600);

  const axiosResponseSchema = data => ({
    status: 200,
    statusText: 'OK',
    data
  });

  return data.username === 'admin' && data.password === '123456'
    ? axiosResponseSchema({
        status: 0,
        message: 'Success'
      })
    : axiosResponseSchema({
        status: 1,
        message: 'Failure'
      });
};

export const reqFetchCharacters = params =>
  http({
    url: `/character/`,
    method: 'GET',
    params
  });

export const reqShowCharacter = id =>
  http({
    url: `/character/${id}`,
    method: 'GET'
  });
