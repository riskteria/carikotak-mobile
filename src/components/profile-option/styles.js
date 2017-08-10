import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  optionText: {
    fontSize: 14,
    color: colors.colorDark,
    fontWeight: '600'
  },
  listItem: {
    padding: 16,
    alignItems: 'flex-start'
  },
  itemList: {
    borderBottomColor: colors.colorBorderLight
  }
});
