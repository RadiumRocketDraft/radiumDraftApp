import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {currentMatchData} from 'store/modules/match/selectors';
import {IPlayer} from 'types/interfaces/player';
import styles from './styles';

const MatchReceipt = ({navigation, route}: any) => {
  const match = useSelector(currentMatchData);
  const {matchData} = route.params;

  console.log('matchDatamatchDatamatchData', matchData);

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

  const listSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView>
      <View>
        <View style={styles.teamsContainer}>
          <View style={styles.teamContainerA}>
            <Text style={styles.teamTitleA}>Team A</Text>
            <FlatList
              data={match?.teamA}
              renderItem={renderItemTeamA}
              scrollEnabled={false}
              contentContainerStyle={styles.flatListTeam}
              ItemSeparatorComponent={listSeparator}
            />
            <Text style={styles.averageSkillA}>
              Skill avg: {match?.skillAvgA ?? '--'}
            </Text>
          </View>
          <View style={styles.teamContainerB}>
            <Text style={styles.teamTitleB}>Team B</Text>
            <FlatList
              data={match?.teamB}
              renderItem={renderItemTeamB}
              scrollEnabled={false}
              contentContainerStyle={styles.flatListTeam}
              ItemSeparatorComponent={listSeparator}
            />
            <Text style={styles.averageSkillB}>
              Skill avg: {match?.skillAvgB ?? '--'}
            </Text>
          </View>
        </View>
        <View>
          <Text>Field:</Text>
          <Text>{matchData.field}</Text>
        </View>
        <View>
          <Text>Date:</Text>
          <Text>{matchData.date}</Text>
        </View>
        <View>
          <Text>Time:</Text>
          <Text>{matchData.time}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MatchReceipt;
