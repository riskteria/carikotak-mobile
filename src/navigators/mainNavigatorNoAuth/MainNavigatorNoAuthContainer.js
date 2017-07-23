import React, { Component } from 'react';
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
    return <MainNavigatorNoAuth />;
  }
}

export default connect(mapStateToProps)(MainNavigatorNoAuthContainer);
