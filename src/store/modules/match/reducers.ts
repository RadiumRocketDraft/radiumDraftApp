import {createReducer, SerializedError} from '@reduxjs/toolkit';
import {MatchStatus} from 'types/enums';
import {
  createMatch,
  getActiveMatches,
  getInactiveMatches,
  getMatches,
  reDraft,
  updateMatch,
} from './actions';
import {IPlayer} from 'types/interfaces';

export interface Match {
  teamA: IPlayer[];
  teamB: IPlayer[];
  date?: Date;
  result?: Result;
  status?: MatchStatus;
  field?: string;
}

export interface CurrentMatch {
  _id: string;
  teamA: IPlayer[];
  teamB: IPlayer[];
  skillAvgA: number;
  skillAvgB: number;
}

export interface MatchReducer {
  isLoading: boolean;
  activeMatches: Match[];
  inactiveMatches: Match[];
  matches: Match[];
  error: SerializedError | undefined;
  currentMatch?: CurrentMatch;
}

interface Result {
  teamA: number;
  teamB: number;
  winner: 'teamA' | 'teamB';
}

export const matchReducer = createReducer<MatchReducer>(
  {
    isLoading: false,
    activeMatches: [],
    currentMatch: undefined,
    inactiveMatches: [],
    matches: [],
    error: undefined,
  },
  builder => {
    builder.addCase(createMatch.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createMatch.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(createMatch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentMatch = action.payload;
    });
    builder.addCase(reDraft.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(reDraft.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(reDraft.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentMatch = action.payload;
    });
    builder.addCase(getActiveMatches.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getActiveMatches.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(getActiveMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.activeMatches = action.payload;
    });
    builder.addCase(getInactiveMatches.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getInactiveMatches.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(getInactiveMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inactiveMatches = action.payload;
    });
    builder.addCase(getMatches.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMatches.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(getMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.matches = action.payload;
    });
    builder.addCase(updateMatch.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateMatch.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(updateMatch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.matches = action.payload;
    });
  },
);
