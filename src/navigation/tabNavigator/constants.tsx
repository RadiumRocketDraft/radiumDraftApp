import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Routes} from '../../types/interfaces';

export const tabIcons = {
  [Routes.MATCH]: {
    Icon: <MaterialCommunityIcons name="soccer-field" size={28} color="grey" />,
  },
  [Routes.HISTORY]: {
    Icon: <MaterialCommunityIcons name="history" size={28} color="grey" />,
  },
  [Routes.PROFILE]: {
    Icon: <MaterialCommunityIcons name="account" size={28} color="grey" />,
  },
};

export const tabIconsFocused = {
  [Routes.MATCH]: {
    Icon: <MaterialCommunityIcons name="soccer-field" size={28} color="blue" />,
  },
  [Routes.HISTORY]: {
    Icon: <MaterialCommunityIcons name="history" size={28} color="blue" />,
  },
  [Routes.PROFILE]: {
    Icon: <MaterialCommunityIcons name="account" size={28} color="blue" />,
  },
};
