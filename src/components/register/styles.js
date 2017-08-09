import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorAccent
  },
  insideContainer: {
    paddingHorizontal: 16,
    marginVertical: 16
  },
  signInbutton: {
    color: colors.colorLightOpacity,
    fontSize: 16
  },
  inputGroup: {
    marginBottom: 24
  },
  lightColor: {
    color: colors.colorLightOpacity,
    fontWeight: 'bold'
  }
});

export default styles;
