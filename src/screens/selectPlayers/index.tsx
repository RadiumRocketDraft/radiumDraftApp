import React, {useState} from 'react';
import {Checkbox} from 'native-base';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

  const listHeader = () => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>Seleccionados</Text>
        <Text style={styles.wideRowText}>Jugadores</Text>
        <Text style={styles.rowText}>Fidelidad</Text>
      </View>
    );
  };

  const listSeparator = () => <View style={{height: 20}} />;

  const renderItem = ({item}: any) => {
    const isChecked = playerSelected.some(player => player.id === item.id);
    const isCheckboxDisabled = playerSelected.length === amountOfPlayers;

    return (
      <View style={styles.rowContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            isDisabled={!isChecked && isCheckboxDisabled}
            accessibilityLabel="player"
            value={item}
            size="md"
            onChange={() => onChangeCheckbox(item)}
          />
        </View>
        <Text style={styles.wideRowText}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.rowText}>{item.fidelity}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{title}</Text>
        <Text>
          Jugadores restantes: {amountOfPlayers - playerSelected.length}
        </Text>
      </View>
      <FlatList
        data={DATA_MOCK}
        renderItem={renderItem}
        style={styles.flatList}
        ItemSeparatorComponent={listSeparator}
        ListHeaderComponent={listHeader}
        keyExtractor={(_, index) => index.toString()}
      />
      <TouchableOpacity style={styles.bottomButton}>
        <Text>El boton del Sr. Ayom</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectPlayers;
