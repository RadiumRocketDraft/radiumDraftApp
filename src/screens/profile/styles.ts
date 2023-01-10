import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  infoContainer: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'space-around',
    width: 0.85 * Dimensions.get('screen').width,
  },
  logOut: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  modal: {
    alignSelf: 'center',
  },
});
