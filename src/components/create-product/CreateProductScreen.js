import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class CreateProductScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Text>
          {navigation.state.params.type === 'jual'
            ? 'Jual Produk'
            : 'Cari Produk'}
        </Text>
      </Container>
    );
  }
}

export default CreateProductScreen;
