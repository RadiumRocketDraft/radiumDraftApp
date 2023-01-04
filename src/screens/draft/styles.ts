import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  redraftContainer: {
    position: 'relative',
    top: -20,
    textAlign: 'center',
    marginTop: 8,
  },
  teamsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 50,
  },
  teamTitle: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  averageSkill: {
    marginBottom: 20,
    fontWeight: '500',
  },
  teamContainer: {
    alignItems: 'center',
  },
  flatListTeam: {
    alignItems: 'center',
  },
  viewOptionsMatch: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  separator: {
    height: 14,
  },
});
