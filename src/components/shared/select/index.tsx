import {CheckIcon, FormControl, Select as NBSelect, Text} from 'native-base';
import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from 'react-hook-form';
import styles from './styles';

interface dataStructure {
  label: string;
  value: string;
}

interface Props<TFormValues extends FieldValues> {
  error?: string;
  placeholder: string;
  required?: boolean;
  data: dataStructure[];
  control: Control<TFormValues>;
  name: Path<UnPackAsyncDefaultValues<TFormValues>>;
}

const Select = <
  TFormValues extends {
    [key: string]: string;
  },
>({
  error,
  placeholder,
  required,
  data,
  control,
  name,
}: Props<TFormValues>) => {
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <FormControl
          w="3/4"
          maxW="300"
          style={styles.containerInput}
          isRequired={required}
          isInvalid={!!error}>
          <NBSelect
            onValueChange={onChange}
            selectedValue={value}
            accessibilityLabel={placeholder}
            placeholder={placeholder}
            _selectedItem={{
              bg: 'primary.500',
              endIcon: <CheckIcon size={6} />,
            }}
            mt="1">
            {data.map(item => (
              <NBSelect.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </NBSelect>
          {error && <Text style={styles.error}>{error}</Text>}
        </FormControl>
      )}
      name={name}
    />
  );
};

export default Select;
