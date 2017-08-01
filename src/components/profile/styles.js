import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: colors.colorLight,
    flex: 1
  },
  coverBg: {
    backgroundColor: colors.colorAccent
  },
  coverBgImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.1,
    height: 200
  },
  profileCard: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  profileCardItem: {
    backgroundColor: 'transparent'
  },
  textNote: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12
  },
  textNoteSeparator: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    paddingLeft: 32,
    paddingRight: 32
  }
});

export default styles;
