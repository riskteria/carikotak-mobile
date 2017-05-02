import { StackNavigator } from 'react-navigation';

import LandingScreen from './modules/views/LandingScreen';
import LoginScreen from './modules/views/LoginScreen';

const RouteConfigs = {
	Home: {
		screen: LandingScreen,
		navigationOptions: ({ navigation }) => ({
			header: null
		})
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Sign In With Email'
		})
	}
};

const StackNavigatorConfig = {
	//
};

const AppStack = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppStack;
