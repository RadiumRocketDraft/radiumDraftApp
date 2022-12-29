import React, {useState} from 'react';
import {Checkbox} from 'native-base';
import {FlatList, Text, View} from 'react-native';
import {DATA_MOCK} from './MOCK';
import styles from './styles';

type TPlayers = typeof DATA_MOCK;

const SelectPlayers = ({route}: any) => {
  const {title, amountOfPlayers} = route.params;
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

  const renderItem = ({item}: any) => {
    const isChecked = playerSelected.some(player => player.id === item.id);
    const isCheckboxDisabled = playerSelected.length === amountOfPlayers;

    return (
      <View style={styles.renderItemContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            isDisabled={!isChecked && isCheckboxDisabled}
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{title}</Text>
        <Text>
          Jugadores restantes: {amountOfPlayers - playerSelected.length}
        </Text>
      </View>
      <View style={{height: '75%'}}>
        <FlatList
          data={DATA_MOCK}
          renderItem={renderItem}
          style={styles.flatList}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default SelectPlayers;
