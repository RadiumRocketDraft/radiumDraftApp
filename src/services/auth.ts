import {URL, api} from '../api';
import {UserLogin} from '../types/interfaces';

export const logInRequest = async (body: UserLogin) => {
  const response = await api.post(URL.LOGIN, body);
  return response.data.payload;
};

export const createAccountRequest = async (body: UserLogin) => {
  const response = await api.post(URL.CREATE_ACCOUNT, body);
  return response.data.message;
};
