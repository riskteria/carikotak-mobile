import React, { Component } from 'react';
import { Share } from 'react-native';
import { Header, Body, Title, Button, Icon, Right } from 'native-base';

import { API_URL } from 'react-native-dotenv';
import colors from 'styles/_colors';

class ProfileScreenHeader extends Component {
  constructor(props) {
    super(props);

    this._onPressedShare = this._onPressedShare.bind(this);
  }

  _onPressedShare() {
    const { user } = this.props;
    const url = API_URL + '/user/' + user.username;

    Share.share(
      {
        message:
          'Lihat profil ' + user.name + ' di Carikotak sekarang juga! ' + url,
        url: url,
        title: user.name
      },
      {
        // Android only:
        dialogTitle: 'Bagikan ' + user.name,
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
      }
    );
  }

  render() {
    const { navigation, user } = this.props;
    const { navigate } = navigation;

    const RightButton = () =>
      <Right>
        <Button transparent dark onPress={() => this._onPressedShare()}>
          <Icon name="md-share" />
        </Button>
        <Button transparent dark onPress={() => navigate('ProfileOption')}>
          <Icon name="md-more" />
        </Button>
      </Right>;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 0 }}>
        <Body>
          <Title style={{ color: colors.colorDark }}>
            {user.username}
          </Title>
        </Body>
        {user ? <RightButton /> : <Right />}
      </Header>
    );
  }
}

export default ProfileScreenHeader;
