import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import MainNavigatorContainer from './navigators/mainNavigator/MainNavigatorContainer';
import getTheme from 'theme/components';
import platform from 'theme/variables/platform';
import store from './store';
import { isSignedIn } from 'services/AuthHandler';

class CarikotakApp extends Component {

	constructor (props) {
		super(props);

		this.state = {
			signedIn: false,
			checkedSignIn: false
		};
	}

	componentWillMount() {
		isSignedIn()
			.then((res) => {
				this.setState({ signedIn: res, checkedSignIn: true });
			})
			.catch((err) => err);
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render () {

		const { signedIn } = this.state;

		return (
			<StyleProvider style={ getTheme(platform) }>
				<Provider store={ store }>
					<MainNavigatorContainer isSignedIn={ signedIn } />
				</Provider>
			</StyleProvider>
		);
	}

}

AppRegistry.registerComponent('CariKotak', () => CarikotakApp);

export default CarikotakApp;
