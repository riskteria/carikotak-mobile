import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const parentStyle = {
  parentView: {
    backgroundColor: colors.colorLight,
    flex: 1
  }
};

const tabBarStyle = {
  tabStyle: {
    backgroundColor: colors.colorLight
  },
  tabTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.colorGrey
  },
  tabActiveTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.colorAccent
  },
  tabUnderlineStyle: {
    height: 1,
    backgroundColor: colors.colorAccent
  }
};

const coverStyle = {
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
};

const styles = StyleSheet.create(
  Object.assign({}, parentStyle, tabBarStyle, coverStyle)
);

export default styles;
