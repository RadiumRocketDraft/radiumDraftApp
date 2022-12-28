import React from 'react';
import {Stack} from 'native-base';
import {useForm, FieldName} from 'react-hook-form';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input';
import ButtonLine from '../../components/shared/buttonLine';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validations';

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
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = () => {
    navigation.navigate('Home');
  };

  const onFocusInput = (inputName: FieldName<ILogin>) => {
    clearErrors(inputName);
  };

  const handleSignUp = () => {
    navigation.navigate('CreateAccount');
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
        label="E-mail"
        onFocus={() => onFocusInput('email')}
        error={errors.email?.message}
      />
      <Input
        control={control}
        name="password"
        placeholder="Password"
        label="Password"
        onFocus={() => onFocusInput('password')}
        error={errors.password?.message}
        type="password"
      />
      <Button text="Login" handleSubmit={handleSubmit(onSubmit)} />
      <ButtonLine onPress={handleSignUp}>
        Don’t have an account? Sign up
      </ButtonLine>
    </Stack>
  );
};

export default Login;
