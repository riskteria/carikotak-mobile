import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

class NotificationScreen extends Component {

	render () {
		return (
			<ScrollView style={styles.parentView}>
				<Text>Notification Screen</Text>
			</ScrollView>
		);
	}

}

export default NotificationScreen;
