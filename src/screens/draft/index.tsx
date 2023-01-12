import React, {useState} from 'react';
import {FlatList} from 'native-base';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ListRenderItemInfo,
} from 'react-native';
import Input from 'components/shared/input';
import {useForm} from 'react-hook-form';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns-tz';
import Button from 'components/shared/button';
import {IPlayer, Routes, TNavigation} from 'types/interfaces';
import {useDispatch} from 'react-redux';
import {getDraft} from 'store/modules/match';

const Draft = ({route}: TNavigation<Routes.DRAFT>) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const {teamA, teamB} = route.params;
  const dispatch = useDispatch();

  const modalDatePicker = (state: boolean) => {
    setOpenDatePicker(!state);
  };
  const modalTimePicker = (state: boolean) => {
    setOpenTimePicker(!state);
  };

  const {
    control,
    formState: {errors},
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      field: '',
      date: '',
      time: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const listSeparator = () => <View style={styles.separator} />;

  const renderItemTeamA = (data: ListRenderItemInfo<IPlayer>) => {
    return (
      <Text>
        {data.item.firstName} {data.item.lastName}
      </Text>
    );
  };

  const renderItemTeamB = (data: ListRenderItemInfo<IPlayer>) => {
    return (
      <Text>
        {data.item.firstName} {data.item.lastName}
      </Text>
    );
  };

  const onConfirmDate = (value: Date) => {
    setDate(value);
    modalDatePicker(openDatePicker);
    setValue('date', String(value));
  };

  const onConfirmTime = (value: Date) => {
    setTime(value);
    modalTimePicker(openDatePicker);
    setValue('time', String(value));
  };

  const onSubmit = (data: any) => {
    // const dataMatch = {
    //   field: data.field,
    //   date: format(data.date, 'd/M/yyyy'),
    //   time: data.time,
    // };
    // Alert.alert(
    //   'Match',
    //   dataMatch.field +
    //     '\n' +
    //     dataMatch.date +
    //     '\n' +
    //     format(dataMatch.time, 'h:mm a'),
    //   [{text: 'OK'}],
    // );
    const players = [...teamA, ...teamB];
    console.log('MABEL', players);
    dispatch(getDraft(players));
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamTitle}>Team A</Text>
          <Text style={styles.averageSkill}>Skill avg: 33</Text>
          <FlatList
            data={teamA}
            renderItem={renderItemTeamA}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListTeam}
            ItemSeparatorComponent={listSeparator}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.redraftContainer}>Re-draft</Text>
        </TouchableOpacity>
        <View style={styles.teamContainer}>
          <Text style={styles.teamTitle}>Team B</Text>
          <Text style={styles.averageSkill}>Skill avg: 44</Text>
          <FlatList
            data={teamB}
            renderItem={renderItemTeamB}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListTeam}
            ItemSeparatorComponent={listSeparator}
          />
        </View>
      </View>
      <View style={styles.viewOptionsMatch}>
        <Input
          name="field"
          placeholder="Cancha"
          label="Seleccionar cancha"
          onFocus={() => {}}
          control={control}
          error={errors.field?.message}
          type="text"
          w={{base: '50%', md: '25%'}}
        />
        <DatePicker
          modal
          date={date}
          open={openDatePicker}
          mode="date"
          onConfirm={onConfirmDate}
          onCancel={() => setOpenDatePicker(false)}
        />
        <Input
          name="date"
          placeholder="Fecha"
          label="Elegir fecha:"
          control={control}
          error={errors.field?.message}
          type="text"
          w={{base: '50%', md: '25%'}}
          editable={false}
          onPressIn={() => modalDatePicker(openDatePicker)}
          valueInput={format(date, 'd/M/yyyy')}
        />
        <DatePicker
          modal
          date={time}
          open={openTimePicker}
          mode="time"
          onConfirm={onConfirmTime}
          onCancel={() => setOpenTimePicker(false)}
        />
        <Input
          name="time"
          placeholder="Hora"
          label="Elegir Hora:"
          control={control}
          error={errors.time?.message}
          type="text"
          w={{base: '50%', md: '25%'}}
          editable={false}
          onPressIn={() => modalTimePicker(openTimePicker)}
          valueInput={format(time, 'h:mm a')}
        />
        <Button
          isDisabled={false}
          handleSubmit={handleSubmit(onSubmit)}
          text="Confirmar partido"
        />
      </View>
    </SafeAreaView>
  );
};

export default Draft;
