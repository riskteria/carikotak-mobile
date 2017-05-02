/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class LandingScreen extends Component {
	static navigationOptions = {
		title: 'Carikotak'
	};
	render() {
		const { navigate } = this.props.navigation;

		return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Text>Carikotak</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button style={styles.buttonLogin} onPress={() => navigate('Login')} title="Login with email" />
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
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonLogin: {
		flex: 1,
		backgroundColor: '#000'
	}
});

export default LandingScreen;
