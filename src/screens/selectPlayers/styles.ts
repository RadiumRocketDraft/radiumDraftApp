import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    width: '100%',
    backgroundColor: '#DDD',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 8,
  },
  headerContainer: {
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'lightblue',
    borderBottomWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  flatList: {
    width: '100%',
  },
  checkboxContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '500',
    paddingVertical: 5,
    textAlign: 'center',
  },
  rowText: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  isChecked: {
    flex: 1,
  },
  checkIcon: {
    alignSelf: 'center',
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
  separator: {
    height: 20,
  },
});
