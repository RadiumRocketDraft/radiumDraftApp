import {Stack} from 'native-base';
import React from 'react';
import {FieldName, useForm} from 'react-hook-form';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validation';
import {signUp} from '../../utils/firebase';
interface ICreateAccount {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const CreateAccount = () => {
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm<ICreateAccount>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: ICreateAccount) => {
    signUp(data.email, data.password);
  };

  const onFocusInput = (inputName: FieldName<ICreateAccount>) => {
    clearErrors(inputName);
  };
  return (
    <Stack
      space={6}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center">
      <Input
        control={control}
        name="firstName"
        placeholder="First name"
        label="E-mail"
        onFocus={() => onFocusInput('firstName')}
        error={errors.firstName?.message}
      />
      <Input
        control={control}
        name="lastName"
        placeholder="Last name"
        label="LastName"
        onFocus={() => onFocusInput('lastName')}
        error={errors.lastName?.message}
      />
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
      <Input
        control={control}
        name="repeatPassword"
        placeholder="Repeat password"
        label="Repeat password"
        onFocus={() => onFocusInput('repeatPassword')}
        error={errors.repeatPassword?.message}
        type="password"
      />

      <Button text="Sign up" handleSubmit={handleSubmit(onSubmit)} />
    </Stack>
  );
};

export default CreateAccount;
