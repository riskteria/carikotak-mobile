import React, { Component } from 'react';
import { Icon } from 'native-base';

import { FeedTabNavigator } from './FeedTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.feedTabNavigator
  };
};

class FeedTabContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Beranda',
    tabBarIcon: ({ tintColor }) =>
      <Icon style={{ color: tintColor }} name="ios-home-outline" />
  };

  render() {
    return <FeedTabNavigator />;
  }
}

export default connect(mapStateToProps)(FeedTabContainer);
