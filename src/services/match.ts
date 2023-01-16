import {api, URL} from 'api';
import {navigationRef} from 'navigation/mainStack';
import {IPlayer, Routes} from 'types/interfaces';

export const getInactiveMatchsRequest = async () => {
  const response = await api.get(URL.match.GET_INACTIVE_MATCHES);
  return response.data;
};

export const getActiveMatchsRequest = async () => {
  const response = await api.get(URL.match.GET_ACTIVE_MATCHES);
  return response.data;
};

export interface MatchBody {
  firebaseUid: string;
  players: IPlayer[];
}

export const createMatchRequest = async (payload: MatchBody) => {
  const response = await api.post(URL.match.CREATE_MATCH, {payload});
  navigationRef.navigate(Routes.DRAFT, {players: payload});
  return response.data;
};

export const getMatchesRequest = async () => {
  const response = await api.get(URL.match.GET_MATCHES);
  return response.data;
};

interface ReDraftPayload {
  id: string;
  players: IPlayer[];
}

export const reDraftRequest = async (payload: ReDraftPayload) => {
  const {id, players} = payload;
  const response = await api.put(`${URL.match.RE_DRAFT(id)}`, {
    players,
  });
  return response.data;
};

interface UpdateMatchPayload {
  id: string;
  field: string;
  date: string;
  time: string;
  players: IPlayer;
}

export const updateMatchRequest = async (payload: UpdateMatchPayload) => {
  const {field, date, time, id} = payload;
  await api.put(`${URL.match.UPDATE_MATCH}${id}`, {
    time,
    field,
    date,
  });
  const response = await api.get(URL.match.GET_MATCHES);
  navigationRef.navigate(Routes.MATCH_RECEIPT, {matchData: payload});
  return response.data;
};
