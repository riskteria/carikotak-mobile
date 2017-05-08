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

	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;

		return {
			headerTintColor: '#fff',
			headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)',
			headerRight: (<Button light transparent onPress={() => { state.params.doRegister(); }}>
							<Text style={styles.signInbutton}>Register</Text>
						</Button>)
		};
	}

	_doRegister () {
		const user = this.state.user;
	}

	componentWillMount () {
		this.props.navigation.setParams({
			doRegister: this._doRegister.bind(this)
		});
	}

	render () {

		return (
			<View style={styles.container}>

				<StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

				<View>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>NAME</Label>
						<Input onChangeText={name => this.setState({ user: { name } })} />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>USERNAME</Label>
						<Input onChangeText={username => this.setState({ user: { username } })} />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>EMAIL</Label>
						<Input onChangeText={email => this.setState({ user: { email } }) } />
					</Item>

					<Item floatingLabel style={ StyleSheet.flatten(styles.inputGroup) }>
						<Label style={ StyleSheet.flatten(styles.lightColor) }>PASSWORD</Label>
						<Input onChangeText={password => this.setState({ user: {password} })} secureTextEntry />
					</Item>

				</View>

			</View>
		);
	}

}

export default RegisterScreen;
