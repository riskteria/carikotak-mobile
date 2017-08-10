import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Item, Input, Icon } from 'native-base';

import styles from './styles';
import colors from 'styles/_colors';

class AccountSettingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _onChangetext } = this.props;

    return (
      <Content style={{ padding: 16, margin: 0 }}>
        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon style={StyleSheet.flatten(styles.inputIcon)} name="md-unlock" />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            ref={component => (this._currentPasswordInput = component)}
            onChangeText={value => {
              _onChangetext('current_password', value);
            }}
            placeholder="Kata sandi"
            style={StyleSheet.flatten(styles.inputText)}
          />
        </Item>

        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon style={StyleSheet.flatten(styles.inputIcon)} name="md-unlock" />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            ref={component => (this._newPasswordInput = component)}
            onChangeText={value => {
              _onChangetext('new_password', value);
            }}
            placeholder="Kata sandi baru"
            style={StyleSheet.flatten(styles.inputText)}
          />
        </Item>

        <Item style={StyleSheet.flatten(styles.inputItem)}>
          <Icon style={StyleSheet.flatten(styles.inputIcon)} name="md-unlock" />
          <Input
            placeholderTextColor={colors.colorGreyLight}
            ref={component => (this._confirmPasswordInput = component)}
            onChangeText={value => {
              _onChangetext('confirm_password', value);
            }}
            placeholder="Konfirmasi kata sandi"
            style={StyleSheet.flatten(styles.inputText)}
          />
        </Item>
      </Content>
    );
  }
}

export default AccountSettingForm;
