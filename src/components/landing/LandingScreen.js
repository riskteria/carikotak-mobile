import React, { Component } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { Button } from 'native-base';

import styles from './styles';
import logo from 'images/logo-carikotak-putih.png';

class LandingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

        <View style={styles.topContainer}>
          <Text onPress={() => navigate('Login')} style={styles.signInButton}>
            Masuk
          </Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('Register')}
            full
            light
            bordered
            rounded
          >
            <Text style={styles.lightText}>Daftar Akun Baru</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default LandingScreen;
