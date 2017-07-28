import { StyleSheet, Dimensions } from 'react-native';

let { width } = Dimensions.get('window');

width = width / 2;

import colors from 'styles/_colors';

export default StyleSheet.create({
  cardProductFooterCol: {
    paddingTop: 3.2,
    paddingBottom: 1.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardProductFooter: {
    paddingTop: 8,
    paddingBottom: 8
  },
  cardProductName: {
    color: colors.colorDark,
    fontSize: 14,
    fontWeight: '500'
  },
  cardProductOwner: {
    fontSize: 12,
    color: colors.colorGrey
  },
  cardProductStatus: {
    fontSize: 12,
    color: colors.colorGrey
  },
  cardProductPrice: {
    color: colors.colorAccent,
    fontSize: 12
  },
  cardProductLocation: {
    color: colors.colorDark,
    fontSize: 12
  },
  cardProductContainer: {
    marginLeft: 8,
    marginRight: 8,
    flex: 0.5,
    backgroundColor: colors.colorLight,
    marginBottom: 8,
    marginTop: 8
  },
  productListHorizontal: {
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: 'stretch',
    borderBottomWidth: 1,
    backgroundColor: colors.colorLight,
    paddingBottom: 16,
    borderBottomColor: colors.colorBorderLight
  },
  CategoryListWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  CategoryWrapper: {
    width: width - 8,
    padding: 8
  },
  CategoryButton: {
    padding: 0,
    elevation: 0,
    borderRadius: 5
  },
  CategoryText: {
    fontSize: 10,
    textAlign: 'center'
  }
});
