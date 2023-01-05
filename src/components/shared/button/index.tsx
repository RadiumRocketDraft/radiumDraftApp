import React from 'react';
import {Button as ButtonNativeBase} from 'native-base';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  handleSubmit?: (event: GestureResponderEvent) => void;
  customStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  text,
  handleSubmit,
  customStyle,
  isLoading,
  isDisabled,
}: Props) => {
  return (
    <ButtonNativeBase
      onPress={handleSubmit}
      w={'50%'}
      style={[styles.bottomButton, customStyle]}
      isLoading={isLoading}
      isDisabled={isDisabled}>
      {text}
    </ButtonNativeBase>
  );
};

export default Button;
