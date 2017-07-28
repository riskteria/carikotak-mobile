import React, { Component } from 'react';
import { View } from 'react-native';

import StoryScreenInfoBasic from './StoryScreenInfoBasic';
import StoryScreenInfoDescription from './StoryScreenInfoDescription';

class StoryScreenInfo extends Component {
  render() {
    const { story } = this.props;

    return (
      <View>
        <StoryScreenInfoBasic story={story} />
        <StoryScreenInfoDescription story={story} />
      </View>
    );
  }
}

export default StoryScreenInfo;
