import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ButtonLine = ({children}: any) => {
  return (
    <TouchableOpacity onPress={() => console.log('buttonLine')}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLine;
