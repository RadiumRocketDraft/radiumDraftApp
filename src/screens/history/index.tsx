import MatchCard from 'components/shared/matchCard';
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getMatches} from 'store/modules/match/actions';
import {matchData} from 'store/modules/match/selectors';
import styles from './styles';

const History = () => {
  const {matches} = useSelector(matchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  const renderItem = (item: any) => {
    return <MatchCard match={item} />;
  };
  const listSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={matches}
        renderItem={renderItem}
        ItemSeparatorComponent={listSeparator}
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default History;
