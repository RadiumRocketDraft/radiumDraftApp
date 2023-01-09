import colors from 'native-base/lib/typescript/theme/base/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mediaTypeButton: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    color: colors.gray[500],
    paddingTop: 4,
    paddingBottom: 8,
  },
  descriptionText: {fontSize: 16, color: colors.gray[500]},
  icon: {
    fontSize: 52,
    color: colors.gray[500],
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 4,
    justifyContent: 'space-evenly',
    paddingBottom: 4,
  },
});
