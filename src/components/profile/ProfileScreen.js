import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { Button, Text } from 'native-base';

import styles from './styles';
import { onSignedOut } from 'services/AuthHandler';

class ProfileScreen extends Component {

	_onPressLogout () {
		onSignedOut()
			.then(() => {
				this.props.navigation.navigate('Login')
			})
			.catch(() => {
				ToastAndroid.show('Could not signed out', ToastAndroid.SHORT);
			});
	}

	render () {
		return (
			<ScrollView style={styles.parentView}>
				<Button onPress={() => { this._onPressLogout() }}><Text>Logout</Text></Button>
			</ScrollView>
		);
	}

}

export default ProfileScreen;
