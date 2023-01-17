import Button from 'components/shared/button';
import React, {useRef} from 'react';
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
import AntIcon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import {Routes} from 'types/interfaces';
import styles from './styles';

const MatchReceipt = ({navigation, route}: any) => {
  const match = useSelector(currentMatchData);
  const {matchData} = route.params;
  const viewRef = useRef();

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

  const handleContinue = () => {
    navigation.navigate(Routes.HOME);
  };

  const handleShare = async () => {
    try {
      const uri = await captureRef(viewRef, {
        quality: 1,
        format: 'png',
      });
      await Share.open({url: uri});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.shareContainer} ref={viewRef}>
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
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Field</Text>
            <Text style={styles.infoText}>{matchData.field}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Date</Text>
            <Text style={styles.infoText}>{matchData.date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Time</Text>
            <Text style={styles.infoText}>{matchData.time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          customStyle={styles.buttonStyle}
          isDisabled={false}
          handleSubmit={handleContinue}
          text="Continue"
        />
        <Button
          customStyle={styles.buttonStyle}
          isDisabled={false}
          handleSubmit={handleShare}
          text="Share"
          rightIcon={
            <AntIcon style={styles.shareIcon} name="sharealt" size={20} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MatchReceipt;
