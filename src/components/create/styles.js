import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: colors.colorLight,
    flex: 1
  },
  buttonWrapper: {
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16,
    paddingTop: 32,
    paddingBottom: 32,
    borderColor: colors.colorAccent
  },
  buttonText: {
    color: colors.colorAccent
  }
});

export default styles;
