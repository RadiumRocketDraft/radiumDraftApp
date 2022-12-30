import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useIsSignedIn from '../../hooks/isSignIn';
import LoggedStack from '../loggedStack';
import LogInStack from '../logInStack';

export const Stack = createNativeStackNavigator();

const MainStack = () => {
  const isSignedIn = useIsSignedIn();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      {isSignedIn ? <LoggedStack /> : <LogInStack />}
    </Stack.Navigator>
  );
};

export default MainStack;
