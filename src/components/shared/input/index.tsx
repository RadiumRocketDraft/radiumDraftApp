import React from 'react';
import {Text, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Input as InputNativeBase} from 'native-base';
import styles from './styles';

interface Props {
  name: string;
  placeholder: string;
  onFocus?: any;
  control: any;
  error: any;
  type: any;
  w?: {
    base: string;
    md: string;
  };
  label?: string;
  editable?: boolean;
  onPressIn?: () => void;
  valueInput?: any;
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  onFocus,
  control,
  error,
  type,
  w,
  label,
  editable,
  onPressIn,
  valueInput,
}: any) => {
  return (
    <View style={styles.containerInput}>
      <Text>{label}</Text>
      <Controller
        control={control}
        // rules={{
        //   required: true,
        // }}
        render={({field: {onChange, value}}) => (
          <InputNativeBase
            onChangeText={onChange}
            value={value}
            onFocus={onFocus}
            w={{
              base: w.base,
              md: w.md,
            }}
            placeholder={placeholder}
            autoCapitalize="none"
            type={type}
            editable={editable}
            onPressIn={onPressIn}
            defaultValue={valueInput}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

Input.defaultProps = {
  onFocus: () => null,
  w: {
    base: '75%',
    md: '25%',
  },
  label: '',
  editable: true,
  onPressIn: () => null,
  valueInput: '',
};
