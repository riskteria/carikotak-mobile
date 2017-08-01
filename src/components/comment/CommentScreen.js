import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import CommentScreenHeader from './CommentScreenHeader';
import CommentScreenFooter from './CommentScreenFooter';
import CommentList from './CommentList';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import styles from './styles';

import { API } from 'services/APIService';

class CommentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      loadingSpin: false,
      comments: []
    };

    this._onRefresh = this._onRefresh.bind(this);
    this._fetchAllComments = this._fetchAllComments.bind(this);
    this._onCommentSent = this._onCommentSent.bind(this);
  }

  _onRefresh() {
    const { id, type } = this.props.navigation.state.params;
    this.setState({ refreshing: true });
    API()
      .get(`api/${type}/${id}/comment`)
      .then(res => {
        this.setState({ refreshing: false, comments: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  _fetchAllComments() {
    const { id, type } = this.props.navigation.state.params;
    this.setState({ loadingSpin: true });
    API()
      .get(`api/${type}/${id}/comment`)
      .then(res => {
        this.setState({ loadingSpin: false, comments: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          `Error: ${err.response.data.message}`,
          ToastAndroid.SHORT
        );
      });
  }

  _onCommentSent(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }

  componentWillMount() {
    this._fetchAllComments();
  }

  render() {
    const { refreshing, comments, loadingSpin } = this.state;
    const { navigation } = this.props;
    const { type, id } = navigation.state.params;

    const CommentListContaienr = () =>
      <Container style={StyleSheet.flatten(styles.commentContainer)}>
        <CommentList
          navigation={navigation}
          refreshing={refreshing}
          _onRefresh={this._onRefresh}
          comments={comments}
        />
      </Container>;

    return (
      <Container>
        <CommentScreenHeader navigation={navigation} />
        {loadingSpin ? <ProgressBar /> : <CommentListContaienr />}
        <CommentScreenFooter
          _onCommentSent={this._onCommentSent}
          type={type}
          id={id}
        />
      </Container>
    );
  }
}

export default CommentScreen;
