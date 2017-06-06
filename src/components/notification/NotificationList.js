import React, { Component } from 'react';
import { View } from 'native-base';

import NotificationCard from './NotificationCard';

class NotificationList extends Component {

	render () {

		const ListNotificationCard = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
			(data, index) => <NotificationCard data={data} key={index} />);

		return (
			<View>
				{ ListNotificationCard }
			</View>
		);

	}

}

export default NotificationList;
