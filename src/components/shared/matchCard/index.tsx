import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import format from 'date-fns/format';

const MatchCard = ({match}: any) => {
  const scoreTeamA = match?.item.result?.teamA;
  const scoreTeamB = match?.item.result?.teamB;
  const matchStatus = match?.item;
  const matchDate = format(new Date(match?.item.date), 'MM/dd/yyyy'); // Cuando se conecte la creación de partido modificar esto con lo que viene
  const field = match?.item.field; // Cuando se conecte la creación de partido modificar esto con lo que viene

  console.log('matchStatusvmatchStatus', matchStatus);
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
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
      <View style={styles.trapezoidLeft} />
    </View>
  );
};

export default MatchCard;
