import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Button } from 'native-base';

class LandingScreen extends Component {
	static navigationOptions = {
		title: 'Carikotak'
	};
	render() {
		const { navigate } = this.props.navigation;

		return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Text>Carikotax</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Login')} full primary>
					<Text>Continue With Facebook</Text>
				</Button>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Login')} full error>
					<Text>Continue With Google</Text>
				</Button>
			</View>

			<View style={styles.buttonContainer}>
				<Button onPress={() => navigate('Login')} full light rounded>
					<Text style={styles.accentText}>Login With Email</Text>
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
	accentText: {
		color: '#1ba39c',
		fontSize: 16
	}
});

export default LandingScreen;
