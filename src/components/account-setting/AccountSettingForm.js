import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Text, Content, Item, Input, Button } from 'native-base';

import { API } from 'services/APIService';

class AccountSettingForm extends Component {
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
    return (
      <Content style={{ padding: 16, margin: 0 }}>
        <Item>
          <Input
            ref={component => (this._currentPasswordInput = component)}
            onChangeText={this._onChangetext.bind(this, 'current_password')}
            placeholder="Kata sandi"
          />
        </Item>
        <Item ic>
          <Input
            ref={component => (this._newPasswordInput = component)}
            onChangeText={this._onChangetext.bind(this, 'new_password')}
            placeholder="Kata sandi baru"
          />
        </Item>
        <Item>
          <Input
            ref={component => (this._confirmPasswordInput = component)}
            onChangeText={this._onChangetext.bind(this, 'confirm_password')}
            placeholder="Konfirmasi kata sandi"
          />
        </Item>
        <Button block onPress={() => this._onSavePressed()}>
          <Text>Ubah Kata Sandi</Text>
        </Button>
      </Content>
    );
  }
}

export default AccountSettingForm;
