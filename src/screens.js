import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import LandingScreen from './modules/views/LandingScreen';
import LoginScreen from './modules/views/LoginScreen';

const CarikotakApp = StackNavigator({
	Home: {
		screen: LandingScreen
	},
	Login: {
		screen: LoginScreen
	}
});

AppRegistry.registerComponent('carikotak', () => CarikotakApp);
