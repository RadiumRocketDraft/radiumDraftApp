import {api, URL} from '../api';

export const getInactiveMatchsRequest = async () => {
  const response = await api.get(URL.GET_INACTIVE_MATCHES);
  return response.data;
};

export const getActiveMatchsRequest = async () => {
  const response = await api.get(URL.GET_ACTIVE_MATCHES);
  return response.data;
};

interface MatchBody {
  teamA: string[];
  teamB: string[];
  date: Date;
}

export const createMatchRequest = async (body: MatchBody) => {
  const response = await api.post(URL.CREATE_MATCH, body);
  return response.data;
};
