import React, {useState} from 'react';
import {Checkbox} from 'native-base';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DATA_MOCK} from './MOCK';
import styles from './styles';

interface IPlayer {
  firstName: string;
  lastName: string;
  fidelity: number;
}

const SelectPlayers = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.renderItemContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox accessibilityLabel="player" value={item} size="md" />
        </View>
        <Text style={styles.rowData}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.rowData}>{item.fidelity}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text>Select</Text>
        <Text>Full Name</Text>
        <Text>Fidelity</Text>
      </View>
      <FlatList
        data={DATA_MOCK}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default SelectPlayers;
