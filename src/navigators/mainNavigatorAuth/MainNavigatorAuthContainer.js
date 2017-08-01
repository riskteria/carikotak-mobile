import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MainNavigatorAuth } from './MainNavigatorAuth';

const mapStateToProps = state => {
  return {
    navigationState: state.mainNavigatorAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class MainNavigatorAuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainNavigatorAuth />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MainNavigatorAuthContainer
);
