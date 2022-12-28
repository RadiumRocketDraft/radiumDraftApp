import React from 'react';
import {Stack} from 'native-base';
import {useForm, FieldName} from 'react-hook-form';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input';
import ButtonLine from '../../components/shared/buttonLine';

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
        error={errors.email}
      />
      <Input
        control={control}
        name="password"
        placeholder="Password"
        label="Password"
        onFocus={() => onFocusInput('password')}
        error={errors.password}
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
