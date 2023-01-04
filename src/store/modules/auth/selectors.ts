import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const authData = (state: RootState) => state.auth;

export const authIsLoading = createSelector(
  [authData],
  values => values.isLoading,
);

export const authIsCreatingAccount = createSelector(
  [authData],
  values => values.isCreatingAccount,
);
