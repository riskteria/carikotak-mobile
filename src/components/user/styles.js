import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const parentStyle = {
  parentView: {
    backgroundColor: colors.colorLight,
    flex: 1
  }
};

const tabBarStyle = {
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
  }
};

const coverStyle = {
  coverBg: {
    backgroundColor: colors.colorAccent
  },
  coverBgImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.1,
    height: 200
  },
  profileCard: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  profileCardItem: {
    backgroundColor: 'transparent'
  },
  textNote: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12
  },
  textNoteSeparator: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    paddingLeft: 32,
    paddingRight: 32
  },
  buttonInfo: {
    marginLeft: 16
  }
};

const tabProduct = {
  cardProductContainer: {
    backgroundColor: colors.colorLight,
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.colorBorderLight
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
    fontSize: 16,
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
    fontWeight: 'bold'
  },
  cardProductLocation: {
    fontWeight: 'bold',
    color: colors.colorDark
  },
  cardFooterInfo: {
    fontSize: 14,
    color: colors.colorTomato,
    marginRight: 4
  },

  cardContainer: {
    elevation: 0,
    marginTop: 8,
    marginBottom: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.colorBorderLight
  }
};

const tabStory = {
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
  }
};

const commentCard = {
  cardComment: {
    elevation: 0,
    marginTop: 0,
    marginBottom: 0
  },
  commentTextWrapper: {
    lineHeight: 18
  },
  commentText: {
    fontSize: 14,
    fontStyle: 'italic'
  },
  commentUser: {
    color: colors.colorTomato,
    fontSize: 14
  },
  commentDate: {
    fontSize: 10
  },
  commentProduct: {
    color: colors.colorAccent,
    fontWeight: 'bold'
  }
};

const infoModal = {
  modalBackdrop: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalBody: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 4
  },
  infoSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  textCenter: {
    textAlign: 'center',
    color: colors.colorDark
  }
};

const styles = StyleSheet.create(
  Object.assign(
    {},
    parentStyle,
    tabBarStyle,
    coverStyle,
    tabProduct,
    tabStory,
    commentCard,
    infoModal
  )
);

export default styles;
