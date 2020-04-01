/**
 * 随机字符串
 * @returns {string}
 */
export const randomStr = () =>
  Math.random()
    .toString(36)
    .slice(-8);
