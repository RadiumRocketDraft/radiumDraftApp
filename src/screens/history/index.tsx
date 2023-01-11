import MatchCard from 'components/shared/matchCard';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getMatches} from 'store/modules/match/actions';
import {Match} from 'store/modules/match/reducers';
import {historyMatchesData} from 'store/modules/match/selectors';
import styles from './styles';

const History = () => {
  const matches = useSelector(historyMatchesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  const renderItem = ({item}: {item: Match}) => {
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
