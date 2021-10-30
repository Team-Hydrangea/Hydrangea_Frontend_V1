import axios, { AxiosError } from 'axios';
import { refreshToken } from '../api/refreshToken';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    if (error.response?.status === 401 || error.response?.status === 403) refreshToken();
    return Promise.reject(error);
  },
);
export default instance;
