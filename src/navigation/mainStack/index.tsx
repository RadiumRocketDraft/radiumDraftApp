import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useIsSignedIn from 'hooks/useIsSignIn';
import {appNavOptions, mainStackNavOption} from 'helpers';
import {Routes, StackParamList} from 'types/interfaces';
import TabNavigator from '../tabNavigator';
import {
  CreateAccount,
  Login,
  SelectPlayers,
  Draft,
  MatchReceipt,
} from 'screens';
import LoadingSpinner from 'components/shared/activityIndicator';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

export const Stack = createNativeStackNavigator<StackParamList>();
export const navigationRef = createNavigationContainerRef<StackParamList>();

const MainStack = () => {
  const isSignedIn = useIsSignedIn();

  if (isSignedIn == null) return <LoadingSpinner />;

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={mainStackNavOption}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name={Routes.HOME}
              component={TabNavigator}
              options={appNavOptions[Routes.HOME]}
            />
            <Stack.Screen
              name={Routes.SELECT_PLAYERS}
              component={SelectPlayers}
              options={appNavOptions[Routes.SELECT_PLAYERS]}
            />
            <Stack.Screen
              name={Routes.DRAFT}
              component={Draft}
              options={appNavOptions[Routes.DRAFT]}
            />
            <Stack.Screen
              name={Routes.MATCH_RECEIPT}
              component={MatchReceipt}
              options={appNavOptions[Routes.MATCH_RECEIPT]}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={Routes.LOG_IN}
              component={Login}
              options={appNavOptions[Routes.LOG_IN]}
            />
            <Stack.Screen
              name={Routes.CREATE_ACCOUNT}
              component={CreateAccount}
              options={appNavOptions[Routes.CREATE_ACCOUNT]}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
