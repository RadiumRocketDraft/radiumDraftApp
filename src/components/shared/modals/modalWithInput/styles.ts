import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 6,
    backgroundColor: 'white',
    position: 'absolute',
    height: 100,
    width: 200,
  },
  error: {
    color: 'red',
  },
  button: {
    backgroundColor: '#187DE9',
  },
  input: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  modalTop: {
    borderTopEndRadius: 6,
    backgroundColor: '#187DE9',
    height: 25,
    width: '100%',
  },
  modalBackground: {
    zIndex: 1,
    color: '#187DE9',
    width: '100%',
    height: '100%',
  },
});
