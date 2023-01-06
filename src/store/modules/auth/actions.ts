import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {UserLogin} from '../../../types/interfaces';
import {logInRequest, createAccountRequest} from '../../../services/auth';
import {getCurrentFirebaseToken, logOut} from '../../../utils';

export const login = createAsyncThunk('LOG_IN', (values: UserLogin) =>
  logInRequest(values),
);

export const createAccount = createAsyncThunk(
  'CREATE_ACCOUNT',
  async (values: UserLogin) => {
    try {
      const response = await createAccountRequest(values);
      await getCurrentFirebaseToken(true);
      return response;
    } catch (error) {
      await logOut();
      throw error;
    }
  },
);

export const setIsCreatingAccount = createAction<boolean>(
  'SET_IS_CREATING_ACCOUNT',
);

export const setLogOut = createAction('SET_LOG_OUT');

export const setLogIn = createAction('SET_LOG_IN', (values: UserLogin) => ({
  payload: values,
}));
