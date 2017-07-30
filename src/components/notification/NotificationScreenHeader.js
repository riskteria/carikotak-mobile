import React, { Component } from 'react';
import { Header, Left, Body, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class ProductListScreenHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const { goBack } = navigation;

    return (
      <Header style={{ backgroundColor: '#fff', elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorDark }}>Pemberitahuan</Title>
        </Body>
      </Header>
    );
  }
}

export default ProductListScreenHeader;
