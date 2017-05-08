import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Item, Label, Input } from 'native-base';

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
		const { state } = navigation;

		return {
			headerTintColor: '#fff',
			headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)',
			headerRight: (<Button light transparent onPress={() => { state.params.sendResetLink(); }}>
							<Text style={styles.signInbutton}>Send Reset Link</Text>
						</Button>)
		};
	}

	_sendResetLink () {
		const user = this.state.user;
	}

	componentWillMount () {
		this.props.navigation.setParams({
			sendResetLink: this._sendResetLink.bind(this)
		});
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
						<Input onChangeText={email => this.setState({ user: {email} })} />
					</Item>

				</View>

			</View>
		);
	}
}

export default ForgotScreen;
