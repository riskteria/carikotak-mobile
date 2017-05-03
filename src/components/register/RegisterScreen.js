import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Input, Button, Item, Icon } from 'native-base';

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
		};
	}

	static navigationOptions = {
		headerRight: (<Button light transparent onPress={this._doRegister}>
						<Text style={styles.signInbutton}>Register</Text>
					</Button>)
	}

	_doRegister () {
		//
	}

	render () {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>

				<StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

				<Text>Name</Text>
				<Item style={styles.formGroup}>
					<Input onChangeText={name => this.setState({ name })} />
				</Item>

				<Text>Username</Text>
				<Item style={styles.formGroup}>
					<Input onChangeText={username => this.setState({ username })} />
				</Item>

				<Text>Email</Text>
				<Item style={styles.formGroup}>
					<Input onChangeText={email => this.setState({ email })} />
				</Item>

				<Text>Password</Text>
				<Item style={styles.formGroup}>
					<Input secureTextEntry onChangeText={password => this.setState({ password })} />
					<Icon name="unlock" />
				</Item>

				<View style={styles.formGroup}>
					<Text onPress={() => navigate('Login')}>I have an Account</Text>
				</View>

			</View>
		);
	}

}

export default RegisterScreen;
