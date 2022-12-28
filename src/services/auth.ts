import {URL, api} from '../api';
import {UserLogin} from '../store/modules/auth';

export const logInRequest = async (body: UserLogin) => {
  const response = await api.post(URL.LOGIN, body);

  return response.data.payload;
};

export const creatAccountRequest = async (body: UserLogin) => {
  const response = await api.post(URL.CREATE_ACCCOUNT, body);
  return response.data.message;
};
