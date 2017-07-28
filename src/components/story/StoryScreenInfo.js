import React, { Component } from 'react';
import { View } from 'react-native';

import StoryScreenInfoBasic from './StoryScreenInfoBasic';

class StoryScreenInfo extends Component {
  render() {
    const { story } = this.props;

    return (
      <View>
        <StoryScreenInfoBasic story={story} />
      </View>
    );
  }
}

export default StoryScreenInfo;
