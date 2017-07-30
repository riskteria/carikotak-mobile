import React, { Component } from 'react';
import { Header, Left, Body, Title, Button, Icon } from 'native-base';

import colors from 'styles/_colors';

class ProductListScreenHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, channel } = this.props;
    const { goBack, navigate } = navigation;

    return (
      <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
        <Left>
          <Button transparent dark onPress={() => goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>

        <Body
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center'
          }}
        >
          <Title
            style={{ color: colors.colorDark }}
            onPress={() => alert('navigate')}
          >
            {channel.id ? channel.communicant.name : ''}
          </Title>
        </Body>
      </Header>
    );
  }
}

export default ProductListScreenHeader;
