import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import styles from './styles';

class FacebookLoginService extends Component {
  constructor(props) {
    super(props);

    this._onFacebookButtonPressed = this._onFacebookButtonPressed.bind(this);
    this._getFacebookUserData = this._getFacebookUserData.bind(this);

    this.state = {
      user: null
    };
  }

  _getFacebookUserData(token) {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json });
      })
      .catch(() => {
        //
      });
  }

  _onFacebookButtonPressed() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      res => {
        if (res.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const { accessToken } = data;
            this._getFacebookUserData(accessToken);
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          full
          primary
          rounded
          iconRight
          onPress={() => this._onFacebookButtonPressed()}
        >
          <Icon
            name="logo-facebook"
            style={{ position: 'absolute', left: 16 }}
          />
          <Text style={styles.lightText}>Masuk dengan Facebook</Text>
        </Button>
      </View>
    );
  }
}

export default FacebookLoginService;
