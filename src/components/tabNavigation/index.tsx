import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Match, History, Profile} from '../../screens';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

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

export default TabNavigation;
