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
  auth: {
    LOGIN: '/api/auth/login',
    CREATE_ACCOUNT: '/api/player',
  },
  player: {
    GET_PLAYER: '/api/player',
    UPDATE_PLAYER: '/api/player',
    GET_PLAYERS: '/api/player/all',
  },
  match: {
    GET_MATCHES: 'api/match/all',
    GET_INACTIVE_MATCHES: '/api/match/inactive',
    GET_ACTIVE_MATCHES: '/api/match/active',
    CREATE_MATCH: '/api/match',
    RE_DRAFT: (id: string) => `/api/match/${id}/draft`,
    UPDATE_MATCH: 'api/match/',
  },
};
