import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class ProfileSettingHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _onSavePressed, navigation, user } = this.props;
    const { goBack } = navigation;

    const renderSavedButton = () => {
      if (user.name) {
        return (
          <Button transparent onPress={() => _onSavePressed()}>
            <Icon style={{ color: colors.colorAccent }} name="md-checkmark" />
          </Button>
        );
      }

      return (
        <Button transparent>
          <Icon style={{ color: colors.colorGreyLight }} name="md-checkmark" />
        </Button>
      );
    };

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
          {renderSavedButton()}
        </Right>
      </Header>
    );
  }
}

export default ProfileSettingHeader;
