import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Input, Button, Text, Item, Label } from 'native-base';

import { API } from 'services/APIService';

import colors from 'styles/_colors';
import styles from './styles';
import validate from './validator';

class RegisterScreen extends Component {

	constructor (props) {
		super(props);

		this.state = {
			user: {
				name: '',
				username: '',
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

	_doRegister () {
		const user = this.state.user;
		const validation = validate(user);

		this.state.isLoading = true;

		API.post('register', user)
			.then((response) => {
				this.state.isLoading = false;
			})
			.catch((error) => {
				this.state.isLoading = false;
			})


	}

	render () {
		return (
			<ScrollView style={styles.container}>

				<StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>NAMA</Label>
						<Input onChangeText={name => this.setState({ user: { name } })} />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>NAMA pENGGUNA</Label>
						<Input onChangeText={username => this.setState({ user: { username } })} />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>EMAIL</Label>
						<Input onChangeText={email => this.setState({ user: { email } }) } />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>KATA SANDI</Label>
						<Input onChangeText={password => this.setState({ user: {password} })} secureTextEntry />
					</Item>

					<Button light rounded block onPress={() => { this._doRegister(); }}>
						<Text style={{ color: colors.colorAccent }}>Buat akun</Text>
					</Button>

				</View>

			</ScrollView>
		);
	}

}

export default RegisterScreen;
