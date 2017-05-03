import React, { Component } from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { Button, Item, Label, Icon, Input, Form } from 'native-base';

import styles from './styles';

class LoginScreen extends Component {

	static navigationOptions = {
		headerRight: (<Button light transparent onPress={this._doLogin}>
						<Text style={styles.signInbutton}>Login</Text>
					</Button>)
	}

	_doLogin() {
		//
	}

	render () {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>

				<StatusBar
					backgroundColor="#1ba39c"
					barStyle="dark-content"
				/>

				<Form>

					<Item floatingLabel>
						<Label>Email</Label>
						<Input />
					</Item>

					<Item floatingLabel>
						<Label>Password</Label>
						<Input secureTextEntry />
					</Item>

				</Form>

				<View style={styles.formGroup}>
					<Text>Forgot Password</Text>
				</View>

				<View style={styles.formGroup}>
					<Text onPress={() => navigate('Register')}>Don't have an account?</Text>
				</View>

			</View>
		);
	}

}

export default LoginScreen;
