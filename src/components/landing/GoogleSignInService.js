import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { GoogleSignin } from 'react-native-google-signin';

import { GOOGLE_CLIENT_ID } from 'react-native-dotenv';

import styles from './styles';

class GoogleSigninService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this._onGoogleButtonPressed = this._onGoogleButtonPressed.bind(this);
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: GOOGLE_CLIENT_ID,
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({ user });
    } catch (err) {
      console.log('Play services error', err.code, err.message);
    }
  }

  _onGoogleButtonPressed() {
    GoogleSignin.signIn()
      .then(user => {
        console.log(user);
        this.setState({ user });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          full
          danger
          rounded
          iconLeft
          onPress={() => this._onGoogleButtonPressed()}
        >
          <Icon name="logo-google" style={{ position: 'absolute', left: 16 }} />
          <Text style={styles.lightText}>Masuk dengan Google</Text>
        </Button>
      </View>
    );
  }
}

export default GoogleSigninService;
