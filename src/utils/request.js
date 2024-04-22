import axios from 'axios';
import {getToken} from './storageService';
import {BASE_URL} from './env'

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 5,
});

// 添加请求拦截器
service.interceptors.request.use((config) => {
  Object.assign(config.headers, { Authorization: `Bearer ${getToken()}` });
  return config;
}, (error) => {
  return Promise.reject(error);
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 全局校验
    if (!response.data.code) {
      return response.data.data
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;