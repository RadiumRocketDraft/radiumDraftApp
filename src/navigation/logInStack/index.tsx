import React from 'react';
import {CreateAccount, Login} from '../../screens';
import {Stack} from '../mainStack';

const LogInStack = () => (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
      options={{
        headerShown: true,
        headerBackVisible: true,
        headerTitle: '',
      }}
      name="CreateAccount"
      component={CreateAccount}
    />
  </>
);

export default LogInStack;
