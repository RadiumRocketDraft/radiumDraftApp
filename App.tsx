import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from './src/screens/login';
import Match from './src/screens/home';
import Profile from './src/screens/profile';
import History from './src/screens/history';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      inactiveColor="#3e2465">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={focused ? 'blue' : 'grey'}
              size={26}
            />
          ),
        }}
        name="Match"
        component={Match}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="clipboard-text-clock"
              color={focused ? 'blue' : 'grey'}
              size={26}
            />
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={focused ? 'blue' : 'grey'}
              size={26}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
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
