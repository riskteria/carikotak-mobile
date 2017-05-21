import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

class ProfileScreen extends Component {

	render () {
		return (
			<ScrollView style={styles.parentView}>
				<Text>Profile Screen</Text>
			</ScrollView>
		);
	}

}

export default ProfileScreen;
