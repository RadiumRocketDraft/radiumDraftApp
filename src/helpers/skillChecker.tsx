import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const skillChecker = (skill: number) => {
  if (skill >= 80)
    return <FeatherIcon size={25} color="#1e91d6" name="arrow-up" />;
  if (skill >= 60)
    return <FeatherIcon size={25} color="#8fc93a" name="arrow-up-right" />;
  if (skill >= 40)
    return <FeatherIcon size={25} color="#e4cc37" name="arrow-right" />;
  if (skill >= 20)
    return <FeatherIcon size={25} color="#e18335" name="arrow-down-right" />;

  return <FeatherIcon size={25} color="red" name="arrow-down" />;
};
