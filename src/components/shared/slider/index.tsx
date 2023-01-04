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
  minLimit?: number;
  maxLimit?: number;
}

const Slider = <
  TFormValues extends {
    [key: string]: string;
  },
>({
  name,
  label,
  control,
  minLimit = 0,
  maxLimit = 100,
}: Props<TFormValues>) => {
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
            <Text mr={2}>{minLimit}</Text>
            <SliderNB
              onChange={onChange}
              value={Number(value)}
              minValue={minLimit}
              maxValue={maxLimit}
              accessibilityLabel={label}
              style={styles.slider}>
              <SliderNB.Track shadow={2}>
                <SliderNB.FilledTrack />
              </SliderNB.Track>
              <SliderNB.Thumb shadow={3} />
            </SliderNB>
            <Text ml={2}>{maxLimit}</Text>
          </Flex>
        )}
      />
    </View>
  );
};

export default Slider;
