import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {DATA_MOCK} from '../screens/selectPlayers/MOCK';

type TPlayers = typeof DATA_MOCK;

import {Routes} from './routes';

export type StackParamList = {
  [Routes.LOG_IN]: undefined;
  [Routes.CREATE_ACCOUNT]: undefined;
  [Routes.HOME]: undefined;
  [Routes.SELECT_PLAYERS]: {
    title: string;
    playersAmount: number;
  };
  [Routes.MATCH]: undefined;
  [Routes.HISTORY]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.DRAFT]: {
    teamA: TPlayers;
    teamB: TPlayers;
  };
};

export type TNavigation<R extends keyof StackParamList> = {
  route: TRoute<R>;
  navigation: NativeStackNavigationProp<StackParamList, R>;
};

export type TUseNavigation<R extends keyof StackParamList> =
  NativeStackNavigationProp<StackParamList, R>;

export type TRoute<R extends keyof StackParamList> = RouteProp<
  StackParamList,
  R
>;

export type AppNavOptions = {
  [K in Routes]?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<StackParamList, K>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
};
