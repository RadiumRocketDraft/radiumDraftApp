import React, {useMemo, useState} from 'react';
import {Checkbox} from 'native-base';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {DATA_MOCK} from './MOCK';
import styles from './styles';
import {Routes, TNavigation} from '../../interfaces';
import Button from '../../components/shared/button';

type TPlayers = typeof DATA_MOCK;

const SelectPlayers = ({
  route,
  navigation,
}: TNavigation<Routes.SELECT_PLAYERS>) => {
  const {playersAmount} = route.params;
  const [selectedPlayers, setSelectedPlayers] = useState<TPlayers>([]);
  const isCheckboxDisabled = useMemo(
    () => selectedPlayers.length === playersAmount,
    [playersAmount, selectedPlayers.length],
  );

  const onChangeCheckbox = (item: any) => {
    const isSelectedPlayer = selectedPlayers.some(
      player => player.id === item.id,
    );
    if (isSelectedPlayer) {
      return setSelectedPlayers(current =>
        current.filter(player => player.id !== item.id),
      );
    }
    return setSelectedPlayers(current => [...current, item]);
  };

  const listHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[styles.rowText, styles.headerText]}>Seleccionados</Text>
        <Text style={[styles.wideRowText, styles.headerText]}>Jugadores</Text>
        <Text style={[styles.rowText, styles.headerText]}>Fidelidad</Text>
      </View>
    );
  };

  const listSeparator = () => <View style={styles.separator} />;

  const renderItem = ({item}: any) => {
    if (item.header) return listHeader();

    const isChecked = selectedPlayers.some(player => player.id === item.id);

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

  const onHandleSubmit = () => {
    const TEAM_A = DATA_MOCK.slice(1, 6);
    const TEAM_B = DATA_MOCK.slice(6, 11);
    navigation.navigate(Routes.DRAFT, {
      teamA: TEAM_A,
      teamB: TEAM_B,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        Jugadores restantes: {playersAmount - selectedPlayers.length}
      </Text>
      <FlatList
        bounces={false}
        data={DATA_MOCK}
        renderItem={renderItem}
        style={styles.flatList}
        ItemSeparatorComponent={listSeparator}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={false}
        keyExtractor={(_, index) => index.toString()}
      />
      <Button
        isDisabled={isCheckboxDisabled}
        handleSubmit={onHandleSubmit}
        text="Confirmar"
      />
    </SafeAreaView>
  );
};

export default SelectPlayers;
