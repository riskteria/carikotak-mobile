import React, { Component } from 'react';
import {
  ToastAndroid,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { List, Item, Body, Text } from 'native-base';
import RNRestart from 'react-native-restart';

import { onSignedOut } from 'services/AuthHandler';

import styles from './styles';
import colors from 'styles/_colors';

class ProfileOptionsList extends Component {
  constructor(props) {
    super(props);

    this._onPressLogout = this._onPressLogout.bind(this);
  }

  _onPressLogout() {
    const { updateToken } = this.props;

    onSignedOut()
      .then(() => {
        updateToken(null);
        RNRestart.Restart();
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show('Could not signed out', ToastAndroid.SHORT);
      });
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <List>
        <Item style={StyleSheet.flatten(styles.itemList)}>
          <TouchableNativeFeedback
            onPress={() => {
              navigate('AccountSetting');
            }}
            background={TouchableNativeFeedback.Ripple(colors.colorAccent)}
          >
            <Body style={StyleSheet.flatten(styles.listItem)}>
              <Text style={StyleSheet.flatten(styles.optionText)}>
                Pengaturan Akun
              </Text>
            </Body>
          </TouchableNativeFeedback>
        </Item>

        <Item style={StyleSheet.flatten(styles.itemList)}>
          <TouchableNativeFeedback
            onPress={() => {
              navigate('ProfileSetting');
            }}
            background={TouchableNativeFeedback.Ripple(colors.colorAccent)}
          >
            <Body style={StyleSheet.flatten(styles.listItem)}>
              <Text style={StyleSheet.flatten(styles.optionText)}>
                Ubah Profil
              </Text>
            </Body>
          </TouchableNativeFeedback>
        </Item>

        <Item style={StyleSheet.flatten(styles.itemList)}>
          <TouchableNativeFeedback
            onPress={() => {
              navigate('Help');
            }}
            background={TouchableNativeFeedback.Ripple(colors.colorAccent)}
          >
            <Body style={StyleSheet.flatten(styles.listItem)}>
              <Text style={StyleSheet.flatten(styles.optionText)}>Bantuan</Text>
            </Body>
          </TouchableNativeFeedback>
        </Item>

        <Item style={StyleSheet.flatten(styles.itemList)}>
          <TouchableNativeFeedback
            onPress={() => {
              navigate('About');
            }}
            background={TouchableNativeFeedback.Ripple(colors.colorAccent)}
          >
            <Body style={StyleSheet.flatten(styles.listItem)}>
              <Text style={StyleSheet.flatten(styles.optionText)}>Tentang</Text>
            </Body>
          </TouchableNativeFeedback>
        </Item>

        <Item style={StyleSheet.flatten(styles.itemList)}>
          <TouchableNativeFeedback
            onPress={() => {
              this._onPressLogout();
            }}
            background={TouchableNativeFeedback.Ripple(colors.colorAccent)}
          >
            <Body style={StyleSheet.flatten(styles.listItem)}>
              <Text style={StyleSheet.flatten(styles.optionText)}>Keluar</Text>
            </Body>
          </TouchableNativeFeedback>
        </Item>
      </List>
    );
  }
}

export default ProfileOptionsList;
