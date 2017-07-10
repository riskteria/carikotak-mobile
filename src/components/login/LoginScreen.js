import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Button, Item, Label, Input, Text } from 'native-base';
import Config from 'react-native-config';

import styles from './styles';
import colors from 'styles/_colors';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

class LoginScreen extends Component {

	constructor (props) {
		super(props);

		this.state = {
			user: {
				username: 'admin@admin.com',
				password: 'password',
				grant_type: 'password',
				client_id: '2',
				client_secret: 's8SulETPcMJ1DzRoMO0PwObdp3MNYLreOZU6RObq'
			},
			isLoading: false
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTintColor: '#fff',
			headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)'
		};
	}

	_doLogin () {
		const user = this.state.user;

		this.state.isLoading = true;

		fetch('https://www.buburbulan.xyz/api/oauth/token', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: JSON.stringify(user)
		})
		.then((response) => {
			if (!response.ok) {
				throw Error(response);
			}
			return response.json();
		})
		.then(responseJson => {
			this.props.navigation('Main');
			this.state.isLoading = false;
		})
		.catch(error => {
			this.state.isLoading = false;
		});
	}

	render () {
		const { navigate } = this.props.navigation;

		return (
			<ScrollView style={styles.container}>

				<StatusBar
					backgroundColor="#1ba39c"
					barStyle="dark-content" />

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>EMAIL</Label>
						<Input onChangeText={email => this.setState({ user: { email } })} />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>KATA SANDI</Label>
						<Input onChangeText={password => this.setState({ user: {password} })} secureTextEntry />
					</Item>

				</View>

				<Button light rounded block onPress={() => { this._doLogin(); }}>
					<Text style={{ color: colors.colorAccent }}>Login</Text>
				</Button>

				<View style={styles.formGroup}>
					<Text onPress={() => navigate('Forgot')} style={StyleSheet.flatten(styles.forgotPassword)}>Lupa Kata Sandi?</Text>
				</View>

			</ScrollView>
		);
	}

}

export default LoginScreen;
