import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

class LoginScreen extends Component {

	static navigationOptions = {
		title: 'Login to Your Account'
	};

	getInitialState () {
		return {
			user: {
				email: '',
				password: ''
			}
		}
	};

	_doLogin() {
		//
	};

	render () {
		return (
			<View style={styles.container}>

				<View style={styles.formGroup}>
					<Text value={this.state.user.email} style={styles.controlLabel}>Email address</Text>
					<TextInput style={styles.formControl} />
				</View>

				<View style={styles.formGroup}>
					<Text value={this.state.user.password} style={styles.controlLabel}>Password</Text>
					<TextInput style={styles.formControl} />
				</View>

				<View style={styles.formGroup}>
					<Button onPress={this._doLogin} title="Login" />
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

}

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

export default LoginScreen;
