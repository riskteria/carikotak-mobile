import { StackNavigator } from 'react-navigation';

import AccountSetting from 'components/account-setting/AccountSettingScreen';
import ProfileOptionScreen from 'components/profile-option/ProfileOptionScreen';
import ProfileScreen from 'components/profile/ProfileScreen';
import ProfileSetting from 'components/profile-setting/ProfileSettingScreen';

const routeConfiguration = {

	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			header: null
		}
	},

	AccountSetting: {
		screen: AccountSetting,
		navigationOptions: {
			title: 'Account Setting'
		}
	},

	ProfileSetting: {
		screen: ProfileSetting,
		navigationOptions: {
			title: 'Profile Setting'
		}
	},

	ProfileOption: {
		screen: ProfileOptionScreen,
		navigationOptions: {
			header: null
		}
	},

};

const stackNavigatorConfiguration = {
	headerMode: 'float'
};

export const ProfileTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
