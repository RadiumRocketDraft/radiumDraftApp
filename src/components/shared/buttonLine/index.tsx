import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  children: string;
  onPress: () => void;
  customStyles: any;
}

const ButtonLine: React.FC<Props> = ({children, onPress, customStyles}) => {
  return (
    <TouchableOpacity style={customStyles} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLine;
