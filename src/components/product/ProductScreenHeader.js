import React, { Component } from 'react';
import { Header, Left, Right, Title, Button, Icon, Body } from 'native-base';
import colors from 'styles/_colors';

class ProductScreenHeader extends Component {
  render() {
    const { goBack } = this.props.navigation;
    const { product } = this.props;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: colors.colorBlack }}>
            {product.name}
          </Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default ProductScreenHeader;
