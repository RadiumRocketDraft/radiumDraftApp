import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  wideRowText: {
    flex: 2,
    textAlign: 'center',
    alignSelf: 'center',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  bottomButton: {
    minWidth: '50%',
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
  },
});
