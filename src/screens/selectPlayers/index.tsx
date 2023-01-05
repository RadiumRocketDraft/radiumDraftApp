import React, {useEffect, useMemo, useState} from 'react';
import {Checkbox, Skeleton} from 'native-base';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {IPlayer, Routes, TNavigation} from '../../types/interfaces';
import Button from '../../components/shared/button';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayers, playerSelector} from '../../store/modules/player';

const SelectPlayers = ({
  route,
  navigation,
}: TNavigation<Routes.SELECT_PLAYERS>) => {
  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
  const {isLoading, players} = useSelector(playerSelector);
  const {playersAmount} = route.params;
  const isCheckboxDisabled = useMemo(
    () => selectedPlayers.length === playersAmount,
    [playersAmount, selectedPlayers.length],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const onChangeCheckbox = (item: IPlayer) => {
    const isSelectedPlayer = selectedPlayers.some(
      player => player._id === item._id,
    );
    if (isSelectedPlayer) {
      return setSelectedPlayers(current =>
        current.filter(player => player._id !== item._id),
      );
    }
    return setSelectedPlayers(current => [...current, item]);
  };

  const onHandleSubmit = () => {
    const TEAM_A = players.slice(1, 6);
    const TEAM_B = players.slice(6, 11);
    navigation.navigate(Routes.DRAFT, {
      teamA: TEAM_A,
      teamB: TEAM_B,
    });
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

  const renderItem = (item: IPlayer) => {
    const isChecked = selectedPlayers.some(player => player._id === item._id);

    return (
      <View style={styles.rowContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            isDisabled={!isChecked && isCheckboxDisabled}
            accessibilityLabel="player"
            value={item.lastName}
            size="md"
            onChange={() => onChangeCheckbox(item)}
          />
        </View>
        <Text style={styles.wideRowText}>
          {item?.firstName} {item?.lastName}
        </Text>
        <Text style={styles.rowText}>{item.fidelity}</Text>
      </View>
    );
  };

  if (isLoading)
    return (
      <SafeAreaView style={styles.container}>
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton px="4" my={4} />
        <Skeleton bottom={0} w={'50%'} rounded="3xl" startColor="#187DE9" />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        Jugadores restantes: {playersAmount - selectedPlayers.length}
      </Text>
      <FlatList
        bounces={false}
        data={players}
        renderItem={({item}) => renderItem(item)}
        style={styles.flatList}
        ItemSeparatorComponent={listSeparator}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={false}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={listHeader}
      />
      <Button
        isDisabled={!isCheckboxDisabled}
        handleSubmit={onHandleSubmit}
        text="Confirmar"
      />
    </SafeAreaView>
  );
};

export default SelectPlayers;
