import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

const helpContainer = {
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  sectionContainer: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  textLabel: {
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: '600',
    color: colors.colorDark
  },
  textNote: {
    paddingLeft: 16,
    fontSize: 14,
    color: colors.colorGrey,
    lineHeight: 22
  }
};

export default StyleSheet.create(Object.assign({}, helpContainer));
