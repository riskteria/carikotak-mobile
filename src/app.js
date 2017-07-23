import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import RootNavigatorContainer from 'navigators/rootNavigator/RootNavigatorContainer';

import getTheme from 'theme/components';
import platform from 'theme/variables/platform';
import store from './store';
import { isSignedIn } from 'services/AuthHandler';

class CarikotakApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(() => {
        this.setState({ signedIn: true, checkedSignIn: true });
        this.props.navigation.navigate();
      })
      .catch(err => err);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { signedIn, checkedSignIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={store}>
          <RootNavigatorContainer />
        </Provider>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('CariKotak', () => CarikotakApp);

export default CarikotakApp;
