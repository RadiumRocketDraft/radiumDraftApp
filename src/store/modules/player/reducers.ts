import {createReducer} from '@reduxjs/toolkit';
import {PlayerPosition, PlayerStatus} from '../../../enums';
import {getPlayers} from './actions';

export interface PlayerReducer {
  isLoading: boolean;
  players: Players[];
}

export interface Players {
  firstName: string;
  lastName: string;
  skill: number;
  position: PlayerPosition;
  status: PlayerStatus;
  fidelity: number;
  matchsPlayed: number;
  userID?: string;
}

export const playerReducer = createReducer<PlayerReducer>(
  {
    isLoading: false,
    players: [],
  },
  builder => {
    builder.addCase(getPlayers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPlayers.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.players = action.payload;
    });
  },
);
