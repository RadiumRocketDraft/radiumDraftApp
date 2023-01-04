import React, {useState} from 'react';
import {FlatList} from 'native-base';
import {View, Text, SafeAreaView} from 'react-native';
import Input from '../../components/shared/input';
import {useForm} from 'react-hook-form';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import format from 'date-fns/format';
import Button from '../../components/shared/button';

const Draft = ({route}: any) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const {teamA, teamB} = route.params;

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
  } = useForm({
    defaultValues: {
      field: '',
      date: '',
      time: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const averageSkillTeamA = Math.floor(
    teamA.reduce(
      (accumulator: number, initialValue: any) =>
        accumulator + initialValue.skill,
      0,
    ) / teamA.length,
  );

  const averageSkillTeamB = Math.floor(
    teamB.reduce(
      (accumulator: number, initialValue: any) =>
        accumulator + initialValue.skill,
      0,
    ) / teamB.length,
  );

  const listSeparator = () => <View style={styles.separator} />;

  const renderItemTeamA = (data: any) => {
    return (
      <Text>
        {data.item.firstName} {data.item.lastName}
      </Text>
    );
  };

  const renderItemTeamB = (data: any) => {
    return (
      <Text>
        {data.item.firstName} {data.item.lastName}
      </Text>
    );
  };

  const onConfirmDate = (value: Date) => {
    setDate(value);
    modalDatePicker(openDatePicker);
    setValue('date', value);
  };

  const onConfirmTime = (value: any) => {
    setTime(value);
    modalTimePicker(openDatePicker);
    setValue('time', value);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.redraftContainer}>Re-draft</Text>
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamTitle}>Team A</Text>
          <Text style={styles.averageSkill}>
            Skill avg: {averageSkillTeamA}
          </Text>
          <FlatList
            data={teamA}
            renderItem={renderItemTeamA}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListTeam}
            ItemSeparatorComponent={listSeparator}
          />
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamTitle}>Team B</Text>
          <Text style={styles.averageSkill}>
            Skill avg: {averageSkillTeamB}
          </Text>
          <FlatList
            data={teamB}
            renderItem={renderItemTeamB}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListTeam}
            ItemSeparatorComponent={listSeparator}
          />
        </View>
      </View>
      <Input
        name="field"
        placeholder="Field"
        label="Seleccionar cancha"
        onFocus={() => console.log('OnFocus')}
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
      <Button>Confirmar partido</Button>
    </SafeAreaView>
  );
};

export default Draft;
