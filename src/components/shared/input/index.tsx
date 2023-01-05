import React, {useState, useMemo} from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableOpacity,
} from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from 'react-hook-form';
import {Input as InputNativeBase, Text, View} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  w?: {
    base: string;
    md: string;
  };
  label?: string;
  editable?: boolean;
  onPressIn?: () => void;
  valueInput?: string;
}

const Input = <
  TFormValues extends {
    [key: string]: string;
  },
>({
  name,
  placeholder,
  onFocus = () => null,
  control,
  error,
  type = 'text',
  autocapitalize = 'none',
  rightElement,
  w = {
    base: '75%',
    md: '25%',
  },
  label = '',
  editable = true,
  onPressIn = () => null,
  valueInput = '',
}: Props<TFormValues>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = useMemo(
    () => (type === 'password' && isPasswordVisible ? 'text' : type),
    [type, isPasswordVisible],
  );
  return (
    <View style={styles.containerInput}>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <InputNativeBase
            onChangeText={onChange}
            value={value}
            onFocus={onFocus}
            w={{
              base: w?.base,
              md: w?.md,
            }}
            placeholder={placeholder}
            autoCapitalize={autocapitalize}
            type={inputType}
            editable={editable}
            onPressIn={onPressIn}
            defaultValue={valueInput}
            InputRightElement={
              type === 'password' ? (
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  style={styles.icon}>
                  <MaterialCommunityIcons
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    size={28}
                    color="black"
                  />
                </TouchableOpacity>
              ) : (
                rightElement
              )
            }
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
