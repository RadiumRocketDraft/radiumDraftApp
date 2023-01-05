import React, {useEffect} from 'react';
import {Stack} from 'native-base';
import {useForm, FieldName} from 'react-hook-form';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input';
import ButtonLine from '../../components/shared/buttonLine';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validations';
import {signIn} from '../../utils/firebase';
import {Routes, TNavigation} from '../../types/interfaces';
import styles from './styles';

interface ILogin {
  email: string;
  password: string;
}

const Login = ({navigation}: TNavigation<Routes.LOG_IN>) => {
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    setFocus,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit = (data: ILogin) => {
    signIn(data.email, data.password).then(() => {
      reset();
    });
  };

  const onFocusInput = (inputName: FieldName<ILogin>) => {
    clearErrors(inputName);
  };

  const handleSignUp = () => {
    navigation.navigate(Routes.CREATE_ACCOUNT);
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
        error={errors.email?.message}
        type="text"
        customStyle={styles.input}
      />
      <Input
        control={control}
        name="password"
        placeholder="Password"
        onFocus={() => onFocusInput('password')}
        error={errors.password?.message}
        type="password"
        customStyle={styles.input}
      />
      <Button text="Login" handleSubmit={handleSubmit(onSubmit)} />
      <ButtonLine onPress={handleSignUp}>
        No tenes cuenta? Crea una aquí
      </ButtonLine>
    </Stack>
  );
};

export default Login;
