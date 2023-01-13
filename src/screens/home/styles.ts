import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  selectOptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    fontSize: 30,
    marginBottom: 10,
  },
  inComingMatchesContainer: {
    flex: 1,
  },
  incomingTitle: {
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 20,
  },
  skeletonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 35,
  },
});
