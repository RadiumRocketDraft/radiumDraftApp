import React from 'react';
import {Stack, Button} from 'native-base';
import {useForm, FieldName} from 'react-hook-form';
import Input from '../../components/shared/input';

interface ILogin {
  email: string;
  password: string;
}

const Login = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('data', data);
    navigation.navigate('Home');
  };

  const onFocusInput = (inputName: FieldName<ILogin>) => {
    clearErrors(inputName);
  };
  return (
    <Stack
      space={4}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center">
      <Input
        control={control}
        name="email"
        placeholder="E-mail"
        onFocus={() => onFocusInput('email')}
        error={errors.email}
      />
      <Input
        control={control}
        name="password"
        placeholder="Password"
        onFocus={() => onFocusInput('password')}
        error={errors.password}
        type="password"
      />

      <Button onPress={handleSubmit(onSubmit)} w={'50%'}>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
