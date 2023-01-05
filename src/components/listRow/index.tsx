import {Skeleton, Text, View} from 'native-base';
import React, {FC} from 'react';
import styles from './styles';

interface ListRowProps {
  title: string;
  value?: string | number;
  isLoading?: boolean;
}

const ListRow: FC<ListRowProps> = ({title, value, isLoading}) => (
  <Skeleton.Text
    lines={2}
    isLoaded={!isLoading ?? Boolean(value)}
    style={styles.infoRow}>
    <View style={styles.infoRow}>
      <Text style={styles.infoRowTitle}>{title}</Text>
      <Text style={styles.infoRowText}>{value}</Text>
    </View>
  </Skeleton.Text>
);

export default ListRow;
