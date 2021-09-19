import { AxiosResponse } from 'axios';
import {
  LoginDataInterface, ResetPasswordInterface, SendEmailInterface, SignUpDataInterface,
} from '../interfaces';
import { authHttp, notesHttp, recoveryHttp } from './instances';

export const signIn = (data: LoginDataInterface): Promise<AxiosResponse> => authHttp.post('auth/login', data);
export const signUp = (data: SignUpDataInterface): Promise<AxiosResponse> => authHttp.post('auth/register', data);

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

export const sendEmail = (data: SendEmailInterface): Promise<AxiosResponse> => recoveryHttp.post('recovery', data);
export const checkToken = (token: string): Promise<AxiosResponse> => recoveryHttp.get(`recovery/${token}`);
export const resetPassword = (
  token: string,
  data: ResetPasswordInterface,
): Promise<AxiosResponse> => recoveryHttp.delete(`recovery/${token}`, {
  data,
});
