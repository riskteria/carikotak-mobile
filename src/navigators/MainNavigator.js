import { StackNavigator } from 'react-navigation';

import LandingScreen from 'components/landing/LandingScreen';
import LoginScreen from 'components/login/LoginScreen';
import RegisterScreen from 'components/register/RegisterScreen';
import ForgotScreen from 'components/forgot/ForgotScreen';

import ProductScreen from 'components/product/ProductScreen';
import StoryScreen from 'components/story/StoryScreen';

import { MainTabNavigator } from './MainTabNavigator';

const routeConfiguration = {
	Home: {
		screen: LandingScreen,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		}
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: {
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		}
	},
	Forgot: {
		screen: ForgotScreen,
		navigationOptions: {
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		}
	},
	Main: {
		screen: MainTabNavigator,
		navigationOptions: {
			header: null,
			title: 'CARIKOTAK',
			headerLeft: null,
			headerTitleStyle: {
				alignSelf: 'center',
				textAlign: 'center'
			},
		}
	},
	Product: {
		screen: ProductScreen,
		navigationOptions: {
			title: 'Produk'
		}
	},
	Story: {
		screen: StoryScreen,
		navigationOptions: {
			title: 'Story'
		}
	}
}

const AppNavigator = (signedIn = false) => StackNavigator(routeConfiguration, {
	headerMode: 'float',
	initialRouteName: signedIn ? 'Main': 'Home'
});

export default AppNavigator;
