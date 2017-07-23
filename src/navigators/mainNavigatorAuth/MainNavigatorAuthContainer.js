import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainNavigatorAuth } from './MainNavigatorAuth';

const mapStateToProps = state => {
  return {
    navigationState: state.mainNavigatorAuth
  };
};

class MainNavigatorAuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, navigationState } = this.props;

    return (
      <MainNavigatorAuth
        navigation={addNavigationHelpers({
          state: navigationState,
          dispatch: dispatch
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(MainNavigatorAuthContainer);
