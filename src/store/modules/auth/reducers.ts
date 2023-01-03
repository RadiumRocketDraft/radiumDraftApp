import {createReducer} from '@reduxjs/toolkit';
import {createAccount, login} from './actions';

export interface Auth {
  email: string;
  password: string;
  token: string;
  isLoading: boolean;
  error?: string;
  message?: string;
}

export const authReducer = createReducer<Auth>(
  {
    email: '',
    isLoading: false,
    password: '',
    token: '',
    error: '',
    message: '',
  },
  builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
    });
    builder.addCase(createAccount.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createAccount.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });
  },
);
