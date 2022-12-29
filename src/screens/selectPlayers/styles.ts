import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
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
    justifyContent: 'space-between',
    width: '100%',
  },
  flatList: {
    width: '100%',
  },
  checkboxContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rowData: {
    flex: 1,
    textAlign: 'center',
  },
});
