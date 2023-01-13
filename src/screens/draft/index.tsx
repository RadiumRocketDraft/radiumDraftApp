import React, {useEffect, useState} from 'react';
import {FlatList, Toast} from 'native-base';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import Input from 'components/shared/input';
import {useForm} from 'react-hook-form';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns-tz';
import Button from 'components/shared/button';
import {IPlayer, Routes, TNavigation} from 'types/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {
  currentMatchData,
  matchData,
  reDraft,
  updateMatch,
} from 'store/modules/match';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {CustomToast, ToastStatus} from 'components/customToast';

interface FormData {
  field: string;
  date: string;
  time: string;
}

const Draft = ({navigation}: TNavigation<Routes.DRAFT>) => {
  const dispatch = useDispatch();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const match = useSelector(currentMatchData);
  const {error} = useSelector(matchData);

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

  useEffect(() => {
    if (error) {
      console.log('Error: Dispatch CreateMatch(UPDATE)', error);
      Toast.show({
        render: ({id}) => {
          return (
            <CustomToast
              id={id}
              description={'Cannot create match'}
              title={'Error'}
              status={ToastStatus.error}
            />
          );
        },
      });
    }
  }, [error]);

  const renderItemTeamA = (data: ListRenderItemInfo<IPlayer>) => {
    return (
      <View style={styles.rowText}>
        <Text style={styles.teamARow}>
          {data.item.firstName} {data.item.lastName}
        </Text>
      </View>
    );
  };

  const renderItemTeamB = (data: ListRenderItemInfo<IPlayer>) => {
    return (
      <View style={styles.rowText}>
        <Text style={styles.teamBRow}>
          {data.item.firstName} {data.item.lastName}
        </Text>
      </View>
    );
  };

  const onConfirmDate = (value: Date) => {
    setDate(value);
    modalDatePicker(openDatePicker);
    setValue('date', value.toLocaleDateString());
  };

  const onConfirmTime = (value: Date) => {
    setTime(value);
    modalTimePicker(openDatePicker);
    setValue(
      'time',
      value.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      }),
    );
  };

  const onSubmit = (data: FormData) => {
    const dataMatch = {
      id: match?._id || '',
      field: data.field,
      date: format(date, 'MM-dd-yyyy'),
      time: format(time, 'hh:mm'),
    };

    dispatch(updateMatch(dataMatch));

    navigation.navigate(Routes.HOME);
    return Toast.show({
      render: ({id}) => {
        return (
          <CustomToast
            id={id}
            description={'Match created succesfully'}
            title={'Success'}
            status={ToastStatus.success}
          />
        );
      },
    });
  };

  const players = match?.teamA.concat(match.teamB);
  const payload = {
    id: match?._id || '',
    players: players || [],
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <TouchableOpacity
        onPress={() => dispatch(reDraft(payload))}
        style={styles.redraftButton}>
        <FeatherIcons name="refresh-cw" size={30} />
      </TouchableOpacity>
      <View style={styles.teamsContainer}>
        <View style={styles.teamContainerA}>
          <Text style={styles.teamTitleA}>Team A</Text>
          <Text style={styles.averageSkillA}>
            Skill avg: {match?.skillAvgA ?? '--'}
          </Text>
          <FlatList
            data={match?.teamA}
            renderItem={renderItemTeamA}
            scrollEnabled={false}
            contentContainerStyle={styles.flatListTeam}
            ItemSeparatorComponent={listSeparator}
          />
        </View>
        <View style={styles.teamContainerB}>
          <Text style={styles.teamTitleB}>Team B</Text>
          <Text style={styles.averageSkillB}>
            Skill avg: {match?.skillAvgB ?? '--'}
          </Text>
          <FlatList
            data={match?.teamB}
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
          label="Ingresar cancha"
          control={control}
          error={errors.field?.message}
          type="text"
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
          editable={false}
          onPressIn={() => modalDatePicker(openDatePicker)}
          valueInput={format(date, 'dd/MM/yyyy')}
        />
        <DatePicker
          modal
          date={time}
          open={openTimePicker}
          minuteInterval={15}
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
          editable={false}
          onPressIn={() => modalTimePicker(openTimePicker)}
          valueInput={format(time, 'h:mm a')}
        />
        <View style={styles.buttonContainer}>
          <Button
            customStyle={styles.buttonStyle}
            isDisabled={false}
            handleSubmit={handleSubmit(onSubmit)}
            text="Confirmar partido"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Draft;
