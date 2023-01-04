import React from 'react';
import DatePicker from 'react-native-date-picker';

interface DatePickerInputProps {
  date: Date;
  open: boolean;
  mode?: 'date' | 'time' | 'datetime' | undefined;
  onConfirm: () => void;
  onCancel: () => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  date,
  open,
  mode,
  onConfirm,
  onCancel,
}) => {
  return (
    <DatePicker
      modal
      date={date}
      open={open}
      mode={mode}
      onConfirm={onConfirm}
      onCancel={onCancel}
      locale="de"
    />
  );
};

export default DatePickerInput;

DatePickerInput.defaultProps = {
  mode: 'date',
};
