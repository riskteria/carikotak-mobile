import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Item, Label, Input } from 'native-base';

import styles from './styles';

class ForgotScreen extends Component {

	static navigationOptions = {
		headerTintColor: '#fff',
		headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)',
		headerRight: (<Button light transparent onPress={this._doLogin}>
						<Text style={styles.signInbutton}>Send Reset Link</Text>
					</Button>)
	}

	_doLogin () {
		//
	}

	render () {
		return (
			<View style={styles.container}>

				<View style={styles.inputInstruction}>
					<Text style={styles.inputInstructionText}>Enter your email address so we can send reset instruction to your email.</Text>
				</View>

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>EMAIL ADDRESS</Label>
						<Input />
					</Item>

				</View>

			</View>
		);
	}
}

export default ForgotScreen;
