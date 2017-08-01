import React, { Component } from 'react';
import { Container } from 'native-base';

import { API } from 'services/APIService';

import StoryList from './StoryList';
import StoryListHeader from './StoryListHeader';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

class StoryListScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetStories = this._onGetStories.bind(this);
    this._onRefresh = this._onRefresh.bind(this);

    this.state = {
      stories: [],
      loadingSpin: false,
      refreshing: false
    };
  }

  _onRefresh() {
    //
  }

  _onGetStories() {
    this.setState({ loadingSpin: true });

    API()
      .get('api/post')
      .then(res => {
        this.setState({ loadingSpin: false });
        this.setState({ stories: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onGetStories();
  }

  render() {
    const { loadingSpin, refreshing, stories } = this.state;
    const { navigation } = this.props;

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
      <Container>
        <StoryListHeader navigation={navigation} />
        {loadingSpin ? <ProgressBar /> : <StoryListWrapper />}
      </Container>
    );
  }
}

export default StoryListScreen;
