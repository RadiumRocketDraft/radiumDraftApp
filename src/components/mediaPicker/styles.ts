import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  actionSheetContent: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mediaTypeButton: {
    alignItems: 'center',
    marginVertical: 16,
  },
  titleText: {
    fontSize: 20,
    color: 'gray',
    paddingVertical: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
  },
  icon: {
    fontSize: 52,
    color: 'gray',
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 4,
    justifyContent: 'space-evenly',
    paddingBottom: 4,
  },
});
