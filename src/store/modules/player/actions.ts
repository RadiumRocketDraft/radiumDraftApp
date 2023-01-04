import {createAsyncThunk} from '@reduxjs/toolkit';
import {getPlayersRequest} from '../../../services/player';

export const getPlayers = createAsyncThunk('GET_PLAYERS', getPlayersRequest);
