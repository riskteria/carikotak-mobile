import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Header,
  Title,
  Body
} from 'native-base';

import colors from 'styles/_colors';

class CreateScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Container>
        <Header style={{ backgroundColor: '#fff', elevation: 1 }}>
          <Body style={{ alignItems: 'flex-start', flex: 1 }}>
            <Title style={{ color: colors.colorDark }}>Kiriman Baru</Title>
          </Body>
        </Header>
        <Content>
          <Button
            block
            onPress={() => navigate('CreateProduct', { type: 'jual' })}
          >
            <Text>Jual Produk</Text>
          </Button>
          <Button
            block
            onPress={() => navigate('CreateProduct', { type: 'cari' })}
          >
            <Text>Cari Produk</Text>
          </Button>
          <Button block onPress={() => navigate('CreateStory')}>
            <Text>Tambah Cerita</Text>
          </Button>
          <Button
            block
            onPress={() => navigate('User', { username: 'administrator' })}
          >
            <Text>Visit User Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CreateScreen;
