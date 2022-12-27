import React from 'react';
import {Stack, Input, Button} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {Text, View} from 'react-native';
import styles from './styles';

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
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = () => {
    navigation.navigate('Home');
  };

  const onFocusInput = (inputName: any) => {
    clearErrors(inputName);
  };
  return (
    <Stack
      space={4}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center">
      <View style={styles.containerInput}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <Input
              onChangeText={onChange}
              value={value}
              onFocus={() => onFocusInput('email')}
              w={{
                base: '75%',
                md: '25%',
              }}
              placeholder="E-mail"
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.error}>This is required.</Text>}
      </View>
      <View style={styles.containerInput}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <Input
              onChangeText={onChange}
              value={value}
              onFocus={() => onFocusInput('password')}
              type="password"
              placeholder="Password"
              autoCapitalize="none"
              w={{
                base: '75%',
                md: '25%',
              }}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.error}>This is required.</Text>}
      </View>

      <Button onPress={handleSubmit(onSubmit)} w={'50%'}>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
