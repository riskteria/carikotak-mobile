import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Content } from 'native-base';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import { API } from 'services/APIService';

import CommentList from './CommentList';

class ProfileTabReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingSpin: false,
      refreshing: false,
      comments: []
    };

    this._fetchUserComments = this._fetchUserComments.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  _onRefresh() {
    const { user } = this.props;
    this.setState({ refreshing: true });
    API()
      .get(`api/user/${user.username}/comment-product`)
      .then(res => {
        this.setState({ refreshing: false, comments: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        ToastAndroid.show(`Error: ${err.response.data.message}`);
      });
  }

  _fetchUserComments() {
    const { user } = this.props;
    this.setState({ loadingSpin: true });
    API()
      .get(`api/user/${user.username}/comment-product`)
      .then(res => {
        this.setState({ loadingSpin: false, comments: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(`Error: ${err.response.data.message}`);
      });
  }

  componentWillMount() {
    this._fetchUserComments();
  }

  render() {
    const { comments, loadingSpin, refreshing } = this.state;
    const { navigation } = this.props;

    return (
      <Content>
        {loadingSpin
          ? <ProgressBar />
          : <CommentList
              comments={comments}
              refreshing={refreshing}
              navigation={navigation}
              _onRefresh={this._onRefresh}
            />}
      </Content>
    );
  }
}

export default ProfileTabReview;
