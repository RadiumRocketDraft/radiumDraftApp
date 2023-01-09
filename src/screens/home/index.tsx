import {Stack} from 'native-base';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Routes, TNavigation} from 'types/interfaces';

const Match = ({navigation}: TNavigation<Routes.MATCH>) => {
  const onPressMatch = (title: string, playersAmount: number) => {
    navigation.navigate(Routes.SELECT_PLAYERS, {
      title,
      playersAmount,
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
