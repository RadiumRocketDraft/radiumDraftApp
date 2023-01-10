import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toastWrapper: {
    flexShrink: 1,
    width: '100%',
  },
  toastHeaderWrapper: {
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toastTitleWrapper: {
    flexShrink: 1,
    alignItems: 'center',
  },
  toastTitle: {
    fontSize: 16,
    fontWeight: '500',
    flexShrink: 1,
  },
  toastDescription: {
    paddingHorizontal: 24,
  },
});
