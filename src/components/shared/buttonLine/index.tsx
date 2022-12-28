import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  children: string;
  onPress: () => void;
}

const ButtonLine: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLine;
