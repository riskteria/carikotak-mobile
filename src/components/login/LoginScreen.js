import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Button, Item, Label, Input, Text } from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

class LoginScreen extends Component {

	constructor (props) {
		super(props);

		this.state = {
			user: {
				email: '',
				password: ''
			},
			isLoading: false
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTintColor: '#fff',
			headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)'
		};
	}

	_doLogin () {
		// const user = this.state.user;
		this.state.isLoading = true;
		this.props.navigation.navigate('Main');
	}

	render () {
		const { navigate } = this.props.navigation;

		return (
			<ScrollView style={styles.container}>

				<StatusBar
					backgroundColor="#1ba39c"
					barStyle="dark-content" />

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>EMAIL</Label>
						<Input onChangeText={email => this.setState({ user: { email } })} />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>KATA SANDI</Label>
						<Input onChangeText={password => this.setState({ user: {password} })} secureTextEntry />
					</Item>

				</View>

				<Button light rounded block onPress={() => { this._doLogin(); }}>
					<Text style={{ color: colors.colorAccent }}>Login</Text>
				</Button>

				<View style={styles.formGroup}>
					<Text onPress={() => navigate('Forgot')} style={StyleSheet.flatten(styles.forgotPassword)}>Lupa Kata Sandi?</Text>
				</View>

			</ScrollView>
		);
	}

}

export default LoginScreen;
