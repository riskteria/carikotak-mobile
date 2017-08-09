import React, { Component } from 'react';
import { StatusBar, StyleSheet, ToastAndroid } from 'react-native';
import {
  Input,
  Button,
  Text,
  Item,
  Label,
  Content,
  Container
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import RNRestart from 'react-native-restart';

import colors from 'styles/_colors';
import styles from './styles';

import { API } from 'services/APIService';
import { onSignedIn } from 'services/AuthHandler';

import RegisterScreenHeader from './RegisterScreenHeader';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        username: '',
        email: '',
        password: ''
      },
      isLoading: false
    };

    this._onRegisterPressed = this._onRegisterPressed.bind(this);
  }

  _onRegisterPressed() {
    const { user } = this.state;

    this.setState({ isLoading: true });

    API()
      .post('api/register', user)
      .then(res => {
        this.setState({ isLoading: false });
        onSignedIn(res.data.access_token, res.data.refresh_token)
          .then(() => {
            this.setState({ isLoading: false });
            RNRestart.Restart();
          })
          .catch(() => {
            this.setState({ isLoading: false });
            ToastAndroid.show('unable to save the key', ToastAndroid.SHORT);
          });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        ToastAndroid.show(
          'Error ' + err.response.data.message,
          ToastAndroid.SHORT
        );
      });
  }

  _onChangeText(propertyName, value) {
    switch (propertyName) {
      case 'name':
        this.setState({
          user: Object.assign({}, this.state.user, { name: value })
        });
        break;
      case 'username':
        this.setState({
          user: Object.assign({}, this.state.user, { username: value })
        });
        break;
      case 'email':
        this.setState({
          user: Object.assign({}, this.state.user, { email: value })
        });
        break;
      case 'password':
        this.setState({
          user: Object.assign({}, this.state.user, { password: value })
        });
        break;
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor="#1ba39c" barStyle="dark-content" />

        <RegisterScreenHeader navigation={navigation} />

        <Spinner
          visible={this.state.isLoading}
          textContent={'please wait'}
          textStyle={{ color: '#FFF' }}
        />

        <Content style={styles.insideContainer}>
          <Item floatingLabel style={StyleSheet.flatten(styles.inputGroup)}>
            <Label style={StyleSheet.flatten(styles.lightColor)}>
              Nama Lengkap
            </Label>
            <Input onChangeText={this._onChangeText.bind(this, 'name')} />
          </Item>

          <Item floatingLabel style={StyleSheet.flatten(styles.inputGroup)}>
            <Label style={StyleSheet.flatten(styles.lightColor)}>
              Username
            </Label>
            <Input onChangeText={this._onChangeText.bind(this, 'username')} />
          </Item>

          <Item floatingLabel style={StyleSheet.flatten(styles.inputGroup)}>
            <Label style={StyleSheet.flatten(styles.lightColor)}>Email</Label>
            <Input onChangeText={this._onChangeText.bind(this, 'email')} />
          </Item>

          <Item floatingLabel style={StyleSheet.flatten(styles.inputGroup)}>
            <Label style={StyleSheet.flatten(styles.lightColor)}>
              Kata Sandi
            </Label>
            <Input
              onChangeText={this._onChangeText.bind(this, 'password')}
              secureTextEntry
            />
          </Item>

          <Button
            light
            rounded
            block
            onPress={() => {
              this._onRegisterPressed();
            }}
          >
            <Text style={{ color: colors.colorAccent }}>Buat akun</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default RegisterScreen;
