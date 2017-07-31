import React, { Component } from 'react';
import { Header, Body, Title, Button, Icon, Right } from 'native-base';

import colors from 'styles/_colors';

class UserScreenHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation, user } = this.props;
    const { navigate } = navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Body>
          <Title>
            {user.username}
          </Title>
        </Body>

        <Right>
          <Button transparent dark onPress={() => navigate('UserOption')}>
            <Icon name="md-more" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default UserScreenHeader;
