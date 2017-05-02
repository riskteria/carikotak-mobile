import { StackNavigator } from 'react-navigation';

import LandingScreen from './components/landing/LandingScreen';
import LoginScreen from './components/login/LoginScreen';
import RegisterScreen from './components/register/RegisterScreen';

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
			title: 'Sign In With Email',
			headerTintColor: 'transparent'
		})
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Create new account',
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		})
	}
};

const StackNavigatorConfig = {
	headerMode: 'float'
};

const AppStack = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppStack;
