import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LoginDataInterface, SignUpDataInterface } from '../interfaces';

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('accessToken');
  const resultConfig = config;
  if (token) resultConfig.headers.Authorization = `Bearer ${token}`;
  return resultConfig;
};

export const authHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

authHttp.interceptors.request.use(authInterceptor, (error) => {
  Promise.reject(error).then();
});

export const signIn = (data: LoginDataInterface): Promise<AxiosResponse> => authHttp.post('auth/login', data);
export const signUp = (data: SignUpDataInterface): Promise<AxiosResponse> => authHttp.post('auth/register', data);

export const notesHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'multipart/form-data' },
});

notesHttp.interceptors.request.use(authInterceptor, (error) => {
  Promise.reject(error).then();
});

export const getAllNotes = (): Promise<AxiosResponse> => notesHttp.get('notes');
export const deleteNote = (id: number): Promise<AxiosResponse> => notesHttp.delete(`notes/${id}`);
