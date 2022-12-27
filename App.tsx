import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Login } from './src/screens/login';

const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};


export default App;
