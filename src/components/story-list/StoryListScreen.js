import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import { API } from 'services/APIService';

import ProgressBar from 'components/_shared/progress-bar/ProgressBar';
class StoryListScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetStories = this._onGetStories.bind(this);

    this.state = {
      stories: [],
      loadingSpin: false
    };
  }

  _onGetStories() {
    this.setState({ loadingSpin: true });

    API.get('api/post')
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
    const { loadingSpin } = this.state;

    const StoryList = () =>
      <Text>
        This is Story List, total: {this.state.stories.length}
      </Text>;

    return (
      <Container>
        {loadingSpin ? <ProgressBar /> : <StoryList />}
      </Container>
    );
  }
}

export default StoryListScreen;
