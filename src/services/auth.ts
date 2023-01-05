import {URL, api} from '../api';
import {UserLogin} from '../types/interfaces';

export const logInRequest = async (body: UserLogin) => {
  const response = await api.post(URL.auth.LOGIN, body);
  return response.data;
};

export const createAccountRequest = async (body: UserLogin) => {
  const response = await api.post(URL.auth.CREATE_ACCOUNT, body);
  return response.data;
};
