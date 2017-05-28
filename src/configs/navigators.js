import React from 'react';
import { Icon } from 'native-base';

import { StackNavigator, TabNavigator } from 'react-navigation';

import LandingScreen from 'components/landing/LandingScreen';
import LoginScreen from 'components/login/LoginScreen';
import RegisterScreen from 'components/register/RegisterScreen';
import ForgotScreen from 'components/forgot/ForgotScreen';

import FeedScreen from 'components/feed/FeedScreen';
import FavoriteScreen from 'components/favorite/FavoriteScreen';
import CreateScreen from 'components/create/CreateScreen';
import NotificationScreen from 'components/notification/NotificationScreen';
import ProfileScreen from 'components/profile/ProfileScreen';

import FindScreen from 'components/find/FindScreen';

const FeedSection = StackNavigator({

	Feed: {
		screen: FeedScreen,
		navigationOptions: {
			header: null
		}
	},

	Find: {
		screen: FindScreen,
		navigationOptions: {
			title: 'Temukan kotak'
		}
	}

}, {
	headerMode: 'float'
});

const MainNavigator = TabNavigator({

	FeedSection: {
		screen: FeedSection,
		navigationOptions: {
			tabBarLabel: 'Beranda',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-home-outline" />
			)
		}
	},

	Favorite: {
		screen: FavoriteScreen,
		navigationOptions: {
			title: 'Favorit',
			tabBarLabel: 'Favorit',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-heart-outline" />
			)
		}
	},
	Create: {
		screen: CreateScreen,
		navigationOptions: {
			tabBarLabel: 'Pasang',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-add-circle-outline" />
			)
		}
	},
	Notification: {
		screen: NotificationScreen,
		navigationOptions: {
			tabBarLabel: 'Pesan',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-notifications-outline" />
			)
		}
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			tabBarLabel: 'Profil',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-person" />
			)
		}
	}

}, {
	tabBarPosition: 'bottom',
	swipeEnabled: true,
	lazy: true,
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#1ba39c',
		inactiveTintColor: '#4d4d4d',
		showIcon: true,
		pressColor: '#e8e8e8',
		labelStyle: {
			fontSize: 8,
			paddingBottom: 0
		},
		style: {
			backgroundColor: '#fff'
		},
		indicatorStyle: {
			height: 0
		},
		tabStyle: {
			paddingBottom: 0
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
			header: null,
			title: 'CARIKOTAK',
			headerLeft: null,
			headerTitleStyle: {
				alignSelf: 'center',
				textAlign: 'center'
			},
		}
	}
}, {
	navigationOptions: {
		// header: {
		// 	style: {
		// 		elevation: 0,
		// 		shadowOpacity: 0
		// 	}
		// }
	},
	headerMode: 'float'
});

export default AppNavigator;
