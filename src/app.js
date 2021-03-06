import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleProvider } from 'native-base';

import MainNavigatorAuthContainer from 'navigators/mainNavigatorAuth/MainNavigatorAuthContainer';
import MainNavigatorNoAuthContainer from 'navigators/mainNavigatorNoAuth/MainNavigatorNoAuthContainer';

import { isSignedIn } from 'services/AuthHandler';
import { updateAccessToken } from 'actions/authAction';

import getTheme from 'theme/components';
import platform from 'theme/variables/platform';

const mapStateToProps = state => {
  return {
    sessionHandler: state.authSessionHandler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateToken: token => {
      dispatch(updateAccessToken(token));
    }
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => {
        if (res) {
          this.props.updateToken(res);
          this.setState({ authenticated: true });
        }
        this.setState({ checkedSignIn: true });
      })
      .catch(err => err);
  }

  render() {
    const { authenticated, checkedSignIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    return (
      <StyleProvider style={getTheme(platform)}>
        {authenticated
          ? <MainNavigatorAuthContainer />
          : <MainNavigatorNoAuthContainer />}
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
