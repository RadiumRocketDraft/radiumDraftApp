import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, Action} from 'redux';
import {authReducer} from './modules/auth';
import Config from 'react-native-config';
import {playerReducer} from './modules/player';
import {matchReducer} from './modules/match';

const mainReducer = (state: any, action: Action) => {
  if (action.type === 'SET_LOG_OUT') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

const reducers = combineReducers({
  auth: authReducer,
  player: playerReducer,
  match: matchReducer,
});

export type RootState = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: mainReducer,
  devTools: Config.NODE_ENV !== 'production',
});

export default store;
