import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginTop: 20,
  },
  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  flatList: {
    width: '100%',
  },
  checkboxContainer: {
    flex: 1,
    alignItems: 'center',
    right: 5,
  },
  rowData: {
    flex: 1,
    textAlign: 'center',
  },
});
