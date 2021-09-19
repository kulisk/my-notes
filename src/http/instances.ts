import axios from 'axios';
import { authInterceptor } from './interceptors';

export const authHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

authHttp.interceptors.request.use(authInterceptor, async (error) => {
  await Promise.reject(error);
});

export const notesHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'multipart/form-data' },
});

notesHttp.interceptors.request.use(authInterceptor, async (error) => {
  await Promise.reject(error);
});

notesHttp.interceptors.response.use((res) => res, (error) => {
  if (error.response.data.statusCode === 401) {
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  }
  throw new Error(error.response.data);
});

export const recoveryHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
