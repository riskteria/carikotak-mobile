import React, { Component } from 'react';
import { Text } from 'native-base';

class ProfileTabStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    };

    this._fetchUserStories = this._fetchUserStories.bind(this);
  }

  _fetchUserStories() {
    //
  }

  componentWillMount() {
    this._fetchUserStories();
  }

  render() {
    return <Text>Tab Story</Text>;
  }
}

export default ProfileTabStory;
