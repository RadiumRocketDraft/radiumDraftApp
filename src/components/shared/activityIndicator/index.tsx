import {Spinner, View} from 'native-base';
import React from 'react';
import styles from './styles';

const LoadingSpinner = () => (
  <View style={styles.wrapper}>
    <Spinner />
  </View>
);

export default LoadingSpinner;
