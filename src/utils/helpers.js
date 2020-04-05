/**
 * 随机字符串
 * @returns {string}
 */
export const randomStr = () =>
  Math.random()
    .toString(36)
    .slice(-8);

/**
 * 异步执行 setTimeout
 */
export const asyncTimeout = ms => new Promise(resolve => setTimeout(resolve, ms));
