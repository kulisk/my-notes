import axios, { AxiosResponse } from 'axios';
import { LoginDataInterface, SignUpDataInterface } from '../interfaces';
import { authInterceptor } from './interceptors';

export const authHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

authHttp.interceptors.request.use(authInterceptor, async (error) => {
  await Promise.reject(error);
});

export const signIn = (data: LoginDataInterface): Promise<AxiosResponse> => authHttp.post('auth/login', data);
export const signUp = (data: SignUpDataInterface): Promise<AxiosResponse> => authHttp.post('auth/register', data);

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
  }
  throw new Error(error.response.data.statusCode);
});

export const getAllNotesInPage = (page: number): Promise<AxiosResponse> => notesHttp.get(`notes/pages/${page}`);
export const deleteNote = (id: number): Promise<AxiosResponse> => notesHttp.delete(`notes/${id}`);
export const createNote = (data: FormData): Promise<AxiosResponse> => notesHttp.post('notes', data);
export const getOneNote = (id: number): Promise<AxiosResponse> => notesHttp.get(`notes/${id}`);
export const updateNote = (
  id: string,
  data: FormData,
): Promise<AxiosResponse> => notesHttp.patch(`notes/${id}`, data);
export const copyNote = (id: number): Promise<AxiosResponse> => notesHttp.post(`notes/${id}`);
export const searchNotes = (
  term: string,
  page: number,
): Promise<AxiosResponse> => notesHttp.get(`notes/search/${term}/${page}`);
export const getCountNotes = (): Promise<AxiosResponse> => notesHttp.get('notes/count/getCount');
export const getCountSearchNotes = (term: string): Promise<AxiosResponse> => notesHttp.get(`notes/count/getCount/${term}`);
