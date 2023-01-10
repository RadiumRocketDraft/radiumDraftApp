import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const MatchCard = ({match}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.columnData}>
          <Text>Result</Text>
          <Text>5-4</Text>
        </View>
        <View style={styles.columnData}>
          <Text>Date</Text>
          <Text>02/03/2023</Text>
        </View>
        <View style={styles.columnData}>
          <Text>Field</Text>
          <Text>La previa</Text>
        </View>
      </View>
      <View style={styles.trapezoidLeft} />
    </View>
  );
};

export default MatchCard;
