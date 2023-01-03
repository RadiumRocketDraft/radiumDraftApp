import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {UserLogin} from '../../../types/interfaces';
import {logInRequest, createAccountRequest} from '../../../services/auth';

export const login = createAsyncThunk('LOG_IN', (values: UserLogin) =>
  logInRequest(values),
);

export const createAccount = createAsyncThunk(
  'CREATE_ACCOUNT',
  (values: UserLogin) => createAccountRequest(values),
);

export const setLogOut = createAction('SET_LOG_OUT');

export const setLogIn = createAction('SET_LOG_IN', (values: UserLogin) => ({
  payload: values,
}));
