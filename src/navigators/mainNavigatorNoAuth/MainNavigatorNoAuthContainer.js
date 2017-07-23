import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainNavigatorNoAuth } from './MainNavigatorNoAuth';

const mapStateToProps = state => {
  return {
    navigationState: state.mainNavigatorNoAuth
  };
};

class MainNavigatorNoAuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, navigationState } = this.props;

    return (
      <MainNavigatorNoAuth
        navigation={addNavigationHelpers({
          state: navigationState,
          dispatch: dispatch
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(MainNavigatorNoAuthContainer);
