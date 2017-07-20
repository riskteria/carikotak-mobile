import { StackNavigator } from 'react-navigation';

import MessageListScreen from 'components/message-list/MessageListScreen';
import MessageScreen from 'components/message/MessageScreen';
import NotificationScreen from 'components/notification/NotificationScreen';

const routeConfiguration = {

	MessageList: {
		screen: MessageListScreen,
		navigationOptions: {
			header: null
		}
	},

	Message: {
		screen: MessageScreen,
		navigationOptions: {
			header: null
		}
	},

	Notification: {
		screen: NotificationScreen,
		navigationOptions: {
			header: null,
			title: 'Pemberitahuan'
		}
	},

}

const stackNavigatorConfiguration = {
	//
}

export const MessageTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
