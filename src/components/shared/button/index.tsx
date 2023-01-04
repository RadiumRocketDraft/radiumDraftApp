import React from 'react';
import {Button as ButtonNativeBase} from 'native-base';
import {Text} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  handleSubmit: () => void;
  isDisabled: boolean;
}

const Button: React.FC<Props> = ({text, handleSubmit, isDisabled}) => {
  return (
    <ButtonNativeBase
      style={styles.bottomButton}
      onPress={handleSubmit}
      isDisabled={isDisabled}
      w={'50%'}>
      <Text style={styles.text}>{text}</Text>
    </ButtonNativeBase>
  );
};

export default Button;
