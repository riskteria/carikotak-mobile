import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Input, Button, Item, Icon } from 'native-base'

import styles from './styles';

class RegisterScreen extends Component {

	constructor (props) {
		super(props);

		this.state = {
			user: {
				name: '',
				username: '',
				email: '',
				password: ''
			}
		}
	};

	_doRegister () {
		//
	};

	render () {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>

				<StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

				<Item style={styles.formGroup}>
					<Icon active name="person" />
					<Input placeholder="Your name" onChangeText={name => this.setState({ name })} />
				</Item>

				<Item style={styles.formGroup}>
					<Icon active name="person" />
					<Input placeholder="Username" onChangeText={username => this.setState({ username })} />
				</Item>

				<Item style={styles.formGroup}>
					<Icon active name="person" />
					<Input placeholder="Email address" onChangeText={email => this.setState({ email })} />
				</Item>

				<Item style={styles.formGroup}>
					<Icon name="unlock" />
					<Input placeholder="Minimum 6 characters" secureTextEntry onChangeText={password => this.setState({ password })} />
				</Item>

				<View style={styles.formGroup}>
					<Button onPress={this._doRegister} full light bordered rounded>
						<Text style={styles.lightText}>Create Account</Text>
					</Button>
				</View>

				<View style={styles.formGroup}>
					<Text onPress={() => navigate('Login')}>I have an Account</Text>
				</View>

			</View>
		);
	}

};

export default RegisterScreen;
