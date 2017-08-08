import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: colors.colorLight,
    flex: 1
  },
  cardContainer: {
    elevation: 0,
    marginTop: 8,
    marginBottom: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.colorBorderLight
  },
  tabSection: {
    flex: 1
  },
  tabStyle: {
    backgroundColor: colors.colorLight
  },
  tabTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.colorGrey
  },
  tabActiveTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.colorAccent
  },
  tabUnderlineStyle: {
    height: 1,
    backgroundColor: colors.colorAccent
  },
  productListHorizontal: {
    padding: 8
  },
  cardProductContainer: {
    backgroundColor: colors.colorLight,
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.colorBorderLight
  },
  cardStoryHeader: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardStoryHeaderName: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.colorBlack
  },
  cardStoryFooter: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  cardStoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.colorBlack
  },
  cardProductFooter: {
    paddingTop: 8,
    paddingBottom: 8
  },
  cardProductFooterCol: {
    paddingTop: 1.6,
    paddingBottom: 1.6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    fontWeight: 'bold',
    color: colors.colorDark
  },
  cardFooterInfo: {
    fontSize: 14,
    color: colors.colorTomato,
    marginRight: 4
  }
});

export default styles;
