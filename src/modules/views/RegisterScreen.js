import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	StatusBar
} from 'react-native';

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1ba39c'
	},
	formGroup: {
		flex: 1
	},
	controlLabel: {
		flex: 1
	},
	formControl: {
		flex: 1
	},

});

export default RegisterScreen;
