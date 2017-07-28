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

class ProductListModalSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modalSearchVisible, _onModalSearchToggled } = this.props;

    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalSearchVisible}
        onRequestClose={() => _onModalSearchToggled()}
      >
        <Header style={{ backgroundColor: colors.colorLight, elevation: 1 }}>
          <Left style={{ flex: 0.16 }}>
            <Button transparent dark onPress={() => _onModalSearchToggled()}>
              <Icon name="md-close" />
            </Button>
          </Left>
          <Body>
            <Text>Search Modal</Text>
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

export default ProductListModalSearch;
