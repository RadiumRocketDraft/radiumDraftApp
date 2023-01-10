import {createReducer} from '@reduxjs/toolkit';
import {MatchStatus} from 'types/enums';
import {getActiveMatches, getInactiveMatches, getMatches} from './actions';
import {IPlayer} from 'types/interfaces';
export interface MatchReducer {
  isLoading: boolean;
  activeMatches: Match[];
  inactiveMatches: Match[];
  matches: Match[];
}

interface Match {
  teamA: IPlayer[];
  teamB: IPlayer[];
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
    matches: [],
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
    builder.addCase(getMatches.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMatches.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.matches = action.payload;
    });
  },
);
