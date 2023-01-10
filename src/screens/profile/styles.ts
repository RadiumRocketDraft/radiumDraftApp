import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    borderRadius: 9999,
    width: 128,
    height: 128,
    marginTop: 20,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  editText: {
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: '#5555',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 4,
    width: '100%',
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
});
