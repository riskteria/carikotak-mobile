import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const commentFooter = {
  footerInput: {
    backgroundColor: colors.colorLight,
    paddingLeft: 16,
    paddingRight: 16
  },
  footerColInput: {
    flex: 1
  },
  footerColButton: {
    flex: 0.2
  },
  footerButton: {
    flex: 1
  }
};

export default StyleSheet.create(Object.assign({}, commentFooter));
