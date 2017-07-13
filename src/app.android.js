import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import App from './configs/navigators';
import getTheme from 'theme/components';
import platform from 'theme/variables/platform';

class CarikotakApp extends Component {

	componentDidMount() {
		SplashScreen.hide();
	}

	render () {
		return (
			<StyleProvider style={getTheme(platform)}>
				<App />
			</StyleProvider>
		);
	}

}

AppRegistry.registerComponent('CariKotak', () => CarikotakApp);

export default CarikotakApp;
