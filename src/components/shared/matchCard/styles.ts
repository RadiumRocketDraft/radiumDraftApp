import {StyleSheet} from 'react-native';
import { MatchStatus } from 'types/enums';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderRightWidth: 0,
    backgroundColor: '#F2DDF8',
  },
  trapezoidLeft: {
    width: 10,
    backgroundColor: '#cf0000',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  trapezoidLeftWin: {
    backgroundColor: 'green',
  },
  trapezoidLeftLoss: {
    backgroundColor: 'red',
  },
  rapezoidLeftCancel: {
    backgroundColor: 'gray',
  },
  columnData: {
    alignItems: 'center',
  },
});
