import React, { Component } from 'react';

import { MainTabNavigator } from './MainTabNavigator';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.mainTabNavigator
  };
};

class MainTabContainer extends Component {
  static navigationOptions = {
    header: null,
    title: 'CARIKOTAK',
    headerLeft: null,
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center'
    }
  };

  render() {
    return <MainTabNavigator />;
  }
}

export default connect(mapStateToProps)(MainTabContainer);
