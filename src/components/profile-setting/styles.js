import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  inputAvatar: {
    borderBottomWidth: 0,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputAvatarButton: {
    borderColor: colors.colorGrey
  },
  inputAvatarButtonText: {
    color: colors.colorGrey
  },
  inputText: {
    fontSize: 14
  },
  inputTextDisabled: {
    fontSize: 14,
    color: colors.colorGreyLight
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
