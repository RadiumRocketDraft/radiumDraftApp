import {api, URL} from '../api';

export const getPlayersRequest = async () => {
  const response = await api.get(URL.player.GET_PLAYERS);
  return response.data.payload;
};

export const getPlayerRequest = async () => {
  const response = await api.get(URL.player.GET_PLAYER);
  return response.data;
};
