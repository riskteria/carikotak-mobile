import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import StoryScreenHeader from './StoryScreenHeader';
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
    const { loadingSpin, story } = this.state;
    const { navigation } = this.props;

    const StoryDetail = () =>
      <Text>
        {this.state.story.title}
      </Text>;

    return (
      <Container>
        <StoryScreenHeader story={story} navigation={navigation} />
        {loadingSpin ? <ProgressBar /> : <StoryDetail />}
      </Container>
    );
  }
}

export default StoryScreen;
