import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

const connectionContainer = {};

const connectionCard = {
  cardContainer: {
    elevation: 0,
    marginTop: 1,
    marginBottom: 1
  }
};

export default StyleSheet.create(
  Object.assign({}, connectionContainer, connectionCard)
);
