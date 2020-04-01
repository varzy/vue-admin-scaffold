import http from '@/utils/http';

export const reqTestFetchingApi = (username, params) =>
  http({
    url: `/users/${username}/repos`,
    method: 'GET',
    params
  });
