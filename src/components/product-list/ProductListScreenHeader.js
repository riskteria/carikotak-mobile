import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class ProductListScreenHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>Daftar Produk</Title>
        </Body>
        <Right>
          <Button transparent dark>
            <Icon name="md-search" />
          </Button>
          <Button transparent dark>
            <Icon name="md-options" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default ProductListScreenHeader;
