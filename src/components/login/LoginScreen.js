import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { Button, Item, Label, Input, Text } from 'native-base';
import {
  OAUTH_GRANT_TYPE,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET
} from 'react-native-dotenv';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './styles';
import colors from 'styles/_colors';

import { API } from 'services/APIService';
import { onSignedIn } from 'services/AuthHandler';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        password: '',
        grant_type: OAUTH_GRANT_TYPE,
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET
      },
      isLoading: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTintColor: '#fff',
      headerPressColorAndroid: 'rgba(255, 255, 255, 0.5)'
    };
  };

  _onPressLogin() {
    const { user } = this.state;
    const { updateAccessToken } = this.props;

    this.setState({ isLoading: true });

    API.post('oauth/token', user)
      .then(response => {
        onSignedIn(response.data.access_token, response.data.refresh_token)
          .then(res => {
            updateAccessToken(response.data.access_token);
            this.setState({ isLoading: false });
            this.props.navigation.navigate('SignedIn');
          })
          .catch(() => {
            this.setState({ isLoading: false });
            ToastAndroid.show('unable to save the key', ToastAndroid.SHORT);
          });
      })
      .catch(error => {
        ToastAndroid.show('Credential did not match', ToastAndroid.SHORT);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

        <Spinner
          visible={this.state.isLoading}
          textContent={'signing in'}
          textStyle={{ color: '#FFF' }}
        />

        <View>
          <Item floatingLabel style={StyleSheet.flatten(styles.inputGroup)}>
            <Label style={StyleSheet.flatten(styles.lightColor)}>EMAIL</Label>
            <Input
              onChangeText={username =>
                this.setState({
                  user: Object.assign({}, this.state.user, { username })
                })}
            />
          </Item>

          <Item floatingLabel style={StyleSheet.flatten(styles.inputGroup)}>
            <Label style={StyleSheet.flatten(styles.lightColor)}>
              KATA SANDI
            </Label>
            <Input
              onChangeText={password =>
                this.setState({
                  user: Object.assign({}, this.state.user, { password })
                })}
              secureTextEntry
            />
          </Item>
        </View>

        <Button
          light
          rounded
          block
          onPress={() => {
            this._onPressLogin();
          }}
        >
          <Text style={{ color: colors.colorAccent }}>Login</Text>
        </Button>

        <View style={styles.formGroup}>
          <Text
            onPress={() => navigate('Forgot')}
            style={StyleSheet.flatten(styles.forgotPassword)}
          >
            Lupa Kata Sandi?
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;
