import React, {useEffect, useMemo, useState} from 'react';
import {Skeleton, Toast} from 'native-base';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  TouchableOpacity,
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
import AntIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      const firebaseUid = getCurrentFirebaseUid();
      if (!firebaseUid) throw new Error('FirebaseUID not found');
      const payload: MatchBody = {
        firebaseUid,
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
        <Text style={[styles.rowText, styles.headerText]}>Selected</Text>
        <Text style={[styles.rowText, styles.headerText]}>Players</Text>
        <Text style={[styles.rowText, styles.headerText]}>Position</Text>
        <Text style={[styles.rowText, styles.headerText]}>Skill</Text>
      </View>
    );
  };

  const listSeparator = () => <View style={styles.separator} />;

  const renderItem = ({item}: ListRenderItemInfo<IPlayer>) => {
    const isChecked = selectedPlayers.some(player => player._id === item._id);

    return (
      <TouchableOpacity
        disabled={!isChecked && isCheckboxDisabled}
        accessibilityLabel="player"
        onPress={() => onChangeCheckbox(item)}
        style={styles.rowContainer}>
        <View style={styles.isChecked}>
          {isChecked ? (
            <AntIcon
              style={styles.checkIcon}
              name="checkbox-marked-outline"
              size={25}
            />
          ) : (
            <AntIcon
              style={styles.checkIcon}
              name="checkbox-blank-outline"
              size={25}
            />
          )}
        </View>
        <Text style={styles.rowText}>
          {item?.firstName}.{item?.lastName.slice(0, 1)}
        </Text>
        <Text style={styles.rowText}>{item?.position}</Text>
        <View style={styles.rowText}>{skillChecker(item.skill)}</View>
      </TouchableOpacity>
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
        Remaining players: {playersAmount - selectedPlayers.length}
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
        text="Confirm"
      />
    </SafeAreaView>
  );
};

export default SelectPlayers;
