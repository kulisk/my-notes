import { AxiosRequestConfig } from 'axios';

export const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('accessToken');
  const resultConfig = config;
  if (token) resultConfig.headers.Authorization = `Bearer ${token}`;
  return resultConfig;
};
