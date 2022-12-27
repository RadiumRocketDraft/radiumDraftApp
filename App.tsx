import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Login from './src/screens/login';
import TabNavigation from './src/components/tabNavigation';

const Stack = createNativeStackNavigator();

const BottomNavigation = () => {
  return <TabNavigation />;
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={BottomNavigation} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
