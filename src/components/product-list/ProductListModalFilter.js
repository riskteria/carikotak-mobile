import React, { Component } from 'react';
import { Modal } from 'react-native';
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Container,
  Content
} from 'native-base';

import colors from 'styles/_colors';

class ProductListModalFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modalFilterVisible, _onModalFilterToggled } = this.props;

    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalFilterVisible}
        onRequestClose={() => _onModalFilterToggled()}
      >
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left style={{ flex: 0.16 }}>
            <Button transparent dark onPress={() => _onModalFilterToggled()}>
              <Icon name="md-close" />
            </Button>
          </Left>
          <Body>
            <Text>Filter Modal</Text>
          </Body>
        </Header>
        <Container>
          <Content>
            <Text>Hello</Text>
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default ProductListModalFilter;
