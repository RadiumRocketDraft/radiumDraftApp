import {FlatList} from 'native-base';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Input from '../../components/shared/input';
import styles from './styles';

const Draft = ({route}: any) => {
  const {teamA, teamB} = route.params;

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

  const renderItemTeamA = (data: any) => {
    return (
      <Text>
        {data.item.firstName} {data.item.lastName}
      </Text>
    );
  };

  const renderItemTeamB = data => {
    return (
      <Text>
        {data.item.firstName} {data.item.lastName}
      </Text>
    );
  };

  const listSeparator = () => <View style={styles.separator} />;

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
        {/* <Input name="fieldName" placeholder="Field" type="text" /> */}
      </View>
    </SafeAreaView>
  );
};

export default Draft;
