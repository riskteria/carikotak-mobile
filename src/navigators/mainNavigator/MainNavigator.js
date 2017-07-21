import { StackNavigator } from 'react-navigation';

import LandingScreen from 'components/landing/LandingScreen';
import LoginScreen from 'components/login/LoginScreen';
import RegisterScreen from 'components/register/RegisterScreen';
import ForgotScreen from 'components/forgot/ForgotScreen';

import ProductScreen from 'components/product/ProductScreen';
import StoryScreen from 'components/story/StoryScreen';

import MainTabContainer from '../mainTab/MainTabContainer';

const routeConfiguration = {
	Landing: {
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
	Main: { screen: MainTabContainer },

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
};

export const MainNavigator = (signedIn = false) => StackNavigator(routeConfiguration, {
	headerMode: 'float',
	initialRouteName: signedIn ? 'Main' : 'Landing'
});

export const MainNavigatorReducer = (state, action) => {
	switch (action.type) {
		default:
			return MainNavigator().router.getStateForAction(action, state);
	}
};
