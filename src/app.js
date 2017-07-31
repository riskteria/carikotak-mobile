import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleProvider } from 'native-base';

import { createRootNavigator } from 'navigators/rootNavigator/RootNavigator';
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
    const { updateToken } = this.props;

    isSignedIn()
      .then(res => {
        updateToken(res);
        alert(JSON.stringify(this.props.sessionHandler));
        if (res) {
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

    const Layout = createRootNavigator(authenticated);

    return (
      <StyleProvider style={getTheme(platform)}>
        <Layout />
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
