import React, { Component } from 'react';
import { Icon } from 'native-base';

import { CreateTabNavigator } from './CreateTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.createTabNavigator
  };
};

class CreateTabContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Pasang',
    tabBarIcon: ({ tintColor }) =>
      <Icon style={{ color: tintColor }} name="ios-add-circle-outline" />
  };

  render() {
    return <CreateTabNavigator />;
  }
}

export default connect(mapStateToProps)(CreateTabContainer);
