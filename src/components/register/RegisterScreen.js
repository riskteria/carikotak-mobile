import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import { Input, Button, Text, Item, Label } from 'native-base';
import store from 'react-native-simple-store';
import Spinner from 'react-native-loading-spinner-overlay';

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

		this.setState({ isLoading: true });

		API.post('oauth/register', user)
			.then((response) => {
				this.state.isLoading = false;

				store
					.save('AUTHORIZATION_KEY', response.data.access_token)
					.then((res) => {
						this.setState({ isLoading: false });
						this.props.navigation.navigate('Main');
					})
					.catch((err) => {
						this.setState({ isLoading: false });
						ToastAndroid.show('unable to save the key', ToastAndroid.SHORT);
					});
			})
			.catch((error) => {
				this.setState({ isLoading: false });
				ToastAndroid.show('Credential did not match', ToastAndroid.SHORT);
			});

	}

	render () {
		return (
			<ScrollView style={styles.container}>

				<StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

				<Spinner visible={this.state.isLoading} textContent={'please wait'} textStyle={{color: '#FFF'}} />

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
