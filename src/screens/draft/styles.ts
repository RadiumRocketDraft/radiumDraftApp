import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
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
    marginLeft: 20,
    width: '45%',
  },
  teamContainerB: {
    marginRight: 20,
    width: '45%',
  },
  flatListTeam: {
    width: '100%',
  },
  viewOptionsMatch: {
    alignSelf: 'center',
    marginTop: 80,
    width: '80%',
    minWidth: 200,
  },
  separator: {
    height: 14,
  },
  teamARow: {
    textAlign: 'left',
    width: '100%',
  },
  teamBRow: {
    textAlign: 'right',
    width: '100%',
  },
  redraftButton: {
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
});
