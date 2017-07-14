import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import App from './configs/navigators';
import getTheme from 'theme/components';
import platform from 'theme/variables/platform';
import configureStore from './store/configureStore';

const store = configureStore();

class CarikotakApp extends Component {

	componentDidMount() {
		SplashScreen.hide();
	}

	render () {
		return (
			<StyleProvider style={ getTheme(platform) }>
				<Provider store={ store }>
					<App />
				</Provider>
			</StyleProvider>
		);
	}

}

AppRegistry.registerComponent('CariKotak', () => CarikotakApp);

export default CarikotakApp;
