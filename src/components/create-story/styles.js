import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.colorLight
  },
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  richText: {
    flex: 1,
    padding: 0,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
