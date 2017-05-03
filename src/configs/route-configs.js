import LandingScreen from '../components/landing/LandingScreen';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/register/RegisterScreen';
import ForgotScreen from '../components/forgot/ForgotScreen';

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
	Forgot: {
		screen: ForgotScreen,
		navigationOptions: ({ navigation }) => ({
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
