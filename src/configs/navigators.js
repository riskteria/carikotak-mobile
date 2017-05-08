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
		navigationOptions: ({ navigation }) => ({
		})
	},
	Favorite: {
		screen: FavoriteScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Fav'
		})
	},
	Create: {
		screen: CreateScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Create'
		})
	},
	Notification: {
		screen: NotificationScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Notif'
		})
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Profile'
		})
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
	},
	Main: {
		screen: MainNavigator,
		navigationOptions: ({ navigation }) => ({
			title: 'Carikotak',
			headerTitleStyle: {
				textAlign: 'center'
			},
			headerLeft: null
		})
	}
}, {
	headerMode: 'float'
});

export default AppNavigator;
