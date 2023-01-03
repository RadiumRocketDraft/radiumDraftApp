import React from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from 'react-hook-form';
import {Input as InputNativeBase, Text, View} from 'native-base';
import styles from './styles';

interface Props<TFormValues extends FieldValues> {
  name: Path<UnPackAsyncDefaultValues<TFormValues>>;
  placeholder?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  control: Control<TFormValues>;
  error?: string;
  type?: 'text' | 'password';
  autocapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  rightElement?: JSX.Element | JSX.Element[];
}

const Input = <
  TFormValues extends {
    [key: string]: string;
  },
>({
  name,
  placeholder,
  onFocus,
  control,
  error,
  type = 'text',
  autocapitalize = 'none',
  rightElement,
}: Props<TFormValues>) => {
  return (
    <View style={styles.containerInput}>
      <Controller
        control={control}
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
            autoCapitalize={autocapitalize}
            type={type}
            InputRightElement={rightElement}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
