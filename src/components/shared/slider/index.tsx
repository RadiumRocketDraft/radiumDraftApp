import React from 'react';
import {Flex, Slider as SliderNB, Text, View} from 'native-base';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from 'react-hook-form';
import CustomTooltip from '../../tooltip';
import styles from './styles';

interface Props<TFormValues extends FieldValues> {
  name: Path<UnPackAsyncDefaultValues<TFormValues>>;
  label?: string;
  control: Control<TFormValues>;
}

const Slider = <
  TFormValues extends {
    [key: string]: string;
  },
>({
  name,
  label,
  control,
}: Props<TFormValues>) => {
  const LIMIT_VALUES = ['0', '100'];
  return (
    <View w="75%">
      <View style={styles.tooltipContainer}>
        <Text>{label}</Text>
        <CustomTooltip
          title="Skill Functionality"
          description="The skill level will help us to leverage the draft better between both teams"
        />
      </View>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <Flex direction="row">
            <Text mr={2}>{LIMIT_VALUES[0]}</Text>
            <SliderNB
              onChange={onChange}
              value={Number(value)}
              defaultValue={70}
              minValue={0}
              maxValue={100}
              accessibilityLabel="skill level"
              style={styles.slider}>
              <SliderNB.Track shadow={2}>
                <SliderNB.FilledTrack />
              </SliderNB.Track>
              <SliderNB.Thumb shadow={3} />
            </SliderNB>
            <Text ml={2}>{LIMIT_VALUES[1]}</Text>
          </Flex>
        )}
      />
    </View>
  );
};

export default Slider;
