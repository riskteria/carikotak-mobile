import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';

import StoryScreenHeader from './StoryScreenHeader';
import StoryScreeninfo from './StoryScreenInfo';
import StoryScreenSwiper from './StoryScreenSwiper';
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
        this.setState({ loadingSpin: false, story: res.data });
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
      <View>
        <ScrollView>
          <Content>
            <StoryScreenSwiper story={story} />
            <StoryScreeninfo story={story} />
          </Content>
        </ScrollView>
      </View>;

    return (
      <Container>
        <StoryScreenHeader story={story} navigation={navigation} />
        {loadingSpin ? <ProgressBar /> : <StoryDetail />}
      </Container>
    );
  }
}

export default StoryScreen;
