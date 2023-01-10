import {StyleSheet} from 'react-native';

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
    backgroundColor: '#fce5e5',
    zIndex: 1,
  },
  columnData: {
    alignItems: 'center',
  },
  trapezoidLeft: {
    width: 10,
    backgroundColor: '#cf0000',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#e60000',
    zIndex: 0,
  },
});
