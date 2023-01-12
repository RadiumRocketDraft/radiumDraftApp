import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  createMatchRequest,
  getActiveMatchsRequest,
  getInactiveMatchsRequest,
  getMatchesRequest,
} from 'services/match';

export const getActiveMatches = createAsyncThunk(
  'GET_ACTIVE_MATCHES',
  getActiveMatchsRequest,
);

export const getInactiveMatches = createAsyncThunk(
  'GET_INACTIVE_MATCHES',
  getInactiveMatchsRequest,
);

export const getMatches = createAsyncThunk('GET_MATCHES', getMatchesRequest);

export const createMatch = createAsyncThunk('CREATE_MATCH', createMatchRequest);
