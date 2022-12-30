import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {Routes} from './routes';

export type StackParamList = {
  [Routes.LOG_IN]: undefined;
  [Routes.CREATE_ACCOUNT]: undefined;
  [Routes.HOME]: undefined;
  [Routes.SELECT_PLAYERS]: undefined;
  [Routes.MATCH]: undefined;
  [Routes.HISTORY]: undefined;
  [Routes.PROFILE]: undefined;
};

export type TNavigation<R extends keyof StackParamList> = {
  route: TRoute<R>;
  navigation: NativeStackNavigationProp<StackParamList, R>;
};

export type TRoute<R extends keyof StackParamList> = RouteProp<
  StackParamList,
  R
>;

export type AppNavOptions = {
  [K in Routes]?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, K>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
};
