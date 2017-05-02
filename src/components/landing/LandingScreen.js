import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';

import styles from './styles';

class LandingScreen extends Component {

	render() {
		const { navigate } = this.props.navigation;

		return (
		<View style={styles.container}>

			<StatusBar
				backgroundColor="#1ba39c"
				barStyle="dark-content"
			/>
			<View style={styles.logoContainer}>
				<Text>Carikotax</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Login')} full primary rounded iconRight>
					<Icon name="logo-facebook" style={{ position: 'absolute', left: 16 }} />
					<Text style={styles.lightText}>Continue with Facebook</Text>
				</Button>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Login')} full danger rounded iconLeft>
					<Icon name="logo-google" style={{ position: 'absolute', left: 16 }} />
					<Text style={styles.lightText}>Continue with Google</Text>
				</Button>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Register')} full light bordered rounded>
					<Text style={styles.lightText}>Create New Account</Text>
				</Button>
			</View>
		</View>
		);
	}
}

export default LandingScreen;
