import React from 'react';
import {Button as ButtonNativeBase} from 'native-base';

const Button = ({text, handleSubmit}: any) => {
  return (
    <ButtonNativeBase onPress={handleSubmit} w={'50%'}>
      {text}
    </ButtonNativeBase>
  );
};

export default Button;
