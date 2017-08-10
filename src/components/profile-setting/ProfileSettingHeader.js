import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class ProfileSettingHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _onSavePressed, navigation } = this.props;
    const { goBack } = navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>Profil</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => _onSavePressed()}>
            <Icon style={{ color: colors.colorAccent }} name="md-checkmark" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default ProfileSettingHeader;
