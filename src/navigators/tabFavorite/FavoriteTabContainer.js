import React, { Component } from 'react';
import { Icon } from 'native-base';

import { FavoriteTabNavigator } from './FavoriteTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.favoriteTabNavigator
  };
};

class FavoriteTabContainer extends Component {
  static navigationOptions = {
    title: 'Favorit',
    tabBarLabel: 'Favorit',
    tabBarIcon: ({ tintColor }) =>
      <Icon style={{ color: tintColor }} name="ios-heart-outline" />
  };

  render() {
    return <FavoriteTabNavigator />;
  }
}

export default connect(mapStateToProps)(FavoriteTabContainer);
