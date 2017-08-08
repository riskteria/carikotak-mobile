import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { List, ListItem, Left, Body, Icon, Text } from 'native-base';

import { onSignedOut } from 'services/AuthHandler';

import RNRestart from 'react-native-restart';

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
        <ListItem
          icon
          onPress={() => navigate('AccountSetting')}
          style={{ paddingTop: 32, paddingBottom: 32 }}
        >
          <Left>
            <Icon name="md-finger-print" />
          </Left>
          <Body>
            <Text>Pengaturan Akun</Text>
          </Body>
        </ListItem>

        <ListItem
          icon
          onPress={() => navigate('ProfileSetting')}
          style={{ paddingTop: 32, paddingBottom: 32 }}
        >
          <Left>
            <Icon name="md-person" />
          </Left>
          <Body>
            <Text>Edit Profil</Text>
          </Body>
        </ListItem>

        <ListItem
          icon
          onPress={() => navigate('Help')}
          style={{ paddingTop: 32, paddingBottom: 32 }}
        >
          <Left>
            <Icon name="md-help" />
          </Left>
          <Body>
            <Text>Bantuan</Text>
          </Body>
        </ListItem>

        <ListItem
          icon
          onPress={() => navigate('About')}
          style={{ paddingTop: 32, paddingBottom: 32 }}
        >
          <Left>
            <Icon name="md-information-circle" />
          </Left>
          <Body>
            <Text>Tentang</Text>
          </Body>
        </ListItem>

        <ListItem
          icon
          onPress={() => this._onPressLogout()}
          style={{ paddingTop: 32, paddingBottom: 32 }}
        >
          <Left>
            <Icon name="md-power" />
          </Left>
          <Body>
            <Text>Keluar</Text>
          </Body>
        </ListItem>
      </List>
    );
  }
}

export default ProfileOptionsList;
