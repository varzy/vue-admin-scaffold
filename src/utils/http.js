import Axios from 'axios';
import { message as AMessage } from 'ant-design-vue';

const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API,
  timeout: 30000,
  withCredentials: true,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json; charset=utf-8' }
});

instance.interceptors.request.use(config => {
  config.showError = Object.prototype.hasOwnProperty.call(config, 'showError')
    ? config.showError
    : true;
  config.errorMsg = Object.prototype.hasOwnProperty.call(config, 'errorMsg')
    ? config.errorMsg
    : `The network is abnormal, please try again later.`;

  return config;
});

instance.interceptors.response.use(
  res => res,
  err => {
    const res = err.response;

    // http: 404
    if (+res.status === 404) {
      AMessage.open({ content: '未找到资源', type: 'error' });
    }
    // http: 504
    else if (+res.status === 504) {
      AMessage.open({ content: '网络连接超时', type: 'error' });
    }
    // 其他异常时，如果接口允许显示异常，则显示预设的异常信息
    else if (res.config && res.config.showError) {
      AMessage.open({ content: res.config.errorMsg, type: 'error' });
    }

    return Promise.reject(err.response);
  }
);

export default instance;
