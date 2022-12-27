import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Login from './src/screens/login';
import Match from './src/screens/home';
import Profile from './src/screens/profile';
import History from './src/screens/history';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 95, paddingTop: 20},
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={focused ? 'blue' : 'grey'}
              size={28}
            />
          ),
        }}
        name="Match"
        component={Match}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="history"
              color={focused ? 'blue' : 'grey'}
              size={28}
            />
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? 'blue' : 'grey'}
              size={28}
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
