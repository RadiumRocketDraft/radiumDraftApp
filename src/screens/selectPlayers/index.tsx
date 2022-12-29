import React, {useState} from 'react';
import {Checkbox} from 'native-base';
import {FlatList, Text, View} from 'react-native';
import {DATA_MOCK} from './MOCK';
import styles from './styles';

type TPlayers = typeof DATA_MOCK;

const SelectPlayers = ({route}: any) => {
  const title = route.params.title;
  const [playerSelected, setPlayerSelected] = useState<TPlayers>([]);

  const onChangeCheckbox = (item: any) => {
    const isSelectedPlayer = playerSelected.some(
      player => player.id === item.id,
    );
    if (isSelectedPlayer) {
      return setPlayerSelected(current =>
        current.filter(player => player.id !== item.id),
      );
    }
    return setPlayerSelected(current => [...current, item]);
  };

  console.log('playerSelected', playerSelected);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.renderItemContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            accessibilityLabel="player"
            value={item}
            size="md"
            onChange={() => onChangeCheckbox(item)}
          />
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
      <Text>{title}</Text>
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
