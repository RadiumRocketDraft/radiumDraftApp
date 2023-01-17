import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  shareContainer: {
    flex: 5,
  },
  teamsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  teamTitleA: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 2,
  },
  teamTitleB: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 2,
  },
  averageSkillA: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  averageSkillB: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
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
    flex: 1,
    justifyContent: 'space-evenly',
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
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2,
  },
  infoRow: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 28,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    width: '70%',
    position: 'relative',
  },
  shareIcon: {
    position: 'absolute',
    right: -20,
    color: 'white',
  },
});
