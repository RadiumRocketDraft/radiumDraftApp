import React, {useEffect, useMemo, useState} from 'react';
import {Checkbox, Skeleton, Toast} from 'native-base';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {IPlayer, Routes, TNavigation} from 'types/interfaces';
import Button from 'components/shared/button';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayers, playerSelector} from 'store/modules/player';
import {createMatch, matchData} from 'store/modules/match';
import {getCurrentFirebaseUid} from 'utils';
import {MatchBody} from 'services/match';
import {skillChecker} from 'helpers';
import {CustomToast, ToastStatus} from 'components/customToast';

const SelectPlayers = ({route}: TNavigation<Routes.SELECT_PLAYERS>) => {
  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
  const {isLoading, players} = useSelector(playerSelector);
  const {playersAmount} = route.params;
  const isCheckboxDisabled = useMemo(
    () => selectedPlayers.length === playersAmount,
    [playersAmount, selectedPlayers.length],
  );
  const dispatch = useDispatch();
  const {error} = useSelector(matchData);

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

  useEffect(() => {
    if (error) {
      console.log('Error: Dispatch CreateMatch', error);
      Toast.show({
        render: ({id}) => {
          return (
            <CustomToast
              id={id}
              description={'Cannot create match'}
              title={'Error'}
              status={ToastStatus.error}
            />
          );
        },
      });
    }
  }, [error]);

  const onHandleSubmit = () => {
    try {
      const firebaseUID = getCurrentFirebaseUid();
      if (!firebaseUID) throw new Error('FirebaseUID not found');
      const payload: MatchBody = {
        firebaseUID: firebaseUID,
        players: selectedPlayers,
      };
      dispatch(createMatch(payload));
    } catch (err) {
      console.log(err);
    }
  };

  const listHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[styles.rowText, styles.headerText]}>Seleccionados</Text>
        <Text style={[styles.wideRowText, styles.headerText]}>Jugadores</Text>
        <Text style={[styles.rowText, styles.headerText]}>Skill</Text>
      </View>
    );
  };

  const listSeparator = () => <View style={styles.separator} />;

  const renderItem = ({item}: ListRenderItemInfo<IPlayer>) => {
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
        <View style={styles.rowText}>{skillChecker(item.skill)}</View>
      </View>
    );
  };

  if (isLoading) {
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
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        Jugadores restantes: {playersAmount - selectedPlayers.length}
      </Text>
      <FlatList
        bounces={false}
        data={players}
        renderItem={renderItem}
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
