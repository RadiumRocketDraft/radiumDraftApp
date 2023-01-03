import {api, URL} from '../api';

export const getInactiveMatchsRequest = async () => {
  const response = await api.get(URL.GET_INACTIVE_MATCHES);
  return response.data.payload;
};

export const getActiveMatchsRequest = async () => {
  const response = await api.get(URL.GET_ACTIVE_MATCHES);
  return response.data.payload;
};

interface MatchBody {
  teamA: string[];
  teamB: string[];
  date: Date;
}

export const createMatchRequest = async (body: MatchBody) => {
  const response = await api.post(URL.CREATE_MATCH, body);
  return response.data.payload;
};

export const finishMatchRequest = async (id: string) => {
  const response = await api.patch(`${URL.FINISH_MATCH}${id}`);
  return response.data.payload;
};

export const cancelMatchRequest = async (id: string) => {
  const response = await api.patch(`${URL.CANCEL_MATCH}${id}`);
  return response.data.payload;
};
