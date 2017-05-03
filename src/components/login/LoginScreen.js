import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Button, Item, Label, Icon, Input } from 'native-base';

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
					barStyle="dark-content" />

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>Email</Label>
						<Input />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>Password</Label>
						<Input secureTextEntry />
					</Item>

				</View>

				<View style={styles.formGroup}>
					<Text onPress={() => navigate('Forgot')} style={styles.forgotPassword}>Forgot Password?</Text>
				</View>

			</View>
		);
	}

}

export default LoginScreen;
