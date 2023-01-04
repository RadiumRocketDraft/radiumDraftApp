import React from 'react';
import {Button as ButtonNativeBase} from 'native-base';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

interface Props {
  text: string;
  handleSubmit?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({text, handleSubmit, style, isLoading, isDisabled}: Props) => {
  return (
    <ButtonNativeBase
      onPress={handleSubmit}
      w={'50%'}
      style={style}
      isLoading={isLoading}
      disabled={isDisabled}>
      {text}
    </ButtonNativeBase>
  );
};

export default Button;
