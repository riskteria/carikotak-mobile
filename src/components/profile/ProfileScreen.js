import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { Button, Text } from 'native-base';

import styles from './styles';
import { onSignedOut, isSignedIn } from 'services/AuthHandler';

class ProfileScreen extends Component {

	_onPressLogout() {
		onSignedOut()
			.then(() => {
				this.props.navigation.navigate('Home')
			})
			.catch(() => {
				ToastAndroid.show('Could not signed out', ToastAndroid.SHORT);
			});
	}

	componentDidMount() {
		isSignedIn().then(res => {
			console.log('ok' + res);
		}).catch(err => {
			console.log('err');
		});
	}

	render() {

		const { navigate } = this.props.navigation;

		return (
			<ScrollView style={styles.parentView}>
				<Button onPress={() => { this._onPressLogout() }}><Text>Logout</Text></Button>
				<Button onPress={() => navigate('AccountSetting')}><Text>Account Settings</Text></Button>
				<Button onPress={() => navigate('ProfileSetting')}><Text>Profile Settings</Text></Button>
			</ScrollView>
		);
	}

}

export default ProfileScreen;
