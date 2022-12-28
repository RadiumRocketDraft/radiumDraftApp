import React from 'react';
import {Text, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Input as InputNativeBase} from 'native-base';
import styles from './styles';

const Input = ({name, placeholder, onFocus, control, error, type}: any) => {
  return (
    <View style={styles.containerInput}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <InputNativeBase
            onChangeText={onChange}
            value={value}
            onFocus={onFocus}
            w={{
              base: '75%',
              md: '25%',
            }}
            placeholder={placeholder}
            autoCapitalize="none"
            type={type}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>This is required.</Text>}
    </View>
  );
};

export default Input;
