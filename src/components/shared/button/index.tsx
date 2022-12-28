import React from 'react';
import {Button as ButtonNativeBase} from 'native-base';

const Button = ({text, handleSubmit, onSubmit}: any) => {
  return (
    <ButtonNativeBase onPress={handleSubmit(onSubmit)} w={'50%'}>
      {text}
    </ButtonNativeBase>
  );
};

export default Button;
