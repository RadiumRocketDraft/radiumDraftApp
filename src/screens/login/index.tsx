import React from 'react';
import {Stack, Input, Button} from 'native-base';
import {useForm, Controller} from 'react-hook-form';

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    // formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ILogin) => {
    console.log(data);
  };
  return (
    <Stack
      space={4}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center">
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <Input
            onChangeText={onChange}
            value={value}
            w={{
              base: '75%',
              md: '25%',
            }}
            mb={15}
            placeholder="E-mail"
            autoCapitalize="none"
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <Input
            onChangeText={onChange}
            value={value}
            type="password"
            placeholder="Password"
            autoCapitalize="none"
            w={{
              base: '75%',
              md: '25%',
            }}
            mb={15}
          />
        )}
        name="password"
      />

      <Button onPress={handleSubmit(onSubmit)} w={'50%'}>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
