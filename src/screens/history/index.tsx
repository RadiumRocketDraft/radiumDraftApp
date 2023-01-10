import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getMatches} from 'store/modules/match/actions';
import {matchData} from 'store/modules/match/selectors';

const History = () => {
  const {matches} = useSelector(matchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Text>History SCREEN</Text>
    </SafeAreaView>
  );
};

export default History;
