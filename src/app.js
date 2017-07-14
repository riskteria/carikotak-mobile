import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import App from './configs/navigators';
import getTheme from 'theme/components';
import platform from 'theme/variables/platform';
import configureStore from './store/configureStore';
import { isSignedIn } from 'services/AuthHandler';

const store = configureStore();

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
				this.setState({ signedIn: res, checkedSignIn: true })
			})
			.catch((err) => err);
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render () {

		const { signedIn, checkedSignIn } = this.state;

		const AppLayout = App(signedIn);

		return (
			<StyleProvider style={ getTheme(platform) }>
				<Provider store={ store }>
					<AppLayout />
				</Provider>
			</StyleProvider>
		);
	}

}

AppRegistry.registerComponent('CariKotak', () => CarikotakApp);

export default CarikotakApp;
