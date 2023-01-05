import {Stack} from 'native-base';
import React, {useState} from 'react';
import {FieldName, useForm} from 'react-hook-form';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './validation';
import {signUp} from '../../utils/firebase';
import {PlayerPosition} from '../../types/enums';
import Select from '../../components/shared/select';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '../../components/shared/slider';
import {
  authIsLoading,
  createAccount,
  setIsCreatingAccount,
} from '../../store/modules/auth';
import {tooltipContent} from './constants';
import styles from './styles';

interface ICreateAccount {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  skill: string;
  position: PlayerPosition;
}

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isLoadingFromServer = useSelector(authIsLoading);
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      skill: '',
      position: '' as PlayerPosition,
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async ({
    email,
    password,
    firstName,
    lastName,
    position,
    skill,
  }: ICreateAccount) => {
    try {
      setIsLoading(true);
      dispatch(setIsCreatingAccount(true));
      await signUp(email, password);
      dispatch(
        createAccount({firstName, lastName, position, skill: Number(skill)}),
      );
    } catch (e) {
      dispatch(setIsCreatingAccount(false));
      console.log('Error on CreateAccount onSubmit -', e);
    } finally {
      setIsLoading(false);
    }
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
        onFocus={() => onFocusInput('firstName')}
        error={errors.firstName?.message}
        autocapitalize={'words'}
        customStyle={styles.input}
      />
      <Input
        control={control}
        name="lastName"
        placeholder="Last name"
        onFocus={() => onFocusInput('lastName')}
        error={errors.lastName?.message}
        autocapitalize={'words'}
        customStyle={styles.input}
      />
      <Input
        control={control}
        name="email"
        placeholder="E-mail"
        onFocus={() => onFocusInput('email')}
        error={errors.email?.message}
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
      <Input
        control={control}
        name="repeatPassword"
        placeholder="Repeat password"
        onFocus={() => onFocusInput('repeatPassword')}
        error={errors.repeatPassword?.message}
        type="password"
        customStyle={styles.input}
      />
      <Slider
        control={control}
        name="skill"
        label="Skill Level"
        tooltipContent={tooltipContent}
      />
      <Select
        placeholder="Position"
        control={control}
        name="position"
        error={errors.position?.message}
        data={Object.values(PlayerPosition).map(label => ({
          value: label,
          label,
        }))}
      />
      <Button
        text="Sign up"
        handleSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading || isLoadingFromServer}
      />
    </Stack>
  );
};

export default CreateAccount;
