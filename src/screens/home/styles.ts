import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  selectOptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectMatch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'lightgrey',
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  option: {
    fontSize: 20,
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
  noMatchesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  noMatches: {
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
  },
  flatListContainer: {
    flex: 1,
    flexGrow: 1,
  },
  skeleton: {
    marginVertical: 2,
    height: 75,
    borderRadius: 10,
  },
});
