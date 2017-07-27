import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

width = width / 2;

export default StyleSheet.create({
  CategoryListWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 8,
    paddingRight: 8
  },
  CategoryWrapper: {
    width: width - 8,
    padding: 8
  },
  CategoryButton: {
    borderRadius: 5
  }
});
