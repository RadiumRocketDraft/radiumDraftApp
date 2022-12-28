import axios from 'axios';
import Config from 'react-native-config';

const BASE_SETTINGS = {
  timeout: 0,
  headers: {
    'content-type': 'application/json',
  },
  baseURL: Config.APP_API_URL,
};

export const api = axios.create({
  ...BASE_SETTINGS,
});

export const URL = {
  LOGIN: '/api/auth/login',
  CREATE_ACCCOUNT: '/api/auth/',
};
