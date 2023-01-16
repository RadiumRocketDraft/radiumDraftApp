import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  teamTitleA: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  teamTitleB: {
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  averageSkillA: {
    marginBottom: 20,
    fontWeight: '500',
  },
  averageSkillB: {
    textAlign: 'right',
    marginBottom: 20,
    fontWeight: '500',
  },
  teamContainerA: {
    alignItems: 'center',
    marginLeft: 20,
    width: '45%',
  },
  teamContainerB: {
    alignItems: 'center',
    marginRight: 20,
    width: '45%',
  },
  flatListTeam: {
    width: '100%',
  },
  separator: {
    height: 14,
  },
  teamARow: {
    textAlign: 'center',
    width: '100%',
  },
  teamBRow: {
    textAlign: 'center',
    width: '100%',
  },
  rowText: {
    width: '100%',
  },
});
