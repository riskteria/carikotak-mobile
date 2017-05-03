import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Input, Button, Item, Label } from 'native-base';

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

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>NAME</Label>
						<Input />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>USERNAME</Label>
						<Input />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>EMAIL</Label>
						<Input />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>PASSWORD</Label>
						<Input secureTextEntry />
					</Item>

				</View>

			</View>
		);
	}

}

export default RegisterScreen;
