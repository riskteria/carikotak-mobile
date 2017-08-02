import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const reportContainer = {
  reportTitle: {
    color: colors.colorTomato
  },
  reportWrapper: {
    padding: 16,
    backgroundColor: colors.colorLight
  }
};

const reportForm = {
  sectionContainer: {
    marginTop: 8,
    marginBottom: 8
  },
  labelControl: {
    fontSize: 12,
    color: colors.colorTomato
  }
};

export default StyleSheet.create(
  Object.assign({}, reportContainer, reportForm)
);
