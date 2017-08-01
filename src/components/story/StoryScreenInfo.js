import React, { Component } from 'react';
import { View } from 'react-native';

import StoryScreenInfoBasic from './StoryScreenInfoBasic';
import StoryScreenInfoUser from './StoryScreenInfoUser';
import StoryScreenInfoDescription from './StoryScreenInfoDescription';

class StoryScreenInfo extends Component {
  render() {
    const { story, navigation } = this.props;

    return (
      <View>
        <StoryScreenInfoBasic story={story} />
        <StoryScreenInfoUser story={story} navigation={navigation} />
        <StoryScreenInfoDescription story={story} />
      </View>
    );
  }
}

export default StoryScreenInfo;
