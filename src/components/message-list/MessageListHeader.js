import React, { Component } from 'react';
import { Header, Body, Title, Right, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class MessageListHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Header style={{ backgroundColor: '#fff', elevation: 1 }}>
        <Body style={{ alignItems: 'flex-start', flex: 1 }}>
          <Title style={{ color: colors.colorDark }}>Pesan</Title>
        </Body>
        <Right style={{ position: 'absolute', right: 8 }}>
          <Button transparent dark onPress={() => navigate('Notification')}>
            <Icon name="ios-notifications-outline" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default MessageListHeader;
