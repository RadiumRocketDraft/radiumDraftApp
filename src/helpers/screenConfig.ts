import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {AppNavOptions, Routes} from '../interfaces';

export const mainStackNavOption: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: '#FFFFFF',
  },
};

export const appNavOptions: AppNavOptions = {
  [Routes.LOG_IN]: undefined,
  [Routes.CREATE_ACCOUNT]: {
    headerTitle: '',
  },
  [Routes.HOME]: undefined,
  [Routes.SELECT_PLAYERS]: ({route}: {route: any}) => ({
    title: route.params.title,
  }),
};
