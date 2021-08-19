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

export const getAllNotesInPage = (page: number): Promise<AxiosResponse> => notesHttp.get(`notes/pages/${page}`);
export const deleteNote = (id: number): Promise<AxiosResponse> => notesHttp.delete(`notes/${id}`);
export const createNote = (data: FormData): Promise<AxiosResponse> => notesHttp.post('notes', data);
export const getOneNote = (id: number): Promise<AxiosResponse> => notesHttp.get(`notes/${id}`);
export const updateNote = (id: string, data: FormData): Promise<AxiosResponse> => notesHttp.patch(`notes/${id}`, data);
export const copyNote = (id: number): Promise<AxiosResponse> => notesHttp.post(`notes/${id}`);
export const searchNotes = (term: string): Promise<AxiosResponse> => notesHttp.get(`notes/search/${term}`);
export const getCountNotes = (): Promise<AxiosResponse> => notesHttp.get('notes/count/getCount');
