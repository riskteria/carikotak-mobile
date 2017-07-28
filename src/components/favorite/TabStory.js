import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import styles from './styles';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
import StoryList from './StoryList';

import { API } from 'services/APIService';

class TabStory extends Component {
  constructor(props) {
    super(props);

    this._onFetchFavorites = this._onFetchFavorites.bind(this);
    this._onRefresh = this._onRefresh.bind(this);

    this.state = {
      sotries: [],
      refreshing: false,
      loadingSpinner: false
    };
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    API.get('api/me/favorite-posts')
      .then(res => {
        this.setState({ refreshing: false, stories: res.data });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        throw err;
      });
  }

  _onFetchFavorites() {
    this.setState({ loadingSpinner: true });

    API.get('api/me/favorite-posts')
      .then(res => {
        this.setState({ loadingSpinner: false, stories: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpinner: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onFetchFavorites();
  }

  render() {
    const { navigation } = this.props;
    const { loadingSpinner, stories, refreshing } = this.state;

    const StoryListWrapper = () =>
      <Container>
        <StoryList
          stories={stories}
          navigation={navigation}
          refreshing={refreshing}
          _onRefresh={this._onRefresh}
        />
      </Container>;

    return (
      <Container style={StyleSheet.flatten(styles.tabSection)}>
        {loadingSpinner ? <ProgressBar /> : <StoryListWrapper />}
      </Container>
    );
  }
}

export default TabStory;
