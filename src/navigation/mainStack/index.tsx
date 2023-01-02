import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useIsSignedIn from '../../hooks/isSignIn';
import {appNavOptions, mainStackNavOption} from '../../helpers';
import {Routes, StackParamList} from '../../interfaces';
import TabNavigator from '../tabNavigator';
import {CreateAccount, Login, SelectPlayers} from '../../screens';

export const Stack = createNativeStackNavigator<StackParamList>();

const MainStack = () => {
  const isSignedIn = useIsSignedIn();
  return (
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
  );
};

export default MainStack;
