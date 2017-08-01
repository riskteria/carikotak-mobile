import React, { Component } from 'react';
import { Text } from 'native-base';

class UserTabReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: {
        products: [],
        stories: []
      }
    };

    this._fetchUserReviews = this._fetchUserReviews.bind(this);
  }

  _fetchUserReviews() {
    //
  }

  componentWillMount() {
    this._fetchUserReviews();
  }

  render() {
    return <Text>Tab Review</Text>;
  }
}

export default UserTabReview;
