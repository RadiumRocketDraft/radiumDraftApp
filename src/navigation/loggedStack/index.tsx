import React from 'react';
import {appNavOptions} from '../../helpers';
import {Routes} from '../../interfaces/routes';
import {SelectPlayers} from '../../screens';
import {Stack} from '../mainStack';
import TabNavigator from '../tabNavigator';

const LoggedStack = () => (
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
);
export default LoggedStack;
