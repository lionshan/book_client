import axios from 'axios';
import {getToken} from './storageService';
import {BASE_URL} from './env'

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 5,
});

// Add a request interceptor
service.interceptors.request.use((config) => {
  Object.assign(config.headers, { Authorization: `Bearer ${getToken()}` });
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default service;