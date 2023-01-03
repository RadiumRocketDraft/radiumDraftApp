import {InfoIcon, Popover, Stack, View} from 'native-base';
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
import {authIsLoading, createAccount} from '../../store/modules/auth';

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
  const dispatch = useDispatch();
  const isLoadingFromServer = useSelector(authIsLoading);
  const [isLoading, setIsLoading] = useState(false);
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
      await signUp(email, password);
      dispatch(createAccount({firstName, lastName, position, skill: +skill}));
    } catch (e) {
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
      />
      <Input
        control={control}
        name="lastName"
        placeholder="Last name"
        onFocus={() => onFocusInput('lastName')}
        error={errors.lastName?.message}
      />
      <Input
        control={control}
        name="email"
        placeholder="E-mail"
        onFocus={() => onFocusInput('email')}
        error={errors.email?.message}
      />
      <Input
        control={control}
        name="password"
        placeholder="Password"
        onFocus={() => onFocusInput('password')}
        error={errors.password?.message}
        type="password"
      />
      <Input
        control={control}
        name="repeatPassword"
        placeholder="Repeat password"
        onFocus={() => onFocusInput('repeatPassword')}
        error={errors.repeatPassword?.message}
        type="password"
      />
      <Input
        control={control}
        name="skill"
        placeholder="Skill Score"
        onFocus={() => onFocusInput('skill')}
        error={errors.skill?.message}
        rightElement={
          <View m={2}>
            <Popover trigger={props => <InfoIcon {...props} />}>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.CloseButton />
                <Popover.Header>Skill Functionality</Popover.Header>
                <Popover.Body>
                  The skill level will help us to leverage the draft better
                  between both teams
                </Popover.Body>
              </Popover.Content>
            </Popover>
          </View>
        }
      />
      <Select
        placeholder="Position"
        control={control}
        name="position"
        error={errors.position?.message}
        data={Object.keys(PlayerPosition).map(label => ({
          value: label,
          label: label.slice(0, 1).toUpperCase() + label.slice(1),
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
