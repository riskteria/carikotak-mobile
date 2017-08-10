import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  inputAvatar: {
    borderBottomWidth: 0,
    marginVertical: 16,
    alignSelf: 'center',
    backgroundColor: colors.colorLight,
    borderRadius: 50
  },
  inputAvatarButton: {
    borderColor: colors.colorGrey
  },
  inputAvatarButtonText: {
    color: colors.colorGrey
  },
  inputAvatarLabel: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    top: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  inputAvatarLabelIcon: {
    color: colors.colorLightOpacity,
    fontSize: 18
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
