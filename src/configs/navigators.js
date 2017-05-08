import { StackNavigator, TabNavigator } from 'react-navigation';

import LandingScreen from '../components/landing/LandingScreen';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/register/RegisterScreen';
import ForgotScreen from '../components/forgot/ForgotScreen';

import FeedScreen from '../components/feed/FeedScreen';
import FavoriteScreen from '../components/favorite/FavoriteScreen';
import CreateScreen from '../components/create/CreateScreen';
import NotificationScreen from '../components/notification/NotificationScreen';
import ProfileScreen from '../components/profile/ProfileScreen';

const MainNavigator = TabNavigator({

	Feed: {
		screen: FeedScreen,
		navigationOptions: {
		}
	},
	Favorite: {
		screen: FavoriteScreen,
		navigationOptions: {
			tabBarLabel: 'Fav'
		}
	},
	Create: {
		screen: CreateScreen,
		navigationOptions: {
			tabBarLabel: 'Create'
		}
	},
	Notification: {
		screen: NotificationScreen,
		navigationOptions: {
			tabBarLabel: 'Notif'
		}
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			tabBarLabel: 'Profile'
		}
	}

}, {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		labelStyle: {
			fontSize: 10
		},
		activeTintColor: '#1ba39c',
		inactiveTintColor: '#95989a',
		style: {
			backgroundColor: '#fff'
		}
	}
});

const AppNavigator = StackNavigator({
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
		screen: MainNavigator,
		navigationOptions: {
			title: 'Carikotak',
			headerTitleStyle: {
				textAlign: 'center'
			},
			headerLeft: null
		}
	}
}, {
	headerMode: 'float'
});

export default AppNavigator;
