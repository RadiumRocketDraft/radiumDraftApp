import {FlatList} from 'native-base';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Input from '../../components/shared/input';
import {useForm} from 'react-hook-form';
import styles from './styles';
import DatePickerInput from '../../components/shared/datePicker';

const Draft = ({route}: any) => {
  const {teamA, teamB} = route.params;

  const {
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      field: '',
    },
    // resolver: yupResolver(schema),
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
        onFocus={() => console.log('OnFocus')}
        control={control}
        error={errors.field?.message}
        type="text"
        w={{base: '50%', md: '25%'}}
      />
      <DatePickerInput />
    </SafeAreaView>
  );
};

export default Draft;
