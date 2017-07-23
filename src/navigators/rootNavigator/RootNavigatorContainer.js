import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { RootNavigator } from './RootNavigator';

const mapStateToProps = state => {
  return {
    navigationState: state.rootNavigator
  };
};

class RootNavigatorContainer extends Component {
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

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    const { dispatch, navigationState } = this.props;

    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(RootNavigatorContainer);
