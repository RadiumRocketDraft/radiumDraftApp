import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Match, History, Profile} from '../../screens';
import {Routes} from '../../interfaces/routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
        name={Routes.MATCH}
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
        name={Routes.HISTORY}
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
        name={Routes.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
