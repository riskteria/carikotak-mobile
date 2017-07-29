import React, { Component } from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  Text
} from 'native-base';

import colors from 'styles/_colors';

class CreateStoryHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const { goBack } = navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>
            {navigation.state.params.type === 'jual'
              ? 'Jual Produk'
              : 'Cari Produk'}
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Text style={{ color: colors.colorAccent }}>Pasang</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default CreateStoryHeader;
