import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import StoryList from './StoryList';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class ProfileTabStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingSpin: false,
      refreshing: false,
      stories: []
    };

    this._fetchUserStories = this._fetchUserStories.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  _fetchUserStories() {
    const { user } = this.props;
    this.setState({ loadingSpin: false });
    API()
      .get(`api/post?user=${user.id}`)
      .then(res => {
        this.setState({ loadingSpin: false, stories: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onRefresh() {
    const { user } = this.props;
    this.setState({ refreshing: true });

    API()
      .get(`api/post?user=${user.id}`)
      .then(res => {
        this.setState({ refreshing: false, stories: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        throw err;
      });
  }

  componentWillMount() {
    this._fetchUserStories();
  }

  render() {
    const { loadingSpinner, stories, refreshing } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        {loadingSpinner
          ? <ProgressBar />
          : <StoryList
              navigation={navigation}
              stories={stories}
              _onRefresh={this._onRefresh}
              refreshing={refreshing}
            />}
      </Container>
    );
  }
}

export default ProfileTabStory;
