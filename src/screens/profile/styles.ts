import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignContent: 'center',
    height: '100%',
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  infoContainer: {},
  infoRow: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoRowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoRowText: {
    fontSize: 18,
  },
  logOut: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
