import MatchCard from 'components/shared/matchCard';
import {Skeleton} from 'native-base';
import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {matchData, matchesToBePlayed} from 'store/modules/match/selectors';
import {Routes, TNavigation} from 'types/interfaces';
import {Match as IMatch} from 'store/modules/match/reducers';
import styles from './styles';
import Player5 from 'assets/svg/player5';
import Player7 from 'assets/svg/player7';
import {getMatches} from 'store/modules/match/actions';

const Match = ({navigation}: TNavigation<Routes.MATCH>) => {
  const dispatch = useDispatch();
  const matches = useSelector(matchesToBePlayed);
  const {isLoading} = useSelector(matchData);

  const onPressMatch = (title: string, playersAmount: number) => {
    navigation.navigate(Routes.SELECT_PLAYERS, {
      title,
      playersAmount,
    });
  };

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  const listSeparator = () => <View style={styles.separator} />;

  const renderItem = ({item}: {item: IMatch}) => {
    return <MatchCard match={item} />;
  };

  const SkeletonLoader = () => {
    return (
      <SafeAreaView style={styles.skeletonContainer}>
        <Skeleton
          startColor={'gray.400'}
          size={'80%'}
          style={styles.skeleton}
        />
        <Skeleton
          startColor={'gray.400'}
          size={'80%'}
          style={styles.skeleton}
        />
        <Skeleton
          startColor={'gray.400'}
          size={'80%'}
          style={styles.skeleton}
        />
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectOptionContainer}>
        <Text style={styles.incomingTitle}>Select Match</Text>
        <TouchableOpacity
          style={styles.selectMatch}
          onPress={() => onPressMatch('5 VS 5', 10)}>
          <Player5 />
          <Text style={styles.option}>VS</Text>
          <Player5 />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectMatch}
          onPress={() => onPressMatch('7 VS 7', 14)}>
          <Player7 />
          <Text style={styles.option}>VS</Text>
          <Player7 />
        </TouchableOpacity>
      </View>

      <View style={styles.inComingMatchesContainer}>
        <Text style={styles.incomingTitle}>Incoming Matches</Text>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <FlatList
            data={matches}
            renderItem={renderItem}
            ItemSeparatorComponent={listSeparator}
            bounces={false}
            contentContainerStyle={
              matches.length === 0 && styles.flatListContainer
            }
            ListEmptyComponent={
              <View style={styles.noMatchesContainer}>
                <Text style={styles.noMatches}>No matches to be played</Text>
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Match;
