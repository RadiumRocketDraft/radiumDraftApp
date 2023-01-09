import React, {useState} from 'react';
import {Flex, Slider as SliderNB, Text, View} from 'native-base';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from 'react-hook-form';
import CustomTooltip from 'components/tooltip';
import styles from './styles';

interface ITooltip {
  title: string;
  description: string;
}

interface Props<TFormValues extends FieldValues> {
  name: Path<UnPackAsyncDefaultValues<TFormValues>>;
  label?: string;
  control: Control<TFormValues>;
  minLimit?: number;
  maxLimit?: number;
  tooltipContent?: ITooltip;
  showValue?: boolean;
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
  tooltipContent,
  showValue = true,
}: Props<TFormValues>) => {
  const [currentValue, setCurrentValue] = useState<string>();
  return (
    <View w="75%">
      <View style={styles.tooltipContainer}>
        {(label ?? showValue) && (
          <Text>
            {label} {showValue && <Text>{currentValue}</Text>}
          </Text>
        )}
        {tooltipContent && (
          <CustomTooltip
            title={tooltipContent.title}
            description={tooltipContent.description}
          />
        )}
      </View>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => (
          <Flex direction="row">
            <Text mr={2}>{minLimit}</Text>
            <SliderNB
              onChange={val => {
                onChange(val);
                setCurrentValue(String(val));
              }}
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
