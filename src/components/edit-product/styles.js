import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  formContaienr: {
    flex: 1,
    padding: 16
  },
  sectionContainer: {
    marginTop: 8,
    marginBottom: 8
  },
  labelControl: {
    fontSize: 12,
    color: colors.colorTomato
  }
});
