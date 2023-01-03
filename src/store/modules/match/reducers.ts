import {createReducer} from '@reduxjs/toolkit';
import {MatchStatus} from '../../../enums';
import {Players} from '../player';
import {getActiveMatches, getInactiveMatches} from './actions';

export interface MatchReducer {
  isLoading: boolean;
  activeMatches: Match[];
  inactiveMatches: Match[];
}

interface Match {
  teamA: Players[];
  teamB: Players[];
  date: Date;
  result?: Result;
  status: MatchStatus;
}

interface Result {
  score: string;
  winner: string;
}

export const matchReducer = createReducer<MatchReducer>(
  {
    isLoading: false,
    activeMatches: [],
    inactiveMatches: [],
  },
  builder => {
    builder.addCase(getActiveMatches.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getActiveMatches.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getActiveMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.activeMatches = action.payload;
    });
    builder.addCase(getInactiveMatches.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getInactiveMatches.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getInactiveMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inactiveMatches = action.payload;
    });
  },
);
