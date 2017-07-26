import { StyleSheet } from 'react-native';
import colors from 'styles/_colors';

const styles = StyleSheet.create({
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
  mainContainer: {
    backgroundColor: colors.colorSmoke,
    flex: 1
  },
  footerCol: {
    backgroundColor: colors.colorAccent
  },
  footerColButton: {
    flex: 1
  }
});

export default styles;
