import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Button, Item, Label, Input, Text } from 'native-base';
import { OAUTH_GRANT_TYPE, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from 'react-native-dotenv';

import styles from './styles';
import colors from 'styles/_colors';

import { API } from 'services/APIService';

class LoginScreen extends Component {

	constructor (props) {
		super(props);

		this.state = {
			user: {
				username: 'admin@admin.com',
				password: 'passwordx',
				grant_type: OAUTH_GRANT_TYPE,
				client_id: OAUTH_CLIENT_ID,
				client_secret: OAUTH_CLIENT_SECRET
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

		API.post('api/tes', user)
		.then((response) => {
			this.state.isLoading = false;
			this.props.navigation.navigate('Main');
		})
		.catch((error) => {
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
