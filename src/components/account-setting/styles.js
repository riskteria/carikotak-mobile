import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  inputText: {
    fontSize: 14
  },
  inputIcon: {
    color: colors.colorGreyLight,
    fontSize: 18,
    width: 24,
    textAlign: 'center'
  },
  inputItem: {
    paddingHorizontal: 16
  }
});
