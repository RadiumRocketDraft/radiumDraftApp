import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useIsSignedIn from '../../hooks/isSignIn';
import LoggedStack from '../loggedStack';
import LogInStack from '../logInStack';
import {mainStackNavOption} from '../../helpers';

export const Stack = createNativeStackNavigator();

const MainStack = () => {
  const isSignedIn = useIsSignedIn();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={mainStackNavOption}>
      {isSignedIn ? <LoggedStack /> : <LogInStack />}
    </Stack.Navigator>
  );
};

export default MainStack;
