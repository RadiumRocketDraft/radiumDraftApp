import React from 'react';
import {Routes} from '../../interfaces/routes';
import {SelectPlayers} from '../../screens';
import {Stack} from '../mainStack';
import TabNavigator from '../tabNavigator';

const LoggedStack = () => (
  <>
    <Stack.Screen
      options={{
        headerShown: true,
        headerBackVisible: false,
      }}
      name={Routes.HOME}
      component={TabNavigator}
    />
    <Stack.Screen
      name={Routes.SELECT_PLAYERS}
      component={SelectPlayers}
      options={({route}: {route: any}) => ({
        title: route.params.title,
      })}
    />
  </>
);
export default LoggedStack;
