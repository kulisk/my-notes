import axios, { AxiosResponse } from 'axios';
import { LoginDataInterface } from '../interfaces';

export const authHttp = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const signIn = (data: LoginDataInterface): Promise<AxiosResponse> => authHttp.post('auth/login', data);
