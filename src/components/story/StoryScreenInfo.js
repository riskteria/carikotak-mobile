import React, { Component } from 'react';
import { View } from 'react-native';

import StoryScreenInfoBasic from './StoryScreenInfoBasic';
import StoryScreenInfoRating from './StoryScreenInfoRating';
import StoryScreenInfoOption from './StoryScreenInfoOption';
import StoryScreenInfoUser from './StoryScreenInfoUser';
import StoryScreenInfoDescription from './StoryScreenInfoDescription';

class StoryScreenInfo extends Component {
  render() {
    const { story, navigation, _onRatingGiven, activeUser } = this.props;

    return (
      <View>
        <StoryScreenInfoBasic story={story} />

        <StoryScreenInfoRating story={story} _onRatingGiven={_onRatingGiven} />

        <StoryScreenInfoOption story={story} navigation={navigation} />

        <StoryScreenInfoUser
          story={story}
          navigation={navigation}
          activeUser={activeUser}
        />

        <StoryScreenInfoDescription story={story} />
      </View>
    );
  }
}

export default StoryScreenInfo;
