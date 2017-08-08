import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

const helpContainer = {
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  sectionContainer: {
    flexDirection: 'column',
    paddingHorizontal: 16
  },
  textLabel: {
    paddingVertical: 16,
    fontSize: 24
  },
  textNote: {
    borderLeftWidth: 2,
    borderLeftColor: colors.colorAccent,
    paddingLeft: 16,
    fontSize: 12,
    color: colors.colorDark,
    lineHeight: 18
  }
};

export default StyleSheet.create(Object.assign({}, helpContainer));
