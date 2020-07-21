import http from '@/utils/http';

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
