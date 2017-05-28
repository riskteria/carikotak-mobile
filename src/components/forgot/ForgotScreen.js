import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Text, Item, Label, Input } from 'native-base';

import colors from 'styles/_colors';
import styles from './styles';

class ForgotScreen extends Component {

	constructor (props) {
		super(props);

		this.state = {
			user: {
				email: ''
			}
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTintColor: '#fff',
			headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)'
		};
	}

	_sendResetLink () {
		const user = this.state.user;
	}

	render () {
		return (
			<ScrollView style={styles.container}>

				<View style={styles.inputInstruction}>
					<Text style={StyleSheet.flatten(styles.inputInstructionText)}>
						Masukkan alamat email yang anda gunakan untuk masuk ke akun Carikotak
					</Text>
				</View>

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>ALAMAT EMAIL</Label>
						<Input onChangeText={email => this.setState({ user: {email} })} />
					</Item>

					<Button onPress={() => { this._sendResetLink(); }} light rounded block >
						<Text style={{ color: colors.colorAccent }}>Atur ulang kata sandi</Text>
					</Button>

				</View>

			</ScrollView>
		);
	}
}

export default ForgotScreen;
