import React, { Component } from 'react';
import { Icon } from 'native-base';

import { MessageTabNavigator } from './MessageTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.messageTabNavigator
  };
};

class MessageTabContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Pesan',
    tabBarIcon: ({ tintColor }) =>
      <Icon style={{ color: tintColor }} name="ios-mail-outline" />
  };

  render() {
    return <MessageTabNavigator />;
  }
}

export default connect(mapStateToProps)(MessageTabContainer);
