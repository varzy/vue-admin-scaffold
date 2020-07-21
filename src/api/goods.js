import http from '@/utils/http';

export const reqFetchGoods = () =>
  http({
    url: '/goods',
    method: 'GET'
  });
