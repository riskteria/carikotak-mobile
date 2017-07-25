import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import ProgressBarContainer from 'components/_shared/progress-bar/ProgressBarContainer';

import { API } from 'services/APIService';

class StoryScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetStory = this._onGetStory.bind(this);

    this.state = {
      story: false
    };
  }

  _onGetStory() {
    const { startSpin, stopSpin } = this.props;

    startSpin();
    API.get(`api/post/${this.props.navigation.state.params.slug}`)
      .then(res => {
        stopSpin();
        this.setState({ story: res.data });
      })
      .catch(err => {
        stopSpin();
        throw err;
      });
  }

  componentWillMount() {
    this._onGetStory();
  }

  render() {
    const { loadingSpin } = this.props;

    const StoryDetail = () =>
      <Text>
        {this.state.story.title}
      </Text>;

    return (
      <Container>
        {loadingSpin.show ? <ProgressBarContainer /> : <StoryDetail />}
      </Container>
    );
  }
}

export default StoryScreen;
