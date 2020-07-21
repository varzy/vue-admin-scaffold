import Mock from 'mockjs';

Mock.mock('/api/goods', 'get', {
  'list|1-10': [
    {
      'id|+1': 1,
      email: '@EMAIL'
    }
  ]
});
