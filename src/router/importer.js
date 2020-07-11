export default process.env.NODE_ENV === 'development'
  ? path => require(`@/views/${path}.vue`).default
  : path => () => import(`@/views/${path}.vue`);
