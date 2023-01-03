import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  cancelMatchRequest,
  createMatchRequest,
  finishMatchRequest,
  getActiveMatchsRequest,
  getInactiveMatchsRequest,
} from '../../../services/match';

export const getActiveMatches = createAsyncThunk(
  'GET_ACTIVE_MATCHES',
  getActiveMatchsRequest,
);

export const getInactiveMatches = createAsyncThunk(
  'GET_INACTIVE_MATCHES',
  getInactiveMatchsRequest,
);

export const createMatch = createAsyncThunk('CREATE_MATCH', createMatchRequest);

export const finishMatch = createAsyncThunk('FINISH_MATCH', finishMatchRequest);

export const cancelMatch = createAsyncThunk('CANCELLED_MATCH', cancelMatchRequest);

