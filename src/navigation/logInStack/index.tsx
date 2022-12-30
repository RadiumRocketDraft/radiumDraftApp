import React from 'react';
import {appNavOptions} from '../../helpers';
import {Routes} from '../../interfaces/routes';
import {CreateAccount, Login} from '../../screens';
import {Stack} from '../mainStack';

const LogInStack = () => (
  <>
    <Stack.Screen name={Routes.LOG_IN} component={Login} />
    <Stack.Screen
      name={Routes.CREATE_ACCOUNT}
      component={CreateAccount}
      options={appNavOptions[Routes.CREATE_ACCOUNT]}
    />
  </>
);

export default LogInStack;
