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
  //LOGIN
  LOGIN: '/api/auth/login',
  CREATE_ACCCOUNT: '/api/auth/',
  //PLAYER
  GET_PLAYERS: 'api/player',
  //MATCH
  GET_INACTIVE_MATCHES: 'api/match/inactive',
  GET_ACTIVE_MATCHES: 'api/match/active',
  CREATE_MATCH: 'api/match',
};
