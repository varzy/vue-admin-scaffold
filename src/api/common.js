import http from '@/utils/http';

export const reqTestApi = () =>
  http({
    url: '/',
    method: 'GET'
  });
