import {api, URL} from 'api';
import {IPlayer} from 'types/interfaces';

export const getPlayersRequest = async () => {
  const response = await api.get(URL.player.GET_PLAYERS);
  return response.data.payload;
};

export const getPlayerRequest = async () => {
  const response = await api.get(URL.player.GET_PLAYER);
  return response.data;
};

export const updatePlayerRequest = async ({
  firstName,
  lastName,
  profileImage,
  position,
  skill,
}: Partial<IPlayer>) => {
  const response = await api.patch(URL.player.UPDATE_PLAYER, {
    firstName,
    lastName,
    profileImage,
    position,
    skill,
  });
  return response.data;
};
