import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';

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
					<Text style={styles.lightText}>Continue With Facebook</Text>
				</Button>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Login')} full danger rounded iconLeft>
					<Icon name="logo-google" style={{ position: 'absolute', left: 16 }} />
					<Text style={styles.lightText}>Continue With Google</Text>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1ba39c',
		padding: 16
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginTop: 8,
		marginBottom: 8
	},
	lightText: {
		color: '#FFFFFF',
		fontSize: 18
	}
});

export default LandingScreen;
