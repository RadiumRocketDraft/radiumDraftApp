import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {View} from 'react-native';

const DatePickerInput = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <DatePicker date={date} onDateChange={setDate} />
    </View>
  );
};

export default DatePickerInput;
