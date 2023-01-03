import {api, URL} from '../api';

export const getPlayersRequest = async () => {
  const response = await api.get(URL.GET_PLAYERS);
  return response.data.payload;
};
