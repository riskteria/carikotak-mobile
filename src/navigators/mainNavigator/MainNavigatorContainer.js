import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainNavigator } from './MainNavigator';

const mapStateToProps = state => {
  return {
    navigationState: state.mainNavigator
  };
};

class AppNavigator extends Component {
  constructor(props) {
    super(props);

    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleBackPress = () => {
    const { dispatch, navigationState } = this.props;

    if (navigationState && navigationState.index) {
      dispatch(NavigationActions.back());
      return true;
    }

    return false;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    const { dispatch, navigationState, isSignedIn } = this.props;

    const MainNavigatorWithState = MainNavigator(isSignedIn);

    return (
      <MainNavigatorWithState
        navigation={addNavigationHelpers({
          state: navigationState,
          dispatch: dispatch
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(AppNavigator);
