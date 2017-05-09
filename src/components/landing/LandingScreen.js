import React, { Component } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { Button, Icon } from 'native-base';

import styles from './styles';

class LandingScreen extends Component {

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>

				<StatusBar
					backgroundColor="#1ba39c"
					barStyle="dark-content" />

				<View style={styles.topContainer}>
					<Text onPress={() => navigate('Login')} style={styles.signInButton}>Masuk</Text>
				</View>

				<View style={styles.logoContainer}>
					<Image source={require('../../../images/logo-carikotak-putih.png')} style={styles.logo} />
				</View>

				<View style={styles.buttonContainer}>
					<Button full primary rounded iconRight>
						<Icon name="logo-facebook" style={{ position: 'absolute', left: 16 }} />
						<Text style={styles.lightText}>Masuk dengan Facebook</Text>
					</Button>
				</View>

				<View style={styles.buttonContainer}>
					<Button full danger rounded iconLeft>
						<Icon name="logo-google" style={{ position: 'absolute', left: 16 }} />
						<Text style={styles.lightText}>Masuk dengan Google</Text>
					</Button>
				</View>

				<View style={styles.buttonContainer}>
					<Button onPress={() => navigate('Register')} full light bordered rounded>
						<Text style={styles.lightText}>Daftar Akun Baru</Text>
					</Button>
				</View>
			</View>
		);
	}
}

export default LandingScreen;
