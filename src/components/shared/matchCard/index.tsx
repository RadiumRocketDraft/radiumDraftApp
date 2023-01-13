import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {MatchStatus} from 'types/enums/match';
import {getCurrentFirebaseUid} from 'utils';
import {IPlayer} from 'types/interfaces/player';
import {Match} from 'store/modules/match';

const MatchCard = ({match}: {match: Match}) => {
  const firebaseUid = getCurrentFirebaseUid();
  const scoreTeamA = match?.result?.teamA;
  const scoreTeamB = match?.result?.teamB;
  const matchStatus = match?.status;
  const matchDate = new Date(match?.date).toLocaleDateString(); // Cuando se conecte la creación de partido modificar esto con lo que viene
  const field = match?.field; // Cuando se conecte la creación de partido modificar esto con lo que viene
  const isWinner =
    matchStatus === MatchStatus.finished &&
    match[match.result?.winner || 'teamA'].some(
      (player: IPlayer) => player.firebaseUid === firebaseUid,
    );

  const statusStyling = {
    [MatchStatus.cancelled]: {
      resultIndicator: styles.resultIndicatorCancel,
    },
    [MatchStatus.finished]: {
      resultIndicator: isWinner
        ? styles.resultIndicatorWin
        : styles.resultIndicatorLoss,
    },
    [MatchStatus.toBePlayed]: {},
    [MatchStatus.pending]: {},
  };

  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer]}>
        <View style={styles.columnData}>
          <Text>Result</Text>
          <Text>
            {scoreTeamA} - {scoreTeamB}
          </Text>
        </View>
        <View style={styles.columnData}>
          <Text>Date</Text>
          <Text>{matchDate}</Text>
        </View>
        <View style={styles.columnData}>
          <Text>Field</Text>
          <Text>{field}</Text>
        </View>
      </View>
      <View
        style={[
          styles.resultIndicator,
          statusStyling[matchStatus].resultIndicator,
        ]}
      />
    </View>
  );
};

export default MatchCard;
