import App from './app';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from './store';

class AppContainer extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CariKotak', () => AppContainer);

export default AppContainer;
