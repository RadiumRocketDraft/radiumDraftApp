import {Stack} from 'native-base';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Match = ({navigation}: any) => {
  const onPressMatch = () => {
    navigation.navigate('selectPlayers');
  };
  return (
    <Stack
      space={2}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center">
      <TouchableOpacity onPress={onPressMatch}>
        <Text>5 Vs 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressMatch}>
        <Text>7 Vs 7</Text>
      </TouchableOpacity>
    </Stack>
  );
};

export default Match;
