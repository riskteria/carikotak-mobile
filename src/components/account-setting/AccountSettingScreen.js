import React, { Component } from 'react';
import { ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

import AccountSettingHeader from './AccountSettingHeader';
import AccountSettingForm from './AccountSettingForm';

import styles from './styles';
import { API } from 'services/APIService';

class AccountSettingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: {
        current_password: '',
        new_password: '',
        confirm_password: ''
      }
    };

    this._onSavePressed = this._onSavePressed.bind(this);
    this._onChangetext = this._onChangetext.bind(this);
  }

  _onChangetext(propertyName, value) {
    switch (propertyName) {
      case 'current_password':
        this.setState({
          password: Object.assign({}, this.state.password, {
            current_password: value
          })
        });
        break;

      case 'new_password':
        this.setState({
          password: Object.assign({}, this.state.password, {
            new_password: value
          })
        });
        break;

      case 'confirm_password':
        this.setState({
          password: Object.assign({}, this.state.password, {
            confirm_password: value
          })
        });
        break;
    }
  }

  _onSavePressed() {
    const { password } = this.state;
    API()
      .put('api/me/change-password', password)
      .then(() => {
        ToastAndroid.show('Password berhasil diubah', ToastAndroid.SHORT);
        this._currentPasswordInput.setNativeProps({ text: '' });
        this._newPasswordInput.setNativeProps({ text: '' });
        this._confirmPasswordInput.setNativeProps({ text: '' });
      })
      .catch(err => {
        ToastAndroid.show(
          `Error ${JSON.stringify(err.response.data.message)}`,
          ToastAndroid.SHORT
        );
      });
  }

  render() {
    const { password } = this.state;
    const { navigation } = this.props;

    return (
      <Container style={StyleSheet.flatten(styles.mainContainer)}>
        <AccountSettingHeader
          navigation={navigation}
          password={password}
          _onSavePressed={this._onSavePressed}
        />

        <ScrollView>
          <AccountSettingForm
            navigation={navigation}
            password={password}
            _onChangetext={this._onChangetext}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default AccountSettingScreen;
