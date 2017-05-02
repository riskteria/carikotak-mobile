import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, StatusBar } from 'react-native';

import styles from './styles';

class RegisterScreen extends Component {

	_doRegister () {
		//
	};

	render () {
		return (
			<View style={styles.container}>

				<StatusBar
					backgroundColor="#1ba39c"
					barStyle="dark-content"
				/>

				<View style={styles.formGroup}>
					<Text style={styles.controlLabel}>Email address</Text>
					<TextInput style={styles.formControl} />
				</View>

				<View style={styles.formGroup}>
					<Text style={styles.controlLabel}>Password</Text>
					<TextInput style={styles.formControl} />
				</View>

				<View style={styles.formGroup}>
					<Button onPress={this._doRegister} title="Login" />
				</View>

				<View style={styles.formGroup}>
					<Text>Forgot Password</Text>
				</View>

				<View style={styles.formGroup}>
					<Text>Don't have an account?</Text>
					<Text>Create new account</Text>
				</View>

			</View>
		);
	}

};

export default RegisterScreen;
