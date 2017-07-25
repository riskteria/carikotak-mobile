import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import ProgressBar from 'components/_shared/progress-bar/ProgressBar';

import { API } from 'services/APIService';

class StoryScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetStory = this._onGetStory.bind(this);

    this.state = {
      story: false,
      loadingSpin: false
    };
  }

  _onGetStory() {
    this.setState({ loadingSpin: true });

    API.get(`api/post/${this.props.navigation.state.params.slug}`)
      .then(res => {
        this.setState({ loadingSpin: false });
        this.setState({ story: res.data });
      })
      .catch(err => {
        this.setState({ loadingSpin: false });
        throw err;
      });
  }

  componentWillMount() {
    this._onGetStory();
  }

  render() {
    const { loadingSpin } = this.state;

    const StoryDetail = () =>
      <Text>
        {this.state.story.title}
      </Text>;

    return (
      <Container>
        {loadingSpin ? <ProgressBar /> : <StoryDetail />}
      </Container>
    );
  }
}

export default StoryScreen;
