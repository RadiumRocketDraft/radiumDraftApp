import {createAsyncThunk} from '@reduxjs/toolkit';
import {getPlayerRequest, getPlayersRequest} from '../../../services/player';
import {IPlayer} from '../../../types/interfaces';

export const getPlayers = createAsyncThunk<IPlayer[]>(
  'GET_PLAYERS',
  getPlayersRequest,
);
export const getPlayerAccount = createAsyncThunk<IPlayer>(
  'GET_PLAYER_ACCOUNT',
  getPlayerRequest,
);
