import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import CommentScreenHeader from './CommentScreenHeader';
import CommentScreenFooter from './CommentScreenFooter';
import CommentList from './CommentList';

import styles from './styles';

class CommentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      comments: [1, 2, 3]
    };

    this._onRefresh = this._onRefresh.bind(this);
  }

  _onRefresh() {
    this.setState({ refreshing: true });
  }

  render() {
    const { refreshing, comments } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <CommentScreenHeader navigation={navigation} />
        <Container style={StyleSheet.flatten(styles.commentContainer)}>
          <CommentList
            navigation={navigation}
            refreshing={refreshing}
            _onRefresh={this._onRefresh}
            comments={comments}
          />
        </Container>
        <CommentScreenFooter />
      </Container>
    );
  }
}

export default CommentScreen;
