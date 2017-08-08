import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

const aboutContainer = {
  mainContainer: {
    backgroundColor: colors.colorAccent
  },
  insideContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  textVersion: {
    fontSize: 10,
    color: colors.colorLight
  },
  logo: {
    width: 300,
    height: 50
  },
  sectionContainer: {
    paddingTop: 16,
    paddingBottom: 16
  }
};

export default StyleSheet.create(Object.assign({}, aboutContainer));
