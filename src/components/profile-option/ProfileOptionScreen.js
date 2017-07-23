import React, { Component } from 'react';
import { ToastAndroid, ScrollView } from 'react-native';
import { Container, Button, Text, Header, Left, Icon } from 'native-base';

import { onSignedOut } from 'services/AuthHandler';
import colors from 'styles/_colors';

class ProfileOptionScreen extends Component {
  constructor(props) {
    super(props);
  }

  _onPressLogout() {
    onSignedOut()
      .then(() => {
        this.props.navigation.navigate('SignedOut');
      })
      .catch(() => {
        ToastAndroid.show('Could not signed out', ToastAndroid.SHORT);
      });
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left>
            <Button transparent dark onPress={() => goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
        </Header>

        <ScrollView>
          <Button onPress={() => navigate('AccountSetting')}>
            <Text>Account Settings</Text>
          </Button>
          <Button onPress={() => navigate('ProfileSetting')}>
            <Text>Profile Settings</Text>
          </Button>
          <Button
            onPress={() => {
              this._onPressLogout();
            }}
          >
            <Text>Logout</Text>
          </Button>
        </ScrollView>
      </Container>
    );
  }
}

export default ProfileOptionScreen;
