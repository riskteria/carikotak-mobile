import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class AccountSettingHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, _onSavePressed, password } = this.props;
    const { goBack } = navigation;

    const renderSaveButton = () => {
      if (
        password.current_password &&
        password.new_password &&
        password.new_password === password.confirm_password
      ) {
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
          <Title style={{ color: colors.colorBlack }}>Akun</Title>
        </Body>
        <Right>
          {renderSaveButton()}
        </Right>
      </Header>
    );
  }
}

export default AccountSettingHeader;
