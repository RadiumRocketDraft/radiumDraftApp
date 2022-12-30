import React from 'react';
import {Routes} from '../../interfaces/routes';
import {CreateAccount, Login} from '../../screens';
import {Stack} from '../mainStack';

const LogInStack = () => (
  <>
    <Stack.Screen name={Routes.LOG_IN} component={Login} />
    <Stack.Screen
      options={{
        headerShown: true,
        headerBackVisible: true,
        headerTitle: '',
      }}
      name={Routes.CREATE_ACCOUNT}
      component={CreateAccount}
    />
  </>
);

export default LogInStack;
