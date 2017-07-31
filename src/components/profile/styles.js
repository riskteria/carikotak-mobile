import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: colors.colorLight,
    flex: 1
  },
  coverBg: {
    height: 200,
    backgroundColor: colors.colorAccent
  }
});

export default styles;
