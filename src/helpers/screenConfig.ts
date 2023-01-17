import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {AppNavOptions, Routes} from 'types/interfaces';

export const mainStackNavOption: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: '#FFFFFF',
  },
};

export const appNavOptions: AppNavOptions = {
  [Routes.LOG_IN]: {
    headerShown: false,
  },
  [Routes.CREATE_ACCOUNT]: {
    headerTitle: '',
    headerBackTitle: 'Log In',
  },
  [Routes.HOME]: {
    headerShown: false,
  },
  [Routes.SELECT_PLAYERS]: ({route}) => ({
    title: route.params.title,
    headerBackTitleVisible: false,
  }),
  [Routes.DRAFT]: {
    headerTitle: '',
    headerBackTitle: 'Select Players',
  },
  [Routes.MATCH_RECEIPT]: {
    headerShown: false,
  },
};
