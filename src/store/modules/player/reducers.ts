import {createReducer, SerializedError} from '@reduxjs/toolkit';
import {IPlayer} from '../../../types/interfaces';
import {getPlayerAccount, getPlayers} from './actions';

export interface PlayerReducer {
  isLoading: boolean;
  players: IPlayer[];
  playerAccount?: IPlayer;
  error?: SerializedError;
}

export const playerReducer = createReducer<PlayerReducer>(
  {
    isLoading: false,
    players: [],
    playerAccount: undefined,
    error: undefined,
  },
  builder => {
    builder.addCase(getPlayers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.players = action.payload;
    });
    builder.addCase(getPlayerAccount.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPlayerAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getPlayerAccount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.playerAccount = action.payload;
    });
  },
);
