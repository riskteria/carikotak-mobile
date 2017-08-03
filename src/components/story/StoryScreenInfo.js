import React, { Component } from 'react';
import { View } from 'react-native';

import StoryScreenInfoBasic from './StoryScreenInfoBasic';
import StoryScreenInfoRating from './StoryScreenInfoRating';
import StoryScreenInfoOption from './StoryScreenInfoOption';
import StoryScreenInfoUser from './StoryScreenInfoUser';
import StoryScreenInfoDescription from './StoryScreenInfoDescription';

class StoryScreenInfo extends Component {
  render() {
    const { story, navigation, _onRatingGiven } = this.props;

    return (
      <View>
        <StoryScreenInfoBasic story={story} />

        <StoryScreenInfoRating story={story} _onRatingGiven={_onRatingGiven} />

        <StoryScreenInfoOption story={story} navigation={navigation} />

        <StoryScreenInfoUser story={story} navigation={navigation} />

        <StoryScreenInfoDescription story={story} />
      </View>
    );
  }
}

export default StoryScreenInfo;
