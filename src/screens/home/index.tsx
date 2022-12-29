import {Stack} from 'native-base';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Match = ({navigation}: any) => {
  const onPressMatch = (title: string, amountOfPlayers) => {
    navigation.navigate('selectPlayers', {
      title: title,
      amountOfPlayers: amountOfPlayers,
    });
  };
  return (
    <Stack
      space={2}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center">
      <TouchableOpacity onPress={() => onPressMatch('5 VS 5', 10)}>
        <Text>5 Vs 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressMatch('7 VS 7', 14)}>
        <Text>7 Vs 7</Text>
      </TouchableOpacity>
    </Stack>
  );
};

export default Match;
