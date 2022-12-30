import React from 'react';
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
      name="Home"
      component={TabNavigator}
    />
    <Stack.Screen
      name="selectPlayers"
      component={SelectPlayers}
      options={({route}: {route: any}) => ({
        title: route.params.title,
      })}
    />
  </>
);
export default LoggedStack;
