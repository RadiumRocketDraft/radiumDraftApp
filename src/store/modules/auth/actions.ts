import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {logInRequest, creatAccountRequest} from '../../../services/auth';

export interface UserLogin {
  email: string;
  password: string;
}

export const login = createAsyncThunk('LOG_IN', (values: UserLogin) =>
  logInRequest(values),
);

export const createAccount = createAsyncThunk(
  'CREATE_ACCOUNT',
  (values: UserLogin) => creatAccountRequest(values),
);

export const setLogOut = createAction('SET_LOG_OUT');

export const setLogIn = createAction('SET_LOG_IN', (values: UserLogin) => ({
  payload: values,
}));
