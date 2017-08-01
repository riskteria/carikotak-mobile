import { StyleSheet } from 'react-native';

import colors from 'styles/_colors';

const commentLayout = {
  commentContainer: {
    backgroundColor: colors.colorLight
  }
};

const commentFooter = {
  footerInput: {
    backgroundColor: colors.colorSmoke,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14
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

const commentCard = {
  cardComment: {
    elevation: 0,
    marginTop: 0,
    marginBottom: 0
  },
  commentText: {
    fontSize: 14
  },
  commentUser: {
    color: colors.colorTomato,
    fontSize: 14
  },
  commentDate: {
    fontSize: 10
  }
};

export default StyleSheet.create(
  Object.assign({}, commentFooter, commentCard, commentLayout)
);
