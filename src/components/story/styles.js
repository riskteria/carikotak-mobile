import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

export default StyleSheet.create({
  swiperWrapper: {
    //
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorAccent
  },
  infoSection: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: colors.colorLight
  },
  infoContent: {
    paddingTop: 4,
    paddingBottom: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoTitle: {
    fontSize: 28,
    color: colors.colorDark,
    fontWeight: '600'
  },
  infoContentRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.colorAccent
  },
  infoOwner: {
    color: colors.colorTomato
  },
  infoUserChild: {
    justifyContent: 'center',
    padding: 16,
    borderColor: 'transparent',
    borderWidth: 0
  },
  infoUserChildText: {
    fontSize: 14,
    color: colors.colorGrey
  }
});
