import LandingScreen from '../components/landing/LandingScreen';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/register/RegisterScreen';

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
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
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

export default RouteConfigs;
