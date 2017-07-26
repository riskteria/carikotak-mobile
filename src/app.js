import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { createRootNavigator } from 'navigators/rootNavigator/RootNavigator';

import getTheme from 'theme/components';
import platform from 'theme/variables/platform';
import store from './store';
import { isSignedIn } from 'services/AuthHandler';

class CarikotakApp extends Component {
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
          this.setState({ authenticated: true });
          // this.props.navigation.navigate();
        }
        this.setState({ checkedSignIn: true });
      })
      .catch(err => err);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { authenticated, checkedSignIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(authenticated);

    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('CariKotak', () => CarikotakApp);

export default CarikotakApp;
