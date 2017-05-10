import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';

import App from 'configs/navigators';
import getTheme from 'theme/components';
import platform from 'theme/variables/platform';

class CarikotakApp extends Component {

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
